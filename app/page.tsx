import type { Metadata } from "next";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink";
import FaqList from "@/components/FaqList";
import { Marked } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "DERLAUF VPN — Твоя конфиденциальность. Твоё соединение." },
  description: site.description,
  alternates: { canonical: "/" },
};

const pillars = [
  { id: "privacy", title: "Конфиденциальность", text: "VPN скрывает ваш IP-адрес от посещаемых сайтов. Какие данные обрабатывает сервис, мы описываем открыто в Политике конфиденциальности — без громких обещаний, которые нельзя проверить." },
  { id: "security", title: "Безопасность соединения", text: "Трафик между устройством и VPN-сервером шифруется. Это защищает данные в публичном Wi-Fi и других ненадёжных сетях. Используемый протокол: [УКАЖИТЕ ПРОТОКОЛ]." },
  { id: "devices", title: "Устройства", text: "Подключение рассчитано на смартфоны и компьютеры. Поддерживаемые платформы: [ПОДТВЕРДИТЬ — Android, iOS, Windows, macOS]. Инструкции для вашего устройства выдаёт Telegram-бот." },
];

const steps = [
  { t: "Откройте бота", d: "Перейдите в Telegram-бота @DerlaufVPNBot и нажмите «Старт»." },
  { t: "Получите доступ", d: "Выберите нужное действие в меню бота и следуйте подсказкам." },
  { t: "Настройте приложение", d: "Бот пришлёт инструкцию для вашего устройства. Подключитесь одним нажатием." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(217,32,42,.22),transparent),radial-gradient(40%_40%_at_20%_90%,rgba(227,179,65,.08),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <h1 className="hero-in font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem]">
              Твоя конфиденциальность. Твоё соединение. <span className="sheen">Твой DERLAUF.</span>
            </h1>
            <p className="hero-in mt-6 max-w-xl text-lg leading-relaxed">
              DERLAUF VPN шифрует ваше интернет-соединение и скрывает IP-адрес от сайтов. Доступом можно управлять прямо в Telegram — без сложных форм и регистрации на сайте.
            </p>
            <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.botUrl} external>Подключиться</ButtonLink>
              <ButtonLink href="#privacy" variant="ghost">Подробнее</ButtonLink>
            </div>
            <p className="hero-in mt-5 max-w-lg text-sm text-steel">VPN повышает приватность, но не делает вас полностью анонимным. Подробности — в разделе FAQ.</p>
          </div>
          <div className="hero-in mx-auto w-full max-w-sm">
            <Image src="/logo.png" alt="Логотип DERLAUF VPN" width={640} height={640} priority className="h-auto w-full rounded-3xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(217,32,42,.45)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <h2 className="max-w-2xl font-display text-2xl font-bold text-white sm:text-4xl">Что вы получаете</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.id} id={p.id} className="rounded-2xl border border-white/10 bg-gradient-to-b from-graphite to-charcoal p-6">
              <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-3 leading-relaxed"><Marked text={p.text} /></p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-charcoal">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
          <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">Как начать</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t} className="rounded-2xl border border-white/10 bg-ink p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-gold/60 font-display text-sm text-brand-gold">{i + 1}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.t}</h3>
                <p className="mt-2 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10"><ButtonLink href={site.botUrl} external>Открыть Telegram-бота</ButtonLink></div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <h2 className="font-display text-2xl font-bold text-white sm:text-4xl">Частые вопросы</h2>
        <div className="mt-8"><FaqList limit={4} /></div>
        <div className="mt-6"><ButtonLink href="/faq" variant="ghost">Все вопросы</ButtonLink></div>
      </section>
    </>
  );
}
