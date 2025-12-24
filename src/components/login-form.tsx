"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const fillCredentials = (
    userEmail: string | undefined,
    userPassword: string | undefined
  ) => {
    if (userEmail && userPassword) {
      setEmail(userEmail);
      setPassword(userPassword);
      toast.success("Credentials filled! Click Login to continue.");
    } else {
      toast.error("Demo credentials not configured.");
    }
  };

  return (
    <form action={formAction}>
      {redirect && <input type="hidden" name="redirect" value={redirect} />}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              //   required
            />

            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              //   required
            />
            <InputFieldError field="password" state={state} />
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Logging in..." : "Login"}
            </Button>

            {/* Demo Login Buttons */}
            <div className="mt-4 space-y-2">
              <p className="text-xs text-muted-foreground text-center mb-2">
                Demo Credentials (for testing):
              </p>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    fillCredentials(
                      process.env.NEXT_PUBLIC_PATIENT_EMAIL,
                      process.env.NEXT_PUBLIC_PATIENT_PASS
                    )
                  }
                  className="text-xs"
                >
                  Patient
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    fillCredentials(
                      process.env.NEXT_PUBLIC_DOCTOR_EMAIL,
                      process.env.NEXT_PUBLIC_DOCTOR_PASS
                    )
                  }
                  className="text-xs"
                >
                  Doctor
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    fillCredentials(
                      process.env.NEXT_PUBLIC_ADMIN_EMAIL,
                      process.env.NEXT_PUBLIC_ADMIN_PASS
                    )
                  }
                  className="text-xs"
                >
                  Admin
                </Button>
              </div>
            </div>

            <FieldDescription className="px-6 text-center mt-4">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
