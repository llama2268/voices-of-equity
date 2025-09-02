// Home page content only
import type { Initiative } from './types'

// HOME PAGE
export const homePage = {
  hero: {
    title: "Building a More Equitable Future, One Voice at a Time",
    description: "Voices of Equity is a nationwide movement empowering students, healthcare professionals, and community leaders to raise awareness, take action, and drive meaningful change in the fight for health equity",
    ctaButtons: [
      {
        text: 'Join Our Movement',
        href: '/get-involved/chapters',
        primary: true
      },
      {
        text: 'Learn More',
        href: '/who-we-are/mission',
        primary: false
      }
    ]
  },
  mission: {
    quote: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives"
  },
  initiatives: [
    {
      title: "Educate Communities",
      description: "We equip communities with accessible, relevant education on the root causes of health inequities — from systemic barriers to local challenges — through online content, our VoE curriculum, and interactive discussions.",
      icon: "🎓",
      image: "/educate.jpg"
    },
    {
      title: "Inspire Action",
      description: "We motivate individuals — from student leaders to future healthcare professionals — to take meaningful steps toward equity. Through storytelling, collaboration, and leadership development, we turn awareness into collective action.",
      icon: "💡",
      image: "/inspire.jpg"
    },
    {
      title: "Empower Impact",
      description: "We implement student-led, community-based initiatives tailored to the needs of underserved populations, in partnership with healthcare professionals and local organizations across the country.",
      icon: "📢",
      image: "/empower.jpg"
    }
  ] satisfies Initiative[],
  // Stats section commented out until real data is available
  // stats: [
  //   {
  //     value: "50+",
  //     label: "Chapters Nationwide",
  //     description: "Active communities making a difference"
  //   },
  //   {
  //     value: "10,000+",
  //     label: "Members",
  //     description: "Dedicated advocates for change"
  //   },
  //   {
  //     value: "200+",
  //     label: "Events Hosted",
  //     description: "Bringing communities together"
  //   },
  //   {
  //     value: "$2M+",
  //     label: "Funds Raised",
  //     description: "Supporting equity initiatives"
  //   }
  // ] satisfies Stat[]
}