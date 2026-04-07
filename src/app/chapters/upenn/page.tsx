import PageLayout from '@/components/Layout/PageLayout';

export default function UPennChapterPage() {
  return (
    <PageLayout title="UPenn Chapter">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="py-24 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Chapter</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#587FDA] mb-6">
              Coming Soon
            </h1>
            <p className="text-lg text-[#4A5568] leading-relaxed max-w-xl mx-auto">
              UPenn chapter information coming soon.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
