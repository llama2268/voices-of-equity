import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { chapters } from '@/content/chapters';
import Link from 'next/link';

export default function RequirementsPage() {
  const { requirements } = chapters;

  return (
    <PageLayout 
      title={requirements.title}
      subtitle={requirements.subtitle}
    >
      {/* Requirements Overview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.sections.map((section) => (
              <div 
                key={section.title}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all border-t-4 border-primary-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[#E4826D] mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Application Process */}
      <Section variant="alternate">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {requirements.process.title}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {requirements.process.steps.map((step) => (
              <div 
                key={step.number}
                className="relative"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#E4826D] text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Active Chapters */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Active Chapters</h2>
          <div className="grid md:grid-cols-1 gap-8">
            {chapters.activeChapters.map((chapter) => (
              <div 
                key={chapter.name}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={chapter.image}
                      alt={chapter.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {chapter.name}
                      </h3>
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                        Est. {chapter.established}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {chapter.members} active members
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Recent Achievements</h4>
                      <ul className="space-y-2">
                        {chapter.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start">
                            <span className="text-[#E4826D] mr-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        Contact: {chapter.leadership.contact}
                      </div>
                      <Link
                        href={`/chapters/${chapter.slug}`}
                        className="px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg transition-colors"
                      >
                        Visit Chapter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="highlight">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start a Chapter?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our growing network of changemakers and make a difference in your community.
          </p>
          <Link
            href="/get-involved/start"
            className="px-8 py-4 bg-[#E4826D] hover:bg-[#d97661] text-white rounded-lg font-semibold transition-colors"
          >
            Start Your Chapter
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
}