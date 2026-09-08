'use client';

import Link from 'next/link';
import Reveal from '@/components/Animation/Reveal';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * A holding section for pages whose content is still being written.
 * Says so plainly, then points at the pages that already answer the
 * reader's likely question.
 */
export default function ComingSoon({
  title,
  body,
  links,
}: {
  title: string;
  body: string;
  links: Array<{ label: string; href: string }>;
}) {
  const [primary, ...rest] = links;
  return (
    <>
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal variant="up">
              <p className="voe-eyebrow mb-4">In the works</p>
              <h2 className="voe-display-lg font-display mb-5 text-[#171219]">{title}</h2>
              <p className="voe-lead mx-auto mb-9">{body}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {primary && (
                  <Link href={primary.href} className="voe-btn voe-btn--primary">
                    {primary.label}
                  </Link>
                )}
                {rest.map((l) => (
                  <Link key={l.href} href={l.href} className="voe-btn voe-btn--ghost">
                    {l.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Edge from={GROUND.white} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Meanwhile</p>
            <h2 className="voe-display-md font-display mb-5 text-white">The chapters post the work as it happens.</h2>
            <a
              href="https://www.instagram.com/voices.of.equity/"
              target="_blank"
              rel="noopener noreferrer"
              className="voe-btn voe-btn--on-dark"
            >
              Follow @voices.of.equity
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
