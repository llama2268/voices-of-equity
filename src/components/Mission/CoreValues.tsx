'use client';

import Image from 'next/image';
import Reveal from '@/components/Animation/Reveal';
import StackedCards from '@/components/Animation/StackedCards';

/**
 * Core values - V.O.I.C.E.S.
 *
 * Fourth pass. The grid of six cards is gone; the values now arrive one
 * after another as you scroll, each card sliding up over the last and
 * the pile growing at the top of the screen - the stacked-card motion
 * from the reference site's About page. Each card carries the value, its
 * description, and a photograph; the acronym is left to read itself.
 */

interface Value {
  letter: string;
  word: string;
  description: string;
  image: string;
  alt: string;
  position?: string;
}

const VALUES: Value[] = [
  {
    letter: 'V',
    word: 'Vision',
    description:
      'Stay focused on long-term impact and health equity outcomes. Every decision we make should move us closer to a world where healthcare access is not determined by geography, race, or income.',
    image: '/photos/gbm-brainstorm.jpg',
    alt: 'Chapter members planning together at a general body meeting',
  },
  {
    letter: 'O',
    word: 'Opportunity for Better Health',
    description:
      'Health isn’t just about doctors and hospitals — it’s about the opportunities people have to stay healthy. We fight to remove barriers like lack of insurance, food insecurity, and unequal access to care.',
    image: '/photos/tent-tabling.jpg',
    alt: 'Members running an outreach tent at a community event',
    position: 'center 40%',
  },
  {
    letter: 'I',
    word: 'Impact Over Words',
    description:
      'We measure success not by what we say, but by what we do. Every initiative, event, and partnership must drive tangible outcomes for the communities we serve.',
    image: '/photos/committee-presentation.jpg',
    alt: 'A chapter leader presenting to the room',
    position: 'center 30%',
  },
  {
    letter: 'C',
    word: 'Community First',
    description:
      'Health starts where we live, work, and gather. We listen to communities, support grassroots efforts, and ensure that solutions are created with the people they serve.',
    image: '/photos/arkansas-chapter-group.jpg',
    alt: 'A chapter gathered together after an event',
  },
  {
    letter: 'E',
    word: 'Empowerment',
    description:
      'Inspire and enable others to lead and create change. We believe lasting impact comes from building the capacity of individuals to advocate for their own health and the health of their communities.',
    image: '/photos/student-podium.jpg',
    alt: 'A chapter member speaking at a general body meeting',
    position: 'center 20%',
  },
  {
    letter: 'S',
    word: 'Sustainability',
    description:
      'Build systems and partnerships that endure beyond any single leader, event, or academic year. Real change doesn’t happen overnight — we work to create lasting systems of support.',
    image: '/photos/education-team.jpg',
    alt: 'The education team working through a session',
  },
];

export default function CoreValues() {
  return (
    <div className="voe-container">
      <Reveal variant="fade">
        <p className="voe-eyebrow mb-3 !text-white/75">What Drives Us</p>
        <h2 className="voe-display-lg font-display mb-4 text-white">Our Core Values</h2>
        <p className="voe-lead mb-12 max-w-xl !text-white/80">
          Six principles that decide what we build and who we build it with. Read the first letter of each one.
        </p>
      </Reveal>

      <StackedCards>
        {VALUES.map((v) => (
          <article key={v.letter} className="voe-stack__card">
            <div className="voe-stack__body">
              <div className="voe-rule mb-6" aria-hidden="true" />
              <h3 className="voe-stack__title font-display !mt-0">{v.word}</h3>
              <p className="voe-stack__text">{v.description}</p>
            </div>
            <div className="voe-stack__photo">
              <Image
                src={v.image}
                alt={v.alt}
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: v.position ?? 'center' }}
              />
            </div>
          </article>
        ))}
      </StackedCards>
    </div>
  );
}
