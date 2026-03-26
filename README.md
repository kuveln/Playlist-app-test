Playlist App Test Automation

Автоматизоване тестування для веб-застосунку Playlist App за допомогою Playwright.

Тести перевіряють:

Пошук треків у списку (search.spec.js)
Додавання треку до плейлиста через кнопку + (addTrack.spec.js)
Підрахунок сумарної тривалості треків у плейлисті (totalDuration.spec.js)

🚀 Встановлення
Клонуйте репозиторій:
git clone <your-repo-url>
cd Playlist-app-test
Встановіть залежності:
npm install
Встановіть браузери для Playwright (Chromium, Firefox, WebKit):
npx playwright install

🧪 Запуск тестів
Виконати всі тести у всіх браузерах:
npx playwright test
Запуск тестів у певному браузері, наприклад Chromium:

npx playwright test --project=chromium
📝 Структура проекту
Playlist-app-test/
├─ tests/
│  ├─ search.spec.js
│  ├─ addTrack.spec.js
│  └─ totalDuration.spec.js
├─ package.json
└─ playwright.config.js