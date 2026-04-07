'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface ChapterLocation {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  region: string;
}

const CHAPTERS: ChapterLocation[] = [
  // Northeast
  { name: 'Cornell University', coordinates: [-76.4735, 42.4534], region: 'Northeast' },
  { name: 'Carnegie Mellon', coordinates: [-79.9426, 40.4433], region: 'Northeast' },
  { name: 'MIT', coordinates: [-71.0942, 42.3601], region: 'Northeast' },
  { name: 'Princeton University', coordinates: [-74.6551, 40.3431], region: 'Northeast' },
  { name: 'Brown University', coordinates: [-71.4025, 41.8268], region: 'Northeast' },
  { name: 'NYU', coordinates: [-73.9965, 40.7295], region: 'Northeast' },
  { name: 'Binghamton University', coordinates: [-75.9693, 42.0881], region: 'Northeast' },
  { name: 'UConn', coordinates: [-72.2540, 41.8077], region: 'Northeast' },
  { name: 'Amherst College', coordinates: [-72.5170, 42.3709], region: 'Northeast' },
  { name: 'Franklin & Marshall', coordinates: [-76.3024, 40.0432], region: 'Northeast' },
  { name: 'Northeastern University', coordinates: [-71.0892, 42.3398], region: 'Northeast' },
  { name: 'Vassar College', coordinates: [-73.8937, 41.6867], region: 'Northeast' },
  { name: 'Ithaca College', coordinates: [-76.4950, 42.4221], region: 'Northeast' },
  { name: 'U of Pittsburgh', coordinates: [-79.9533, 40.4444], region: 'Northeast' },

  // Midwest
  { name: 'Ohio State University', coordinates: [-83.0282, 39.9998], region: 'Midwest' },
  { name: 'Ohio University', coordinates: [-82.1013, 39.3292], region: 'Midwest' },
  { name: 'Purdue University', coordinates: [-86.9244, 40.4274], region: 'Midwest' },
  { name: 'UI Urbana-Champaign', coordinates: [-88.2272, 40.1020], region: 'Midwest' },
  { name: 'WashU St. Louis', coordinates: [-90.3108, 38.6488], region: 'Midwest' },
  { name: 'Carleton College', coordinates: [-93.1544, 44.4615], region: 'Midwest' },
  { name: 'U of Michigan', coordinates: [-83.7382, 42.2780], region: 'Midwest' },

  // South
  { name: 'Howard University', coordinates: [-77.0199, 38.9226], region: 'South' },
  { name: 'UT Austin', coordinates: [-97.7341, 30.2849], region: 'South' },
  { name: 'U of Arkansas', coordinates: [-94.1748, 36.0672], region: 'South' },
  { name: 'U of Florida', coordinates: [-82.3549, 29.6436], region: 'South' },
  { name: 'UCF', coordinates: [-81.2001, 28.6024], region: 'South' },
  { name: 'UNC Chapel Hill', coordinates: [-79.0469, 35.9049], region: 'South' },
  { name: 'U of South Carolina', coordinates: [-81.0348, 33.9940], region: 'South' },

  // West Coast
  { name: 'UCLA', coordinates: [-118.4452, 34.0689], region: 'West Coast' },
  { name: 'U of San Diego', coordinates: [-117.1611, 32.7157], region: 'West Coast' },

  // International
  { name: 'McGill University', coordinates: [-73.5772, 45.5049], region: 'International' },
];

export function SimpleChapterMap() {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = useCallback(() => {
    setZoom((z) => Math.min(z * 1.5, 8));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((z) => Math.max(z / 1.5, 1));
  }, []);

  const handleReset = useCallback(() => {
    setZoom(1);
  }, []);

  // Block scroll-to-zoom — only allow double-tap/double-click
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    el.addEventListener('wheel', preventWheel, { passive: false });
    return () => el.removeEventListener('wheel', preventWheel);
  }, []);

  // Double-click / double-tap to zoom
  const handleDoubleClick = useCallback(() => {
    setZoom((z) => {
      // If already zoomed in past 4x, reset to 1
      if (z >= 4) return 1;
      return Math.min(z * 2, 8);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white rounded-lg border border-gray-200 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltipPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onDoubleClick={handleDoubleClick}
    >
      {/* Zoom controls */}
      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[#171219] hover:bg-gray-50 transition-colors shadow-sm text-lg font-medium"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[#171219] hover:bg-gray-50 transition-colors shadow-sm text-lg font-medium"
          aria-label="Zoom out"
        >
          &minus;
        </button>
        <button
          onClick={handleReset}
          className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center text-[#171219] hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Reset view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Zoom level indicator */}
      {zoom > 1 && (
        <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-white/90 border border-gray-200 rounded text-xs text-[#4A5568] shadow-sm">
          {zoom.toFixed(1)}x
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 150, center: [-40, 35] }}
        width={960}
        height={500}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup
          center={[-85, 40]}
          zoom={zoom}
          minZoom={1}
          maxZoom={8}
          onMoveEnd={({ zoom: newZoom }: { zoom: number }) => setZoom(newZoom)}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey || geo.id}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#FFFFFF"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#E0E0E4', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {CHAPTERS.map((chapter) => (
            <Marker
              key={chapter.name}
              coordinates={chapter.coordinates}
              onMouseEnter={() => setHoveredChapter(chapter.name)}
              onMouseLeave={() => setHoveredChapter(null)}
            >
              <circle
                r={hoveredChapter === chapter.name ? 6 : 4}
                fill="#587FDA"
                fillOpacity={hoveredChapter === chapter.name ? 1 : 0.8}
                stroke="#FFFFFF"
                strokeWidth={1.5}
                style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {hoveredChapter && (
        <div
          className="absolute z-10 pointer-events-none px-3 py-2 bg-[#171219] text-white text-sm rounded-md shadow-lg whitespace-nowrap"
          style={{
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            transform: 'translateY(-100%)',
          }}
        >
          {hoveredChapter}
          <div className="text-[10px] text-gray-400 mt-0.5">
            {CHAPTERS.find((c) => c.name === hoveredChapter)?.region}
          </div>
        </div>
      )}

      {/* Instructions hint */}
      <div className="absolute bottom-3 left-3 z-20 px-2 py-1 bg-white/80 border border-gray-100 rounded text-[10px] text-[#4A5568]">
        Double-click to zoom &middot; Drag to pan
      </div>
    </div>
  );
}

export default SimpleChapterMap;
