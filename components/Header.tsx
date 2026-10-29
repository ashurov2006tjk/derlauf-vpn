"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — на главную`}>
          <Image src="/logo.png" alt="" width={36} height={36} className="rounded-md" />
          <span className="font-display text-lg font-bold tracking-wide text-white">DERLAUF <span className="text-steel">VPN</span></span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm transition hover:text-white ${pathname === n.href ? "text-white" : "text-steel"}`}>
              {n.label}
            </Link>
          ))}
          <a href={site.botUrl} target="_blank" rel="noopener noreferrer"
            className="ml-3 rounded-lg bg-brand-red px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            Подключиться
          </a>
        </nav>

        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white md:hidden">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Мобильная навигация" className="border-t border-white/10 bg-charcoal md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined}
                  className={`block rounded-lg px-2 py-3 text-base ${pathname === n.href ? "text-white" : "text-silver"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <a href={site.botUrl} target="_blank" rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center rounded-xl bg-brand-red font-semibold text-white">
                Подключиться в Telegram
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
