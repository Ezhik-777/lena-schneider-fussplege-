# 🚀 Следующие шаги для запуска сайта

## ✅ Что уже сделано

Базовый сайт полностью готов! Реализовано:

- ✅ Все секции сайта (Header, Hero, About, Services, Benefits, HowItWorks, ServiceArea, Booking, Footer)
- ✅ Форма записи с валидацией
- ✅ Интеграция с Airtable
- ✅ Cookie Consent баннер (DSGVO)
- ✅ Страницы Impressum и Datenschutz
- ✅ Адаптивный дизайн
- ✅ SEO-оптимизация

## 📝 Обязательные действия перед запуском

### 1. Настроить Airtable (ОБЯЗАТЕЛЬНО)

📖 Подробная инструкция в файле **AIRTABLE_SETUP.md**

Кратко:
1. Зарегистрируйтесь на airtable.com
2. Создайте базу данных "Fußpflege Terminanfragen"
3. Создайте таблицу "Terminanfragen" с полями
4. Получите API ключ
5. Создайте файл `.env.local` и добавьте:
   ```
   NEXT_PUBLIC_AIRTABLE_API_KEY=your_key_here
   NEXT_PUBLIC_AIRTABLE_BASE_ID=your_base_id_here
   NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Terminanfragen
   ```

### 2. Заполнить юридические страницы (ОБЯЗАТЕЛЬНО)

⚠️ **КРИТИЧЕСКИ ВАЖНО для соответствия немецкому законодательству!**

#### Impressum (`app/impressum/page.tsx`)

Замените placeholder'ы:
- `[Vollständiger Name / Firmenname]` → Ваше имя или название компании
- `[Straße und Hausnummer]` → Ваш адрес
- `[PLZ] [Stadt]` → Индекс и город
- `[USt-IdNr.]` → Налоговый номер (если есть)
- Все контактные данные

#### Datenschutzerklärung (`app/datenschutz/page.tsx`)

Замените:
- Все данные о владельце сайта
- Информацию о responsible person

🔗 Можете использовать генераторы:
- https://www.e-recht24.de/impressum-generator.html
- https://datenschutz-generator.de/

⚠️ **Рекомендация:** Проконсультируйтесь с юристом!

### 3. Обновить контактную информацию

Найдите и замените во всех компонентах:

**Телефон:** `+49 123 456 7890` → ваш реальный номер

Найти все вхождения:
```bash
grep -r "+49 123 456 7890" components/ app/
```

**Email:** `info@beispiel.de` → ваш реальный email

Найти все вхождения:
```bash
grep -r "info@beispiel.de" components/ app/
```

**Файлы для редактирования:**
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/BookingForm.tsx`
- `components/Footer.tsx`
- `app/impressum/page.tsx`
- `app/datenschutz/page.tsx`

### 4. Добавить реальные изображения (ЖЕЛАТЕЛЬНО)

Замените placeholder'ы на реальные фотографии:

**Где нужны изображения:**
- `components/Hero.tsx` - фото специалиста или процесса работы
- `components/About.tsx` - портрет специалиста
- `components/ServiceArea.tsx` - карта или фото

**Как добавить:**
1. Поместите изображения в `public/images/`
2. Оптимизируйте (рекомендуемый размер: 1200x1200px, формат WebP)
3. Замените placeholder div на Next.js Image:

```tsx
import Image from 'next/image';

// Вместо placeholder div:
<Image
  src="/images/specialist.jpg"
  alt="Mobile Fußpflege Spezialistin"
  width={600}
  height={600}
  className="rounded-2xl shadow-xl"
  priority
/>
```

### 5. Обновить тексты на немецком (РЕКОМЕНДУЕТСЯ)

Все тексты сейчас являются примерами. Рекомендуется:
- Адаптировать под ваш стиль общения
- Добавить реальные факты (годы опыта, сертификаты)
- Уточнить цены
- Обновить список городов в ServiceArea

### 6. Настроить домен и хостинг

#### Вариант A: Vercel (рекомендуется, бесплатно)

1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий или загрузите проект
3. Добавьте переменные окружения (Airtable API key и Base ID)
4. Деплой произойдет автоматически
5. Подключите свой домен

#### Вариант B: Другие платформы

- **Netlify** - аналог Vercel
- **AWS Amplify** - если используете AWS
- **DigitalOcean App Platform** - если нужен больший контроль
- **Традиционный хостинг** - нужен Node.js support

### 7. Зарегистрировать домен .de (рекомендуется)

Для доверия в Германии лучше использовать .de домен:
- [United Domains](https://www.united-domains.de/)
- [IONOS](https://www.ionos.de/)
- [Hetzner](https://www.hetzner.com/)

## 🎨 Опциональные улучшения

### 1. Google Analytics

Если хотите отслеживать посетителей:

1. Создайте Google Analytics 4 property
2. Добавьте в `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Раскомментируйте код аналитики в `components/CookieConsent.tsx`

### 2. Добавить Favicon

1. Создайте favicon (можно на [favicon.io](https://favicon.io/))
2. Поместите файлы в `public/`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-32x32.png`
   - `favicon-16x16.png`

### 3. Добавить Open Graph изображение

Для красивого превью в соц. сетях:

1. Создайте изображение 1200x630px
2. Сохраните как `public/og-image.jpg`
3. Обновите `app/layout.tsx`:

```tsx
openGraph: {
  images: ['/og-image.jpg'],
}
```

### 4. Настроить автоматические email уведомления

См. инструкцию в **AIRTABLE_SETUP.md**, раздел "Настройка автоматических уведомлений"

### 5. Добавить WhatsApp кнопку

В `components/Footer.tsx` добавьте:

```tsx
<a
  href="https://wa.me/491234567890"
  className="fixed bottom-24 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-40"
  target="_blank"
  rel="noopener noreferrer"
>
  <MessageCircle size={28} />
</a>
```

### 6. Добавить секцию "Отзывы"

Создайте компонент `components/Testimonials.tsx` с отзывами клиентов.

## 🧪 Чек-лист перед запуском

Перед публикацией проверьте:

### Контент
- [ ] Все placeholder тексты заменены
- [ ] Реальные фотографии добавлены
- [ ] Контактная информация актуальна
- [ ] Цены обновлены
- [ ] Список городов соответствует вашей зоне обслуживания

### Юридическое
- [ ] Impressum полностью заполнен
- [ ] Datenschutzerklärung проверена (желательно юристом)
- [ ] Cookie баннер работает корректно
- [ ] Все ссылки на Impressum и Datenschutz работают

### Функциональность
- [ ] Форма записи отправляет данные в Airtable
- [ ] Email уведомления настроены (опционально)
- [ ] Все ссылки в меню работают
- [ ] Навигация плавно прокручивает к секциям
- [ ] Мобильное меню открывается/закрывается

### Технические
- [ ] `.env.local` создан и заполнен
- [ ] Сайт работает локально на http://localhost:3000
- [ ] Нет ошибок в консоли браузера
- [ ] Нет TypeScript ошибок при сборке
- [ ] SSL сертификат настроен (при деплое)

### SEO
- [ ] Все изображения имеют alt теги
- [ ] Meta title и description актуальны
- [ ] Favicon добавлен
- [ ] Sitemap создан (можно после запуска)

### Дизайн
- [ ] Сайт корректно отображается на:
  - [ ] iPhone (Safari)
  - [ ] Android (Chrome)
  - [ ] iPad
  - [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Все кнопки кликабельны
- [ ] Нет орфографических ошибок в немецких текстах

## 📞 Если что-то не работает

### Проблемы с запуском

```bash
# Очистите кеш
rm -rf .next node_modules
npm install
npm run dev
```

### Проблемы с Airtable

1. Проверьте API ключ в `.env.local`
2. Проверьте Base ID
3. Убедитесь, что таблица называется точно "Terminanfragen"
4. Проверьте scopes API ключа (должно быть read и write)

### Проблемы с деплоем

1. Убедитесь, что все переменные окружения добавлены на платформе
2. Проверьте логи сборки
3. Попробуйте локальную сборку: `npm run build`

## 🎓 Полезные ресурсы

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Airtable API](https://airtable.com/developers/web/api/introduction)
- [DSGVO Info](https://dsgvo-gesetz.de/)
- [Vercel Deployment](https://vercel.com/docs)

## 📈 После запуска

1. **Мониторинг:**
   - Проверяйте Airtable ежедневно на новые заявки
   - Настройте push-уведомления в мобильном приложении Airtable

2. **SEO:**
   - Зарегистрируйте сайт в Google Search Console
   - Создайте Google My Business профиль
   - Добавьте сайт в локальные каталоги

3. **Маркетинг:**
   - Добавьте ссылку на сайт в соц. сетях
   - Напечатайте QR-код для визиток
   - Используйте в email подписи

4. **Улучшения:**
   - Собирайте обратную связь
   - Добавляйте реальные отзывы клиентов
   - Обновляйте контент регулярно

---

## 🚀 Готовы к запуску?

Если выполнили все обязательные пункты, можете деплоить сайт!

**Команда для production build:**
```bash
npm run build
```

**Запустить production локально:**
```bash
npm start
```

**Удачи с запуском вашего сайта! 🎉**
