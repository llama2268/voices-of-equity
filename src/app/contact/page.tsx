import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { SocialCallout } from '@/components/ui/SocialCallout';

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with our team"
      hero
      reduced
    >
      <Section spacing="sm">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            Have questions about starting a chapter, joining our team, or collaborating with us? We'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <iframe
              src="YOUR_GOOGLE_FORM_EMBED_URL"
              width="100%"
              height="800px"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading...
            </iframe>
          </div>
        </div>
      </Section>

      {/* Alternative Contact Methods */}
      <Section variant="alternate">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-[#498B86] mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">Mon-Fri from 9am to 5pm EST</p>
              <a href="tel:+1234567890" className="text-[#498B86] hover:text-[#3A6F6B]">
                (123) 456-7890
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-[#498B86] mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">We'll respond within 24-48 hours</p>
              <a href="mailto:contact@voicesofequity.org" className="text-[#498B86] hover:text-[#3A6F6B]">
                contact@voicesofequity.org
              </a>
            </div>

            <div className="text-center">
              <div className="text-[#498B86] mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" 
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600">Cornell University</p>
              <p className="text-gray-600">Ithaca, NY 14850</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Social Media Section */}
      <Section 
        title="Connect With Us"
        subtitle="Follow Our Journey"
        description="Stay connected with us on social media"
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>
    </PageLayout>
  );
} 