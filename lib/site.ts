export const site = {
  name: "DERLAUF VPN",
  tagline: "Твоя конфиденциальность. Твоё соединение. Твой DERLAUF.",
  description:
    "DERLAUF VPN — VPN-сервис с управлением через Telegram-бота. Получение доступа и поддержка — в одном месте.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  botUrl: "https://t.me/DerlaufVPNBot",
  email: "[УКАЖИТЕ E-MAIL ДЛЯ ОБРАЩЕНИЙ]",
  operator: "[УКАЖИТЕ ПОЛНОЕ ИМЯ / НАИМЕНОВАНИЕ ОПЕРАТОРА]",
  address: "[УКАЖИТЕ АДРЕС, ЕСЛИ ТРЕБУЕТСЯ ЗАКОНОМ]",
  updated: "[УКАЖИТЕ ДАТУ РЕДАКЦИИ]",
};

export const nav = [
  { href: "/", label: "Главная" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Конфиденциальность" },
  { href: "/terms", label: "Условия" },
  { href: "/contacts", label: "Контакты" },
];
