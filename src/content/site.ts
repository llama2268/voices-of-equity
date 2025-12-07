// Site configuration and navigation structure
import type { NavItem } from './types'

export const siteConfig = {
  name: 'Voices of Equity',
  description: 'Empowering voices for a more equitable future',
  url: 'https://voicesofequity.org',
  links: {
    apply: '/get-involved/chapters',
    contact: 'mailto:contact@voicesofequity.org',
    social: {
      instagram: 'https://www.instagram.com/voices.of.equity/',
      linkedin: 'https://linkedin.com/company/voices-of-equity',
    }
  }
}

export const navigation: { mainNav: NavItem[]; footerNav: Record<string, Array<{ title: string; href: string }>> } = {
  mainNav: [
    {
      title: 'WHO WE ARE',
      submenu: [
        { title: 'Our Mission', href: '/who-we-are/mission' },
        { title: 'Our History', href: '/who-we-are/history' },
        { title: 'Our Team', href: '/who-we-are/team' },
      ],
    },
    {
      title: 'WHAT WE DO',
      submenu: [
        { title: 'National Initiatives', href: '/what-we-do/national' },
        { title: 'Our Impact', href: '/what-we-do/impact' },
      ],
    },
    {
      title: 'RESOURCES',
      submenu: [
        { title: 'Our Resources', href: '/resources' },
        { title: 'Equity Archive', href: '/resources/archive' },
      ],
    },
    {
      title: 'GET INVOLVED',
      submenu: [
        { title: 'Our Chapters', href: '/get-involved/chapters' },
        { title: 'Contact Us', href: '/contact' }
      ],
    },
  ],
  footerNav: {
    about: [
      { title: 'Mission', href: '/who-we-are/mission' },
      { title: 'Team', href: '/who-we-are/team' },
      { title: 'History', href: '/who-we-are/history' }
    ],
    resources: [
      { title: 'Educational Content', href: '/resources' },
      { title: 'Equity Archive', href: '/resources/archive' }
    ],
    getInvolved: [
      { title: 'Requirements', href: '/get-involved/requirements' },
      { title: 'Apply', href: '/get-involved/chapters' }
    ]
  }
}

export const footer = {
  tagline: "Building a more equitable future together",
  newsletter: {
    title: "Stay Updated",
    description: "Join our newsletter to receive updates about our work and impact.",
    buttonText: "Subscribe"
  },
  bottomText: "© 2024 Voices of Equity. All rights reserved."
}