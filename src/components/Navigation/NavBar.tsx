'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content';
import Image from 'next/image';

/**
 * The header.
 *
 * Floats over the page hero with no bar of its own. Scroll down and it
 * slides away; scroll back up and it returns on an Equity Blue bar; stop
 * scrolling and the bar fades out, leaving just the lockup and the links
 * sitting on the page. The type is always white. Over a light section
 * the bar doesn't vanish completely - it thins to a translucent blue so
 * white type still has something to sit on.
 */

type Mode = 'top' | 'hidden' | 'bar' | 'settled';

const SETTLE_MS = 650;

const DARK_GROUNDS = ['voe-ground-blue', 'voe-ground-blue-deep', 'voe-ground-footer', 'voe-ground-green', 'voe-ground-ink', 'voe-ground-navy', 'voe-popout__panel--blue'];
const LIGHT_GROUNDS = ['voe-ground-white', 'voe-ground-mist', 'voe-ground-frost', 'voe-ground-blue-soft', 'voe-ground-green-soft'];

/**
 * Is the page light where the header rests? Grounds are recognised by
 * their design-system class first (their gradients have no single
 * background-color to read), then by whatever colour actually paints.
 */
function isLightAt(x: number, y: number, ignore: HTMLElement | null): boolean {
  // A lattice edge lies over the top of the section that follows it and
  // ignores pointer events, so hit-testing would report that section.
  // Its upper half is still mostly the colour of the section above.
  for (const edge of Array.from(document.querySelectorAll<HTMLElement>('.voe-edge'))) {
    const r = edge.getBoundingClientRect();
    if (y < r.top || y > r.top + r.height * 0.55 || x < r.left || x > r.right) continue;
    const hex = getComputedStyle(edge).getPropertyValue('--voe-edge-from').trim();
    const m = hex.match(/^#([0-9a-f]{6})$/i);
    const rgb = m?.[1];
    if (!rgb) break;
    const [r8, g8, b8] = [0, 2, 4].map((i) => parseInt(rgb.slice(i, i + 2), 16) / 255) as [number, number, number];
    return 0.2126 * r8 + 0.7152 * g8 + 0.0722 * b8 > 0.6;
  }
  const stack = document.elementsFromPoint(x, y) as HTMLElement[];
  for (const el of stack) {
    if (ignore && ignore.contains(el)) continue;
    let node: HTMLElement | null = el;
    while (node && node !== document.documentElement) {
      const cl = node.classList;
      if (DARK_GROUNDS.some((c) => cl.contains(c))) return false;
      if (LIGHT_GROUNDS.some((c) => cl.contains(c))) return true;
      // a hero photograph carries a scrim, so white type is safe on it
      if (node.hasAttribute('data-hero')) return false;
      // any other photograph is unpredictable - give the type the veil
      if (node.tagName === 'IMG' || cl.contains('voe-photo')) return true;
      const bg = getComputedStyle(node).backgroundColor;
      const m = bg.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
      if (m && (m[4] === undefined || parseFloat(m[4]) > 0.5)) {
        const [r, g, b] = [m[1] ?? '0', m[2] ?? '0', m[3] ?? '0'].map((v) => parseFloat(v) / 255) as [number, number, number];
        return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.6;
      }
      node = node.parentElement;
    }
  }
  return true;
}

const NavBar = () => {
  const pathname = usePathname();
  const menuItems = navigation.mainNav;
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setModeState] = useState<Mode>('top');
  const [onLight, setOnLight] = useState(false);
  const modeRef = useRef<Mode>('top');
  const setMode = (m: Mode) => {
    modeRef.current = m;
    setModeState(m);
  };
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const settleTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const measureGround = () => {
      const nav = navRef.current;
      const h = nav ? nav.getBoundingClientRect().height : 72;
      // sample under the lockup, the middle and the links: if any of them
      // sits on something light, the whole header takes the veil
      const w = window.innerWidth;
      setOnLight([0.12, 0.5, 0.86].some((f) => isLightAt(w * f, h + 6, nav)));
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY.current;
      lastY.current = y;

      if (settleTimer.current) window.clearTimeout(settleTimer.current);

      if (y < 24) {
        setMode('top');
      } else if (dy > 2 && y > 80) {
        setMode('hidden');
      } else if (dy < -2) {
        setMode('bar');
      }

      settleTimer.current = window.setTimeout(() => {
        if (modeRef.current === 'bar') {
          measureGround();
          setMode('settled');
        }
      }, SETTLE_MS);
    };

    lastY.current = window.scrollY;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ---- what the header looks like in each state -------------------------
  const visible = mode !== 'hidden' || isOpen;
  const barBlue = mode === 'bar' && !isOpen;
  const barWhite = isOpen;
  // resting over a light section: the bar thins to translucent blue
  const barVeil = mode === 'settled' && onLight && !isOpen;
  // ink type only while the menu is open; otherwise the header is white
  const dark = isOpen;

  const shell = barWhite
    ? 'bg-white shadow-[0_1px_0_rgba(23,18,25,0.08)]'
    : barBlue
      ? 'bg-[#587FDA] shadow-[0_12px_30px_rgba(14,26,51,0.18)]'
      : barVeil
        ? 'bg-[#587FDA]/85 shadow-[0_8px_24px_rgba(14,26,51,0.12)] backdrop-blur-md'
        : 'bg-transparent';

  const linkBase = dark
    ? 'text-[#171219] hover:text-[#587FDA]'
    : 'text-white/90 hover:text-white';
  const linkActive = dark ? 'text-[#587FDA]' : 'text-white';
  // a whisper of shadow keeps white type legible over busy photography
  const typeShadow = dark ? '' : '[text-shadow:0_1px_2px_rgba(14,26,51,0.35)]';

  const compact = mode !== 'top';

  return (
    <nav
      ref={navRef}
      data-mode={mode}
      data-light={onLight ? '1' : '0'}
      className={`fixed top-0 z-50 w-full transition-[transform,background-color,box-shadow] duration-300 ease-out ${shell} ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="voe-container">
        <div className={`flex items-center transition-[height] duration-300 ${compact ? 'h-[76px]' : 'h-24 md:h-28'}`}>
          <div className="flex-shrink-0">
            <Link href="/" className="block" aria-label="Voices of Equity - home">
              <Image
                src={dark ? '/brand/lockup-black.png' : '/brand/lockup-white.png'}
                alt="Voices of Equity"
                width={606}
                height={257}
                priority
                className={`w-auto transition-[height] duration-300 ${compact ? 'h-12' : 'h-14 md:h-[68px]'} ${
                  dark ? '' : 'drop-shadow-[0_1px_2px_rgba(14,26,51,0.35)]'
                }`}
              />
            </Link>
          </div>

          <div className="ml-8 hidden flex-1 items-center justify-end gap-1 md:flex">
            {menuItems.map((item) => (
              <div key={item.title} className="group relative">
                {item.submenu ? (
                  <>
                    <button
                      className={`inline-flex items-center px-3 py-2 font-display text-[15px] font-semibold tracking-wide transition-colors duration-200 ${linkBase} ${typeShadow}`}
                    >
                      {item.title}
                      <svg className="ml-1 h-3 w-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="invisible absolute left-0 mt-0 w-52 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-[0_18px_40px_rgba(14,26,51,0.16)]">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition-colors ${
                              pathname === sub.href
                                ? 'bg-[#F1FAF9] text-[#23736E]'
                                : 'text-[#171219] hover:bg-[#F1F5FD] hover:text-[#587FDA]'
                            }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href || '/'}
                    className={`px-3 py-2 font-display text-[15px] font-semibold tracking-wide transition-colors ${
                      pathname === item.href ? linkActive : linkBase
                    } ${typeShadow}`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="ml-auto md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${dark ? 'text-[#171219]' : 'text-white'}`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[76px] z-50 overflow-y-auto border-t border-[#171219]/10 bg-white transition-all duration-200 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="px-4 pb-8 pt-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <div className="mb-4">
                  <div className="px-3 py-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-[#587FDA]">
                    {item.title}
                  </div>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2.5 text-base ${
                        pathname === sub.href ? 'text-[#23736E]' : 'text-[#171219] hover:text-[#587FDA]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href || '/'}
                  className="block px-3 py-2.5 text-base text-[#171219] hover:text-[#587FDA]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
