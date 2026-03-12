import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';

type InitiativeSlide =
  | {
      type: 'heading' | 'text';
      title: string;
      body: string[];
    }
  | {
      type: 'list';
      title: string;
      intro: string[];
      bullets: string[];
    }
  | {
      type: 'highlights';
      title: string;
      intro: string[];
      images: { label: string; src: string}[];
    }
  | {
      type: 'image';
      title: string;
      src: string;
    };

const initiativeSlides: InitiativeSlide[] = [
  {
    type: 'heading',
    title: 'Spring 2026',
    body: []
  },
  {
    type: 'text',
    title: 'Community Access and Resource Education (CARE)',
    body: [
      'The Community Access and Resource Education (CARE) Packet initiative is a Voices of Equity service-based project designed to improve access to care beyond the clinical setting.',
      'Healthcare does not end at discharge. For many patients, recovery and long-term health depend on access to food, housing, transportation, financial assistance, mental health support, and other community-based services. CARE Packets help bridge this gap by connecting patients with vetted, local resources that address the social determinants of health.',
      'Through this initiative, Voices of Equity chapters develop patient-facing resource packets tailored to the specific needs of their surrounding communities. Each packet is grounded in publicly available Community Health Assessments (CHAs) and Community Health Improvement Plans (CHIPs), ensuring alignment with documented local health priorities. Resources included in CARE Packets are verified for accuracy and relevance, with the goal of being usable, accessible, and trusted by both patients and healthcare providers.',
      'CARE Packets are intended for use by hospitals, clinics, urgent care centers, and community health organizations as supplemental discharge or referral materials. By creating free, locally relevant tools that can be updated annually, the initiative prioritizes sustainable impact over one-time interventions.'
    ]
  },
  {
    type: 'image',
    title: '',
    src: '/highlights/slide_4.png'
  },
  {
    type: 'heading',
    title: 'Fall 2025',
    body: []
  },
  {
    type: 'text',
    title: 'National Health Equity Week',
    body: [
      'Addiction is not only a medical condition, but also a deeply rooted equity issue. Substance use and abuse are shaped by disparities in access to care, stigma, systemic bias, and socioeconomic barriers. Systemic and institutional factors shape differences in education about substance use, physical access to effective treatments, and financial support for rehabilitation services, among other inequities. Understanding these effects and differences is essential to comprehending the occurrence and prevalence of addiction and identifying ways to support those in need. Through this initiative, we aimed to educate, advocate, and take action to support individuals and communities impacted by addiction.'
    ]
  },
  {
    type: 'list',
    title: '',
    intro: [
      'As part of this initiative, all chapters participated in Health Equity Week (October 20–26, 2025), a coordinated effort across more than 40 universities. This week included:'
    ],
    bullets: [
      'Fundraising efforts to support national and local partners advancing equity in addiction care.',
      'Advocacy campaigns that raised awareness and pushed for systemic change.',
      'Educational modules that grounded members in the science, policies, and lived realities of addiction.',
      'Panels and guest speakers featuring professionals, advocates, and individuals with lived experience who inspired meaningful action.'
    ]
  },
  {
    type: 'highlights',
      title: 'Highlights from National Health Equity Week',
      intro: [
        'See highlights from the week through raffle results and chapter tabling moments from participating schools.'
      ],
      images: [
        {
          label: 'Raffle winner',
          // Place these files in /public/highlights/ and keep these exact names
          src: '/highlights/raffle-winner.jpeg'
        },
        {
          label: 'Chapter tabling highlight #1',
          src: '/highlights/tabling-highlight-1.jpg',
        },
        {
          label: 'Chapter tabling highlight #2',
          src: '/highlights/tabling-highlight-2.jpg'
        },
        {
          label: 'Chapter tabling highlight #3',
          src: '/highlights/tabling-highlight-3.jpg'
        }
      ]
  }
];

export default function NationalPage() {
  return (
    <PageLayout title="National Initiatives" subtitle="Advancing health equity through national initiatives" reduced>
      <Section spacing="sm" className="pt-6 pb-10 relative overflow-hidden bg-gradient-to-b from-[#F7FAFF] via-[#EEF4FF] to-[#F4FBF8]">
        <div className="absolute -top-28 left-1/2 h-72 w-72 rounded-full bg-[#607AD4]/18 blur-3xl -translate-x-1/2" />
        <div className="absolute top-40 -left-16 h-64 w-64 rounded-full bg-[#72B7A8]/12 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#498B86]/16 blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10 px-4">
            <p className="text-xs uppercase tracking-[0.35em] text-[#607AD4] mb-3">National Initiatives</p>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">Scroll through the latest initiative work</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we pair direct community support with education and advocacy in a horizontally scrollable format.
            </p>
          </div>

          <div className="overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-[#607AD4]/40 scrollbar-track-gray-200">
            <div className="flex gap-6 px-2 md:px-4">
              {initiativeSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className="min-w-[92vw] sm:min-w-[82vw] md:min-w-[72vw] lg:min-w-[64vw] max-w-5xl flex-shrink-0 snap-center"
                >
                  <div
                    className={`rounded-3xl border p-8 md:p-12 shadow-[0_24px_70px_-46px_rgba(96,122,212,0.45)] backdrop-blur h-[66vh] overflow-hidden flex flex-col ${
                      slide.type === 'heading'
                        ? 'border-[#B9CAE9] bg-gradient-to-br from-[#E9F1FF] via-[#DDE9FF] to-[#EEF7F2]'
                        : slide.type === 'image'
                          ? 'border-[#C9D6F3] bg-gradient-to-br from-[#F3F7FF] via-[#EAF1FF] to-[#F4FBF8]'
                          : 'border-[#D6E0F5] bg-gradient-to-br from-white via-[#F7FAFF] to-[#ECF4FF]'
                    }`}
                  >
                    <div className="mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#607AD4] via-[#7B97E8] to-[#4C9A90]" />
                    <p className="text-xs uppercase tracking-[0.2em] text-[#607AD4] mb-3">
                      Slide {String(index + 1).padStart(2, '0')}
                    </p>
                    {slide.type === 'heading' && (
                      <div className="h-[56vh] flex flex-col items-center justify-center text-center">
                        <h3 className="font-semibold text-gray-900 text-5xl md:text-6xl mb-2">
                          {slide.title}
                        </h3>
                        <div className="max-w-3xl space-y-4 text-lg md:text-xl text-gray-600 leading-relaxed">
                          {slide.body.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {slide.type === 'text' && (
                      <div className="space-y-4 rounded-2xl border border-white/70 bg-white/65 p-6 text-gray-700 leading-relaxed text-base md:text-lg overflow-y-auto pr-3 shadow-inner" style={{ maxHeight: '56vh' }}>
                        {slide.body.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {slide.type === 'image' && (
                      <div className="rounded-2xl overflow-hidden border border-[#607AD4]/20 h-full flex items-center justify-center bg-gradient-to-br from-white to-[#EDF3FF] shadow-inner">
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}

                    {slide.type === 'list' && (
                    <div className="space-y-6 rounded-2xl border border-white/70 bg-white/65 p-6 text-gray-700 leading-relaxed text-base md:text-lg overflow-y-auto pr-3 shadow-inner" style={{ maxHeight: '56vh' }}>
                        {slide.intro.map((paragraph, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg">
                            {paragraph}
                          </p>
                        ))}
                        <ul className="space-y-3 text-base md:text-lg text-gray-700">
                          {slide.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#607AD4] mr-3 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {slide.type === 'highlights' && (
                      <div className="space-y-6 rounded-2xl border border-white/70 bg-white/55 p-6 overflow-y-auto pr-3 shadow-inner" style={{ maxHeight: '56vh' }}>
                        {slide.intro.map((paragraph, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed text-base md:text-lg">
                            {paragraph}
                          </p>
                        ))}
                        <div className="grid sm:grid-cols-2 gap-4">
                          {slide.images.map((image) => (
                            <a
                              key={image.label}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group overflow-hidden rounded-xl border border-[#607AD4]/25 bg-gradient-to-b from-white to-[#EEF4FF] transition-transform hover:-translate-y-1"
                            >
                              <div className="aspect-video w-full bg-gray-100">
                                <img
                                  src={image.src}
                                  alt={image.label}
                                  className={`w-full h-full object-cover ${image.label === 'Raffle winner' ? 'object-top' : ''}`}
                                  style={image.label === 'Raffle winner' ? { objectPosition: 'center 20%' } : undefined}
                                />
                              </div>
                              <div className="p-3 text-sm text-gray-700 group-hover:text-[#607AD4]">
                                {image.label}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            Scroll horizontally to explore all initiative slides
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
