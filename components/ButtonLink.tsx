import Link from "next/link";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost"; external?: boolean; className?: string };

const base =
  "inline-flex min-h-12 items-center justify-center rounded-xl px-7 text-base font-semibold transition duration-200 active:scale-[.98]";
const styles = {
  primary: "bg-gradient-to-b from-brand-red to-[#9d141c] text-white shadow-[0_8px_30px_-8px_rgba(217,32,42,.7)] ring-1 ring-white/10 hover:brightness-110",
  ghost: "border border-white/15 bg-white/[.03] text-white hover:border-brand-gold/60 hover:bg-white/[.07]",
};

export default function ButtonLink({ href, children, variant = "primary", external, className = "" }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}
