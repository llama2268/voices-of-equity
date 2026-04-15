'use client';

import { useCallback, useRef, useState } from 'react';

interface ChapterLocation {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  region: string;
}

interface MarkerLocation extends ChapterLocation {
  point: {
    x: number;
    y: number;
  };
}

interface PanState {
  x: number;
  y: number;
}

const CHAPTERS: ChapterLocation[] = [
  // Northeast
  { name: 'Cornell University', coordinates: [-76.4735, 42.4534], region: 'Northeast' },
  { name: 'Carnegie Mellon University', coordinates: [-79.9426, 40.4433], region: 'Northeast' },
  { name: 'MIT', coordinates: [-71.0942, 42.3601], region: 'Northeast' },
  { name: 'Princeton University', coordinates: [-74.6551, 40.3431], region: 'Northeast' },
  { name: 'Brown University', coordinates: [-71.4025, 41.8268], region: 'Northeast' },
  { name: 'New York University', coordinates: [-73.9965, 40.7295], region: 'Northeast' },
  { name: 'Binghamton University', coordinates: [-75.9693, 42.0881], region: 'Northeast' },
  { name: 'UConn', coordinates: [-72.2540, 41.8077], region: 'Northeast' },
  { name: 'Amherst College', coordinates: [-72.5170, 42.3709], region: 'Northeast' },
  { name: 'Franklin & Marshall College', coordinates: [-76.3024, 40.0432], region: 'Northeast' },
  { name: 'Northeastern University', coordinates: [-71.0892, 42.3398], region: 'Northeast' },
  { name: 'Vassar College', coordinates: [-73.8937, 41.6867], region: 'Northeast' },
  { name: 'Ithaca College', coordinates: [-76.4950, 42.4221], region: 'Northeast' },
  { name: 'University of Pittsburgh', coordinates: [-79.9533, 40.4444], region: 'Northeast' },

  // Midwest
  { name: 'Ohio State University', coordinates: [-83.0282, 39.9998], region: 'Midwest' },
  { name: 'Ohio University', coordinates: [-82.1013, 39.3292], region: 'Midwest' },
  { name: 'Purdue University', coordinates: [-86.9244, 40.4274], region: 'Midwest' },
  { name: 'University of Illinois', coordinates: [-88.2272, 40.1020], region: 'Midwest' },
  { name: 'WashU St. Louis', coordinates: [-90.3108, 38.6488], region: 'Midwest' },
  { name: 'Carleton College', coordinates: [-93.1544, 44.4615], region: 'Midwest' },
  { name: 'University of Michigan', coordinates: [-83.7382, 42.2780], region: 'Midwest' },

  // South
  { name: 'Howard University', coordinates: [-77.0199, 38.9226], region: 'South' },
  { name: 'UT Austin', coordinates: [-97.7341, 30.2849], region: 'South' },
  { name: 'University of Arkansas', coordinates: [-94.1748, 36.0672], region: 'South' },
  { name: 'University of Florida', coordinates: [-82.3549, 29.6436], region: 'South' },
  { name: 'UCF', coordinates: [-81.2001, 28.6024], region: 'South' },
  { name: 'UNC Chapel Hill', coordinates: [-79.0469, 35.9049], region: 'South' },
  { name: 'University of South Carolina', coordinates: [-81.0348, 33.9940], region: 'South' },

  // West Coast
  { name: 'UCLA', coordinates: [-118.4452, 34.0689], region: 'West Coast' },
  { name: 'University of San Diego', coordinates: [-117.1611, 32.7157], region: 'West Coast' },

  // International
  { name: 'McGill University', coordinates: [-73.5772, 45.5049], region: 'International' },
];

const MAP_WIDTH = 960;
const MAP_HEIGHT = 560;
const DEFAULT_PAN: PanState = { x: 0, y: 0 };
const MAP_BOUNDS = {
  minLongitude: -128,
  maxLongitude: -60,
  minLatitude: 24,
  maxLatitude: 56,
};

const LATITUDE_LINES = [25, 30, 35, 40, 45, 50, 55];
const LONGITUDE_LINES = [-120, -110, -100, -90, -80, -70];
const REGION_LABELS = [
  { label: 'West Coast', coordinates: [-119, 40] as [number, number] },
  { label: 'Midwest', coordinates: [-92, 43] as [number, number] },
  { label: 'South', coordinates: [-90, 31] as [number, number] },
  { label: 'Northeast', coordinates: [-74, 43.5] as [number, number] },
  { label: 'International', coordinates: [-74, 50.5] as [number, number] },
];

const LANDMASSES: [number, number][][] = [
  [
    [-127, 51.5],
    [-124, 48.5],
    [-124, 44.5],
    [-122, 39],
    [-118.5, 34],
    [-116, 32],
    [-111, 30.5],
    [-104, 28.5],
    [-96, 26.5],
    [-87.5, 25.5],
    [-82, 26.5],
    [-80.5, 28.5],
    [-80.5, 31],
    [-77.5, 34.5],
    [-75, 39.5],
    [-71.5, 41.5],
    [-67, 44.5],
    [-64, 47],
    [-66, 49.5],
    [-71, 50.5],
    [-79, 50.8],
    [-88, 50.3],
    [-98, 50.5],
    [-108, 53],
    [-119, 56],
    [-126, 54],
  ],
  [
    [-97, 49.8],
    [-94.5, 47.5],
    [-91.5, 46],
    [-89, 47.2],
    [-87, 47.8],
    [-86, 49.2],
    [-89, 50],
    [-93, 50.5],
  ],
];

function projectCoordinates([longitude, latitude]: [number, number]) {
  const x =
    ((longitude - MAP_BOUNDS.minLongitude) /
      (MAP_BOUNDS.maxLongitude - MAP_BOUNDS.minLongitude)) *
    MAP_WIDTH;
  const y =
    MAP_HEIGHT -
    ((latitude - MAP_BOUNDS.minLatitude) /
      (MAP_BOUNDS.maxLatitude - MAP_BOUNDS.minLatitude)) *
      MAP_HEIGHT;

  return { x, y };
}

function buildPath(points: [number, number][]) {
  return points
    .map((point, index) => {
      const { x, y } = projectCoordinates(point);
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');
}

const LAND_PATHS = LANDMASSES.map((points) => `${buildPath(points)} Z`);
const MARKERS: MarkerLocation[] = CHAPTERS.map((chapter) => ({
  ...chapter,
  point: projectCoordinates(chapter.coordinates),
}));
const REGION_SUMMARY = ['Northeast', 'Midwest', 'South', 'West Coast', 'International'].map(
  (region) => ({
    region,
    count: CHAPTERS.filter((chapter) => chapter.region === region).length,
  }),
);

export function SimpleChapterMap() {
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<PanState>(DEFAULT_PAN);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{
    startX: number;
    startY: number;
    originPan: PanState;
  } | null>(null);

  const clampPan = useCallback((nextPan: PanState, nextZoom: number) => {
    if (nextZoom <= 1.05) {
      return DEFAULT_PAN;
    }

    const bounds = containerRef.current?.getBoundingClientRect();
    const width = bounds?.width ?? MAP_WIDTH;
    const height = bounds?.height ?? MAP_HEIGHT;
    const maxX = ((nextZoom - 1) * width) / 2 + 40;
    const maxY = ((nextZoom - 1) * height) / 2 + 40;

    return {
      x: Math.max(-maxX, Math.min(maxX, nextPan.x)),
      y: Math.max(-maxY, Math.min(maxY, nextPan.y)),
    };
  }, []);

  const updateZoom = useCallback(
    (nextZoom: number) => {
      setZoom(nextZoom);
      setPan((currentPan) => clampPan(currentPan, nextZoom));
    },
    [clampPan],
  );

  const handleZoomIn = useCallback(() => {
    setZoom((currentZoom) => {
      const nextZoom = Math.min(currentZoom * 1.35, 4);
      setPan((currentPan) => clampPan(currentPan, nextZoom));
      return nextZoom;
    });
  }, [clampPan]);

  const handleZoomOut = useCallback(() => {
    setZoom((currentZoom) => {
      const nextZoom = Math.max(currentZoom / 1.35, 1);
      setPan((currentPan) => clampPan(currentPan, nextZoom));
      return nextZoom;
    });
  }, [clampPan]);

  const handleReset = useCallback(() => {
    setZoom(1);
    setPan(DEFAULT_PAN);
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (zoom >= 4) {
      handleReset();
      return;
    }

    updateZoom(Math.min(zoom * 1.5, 4));
  }, [handleReset, updateZoom, zoom]);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });

      if (!dragStateRef.current) {
        return;
      }

      setPan(
        clampPan(
          {
            x: dragStateRef.current.originPan.x + (event.clientX - dragStateRef.current.startX),
            y: dragStateRef.current.originPan.y + (event.clientY - dragStateRef.current.startY),
          },
          zoom,
        ),
      );
    },
    [clampPan, zoom],
  );

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.button !== 0 || zoom <= 1) {
        return;
      }

      dragStateRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        originPan: pan,
      };
    },
    [pan, zoom],
  );

  const stopDragging = useCallback(() => {
    dragStateRef.current = null;
  }, []);

  const hoveredChapterData = hoveredChapter
    ? MARKERS.find((chapter) => chapter.name === hoveredChapter) ?? null
    : null;

  return (
    <div
      ref={containerRef}
      className={`relative h-[420px] w-full overflow-hidden rounded-xl border border-[#D8DEEB] bg-[#F7F8FA] md:h-[500px] ${
        zoom > 1 ? 'cursor-grab' : 'cursor-default'
      }`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={stopDragging}
      onMouseLeave={() => {
        stopDragging();
        setHoveredChapter(null);
      }}
      onDoubleClick={handleDoubleClick}
      onWheel={(event) => event.preventDefault()}
    >
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '50% 50%',
          transitionDuration: dragStateRef.current ? '0ms' : '300ms',
        }}
      >
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="chapter-map-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9FBFF" />
              <stop offset="55%" stopColor="#EAF0FF" />
              <stop offset="100%" stopColor="#DEE7FB" />
            </linearGradient>
            <linearGradient id="chapter-map-land" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E6EBF7" />
            </linearGradient>
            <pattern
              id="chapter-map-grid"
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#C8D3EA" strokeWidth="1" />
            </pattern>
            <filter id="chapter-map-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#587FDA" floodOpacity="0.12" />
            </filter>
          </defs>

          <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#chapter-map-bg)" />
          <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#chapter-map-grid)" opacity="0.45" />

          {LATITUDE_LINES.map((latitude) => {
            const { y } = projectCoordinates([MAP_BOUNDS.minLongitude, latitude]);
            return (
              <g key={`lat-${latitude}`}>
                <line
                  x1="0"
                  y1={y}
                  x2={MAP_WIDTH}
                  y2={y}
                  stroke="#B9C6E1"
                  strokeWidth="1"
                  strokeDasharray="8 10"
                  opacity="0.4"
                />
                <text x="18" y={y - 6} fill="#6E7C98" fontSize="11">
                  {latitude}°N
                </text>
              </g>
            );
          })}

          {LONGITUDE_LINES.map((longitude) => {
            const { x } = projectCoordinates([longitude, MAP_BOUNDS.minLatitude]);
            return (
              <g key={`lon-${longitude}`}>
                <line
                  x1={x}
                  y1="0"
                  x2={x}
                  y2={MAP_HEIGHT}
                  stroke="#B9C6E1"
                  strokeWidth="1"
                  strokeDasharray="8 10"
                  opacity="0.35"
                />
                <text x={x + 8} y={MAP_HEIGHT - 18} fill="#6E7C98" fontSize="11">
                  {Math.abs(longitude)}°W
                </text>
              </g>
            );
          })}

          {LAND_PATHS.map((path, index) => (
            <path
              key={`land-${index}`}
              d={path}
              fill="url(#chapter-map-land)"
              stroke="#C7D2E8"
              strokeWidth="2"
              filter="url(#chapter-map-shadow)"
              opacity={index === 0 ? 1 : 0.85}
            />
          ))}

          {REGION_LABELS.map((region) => {
            const point = projectCoordinates(region.coordinates);
            return (
              <g key={region.label} transform={`translate(${point.x} ${point.y})`}>
                <rect
                  x="-44"
                  y="-14"
                  width="88"
                  height="28"
                  rx="14"
                  fill="#FFFFFF"
                  fillOpacity="0.82"
                  stroke="#D5DDEC"
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#5C6B87"
                  fontSize="12"
                  fontWeight="600"
                >
                  {region.label}
                </text>
              </g>
            );
          })}

          {MARKERS.map((chapter) => {
            const isActive = hoveredChapter === chapter.name;

            return (
              <g
                key={chapter.name}
                transform={`translate(${chapter.point.x} ${chapter.point.y})`}
                onMouseEnter={() => setHoveredChapter(chapter.name)}
                onMouseLeave={() => setHoveredChapter(null)}
                onClick={() =>
                  setHoveredChapter((current) => (current === chapter.name ? null : chapter.name))
                }
                className="cursor-pointer"
              >
                <circle
                  r={isActive ? 15 : 11}
                  fill="#587FDA"
                  fillOpacity={isActive ? 0.22 : 0.14}
                  style={{ transition: 'all 0.2s ease' }}
                />
                <circle
                  r={isActive ? 5.5 : 4.5}
                  fill="#587FDA"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  style={{ transition: 'all 0.2s ease' }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white/75 via-white/20 to-transparent" />

      <div className="absolute left-4 top-4 z-20 max-w-[240px] rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#6A7892]">Chapter Footprint</p>
        <p className="mt-1 text-xl font-semibold text-[#171219]">{CHAPTERS.length} campuses mapped</p>
        <p className="mt-1 text-sm text-[#4A5568]">
          A North America view of active student chapters, with Canada shown for McGill.
        </p>
      </div>

      <div className="absolute bottom-4 left-4 right-24 z-20 flex flex-wrap gap-2">
        {REGION_SUMMARY.map((item) => (
          <div
            key={item.region}
            className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-medium text-[#4A5568] shadow-sm backdrop-blur"
          >
            {item.region}: {item.count}
          </div>
        ))}
      </div>

      <div className="absolute top-3 right-3 z-20 flex flex-col gap-1">
        <button
          onClick={handleZoomIn}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg font-medium text-[#171219] shadow-sm transition-colors hover:bg-gray-50"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={handleZoomOut}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-lg font-medium text-[#171219] shadow-sm transition-colors hover:bg-gray-50"
          aria-label="Zoom out"
        >
          &minus;
        </button>
        <button
          onClick={handleReset}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-[#171219] shadow-sm transition-colors hover:bg-gray-50"
          aria-label="Reset view"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Zoom level indicator */}
      {zoom > 1 && (
        <div className="absolute right-4 top-36 z-20 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs text-[#4A5568] shadow-sm">
          {zoom.toFixed(1)}x
        </div>
      )}

      {hoveredChapterData && (
        <div
          className="pointer-events-none absolute z-20 rounded-xl bg-[#171219] px-3 py-2 text-sm text-white shadow-lg"
          style={{
            left: tooltipPos.x + 12,
            top: tooltipPos.y - 10,
            transform: 'translateY(-100%)',
          }}
        >
          <div className="font-medium">{hoveredChapterData.name}</div>
          <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/60">
            {hoveredChapterData.region}
          </div>
        </div>
      )}

      <div className="absolute bottom-3 right-3 z-20 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#4A5568] shadow-sm">
        Double-click or use controls to zoom
      </div>
    </div>
  );
}

export default SimpleChapterMap;
