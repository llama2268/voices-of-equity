'use client';

import Image from 'next/image';
import Reveal, { CountUp } from '@/components/Animation/Reveal';
import { ParallaxFill } from '@/components/Animation/Parallax';

/**
 * Impact metrics.
 *
 * A flat grid of six equal numbers reads as a scoreboard - every figure
 * competes with the others and none of them mean anything on their own.
 * This gives one number the lead, hangs a line of context on every other
 * one, and closes with the fundraising figure written as a sentence.
 */

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
}

export const LEAD_METRIC: Metric = {
  value: 70,
  suffix: '+',
  label: 'Chapters',
  context:
    'Across the United States and Canada — grown from a single Cornell chapter founded in December 2024.',
};

export const SUPPORTING_METRICS: Metric[] = [
  {
    value: 1000,
    suffix: '+',
    label: 'Student Members',
    context: 'Undergraduates running health equity programming on their own campuses.',
  },
  {
    value: 240,
    suffix: '+',
    label: 'Events Run',
    context: 'Workshops, panels, tabling drives and fundraisers led by chapters.',
  },
  {
    value: 140,
    suffix: '+',
    label: 'Partner Organizations',
    context: 'Community health organizations our chapters work alongside as stakeholders.',
  },
  {
    value: 40,
    suffix: '+',
    label: 'Community Initiatives',
    context: 'Programs co-designed with local partners through our five-phase framework.',
  },
];

export default function ImpactMetrics({
  leadImage = '/photos/ursinus-poster.jpg',
  imageAlt = 'Chapter members presenting their community impact',
  onDark = true,
  cutout,
  cutoutAlt = '',
  sticker,
}: {
  leadImage?: string;
  imageAlt?: string;
  onDark?: boolean;
  /** Transparent PNG of a person, rendered breaking out of the panel. */
  cutout?: string;
  cutoutAlt?: string;
  /** Short line for the rotated sticker on the panel. */
  sticker?: string;
}) {
  const ink = onDark ? 'text-white' : 'text-[#171219]';
  const muted = onDark ? 'text-white/65' : 'text-[#4A5568]';
  const hair = onDark ? 'bg-white/45' : 'bg-[#171219]/25';

  return (
    <div className="voe-container">
      <Reveal variant="fade">
        <p className={`voe-eyebrow mb-3 ${onDark ? '!text-white/70' : ''}`}>
          By The Numbers
        </p>
        <h2 className={`voe-display-md font-display mb-3 ${ink}`}>
          Impact at a Glance
        </h2>
        <p className={`voe-lead mb-12 max-w-2xl ${onDark ? '!text-white/70' : ''}`}>
          Impact is measured in mobilization — the partnerships built, the
          initiatives launched, and the undergraduates equipped to lead.
        </p>
      </Reveal>

      {/* --- lead metric: one number carries the section --- */}
      <div className="mb-14 grid items-stretch gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal variant="left" className="flex flex-col justify-center">
          <p
            className={`font-display font-bold leading-[0.85] tracking-[-0.04em] ${ink}`}
            style={{ fontSize: 'clamp(5rem, 13vw, 11rem)' }}
          >
            <CountUp to={LEAD_METRIC.value} suffix={LEAD_METRIC.suffix} />
          </p>
          <div className={`voe-metric-rule mt-6 ${hair}`} />
          <p
            className={`mt-6 font-display text-lg font-semibold uppercase tracking-[0.16em] ${ink}`}
          >
            {LEAD_METRIC.label}
          </p>
          <p className={`mt-4 max-w-md text-base leading-relaxed ${muted}`}>
            {LEAD_METRIC.context}
          </p>
        </Reveal>

        <Reveal variant="right" delay={140}>
          {cutout ? (
            /* The figure is cut out of her photograph and stands in front
               of the panel, breaking its top edge - so the section isn't
               one more rectangle. */
            <div className="voe-popout">
              <div className="voe-popout__panel voe-popout__panel--soft">
                {sticker && (
                  <span className="voe-sticker bottom-[9%] left-[7%]">{sticker}</span>
                )}
              </div>
              <Image
                src={cutout}
                alt={cutoutAlt}
                width={669}
                height={1200}
                className="voe-popout__figure"
                sizes="(max-width: 1024px) 70vw, 34vw"
              />
            </div>
          ) : (
            <div className="voe-photo voe-ar-landscape h-full min-h-[260px]">
              <ParallaxFill
                src={leadImage}
                alt={imageAlt}
                strength={70}
                objectPosition="center 38%"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          )}
        </Reveal>
      </div>

      {/* --- supporting metrics: number + label + what it actually means --- */}
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {SUPPORTING_METRICS.map((m, i) => (
          <Reveal key={m.label} variant="up" delay={i * 110}>
            <div className={`h-full border-t pt-6 ${onDark ? 'border-white/18' : 'border-[#171219]/12'}`}>
              <p
                className={`font-display font-bold leading-none tracking-[-0.03em] ${ink}`}
                style={{ fontSize: 'clamp(2.6rem, 4.4vw, 3.6rem)' }}
              >
                <CountUp to={m.value} prefix={m.prefix} suffix={m.suffix} />
              </p>
              <p
                className={`mt-3 font-display text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${
                  onDark ? 'text-white/80' : 'text-[#171219]'
                }`}
              >
                {m.label}
              </p>
              <p className={`mt-3 text-[0.9rem] leading-relaxed ${muted}`}>
                {m.context}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* --- the money figure reads better as a sentence than a tile --- */}
      <Reveal variant="fade" delay={200}>
        <div
          className={`mt-14 border-t pt-10 ${onDark ? 'border-white/18' : 'border-[#171219]/12'}`}
        >
          <p
            className={`font-display text-xl font-medium leading-snug md:text-2xl ${ink}`}
          >
            <span className="font-bold">
              <CountUp to={44000} prefix="$" suffix="+" />
            </span>{' '}
            raised through chapter fundraisers, national campaigns, and
            individual and corporate giving — supporting community and
            educational events run by chapters nationwide.
          </p>
          <p className={`mt-4 text-sm ${muted}`}>
            Plus 100,000+ views across our educational and advocacy content.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
