"use client";

import { useState } from "react";
import Image from "next/image";
import type { Chapter } from "@/content/chapters";

export type ChapterData = Chapter;

function getInitials(name: string) {
  return name
    .replace(/[,&]/g, " ")
    .split(/\s+/)
    .filter((part) => !["of", "the", "and", "at", "in"].includes(part.toLowerCase()))
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

/**
 * One chapter in the directory: mark, name, region and founding year.
 *
 * There used to be a panel that slid up on hover carrying the chapter
 * president's name. Presidents turn over every year, so those names went
 * stale faster than anyone could maintain them and they are gone. What is
 * left is stable, which means the card is now a plain tile rather than a
 * button that reveals something.
 */
export function ChapterCard({ chapter }: { chapter: ChapterData }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="voe-chapter group relative flex h-full min-h-[11rem] w-full flex-col items-center justify-center gap-0 rounded-2xl border border-[#171219]/8 bg-white p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,26,51,0.14)]">
      <div className="relative mb-3 flex h-14 w-14 shrink-0 items-center justify-center">
        {chapter.logo && !logoError ? (
          <Image
            src={chapter.logo}
            alt=""
            fill
            className="object-contain"
            sizes="56px"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6EDFC] font-display text-base font-bold text-[#587FDA]">
            {getInitials(chapter.name)}
          </div>
        )}
      </div>
      <h3 className="font-display text-[14px] font-bold leading-tight text-[#171219] [text-wrap:balance]">
        {chapter.name}
      </h3>
      <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
        {chapter.region} · Est. {chapter.foundingYear}
      </p>
    </div>
  );
}
