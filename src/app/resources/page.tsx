"use client";

import PageLayout from "@/components/Layout/PageLayout";
import VideoPlayer from "@/components/Video/VideoPlayer";
import { resourcesPage } from "@/content";
import Link from "next/link";
import { useState } from "react";
import AnimateOnScroll from "@/components/Animation/AnimateOnScroll";

export default function ResourcesPage() {
  const { main } = resourcesPage;
  const releasedDocumentaryEpisodes = main.content.documentary.episodes.filter(
    (episode) => episode.videoId,
  );
  const [selectedDocumentaryEpisode, setSelectedDocumentaryEpisode] = useState(
    releasedDocumentaryEpisodes[0],
  );
  const [selectedVideo, setSelectedVideo] = useState(main.content.videos[0]);
  const [currentPaperSlide, setCurrentPaperSlide] = useState(0);

  const subResources = [
    {
      title: "Grant Program",
      eyebrow: "Chapter Funding",
      description:
        "Supplemental funding for chapters launching high-impact, community-based events.",
      href: "/resources/grants",
    },
    {
      title: "Our Partners",
      eyebrow: "Organizations",
      description:
        "Organizations we work alongside to advance health equity nationwide.",
      href: "/resources/partners",
    },
    {
      title: "Equity Archive",
      eyebrow: "Research & Stories",
      description:
        "A growing library of writing, research, and stories from the field.",
      href: "/resources/archive",
    },
  ];

  return (
    <PageLayout title={main.title} subtitle={main.subtitle}>
      <div className="mx-auto max-w-6xl px-4">
        {/* Documentary Section */}
        <section className="py-20 md:py-24">
          <AnimateOnScroll animation="fade-up">
            <div className="mb-10 max-w-4xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-gray-600">
                {main.content.documentary.eyebrow}
              </p>
              <h2 className="mb-5 font-display text-3xl font-bold tracking-tight text-[#171219] md:text-5xl">
                {main.content.documentary.title}
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-[#4A5568] md:text-xl">
                {main.content.documentary.description}
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <AnimateOnScroll animation="fade-in-left">
              <div className="shadow-resting overflow-hidden rounded-lg border border-gray-200 bg-white">
                {selectedDocumentaryEpisode?.videoId && (
                  <VideoPlayer
                    videoId={selectedDocumentaryEpisode.videoId}
                    title={selectedDocumentaryEpisode.title}
                  />
                )}
                <div className="p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="inline-flex min-h-0 min-w-0 items-center rounded-full bg-[#587FDA]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#587FDA]">
                      Episode {selectedDocumentaryEpisode?.episode}
                    </span>
                    {selectedDocumentaryEpisode?.videoId && (
                      <Link
                        href={`https://www.youtube.com/watch?v=${selectedDocumentaryEpisode.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-0 min-w-0 items-center text-sm font-semibold text-[#587FDA] hover:text-[#4566B8]"
                      >
                        Watch on YouTube
                        <span aria-hidden className="ml-1">
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-[#171219]">
                    {selectedDocumentaryEpisode?.title}
                  </h3>
                  <p className="leading-relaxed text-[#4A5568]">
                    {selectedDocumentaryEpisode?.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-right">
              <aside className="sticky top-24 rounded-lg border border-gray-200 bg-[#F7F8FA] p-4">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="mb-0 font-display text-sm font-bold uppercase tracking-[0.18em] text-[#171219]">
                    Documentary Playlist
                  </h3>
                  <span className="text-sm font-semibold text-gray-500">
                    {releasedDocumentaryEpisodes.length}/
                    {main.content.documentary.episodes.length}
                  </span>
                </div>
                <div className="max-h-[360px] space-y-2 overflow-y-auto pr-1">
                  {main.content.documentary.episodes.map((episode) => {
                    const isSelected =
                      selectedDocumentaryEpisode?.episode === episode.episode;
                    const isReleased = Boolean(episode.videoId);

                    return (
                      <button
                        key={episode.episode}
                        type="button"
                        onClick={() => {
                          if (isReleased) {
                            setSelectedDocumentaryEpisode(episode);
                          }
                        }}
                        disabled={!isReleased}
                        className={`w-full rounded-md p-3 text-left transition-colors ${
                          isSelected
                            ? "border border-l-4 border-gray-200 border-l-[#587FDA] bg-white"
                            : isReleased
                              ? "hover:bg-white"
                              : "cursor-not-allowed opacity-55"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-200">
                            {episode.videoId ? (
                              <img
                                src={`https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-white text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                                Soon
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                              Episode {episode.episode}
                            </p>
                            <h4
                              className={`mb-0 line-clamp-2 text-sm font-semibold ${isSelected ? "text-[#587FDA]" : "text-[#171219]"}`}
                            >
                              {episode.title}
                            </h4>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </aside>
            </AnimateOnScroll>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        {/* Sub-resources */}
        <section className="py-20">
          <AnimateOnScroll animation="heading">
            <div className="mb-12">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#587FDA]">
                Chapter Resources
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#171219] md:text-4xl">
                Explore Our Resources
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {subResources.map((r, idx) => (
              <AnimateOnScroll
                key={r.title}
                animation="fade-up"
                delay={idx * 100}
              >
                <Link href={r.href} className="block h-full">
                  <div className="premium-card group h-full p-8">
                    <p className="mb-3 font-display text-xs font-medium uppercase tracking-[0.2em] text-[#587FDA]">
                      {r.eyebrow}
                    </p>
                    <h3 className="mb-3 font-display text-xl font-semibold tracking-tight text-[#171219]">
                      {r.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-[#4A5568]">
                      {r.description}
                    </p>
                    <span className="inline-flex items-center gap-1 font-display text-sm font-semibold text-[#587FDA]">
                      Learn more <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="py-24">
          <AnimateOnScroll animation="fade-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
              Educational Content
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-[#171219] md:text-4xl">
              Learn Through Stories
            </h2>
            <p className="mb-12 max-w-2xl leading-relaxed text-[#4A5568]">
              Explore our curated collection of videos highlighting key issues
              and solutions in health equity
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Main Video Player */}
            <AnimateOnScroll animation="fade-in-left" className="lg:w-2/3">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <div className="w-full">
                  <VideoPlayer
                    videoId={selectedVideo?.videoId ?? ""}
                    title={selectedVideo?.title ?? ""}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 font-display text-2xl font-bold text-[#171219]">
                    {selectedVideo?.title ?? ""}
                  </h3>
                  <p className="leading-relaxed text-[#4A5568]">
                    {selectedVideo?.description ?? ""}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Video Sidebar */}
            <AnimateOnScroll animation="fade-in-right" className="lg:w-1/3">
              <div className="sticky top-24 rounded-lg border border-gray-200 bg-[#F7F8FA] p-4">
                <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-[#171219]">
                  More Videos
                </h3>
                <div className="max-h-[600px] space-y-2 overflow-y-auto">
                  {main.content.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full rounded-md p-3 text-left transition-colors ${
                        selectedVideo === video
                          ? "border border-l-4 border-gray-200 border-l-[#587FDA] bg-white"
                          : "hover:bg-white"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded bg-gray-200">
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4
                            className={`line-clamp-2 text-sm font-medium ${
                              selectedVideo === video
                                ? "text-[#587FDA]"
                                : "text-[#171219]"
                            }`}
                          >
                            {video.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        {/* Research Papers Section */}
        <section className="-mx-4 bg-[#F7F8FA] px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <AnimateOnScroll animation="fade-up">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
                Academic Research
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold text-[#171219] md:text-4xl">
                Evidence-Based Insights
              </h2>
              <p className="mb-12 max-w-2xl leading-relaxed text-[#4A5568]">
                Discover peer-reviewed research and analysis on health equity
                challenges and solutions
              </p>
            </AnimateOnScroll>

            {/* Papers Carousel */}
            <div className="relative w-full">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentPaperSlide * 100}%)`,
                  }}
                >
                  {main.content.researchPapers.map((paper, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Link
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-lift mx-auto block flex min-h-[300px] max-w-4xl flex-col justify-between rounded-lg border border-gray-200 bg-white p-8"
                      >
                        <div>
                          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-500">
                            Research Paper
                          </p>
                          <h3 className="mb-4 font-display text-2xl font-bold leading-tight text-[#587FDA]">
                            {paper.title}
                          </h3>
                          <p className="mb-4 text-sm font-medium text-gray-500">
                            {paper.authors} &middot; {paper.year}
                          </p>
                          <p className="text-lg leading-relaxed text-[#4A5568]">
                            {paper.description}
                          </p>
                        </div>
                        <div className="mt-6 border-t border-gray-200 pt-4">
                          <span className="inline-flex items-center font-semibold text-[#587FDA]">
                            Read Full Paper
                            <svg
                              className="ml-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentPaperSlide(
                    currentPaperSlide === 0
                      ? main.content.researchPapers.length - 1
                      : currentPaperSlide - 1,
                  )
                }
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-md border border-gray-200 bg-white p-3 text-[#171219] transition-colors hover:shadow-sm"
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
                onClick={() =>
                  setCurrentPaperSlide(
                    currentPaperSlide === main.content.researchPapers.length - 1
                      ? 0
                      : currentPaperSlide + 1,
                  )
                }
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-md border border-gray-200 bg-white p-3 text-[#171219] transition-colors hover:shadow-sm"
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

              {/* Dots Navigation */}
              <div className="mt-8 flex justify-center space-x-2">
                {main.content.researchPapers.map((_, slide) => (
                  <button
                    key={slide}
                    onClick={() => setCurrentPaperSlide(slide)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      currentPaperSlide === slide
                        ? "bg-[#587FDA]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        {/* Call to Action */}
        <section className="bg-warm-wash py-24 text-center">
          <AnimateOnScroll animation="fade-up">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-gray-500">
              Take the Next Step
            </p>
            <h2 className="mb-8 font-display text-3xl font-bold text-[#171219] md:text-4xl">
              Get Involved
            </h2>
            <blockquote className="mx-auto mb-10 max-w-3xl">
              <p className="text-xl leading-relaxed text-[#4A5568]">
                &quot;{main.quote.text}&quot;
              </p>
            </blockquote>
            <Link
              href="/contact"
              className="hover-scale inline-block rounded-md bg-[#587FDA] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#4566B8]"
            >
              Contact Us
            </Link>
          </AnimateOnScroll>
        </section>
      </div>
    </PageLayout>
  );
}
