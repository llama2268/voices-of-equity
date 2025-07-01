'use client'

import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import VideoPlayer from '@/components/Video/VideoPlayer';
import { whatWeDo } from '@/content/content';
import { archiveResources } from '@/content/resources';
import Link from 'next/link';
import { useState } from 'react';
import {SocialCallout} from '@/components/ui/SocialCallout';
import { GuideIcon, ToolkitIcon } from '@/components/icons/ExploreIcons';

export default function ResourcesPage() {
  const { title, subtitle, content } = whatWeDo.resources;
  const [selectedVideo, setSelectedVideo] = useState(content.videos[0]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPaperSlide, setCurrentPaperSlide] = useState(0);
  
  const guides = [
    {
      title: "Chapter Leadership Guide",
      description: "Complete guide for running a successful VoE chapter.",
      icon: <GuideIcon />,
      link: "/guides/chapter-leadership.pdf"
    },
    {
      title: "Health Equity Advocacy Toolkit",
      description: "Resources and strategies for effective advocacy.",
      icon: <ToolkitIcon />,
      link: "/guides/advocacy-toolkit.pdf"
    }
  ];



  const filteredResources = selectedCategory === 'All' 
    ? archiveResources 
    : archiveResources.filter(resource => resource.category === selectedCategory);

  return (
    <PageLayout title={title} subtitle={subtitle}>
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Videos Section */}
        <Section
          title="Learn Through Stories"
          subtitle="Educational Content"
        >
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of videos highlighting key issues and solutions in health equity
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video Player */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 h-[500px]">
                  <VideoPlayer 
                    videoId={selectedVideo?.videoId || ''}
                    title={selectedVideo?.title || ''}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{selectedVideo?.title || ''}</h3>
                  <p className="text-gray-600 text-lg">{selectedVideo?.description || ''}</p>
                </div>
              </div>
            </div>

            {/* Video Sidebar - Updated styling */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50/50 rounded-xl p-4 sticky top-24 border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">More Videos</h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {content.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3 rounded-xl transition-all ${
                        selectedVideo === video 
                          ? 'bg-white shadow-sm border-l-4 border-[#498B86]' 
                          : 'hover:bg-white hover:shadow-sm'
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
                          <h4 className={`font-medium line-clamp-2 ${
                            selectedVideo === video ? 'text-[#607AD4]' : 'text-gray-900'
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
        </Section>

        {/* Equity Archive Section */}
        {/* <Section
          title="Equity Archive"
          subtitle="Comprehensive Resource Library"
        >
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of resources spanning research, articles, videos, reports, and tools 
              to advance your understanding and advocacy of health equity
            </p>
          </div> */}

          {/* Filter/Category Navigation */}
          {/* <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', 'Article', 'Research', 'Video', 'Report', 'Tool', 'Podcast'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category 
                    ? 'bg-[#498B86] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category === 'Article' ? 'Articles' : 
                 category === 'Video' ? 'Videos' : 
                 category === 'Report' ? 'Reports' : 
                 category === 'Tool' ? 'Tools' : 
                 category === 'Podcast' ? 'Podcasts' : category}
              </button>
            ))}
          </div> */}

          {/* Resource Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 hover:border-[#498B86]/20">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${resource.tagColor}`}>
                    {resource.category}
                  </span>
                  <span className="text-gray-400 text-xs">• {resource.metadata}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{resource.author}</span>
                  <span>{resource.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Section> */}

        {/* Research Papers Section - Carousel */}
        <Section
          variant="alternate"
          title="Evidence-Based Insights"
          subtitle="Academic Research"
        >
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover peer-reviewed research and analysis on health equity challenges and solutions
            </p>
          </div>
          
          {/* Papers Carousel */}
          <div className="relative w-full">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPaperSlide * 100}%)` }}
              >
                {content.researchPapers.map((paper, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Link 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all border border-gray-100 hover:border-[#498B86]/20 max-w-4xl mx-auto min-h-[300px] flex flex-col justify-between"
                    >
                      <div>
                        <div className="mb-4">
                          <span className="px-3 py-1 bg-[#498B86]/10 text-[#498B86] rounded-full text-sm font-medium">
                            Research Paper
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#498B86] mb-4 leading-tight">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 font-medium">
                          {paper.authors} • {paper.year}
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {paper.description}
                        </p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center text-[#498B86] font-semibold">
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
              onClick={() => setCurrentPaperSlide(currentPaperSlide === 0 ? content.researchPapers.length - 1 : currentPaperSlide - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full transition-colors shadow-lg z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentPaperSlide(currentPaperSlide === content.researchPapers.length - 1 ? 0 : currentPaperSlide + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-full transition-colors shadow-lg z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {content.researchPapers.map((_, slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentPaperSlide(slide)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentPaperSlide === slide ? 'bg-[#498B86]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* Guides Section */}

        {/* Stay Connected Section */}
        {/* <Section 
          title="Stay Connected"
          subtitle="Follow Our Updates"
        >
          <div className="max-w-4xl mx-auto">
            <SocialCallout />
          </div>
        </Section> */}

        {/* Call to Action */}
        <Section 
          variant="highlight"
          title="Get Involved"
          subtitle="Take the Next Step"
          className="text-center"
        >
          <blockquote className="max-w-3xl mx-auto mb-8">
            <p className="text-2xl text-gray-800 leading-relaxed">
              "Knowledge is the first step toward change. These resources are your gateway to understanding and action."
            </p>
          </blockquote>
          <Link 
            href="/contact"
            className="inline-block bg-[#498B86] text-white px-8 py-4 rounded-xl hover:bg-[#3A6F6B] transition-colors font-semibold"
          >
            Contact Us
          </Link>
        </Section>
        <div className="my-10"></div>
      </div>
    </PageLayout>
  );
} 