"use client";
import Hero from "../components/Hero/Hero";
import PageLayout from "../components/Layout/PageLayout";
import ImpactTracker from "@/components/Stats/ImpactTracker";
import { whoWeArePage } from "@/content";
import { homePage } from "@/content";
import { SocialCallout } from "@/components/ui/SocialCallout";
import {
  EducateIcon,
  InspireIcon,
  EmpowerIcon,
} from "@/components/icons/MissionIcons";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/Animation/AnimateOnScroll";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { mission } = whoWeArePage.mission;
  const totalSlides = 4;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const missionPoints = [
    {
      title: "Educate",
      icon: <EducateIcon />,
      description: mission.keyPoints?.[0]?.description ?? "",
    },
    {
      title: "Inspire",
      icon: <InspireIcon />,
      description: mission.keyPoints?.[1]?.description ?? "",
    },
    {
      title: "Empower",
      icon: <EmpowerIcon />,
      description: mission.keyPoints?.[2]?.description ?? "",
    },
  ];

  const slides = [
    {
      title: "National Initiatives",
      description:
        "Nationwide programs advancing health equity across communities",
      bg: "/paintingtry.jpg",
      bgPos: "center 45%",
      cta: { text: "Learn More", href: "/what-we-do/national" },
    },
    {
      title: "Our Impact",
      description:
        "Real stories of change and transformation in our communities",
      bg: "/impact-stories.jpeg",
      bgPos: "center 45%",
      cta: { text: "See Our Work", href: "/what-we-do/impact" },
    },
    {
      title: "Our Chapters",
      description:
        "Student-led chapters driving change across 60+ universities nationwide",
      bg: "/cornell-chapter.jpg",
      bgPos: "center 30%",
      cta: { text: "Find a Chapter", href: "/get-involved/chapters" },
    },
    {
      title: "Resources",
      description:
        "Educational materials and research for health equity advocacy",
      bg: "/home-resources.jpg",
      bgPos: "center 30%",
      cta: { text: "Explore Resources", href: "/resources" },
    },
  ];

  return (
    <PageLayout fullWidth>
      {/* Hero */}
      <Hero
        title={homePage.hero.title}
        description={homePage.hero.description}
      />

      {/* Photo Strip */}
      <section className="overflow-hidden bg-white">
        <div className="voe-marquee flex w-max gap-1">
          {(() => {
            const images = [
              "/impact-stories.jpeg",
              "/local-initiatives.jpeg",
              "/paintingtry.jpg",
              "/team-picture.jpg",
              "/empower.jpg",
              "/voe-journey.jpeg",
              "/cornell-chapter.jpg",
              "/home-resources.jpg",
              "/hero-new.jpeg",
            ];
            return [...images, ...images].map((src, idx) => (
              <div
                key={`${src}-${idx}`}
                className="relative h-44 w-72 flex-shrink-0 md:h-52 md:w-80"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </div>
            ));
          })()}
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-white py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.2em] text-[#587FDA]">
              Our Purpose
            </p>
            <h2 className="mb-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#171219] md:text-5xl">
              {mission.heading}
            </h2>
            <p className="mb-20 max-w-3xl text-lg leading-relaxed text-[#4A5568] md:text-xl">
              {mission.text}
            </p>
          </AnimateOnScroll>

          <div className="grid gap-12 md:grid-cols-3 md:gap-16">
            {missionPoints.map((point, idx) => (
              <AnimateOnScroll
                key={point.title}
                animation="fade-up"
                delay={idx * 150}
              >
                <div className="mb-5 text-[#587FDA]">{point.icon}</div>
                <h3 className="mb-3 font-display text-xl font-semibold text-[#171219]">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-[#4A5568]">
                  {point.description}
                </p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-surface py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <div className="mb-16">
              <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.2em] text-[#587FDA]">
                By The Numbers
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#171219] md:text-5xl">
                Our Impact
              </h2>
            </div>
            <ImpactTracker />
            <div className="mt-12">
              <Link
                href="/what-we-do/impact"
                className="link-underline font-display font-medium text-[#587FDA] transition-colors hover:text-[#4566B8]"
              >
                View Full Impact Report &#x2192;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* University Logo Bar */}
      <section className="overflow-hidden bg-white py-12">
        <div className="mx-auto mb-6 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-display text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
            Our Chapter Network
          </p>
        </div>
        <div className="voe-marquee flex w-max items-center gap-12">
          {(() => {
            const names = [
              "Cornell University",
              "Carnegie Mellon",
              "Howard University",
              "MIT",
              "UCLA",
              "UC Berkeley",
              "Harvard",
              "UPenn",
              "Yale",
              "NYU",
              "Ohio State",
              "Purdue",
              "UConn",
              "UT Austin",
              "WashU",
              "UNC Chapel Hill",
              "Binghamton",
              "Georgia Tech",
              "USC",
              "McGill",
            ];
            return [...names, ...names].map((name, idx) => (
              <span
                key={`${name}-${idx}`}
                className="whitespace-nowrap font-display text-sm font-medium text-gray-400"
              >
                {name}
              </span>
            ));
          })()}
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-warm-wash py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="min-w-full flex-none">
                    <div className="relative h-[28rem] md:h-[32rem]">
                      <Image
                        src={slide.bg}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        style={{ objectPosition: slide.bgPos }}
                      />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="mx-auto max-w-2xl px-8 text-center"
                          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                        >
                          <h3 className="mb-4 font-display text-3xl font-bold text-white md:text-5xl">
                            {slide.title}
                          </h3>
                          <p className="mb-8 text-lg leading-relaxed text-white/90 md:text-xl">
                            {slide.description}
                          </p>
                          <Link
                            href={slide.cta.href}
                            className="inline-block rounded-md bg-white px-8 py-3 font-display font-medium text-[#171219] transition-colors hover:bg-gray-100"
                          >
                            {slide.cta.text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#171219] transition-colors hover:bg-white"
              aria-label="Previous"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#171219] transition-colors hover:bg-white"
              aria-label="Next"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === i ? "w-8 bg-[#587FDA]" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-gradient-surface py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <p className="mb-4 font-display text-xs font-medium uppercase tracking-[0.2em] text-[#587FDA]">
              What We Do
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-[#171219] md:text-5xl">
              Key Initiatives
            </h2>
            <p className="mb-16 max-w-2xl text-lg text-[#4A5568]">
              Building health equity through education, activation, and
              community-driven change.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {homePage.initiatives.map((initiative, idx) => (
              <AnimateOnScroll
                key={initiative.title}
                animation="scale-in"
                delay={idx * 150}
              >
                <div className="premium-card group h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <Image
                      src={initiative.image}
                      alt={initiative.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="mb-3 font-display text-lg font-semibold text-[#171219] transition-colors duration-300 group-hover:text-[#2A8D87]">
                      {initiative.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4A5568]">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-warm-wash py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-gray-200 md:grid-cols-2">
            <AnimateOnScroll animation="fade-in-left">
              <Link
                href="/who-we-are/team"
                className="hover-lift group block bg-white p-10 hover:bg-[#F7F8FA]"
              >
                <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  Meet Our Team
                </p>
                <h3 className="mb-3 font-display text-2xl font-bold text-[#171219] transition-colors group-hover:text-[#587FDA]">
                  Executive Leadership
                </h3>
                <p className="mb-4 leading-relaxed text-[#4A5568]">
                  The passionate leaders behind Voices of Equity driving change
                  in health equity nationwide.
                </p>
                <span className="text-sm font-medium text-[#587FDA]">
                  View Team &#x2192;
                </span>
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-in-right">
              <Link
                href="/get-involved/start"
                className="hover-lift group block bg-white p-10 hover:bg-[#F7F8FA]"
              >
                <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                  Get Involved
                </p>
                <h3 className="mb-3 font-display text-2xl font-bold text-[#171219] transition-colors group-hover:text-[#587FDA]">
                  Start a Chapter
                </h3>
                <p className="mb-4 leading-relaxed text-[#4A5568]">
                  Launch a Voices of Equity chapter at your university and
                  advance health equity in your community.
                </p>
                <span className="text-sm font-medium text-[#587FDA]">
                  Get Started &#x2192;
                </span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#171219] py-24">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <AnimateOnScroll animation="heading">
            <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl">
              Join Our Community
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
              Connect with changemakers building a more equitable future for
              all.
            </p>
            <SocialCallout />
          </AnimateOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
