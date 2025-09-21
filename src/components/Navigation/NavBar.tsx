'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content';
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const menuItems = navigation.mainNav;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  // const isTransparent = isHomePage && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        // isTransparent
          'bg-white shadow-sm rounded-b-xl'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className={`text-xl font-bold ${
                'text-gray-900'
                }`}
              >
                {/* Move the logo to the left*/}
              <Image src="/logo-new.png" alt="Voices of Equity" width={110} height={100} priority placeholder="empty"/>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center justify-around flex-1 mx-8">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <div className="relative group">
                      <button
                        className={`inline-flex items-center text-sm font-medium ${
                        'text-gray-900 hover:text-[#498B86]'
                        }`}
                      >
                        {item.title}
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg mx-1"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '/'}
                      className={`inline-flex items-center text-sm font-medium ${
                          'text-gray-900 hover:text-[#498B86]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg ${
                  'text-gray-400 hover:text-gray-500 hover:bg-gray-50'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
       <div className="sm:hidden fixed inset-x-0 top-16 bottom-0 bg-white border-t border-gray-200 overflow-y-auto z-50">
          <div className="pt-4 pb-6 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-semibold text-gray-900 mx-2">
                      {item.title}
                    </div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-6 py-2 text-sm text-gray-700 hover:text-[#498B86] hover:bg-gray-50 mx-2 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    href={item.href || '/'}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#498B86] hover:bg-gray-50 mx-2 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar; 