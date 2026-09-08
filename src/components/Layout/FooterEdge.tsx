'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Edge, GROUND } from '@/components/Layout/Seam';

/**
 * The footer's top edge.
 *
 * The footer is deep Equity Blue, and most pages end on the deep-blue
 * call-to-action band, so the two simply run together. A page that ends
 * on a light section gets a lattice edge instead, in that section's
 * colour, dissolving onto the footer - the same divider used between
 * sections everywhere else. Which case applies is read from the page
 * after mount; on the deep-blue pages nothing renders at all.
 */
const GROUND_BY_CLASS: Record<string, string> = {
  'voe-ground-white': GROUND.white,
  'voe-ground-frost': GROUND.frost,
  'voe-ground-mist': GROUND.mist,
  'voe-ground-blue-soft': GROUND.blueSoft,
  'voe-ground-green-soft': GROUND.greenSoft,
  'voe-ground-blue': GROUND.blue,
  'voe-ground-green': GROUND.green,
  'voe-ground-ink': GROUND.ink,
  'voe-ground-navy': GROUND.navy,
};

function lastGround(): string | null {
  const main = document.querySelector('main');
  let el: Element | null = main ? main.lastElementChild : null;
  // walk down the last branch until something declares a ground
  for (let depth = 0; el && depth < 6; depth++) {
    if (el.classList.contains('voe-ground-blue-deep')) return null;
    for (const cls of Object.keys(GROUND_BY_CLASS)) {
      if (el.classList.contains(cls)) return GROUND_BY_CLASS[cls] ?? null;
    }
    el = el.lastElementChild;
  }
  // nothing declared: read what actually paints, and treat light as white
  const probe = main?.lastElementChild;
  if (probe) {
    const bg = getComputedStyle(probe).backgroundColor;
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m) {
      const lum = (0.2126 * Number(m[1]) + 0.7152 * Number(m[2]) + 0.0722 * Number(m[3])) / 255;
      return lum > 0.6 ? GROUND.white : null;
    }
  }
  return GROUND.white;
}

export default function FooterEdge() {
  const pathname = usePathname();
  const [from, setFrom] = useState<string | null>(null);

  // re-read on every navigation: the footer outlives the page it sits under
  useEffect(() => {
    setFrom(lastGround());
  }, [pathname]);

  if (!from) return null;
  return <Edge from={from} />;
}
