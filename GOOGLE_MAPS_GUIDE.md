# 🗺️ Google Maps Integration Guide

## ✅ ЧТО УЖЕ СДЕЛАНО

В `components/ServiceArea.tsx` добавлена **Google Maps карта** с автоматическим адресом из `lib/constants.ts`.

**Работает сразу, без API ключа!** ✨

---

## 🎯 КАК ЭТО РАБОТАЕТ

### Текущая реализация:
```tsx
<iframe
  src={`https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}&output=embed&z=15`}
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title={`Karte zu ${BUSINESS_INFO.name} in ${BUSINESS_INFO.address.city}`}
/>
```

### Параметры:
- `q=` - адрес (автоматически из constants.ts)
- `output=embed` - режим встраивания
- `z=15` - zoom уровень (15 = хороший для адреса)
- `loading="lazy"` - ленивая загрузка (performance)

---

## 🔧 НАСТРОЙКИ

### Изменить zoom (приближение):
```tsx
// В URL поменяйте z=15 на:
z=10  // Город целиком
z=13  // Район
z=15  // Улица (текущее)
z=17  // Здание крупно
z=19  // Очень крупно
```

### Центрировать на другом месте:
Если Google неправильно определяет адрес, используйте координаты:
```tsx
src={`https://www.google.com/maps?q=${BUSINESS_INFO.geo.latitude},${BUSINESS_INFO.geo.longitude}&output=embed&z=15`}

// Координаты в constants.ts:
geo: {
  latitude: 48.9615,
  longitude: 9.0667,
}
```

---

## 🚀 ВАРИАНТ 2: С Google Maps Embed API (Продвинутый)

Если нужен более кастомизированный вид или маркер:

### Шаг 1: Получить API ключ (бесплатно)
1. Перейдите: https://console.cloud.google.com/
2. Создайте проект
3. Включите "Maps Embed API"
4. Создайте API ключ
5. Ограничьте по домену (для безопасности)

### Шаг 2: Добавить в .env.local
```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=ваш_ключ_здесь
```

### Шаг 3: Обновить компонент
```tsx
// components/ServiceArea.tsx
const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

<iframe
  src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(BUSINESS_INFO.address.fullAddress)}&zoom=15&maptype=roadmap`}
  // ... rest
/>
```

### Дополнительные параметры с API:
```tsx
// Тип карты
maptype=roadmap   // Обычная (по умолчанию)
maptype=satellite // Спутник
maptype=hybrid    // Гибрид

// Язык
language=de       // Немецкий
language=en       // Английский

// Регион
region=DE         // Германия
```

---

## 🎨 ВАРИАНТ 3: React Google Maps (Полный контроль)

Если нужны интерактивные маркеры, кастомные стили, etc.

### Установка:
```bash
npm install @react-google-maps/api
```

### Пример компонента:
```tsx
// components/GoogleMap.tsx
'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { BUSINESS_INFO } from '@/lib/constants';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: BUSINESS_INFO.geo.latitude,
  lng: BUSINESS_INFO.geo.longitude,
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
```

### Использование:
```tsx
// components/ServiceArea.tsx
import GoogleMap from '@/components/GoogleMap';

<div className="aspect-square rounded-2xl shadow-xl overflow-hidden">
  <GoogleMap />
</div>
```

---

## 🎯 РЕКОМЕНДАЦИИ

### Для вашего случая:
✅ **Используйте текущее решение (iframe без API ключа)**

**Почему:**
- Работает сразу
- Не нужен API ключ
- Бесплатно без ограничений
- Достаточно для статичной карты
- Хорошо для SEO

### Когда нужен API ключ:
- Кастомные маркеры
- Несколько локаций
- Интерактивные функции
- Маршруты
- Street View

---

## 🔒 БЕЗОПАСНОСТЬ

### С API ключом:
**ВАЖНО:** Ограничьте ключ по домену!

```
1. Google Cloud Console
2. Credentials → Ваш ключ
3. Application restrictions → HTTP referrers
4. Add referrer:
   - your-domain.de/*
   - *.your-domain.de/*
```

### Без API ключа (текущее решение):
- ✅ Полностью безопасно
- ✅ Нет лимитов
- ✅ Нет биллинга

---

## 📱 PERFORMANCE

### Текущая оптимизация:
```tsx
loading="lazy"  // Загрузка только при скролле
```

### Дополнительно (опционально):
```tsx
// Показывать placeholder до загрузки
{!isLoaded && (
  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
    <p>Karte lädt...</p>
  </div>
)}
```

---

## 🐛 TROUBLESHOOTING

### Карта не показывается:
1. **Проверьте адрес** в `lib/constants.ts`
2. **Откройте консоль браузера** (F12)
3. **Проверьте URL** в Network tab
4. **Тестируйте адрес** вручную:
   ```
   https://www.google.com/maps?q=Brunnenstraße+25,+74343+Sachsenheim
   ```

### Карта показывает неправильное место:
**Решение:** Используйте координаты вместо адреса
```tsx
src={`https://www.google.com/maps?q=48.9615,9.0667&output=embed&z=15`}
```

### Карта не responsive:
**Уже исправлено:** `width="100%" height="100%"`

---

## 🎨 СТИЛИЗАЦИЯ

### Текущий стиль:
```tsx
className="aspect-square rounded-2xl shadow-xl overflow-hidden"
```

### Варианты:
```tsx
// Прямоугольник (шире)
className="aspect-video rounded-2xl shadow-xl overflow-hidden"

// Без скругления
className="aspect-square shadow-xl overflow-hidden"

// Другие пропорции
className="h-96 rounded-2xl shadow-xl overflow-hidden"
```

---

## ✅ CHECKLIST

Проверьте:
- [x] Карта отображается
- [x] Адрес правильный (Brunnenstraße 25, 74343 Sachsenheim)
- [x] Zoom уровень подходящий (z=15)
- [x] Карта responsive на мобильных
- [x] Loading lazy работает
- [x] Floating card показывается

---

## 📊 АЛЬТЕРНАТИВЫ Google Maps

### OpenStreetMap (бесплатно, open-source):
```tsx
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=9.06,48.96,9.07,48.97&layer=mapnik&marker=48.9615,9.0667"
  width="100%"
  height="100%"
/>
```

### Mapbox (красивые кастомные стили):
```tsx
// Требует API ключ, но больше контроля над стилем
```

---

## 🎉 ГОТОВО!

**Текущая карта:**
- ✅ Работает без API ключа
- ✅ Показывает: Brunnenstraße 25, 74343 Sachsenheim
- ✅ Автоматически обновляется при изменении адреса в constants.ts
- ✅ Оптимизирована (lazy loading)
- ✅ Responsive
- ✅ Красивый дизайн с floating card

**Проверьте на:** http://localhost:3000

**Если нужны изменения** - смотрите разделы выше! 🗺️
