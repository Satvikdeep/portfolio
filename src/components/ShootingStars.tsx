"use client";

import { useEffect, useState } from "react";

/*
 * CSS-based Shooting Stars / Comets
 *
 * Behavior:
 * - On page load → fires 3 comets rapidly (within 1.5s)
 * - After initial burst → fires exactly once every 25 seconds
 * - Each comet is a CSS-animated div (head + tail) removed after animation
 */

interface Comet {
    id: number;
    top: number;
    left: number;
    size: "lg" | "md" | "sm";
    duration: number;
}

let cometId = 0;

export default function ShootingStars() {
    const [comets, setComets] = useState<Comet[]>([]);

    useEffect(() => {
        const spawn = () => {
            const c: Comet = {
                id: ++cometId,
                top: 5 + Math.random() * 30,
                left: 50 + Math.random() * 45,
                size: (["lg", "md", "sm"] as const)[Math.floor(Math.random() * 3)],
                duration: 2.5 + Math.random() * 1,
            };
            setComets((prev) => [...prev, c]);
            setTimeout(() => {
                setComets((prev) => prev.filter((x) => x.id !== c.id));
            }, c.duration * 1000 + 300);
        };

        /* ── Initial burst: 3 comets in the first 1.5s ── */
        const t1 = setTimeout(() => spawn(), 200);
        const t2 = setTimeout(() => spawn(), 700);
        const t3 = setTimeout(() => spawn(), 1400);

        /* ── Then exactly once every 25 seconds ── */
        const interval = setInterval(() => {
            spawn();
        }, 25000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
            aria-hidden="true"
        >
            {comets.map((c) => (
                <div
                    key={c.id}
                    className="comet"
                    style={{
                        top: `${c.top}%`,
                        left: `${c.left}%`,
                        animationDuration: `${c.duration}s`,
                    }}
                >
                    <div
                        className={`comet-head ${c.size === "sm" ? "comet-head-sm" : c.size === "md" ? "comet-head-md" : ""}`}
                    />
                    <div
                        className={`comet-tail ${c.size === "sm" ? "comet-tail-sm" : c.size === "md" ? "comet-tail-md" : ""}`}
                    />
                </div>
            ))}
        </div>
    );
}
