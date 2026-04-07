import PageLayout from '@/components/Layout/PageLayout';
import Image from 'next/image';

export default function SupportPage() {
  return (
    <PageLayout
      title="Support Our Mission"
      subtitle="Help us build a more equitable future"
      hero
      reduced
    >
      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg text-[#4A5568] leading-relaxed">
            Voices of Equity empowers students and communities across the country to lead bold, local solutions to systemic health disparities. Your support directly funds community-based initiatives, educational resources, national campaigns, and the next generation of equity-driven leaders.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Make a Donation */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-all flex flex-col h-full">
              <div className="mb-6 flex-grow">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#587FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-3">Make a Donation</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Contribute to our national campaign fund and help us fuel direct impact across 50+ campuses.
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="https://venmo.com/VoicesofEquity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-3 bg-[#587FDA] text-white font-medium rounded-md hover:bg-[#4566B8] transition-colors text-center"
                >
                  Donate via Venmo
                </a>
              </div>
            </div>

            {/* Fund a Chapter */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-all flex flex-col h-full">
              <div className="mb-6 flex-grow">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#587FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-3">Fund a Chapter</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Sponsor a specific chapter or project — whether it&apos;s supplies for outreach, guest speaker honoraria, or event materials.
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="mailto:gyc23@cornell.edu?subject=Chapter Sponsorship Inquiry"
                  className="block w-full px-8 py-3 bg-[#587FDA] text-white font-medium rounded-md hover:bg-[#4566B8] transition-colors text-center"
                >
                  Contact Us to Sponsor
                </a>
              </div>
            </div>

            {/* Partner with Us */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-all flex flex-col h-full">
              <div className="mb-6 flex-grow">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#587FDA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-[#171219] mb-3">Partner with Us</h3>
                <p className="text-[#4A5568] leading-relaxed">
                  If you represent an organization, foundation, or university, let&apos;s work together to amplify health equity.
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href="mailto:gyc23@cornell.edu?subject=Partnership Inquiry"
                  className="block w-full px-8 py-3 bg-[#587FDA] text-white font-medium rounded-md hover:bg-[#4566B8] transition-colors text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">See the impact of your support</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#171219]">Our Work in Action</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Working Together */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/team-picture.jpg"
                  alt="Our team working together"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Collaborative Leadership
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Our diverse team of students and professionals working together to drive systemic change.
                </p>
              </div>
            </div>

            {/* Cornell Chapter Activities */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/cornell-chapter.jpg"
                  alt="Cornell chapter activities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Chapter Impact
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Our Cornell chapter leading community outreach and health equity initiatives.
                </p>
              </div>
            </div>

            {/* Educational Initiatives */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/educate.jpg"
                  alt="Educational initiatives"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Educational Outreach
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Empowering communities through accessible health equity education and resources.
                </p>
              </div>
            </div>

            {/* Inspiring Change */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/inspire.jpg"
                  alt="Inspiring change in communities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Inspiring Action
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Motivating individuals to take meaningful steps toward health equity in their communities.
                </p>
              </div>
            </div>

            {/* Empowering Communities */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/empower.jpg"
                  alt="Empowering communities"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Community Empowerment
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Providing tools and resources that enable communities to drive their own health equity solutions.
                </p>
              </div>
            </div>

            {/* Research and Advocacy */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-all">
              <div className="relative h-56">
                <Image
                  src="/boston.jpg"
                  alt="Research and advocacy work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold font-display text-[#171219] mb-2">
                  Research & Advocacy
                </h3>
                <p className="text-[#4A5568] leading-relaxed">
                  Conducting evidence-based research to inform policy and drive systemic change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-3xl text-[#171219] italic leading-relaxed mb-10 font-display">
            &ldquo;Every dollar donated, every chapter sponsored, and every partnership formed brings us closer to a world where health equity isn&apos;t just an aspiration — it&apos;s a reality.&rdquo;
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gyc23@cornell.edu?subject=Support Inquiry"
              className="px-8 py-3 bg-[#587FDA] text-white font-medium rounded-md hover:bg-[#4566B8] transition-colors"
            >
              Get Started Today
            </a>
            <a
              href="/who-we-are/mission"
              className="px-8 py-3 bg-white border border-gray-200 text-[#171219] font-medium rounded-md hover:border-[#587FDA] hover:text-[#587FDA] transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
