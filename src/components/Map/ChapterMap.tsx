'use client';

import * as React from 'react';
import Map, { Marker, Popup, NavigationControl, FullscreenControl, ScaleControl, GeolocateControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';
import Link from 'next/link';

// Mapbox Token - User must provide this in .env.local
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface ChapterLocation {
    name: string;
    latitude: number;
    longitude: number;
    region?: string;
    logo?: string;
}

const CHAPTERS: ChapterLocation[] = [
    { name: 'Amherst College', latitude: 42.3732, longitude: -72.5199, region: 'Northeast', logo: '/icons/chapters/amherst.png' },
    { name: 'Binghamton University', latitude: 42.0987, longitude: -75.9180, region: 'Northeast', logo: '/icons/chapters/binghamton.png' },
    { name: 'Boston University', latitude: 42.3601, longitude: -71.0589, region: 'Northeast', logo: '/icons/chapters/Northeastern University (Boston).png' }, // Using Northeastern as proxy for Boston area or generic
    { name: 'Brown University', latitude: 41.8240, longitude: -71.4128, region: 'Northeast', logo: '/icons/chapters/brown.png' },
    { name: 'Carleton College', latitude: 44.4583, longitude: -93.1616, region: 'Midwest', logo: '/icons/chapters/simplified-carleton-symbol.png' },
    { name: 'Carnegie Mellon & UPitt', latitude: 40.4406, longitude: -79.9959, region: 'Northeast', logo: '/icons/chapters/Carnegie Mellon University.png' },
    { name: 'Franklin & Marshall', latitude: 40.0379, longitude: -76.3055, region: 'Northeast', logo: '/icons/chapters/franklinmashall.png' },
    { name: 'Howard University', latitude: 38.9072, longitude: -77.0369, region: 'South', logo: '/icons/chapters/Howard_University_seal.svg.png' },
    { name: 'Cornell University', latitude: 42.4440, longitude: -76.5019, region: 'Northeast', logo: '/partners/cornell.png' },
    { name: 'MIT', latitude: 42.3736, longitude: -71.1097, region: 'Northeast', logo: '/icons/chapters/Massachusetts Institute of Technology (MIT).png' },
    { name: 'McGill University', latitude: 45.5017, longitude: -73.5673, region: 'International', logo: '/icons/chapters/McGill University.png' },
    { name: 'New York University', latitude: 40.7128, longitude: -74.0060, region: 'Northeast', logo: '/icons/chapters/New York University.png' },
    { name: 'Ohio State University', latitude: 39.9612, longitude: -82.9988, region: 'Midwest', logo: '/icons/chapters/The Ohio State University - Columbus.png' },
    { name: 'Ohio University', latitude: 39.3292, longitude: -82.1013, region: 'Midwest', logo: '/icons/chapters/Ohio University.png' },
    { name: 'Princeton University', latitude: 40.3573, longitude: -74.6672, region: 'Northeast', logo: '/icons/chapters/Princeton University.png' },
    { name: 'Purdue University', latitude: 40.4259, longitude: -86.9081, region: 'Midwest', logo: '/icons/chapters/Purdue University - West Lafayette.png' },
    { name: 'University of Arkansas', latitude: 36.0626, longitude: -94.1574, region: 'South', logo: '/icons/chapters/arkansas.png' },
    { name: 'UCLA', latitude: 34.0522, longitude: -118.2437, region: 'West Coast', logo: '/icons/chapters/University of California, Los Angeles.png' },
    { name: 'UCF', latitude: 28.5383, longitude: -81.3792, region: 'South', logo: '/icons/chapters/Purdue University - West Lafayette.png' },
    { name: 'UConn', latitude: 41.8084, longitude: -72.2495, region: 'Northeast', logo: '/icons/chapters/University of Connecticut.png' },
    { name: 'University of Florida', latitude: 29.6516, longitude: -82.3248, region: 'South', logo: '/icons/chapters/University of Florida.png' },
    { name: 'UI Urbana-Champaign', latitude: 40.1164, longitude: -88.2434, region: 'Midwest', logo: '/icons/chapters/University of Illinois at Urbana-Champaign.png' },
    { name: 'University of South Carolina', latitude: 34.0007, longitude: -81.0348, region: 'South', logo: '/icons/chapters/south-carolina.png' },
    { name: 'UT Austin', latitude: 30.2672, longitude: -97.7431, region: 'South', logo: '/icons/chapters/The University of Texas at Austin.png' },
    { name: 'WashU St. Louis', latitude: 38.6270, longitude: -90.1994, region: 'Midwest', logo: '/icons/chapters/washu.png' },
    // New Additions from User List
    { name: 'Providence, RI', latitude: 41.8240, longitude: -71.4128, region: 'Northeast' },
    { name: 'Carleton College', latitude: 44.4583, longitude: -93.1616, region: 'Midwest', logo: '/icons/chapters/simplified-carleton-symbol.png' }, // Northfield, MN
    { name: 'Washington DC (Howard)', latitude: 38.9072, longitude: -77.0369, region: 'South', logo: '/icons/chapters/Howard_University_seal.svg.png' },
    { name: 'Gainesville, FL', latitude: 29.6516, longitude: -82.3248, region: 'South', logo: '/icons/chapters/University of Florida.png' }, // U of Florida
    { name: 'Montreal, QC', latitude: 45.5017, longitude: -73.5673, region: 'International', logo: '/icons/chapters/McGill University.png' }, // McGill
    { name: 'Storrs, CT', latitude: 41.8084, longitude: -72.2495, region: 'Northeast', logo: '/icons/chapters/University of Connecticut.png' }, // UConn
];

export function ChapterMap() {
    const [popupInfo, setPopupInfo] = React.useState<ChapterLocation | null>(null);

    // If no token is provided, show a placeholder or warning
    if (!MAPBOX_TOKEN) {
        return (
            <div className="w-full h-[500px] flex items-center justify-center bg-gray-100 rounded-xl border border-gray-200">
                <div className="text-center p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Map Unavailable</h3>
                    <p className="text-gray-600">Please configure the NEXT_PUBLIC_MAPBOX_TOKEN environment variable to view the interactive map.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-200 relative">
            <Map
                initialViewState={{
                    longitude: -95,
                    latitude: 40,
                    zoom: 3
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle="mapbox://styles/mapbox/light-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                scrollZoom={false}
            >
                <GeolocateControl position="top-left" />
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />

                {CHAPTERS.map((city, index) => (
                    <Marker
                        key={`marker-${index}`}
                        longitude={city.longitude}
                        latitude={city.latitude}
                        anchor="bottom"
                        onClick={(e) => {
                            e.originalEvent.stopPropagation();
                            e.originalEvent.preventDefault(); // Prevent scroll on click
                            setPopupInfo(city);
                        }}
                    >
                        <div className="cursor-pointer text-red-600 hover:text-red-700 transition-colors hover:scale-110 transform duration-200">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 drop-shadow-md">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </Marker>
                ))}

                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={popupInfo.longitude}
                        latitude={popupInfo.latitude}
                        onClose={() => setPopupInfo(null)}
                        className="z-50"
                    >
                        <div className="p-3 min-w-[200px] text-center">
                            <div className="flex items-center justify-center mb-2 gap-2">
                                {/* University Icon */}
                                {popupInfo.logo ? (
                                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-50 border border-gray-100 shadow-sm flex-shrink-0">
                                        <Image
                                            src={popupInfo.logo}
                                            alt={popupInfo.name}
                                            fill
                                            className="object-contain p-0.5"
                                        />
                                    </div>
                                ) : (
                                    <div className="p-2 bg-[#498B86]/10 rounded-full">
                                        <svg className="w-4 h-4 text-[#498B86]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                )}
                                <h3 className="font-bold text-sm text-gray-900 leading-tight">{popupInfo.name}</h3>
                            </div>

                            {popupInfo.region && <p className="text-xs text-cool-gray-500 mb-3 uppercase tracking-wide font-medium">{popupInfo.region}</p>}

                            <Link
                                href="/get-involved/chapters"
                                className="inline-flex items-center justify-center text-xs bg-[#498B86] text-white px-4 py-1.5 rounded-full hover:bg-[#3A6F6B] transition-colors font-medium shadow-sm !min-h-0 !min-w-0"
                            >
                                View Chapter
                            </Link>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
}
