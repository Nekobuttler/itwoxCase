import { FieldError, UseFormRegister } from "react-hook-form";

export type FormDataLogin = {
    email: string;
    password: string;

  };

  export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };
  

  export type ValidFieldNames =
  | "email"
  | "password"
  | "confirmPassword";