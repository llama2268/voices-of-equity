'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageLayout from '@/components/Layout/PageLayout';
import { getInvolvedPage } from '@/content';
import Link from 'next/link';
import { SocialCallout } from '@/components/ui/SocialCallout';
import { ResourceIcon, AwardIcon, LeadershipIcon } from '@/components/icons/ChapterIcons';
import { ChapterCard, ChapterData } from '@/components/Chapter/ChapterCard';

// Dynamically import ChapterMap with SSR disabled
import dynamic from 'next/dynamic';
const ChapterMap = dynamic(() => import('@/components/Map/SimpleChapterMap'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-[#F7F8FA]" />
});

const regions = ['All', 'Northeast', 'Midwest', 'South', 'West Coast', 'International'];

// Full Chapter List
const allChapters: ChapterData[] = [
  // Northeast
  { name: 'Cornell University', logo: '/partners/cornell.png', region: 'Northeast', president: 'David Chege', foundingYear: '2025' },
  { name: 'Carnegie Mellon University', logo: '/icons/chapters/Carnegie Mellon University.png', region: 'Northeast', president: 'Carley Clise', foundingYear: '2025' },
  { name: 'Franklin & Marshall College', logo: '/icons/chapters/franklinmashall.png', region: 'Northeast', president: 'Andres Torres', foundingYear: '2025' },
  { name: 'Ithaca College', logo: '/icons/chapters/Formal_Seal_of_Ithaca_College,_Ithaca,_NY,_USA.svg.png', region: 'Northeast', president: 'Aya Oulida', foundingYear: '2025' },
  { name: 'Northeastern University', logo: '/icons/chapters/Northeastern University (Boston).png', region: 'Northeast', president: 'Paul Choi', foundingYear: '2025' },
  { name: 'MIT', logo: '/icons/chapters/Massachusetts Institute of Technology (MIT).png', region: 'Northeast', president: 'Angie Ayoubi', foundingYear: '2025' },
  { name: 'New York University', logo: '/icons/chapters/New York University.png', region: 'Northeast', president: 'Elika Chande', foundingYear: '2025' },
  { name: 'UConn', logo: '/icons/chapters/University of Connecticut.png', region: 'Northeast', president: 'Chiamaka Okafor', foundingYear: '2025' },
  { name: 'University of Pittsburgh', logo: '/icons/chapters/University of Pittsburgh.png', region: 'Northeast', president: 'Isabel Bowser', foundingYear: '2025' },
  { name: 'Amherst College', logo: '/icons/chapters/amherst.png', region: 'Northeast', president: 'David Chege', foundingYear: '2025' },
  { name: 'Vassar College', logo: '/icons/chapters/vassar.png', region: 'Northeast', president: 'Nika Jalali', foundingYear: '2025' },
  { name: 'Binghamton University', logo: '/icons/chapters/binghamton.png', region: 'Northeast', president: 'Connor Entenberg', foundingYear: '2025' },
  { name: 'Brown University', logo: '/icons/chapters/brown.png', region: 'Northeast', president: 'Allison Shea', foundingYear: '2025' },
  { name: 'Princeton University', logo: '/icons/chapters/Princeton University.png', region: 'Northeast', president: 'Nushreth Bhuiyan', foundingYear: '2025' },

  // Midwest
  { name: 'University of Illinois', logo: '/icons/chapters/University of Illinois at Urbana-Champaign.png', region: 'Midwest', president: 'Taylor Poces-Bell', foundingYear: '2025' },
  { name: 'University of Michigan', logo: '/icons/chapters/University of Michigan-Ann Arbor.png', region: 'Midwest', president: 'Sarah Dong', foundingYear: '2025' },
  { name: 'Carleton College', logo: '/icons/chapters/simplified-carleton-symbol.png', region: 'Midwest', president: 'Agnes Boahen', foundingYear: '2025' },
  { name: 'Ohio State University', logo: '/icons/chapters/The Ohio State University - Columbus.png', region: 'Midwest', president: 'Alana Guo', foundingYear: '2025' },
  { name: 'Ohio University', logo: '/icons/chapters/Ohio University.png', region: 'Midwest', president: 'Ian Nicholson', foundingYear: '2025' },
  { name: 'Purdue University', logo: '/icons/chapters/Purdue University - West Lafayette.png', region: 'Midwest', president: 'Ashreya Singh', foundingYear: '2025' },
  { name: 'WashU St. Louis', logo: '/icons/chapters/washu.png', region: 'Midwest', president: 'Mira Ugwuadu', foundingYear: '2025' },

  // South
  { name: 'Howard University', logo: '/icons/chapters/Howard_University_seal.svg.png', region: 'South', president: 'Sophie Lee', foundingYear: '2025' },
  { name: 'University of Florida', logo: '/icons/chapters/University of Florida.png', region: 'South', president: 'Maya Saleh', foundingYear: '2025' },
  { name: 'UT Austin', logo: '/icons/chapters/The University of Texas at Austin.png', region: 'South', president: 'Katherine Jan', foundingYear: '2025' },
  { name: 'UNC Chapel Hill', logo: '/icons/chapters/University of North Carolina at Chapel Hill.png', region: 'South', president: 'Jaden Gao', foundingYear: '2025' },
  { name: 'University of Arkansas', logo: '/icons/chapters/arkansas.png', region: 'South', president: 'Devon Cartwright', foundingYear: '2025' },
  { name: 'U of South Carolina', logo: '/icons/chapters/south-carolina.png', region: 'South', president: 'Hannah Villanueva', foundingYear: '2025' },
  { name: 'UCF', logo: '/icons/chapters/ucf.png', region: 'South', president: 'Laura Gomes Castro', foundingYear: '2025' },

  // West Coast
  { name: 'UCLA', logo: '/icons/chapters/University of California, Los Angeles.png', region: 'West Coast', president: 'Aayzhia Rianne Cruz', foundingYear: '2025' },
  { name: 'University of San Diego', logo: '/icons/chapters/san-diego.png', region: 'West Coast', president: 'TBD', foundingYear: '2025' },

  // International
  { name: 'McGill University', logo: '/icons/chapters/McGill University.png', region: 'International', president: 'Kevin Liew', foundingYear: '2025' },
];

export default function ChaptersPage() {
  const { title, subtitle, content, benefits, cta, activeChapters } = getInvolvedPage.chapters;
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = allChapters.filter(chapter => {
    const matchesRegion = selectedRegion === 'All' || chapter.region === selectedRegion;
    const matchesSearch = chapter.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const benefitsWithIcons = benefits.map((benefit, index) => ({
    ...benefit,
    icon: index === 0 ? <ResourceIcon /> : index === 1 ? <AwardIcon /> : <LeadershipIcon />
  }));

  const chapterPhotos = [
    '/images/chapters/howard-1.jpg',
    '/images/chapters/cmu-1.jpg',
    '/images/chapters/uconn-1.jpg',
    '/images/chapters/arkansas-1.jpg',
    '/images/chapters/arkansas-3.jpg',
    '/images/chapters/howard-4.jpg',
    '/images/chapters/cmu-3.jpg',
    '/images/chapters/uconn-2.jpg',
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#587FDA] to-[#4566B8] py-20 pt-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Image src="/logo-new.png" alt="Voices of Equity" width={180} height={162} className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">Our Chapters</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Student-led chapters driving health equity across 55+ universities nationwide
          </p>
        </div>
      </section>

      {/* Photo Strip */}
      <div className="bg-[#587FDA] overflow-hidden h-32">
        <div className="flex gap-1 overflow-hidden h-32">
          <div className="flex gap-1 w-max voe-marquee h-32">
            {[...chapterPhotos, ...chapterPhotos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Chapter photo"
                width={192}
                height={128}
                className="h-32 w-48 object-cover rounded-md border-2 border-white/30"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Introduction & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-[#4A5568] leading-relaxed">
              {content}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefitsWithIcons.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-all"
              >
                <div className="text-[#587FDA] mb-5">{benefit.icon}</div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-3">{benefit.title}</h3>
                <p className="text-[#4A5568] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Directory */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Universities Leading Change</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219]">Our Chapters</h2>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Region Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedRegion === region
                    ? 'bg-[#587FDA] text-white'
                    : 'bg-white border border-gray-200 text-[#4A5568] hover:border-gray-300'
                    }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search chapters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#587FDA] focus:border-[#587FDA] text-[#4A5568]"
              />
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredChapters.map((chapter) => (
              <ChapterCard key={chapter.name} chapter={chapter} />
            ))}
          </div>

          {filteredChapters.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No chapters found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Ready to Get Started?</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219] mb-4">{cta.title}</h2>
          <p className="text-lg text-[#4A5568] leading-relaxed mb-8">{cta.description}</p>
          <Link
            href={cta.primaryButton.href}
            className="inline-block px-8 py-3 rounded-md bg-[#587FDA] hover:bg-[#4566B8] text-white font-medium transition-colors"
          >
            {cta.primaryButton.text}
          </Link>
        </div>
      </section>

      {/* Chapter Map */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-display text-[#171219] mb-10 text-center">Our Chapter Locations</h2>
          <ChapterMap />
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-24 bg-[#171219] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Join Our Community</h2>
          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            <SocialCallout />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
