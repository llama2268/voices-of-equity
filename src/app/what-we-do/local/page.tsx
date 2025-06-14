import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';

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
    eventLocation: "YMCA National Children’s Day - Cornell VOE",
    description:
      "Cornell's VOE leaders hosted a community art table at the Tompkins County local YMCA Children’s Day where children decorated rocks while parents received health equity info packets and resource flyers. VOE volunteers also built connections with local CBOs around health equity support.",
    image: ["/educate.jpg", "/painting.jpg", "/hero-image-3.png"]
  },
  // Add more events here as needed.
];

export default function LocalInitiativesPage() {
  return (
    <PageLayout title="Local Initiatives" subtitle="Undergrad Chapters & Events">
      <Section>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Local Initiatives</h1>
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