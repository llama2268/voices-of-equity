'use client'

import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import VideoPlayer from '../../../components/Video/VideoPlayer';
import { whatWeDo } from '@/content/content';
import Link from 'next/link';
import { useState } from 'react';
import {SocialCallout} from '@/components/ui/SocialCallout';
import { GuideIcon, ToolkitIcon } from '@/components/icons/ExploreIcons';

export default function ResourcesPage() {
  const { title, subtitle, content } = whatWeDo.resources;
  const [selectedVideo, setSelectedVideo] = useState(content.videos[0]);
  
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

        {/* Research Papers Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.researchPapers.map((paper, index) => (
              <Link 
                href={paper.link} 
                key={index}
                className="block bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all border border-gray-100 hover:border-[#498B86]/20"
              >
                <h3 className="text-xl font-semibold text-[#498B86] mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {paper.authors} • {paper.year}
                </p>
                <p className="text-gray-600">
                  {paper.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Guides Section */}
        <Section
          title="Implementation Guides"
          subtitle="Practical Tools"
        >
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step resources to help you make a difference in your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.link}
                className="block p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#498B86]/20"
              >
                <div className="text-[#498B86] mb-4 transform transition-transform hover:scale-105">{guide.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{guide.title}</h3>
                <p className="text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </Section>

        {/* Stay Connected Section */}
        <Section 
          title="Stay Connected"
          subtitle="Follow Our Updates"
        >
          <div className="max-w-4xl mx-auto">
            <SocialCallout />
          </div>
        </Section>

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
          <a 
            href="mailto:resources@voicesofequity.org"
            className="inline-block bg-[#498B86] text-white px-8 py-4 rounded-xl hover:bg-[#3A6F6B] transition-colors font-semibold"
          >
            Request Resources
          </a>
        </Section>
        <div className="my-10"></div>
      </div>
    </PageLayout>
  );
} 