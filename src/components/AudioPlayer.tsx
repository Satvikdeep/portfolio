"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { audioTracks } from "@/data/portfolio";

export default function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);

    /* Pick a random starting track on mount */
    useEffect(() => {
        setTrackIndex(Math.floor(Math.random() * audioTracks.length));
    }, []);

    const toggle = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().catch(() => {
                /* autoplay blocked — silently ignore */
            });
            setIsPlaying(true);
        }
    }, [isPlaying]);

    const handleEnded = useCallback(() => {
        /* Advance to next track, looping back to 0 */
        setTrackIndex((prev) => (prev + 1) % audioTracks.length);
        /* Small delay so src updates before play */
        setTimeout(() => {
            audioRef.current?.play();
        }, 50);
    }, []);

    return (
        <button
            onClick={toggle}
            className="mt-12 group flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
        >
            {isPlaying ? (
                /* Pause icon */
                <svg className="w-3 h-3" viewBox="0 0 12 14" fill="currentColor">
                    <rect x="1" y="0" width="3.5" height="14" rx="0.5" />
                    <rect x="7.5" y="0" width="3.5" height="14" rx="0.5" />
                </svg>
            ) : (
                /* Play icon */
                <svg className="w-3 h-3" viewBox="0 0 12 14" fill="currentColor">
                    <path d="M0 0v14l12-7z" />
                </svg>
            )}

            <span className="font-mono text-xs tracking-widest uppercase">
                {isPlaying ? "Pause" : "Play Music"}
            </span>

            <audio
                ref={audioRef}
                src={audioTracks[trackIndex]}
                preload="none"
                onEnded={handleEnded}
            />
        </button>
    );
}
