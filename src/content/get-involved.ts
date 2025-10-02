import type { Chapter, Requirement } from './types'

// GET INVOLVED PAGES
export const getInvolvedPage = {
  chapters: {
    title: "Our Chapters",
    subtitle: "Join a community near you",
    content: `Integral to the mission of Voices of Equity is education and outreach. 
    Through our chapters across undergraduate institutions we empower students to gain 
    hands-on experience in the fight against health disparities. All of our chapters are 
    led by undergraduates and managed by the Voices of Equity National Chapter Leader. 
    Chapters are dedicated to on the ground work, combating health disparities through 
    educational, philanthropic, and outreach efforts.`,
    benefits: [
      {
        title: 'Resources & Support',
        description: 'Access our comprehensive resource library, receive mentorship from experienced leaders, and get support for event planning and community outreach initiatives.',
        icon: '📚'
      },
      {
        title: 'National Recognition',
        description: 'Join a network of recognized changemakers, get featured in our national publications, and receive opportunities to present at conferences and symposiums.',
        icon: '🏆'
      },
      {
        title: 'Leadership Development',
        description: 'Develop crucial leadership skills through structured training programs, workshops, and hands-on experience managing impactful community projects.',
        icon: '⭐'
      }
    ],
    // Stats commented out until real data
    // stats: [
    //   { label: 'Active Members', value: '45+' },
    //   { label: 'Events Hosted', value: '12' },
    //   { label: 'Community Partners', value: '8' },
    //   { label: 'Research Projects', value: '3' }
    // ],
    cta: {
      title: "Ready to Make an Impact?",
      description: "Start a chapter at your institution or join an existing one to be part of the change.",
      primaryButton: {
        text: "Start a Chapter",
        href: "/get-involved/start"
      },
      secondaryButton: {
        text: "View Requirements",
        href: "/get-involved/requirements"
      }
    },
    activeChapters: [
      {
        name: "Cornell University",
        location: "Ithaca, NY",
        established: "Est. 2024",
        members: 25,
        image: "/chapters/cornell.jpg",
        achievements: [
          "Launched student mentorship program",
          "Hosted Health Equity Symposium",
          "Published research on healthcare accessibility"
        ],
        leadership: {
          president: "Jimmy Quinlan",
          vicePresident: "Coming Soon",
          contact: "cornell@voicesofequity.org"
        },
        featured: true,
        slug: "cornell",
        stats: [
          { label: 'Active Members', value: '25+' },
          { label: 'Community Partners', value: '5' },
          { label: 'Research Projects', value: '3' }
        ],
        link: "/cornell"
      },
      {
        name: "Amherst College",
        location: "Amherst, MA",
        established: "Est. 2025",
        image: "/icons/chapters/amherst.png",
        slug: "amherst"
      },
      {
        name: "Washington University in St. Louis",
        location: "St. Louis, MO",
        established: "Est. 2025",
        image: "/icons/chapters/washu.png",
        slug: "washu"
      },
      {
        name: "University of Arkansas",
        location: "Fayetteville, AR",
        established: "Est. 2025",
        image: "/icons/chapters/arkansas.png",
        slug: "arkansas"
      },
      {
        name: "University of South Carolina",
        location: "Columbia, SC",
        established: "Est. 2025",
        image: "/icons/chapters/south-carolina.png",
        slug: "south-carolina"
      },
      {
        name: "Vassar College",
        location: "Poughkeepsie, NY",
        established: "Est. 2025",
        image: "/icons/chapters/vassar.png",
        slug: "vassar"
      },
      {
        name: "University of San Diego",
        location: "San Diego, CA",
        established: "Est. 2025",
        image: "/icons/chapters/san-diego.png",
        slug: "san-diego"
      },
      {
        name: "Binghamton University",
        location: "Binghamton, NY",
        established: "Est. 2025",
        image: "/icons/chapters/binghamton.png",
        slug: "binghamton"
      },
      {
        name: "Brown University",
        location: "Providence, RI",
        established: "Est. 2025",
        image: "/icons/chapters/brown.png",
        slug: "brown"
      }
    ] satisfies Chapter[]
  },
  requirements: {
    title: "Chapter Requirements",
    subtitle: "What it takes to start a chapter",
    requirements: [
      {
        title: "General Body Meetings",
        description: `All Voices of Equity Chapters must hold bi-weekly
         general body meetings. These meetings will consist of three 
         major parts. Firstly, the chapter's Director of Education 
         will present a slideshow prepared by the Voices of Equity National
          Chapter on the most pertinent topics in health equity. Next, the 
          chapter will directly engage with the content, through discussions,
           debates, and solutions. Finally, committees within the chapter will 
           gather and work on their respective events for the semester.`
      },
      {
        title: "Events",
        description: `Each chapter must host a minimum of 3 events per semester: a philanthropic event, 
        an educational event, and an outreach event. Within the chapter, members are divided into committees
        , with each committee tasked wit the execution of a major event by the end of the semester.`
      },
      {
        title: "The Executive Board",
        description: `Every Voices of Equity Chapter is led by an executive board. The executive board must 
        fulfill the following positions: President, Director of Philanthropy, Director of Education, 
        Director of Outreach, and Media Director. Executive board members are responsible for leading committees, 
        scheduling general body meetings and events, and directly communicating with the National Chapter leadership.`
      }
    ] satisfies Requirement[],
    bottomNote: {
      title: 'Chapter By-Laws',
      description: `For a detailed description of all chapter requirements and logistics, 
        refer to the Chapter By-Laws document below`
    }
  },
  start: {
    title: "Start a Chapter",
    subtitle: "Lead the change in your community",
    content: "Coming Soon"
  },
  support: {
    title: "Support Our Mission",
    subtitle: "Help us build a more equitable future",
    content: "Coming Soon"
  }
}