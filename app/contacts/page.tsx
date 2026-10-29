import type { Metadata } from "next";
import ButtonLink from "@/components/ButtonLink";
import { Marked } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Как связаться с DERLAUF VPN: Telegram-бот и контакты для обращений.",
  alternates: { canonical: "/contacts" },
};

export default function Page() {
  const rows = [
    ["Telegram-бот", <a key="b" href={site.botUrl} target="_blank" rel="noopener noreferrer" className="text-white underline decoration-brand-gold underline-offset-4">@DerlaufVPNBot</a>],
    ["E-mail", <Marked key="e" text={site.email} />],
    ["Оператор", <Marked key="o" text={site.operator} />],
    ["Адрес", <Marked key="a" text={site.address} />],
  ] as const;
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Контакты</h1>
      <p className="mt-4 max-w-prose text-steel">Быстрее всего ответим в Telegram-боте. Для обращений по данным и условиям используйте e-mail, когда он будет указан.</p>
      <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-charcoal">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:px-6">
            <dt className="text-steel">{k}</dt>
            <dd className="text-silver">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8"><ButtonLink href={site.botUrl} external>Открыть Telegram-бота</ButtonLink></div>
    </div>
  );
}
