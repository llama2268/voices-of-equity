'use client';

import Link from 'next/link';
import PageLayout from '@/components/Layout/PageLayout';
import { SocialCallout } from '@/components/ui/SocialCallout';
import { contactPage, siteConfig } from '@/content';
import Reveal from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * Contact.
 *
 * Three doors instead of one "Email Us" button: the three reasons people
 * actually write in, each routed to the page that answers it, with the
 * email address itself set large enough to read across a room.
 */
const DOORS = [
  {
    eyebrow: 'Students',
    title: 'Start a chapter',
    body: 'Bring Voices of Equity to your campus. We’ll walk you through what it takes and pair you with a national chapter leader.',
    href: '/get-involved/start',
    cta: 'How it works',
  },
  {
    eyebrow: 'Organizations',
    title: 'Partner with us',
    body: 'Community health organizations, clinics and nonprofits — our chapters bring student capacity to the work you already lead.',
    href: '/get-involved/partner',
    cta: 'Partnerships',
  },
  {
    eyebrow: 'Everyone else',
    title: 'Support the work',
    body: 'Donate, volunteer, or point us toward someone who should know about us.',
    href: '/get-involved/support',
    cta: 'Ways to support',
  },
];

export default function ContactPage() {
  const email = siteConfig.links.contact.replace(/^mailto:/, '');

  return (
    <PageLayout
      title={contactPage.title}
      subtitle={contactPage.subtitle}
      hero
      reduced
      eyebrow="Get Involved"
      image="/photos/projector-session.jpg"
      imageAlt="A chapter meeting in session"
      objectPosition="center 30%"
    >
      {/* ─── The address, big ───────────────────────────────────────── */}
      <section className="voe-section voe-ground-white">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <Reveal variant="left">
              <p className="voe-eyebrow mb-4">Say hello</p>
              <h2 className="voe-display-lg font-display mb-6 text-[#171219]">
                We read every message.
              </h2>
              <p className="voe-lead mb-8 max-w-xl">
                Questions about starting a chapter, joining the team, or working together — write to us and a real person answers, usually within a couple of days.
              </p>
              <a
                href={siteConfig.links.contact}
                className="font-display text-[clamp(1.25rem,2.6vw,2rem)] font-bold tracking-tight text-[#587FDA] underline decoration-[#587FDA]/30 decoration-2 underline-offset-8 transition-colors hover:text-[#4A6FCC] hover:decoration-[#4A6FCC]"
              >
                {email}
              </a>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <div className="voe-photo voe-ar-portrait shadow-[0_24px_60px_rgba(14,26,51,0.16)] lg:ml-auto lg:max-w-md">
                <ParallaxFill
                  src="/photos/ucf-tabling-seated.jpg"
                  alt="Chapter members behind a table at a campus event"
                  strength={60}
                  objectPosition="center 35%"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Three doors ────────────────────────────────────────────── */}
      <Edge from={GROUND.white} size="sm" />
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">Where to start</p>
            <h2 className="voe-display-md font-display mb-10 text-[#171219]">What are you here for?</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {DOORS.map((d, i) => (
              <Reveal key={d.title} variant="up" delay={i * 100} className="h-full">
                <Link
                  href={d.href}
                  className="voe-card group flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_14px_36px_rgba(14,26,51,0.10)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(14,26,51,0.16)]"
                >
                  <p className="voe-eyebrow mb-3">{d.eyebrow}</p>
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219]">{d.title}</h3>
                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#4A5568]">{d.body}</p>
                  <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-[#587FDA]">
                    {d.cta}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social ─────────────────────────────────────────────────── */}
      <Edge from={GROUND.blueSoft} />
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container text-center">
          <Reveal variant="up">
            <p className="voe-eyebrow mb-3">Connect With Us</p>
            <h2 className="voe-display-lg font-display mb-4 text-white">Join Our Community</h2>
            <p className="voe-lead mx-auto mb-10 max-w-2xl">
              Follow along — the chapters post the work as it happens.
            </p>
            <div className="flex justify-center gap-4">
              <SocialCallout />
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
