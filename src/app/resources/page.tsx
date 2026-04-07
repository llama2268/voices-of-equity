'use client'

import PageLayout from '@/components/Layout/PageLayout';
import VideoPlayer from '@/components/Video/VideoPlayer';
import { resourcesPage } from '@/content';
import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const { main } = resourcesPage;
  const [selectedVideo, setSelectedVideo] = useState(main.content.videos[0]);
  const [currentPaperSlide, setCurrentPaperSlide] = useState(0);

  return (
    <PageLayout title={main.title} subtitle={main.subtitle}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Videos Section */}
        <section className="py-24">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Educational Content</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#171219] mb-4">Learn Through Stories</h2>
          <p className="text-[#4A5568] leading-relaxed max-w-2xl mb-12">
            Explore our curated collection of videos highlighting key issues and solutions in health equity
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video Player */}
            <div className="lg:w-2/3">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="w-full">
                  <VideoPlayer
                    videoId={selectedVideo?.videoId ?? ''}
                    title={selectedVideo?.title ?? ''}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-display text-[#171219] mb-3">{selectedVideo?.title ?? ''}</h3>
                  <p className="text-[#4A5568] leading-relaxed">{selectedVideo?.description ?? ''}</p>
                </div>
              </div>
            </div>

            {/* Video Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-[#F7F8FA] border border-gray-200 rounded-lg p-4 sticky top-24">
                <h3 className="text-sm font-bold font-display text-[#171219] uppercase tracking-widest mb-4">More Videos</h3>
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {main.content.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3 rounded-md transition-colors ${selectedVideo === video
                          ? 'bg-white border border-gray-200 border-l-4 border-l-[#587FDA]'
                          : 'hover:bg-white'
                        }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-24 h-16 bg-gray-200 rounded overflow-hidden">
                          <img
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm line-clamp-2 ${selectedVideo === video ? 'text-[#587FDA]' : 'text-[#171219]'
                            }`}>
                            {video.title}
                          </h4>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        {/* Research Papers Section */}
        <section className="py-24 bg-[#F7F8FA] -mx-4 px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Academic Research</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#171219] mb-4">Evidence-Based Insights</h2>
            <p className="text-[#4A5568] leading-relaxed max-w-2xl mb-12">
              Discover peer-reviewed research and analysis on health equity challenges and solutions
            </p>

            {/* Papers Carousel */}
            <div className="relative w-full">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentPaperSlide * 100}%)` }}
                >
                  {main.content.researchPapers.map((paper, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Link
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-all max-w-4xl mx-auto min-h-[300px] flex flex-col justify-between"
                      >
                        <div>
                          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Research Paper</p>
                          <h3 className="text-2xl font-bold font-display text-[#587FDA] mb-4 leading-tight">
                            {paper.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-4 font-medium">
                            {paper.authors} &middot; {paper.year}
                          </p>
                          <p className="text-[#4A5568] text-lg leading-relaxed">
                            {paper.description}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-200">
                          <span className="inline-flex items-center text-[#587FDA] font-semibold">
                            Read Full Paper
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                onClick={() => setCurrentPaperSlide(currentPaperSlide === 0 ? main.content.researchPapers.length - 1 : currentPaperSlide - 1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-[#171219] p-3 rounded-md hover:shadow-sm transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentPaperSlide(currentPaperSlide === main.content.researchPapers.length - 1 ? 0 : currentPaperSlide + 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 text-[#171219] p-3 rounded-md hover:shadow-sm transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {main.content.researchPapers.map((_, slide) => (
                  <button
                    key={slide}
                    onClick={() => setCurrentPaperSlide(slide)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentPaperSlide === slide ? 'bg-[#587FDA]' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        {/* Call to Action */}
        <section className="py-24 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-3">Take the Next Step</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#171219] mb-8">Get Involved</h2>
          <blockquote className="max-w-3xl mx-auto mb-10">
            <p className="text-xl text-[#4A5568] leading-relaxed">
              &quot;{main.quote.text}&quot;
            </p>
          </blockquote>
          <Link
            href="/contact"
            className="inline-block bg-[#587FDA] text-white px-8 py-3 rounded-md hover:bg-[#4566B8] transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </PageLayout>
  );
}
