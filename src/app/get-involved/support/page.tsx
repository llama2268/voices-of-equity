'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Support.
 *
 * Three ways to give, then proof of what giving funds. The "Our Work in
 * Action" grid of six captioned stock-ish tiles is gone; in its place a
 * single full-bleed photograph and the fundraising figure the site already
 * reports, so the page argues with evidence rather than adjectives.
 */
const WAYS = [
  {
    eyebrow: 'Give',
    title: 'Make a donation',
    body: 'Contribute to our national campaign fund and help us fuel direct impact across 70+ campuses.',
    href: 'https://venmo.com/VoicesofEquity',
    cta: 'Donate via Venmo',
    external: true,
  },
  {
    eyebrow: 'Sponsor',
    title: 'Fund a chapter',
    body: 'Sponsor a specific chapter or project — supplies for outreach, guest speaker honoraria, or event materials.',
    href: 'mailto:gyc23@cornell.edu?subject=Chapter Sponsorship Inquiry',
    cta: 'Sponsor a chapter',
    external: false,
  },
  {
    eyebrow: 'Collaborate',
    title: 'Partner with us',
    body: 'If you represent an organization, foundation, or university, let’s work together to amplify health equity.',
    href: '/get-involved/partner',
    cta: 'Partnerships',
    external: false,
  },
];

export default function SupportPage() {
  return (
    <PageLayout
      title="Support Our Mission"
      subtitle="Help us build a more equitable future"
      hero
      reduced
      eyebrow="Get Involved"
      image="/photos/osu-tabling.jpg"
      imageAlt="A chapter fundraiser"
      objectPosition="center 44%"
    >
      {/* ─── Why it matters ──────────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <Reveal variant="fade">
            <div className="max-w-3xl">
              <p className="voe-eyebrow mb-4">Where it goes</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                Your support funds the work on the ground.
              </h2>
              <p className="voe-lead">
                Voices of Equity empowers students and communities across the country to lead bold, local solutions to systemic health disparities. Your support directly funds community-based initiatives, educational resources, national campaigns, and the next generation of equity-driven leaders.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Three ways ──────────────────────────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <div className="grid gap-6 md:grid-cols-3">
            {WAYS.map((w, i) => {
              const inner = (
                <>
                  <p className="voe-eyebrow mb-3">{w.eyebrow}</p>
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219]">{w.title}</h3>
                  <p className="mb-7 flex-1 text-[15px] leading-relaxed text-[#4A5568]">{w.body}</p>
                  <span className="voe-btn voe-btn--primary self-start">{w.cta}</span>
                </>
              );
              const cls = 'voe-card flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_14px_36px_rgba(14,26,51,0.10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(14,26,51,0.16)]';
              return (
                <Reveal key={w.title} variant="up" delay={i * 100} className="h-full">
                  {w.external || w.href.startsWith('mailto:') ? (
                    <a href={w.href} className={cls} target={w.external ? '_blank' : undefined} rel={w.external ? 'noopener noreferrer' : undefined}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={w.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Proof ───────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="voe-ground-blue voe-texture flex items-center px-8 py-16 md:px-16 lg:py-24">
          <div className="max-w-xl">
            <Reveal variant="left">
              <p className="voe-eyebrow mb-4">So far</p>
              <p className="font-display text-[clamp(3.5rem,7vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em] text-white">
                $44,000<span className="text-white/70">+</span>
              </p>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                raised through chapter fundraisers, national campaigns, and individual and corporate giving — supporting community and educational events run by chapters nationwide.
              </p>
              <Link href="/what-we-do/impact" className="voe-btn voe-btn--on-dark mt-8">
                See the impact
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="relative min-h-[380px] overflow-hidden lg:min-h-[560px]">
          <ParallaxFill
            src="/photos/tent-tabling.jpg"
            alt="Members running an outdoor tent at a community event"
            objectPosition="center 40%"
            strength={80}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ─── Ask ─────────────────────────────────────────────────────── */}
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <blockquote className="voe-display-md font-display mx-auto mb-10 max-w-3xl text-white">
              “Every dollar donated, every chapter sponsored, and every partnership formed brings us closer to a world where health equity isn’t just an aspiration — it’s a reality.”
            </blockquote>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="mailto:gyc23@cornell.edu?subject=Support Inquiry" className="voe-btn voe-btn--on-dark">
                Get started today
              </a>
              <Link href="/who-we-are/mission" className="voe-btn voe-btn--outline-white">
                Learn more about us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
