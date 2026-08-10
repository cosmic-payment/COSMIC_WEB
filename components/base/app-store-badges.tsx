import Link from "next/link";
import { cn } from "@/lib/utils";

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83zM13.18 5.32c.69-.98 1.87-1.65 2.92-1.6.04 1.08-.29 2.2-1.01 3.01-.7.81-1.8 1.44-2.86 1.36-.06-.94.32-1.98.95-2.77z" />
    </svg>
  );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.25.93-.59 1.19l-2.43 1.36-2.61-2.55 2.61-2.55 2.43 1.36zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
    </svg>
  );
}

interface StoreBadgeProps {
  href: string;
  label: string;
  title: string;
  icon: React.ReactNode;
}

function StoreBadge({ href, label, title, icon }: StoreBadgeProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-xl bg-slate-900 px-4 py-2.5 text-white shadow-md shadow-slate-900/10 transition-all duration-200 hover:bg-blue-700"
    >
      {icon}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide">
          {label}
        </span>
        <span className="text-sm font-bold">{title}</span>
      </span>
    </Link>
  );
}

export function AppStoreBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <StoreBadge
        href="#"
        label="Download on the"
        title="App Store"
        icon={<AppleIcon className="h-6 w-6" aria-hidden="true" />}
      />
      <StoreBadge
        href="#"
        label="Get it on"
        title="Google Play"
        icon={<PlayIcon className="h-6 w-6" aria-hidden="true" />}
      />
    </div>
  );
}
