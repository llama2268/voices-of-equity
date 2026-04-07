import PageLayout from '@/components/Layout/PageLayout';

export default function SummaryPage() {
  return (
    <PageLayout title="Summary" subtitle="Our approach to health equity">
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[40vh]">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Stay tuned</p>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-[#171219] mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-[#4A5568] leading-relaxed">
              Summary page coming soon.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
