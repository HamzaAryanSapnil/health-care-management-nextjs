/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { contactFormSchema } from "@/zod/contact.validation";

export async function sendContactMessage(_prevState: any, formData: FormData) {
  // Build validation payload
  const validationPayload = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  // Frontend validation
  const validatedPayload = zodValidator(validationPayload, contactFormSchema);

  if (!validatedPayload.success && validatedPayload.errors) {
    return {
      success: false,
      message: "Validation failed",
      formData: validationPayload,
      errors: validatedPayload.errors,
    };
  }

  try {
    // API Call to backend
    const response = await serverFetch.post("/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: validationPayload.name,
        email: validationPayload.email,
        subject: validationPayload.subject,
        message: validationPayload.message,
      }),
    });

    const result = await response.json();

    // Handle backend validation errors
    if (!result.success && result.error?.issues) {
      // Convert backend error format to frontend format
      const errors = result.error.issues.map((issue: any) => {
        // Extract field name from path array (e.g., ["body", "email"] -> "email")
        const fieldName = Array.isArray(issue.path)
          ? issue.path[issue.path.length - 1]
          : issue.path?.[0] || "";

        return {
          field: String(fieldName),
          message: issue.message || "Validation error",
        };
      });

      return {
        success: false,
        message: result.message || "Validation failed",
        formData: validationPayload,
        errors: errors,
      };
    }

    // Handle server errors (no issues array)
    if (!result.success) {
      return {
        success: false,
        message: result.message || "Failed to send message",
        formData: validationPayload,
      };
    }

    // Success response
    return {
      success: true,
      message:
        result.message ||
        "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Something went wrong",
      formData: validationPayload,
    };
  }
}
