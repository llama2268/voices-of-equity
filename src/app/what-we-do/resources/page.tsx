'use client'

import PageLayout from '@/components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import VideoPlayer from '../../../components/Video/VideoPlayer';
import { whatWeDo } from '@/content/content';
import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const { title, subtitle, content } = whatWeDo.resources;
  const [selectedVideo, setSelectedVideo] = useState(content.videos[0]);
  
  return (
    <PageLayout title={title} subtitle={subtitle}>
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {/* Videos Section */}
        <Section>
          <div className="text-center mb-12">
            <p className="font-serif text-lg text-primary-600 mb-3 italic">
              Educational Content
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learn Through Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of videos highlighting key issues and solutions in health equity
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video Player */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 h-[500px]">
                  <VideoPlayer 
                    videoId={selectedVideo?.videoId || ''}
                    title={selectedVideo?.title || ''}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{selectedVideo?.title || ''}</h3>
                  <p className="text-gray-600 text-lg">{selectedVideo?.description || ''}</p>
                </div>
              </div>
            </div>

            {/* Video Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-4 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-gray-700">More Videos</h3>
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {content.videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedVideo(video)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedVideo === video 
                          ? 'bg-white shadow-md border-l-4 border-[#607AD4]' 
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
        <Section variant="alternate">
          <div className="text-center mb-12">
            <p className="font-serif text-lg text-primary-600 mb-3 italic">
              Academic Research
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Evidence-Based Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover peer-reviewed research and analysis on health equity challenges and solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.researchPapers.map((paper, index) => (
              <Link 
                href={paper.link} 
                key={index}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {paper.title}
                </h3>
                <p className="font-serif text-sm text-gray-500 mb-3 italic">
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
        {/* <Section>
          <div className="text-center mb-12">
            <p className="font-serif text-lg text-primary-600 mb-3 italic">
              Practical Tools
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Implementation Guides
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Step-by-step resources to help you make a difference in your community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.guides.map((guide, index) => (
              <Link 
                href={guide.link}
                key={index}
                className="group block bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{guide.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#607AD4] transition-colors">
                    {guide.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </Section> */}

        {/* Call to Action */}
        <Section variant="highlight" className="text-center">
          <blockquote className="max-w-3xl mx-auto mb-8">
            <p className="font-serif text-2xl text-gray-800 italic leading-relaxed">
              "Knowledge is the first step toward change. These resources are your gateway to understanding and action."
            </p>
          </blockquote>
          <a 
            href="mailto:resources@voicesofequity.org"
            className="inline-block bg-[#607AD4] text-white px-6 py-3 rounded-lg hover:bg-[#4c62aa] transition-colors"
          >
            Request Resources
          </a>
        </Section>
      </div>
    </PageLayout>
  );
} 