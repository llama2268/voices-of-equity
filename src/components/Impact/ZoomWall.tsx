'use client';

import Image from 'next/image';
import Reveal from '@/components/Animation/Reveal';

/**
 * The network on one call.
 *
 * A screenshot of a national Zoom call as the base, with a few tiles
 * lifted out of the grid - bigger, tilted, shadowed - and a sticker
 * labelling the moment. The same collage the reference site uses for its
 * virtual programme.
 */
/* Each lifted tile sits over the same person's square in the grid, so
   nobody appears twice. Names and schools are set as real text under the
   picture, since the crop takes the Zoom label away. Later entries paint
   over earlier ones, so Taylor is listed after Sophie: her caption sits
   where Sophie's frame would otherwise cover it. */
const POPOUTS = [
  { src: '/photos/zoom/tile-laura.jpg', name: 'Laura Gomes', org: 'UCF · President', pos: 'left-[-6%] top-[-10%] w-[32%]', tilt: '-rotate-[5deg]', delay: 200 },
  { src: '/photos/zoom/tile-tracy.jpg', name: 'Tracy Vuong', org: 'UT Austin · Co-President', pos: 'right-[-5%] top-[-9%] w-[31%]', tilt: 'rotate-[4deg]', delay: 320 },
  { src: '/photos/zoom/tile-sophie.jpg', name: 'Sophie Lee', org: 'Howard · President', pos: 'left-[7%] top-[43%] w-[32%]', tilt: '-rotate-[3deg]', delay: 440 },
  { src: '/photos/zoom/tile-taylor.jpg', name: 'Taylor Poces-Bell', org: 'UIUC · President', pos: 'left-[36%] top-[14%] w-[30%]', tilt: 'rotate-[2deg]', delay: 560 },
  { src: '/photos/zoom/tile-jennifer.jpg', name: 'Jennifer Zhu', org: 'National Director of Media', pos: 'right-[-7%] bottom-[2%] w-[31%]', tilt: 'rotate-[4deg]', delay: 680 },
];

export default function ZoomWall() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <Reveal variant="left">
        <p className="voe-eyebrow mb-4">The network, on one call</p>
        <h2 className="voe-display-lg font-display mb-6 text-[#171219]">Seventy campuses in one room.</h2>
        <p className="voe-lead mb-4">
          From the August leadership intensive to national calls through the year, chapter presidents and the national team meet over Zoom to plan the work, share what’s working, and keep seventy campuses moving as one organization.
        </p>
        <p className="leading-relaxed text-[#4A5568]">
          Every square is a student leading health equity work on their own campus.
        </p>
      </Reveal>

      <Reveal variant="right" delay={120}>
        <div className="voe-zoom">
          <div className="voe-zoom__grid">
            <Image
              src="/photos/zoom/presidents-call.jpg"
              alt="Chapter presidents from across the country on a national Zoom call"
              width={2000}
              height={1124}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="h-auto w-full"
            />
          </div>
          {POPOUTS.map((t) => (
            <Reveal key={t.src} variant="scale" delay={t.delay} className={`voe-zoom__tile ${t.pos}`}>
              <figure className={`voe-zoom__frame ${t.tilt}`}>
                <Image src={t.src} alt={`${t.name} on a national call`} width={505} height={257} sizes="(max-width: 1024px) 34vw, 20vw" className="h-auto w-full" />
                <figcaption className="voe-zoom__cap">
                  <span className="voe-zoom__name font-display">{t.name}</span>
                  <span className="voe-zoom__org">{t.org}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <span className="voe-sticker voe-zoom__sticker">Chapter presidents, coast to coast</span>
        </div>
      </Reveal>
    </div>
  );
}
