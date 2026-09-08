"use client";

import { useState } from "react";
import Image from "next/image";

export interface ChapterData {
  name: string;
  logo?: string;
  region: string;
  president: string;
  foundingYear: string;
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => !["of", "the", "and", "&"].includes(part.toLowerCase()))
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

/**
 * One chapter in the directory.
 *
 * The previous card was a 256px click-to-flip; forty of them made the
 * directory taller than the rest of the page combined, and the flip hid
 * the only two facts on the back. This one is shorter, five to a row, and
 * the president and founding year slide up on hover (or focus, or tap).
 */
export function ChapterCard({ chapter }: { chapter: ChapterData }) {
  const [logoError, setLogoError] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      onBlur={() => setOpen(false)}
      aria-expanded={open}
      aria-label={`${chapter.name} — president ${chapter.president}, established ${chapter.foundingYear}`}
      className={`voe-chapter group relative flex h-48 w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#171219]/8 bg-white p-5 text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,26,51,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#587FDA] ${
        open ? "is-open" : ""
      }`}
    >
      <div className="relative mb-3 flex h-16 w-16 items-center justify-center">
        {chapter.logo && !logoError ? (
          <Image
            src={chapter.logo}
            alt=""
            fill
            className="object-contain"
            sizes="64px"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E6EDFC] font-display text-lg font-bold text-[#587FDA]">
            {getInitials(chapter.name)}
          </div>
        )}
      </div>
      <h3 className="font-display text-[15px] font-bold leading-tight text-[#171219]">
        {chapter.name}
      </h3>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
        {chapter.region}
      </p>

      {/* slides up over the card */}
      <div
        aria-hidden
        className="voe-chapter__detail absolute inset-x-0 bottom-0 translate-y-full bg-[#587FDA] px-4 py-3 text-left text-white transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-visible:translate-y-0"
      >
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/70">President</p>
        <p className="font-display text-[14px] font-bold leading-tight">{chapter.president}</p>
        <p className="mt-1 text-[12px] text-white/80">Est. {chapter.foundingYear}</p>
      </div>
    </button>
  );
}
