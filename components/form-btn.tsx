"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export const FormButton = ({ text }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="primary-btn h-10
    disabled:cursor-not-allowed disabled:bg-neutral-400 disabled:text-neutral-300"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
};