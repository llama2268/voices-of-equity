'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/content/content';
import Image from 'next/image';

const NavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const menuItems = navigation.mainNav;

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="w-full fixed top-0 z-50 transition-all duration-300 bg-transparent">
        <div className="px-3">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="font-bold text-2xl text-white">
              <Image src="/logo.jpg" alt="Voices of Equity" width={80} height={80}/>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  {item.submenu ? (
                    <button className="py-2 font-medium text-sm text-white">
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="py-2 font-medium text-sm text-white"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-md p-2 text-white"
            >
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
      </nav>
    );
  }

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 group bg-white`}>
      <div className="px-3">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className={`font-bold text-2xl transition-colors ${
            !isHomePage ? 'text-[#607AD4]' : 'text-[#607AD4] group-hover:text-[#607AD4]'
          }`}>
          <Image src="/logo.jpg" alt="Voices of Equity" width={80} height={80}/>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative -left-11">
            {menuItems.map((item) => (
              <div key={item.title} className="h-20 flex items-center">
                {item.submenu ? (
                  <div className="relative group/item h-full flex items-center">
                    <button className={`h-full px-2 font-medium text-sm transition-colors ${
                      !isHomePage ? 'text-[#607AD4]' : 'text-[#607AD4] group-hover:text-[#607AD4]'
                    }`}>
                      {item.title}
                    </button>
                    <div className="absolute left-0 w-48 bg-white rounded-none shadow-lg opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 top-full">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#607AD4] hover:text-[#E4826D]"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href!}
                    className={`h-full px-2 flex items-center font-medium text-sm transition-colors ${
                      isScrolled || !isHomePage ? 'text-[#607AD4]' : 'text-[#607AD4] group-hover:text-[#607AD4]'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden rounded-md p-2 transition-colors ${
              isScrolled || !isHomePage ? 'text-[#607AD4]' : 'text-white group-hover:text-[#607AD4]'
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <div className="font-medium text-gray-700 px-3 py-2">
                      {item.title}
                    </div>
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-md"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar; 