"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/services/contact/contact.service";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useActionState } from "react";
import InputFieldError from "@/components/shared/InputFieldError";

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    null
  );

  return (
    <form action={formAction} className="space-y-4">
      {state?.success && (
        <Alert className="border-green-500 bg-green-50 text-green-900">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      {state?.success === false && state.message && (
        <Alert variant="destructive">
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <Field>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          defaultValue={state?.formData?.name || ""}
          required
          disabled={isPending}
        />
        <InputFieldError field="name" state={state} />
      </Field>

      <Field>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          defaultValue={state?.formData?.email || ""}
          required
          disabled={isPending}
        />
        <InputFieldError field="email" state={state} />
      </Field>

      <Field>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          defaultValue={state?.formData?.subject || ""}
          required
          disabled={isPending}
        />
        <InputFieldError field="subject" state={state} />
      </Field>

      <Field>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          defaultValue={state?.formData?.message || ""}
          required
          disabled={isPending}
        />
        <InputFieldError field="message" state={state} />
      </Field>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
