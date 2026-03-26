# 🎵 Playlist App Test Automation

Автоматизоване тестування веб-застосунку **Playlist App** за допомогою Playwright.

## 📌 Опис
Проєкт містить e2e тести для перевірки основного функціоналу:
- 🔍 Пошук треків (`search.spec.js`)
- ➕ Додавання треку до плейлиста (`addTrack.spec.js`)
- ⏱️ Підрахунок загальної тривалості (`totalDuration.spec.js`)

## 🚀 Встановлення
```bash
git clone https://github.com/kuveln/Playlist-app-test.git
cd Playlist-app-test
npm install
npx playwright install
🧪 Запуск тестів
npx playwright test

Запуск у конкретному браузері:

npx playwright test --project=chromium

Запуск у видимому режимі:

npx playwright test --headed
