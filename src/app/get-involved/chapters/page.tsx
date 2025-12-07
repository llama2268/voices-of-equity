'use client';

import { useState } from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { getInvolvedPage } from '@/content';
import Link from 'next/link';
import Image from 'next/image';
import { Callout } from '@/components/ui/Callout';
import { SocialCallout } from '@/components/ui/SocialCallout';
import { ResourceIcon, AwardIcon, LeadershipIcon } from '@/components/icons/ChapterIcons';
import { ChapterCard, ChapterData } from '@/components/Chapter/ChapterCard';

// Dynamically import ChapterMap with SSR disabled
import dynamic from 'next/dynamic';
const ChapterMap = dynamic(() => import('@/components/Map/ChapterMap').then(mod => mod.ChapterMap), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 rounded-xl" />
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
  { name: 'UCF', logo: '/icons/chapters/Purdue University - West Lafayette.png', region: 'South', president: 'Laura Gomes Castro', foundingYear: '2025' }, // Placeholder - Logo Missing

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

  return (
    <PageLayout
      title={title}
      subtitle={subtitle}
      hero
      reduced
    >
      {/* Introduction & Benefits */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefitsWithIcons.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border-l-4 border-[#498B86]"
            >
              <div className="text-[#498B86] mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Chapter Directory */}
      <Section spacing="sm" title="Our Chapters" subtitle="Universities Leading Change">
        <div className="mx-auto max-w-7xl">

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Region Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedRegion === region
                    ? 'bg-[#498B86] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#498B86] focus:border-transparent"
              />
            </div>
          </div>

          {/* Chapters Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
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
      </Section>


      {/* Call to Action */}
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto">
          <Callout
            eyebrow="Ready to Get Started?"
            title={cta.title}
            description={cta.description}
            link={{
              text: cta.primaryButton.text,
              href: cta.primaryButton.href
            }}
            variant="impact"
          />
        </div>
      </Section>

      {/* Chapter Map */}
      <Section spacing="sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Chapter Locations</h2>
          <ChapterMap />
        </div>
      </Section>

      {/* Social Media Integration */}
      <section className="py-20 bg-[#607AD4] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
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
