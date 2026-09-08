import Link from 'next/link';
import PageHero from '@/components/Layout/PageHero';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';
import { redliningArticle } from '@/content/articles/redlining-heart-disease';

export const metadata = {
  title: `${redliningArticle.title} | Voices of Equity`,
  description: redliningArticle.subtitle,
};

const TAGS = ['Redlining', 'Cardiovascular Health', 'Structural Racism', 'Environmental Justice', 'Social Determinants'];

/**
 * Article template.
 *
 * Long-form reading: a blue hero carrying the title and byline so the
 * floating navigation has something to sit on, then a single measured
 * column of text - nothing beside it to compete with the reading.
 */
export default function RedliningArticlePage() {
  const { title, subtitle, author, date, sections } = redliningArticle;

  return (
    <main className="min-h-screen">
      <PageHero eyebrow="Equity Archive · Featured article" title={title} subtitle={subtitle} height="min-h-[56vh]">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white/75">
          {author}
          <span aria-hidden className="mx-3 text-white/40">·</span>
          {date}
        </p>
      </PageHero>

      <article className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="mx-auto max-w-3xl">
            <Reveal variant="fade">
              <Link
                href="/resources/archive"
                className="group mb-12 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#587FDA] transition-colors hover:text-[#4A6FCC]"
              >
                <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                Back to the Equity Archive
              </Link>
            </Reveal>

            <div>
              {sections.map((section, i) => {
                if (section.type === 'heading') {
                  return (
                    <Reveal key={i} variant="up">
                      <h2 className={`voe-display-sm font-display mb-4 text-[#171219] ${i === 0 ? '' : 'mt-14'}`}>{section.text}</h2>
                    </Reveal>
                  );
                }

                if (section.type === 'paragraph') {
                  return (
                    <Reveal key={i} variant="fade">
                      <p className="mb-6 text-[17px] leading-[1.75] text-[#3D4756] md:text-lg">{section.text}</p>
                    </Reveal>
                  );
                }

                if (section.type === 'citation' && section.items) {
                  return (
                    <Reveal key={i} variant="fade">
                      <div className="mt-6 rounded-3xl bg-[#F1F5FD] p-7 md:p-9">
                        <ul className="space-y-3">
                          {section.items.map((cite, j) => (
                            <li key={j} className="-indent-5 pl-5 text-sm leading-relaxed text-[#4A5568]">
                              {cite}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  );
                }

                return null;
              })}
            </div>

            <Reveal variant="fade">
              <div className="mt-12 flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#587FDA]/25 px-3.5 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.08em] text-[#587FDA]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Keep reading</p>
            <h2 className="voe-display-md font-display mb-5 text-white">More from the Equity Archive</h2>
            <p className="voe-lead mx-auto mb-9 max-w-2xl">
              Recordings, articles and resources from chapters across the country.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources/archive" className="voe-btn voe-btn--on-dark">
                Browse the archive
              </Link>
              <Link href="/resources" className="voe-btn voe-btn--outline-white">
                All resources
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
