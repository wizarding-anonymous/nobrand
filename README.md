# Premium Tech Landing - Мультидоменный лендинг премиальной техники

## 🚀 Описание проекта

Мультидоменная система лендингов для премиальной бытовой техники с автоматическим роутингом по доменам, формами сбора заявок и аналитикой.

## 📋 Основные возможности

- **Мультидоменность**: Автоматический роутинг по доменам
- **4 варианта лендингов**: Дизайнеры, контент-креаторы, подарки, альтернатива Smeg
- **Формы сбора контактов**: С отправкой в БД и Telegram
- **Таймер обратного отсчета**: До старта продаж
- **SEO-оптимизация**: Meta-теги, OpenGraph
- **Аналитика**: Яндекс.Метрика + внутренняя система
- **Адаптивный дизайн**: Mobile-first подход

## 🛠 Технологический стек

- **Frontend**: Next.js 14, React 18, TypeScript
- **Стилизация**: Tailwind CSS
- **База данных**: PostgreSQL + Prisma ORM
- **Контейнеризация**: Docker
- **Деплой**: Vercel/Netlify ready

## 📦 Установка и запуск

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-repo/premium-tech-landing.git
cd premium-tech-landing
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` на основе `.env.example`:
```bash
cp .env.example .env
```

4. Настройте переменные окружения в `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/premium_tech"
NEXT_PUBLIC_YANDEX_METRIKA_ID="your_metrika_id"
TELEGRAM_BOT_TOKEN="your_bot_token"
TELEGRAM_CHAT_ID="your_chat_id"
NEXT_PUBLIC_LAUNCH_DATE="2024-06-01T00:00:00Z"
```

5. Запустите миграции БД:
```bash
npm run db:push
```

6. Запустите проект:
```bash
npm run dev
```

### Запуск через Docker

1. Запустите контейнеры:
```bash
docker-compose up -d
```

2. Примените миграции:
```bash
docker-compose exec app npm run db:push
```

## 🌐 Настройка доменов

### Локальная разработка

Добавьте в `/etc/hosts` (Mac/Linux) или `C:\Windows\System32\drivers\etc\hosts` (Windows):
```
127.0.0.1 tehnika-design.ru
127.0.0.1 tehnika-creator.ru
127.0.0.1 tehnika-gift.ru
127.0.0.1 tehnika-smeg.ru
```

### Production (Vercel)

1. В настройках проекта Vercel добавьте домены
2. Настройте DNS записи у регистратора доменов
3. Дождитесь выпуска SSL сертификатов

## 📊 Аналитика

### Яндекс.Метрика

1. Создайте счетчик в Яндекс.Метрике
2. Добавьте ID счетчика в `NEXT_PUBLIC_YANDEX_METRIKA_ID`
3. События отслеживаются автоматически

### Telegram уведомления

1. Создайте бота через @BotFather
2. Получите токен и добавьте в `TELEGRAM_BOT_TOKEN`
3. Создайте канал/чат и добавьте бота администратором
4. Получите ID чата и добавьте в `TELEGRAM_CHAT_ID`

## 🔧 Добавление нового лендинга

1. Создайте файл в `pages/variants/new-variant.tsx`
2. Скопируйте структуру из существующего варианта
3. Измените тексты и SEO-данные
4. Добавьте роутинг в `pages/index.tsx`:
```tsx
const domainRoutes: Record<string, string> = {
  // ...existing routes
  'new-domain.ru': '/variants/new-variant',
}
```

## 📝 Структура БД

### Таблица `Lead`
- `id`: UUID
- `email`: Email пользователя
- `phone`: Телефон
- `source`: Источник (design/creators/gift/smeg)
- `domain`: Домен, с которого пришла заявка
- `createdAt`: Дата создания

### Таблица `Analytics`
- `id`: UUID
- `event`: Название события
- `data`: JSON с дополнительными данными
- `domain`: Домен
- `userAgent`: User-Agent
- `ip`: IP-адрес
- `createdAt`: Дата события

## 🚀 Деплой

### Vercel

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения
3. Настройте домены в настройках проекта

### Собственный сервер

1. Соберите проект:
```bash
npm run build
```

2. Запустите:
```bash
npm start
```

## 📱 Поддержка и обслуживание

- **Бэкапы БД**: Настройте автоматические бэкапы PostgreSQL
- **Мониторинг**: Используйте Vercel Analytics или собственное решение
- **Обновления**: Регулярно обновляйте зависимости

## 📄 Лицензия

Proprietary - Все права защищены

---

Разработано с ❤️ для Premium Tech
