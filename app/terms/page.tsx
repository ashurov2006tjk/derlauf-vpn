import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Условия использования",
  description: "Правила использования DERLAUF VPN: допустимое использование, запреты, оплата, ограничения сервиса и ответственность.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <LegalPage
      title="Условия использования"
      intro="Черновик для проверки. Фрагменты в золотых рамках — информация о бизнесе и тарифах, которую нужно указать самостоятельно. Рекомендуем показать текст юристу."
      sections={terms}
    />
  );
}
