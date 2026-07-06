"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/Layout/PageLayout";
import { getInvolvedPage } from "@/content";
import Link from "next/link";
import { SocialCallout } from "@/components/ui/SocialCallout";
import {
  ResourceIcon,
  AwardIcon,
  LeadershipIcon,
} from "@/components/icons/ChapterIcons";
import { ChapterCard, ChapterData } from "@/components/Chapter/ChapterCard";
import AnimateOnScroll from "@/components/Animation/AnimateOnScroll";

import dynamic from "next/dynamic";
const ChapterMap = dynamic(() => import("@/components/Map/ChapterMap"), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-[#F7F8FA]" />,
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
    logo: "/icons/chapters/Formal_Seal_of_Ithaca_College,_Ithaca,_NY,_USA.svg.png",
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
    logo: "/icons/chapters/University of California, Los Angeles.png",
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

  const benefitsWithIcons = benefits.map((benefit, index) => ({
    ...benefit,
    icon:
      index === 0 ? (
        <ResourceIcon />
      ) : index === 1 ? (
        <AwardIcon />
      ) : (
        <LeadershipIcon />
      ),
  }));

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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#587FDA] to-[#4566B8] py-20 pt-32">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateOnScroll animation="fade-in">
            <Image
              src="/logo-new.png"
              alt="Voices of Equity"
              width={180}
              height={162}
              className="mx-auto mb-8"
            />
            <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
              Our Chapters
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
              Student-led chapters driving health equity across 60+ universities
              nationwide
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Photo Strip */}
      <div className="h-32 overflow-hidden bg-[#587FDA]">
        <div className="flex h-32 gap-1 overflow-hidden">
          <div className="voe-marquee flex h-32 w-max gap-1">
            {[...chapterPhotos, ...chapterPhotos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Chapter photo"
                width={192}
                height={128}
                className="h-32 w-48 rounded-md border-2 border-white/30 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Introduction & Benefits */}
      <section className="bg-blue-wash py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-[#4A5568]">
                {content}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {benefitsWithIcons.map((benefit, i) => (
              <AnimateOnScroll
                key={benefit.title}
                animation="scale-in"
                delay={i * 150}
              >
                <div className="hover-lift rounded-lg border border-gray-200 bg-white p-8">
                  <div className="mb-5 text-[#587FDA]">{benefit.icon}</div>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#171219]">
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed text-[#4A5568]">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Directory */}
      <section className="border-t border-gray-200 bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <div className="mb-16 text-center">
              <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                Universities Leading Change
              </p>
              <h2 className="font-display text-3xl font-bold text-[#171219] md:text-4xl">
                Our Chapters
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Filters & Search */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-wrap justify-center gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    selectedRegion === region
                      ? "bg-[#587FDA] text-white"
                      : "border border-gray-200 bg-white text-[#4A5568] hover:border-gray-300"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-[#4A5568] focus:border-[#587FDA] focus:outline-none focus:ring-1 focus:ring-[#587FDA]"
              />
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filteredChapters.map((chapter) => (
              <ChapterCard key={chapter.name} chapter={chapter} />
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              No chapters found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-warm-wash border-t border-gray-200 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
              Ready to Get Started?
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-[#171219] md:text-4xl">
              {cta.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[#4A5568]">
              {cta.description}
            </p>
            <Link
              href={cta.primaryButton.href}
              className="hover-scale inline-block rounded-md bg-[#587FDA] px-8 py-3 font-medium text-white transition-colors hover:bg-[#4566B8]"
            >
              {cta.primaryButton.text}
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Chapter Map */}
      <section className="border-t border-gray-200 bg-[#F7F8FA] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-10 text-center font-display text-3xl font-bold text-[#171219]">
              Our Chapter Locations
            </h2>
            <ChapterMap />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="border-t border-gray-200 bg-[#171219] py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
              Join Our Community
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80">
              Join our community of changemakers and help build a more equitable
              future for all.
            </p>
            <div className="flex justify-center gap-4">
              <SocialCallout />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
