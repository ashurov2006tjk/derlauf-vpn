import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={40} height={40} className="rounded-md" />
            <span className="font-display text-lg font-bold text-white">DERLAUF VPN</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">{site.tagline}</p>
        </div>
        <nav aria-label="Страницы сайта">
          <h2 className="font-display text-base font-semibold text-white">Страницы</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="text-steel transition hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-base font-semibold text-white">Связь</h2>
          <ul className="mt-3 space-y-2 text-sm text-steel">
            <li><a href={site.botUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Telegram-бот @DerlaufVPNBot</a></li>
            <li>{site.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-steel">
        © {new Date().getFullYear()} DERLAUF VPN. Оператор: {site.operator}
      </div>
    </footer>
  );
}
