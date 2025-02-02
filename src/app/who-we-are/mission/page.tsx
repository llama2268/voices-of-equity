import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { whoWeAre } from '@/content/content';
import Link from 'next/link';

export default function MissionPage() {
  const { introduction, mission, vision, values, callToAction } = whoWeAre.mission.content;
  
  return (
    <PageLayout title="Our Mission" subtitle="Building a more equitable future in healthcare">
      {/* Introduction */}
      <Section spacing="xl">
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
      </Section>

      {/* Mission Statement */}
      <Section variant="alternate">
        <div className="text-center mb-12">
          <p className="font-serif text-lg text-primary-600 mb-3 italic">
            Our Purpose
          </p>
          <h2 className="text-3xl font-bold mb-6">{mission.heading}</h2>
          <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-relaxed max-w-3xl mx-auto mb-12">
            {mission.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {mission.keyPoints.map((point, index) => (
            <Card key={index} className="text-center">
              <span className="text-3xl mb-4 block">{point.icon}</span>
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
            Our Aspiration
          </p>
          <h2 className="text-3xl font-bold mb-6">{vision.heading}</h2>
          <p className="font-serif text-xl text-gray-800 max-w-3xl mx-auto mb-12">
            {vision.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {vision.stats.map((stat, index) => (
            <Card key={index} variant="hover" className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section variant="alternate">
        <Heading level={2} className="text-center mb-8">
          {values.heading}
        </Heading>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.items.map((value, index) => (
            <Card 
              key={index}
              className="border-l-4 border-primary-500"
            >
              <Heading level={3} className="mb-2">
                {value.title}
              </Heading>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
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