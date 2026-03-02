"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
    const [isMounted, setIsMounted] = useState(false);
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        setIsMounted(true);

        const tick = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                })
            );
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-mono text-xs tracking-widest text-white/50">
            {isMounted ? time : "00:00:00"}{" "}
            <span className="text-white/30">IST</span>
        </span>
    );
}
