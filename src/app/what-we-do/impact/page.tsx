'use client';
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import ImpactTracker from '@/components/Stats/ImpactTracker';
import Image from 'next/image';
import Link from 'next/link';

interface LocalInitiative {
  eventTitle: string;
  chapter: string;
  eventLocation: string;
  description: string;
  image?: string[];
}

const localInitiatives: LocalInitiative[] = [
  {
    eventTitle: "Painting for Awareness",
    chapter: "Cornell Chapter",
    eventLocation: "YMCA National Children’s Day - Cornell VoE",
    description:
      "Cornell's VoE leaders hosted a community art table at the Tompkins County local YMCA Children’s Day where children decorated rocks while parents received health equity info packets and resource flyers. VoE volunteers also built connections with local CBOs around health equity support.",
    image: ["/educate.jpg", "/paintingtry.jpg", "/hero-image-3.png"]
  },
  // Add more events here as needed.
];

export default function ImpactPage() {
  return (
    <PageLayout title="Our Impact" subtitle="Driving Change Across Communities">

      {/* Impact Tracker Section */}
      <Section>
        <div className="max-w-7xl mx-auto">
          <ImpactTracker />
        </div>
      </Section>

      {/* Main Impact Content */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">National Impacts at a Glance</h2>
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 mb-12 text-left">
            <h3 className="text-2xl font-bold mb-4 text-[#498B86]">Impacts from Health Equity Week Fall 2025</h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center"><span className="text-[#498B86] mr-2">✓</span> $2k+ raised</li>
              <li className="flex items-center"><span className="text-[#498B86] mr-2">✓</span> $1000+ in VoE Grant funding distributed</li>
              <li className="flex items-center"><span className="text-[#498B86] mr-2">✓</span> 30+ University campuses engaged across North America</li>
              <li className="flex items-center"><span className="text-[#498B86] mr-2">✓</span> 200+ members involved</li>
              <li className="flex items-center"><span className="text-[#498B86] mr-2">✓</span> 1000+ students reached through educational programing</li>
            </ul>
          </div>

          <div className="grid gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#498B86]">
              <h3 className="text-xl font-bold mb-3">$40,000+ Raised for Health Equity Initiatives</h3>
              <p className="text-gray-600">Fueling community impact. Voices of Equity has mobilized over $40,000 to support programs that expand access to care and advance health equity nationwide.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-secondary-500">
              <h3 className="text-xl font-bold mb-3">55+ Chapters Across Undergraduate Institutions Worldwide</h3>
              <p className="text-gray-600">A growing global network. With more than 55 chapters across the U.S. and abroad, our student-led movement is embedding health equity into campuses and communities everywhere.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary-500">
              <h3 className="text-xl font-bold mb-3">60,000+ People Reached Through Health Equity Education</h3>
              <p className="text-gray-600">Expanding awareness and action. Our content and programming have reached over 60,000 people, with more than 350 individuals trained through our health equity curriculum.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/what-we-do/impact" className="inline-block px-8 py-3 bg-[#498B86] text-white font-semibold rounded-lg hover:bg-[#3A6F6B] transition-colors">
              Learn more about our impact
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Initiatives in Action</h2>
          <div className="space-y-8">
            {localInitiatives.map((initiative, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-primary-600"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-primary-600 mb-2">
                    {initiative.eventTitle}
                  </h2>
                  <p className="text-lg font-semibold text-gray-800 mb-1">
                    {initiative.chapter}
                  </p>
                  <p className="text-md text-gray-600 mb-4">
                    {initiative.eventLocation}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {initiative.description}
                  </p>
                  {initiative.image && initiative.image.length > 0 && (
                    <div className="flex gap-4 mt-4">
                      {initiative.image.map((img, imgIdx) => (
                        <div key={imgIdx} className="relative w-4/5 h-80">
                          <Image
                            src={img}
                            alt={`${initiative.eventTitle} - image ${imgIdx + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
