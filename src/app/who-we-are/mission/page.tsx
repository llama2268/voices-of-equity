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

  return (
    <PageLayout>
      <div className="pt-20"></div>
      <div className="relative h-80 w-full">
        <Image
          src="/team.jpg"
          alt="Our Mission"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 60%"
          className="filter brightness-125"
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
      <Section>
        <div className="text-center mb-12">
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
          </p>
          <h2 className="text-3xl font-bold mb-6">{vision.heading}</h2>
          <p className="font-serif text-xl text-gray-800 max-w-3xl mx-auto mb-12">
            {vision.text}
          </p>
        </div>
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
      </Section>

      {/* Values */}
      <Section 
        variant="alternate" 
        className="py-12 bg-[#498B86]"
      >
        <Heading
          level={2}
          className="text-center text-white mb-8 uppercase tracking-wider"
        >
          {values.heading}
        </Heading>
        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {values.items.map((value, index) => (
            <Card
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-2xl border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-offset-2 hover:ring-primary-500 group"
            >
              {/* Front layer: show each letter to collectively spell "V O I C E" */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <h2 className="text-6xl font-bold text-primary-500">
                  {['V', 'O', 'I', 'C', 'E'][index]}
                </h2>
              </div>
              {/* Back layer: card content revealed on hover */}
              <div className="relative opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mb-2 text-primary-500 uppercase tracking-wide text-sm text-center font-bold">
                  {value.title}
                </div>
                <p className="text-gray-600 group-hover:text-[#498B86] transition-colors">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section 
        title="Share Our Mission"
        subtitle="Join the Conversation"
        description="Help spread awareness about health equity"
      >
        <div className="max-w-4xl mx-auto">
          <SocialCallout />
        </div>
      </Section>

      {/* Call to Action */}
      <Section variant="highlight" className="text-center">
        <Heading level={2} className="mb-4">
          {callToAction.heading}
        </Heading>
        <p className="text-xl text-gray-700 mb-8">
          {callToAction.text}
        </p>
        <Link href={callToAction.buttonLink}>
          <Button size="lg" variant="primary">
            {callToAction.buttonText}
          </Button>
        </Link>
      </Section>
    </PageLayout>
  );
} 