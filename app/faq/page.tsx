import type { Metadata } from "next";
import FaqList from "@/components/FaqList";
import ButtonLink from "@/components/ButtonLink";
import { Marked } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — частые вопросы",
  description: "Ответы на частые вопросы о DERLAUF VPN: как начать, оплата, устройства, данные и правила использования.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <h1 className="font-display text-3xl font-extrabold text-white sm:text-5xl">Частые вопросы</h1>
      <p className="mt-4 text-steel">Не нашли ответ? Напишите нам в Telegram.</p>
      <div className="mt-8"><FaqList /></div>
      <div className="mt-8"><ButtonLink href={site.botUrl} external>Написать в Telegram</ButtonLink></div>
    </div>
  );
}
