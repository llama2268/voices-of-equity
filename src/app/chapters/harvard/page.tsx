import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { placeholderChapters } from '@/content/placeholder-chapters';

export default function HarvardChapterPage() {
  const chapter = placeholderChapters.harvard;
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] bg-gradient-to-r" style={{background: `linear-gradient(to right, ${chapter.colors.primary}, ${chapter.colors.secondary})`}}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full bg-white shadow-xl overflow-hidden flex items-center justify-center">
            <img 
              src={chapter.logo} 
              alt={`${chapter.name} Logo`} 
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {chapter.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mx-4 italic text-center">
            {chapter.tagline}
          </p>
        </div>
      </div>

      {/* Introduction */}
      <Section title="About Our Chapter" subtitle="Leading Change at Harvard">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <em>{chapter.description.main}</em>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {chapter.description.secondary}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4" style={{color: chapter.colors.primary}}>Chapter Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Established:</span>
                  <span>{chapter.info.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{chapter.info.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">President:</span>
                  <span>{chapter.info.president}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Members:</span>
                  <span>{chapter.info.members}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Key Initiatives */}
      <Section variant="alternate" title="Our Initiatives" subtitle="Making Impact in Boston">
                <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {chapter.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{backgroundColor: chapter.colors.primary}}>
                  <span className="text-white font-bold text-xl">{initiative.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-gray-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section title="Leadership" subtitle="Meet Our Team">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
                                           <h3 className="text-2xl font-bold mb-2">{chapter.info.president}</h3>
              <p className="font-medium mb-4" style={{color: chapter.colors.primary}}>Chapter President</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                <em>{chapter.leadership.bio}</em>
              </p>
            </div>
          </div>
        </div>
      </Section>


    </PageLayout>
  );
} 