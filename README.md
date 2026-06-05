# 1REST.KZ

Адаптивный сайт компании 1REST.KZ для услуг по чистке вентиляции, дымоходов и кухонных вытяжек.

## Стек

- React
- TypeScript
- Vite
- Lucide React icons

## Локальный запуск

```bash
npm install
npm run dev
```

## Production-сборка

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

## Деплой на Vercel

При импорте репозитория в Vercel оставьте стандартные настройки:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Где заменить контакты

Контакты находятся в `src/App.tsx`:

```ts
const phone = '+7 700 000 00 00'
const whatsapp = '77000000000'
const email = 'info@1rest.kz'
```
