import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { whatWeDo } from '@/content/content';

export default function SummaryPage() {
  const { summary } = whatWeDo;
  
  return (
    <PageLayout
      title="Executive Summary"
      subtitle="Our Impact & Strategic Vision"
      hero
      reduced
    >
      {/* Key Metrics */}
      <Section
        title="Impact Overview"
        subtitle="Key Performance Indicators"
      >
        <div className="grid md:grid-cols-4 gap-8">
          {summary.metrics.map((metric) => (
            <div 
              key={metric.label} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border-l-4 border-[#498B86]"
            >
              <div className="text-4xl font-bold text-[#498B86] mb-3">
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Strategic Pillars */}
      <Section
        title="Strategic Focus"
        subtitle="Our Core Initiatives"
        variant="alternate"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {summary.pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-[#498B86] mb-6">
                {/* Icon based on pillar type */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{pillar.description}</p>
              <ul className="space-y-3 bg-gray-50 rounded-lg p-4">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-[#498B86] mr-3">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Annual Report Preview */}
      <Section
        title="Annual Report"
        subtitle="2023-2024 Overview"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              {summary.report.sections.map((section) => (
                <div key={section.title} className="mb-12 last:mb-0">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-[#498B86] mr-4"></div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {section.content}
                  </p>
                  {section.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 rounded-lg p-6">
                      {section.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-3xl font-bold text-[#498B86] mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-700 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Download Full Report */}
      <Section 
        variant="highlight" 
        title="Download Full Report"
        subtitle="Get detailed insights into our impact, initiatives, and future plans"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-[#498B86] text-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">2023-2024 Annual Report</h2>
            <p className="text-white/90 mb-8">
              Comprehensive analysis of our initiatives, impact metrics, and strategic vision
            </p>
            <a
              href="/reports/annual-report-2024.pdf"
              className="inline-flex items-center px-8 py-4 bg-white text-[#498B86] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
} 