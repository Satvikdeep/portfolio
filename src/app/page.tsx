"use client";

import { useState } from "react";
import Image from "next/image";
import LiveClock from "@/components/LiveClock";
import AudioPlayer from "@/components/AudioPlayer";
import {
  experiences,
  projects,
  techStack,
  education,
  aboutParagraphs,
} from "@/data/portfolio";

/* ── Tech Stack SVG Icons (monochrome) ───────── */

const techIcons: Record<string, React.ReactNode> = {
  "C++": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.13 7.13 0 015.028 2.082l-2.729 2.728A3.56 3.56 0 0012 8.444c-1.963 0-3.556 1.593-3.556 3.556S10.037 15.556 12 15.556a3.55 3.55 0 002.701-1.248h-2.7v-2.22h5.588c.068.378.1.756.1 1.134A7.044 7.044 0 0112 19.11z" />
    </svg>
  ),
  Go: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.745.187-1.255.315-1.999.502-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.789.514-1.195 1.273-1.183 2.18.012.907.651 1.653 1.535 1.77.752.093 1.38-.152 1.89-.722.105-.128.199-.269.315-.433H11.24c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.273a.314.314 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.793-.865-.667-1.369-1.568-1.498-2.665-.152-1.297.227-2.455.968-3.483.838-1.168 1.96-1.893 3.33-2.115 1.145-.187 2.209 0 3.143.734.596.467 1.018 1.075 1.274 1.776.035.105.012.164-.117.199z" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.68H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l10.07.001h1.25zM11.5 4a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path d="M21.06 7.79l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16L10.01 18H8.76l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V10.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.66l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V3.32h3.13zM12.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.42 0 8 1.34 8 3s-3.58 3-8 3-8-1.34-8-3 3.58-3 8-3zM4 18V9.87C5.73 11.15 8.59 12 12 12s6.27-.85 8-2.13V18c0 1.66-3.58 3-8 3s-8-1.34-8-3z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.592.068-.838.182-.727.375-1.17 1.32-1.17 2.687 0 1.594.577 3.627 1.605 5.687-1.563 1.055-2.712 2.172-3.358 3.182C2.515 14.439 2 15.76 2 16.79c0 1.37.44 2.316 1.17 2.691.245.115.527.183.837.183 1.346 0 3.106-.959 4.888-2.622 1.78 1.654 3.542 2.603 4.887 2.603.31 0 .593-.068.838-.183.727-.375 1.17-1.32 1.17-2.691 0-1.594-.577-3.627-1.605-5.687 1.563-1.055 2.712-2.172 3.358-3.182.827-1.375 1.342-2.695 1.342-3.726 0-1.37-.44-2.316-1.17-2.691a1.997 1.997 0 00-.837-.183zM12 15.01c-1.66 0-3.006-1.346-3.006-3.006S10.34 8.998 12 8.998s3.006 1.346 3.006 3.006S13.66 15.01 12 15.01z" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 01-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 00-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 00-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 01-.206.214c-.075.037-.14.044-.495.044H9.305l-.108-.068a.438.438 0 01-.157-.171l-.049-.106.006-4.703.007-4.705.073-.091a.637.637 0 01.174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 004.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 002.466-2.163 11.944 11.944 0 002.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 00-2.499-.523A33.119 33.119 0 0011.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 01.237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 01.233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.29.29 0 00.272 0l8.795-5.076a.277.277 0 00.134-.238V6.921a.28.28 0 00-.137-.242L12.135 1.6a.272.272 0 00-.27 0L3.078 6.68a.281.281 0 00-.138.243v10.15c0 .099.053.19.138.236l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675A1.857 1.857 0 011.36 17.07V6.921c0-.68.363-1.313.921-1.652L11.076.191a1.927 1.927 0 011.846 0l8.794 5.078c.559.339.92.972.92 1.652v10.15a1.86 1.86 0 01-.92 1.604l-8.795 5.078a1.848 1.848 0 01-.923.247z" />
    </svg>
  ),
  Redux: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M16.634 16.504c.87-.075 1.543-.818 1.5-1.705-.043-.903-.784-1.604-1.69-1.604h-.058c-.933.03-1.66.818-1.63 1.752.03.463.204.855.478 1.133-1.005 1.993-2.549 3.458-4.865 4.683-1.56.825-3.19 1.127-4.834.898-1.341-.181-2.39-.76-3.104-1.666-.991-1.324-1.12-2.76-.39-4.203.52-1.033 1.34-1.795 1.868-2.19a14.98 14.98 0 01-.522-1.795C.55 14.063-.19 17.15.864 19.465c.79 1.725 2.39 2.85 4.408 2.85.5 0 1.018-.06 1.53-.196 3.249-.72 5.714-2.9 7.04-5.608l.793-.007zm5.087-3.248c-2.158-2.522-5.336-3.907-8.952-3.907h-.464c-.26-.527-.8-.882-1.41-.882h-.06c-.933.03-1.66.817-1.63 1.75.032.906.784 1.607 1.69 1.607h.06c.637-.024 1.19-.405 1.44-.884h.514c2.143 0 4.17.623 6.006 1.85 1.404.936 2.412 2.142 2.983 3.574.492 1.205.462 2.382-.076 3.402-.826 1.563-2.21 2.413-4.06 2.413-.3 0-.464-.016-.697-.046-.236-.256-.567-.485-.908-.617.13.254.266.504.416.746 1.037.21 2.114.08 3.088-.37 2.086-.957 3.293-2.881 3.293-5.117 0-1.68-.78-3.356-2.233-4.52z" />
      <path d="M7.137 18.072c.03.907.784 1.607 1.69 1.607h.058c.934-.03 1.662-.818 1.632-1.752a1.652 1.652 0 00-1.69-1.604h-.058c-.064 0-.158 0-.254.03-1.5-2.51-2.143-5.235-1.928-8.163.148-2.19.92-4.088 2.29-5.617.36-.402.986-.904 1.737-1.086 1.52-.368 2.914.166 3.538 1.475.132.278.253.574.363.885.265-1.018.363-1.795.363-1.795-.148-.316-.34-.617-.56-.89C13.523.33 12.235-.218 10.862.074c-2.87.628-5.037 3.6-5.588 6.93-.738 4.47.233 8.718 2.62 12.32-.283.187-.48.555-.454.99l-.302-.242z" />
    </svg>
  ),
  "Socket.IO": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.998.042C5.373.042 0 5.415 0 12.042c0 6.626 5.373 12 11.998 12 6.628 0 12.002-5.374 12.002-12 0-6.627-5.374-12-12.002-12zM9.003 7.44l3.63 4.476-3.63 2.27V7.443zm6 9.12l-3.63-4.476 3.63-2.27v6.747z" />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.39.524 9.594 1.066 9.132.782 8.391.516 7.502.336 6.261.088 4.8.053 3.612.524 2.17 1.093 1.2 2.26 1.06 3.724c-.105 1.099.234 2.197.932 3.584.522 1.035 1.2 2.14 1.876 2.978.062.078.128.16.194.237-.128.444-.196.914-.208 1.405-.04 1.633.473 3.3 1.436 4.647.27.377.564.724.878 1.036-.113.403-.2.78-.258 1.14-.124.752-.108 1.472.154 2.09.263.617.772 1.084 1.484 1.312.513.163 1.057.244 1.625.244.293 0 .594-.023.897-.068l.066-.01c.383-.06.756-.155 1.122-.281.026.294.058.573.098.848.09.613.22 1.181.381 1.632.34.948.804 1.537 1.473 1.81.244.1.502.15.77.15.388 0 .708-.092 1.008-.23.406-.185.764-.467 1.143-.791.287-.244.585-.524.878-.82.268.19.575.384.937.537.62.264 1.367.336 2.095.196.63-.123 1.21-.4 1.7-.831l.025-.023c.387-.365.71-.8.971-1.29.277-.52.5-1.102.682-1.726.115-.395.23-.84.347-1.334.244-1.027.428-2.198.5-3.325.035-.55.05-1.08.044-1.578a6.704 6.704 0 00.013-.37c.11-1.19.063-2.303-.137-3.315a7.884 7.884 0 00-.396-1.304 4.725 4.725 0 001.037-2.537c.127-1.358-.245-2.778-1.116-3.833C21.4.612 19.629 0 17.128 0z" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.66 2.66a1.838 1.838 0 011.251 3.17 1.842 1.842 0 01-2.612-2.594l-2.481-2.484v6.536a1.838 1.838 0 11-1.506-.044V9.39a1.839 1.839 0 01-.998-2.413L7.38 4.223.454 11.15a1.55 1.55 0 000 2.189l10.48 10.477a1.55 1.55 0 002.186 0l10.426-10.7a1.55 1.55 0 000-2.187z" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117a3.02 3.02 0 003.019-3.02 3.02 3.02 0 00-3.019-3.019h-3.117v6.039zm-1.471 1.471H7.148a4.49 4.49 0 01-4.49-4.49A4.49 4.49 0 017.148 0h4.116v8.981zm-4.116-7.51a3.02 3.02 0 00-3.019 3.02 3.02 3.02 0 003.019 3.019h2.645V1.471H7.148zM7.148 24a4.49 4.49 0 01-4.49-4.49 4.49 4.49 0 014.49-4.49h4.116v4.49A4.49 4.49 0 017.148 24zm0-7.51a3.02 3.02 0 00-3.019 3.02A3.02 3.02 0 007.148 22.529a3.02 3.02 0 003.019-3.019v-3.02H7.148zm4.587-1.471H7.148a4.49 4.49 0 01-4.49-4.49 4.49 4.49 0 014.49-4.49h4.588v8.98h-.001zm-4.587-7.51a3.02 3.02 0 00-3.019 3.02 3.02 3.02 0 003.019 3.019h3.116V7.509H7.148zm8.704 4.49a4.49 4.49 0 014.49 4.49 4.49 4.49 0 01-4.49 4.49 4.49 4.49 0 01-4.49-4.49 4.49 4.49 0 014.49-4.49zm0 7.51a3.02 3.02 0 003.019-3.02 3.02 3.02 0 00-3.019-3.019 3.02 3.02 0 00-3.019 3.019 3.02 3.02 0 003.019 3.02z" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H2.22a.185.185 0 00-.186.185v1.888c0 .102.084.185.186.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.72 3.13 1.132 5.332 1.132.904 0 1.83-.09 2.753-.274a10.199 10.199 0 002.986-1.13 9.167 9.167 0 002.11-1.78c1.073-1.183 1.712-2.507 2.18-3.636h.19c1.18 0 1.907-.482 2.308-.907.265-.281.461-.608.583-.958l.081-.258-.29-.16z" />
    </svg>
  ),
  SFML: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8.5 12 12.82 4.18 8.5 12 4.18zM4 9.68l7 3.5v7.14l-7-3.5V9.68zm16 0v7.14l-7 3.5v-7.14l7-3.5z" />
    </svg>
  ),
};

/* Marquee items — subset with distinctive icons for the scrolling strip */
const marqueeItems = ["C++", "Go", "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Git", "Docker", "Figma"];

/* Group tech by category for expanded view */
const techByCategory = techStack.reduce(
  (acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
  },
  {} as Record<string, string[]>,
);

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [techExpanded, setTechExpanded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX + 20, y: e.clientY - 100 });
  };

  return (
    <main
      className="relative z-10 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 pb-32"
      onMouseMove={handleMouseMove}
    >
      {/* ═══════════════════════════════════════ */}
      {/* HERO                                    */}
      {/* ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-12">
        {/* Nebula Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Top-right telemetry — font bumped ~10% */}
        <div className="absolute top-8 right-0 text-right space-y-1">
          <p className="font-mono text-xs sm:text-sm tracking-widest text-white/40 uppercase">
            Delhi, India
          </p>
          <LiveClock />
        </div>

        {/* Hero editorial image — right side */}
        <div className="absolute top-0 right-0 hidden lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img-fig01.png"
            alt="Satvik — editorial portrait"
            className="w-72 xl:w-94 h-auto grayscale opacity-70 hover:opacity-90 transition-opacity duration-700"
          />
          <p className="font-mono text-[9px] text-white/80 tracking-widest mt-2 text-right uppercase">
            Fig. 01
          </p>
        </div>

        {/* Name */}
        <h1 className="font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.9] tracking-tight text-white">
          Satvik
        </h1>

        {/* Phonetic */}
        <div className="mt-6 space-y-1 max-w-lg">
          <p className="font-mono text-sm text-white/40 tracking-wide">
            /ˈsɑːt.vɪk/{" "}
            <span className="text-white/20 ml-2 italic">noun</span>
          </p>
          <p className="font-sans text-base text-white/50 leading-relaxed">
            A builder of systems that work. Writes code that ships, breaks
            things worth breaking, and keeps the rest running.
          </p>
        </div>

        {/* Audio Player */}
        <AudioPlayer />

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-0">
          <p className="font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase rotate-90 origin-bottom-left translate-x-4">
            Scroll
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* EXPERIENCE                              */}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Experience
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              02 / 07
            </span>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="border-t border-white/10 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8"
              >
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl text-white">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs text-white/40 mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-mono text-xs text-white/30 tracking-wider uppercase">
                    {exp.period}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="font-sans text-sm text-white/45 leading-relaxed text-justify">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-mono text-xs text-purple-400 tracking-wider">
            Currently seeking SDE / tech roles · Open to full-time and
            internship opportunities
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* PROJECTS                                */}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Projects
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              03 / 07
            </span>
          </div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <div
                key={i}
                className="project-item border-t border-white/10 py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 group"
              >
                <div className="md:col-span-4 flex items-center gap-3">
                  <h3 className="font-serif text-2xl md:text-3xl text-white">
                    {project.name}
                  </h3>
                  {/* Preview trigger — only shown if hasPreview is true */}
                  {project.hasPreview && (
                    <button
                      className="preview-trigger opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/40 hover:text-violet-300 cursor-pointer"
                      onMouseEnter={() => setHoveredProject(i)}
                      onMouseLeave={() => setHoveredProject(null)}
                      aria-label={`Preview ${project.name}`}
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] text-white/30 tracking-wider leading-relaxed">
                    {project.tech}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <p className="font-sans text-sm text-white/45 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg text-white/40 group-hover:text-white/70 transition-colors"
                  >
                    ↗
                  </a>
                </div>

                {/* Hover Preview — tied to the eye icon */}
                {project.hasPreview && hoveredProject === i && (
                  <Image
                    src={project.img}
                    alt={`${project.name} preview`}
                    width={480}
                    height={300}
                    className="project-preview"
                    style={{
                      top: mousePos.y,
                      left: mousePos.x,
                      opacity: 1,
                    }}
                    unoptimized
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* TECH STACK */}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Stack
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              04 / 07
            </span>
          </div>

          {/* Toggle button — left aligned */}
          <button
            onClick={() => setTechExpanded(!techExpanded)}
            className="font-mono text-[10px] text-white/25 tracking-wider mb-4 uppercase hover:text-white/50 transition-colors cursor-pointer"
          >
            {techExpanded ? "↑ Show less" : "↓ View full stack"}
          </button>

          {/* Collapsed — infinite looping big icons, no text */}
          {!techExpanded && (
            <div className="marquee-container overflow-hidden py-10 border-t border-white/10">
              <div className="marquee-track" style={{ gap: "3.5rem" }}>
                {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((name, i) => (
                  <span
                    key={i}
                    className="w-10 h-10 text-white/35 hover:text-white/60 transition-colors duration-300 shrink-0"
                    title={name}
                  >
                    {techIcons[name]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Expanded — categorized with icon + name */}
          {techExpanded && (
            <div className="border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
              {Object.entries(techByCategory).map(([category, items]) => (
                <div key={category}>
                  <p className="font-mono text-[11px] text-white/25 tracking-widest uppercase mb-6 pb-3 border-b border-white/10">
                    {category}
                  </p>
                  <ul className="list-none space-y-5 m-0 p-0">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-sm text-white/50 flex items-center gap-4"
                      >
                        {techIcons[item] ? (
                          <span className="w-7 h-7 text-white/40 shrink-0">{techIcons[item]}</span>
                        ) : (
                          <span className="w-7 h-7 shrink-0 flex items-center justify-center font-mono text-xs text-white/25">◆</span>
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* EDUCATION (moved after Tech Stack)      */}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Education
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              05 / 07
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            {education.map((edu, i) => (
              <div key={i} className="border-t border-white/10 pt-6">
                <p className="font-mono text-xs text-white/30 tracking-wider uppercase mb-3">
                  {edu.label}
                </p>
                <h3 className="font-serif text-3xl text-white">
                  {edu.institution}
                </h3>
                <p className="font-sans text-sm text-white/40 mt-2 leading-relaxed">
                  {edu.desc}
                </p>
                <p className="font-mono text-[11px] text-white/20 mt-4">
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* THE AUTHOR*/}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              The Author
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              06 / 07
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Image — left side, 1.5× bigger */}
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/satvik-with-fork.jpg"
                alt="Satvik"
                className="w-60 md:w-[20rem] h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <p className="font-mono text-[9px] text-white/80 tracking-widest mt-2 uppercase">
                Fig. 02
              </p>
            </div>

            {/* Two thin text columns beside the image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
              {aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-sm md:text-base text-white/50 leading-[1.8] text-justify"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* YOUTUBE / STUDY WITH ME                 */}
      {/* ═══════════════════════════════════════ */}
      <section className="mt-32">
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-serif text-5xl md:text-6xl text-white">
              Study With Me
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase hidden md:block">
              07 / 07
            </span>
          </div>

          <p className="font-sans text-sm text-white/40 mb-8 max-w-lg">
            Sometimes I hit record and just work. No commentary, no edits —
            just the sound of keys and ambient music. Here&apos;s one of
            those sessions.
          </p>

          <div className="yt-container relative w-full max-w-3xl aspect-video overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/tioupB0pRmg"
              title="Study With Me"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* FOOTER                                  */}
      {/* ═══════════════════════════════════════ */}
      <footer className="mt-40 border-t border-white/10 pt-8 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-white">Satvik Deep</p>
            <p className="font-mono text-xs text-white/20 mt-2">
              Delhi, India · {new Date().getFullYear()}
            </p>
          </div>
          <div className="flex gap-8">
            {["GitHub", "LinkedIn", "Twitter", "Email"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors tracking-wider uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
