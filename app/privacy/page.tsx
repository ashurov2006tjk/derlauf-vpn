import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Какие данные могут обрабатываться при использовании DERLAUF VPN и Telegram-бота, как они хранятся и как их удалить.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <LegalPage
      title="Политика конфиденциальности"
      intro="Черновик для проверки. Фрагменты в золотых рамках — места, которые нужно заполнить или подтвердить фактической настройкой сервиса, прежде чем публиковать сайт. Рекомендуем показать текст юристу."
      sections={privacy}
    />
  );
}
