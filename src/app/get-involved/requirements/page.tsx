import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { getInvolved } from '@/content/content';

export default function RequirementsPage() {
  const { requirements } = getInvolved;
  const { req1, req1desc, req2, req2desc, req3, req3desc, bottom, bottominfo } = requirements.content;
  
  return (
    <PageLayout title={requirements.title} subtitle={requirements.subtitle}>
      <Section>
        <div className="space-y-16">
          {/* General Body Meetings */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Meetings
              </p>
              <h2 className="text-3xl font-bold mb-4">{req1}</h2>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Card className="max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  {req1desc}
                </p>
              </Card>
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Events
              </p>
              <h2 className="text-3xl font-bold mb-4">{req2}</h2>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Card className="max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  {req2desc}
                </p>
              </Card>
            </div>
          </div>

          {/* Executive Board */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Leadership
              </p>
              <h2 className="text-3xl font-bold mb-4">{req3}</h2>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Card className="max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  {req3desc}
                </p>
              </Card>
            </div>
          </div>

          {/* By-Laws */}
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Documentation
              </p>
              <h2 className="text-3xl font-bold mb-4">{bottom}</h2>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <Card className="max-w-3xl mx-auto">
                <p className="text-gray-700 leading-relaxed">
                  {bottominfo}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}