# Mobile Fußpflege Website

Профессиональный одностраничный сайт для мобильной медицинской педикюра с интеграцией Airtable и полным соответствием DSGVO.

## 🚀 Технологии

- **Next.js 15** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **React Hook Form** - управление формами
- **Lucide React** - иконки
- **Airtable** - база данных для заявок

## 📋 Возможности

### Основные секции
- ✅ Адаптивный Header с плавной навигацией
- ✅ Hero-секция с призывами к действию
- ✅ О специалисте (About)
- ✅ Услуги (5 различных типов)
- ✅ Преимущества мобильного сервиса
- ✅ Как это работает (5 шагов)
- ✅ Зона обслуживания
- ✅ Форма записи с валидацией
- ✅ Footer с навигацией и контактами

### DSGVO-соответствие
- ✅ Cookie Consent баннер с настройками
- ✅ Страница Impressum
- ✅ Страница Datenschutzerklärung
- ✅ Обязательное согласие в формах

### Интеграции
- ✅ Airtable для хранения заявок
- ✅ API роут для обработки форм
- ⏳ Google Analytics (опционально)

## 🛠️ Установка и запуск

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` на основе `.env.example`:

```bash
cp .env.example .env.local
```

Откройте `.env.local` и заполните значения:

```env
NEXT_PUBLIC_AIRTABLE_API_KEY=your_airtable_api_key_here
NEXT_PUBLIC_AIRTABLE_BASE_ID=your_airtable_base_id_here
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Terminanfragen
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 4. Сборка для production

```bash
npm run build
npm start
```

## 📊 Настройка Airtable

### Шаг 1: Создание базы данных

1. Зарегистрируйтесь на [Airtable.com](https://airtable.com)
2. Создайте новую Base (База данных)
3. Создайте таблицу с именем **"Terminanfragen"**

### Шаг 2: Создание полей

Создайте следующие поля в таблице:

| Название поля | Тип поля | Описание |
|--------------|----------|----------|
| `Vorname` | Single line text | Имя |
| `Nachname` | Single line text | Фамилия |
| `Telefonnummer` | Phone number | Телефон |
| `E-Mail` | Email | Email |
| `Adresse` | Single line text | Адрес |
| `PLZ` | Single line text | Индекс |
| `Stadt` | Single line text | Город |
| `Gewünschte Leistung` | Single select | Услуга |
| `Wunschtermin` | Date | Дата |
| `Wunschuhrzeit` | Single line text | Время |
| `Nachricht` | Long text | Сообщение |
| `Status` | Single select | Статус заявки |
| `Eingang` | Created time | Автоматически |

### Шаг 3: Настройка Single Select для "Gewünschte Leistung"

Добавьте следующие опции:
- Nagelpilz-Behandlung
- Smart Pediküre
- Medizinische präventive Fußpflege
- Fußreflexzonenmassage
- B/S Spangentechnik
- Mehrere Leistungen

### Шаг 4: Настройка Single Select для "Status"

Добавьте следующие опции:
- Neu (по умолчанию)
- Bestätigt
- Abgeschlossen
- Storniert

### Шаг 5: Получение API ключа

1. Перейдите на [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Нажмите "Create new token"
3. Дайте имя токену: "Website Booking Form"
4. Выберите scopes:
   - `data.records:read`
   - `data.records:write`
5. Выберите доступ к вашей базе данных
6. Скопируйте токен в `.env.local` как `NEXT_PUBLIC_AIRTABLE_API_KEY`

### Шаг 6: Получение Base ID

1. Откройте вашу базу в Airtable
2. Перейдите в Help → API documentation
3. Base ID находится в URL и в документации (начинается с "app...")
4. Скопируйте в `.env.local` как `NEXT_PUBLIC_AIRTABLE_BASE_ID`

## 🎨 Кастомизация

### Изменение контента

#### 1. Контактная информация

Найдите и замените в коде:
- `+49 123 456 7890` → ваш телефон
- `info@beispiel.de` → ваш email
- Адреса и города в ServiceArea компоненте

#### 2. Тексты на немецком

Все тексты находятся в компонентах в папке `components/`:
- `Hero.tsx` - главный экран
- `About.tsx` - о специалисте
- `Services.tsx` - услуги и цены
- и т.д.

#### 3. Юридические страницы

**ВАЖНО:** Обязательно заполните реальные данные в:
- `app/impressum/page.tsx`
- `app/datenschutz/page.tsx`

Замените все placeholder'ы типа `[Vollständiger Name]`, `[Straße]` и т.д.

#### 4. Цвета и стили

Цветовая палитра настраивается в `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... }, // Основной цвет
  accent: { ... },  // Акцентный цвет
}
```

### Добавление изображений

1. Поместите изображения в папку `public/images/`
2. Замените placeholder'ы в компонентах:

```tsx
// Было:
<div className="bg-gradient-to-br from-primary-100...">
  Placeholder
</div>

// Стало:
<Image
  src="/images/your-image.jpg"
  alt="Description"
  width={500}
  height={500}
/>
```

## 🔒 DSGVO / Datenschutz

### Cookie Consent

Cookie баннер автоматически появляется при первом посещении и сохраняет выбор пользователя в `localStorage`.

Категории cookies:
- **Notwendige** (обязательные) - всегда включены
- **Funktionale** (функциональные) - можно отключить
- **Analyse** (аналитические) - можно отключить

### Обязательные страницы

1. **Impressum** (`/impressum`) - обязательная информация о владельце
2. **Datenschutz** (`/datenschutz`) - политика конфиденциальности

⚠️ **ВАЖНО:** Перед запуском сайта проконсультируйтесь с юристом для корректного заполнения юридических страниц!

## 📱 Адаптивность

Сайт полностью адаптирован для всех устройств:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🚀 Деплой

### Vercel (рекомендуется)

1. Создайте аккаунт на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Добавьте переменные окружения в настройках проекта
4. Деплой произойдет автоматически

### Другие платформы

Проект также можно задеплоить на:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Традиционный хостинг с Node.js

## 📝 SEO

### Настроенные элементы

- ✅ Meta title и description
- ✅ Open Graph теги
- ✅ Robots.txt
- ✅ Sitemap (нужно сгенерировать)
- ✅ Semantic HTML
- ✅ Alt теги для изображений (добавить при замене placeholder'ов)

### Следующие шаги для SEO

1. Создать sitemap.xml
2. Зарегистрировать в Google Search Console
3. Настроить Google My Business
4. Добавить Schema.org разметку

## 🧪 Тестирование

### Перед запуском проверьте:

- [ ] Все формы корректно отправляются
- [ ] Данные попадают в Airtable
- [ ] Cookie баннер работает
- [ ] Все ссылки рабочие
- [ ] Мобильная версия отображается корректно
- [ ] Юридические страницы заполнены
- [ ] Контактная информация актуальна
- [ ] Изображения загружены (если есть)

## 📞 Поддержка

### Полезные ссылки

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [DSGVO Compliance](https://dsgvo-gesetz.de/)
- [eRecht24 (Impressum Generator)](https://www.e-recht24.de/impressum-generator.html)

## 📄 Лицензия

Проект создан для личного использования.

---

**Дата создания:** Октябрь 2025
**Версия:** 1.0.0

Разработано с ❤️ для профессиональной мобильной медицинской педикюра
