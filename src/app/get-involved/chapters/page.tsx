"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/Layout/PageLayout";
import { getInvolvedPage } from "@/content";
import Link from "next/link";
import { ChapterCard, ChapterData } from "@/components/Chapter/ChapterCard";
import Reveal from '@/components/Animation/Reveal';
import PageHero from '@/components/Layout/PageHero';
import { Edge, GROUND } from '@/components/Layout/Seam';
import { ParallaxFill } from '@/components/Animation/Parallax';

// One photograph per benefit - the icon cards read as clip art.
const BENEFIT_PHOTOS = [
  { src: '/photos/education-team.jpg', alt: 'Chapter members with curriculum materials', position: 'center 30%' },
  { src: '/photos/ursinus-poster.jpg', alt: 'Students presenting a research poster', position: 'center 40%' },
  { src: '/photos/committee-presentation.jpg', alt: 'A chapter leader presenting to the room', position: 'center 30%' },
];

import dynamic from "next/dynamic";
const ChapterMap = dynamic(() => import("@/components/Map/ChapterMap"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-[#F1F5FD]" />,
});

const regions = [
  "All",
  "Northeast",
  "Midwest",
  "South",
  "West Coast",
  "Mountain West",
  "International",
];

const allChapters: ChapterData[] = [
  // Northeast
  {
    name: "Cornell University",
    logo: "/partners/cornell.png",
    region: "Northeast",
    president: "David Chege",
    foundingYear: "2025",
  },
  {
    name: "Carnegie Mellon University",
    logo: "/icons/chapters/Carnegie Mellon University.png",
    region: "Northeast",
    president: "Carley Clise",
    foundingYear: "2025",
  },
  {
    name: "Franklin & Marshall College",
    logo: "/icons/chapters/franklinmashall.png",
    region: "Northeast",
    president: "Andres Torres",
    foundingYear: "2025",
  },
  {
    name: "Ithaca College",
    logo: "/icons/chapters/Formal_Seal_of_Ithaca_College_Ithaca_NY_USA.svg.png",
    region: "Northeast",
    president: "Aya Oulida",
    foundingYear: "2025",
  },
  {
    name: "Northeastern University",
    logo: "/icons/chapters/Northeastern University (Boston).png",
    region: "Northeast",
    president: "Paul Choi",
    foundingYear: "2025",
  },
  {
    name: "MIT",
    logo: "/icons/chapters/Massachusetts Institute of Technology (MIT).png",
    region: "Northeast",
    president: "Angie Ayoubi",
    foundingYear: "2025",
  },
  {
    name: "New York University",
    logo: "/icons/chapters/New York University.png",
    region: "Northeast",
    president: "Elika Chande",
    foundingYear: "2025",
  },
  {
    name: "UConn",
    logo: "/icons/chapters/University of Connecticut.png",
    region: "Northeast",
    president: "Chiamaka Okafor",
    foundingYear: "2025",
  },
  {
    name: "University of Pittsburgh",
    logo: "/icons/chapters/University of Pittsburgh.png",
    region: "Northeast",
    president: "Isabel Bowser",
    foundingYear: "2025",
  },
  {
    name: "Harvard",
    logo: "/partners/harvard.png",
    region: "Northeast",
    president: "Maryam Al Qaderi & Matteo Burnett",
    foundingYear: "2025",
  },
  {
    name: "UPenn",
    logo: "/icons/chapters/University of Pennsylvania.png",
    region: "Northeast",
    president: "Christina Makinde & Emily Qin",
    foundingYear: "2025",
  },
  {
    name: "Yale",
    region: "Northeast",
    president: "Lauren Szeto & Vyttoria Saint Amand",
    foundingYear: "2025",
  },
  {
    name: "Hunter College",
    region: "Northeast",
    president: "Sebastian Wissa",
    foundingYear: "2025",
  },
  {
    name: "Ursinus College",
    region: "Northeast",
    president: "Ny'Jayah Boyd",
    foundingYear: "2025",
  },
  {
    name: "UMass Amherst",
    region: "Northeast",
    president: "Pravin Arunkumar",
    foundingYear: "2025",
  },
  {
    name: "Amherst College",
    logo: "/icons/chapters/amherst.png",
    region: "Northeast",
    president: "David Chege",
    foundingYear: "2025",
  },
  {
    name: "Binghamton University",
    logo: "/icons/chapters/binghamton.png",
    region: "Northeast",
    president: "Connor Entenberg",
    foundingYear: "2025",
  },

  // Midwest
  {
    name: "University of Illinois",
    logo: "/icons/chapters/University of Illinois at Urbana-Champaign.png",
    region: "Midwest",
    president: "Taylor Poces-Bell",
    foundingYear: "2025",
  },
  {
    name: "University of Michigan",
    logo: "/icons/chapters/University of Michigan-Ann Arbor.png",
    region: "Midwest",
    president: "Sarah Dong",
    foundingYear: "2025",
  },
  {
    name: "Carleton College",
    logo: "/icons/chapters/simplified-carleton-symbol.png",
    region: "Midwest",
    president: "Agnes Boahen",
    foundingYear: "2025",
  },
  {
    name: "Ohio State University",
    logo: "/icons/chapters/The Ohio State University - Columbus.png",
    region: "Midwest",
    president: "Alana Guo",
    foundingYear: "2025",
  },
  {
    name: "Ohio University",
    logo: "/icons/chapters/Ohio University.png",
    region: "Midwest",
    president: "Ian Nicholson",
    foundingYear: "2025",
  },
  {
    name: "Purdue University",
    logo: "/icons/chapters/Purdue University - West Lafayette.png",
    region: "Midwest",
    president: "Ashreya Singh",
    foundingYear: "2025",
  },
  {
    name: "WashU St. Louis",
    logo: "/icons/chapters/washu.png",
    region: "Midwest",
    president: "Mira Ugwuadu",
    foundingYear: "2025",
  },

  // South
  {
    name: "Howard University",
    logo: "/icons/chapters/Howard_University_seal.svg.png",
    region: "South",
    president: "Sophie Lee",
    foundingYear: "2025",
  },
  {
    name: "University of Florida",
    logo: "/icons/chapters/University of Florida.png",
    region: "South",
    president: "Maya Saleh",
    foundingYear: "2025",
  },
  {
    name: "UGA",
    region: "South",
    president: "Mahima Bhat",
    foundingYear: "2025",
  },
  {
    name: "Georgia Tech",
    logo: "/icons/chapters/Georgia Institute of Technology.png",
    region: "South",
    president: "Signe Reichrath",
    foundingYear: "2025",
  },
  {
    name: "UMD",
    region: "South",
    president: "Ella Amadio",
    foundingYear: "2025",
  },
  {
    name: "UT Austin",
    logo: "/icons/chapters/The University of Texas at Austin.png",
    region: "South",
    president: "Katherine Jan",
    foundingYear: "2025",
  },
  {
    name: "UNC Chapel Hill",
    logo: "/icons/chapters/University of North Carolina at Chapel Hill.png",
    region: "South",
    president: "Jaden Gao",
    foundingYear: "2025",
  },
  {
    name: "University of Arkansas",
    logo: "/icons/chapters/arkansas.png",
    region: "South",
    president: "Devon Cartwright",
    foundingYear: "2025",
  },
  {
    name: "U of South Carolina",
    logo: "/icons/chapters/south-carolina.png",
    region: "South",
    president: "Hannah Villanueva",
    foundingYear: "2025",
  },
  {
    name: "UCF",
    logo: "/icons/chapters/ucf.png",
    region: "South",
    president: "Laura Gomes",
    foundingYear: "2025",
  },

  // West Coast
  {
    name: "UC Berkeley",
    region: "West Coast",
    president: "Alec Guerra",
    foundingYear: "2025",
  },
  {
    name: "UCLA",
    logo: "/icons/chapters/University of California Los Angeles.png",
    region: "West Coast",
    president: "Aayzhia Rianne Cruz",
    foundingYear: "2025",
  },
  {
    name: "USC",
    logo: "/icons/chapters/University of Southern California.png",
    region: "West Coast",
    president: "Jaden Gao",
    foundingYear: "2025",
  },
  {
    name: "University of San Diego",
    logo: "/icons/chapters/san-diego.png",
    region: "West Coast",
    president: "TBD",
    foundingYear: "2025",
  },

  // Mountain West
  {
    name: "CU Boulder",
    logo: "/icons/chapters/University of Colorado at Boulder.png",
    region: "Mountain West",
    president: "Muqadas Sharifi",
    foundingYear: "2025",
  },

  // International
  {
    name: "University of Toronto",
    region: "International",
    president: "Ryan Ferguson",
    foundingYear: "2025",
  },
  {
    name: "McGill University",
    logo: "/icons/chapters/McGill University.png",
    region: "International",
    president: "Kevin Liew",
    foundingYear: "2025",
  },
];

export default function ChaptersPage() {
  const { title, subtitle, content, benefits, cta, activeChapters } =
    getInvolvedPage.chapters;
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = allChapters.filter((chapter) => {
    const matchesRegion =
      selectedRegion === "All" || chapter.region === selectedRegion;
    const matchesSearch = chapter.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const chapterPhotos = [
    "/images/chapters/howard-1.jpg",
    "/images/chapters/cmu-1.jpg",
    "/images/chapters/uconn-1.jpg",
    "/images/chapters/arkansas-1.jpg",
    "/images/chapters/arkansas-3.jpg",
    "/images/chapters/howard-4.jpg",
    "/images/chapters/cmu-3.jpg",
    "/images/chapters/uconn-2.jpg",
  ];

  return (
    <PageLayout>
      {/* ─── 1. Hero ─────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="Get Involved"
        title="Our Chapters"
        subtitle="Student-led chapters driving health equity across 70+ universities nationwide."
        image="/photos/cmu-activities-fair.jpg"
        imageAlt="Chapter members at a campus activities fair"
        objectPosition="center 44%"
      />

      {/* ─── 2. Photo strip - chapters in motion ─────────────────────── */}
      <div className="voe-ground-blue voe-texture overflow-hidden py-3">
        <div className="voe-marquee flex h-36 w-max gap-2">
          {/* four copies: the loop shifts by half the strip, so one half must
              be wider than any viewport or the ground shows at the end */}
          {[...chapterPhotos, ...chapterPhotos, ...chapterPhotos, ...chapterPhotos].map((src, i) => (
            <div key={i} className="relative h-36 w-52 shrink-0 overflow-hidden rounded-xl">
              <Image src={src} alt="" fill className="object-cover" sizes="208px" />
            </div>
          ))}
        </div>
      </div>

      {/* ─── 3. What a chapter is, and what it gets ─────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="voe-eyebrow mb-4">On the Ground</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                Where the work actually happens
              </h2>
              <p className="voe-lead">{content}</p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} variant="up" delay={i * 110} className="h-full">
                <article className="voe-card flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_18px_44px_rgba(14,26,51,0.12)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ParallaxFill
                      src={BENEFIT_PHOTOS[i]!.src}
                      alt={BENEFIT_PHOTOS[i]!.alt}
                      objectPosition={BENEFIT_PHOTOS[i]!.position}
                      strength={40}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="voe-display-sm font-display mb-2 text-[#171219]">{benefit.title}</h3>
                    <div className="voe-rule mb-4" />
                    <p className="text-[15px] leading-relaxed text-[#4A5568]">{benefit.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. Where we are - the map, up front ─────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-8 text-center">
              <p className="voe-eyebrow mb-3">Coast to Coast</p>
              <h2 className="voe-display-md font-display text-[#171219]">Where we are</h2>
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-[0_18px_44px_rgba(14,26,51,0.10)] md:p-8">
              <ChapterMap />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 5. Directory ────────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="voe-eyebrow mb-3">Universities Leading Change</p>
                <h2 className="voe-display-md font-display text-[#171219]">Find your chapter</h2>
              </div>
              <label className="relative w-full md:w-72">
                <span className="sr-only">Search chapters</span>
                <svg className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by school"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#171219]/12 bg-white py-3 pl-11 pr-4 text-[15px] text-[#171219] placeholder:text-[#6B7280] focus:border-[#2A8D87] focus:outline-none focus:ring-2 focus:ring-[#2A8D87]/25"
                />
              </label>
            </div>
          </Reveal>

          {/* region filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {regions.map((region) => {
              const active = selectedRegion === region;
              const n = region === "All" ? allChapters.length : allChapters.filter((c) => c.region === region).length;
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#2A8D87] text-white"
                      : "bg-[#F1F5FD] text-[#171219] hover:bg-[#E6EDFC]"
                  }`}
                >
                  {region}
                  <span className={`ml-2 text-xs ${active ? "text-white/75" : "text-[#6B7280]"}`}>{n}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {filteredChapters.map((chapter, i) => (
              <Reveal key={chapter.name} variant="scale" delay={Math.min(i, 9) * 40} className="!block">
                <ChapterCard chapter={chapter} />
              </Reveal>
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="py-12 text-center text-[#6B7280]">
              No chapters match that yet — try another region or spelling.
            </div>
          )}
        </div>
      </section>

      {/* ─── 6. Start one ────────────────────────────────────────────── */}
      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal variant="left">
              <p className="voe-eyebrow mb-4">Not on the list?</p>
              <h2 className="voe-display-lg font-display mb-5 text-white">{cta.title}</h2>
              <p className="voe-lead mb-9 max-w-xl">{cta.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={cta.primaryButton.href} className="voe-btn voe-btn--on-dark">
                  {cta.primaryButton.text}
                </Link>
                <Link href="/get-involved/requirements" className="voe-btn voe-btn--outline-white">
                  What it takes
                </Link>
              </div>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="voe-photo voe-ar-landscape shadow-[0_24px_60px_rgba(14,26,51,0.28)]">
                <ParallaxFill
                  src="/photos/gbm-brainstorm.jpg"
                  alt="Chapter members planning at a whiteboard"
                  strength={60}
                  objectPosition="center 40%"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
