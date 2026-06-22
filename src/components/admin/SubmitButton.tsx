"use client";

import { useFormStatus } from "react-dom";
import { cls } from "./ui";

export function SubmitButton({
  children,
  pendingText = "Memproses…",
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  pendingText?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const { pending } = useFormStatus();
  const base = variant === "ghost" ? cls.btnGhost : cls.btnPrimary;
  return (
    <button type="submit" disabled={pending} className={`${base} ${className ?? ""}`}>
      {pending ? pendingText : children}
    </button>
  );
}
