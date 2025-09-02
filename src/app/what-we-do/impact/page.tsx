'use client'
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Link from 'next/link';

export default function ImpactPage() {
  const metrics = [
    { label: 'Dollars Raised for Health Equity', value: 40000, prefix: '$', suffix: '+' },
    { label: 'Chapters Nationwide', value: 50, suffix: '+' },
    { label: 'Student Leaders', value: 300, suffix: '+' },
    { label: 'Community Members Reached', value: 10000, suffix: '+' },
  ];

  return (
    <PageLayout title="Our Impact" subtitle="Making real change in communities">
      {/* Header Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Voices of Equity exists to move health equity from theory to action — and that action is already happening across the country. Our chapters, campaigns, and community initiatives are making measurable impact. Here's a glimpse of what we're building together.
          </p>
        </div>
      </Section>

      {/* Impact Metrics */}
      <Section variant="alternate">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Impact by the Numbers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map(({ label, value, prefix, suffix }) => (
              <motion.div
                key={label}
                className="p-8 bg-white rounded-2xl shadow-lg text-center border border-gray-100"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-4xl font-extrabold text-[#607AD4] mb-2">
                  {prefix && <span>{prefix}</span>}
                  <CountUp end={value} duration={2.5} separator="," />
                  {suffix && <span>{suffix}</span>}
                </p>
                <p className="text-base font-medium text-gray-700">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Voices from the Field */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voices from the Field</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the leaders, partners, and community members who are driving change through Voices of Equity
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* Jennifer Zhu Testimonial */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#607AD4] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg italic text-gray-700 mb-4">
                    &quot;Voices of Equity has provided me with the opportunity to facilitate real change in health equity by empowering me to share impactful stories and foster discussion on important topics. I have learned how to transform awareness into active engagement, which has allowed me to foster authentic relationships with real people all over the country.&quot;
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src="/jennifer-zhu-new.jpg"
                        alt="Jennifer Zhu"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Jennifer Zhu</p>
                      <p className="text-sm text-gray-600">VoE National Director of Media</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#607AD4] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                &quot;Being part of Voices of Equity has been one of the most meaningful parts of my college experience. As Co-Director of Outreach, I&apos;ve been able to connect with local organizations, collaborate with students, and lead real efforts that address health disparities in our own community. It&apos;s shown me what student-led change can actually look like.&quot;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src="/nathan-choi.png"
                      alt="Nathan Choi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Nathan Choi</p>
                    <p className="text-sm text-gray-600">Undergraduate Director of Outreach - Cornell University</p>
                  </div>
                </div>
              </div>
            </div>
      </div>
      </div>
      </Section>

      {/* Partner Organizations */}
      <Section variant="alternate">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner Organizations</h2>
            <p className="text-lg text-gray-600">
              Our growing coalition of institutions and partners committed to health equity
            </p>
          </div>
          <div className="flex justify-center gap-12 overflow-x-auto py-8 items-center">
            <div className="relative w-48 h-32 flex-shrink-0">
              <Image src="/cornell-center-he.png" alt="Cornell Center for Health Equity" fill className="object-contain" />
            </div>
            <div className="relative w-48 h-32 flex-shrink-0">
              <Image src="/ymca-logo.png" alt="YMCA" fill className="object-contain" />
            </div>
            <div className="relative w-48 h-32">
              <Image src="/thephoenix.jpg" alt="The Phoenix" fill className="object-contain"/>
            </div>
            <div className="relative w-48 h-32">
              <Image src="/operationgoldenshield.jpg" alt="The Phoenix" fill className="object-contain"/>
            </div>
          </div>
        </div>
      </Section>

      {/* Help us Grow Our Impact */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Grow Our Impact</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to be part of the change? Join our movement and help us reach even more communities across the country.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Start a Chapter */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#498B86] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start a Chapter</h3>
              <p className="text-gray-600 mb-6">
                Launch a Voices of Equity chapter at your university and lead change in your community.
              </p>
              <Link
                href="/get-involved/start"
                className="inline-block px-6 py-3 bg-[#498B86] text-white font-semibold rounded-lg hover:bg-[#3A6F6B] transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Support Our Mission */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-[#607AD4] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Our Mission</h3>
              <p className="text-gray-600 mb-6">
                Make a donation or partner with us to amplify our impact across the country.
              </p>
              <Link
                href="/get-involved/support"
                className="inline-block px-6 py-3 bg-[#607AD4] text-white font-semibold rounded-lg hover:bg-[#5068BD] transition-colors"
              >
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
