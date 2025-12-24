import { FieldDescription } from "../ui/field";

interface InputFieldErrorProps {
  field: string;
  state: {
    errors?: Array<{ field: string; message: string }>;
  } | null;
}

const InputFieldError = ({ field, state }: InputFieldErrorProps) => {
  if (!state || !state.errors) return null;
  
  const error = state.errors.find((err) => err.field === field);
  if (error) {
    return (
      <FieldDescription className="text-red-600">
        {error.message}
      </FieldDescription>
    );
  }

  return null;
};

export default InputFieldError;
