import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  xs: "size-5 text-[10px]",
  sm: "size-6 text-[10px]",
  md: "size-8 text-xs",
  lg: "size-10 text-sm",
  xl: "size-12 text-sm",
  "2xl": "size-16 text-base",
} as const;

export type AvatarSize = keyof typeof sizeClasses;

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  placeholder?: ReactNode;
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  size = "md",
  placeholder,
  className,
}: AvatarProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-slate-100 font-semibold uppercase text-slate-500",
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="4rem" className="object-cover" />
      ) : placeholder ? (
        placeholder
      ) : (
        alt.trim().slice(0, 2) || "?"
      )}
    </span>
  );
}
