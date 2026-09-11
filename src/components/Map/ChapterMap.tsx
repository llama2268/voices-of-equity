"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { chapters as roster } from "@/content/chapters";

const geoUrl = "/geo/states-10m.json";

/**
 * Markers come from the shared roster in src/content/chapters.ts, so the
 * map and the directory can never disagree about who has a chapter. The
 * projection below is geoAlbersUsa, which draws the United States only,
 * so chapters without coordinates (the international ones) are skipped.
 */
const chapters = roster.filter(
  (c): c is typeof c & { coordinates: [number, number] } => Boolean(c.coordinates),
);

const stateStyle = {
  default: {
    fill: "#DCE5F8",
    stroke: "#FBFFFE",
    strokeWidth: 0.5,
    outline: "none",
  },
  hover: {
    fill: "#DCE5F8",
    stroke: "#FBFFFE",
    strokeWidth: 0.5,
    outline: "none",
  },
  pressed: {
    fill: "#DCE5F8",
    stroke: "#FBFFFE",
    strokeWidth: 0.5,
    outline: "none",
  },
};

export default function ChapterMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} style={stateStyle} />
            ))
          }
        </Geographies>
        {chapters.map((chapter) => (
          <Marker
            key={chapter.name}
            coordinates={chapter.coordinates}
            onMouseEnter={() => setHovered(chapter.name)}
            onMouseLeave={() => setHovered(null)}
            style={{ default: { cursor: "pointer" } }}
          >
            <circle
              r={hovered === chapter.name ? 7 : 5}
              fill={hovered === chapter.name ? "#23736E" : "#2A8D87"}
              style={{ transition: "r 200ms ease, fill 200ms ease" }}
            />
          </Marker>
        ))}
      </ComposableMap>
      {hovered && (
        <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-[#171219] px-4 py-2 font-display text-sm font-semibold text-white shadow-[0_10px_30px_rgba(14,26,51,0.2)]">
          {hovered}
        </div>
      )}
    </div>
  );
}
