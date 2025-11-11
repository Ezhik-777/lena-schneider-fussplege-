# 🤖 Настройка Telegram бота в Vercel

## 📋 Краткая информация

**Bot Token:** `8345072206:AAH43PLUrI1z2P8Zs_v_28siuGrrKygzCOc`
**Chat ID (группа):** `-4813797579`
**Название группы:** Fußpflege-lena-schneider

---

## 🚀 Пошаговая инструкция

### Шаг 1: Открой Vercel Dashboard

1. Перейди на https://vercel.com
2. Войди в свой аккаунт
3. Найди проект **lena-schneider-fusspflege** (или как он называется в Vercel)
4. Нажми на проект, чтобы открыть его

---

### Шаг 2: Открой Settings → Environment Variables

1. В открытом проекте нажми на вкладку **Settings** (в верхнем меню)
2. В левом боковом меню найди и нажми **Environment Variables**

---

### Шаг 3: Добавь первую переменную - TELEGRAM_BOT_TOKEN

1. В поле **Key** введи:
   ```
   TELEGRAM_BOT_TOKEN
   ```

2. В поле **Value** введи (скопируй полностью):
   ```
   8345072206:AAH43PLUrI1z2P8Zs_v_28siuGrrKygzCOc
   ```

3. В разделе **Environment** выбери все три опции:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. Нажми **Add** или **Save**

---

### Шаг 4: Добавь вторую переменную - TELEGRAM_CHAT_ID

1. В поле **Key** введи:
   ```
   TELEGRAM_CHAT_ID
   ```

2. В поле **Value** введи (это ID группы):
   ```
   -4813797579
   ```

3. В разделе **Environment** выбери все три опции:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

4. Нажми **Add** или **Save**

---

### Шаг 5: Сделай Redeploy проекта

**⚠️ ВАЖНО:** Переменные окружения применяются только после нового деплоя!

#### Вариант 1: Через Deployments

1. Перейди на вкладку **Deployments** (в верхнем меню)
2. Найди последний деплой (самый верхний в списке)
3. Нажми на три точки **•••** справа от деплоя
4. Выбери **Redeploy**
5. Подтверди действие

#### Вариант 2: Через Git Push (автоматически)

Просто сделай любое изменение и запуши в Git - Vercel автоматически сделает деплой:
```bash
git commit --allow-empty -m "Trigger redeploy for env vars"
git push
```

---

### Шаг 6: Проверь, что всё работает

После завершения деплоя (обычно 1-2 минуты):

1. Открой свой сайт: https://fusspflege-lena-schneider.de
2. Прокрути вниз до формы бронирования
3. Заполни все поля тестовыми данными:
   - **Vorname:** Test
   - **Telefon:** +49 176 12345678
   - **Email:** test@example.com
   - **Leistung:** Любую услугу
   - **Wunschtermin:** Любую дату в будущем
   - **Wunschuhrzeit:** Любое время
   - **Nachricht:** Тестовое сообщение

4. Нажми **Terminanfrage senden**

5. **Проверь Telegram группу "Fußpflege-lena-schneider"** - там должно прийти красиво отформатированное сообщение! 🎉

---

## 📱 Как выглядит сообщение в Telegram

```
🆕 NEUE BUCHUNGSANFRAGE

👤 Kunde:
   Test Mustermann

📞 Telefon:
   +49 176 12345678

📧 Email:
   test@example.com

💅 Gewünschte Leistung:
   Klassische Fußpflege

📅 Wunschtermin:
   15. November 2025

🕐 Wunschuhrzeit:
   10:00 - 11:00

📝 Nachricht:
   Тестовое сообщение

⏰ Eingegangen am:
   09.11.2025, 20:53:14

🌐 IP: 185.xxx.xxx.xxx

━━━━━━━━━━━━━━━━━━━━━━
🌐 Quelle: Website
```

---

## 🔍 Где найти переменные в Vercel (визуально)

```
Vercel Dashboard
  └─ Твой проект (lena-schneider-fusspflege)
      └─ Settings (вкладка сверху)
          └─ Environment Variables (слева в меню)
              └─ [Здесь добавляешь переменные]

                  ┌─────────────────────────────────────┐
                  │ Key:   TELEGRAM_BOT_TOKEN           │
                  │ Value: 8345072206:AAH43PLUrI1z2...  │
                  │ ☑ Production ☑ Preview ☑ Development│
                  │        [Add/Save Button]            │
                  └─────────────────────────────────────┘

                  ┌─────────────────────────────────────┐
                  │ Key:   TELEGRAM_CHAT_ID             │
                  │ Value: -4813797579                  │
                  │ ☑ Production ☑ Preview ☑ Development│
                  │        [Add/Save Button]            │
                  └─────────────────────────────────────┘
```

---

## 🆘 Решение проблем

### Сообщения не приходят в Telegram?

1. **Проверь переменные:**
   - Зайди в Settings → Environment Variables
   - Убедись, что обе переменные добавлены
   - Проверь, что значения скопированы полностью (без пробелов)
   - Убедись, что все три окружения выбраны (Production, Preview, Development)

2. **Сделай Redeploy:**
   - Deployments → последний деплой → ••• → Redeploy
   - Или сделай git push

3. **Проверь логи:**
   - Deployments → последний деплой → Function Logs
   - Ищи ошибки связанные с Telegram

4. **Проверь группу в Telegram:**
   - Бот должен быть членом группы "Fußpflege-lena-schneider"
   - Бот не должен быть заблокирован

### Ошибка "Credentials are not configured"?

Это значит, что переменные не загрузились. Сделай Redeploy.

### Форма не отправляется?

1. Открой DevTools (F12) → Console
2. Проверь есть ли ошибки
3. Попробуй отправить еще раз

---

## ✅ Что должно получиться

После правильной настройки:

- ✅ Каждая заявка с сайта моментально приходит в Telegram группу
- ✅ Сообщение красиво отформатировано с эмодзи
- ✅ Видны все данные клиента (имя, телефон, email, услуга, дата/время)
- ✅ Указан IP адрес и время получения заявки

---

## 🔒 Безопасность

- ❌ **НЕ публикуй** Bot Token и Chat ID в открытом доступе
- ✅ Переменные хранятся безопасно в Vercel
- ✅ Они не видны в коде на GitHub
- ✅ Они не видны клиенту в браузере
- ✅ API защищен от CSRF атак

---

## 📞 Дополнительная информация

**Telegram Bot:** @FusspflegeLena_bot
**Группа:** Fußpflege-lena-schneider

**Документация Telegram Bot API:**
https://core.telegram.org/bots/api

---

Готово! 🚀 Теперь все заявки будут автоматически приходить в Telegram!
