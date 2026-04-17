'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content';
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname();
  const menuItems = navigation.mainNav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 bg-white ${isScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image src="/logo-new.png" alt="Voices of Equity" width={100} height={90} priority placeholder="empty" />
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-end flex-1 ml-8 gap-1">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-sans font-medium tracking-wide text-[#333] hover:text-[#587FDA] transition-colors duration-200">
                      {item.title}
                      <svg className="ml-1 h-3 w-3 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === sub.href ? 'text-[#587FDA] bg-gray-50' : 'text-[#333] hover:text-[#587FDA] hover:bg-gray-50'
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
                    className={`px-3 py-2 text-sm font-sans font-medium tracking-wide transition-colors ${
                      pathname === item.href ? 'text-[#587FDA]' : 'text-[#333] hover:text-[#587FDA]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-[#333] transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-gray-200 overflow-y-auto z-50 transition-all duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="pt-4 pb-8 px-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.submenu ? (
                <div className="mb-4">
                  <div className="px-3 py-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gray-400">{item.title}</div>
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-3 py-2.5 text-base ${pathname === sub.href ? 'text-[#587FDA]' : 'text-[#333] hover:text-[#587FDA]'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link href={item.href || '/'} className="block px-3 py-2.5 text-base text-[#333] hover:text-[#587FDA]" onClick={() => setIsOpen(false)}>
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
