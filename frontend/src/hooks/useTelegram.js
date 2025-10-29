import { useEffect, useState } from "react";

export const useTelegram = () => {
    const [user, setUser] = useState(null);
    const tg = typeof window !== "undefined" ? window.Telegram?.WebApp : null;

    useEffect(() => {
        if (!tg) return;
        try { tg.ready(); tg.expand?.(); } catch(e){}
        if (tg?.initDataUnsafe?.user) setUser(tg.initDataUnsafe.user);
    }, [tg]);

    const closeApp = () => tg?.close?.();

    return { user, tg, closeApp };
};
