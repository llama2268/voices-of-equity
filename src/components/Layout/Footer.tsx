import Image from 'next/image';
import Link from 'next/link';
import { navigation, footer, siteConfig } from '@/content';
import FooterEdge from './FooterEdge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="voe-ground-footer relative text-white">
      <FooterEdge />
      <div className="voe-footer__body voe-container pb-14 pt-12 md:pb-16 md:pt-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-10">
          <div className="max-w-xs">
            <Link href="/" className="inline-block" aria-label="Voices of Equity - home">
              <Image src="/brand/lockup-white.png" alt="Voices of Equity" width={606} height={257} className="h-14 w-auto" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/70">{footer.tagline}</p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.links.social.linkedin}
                className="text-white/60 transition-colors duration-300 hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={siteConfig.links.social.instagram}
                className="text-white/60 transition-colors duration-300 hover:text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {navigation.mainNav.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.submenu ? (
                  section.submenu.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="text-sm text-white/90 transition-colors duration-300 hover:text-white">
                        {item.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link href={section.href!} className="text-sm text-white/80 transition-colors duration-300 hover:text-white">
                      {section.title}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <div className="text-sm text-white/65">{footer.bottomText.replace('2024', currentYear.toString())}</div>
          <Link href="/contact" className="text-sm text-white/65 transition-colors duration-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
