import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  color?: string;
  gridSize?: number;
}

export function GridPattern({
  className,
  color = "rgba(37,99,235,0.05)",
  gridSize = 56,
}: GridPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
      aria-hidden="true"
    />
  );
}
