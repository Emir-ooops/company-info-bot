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

// --- API endpoint для фронта (мок) ---
app.post("/api/company-info", (req, res) => {
    const { site } = req.body;
    const mock = {
        name: site || "Unknown",
        revenue: "120 млн ₽",
        news: ["Открыли филиал", "Заключили контракт"],
    };
    res.json(mock);
});

// --- проверка ---
app.get("/health", (req, res) => res.send({ ok: true }));

// --- Telegram bot ---
if (!BOT_TOKEN) {
    console.warn("BOT_TOKEN не задан. Бот не будет запущен.");
} else {
    const bot = new Telegraf(BOT_TOKEN);

    bot.start((ctx) => {
        ctx.reply("Привет! Нажми кнопку, чтобы открыть WebApp 👇", {
            reply_markup: {
                keyboard: [
                    [
                        { text: "Открыть WebApp", web_app: { url: FRONTEND_URL } }
                    ]
                ],
                resize_keyboard: true,
            },
        });
    });

    bot.launch().then(() => console.log("Bot started"));
}

app.listen(PORT, () => console.log(`Backend listening on http://localhost:${PORT}`));
