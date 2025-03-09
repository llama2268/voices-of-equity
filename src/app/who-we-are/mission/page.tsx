"use client"
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { whoWeAre } from '@/content/content';
import Link from 'next/link';
import Image from 'next/image'
import { SocialCallout } from '@/components/ui/SocialCallout';
import { EducateIcon, InspireIcon, EmpowerIcon } from '@/components/icons/MissionIcons';
import { useRef } from 'react';


export default function MissionPage() {
  const { introduction, mission, vision, values, callToAction } = whoWeAre.mission.content;
  
  const missionPoints = [
    { 
      title: "Educate",
      icon: <EducateIcon />,
      description: mission.keyPoints[0].description 
    },
    { 
      title: "Inspire",
      icon: <InspireIcon />,
      description: mission.keyPoints[1].description 
    },
    { 
      title: "Empower",
      icon: <EmpowerIcon />,
      description: mission.keyPoints[2].description 
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  return (
    <PageLayout>
      <div className="pt-20"></div>
      <div className="relative h-80 w-full">
        <Image
          src="/team-picture.jpg"
          alt="Our Mission"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 60%"
          className="filter brightness-100"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>
      {/* Introduction */}
      {/* <Section spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Foundation
          </p>
          <blockquote className="mb-12">
            <p className="font-serif text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
              {introduction.text}
            </p>
          </blockquote>
        </div>
      </Section> */}

      {/* Mission Statement */}
      <Section variant="alternate">
        <div className="text-center mb-12">
          {/* <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Purpose
          </p> */}
          <h2 className="text-3xl font-bold mb-6">{mission.heading}</h2>
          <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto mb-12">
            {mission.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {missionPoints.map((point, index) => (
            <Card key={index} className="text-center">
              <div className="text-primary-500 mb-4 flex justify-center">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <Section className="bg-white">
  <div className="flex flex-col lg:flex-row items-center gap-10">
    <div className="w-full lg:w-1/2">
        <img
        src="/our-vision-2.png" // Replace with your image URL
        alt="Vision Image"
        className="w-auto h-auto object-cover rounded-lg shadow-md"
      />    </div>

    {/* Right side for text */}
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-3">
  <p className="font-serif text-lg text-primary-600 mb-3 italic">
    {/* Optional tagline or subtitle */}
  </p>
  <h2 className="text-3xl font-bold mb-6 text-black">{vision.heading}</h2>
  <p className="font-serif text-xl text-black max-w-3xl mb-12">
    {vision.text}
  </p>
</div>
  </div>
</Section>
        {/* THESE ARE THE CARDS WHICH WE WILL USE LATER COMMENTED OUT FOR NOW */}
        {/* <div className="grid md:grid-cols-3 gap-8">
          {vision.stats.map((stat, index) => (
            <Card key={index} variant="hover" className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </Card>
          ))}
        </div> */}
        
      {/* Values */}
      <Section className = "w-screen">
      <Heading
          level={2}
          className="text-center text-[#587FDA] mb-8 uppercase tracking-wider bg-white"
        >
          {values.heading}
        </Heading>
      <div className="relative">
      <div ref = {scrollRef} className="overflow-x-auto scrollbar-hide w-screen h-96 pt-8 ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] pr-56">
      <div className="grid md:grid-cols-6 gap-52 p-2 max-w-full">
          {values.items.map((value, index) => (
            <Card
              key={index}
              className="relative w-full p-6 bg-[#587FDA] rounded-lg shadow-2xl border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-offset-2 hover:ring-primary-500 group min-w-[220px]"
            >
              {/* Front layer: show each letter to collectively spell "V O I C E" */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-6xl font-bold text-white">
                  {['V', 'O', 'I', 'C', 'E', 'S'][index]}
                </h2>
              </div>
              {/* Back layer: card content revealed on hover */}
              <div className="relative opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 text-white uppercase tracking-wide text-sm text-center font-bold">
                  {value.title}
                </div>
                <p className="text-gray-600 group-hover:text-white transition-colors text-sm">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
        </div>
      </Section>

      <section className="py-20 bg-[#607AD4] text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join our community of changemakers and help build a more equitable future for all.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <a
              href="/get-involved/chapters"
              className="px-8 py-4 bg-[#498B86] hover:bg-[#3A6F6B] text-white rounded-lg font-semibold transition-colors"
            >
              Join Our Movement
            </a>
            <a
              href="/who-we-are/mission"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-[#607AD4] font-semibold rounded-lg transition-colors"
            >
              Learn More
            </a> */}
            <SocialCallout/>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 