# DERLAUF VPN — сайт (Next.js + TypeScript + Tailwind)

Сайт ещё не опубликован. Публичный адрес появится только после деплоя.

## Структура
```
app/ (layout, page, faq, privacy, terms, contacts, sitemap, robots, icon.png)
components/ (Header, Footer, ButtonLink, FaqList, LegalPage)
lib/ (site.ts — контакты и ссылки, faq.ts, legal.ts — тексты документов)
public/logo.png
```

## Запуск
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Android (Termux)
```bash
pkg update && pkg install nodejs-lts git
cd ~/derlauf-vpn   # папка с распакованным проектом (termux-setup-storage даёт доступ к файлам)
npm install
npm run dev -- -H 0.0.0.0
```
Откройте в браузере телефона http://localhost:3000. В Termux `npm run build` может быть медленным; для проверки хватит `npm run dev`.

## Деплой на Vercel
1. Создайте репозиторий на GitHub и загрузите проект (`git init && git add . && git commit -m "init" && git remote add origin <URL> && git push -u origin main`).
2. Зайдите на vercel.com → Sign up через GitHub → Add New → Project → выберите репозиторий.
3. Framework Preset: Next.js (определится сам). Нажмите Deploy.
4. После сборки Vercel покажет адрес вида `https://название-проекта.vercel.app` — это ваш реальный публичный URL (Project → Domains).
5. В Settings → Environment Variables добавьте `NEXT_PUBLIC_SITE_URL` = ваш URL и сделайте Redeploy (нужно для sitemap и метаданных).
6. Свой домен: Settings → Domains → Add.

## Что заполнить перед публикацией
Все места в квадратных скобках подсвечены на сайте золотым. Найти их: `grep -rn "\[" lib/`.
- [ ] Имя/наименование оператора, регистрационные данные (если есть)
- [ ] E-mail для обращений, адрес (если требуется законом)
- [ ] Дата редакции документов (`lib/site.ts`)
- [ ] Платёжный провайдер, тарифы, порядок оплаты, отмены и возвратов
- [ ] Реальная практика журналов: какие логи ведутся и сколько хранятся
- [ ] Хостинг/страна хранения данных, сроки хранения, передача третьим лицам
- [ ] Протокол VPN и список поддерживаемых платформ
- [ ] Проверка текстов юристом по законодательству вашей страны
- [ ] Подключение аналитики/cookie — только с обновлением политики

Секретов во фронтенде нет; токен бота храните только на сервере бота.
