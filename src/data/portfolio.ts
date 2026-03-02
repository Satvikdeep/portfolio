/* ─────────────────────────────────────────────
 *  src/data/portfolio.ts
 *  Single source of truth for all portfolio content.
 * ───────────────────────────────────────────── */

// ── Experience ──────────────────────────────

export interface Experience {
    role: string;
    company: string;
    period: string;
    desc: string;
}

export const experiences: Experience[] = [
    {
        role: "App Developer Intern",
        company: "Hozo Cars, Gurugram",
        period: "May 2025 — Jun 2025",
        desc: "Built a React Native driver-operations app featuring continuous GPS and camera integration for automated check-ins. Configured a secure Supabase backend with RLS policies to sync data in real-time across 200+ chauffeurs. Owned the complete product lifecycle—moving from initial wireframes and building the frontend interface to structuring the backend database and shipping the final Play Store release.",
    },
    {
        role: "Design Leadership",
        company: "IIT Delhi (Literati Fest & BRCA)",
        period: "Apr 2024 — Mar 2025",
        desc: "Led a 30-member team as Design Coordinator for Literati Fest, managing the production of 200+ deliverables across 35+ events and driving 50k+ impressions on promotional reels. Concurrently served as Director of the Design Club, running institute-wide Figma and Illustrator workshops, organizing inter-hostel competitions, and setting the year-long creative timeline.",
    },
    {
        role: "Graphic Design Intern",
        company: "WorkEase, Remote",
        period: "May 2023 — Jul 2023",
        desc: "Created compelling graphic content for social media, lifting brand visibility and audience interaction. Optimized website UI/UX design, improving navigation flow and overall user satisfaction.",
    },

];

// ── Projects ────────────────────────────────

export interface Project {
    name: string;
    tech: string;
    desc: string;
    img: string;
    link: string;
    github: string;
    hasPreview: boolean;
}

export const projects: Project[] = [
    {
        name: "SkyCal",
        tech: "React · Firebase · Chart.js",
        desc: "Built a daily calorie tracking website with a dreamy sky-gradient theme and real-time cloud sync.",
        img: "skycal-preview.png",
        link: "https://skycal.vercel.app/",
        github: "https://github.com/Satvikdeep/skycal",
        hasPreview: true,
    },
    {
        name: "Bid Karo",
        tech: "Node.js · React · PostgreSQL · Socket.IO",
        desc: "Built a real-time auction platform where users place live bids with instant WebSocket updates and persistent state.",
        img: "/bid-karo-preview.png",
        link: "https://bid-karo-aaj.vercel.app/",
        github: "https://github.com/Satvikdeep/bid-karo-aaj",
        hasPreview: true,
    },

    {
        name: "C++ Engine",
        tech: "C++ · SFML · Custom ECS",
        desc: "Wrote a grid-based puzzle game logic backend in C++ with an SFML visual frontend and custom entity system.",
        img: "https://picsum.photos/seed/cppengine/640/400?grayscale",
        link: "#",
        github: "https://github.com/satvik",
        hasPreview: true,
    },
    {
        name: "Spell Checker",
        tech: "C++ · Trie · Levenshtein Distance",
        desc: "Built a custom spell checker and autocorrect using a Trie for fast storage and Levenshtein distance for fuzzy matching.",
        img: "https://picsum.photos/seed/spellcheck/640/400?grayscale",
        link: "#",
        github: "https://github.com/satvik",
        hasPreview: false,
    },
    {
        name: "Token Table",
        tech: "Next.js · TypeScript · Redux",
        desc: "Crafted a frontend replica of a token discovery table with live sorting, filtering, and responsive data grids.",
        img: "https://picsum.photos/seed/tokentable/640/400?grayscale",
        link: "#",
        github: "https://github.com/satvik",
        hasPreview: false,
    },
    {
        name: "Go KV Store",
        tech: "Go · TCP · Concurrency",
        desc: "Wrote a concurrent TCP key-value store in Go with support for GET, SET, and DEL over raw sockets.",
        img: "https://picsum.photos/seed/gokvstore/640/400?grayscale",
        link: "#",
        github: "https://github.com/satvik",
        hasPreview: false,
    },
    {
        name: "Blockchain Simulator",
        tech: "C++ · SHA-256 · Linked List",
        desc: "Built a blockchain simulator in C++ with proof-of-work mining, chain validation, and tamper detection.",
        img: "https://picsum.photos/seed/blockchain/640/400?grayscale",
        link: "#",
        github: "https://github.com/satvik",
        hasPreview: false,
    },
];

// ── Tech Stack (categorized) ────────────────

export interface TechItem {
    name: string;
    category: "Languages" | "Frameworks" | "Tools";
}

export const techStack: TechItem[] = [
    { name: "C++", category: "Languages" },
    { name: "Go", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "SQL", category: "Languages" },
    { name: "React", category: "Frameworks" },
    { name: "Next.js", category: "Frameworks" },
    { name: "Node.js", category: "Frameworks" },
    { name: "Redux", category: "Frameworks" },
    { name: "Socket.IO", category: "Frameworks" },
    { name: "Firebase", category: "Tools" },
    { name: "PostgreSQL", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "SFML", category: "Tools" },
];

// ── Education ───────────────────────────────

export interface Education {
    label: string;
    institution: string;
    desc: string;
    period: string;
}

export const education: Education[] = [
    {
        label: "College",
        institution: "IIT Delhi",
        desc: "Pursuing a degree in Computer Science. Focused on systems programming, algorithms, and building side projects that solve interesting problems.",
        period: "2023 — Present",
    },
    {
        label: "Senior Secondary",
        institution: "High School",
        desc: "Completed senior secondary education with a focus on science and mathematics. Built the foundation for competitive programming and logical thinking.",
        period: "2021 — 2023",
    },
];

// ── About / The Author ─────────────────────

export const aboutParagraphs = [
    "I'm Satvik — a computer science student at IIT Delhi who gravitates toward building things from the ground up. From real-time auction systems and calorie trackers to puzzle engines in C++ and concurrent key-value stores in Go, I chase projects that force me to understand how things actually work under the hood. I care about clean interfaces, fast backends, and writing code that another human can read without wanting to close the file.",
    "Outside of code, I lead design teams, run workshops on Figma and Illustrator, and sketch wireframes in notebooks that look exactly like the ones you see on this page. I'm currently looking for SDE roles where I can ship real products to real users — and keep learning by breaking things worth breaking.",
];

// ── Audio tracks (dummy paths for now) ──────

export const audioTracks = [
    "/audio/track-01.mp3",
    "/audio/track-02.mp3",
    "/audio/track-03.mp3",
    "/audio/track-04.mp3",
];
