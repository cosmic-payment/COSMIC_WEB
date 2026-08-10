import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AvatarSize } from "./avatar";

const sizeClasses = {
  xs: "size-5",
  sm: "size-6",
  md: "size-8",
  lg: "size-10",
  xl: "size-12",
  "2xl": "size-16",
} as const;

export interface AvatarAddButtonProps {
  size?: AvatarSize;
  className?: string;
}

export function AvatarAddButton({ size = "md", className }: AvatarAddButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-50",
        sizeClasses[size],
        className,
      )}
      aria-label="Add avatar"
    >
      <Plus className="size-1/2" strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
