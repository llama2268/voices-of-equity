import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { partnershipContent } from '@/content/partnerships';

export default function PartnerPage() {
  return (
    <PageLayout 
      title="Partner With Us" 
      subtitle="Create lasting impact through collaboration"
    >
      {/* Professional Organizations */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {partnershipContent.organizations.map((org) => (
            <div key={org.name} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-3">{org.name}</h3>
              <p className="text-gray-600 mb-4">{org.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#607AD4]">{org.type}</span>
                <a 
                  href={org.contactLink}
                  className="text-[#607AD4] hover:text-[#E4826D] font-medium"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Grant Opportunities */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Grant Opportunities</h2>
          {partnershipContent.grants.map((grant) => (
            <div key={grant.name} className="mb-6 bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">{grant.name}</h3>
              <p className="text-gray-600 mb-4">{grant.description}</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-[#607AD4]/10 text-[#607AD4] rounded-full text-sm">
                  {grant.amount}
                </span>
                <span className="px-3 py-1 bg-[#607AD4]/10 text-[#607AD4] rounded-full text-sm">
                  Deadline: {grant.deadline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
} 