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

  // Validate
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

    if (!result.success) {
      throw new Error(result.message || "Failed to send message");
    }

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Something went wrong",
      formData: validationPayload,
    };
  }
}
