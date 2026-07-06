"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const chapters: { name: string; coordinates: [number, number] }[] = [
  // Northeast
  { name: "Cornell University", coordinates: [-76.4735, 42.4534] },
  { name: "Carnegie Mellon University", coordinates: [-79.9426, 40.4433] },
  { name: "Franklin & Marshall College", coordinates: [-76.3055, 40.0432] },
  { name: "Ithaca College", coordinates: [-76.4966, 42.4224] },
  { name: "Northeastern University", coordinates: [-71.0892, 42.3398] },
  { name: "MIT", coordinates: [-71.0942, 42.3601] },
  { name: "New York University", coordinates: [-73.9965, 40.7295] },
  { name: "UConn", coordinates: [-72.254, 41.8077] },
  { name: "University of Pittsburgh", coordinates: [-79.9533, 40.4444] },
  { name: "Harvard", coordinates: [-71.1167, 42.377] },
  { name: "UPenn", coordinates: [-75.1932, 39.9522] },
  { name: "Yale", coordinates: [-72.9223, 41.3163] },
  { name: "Hunter College", coordinates: [-73.964, 40.7685] },
  { name: "Ursinus College", coordinates: [-75.4569, 40.1923] },
  { name: "UMass Amherst", coordinates: [-72.5301, 42.3912] },
  { name: "Amherst College", coordinates: [-72.517, 42.3709] },
  { name: "Binghamton University", coordinates: [-75.9699, 42.0887] },

  // Midwest
  { name: "University of Illinois", coordinates: [-88.2272, 40.102] },
  { name: "University of Michigan", coordinates: [-83.7382, 42.278] },
  { name: "Carleton College", coordinates: [-93.154, 44.4615] },
  { name: "Ohio State University", coordinates: [-83.028, 39.9995] },
  { name: "Ohio University", coordinates: [-82.1013, 39.324] },
  { name: "Purdue University", coordinates: [-86.9234, 40.4237] },
  { name: "WashU St. Louis", coordinates: [-90.3108, 38.6488] },

  // South
  { name: "Howard University", coordinates: [-77.0199, 38.9226] },
  { name: "University of Florida", coordinates: [-82.3459, 29.6436] },
  { name: "UGA", coordinates: [-83.3773, 33.9519] },
  { name: "Georgia Tech", coordinates: [-84.3963, 33.7756] },
  { name: "UMD", coordinates: [-76.943, 38.9869] },
  { name: "UT Austin", coordinates: [-97.7341, 30.2849] },
  { name: "UNC Chapel Hill", coordinates: [-79.0469, 35.9049] },
  { name: "University of Arkansas", coordinates: [-94.1748, 36.0686] },
  { name: "University of South Carolina", coordinates: [-81.0348, 33.994] },
  { name: "UCF", coordinates: [-81.2001, 28.6024] },

  // West Coast
  { name: "UC Berkeley", coordinates: [-122.2585, 37.8719] },
  { name: "UCLA", coordinates: [-118.4452, 34.0689] },
  { name: "USC", coordinates: [-118.2851, 34.0224] },
  { name: "University of San Diego", coordinates: [-117.1881, 32.772] },

  // Mountain West
  { name: "CU Boulder", coordinates: [-105.2705, 40.0076] },
];

const stateStyle = {
  default: {
    fill: "#E8E8E8",
    stroke: "#FFFFFF",
    strokeWidth: 0.5,
    outline: "none",
  },
  hover: {
    fill: "#E8E8E8",
    stroke: "#FFFFFF",
    strokeWidth: 0.5,
    outline: "none",
  },
  pressed: {
    fill: "#E8E8E8",
    stroke: "#FFFFFF",
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
              fill="#587FDA"
              style={{ transition: "r 200ms ease" }}
            />
          </Marker>
        ))}
      </ComposableMap>
      {hovered && (
        <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-md">
          {hovered}
        </div>
      )}
    </div>
  );
}
