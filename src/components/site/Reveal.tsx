import type { ReactNode, ElementType } from "react";

export function Reveal({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}) {
  const Tag = As as ElementType;
  return <Tag className={className}>{children}</Tag>;
}

export function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
      <div className="font-display text-5xl font-semibold text-white">
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}
