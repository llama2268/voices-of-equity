import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <section className="voe-ground-blue voe-texture relative isolate flex min-h-[70vh] items-center pb-24 pt-40">
        <div className="voe-container text-center">
          <p className="voe-eyebrow mb-4">Page not found</p>
          <h1 className="voe-display-xl font-display mb-6 text-white">That page isn’t here.</h1>
          <p className="voe-lead mx-auto mb-10 max-w-xl">The link may be out of date, or the page may have moved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="voe-btn voe-btn--on-dark">
              Back to the home page
            </Link>
            <Link href="/get-involved/chapters" className="voe-btn voe-btn--outline-white">
              Find a chapter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
