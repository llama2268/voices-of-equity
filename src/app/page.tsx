"use client";

import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/Layout/PageLayout";
import { SocialCallout } from "@/components/ui/SocialCallout";
import Reveal, { RevealWords, CountUp } from "@/components/Animation/Reveal";
import { Edge, SeamPhoto, GROUND } from "@/components/Layout/Seam";
import { ParallaxFill, ScrollFadeOut } from "@/components/Animation/Parallax";
import ImpactMetrics from "@/components/Stats/ImpactMetrics";
import { homePage, whoWeArePage } from "@/content";

const CHAPTER_NAMES = [
  "Cornell University", "Carnegie Mellon", "Howard University", "MIT", "UCLA",
  "UC Berkeley", "Harvard", "UPenn", "Yale", "NYU", "Ohio State", "Purdue",
  "UConn", "UT Austin", "WashU", "UNC Chapel Hill", "Binghamton",
  "Georgia Tech", "USC", "McGill",
];

const DESTINATIONS = [
  {
    eyebrow: "What We Do",
    title: "National Initiatives",
    description: "Nationwide programs advancing health equity across communities",
    href: "/what-we-do/national",
    image: "/photos/speaker-session.jpg",
  },
  {
    eyebrow: "What We Do",
    title: "Our Impact",
    description: "Real stories of change and transformation in our communities",
    href: "/what-we-do/impact",
    image: "/photos/ursinus-poster.jpg",
  },
  {
    eyebrow: "Get Involved",
    title: "Our Chapters",
    description: "Student-led chapters driving change across 70+ universities nationwide",
    href: "/get-involved/chapters",
    image: "/photos/ucf-tabling-seated.jpg",
  },
  {
    eyebrow: "Resources",
    title: "Resources",
    description: "Educational materials and research for health equity advocacy",
    href: "/resources",
    image: "/photos/gbm-brainstorm.jpg",
  },
];

const PILLAR_IMAGES = [
  "/photos/gbm-brainstorm.jpg",
  "/photos/ucf-tabling.jpg",
  "/photos/arkansas-chapter-group.jpg",
];

// each initiative gets its own tinted ground + accent so the page shifts colour
const INITIATIVES_STYLE = [
  {
    image: "/photos/committee-briefing.jpg",
    ground: "voe-ground-blue-soft",
    accent: "",
  },
  {
    image: "/photos/osu-tabling.jpg",
    ground: "voe-ground-mist",
    accent: "",
  },
  {
    image: "/photos/tent-tabling.jpg",
    ground: "voe-ground-green-soft",
    accent: "voe-accent-green",
  },
];

const MISSION_MOSAIC = [
  "/photos/ucf-tabling.jpg",
  "/photos/student-podium.jpg",
  "/photos/tent-tabling.jpg",
];

const PHOTO_BAND = [
  "/photos/osu-tabling.jpg",
  "/photos/committee-presentation.jpg",
  "/photos/ucf-tabling-seated.jpg",
  "/photos/projector-session.jpg",
];

export default function HomePage() {
  const { mission } = whoWeArePage.mission;
  const keyPoints = mission.keyPoints ?? [];

  return (
    <PageLayout fullWidth>
      {/* ---------------------------------------------------------------
          1. Hero
      --------------------------------------------------------------- */}
      <section data-hero className="relative isolate min-h-[92vh] w-full overflow-hidden voe-ground-blue">
        <div className="absolute inset-0 overflow-hidden">
          <ParallaxFill
            src="/photos/cmu-activities-fair.jpg"
            alt="Voices of Equity students at a campus activities fair"
            objectPosition="center 38%"
            strength={110}
            priority
          />
        </div>
        {/* Equity Blue laid over the photograph - a colour field with the
            picture showing through it, not a fade. */}
        <div aria-hidden className="absolute inset-0 z-[1] bg-[#587FDA] mix-blend-multiply opacity-[0.82]" />
        <div aria-hidden className="absolute inset-0 z-[1] bg-[#3A57A6]/35" />

        <div className="voe-container relative z-10 flex min-h-[92vh] flex-col items-center justify-center pb-28 pt-40 text-center">
          <ScrollFadeOut className="max-w-4xl">
            <Reveal variant="fade">
              <p className="voe-eyebrow mb-5 !text-white/80">
                Nationwide · Student-led · 501(c)(3)
              </p>
            </Reveal>

            <RevealWords
              as="h1"
              text={homePage.hero.title}
              className="voe-display-xl font-display text-white"
              stagger={70}
            />

            <Reveal variant="up" delay={420}>
              <p className="voe-lead mx-auto mt-6 max-w-2xl !text-white/88">
                {homePage.hero.description}
              </p>
            </Reveal>

            <Reveal variant="up" delay={560}>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                {homePage.hero.ctaButtons.map((btn) => (
                  <Link
                    key={btn.text}
                    href={btn.href}
                    className={btn.primary ? "voe-btn voe-btn--on-dark" : "voe-btn voe-btn--outline-white"}
                  >
                    {btn.text}
                  </Link>
                ))}
              </div>
            </Reveal>
          </ScrollFadeOut>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          2. Mission - Equity Green. Green and blue carry equal weight in
          the brand hierarchy, so the page's first colour block is green
          and the hero and initiatives below carry the blue.
      --------------------------------------------------------------- */}
      <section className="voe-section voe-ground-blue voe-texture">
        <div className="voe-container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <Reveal variant="fade">
                <p className="voe-eyebrow mb-4">Our Purpose</p>
              </Reveal>
              <RevealWords
                as="h2"
                text={homePage.mission.quote}
                className="voe-display-md font-display text-white"
                stagger={26}
              />
              <Reveal variant="up" delay={180}>
                <div className="voe-rule my-7" />
                <p className="voe-lead">{homePage.mission.body}</p>
              </Reveal>
            </div>

            <Reveal variant="right" delay={140}>
              <div className="voe-mosaic">
                {MISSION_MOSAIC.map((src, i) => (
                  <div key={src} className="voe-photo">
                    <ParallaxFill
                      src={src}
                      strength={i === 0 ? 46 : 78}
                      sizes="(max-width: 900px) 50vw, 30vw"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          3. Full-bleed photo band
      --------------------------------------------------------------- */}
      <section className="voe-band voe-ground-mist">
        <div className="voe-band-grid">
          {PHOTO_BAND.map((src, i) => (
            <Reveal key={src} variant="scale" delay={i * 110} className="!block">
              <div className="voe-photo h-full !rounded-none">
                <ParallaxFill
                  src={src}
                  strength={i % 2 === 0 ? 54 : 94}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ---------------------------------------------------------------
          4. Three pillars - warm ground, taller portraits, tighter
      --------------------------------------------------------------- */}
      <section className="voe-section voe-section--tight-top voe-ground-mist">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">How We Work</p>
            <h2 className="voe-display-md font-display mb-10 text-[#171219]">
              Educate. Inspire. Empower.
            </h2>
          </Reveal>

          <div className="grid gap-7 md:grid-cols-3">
            {keyPoints.map((point, i) => (
              <Reveal key={point.title} variant="up" delay={i * 120}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(17,24,39,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(17,24,39,0.10)]">
                  <div className="voe-photo voe-ar-portrait !rounded-none">
                    <ParallaxFill
                      src={PILLAR_IMAGES[i] ?? PILLAR_IMAGES[0]!}
                      alt={point.title}
                      strength={60}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <div className="voe-rule mb-4" />
                    <h3 className="voe-display-sm font-display mb-3 text-[#171219]">
                      {point.title}
                    </h3>
                    <p className="text-[0.93rem] leading-relaxed text-[#4A5568]">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Edge from={GROUND.mist} />

      {/* ---------------------------------------------------------------
          5. Impact metrics - one lead figure, the rest with context
      --------------------------------------------------------------- */}
      <section className="voe-section voe-section--tight-top voe-ground-blue voe-texture">
        <ImpactMetrics leadImage="/photos/cmu-activities-fair.jpg" onDark />
      </section>

      <Edge from={GROUND.blue} />

      {/* ---------------------------------------------------------------
          6. Chapter network marquee
      --------------------------------------------------------------- */}
      <section className="voe-ground-white overflow-hidden pb-10">
        <p className="voe-eyebrow mb-6 pt-4 text-center">
          Our Chapter Network
        </p>
        <div className="voe-marquee flex w-max items-center gap-12">
          {[...CHAPTER_NAMES, ...CHAPTER_NAMES].map((name, idx) => (
            <span
              key={`${name}-${idx}`}
              className="whitespace-nowrap font-display text-sm font-semibold text-[#171219]/45"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          7. Key initiatives - each on its own tinted ground
      --------------------------------------------------------------- */}
      {/* Equity Red is the 10% colour in the hierarchy - it appears here,
          on white, which is one of its approved pairings. */}
      <section className="voe-ground-white voe-accent-red pt-[var(--voe-section-y)]">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow mb-3">What We Do</p>
            <h2 className="voe-display-lg font-display mb-4 text-[#171219]">
              Key Initiatives
            </h2>
            <p className="voe-lead mb-12 max-w-2xl">
              Building health equity through education, activation, and
              community-driven change.
            </p>
          </Reveal>
        </div>
      </section>

      {homePage.initiatives.map((initiative, idx) => {
        const style = INITIATIVES_STYLE[idx] ?? INITIATIVES_STYLE[0]!;
        const flipped = idx % 2 === 1;
        return (
          <div key={initiative.title}>
            
            <section className={`voe-section voe-section--tight-top ${style.ground} ${style.accent}`}>
            <div className="voe-container">
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
                <Reveal
                  variant={flipped ? "right" : "left"}
                  className={flipped ? "md:order-2" : ""}
                >
                  <div className="voe-photo voe-ar-landscape shadow-[0_18px_50px_rgba(17,24,39,0.14)]">
                    <ParallaxFill
                      src={style.image}
                      alt={initiative.title}
                      strength={72}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>

                <Reveal
                  variant={flipped ? "left" : "right"}
                  delay={110}
                  className={flipped ? "md:order-1" : ""}
                >
                  <h3 className="voe-display-md font-display mb-4 text-[#171219]">
                    {initiative.title}
                  </h3>
                  <div className="voe-rule mb-5" />
                  <p className="text-base leading-relaxed text-[#3D4757] md:text-lg">
                    {initiative.description}
                  </p>
                </Reveal>
                </div>
              </div>
            </section>
          </div>
        );
      })}

      <SeamPhoto
        src="/photos/arkansas-chapter-group.jpg"
        alt="Chapter members at a general body meeting"
        objectPosition="center 42%"
      />

      {/* ---------------------------------------------------------------
          8. Destinations - dark ground, photo cards
      --------------------------------------------------------------- */}
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep voe-texture">
        <div className="voe-container">
          <Reveal variant="fade">
            <p className="voe-eyebrow voe-eyebrow--on-dark mb-3">Explore</p>
            <h2 className="voe-display-md font-display mb-10 text-white">
              Where to go next
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINATIONS.map((dest, i) => (
              <Reveal key={dest.title} variant="up" delay={i * 130}>
                <Link href={dest.href} className="group block h-full">
                  <div className="voe-photo voe-grade voe-scrim voe-ar-tall">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                      <p className="voe-eyebrow voe-eyebrow--on-dark mb-1.5 !text-[0.6rem]">
                        {dest.eyebrow}
                      </p>
                      <h3 className="font-display text-xl font-bold leading-tight text-white">
                        {dest.title}
                      </h3>
                      <p className="mt-2 text-[0.8rem] leading-snug text-white/70">
                        {dest.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Edge from={GROUND.blueDeep} />

      {/* ---------------------------------------------------------------
          9. Two-up calls to action
      --------------------------------------------------------------- */}
      <section className="voe-section voe-section--tight-top voe-ground-blue-soft">
        <div className="voe-container">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal variant="left">
              <Link
                href="/who-we-are/team"
                className="voe-card group flex h-full flex-col justify-between p-9"
              >
                <div>
                  <p className="voe-eyebrow mb-3">Meet Our Team</p>
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219] transition-colors group-hover:text-[#587FDA]">
                    Executive Leadership
                  </h3>
                  <p className="mb-5 leading-relaxed text-[#4A5568]">
                    The passionate leaders behind Voices of Equity driving change
                    in health equity nationwide.
                  </p>
                </div>
                <span className="font-display text-sm font-semibold text-[#587FDA]">
                  View Team &#x2192;
                </span>
              </Link>
            </Reveal>

            <Reveal variant="right" delay={110}>
              <Link
                href="/get-involved/start"
                className="voe-card group flex h-full flex-col justify-between p-9"
              >
                <div>
                  <p className="voe-eyebrow mb-3">Get Involved</p>
                  <h3 className="voe-display-sm font-display mb-3 text-[#171219] transition-colors group-hover:text-[#587FDA]">
                    Start a Chapter
                  </h3>
                  <p className="mb-5 leading-relaxed text-[#4A5568]">
                    Launch a Voices of Equity chapter at your university and
                    advance health equity in your community.
                  </p>
                </div>
                <span className="font-display text-sm font-semibold text-[#587FDA]">
                  Get Started &#x2192;
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Edge from={GROUND.blueSoft} />

      {/* ---------------------------------------------------------------
          10. Community CTA
      --------------------------------------------------------------- */}
      <section className="voe-section voe-section--tight-top voe-ground-blue-deep">
        <div className="voe-container text-center">
          <Reveal variant="fade">
            <h2 className="voe-display-md font-display mb-4 text-white">
              Join Our Community
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Connect with changemakers building a more equitable future for all.
            </p>
            <SocialCallout />
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
