const express = require("express");
const cors = require("cors");
const { Telegraf } = require("telegraf");
require("dotenv").config();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// --- API endpoint для фронта ---
app.post("/api/company-info", async (req, res) => {
    const { site, user } = req.body;
    console.log("Запрос на /api/company-info", site, user?.id);

    // --- Мок-данные для фронта ---
    const mock = {
        name: site || "Компания Example",
        activity: "Энергетика / Телеком / ИТ",
        revenue: "120 млн ₽",
        employees: 250,
        address: "г. Москва, ул. Ленина, 10",
        news: ["Открыли филиал в Казани", "Заключили контракт с X"],
        lpr: {
            name: "Иван Иванов",
            position: "Директор по ИТ",
            contacts: ["ivan@example.com", "+7 999 123-45-67"]
        },
        purchases: [
            { id: 1, product: "Серверы", amount: "5 шт", category: "ИТ" },
            { id: 2, product: "Энергомонтаж", amount: "2 контракта", category: "Энергетика" }
        ]
    };

    console.log("Отправляем данные:", mock);
    res.json(mock);
});

// --- Health check ---
app.get("/health", (req, res) => res.send({ ok: true }));

// --- Бот Telegram ---
if (BOT_TOKEN) {
    const bot = new Telegraf(BOT_TOKEN);

    bot.start((ctx) => {
        ctx.reply("Привет! Нажми кнопку, чтобы открыть WebApp 👇", {
            reply_markup: {
                keyboard: [[{ text: "Открыть WebApp", web_app: { url: FRONTEND_URL } }]],
                resize_keyboard: true
            }
        });
    });

    bot.launch().then(() => console.log("Bot started"));
} else {
    console.warn("BOT_TOKEN не задан. Бот не будет запущен.");
}

// --- Запуск сервера ---
app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
