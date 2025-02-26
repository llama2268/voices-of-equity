// Chapter related content
export const chapters = {
  requirements: {
    title: "Chapter Requirements",
    subtitle: "Building Strong Foundations",
    description: "What it takes to start and maintain a Voices of Equity chapter",
    sections: [
      {
        title: "Core Requirements",
        items: [
          "Minimum of 10 active members",
          "Faculty or staff advisor",
          "Regular meetings (at least bi-weekly)",
          "Commitment to health equity initiatives",
          "Annual impact report submission"
        ]
      },
      {
        title: "Program Requirements",
        items: [
          "Host at least 2 community events per semester",
          "Participate in national initiatives",
          "Maintain active social media presence",
          "Collaborate with local healthcare organizations",
          "Document and share impact stories"
        ]
      },
      {
        title: "Leadership Structure",
        items: [
          "Executive board with defined roles",
          "Democratic election process",
          "Succession planning",
          "Regular leadership training",
          "Clear communication channels"
        ]
      }
    ],
    process: {
      title: "Application Process",
      steps: [
        {
          number: 1,
          title: "Initial Consultation",
          description: "Schedule a call with our chapter development team"
        },
        {
          number: 2,
          title: "Proposal Submission",
          description: "Submit detailed chapter plan and leadership structure"
        },
        {
          number: 3,
          title: "Review Period",
          description: "2-3 week review by national board"
        },
        {
          number: 4,
          title: "Approval & Setup",
          description: "Receive resources and begin chapter establishment"
        }
      ]
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
        president: "Caleb T. Suh",
        vicePresident: "Zaid Al-Shoha",
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
    }
  ]
};

export const chaptersContent = {
  page: {
    title: "Our Chapters",
    subtitle: "Join a community of changemakers across the nation",
    introduction: "Starting a Voices of Equity chapter is more than just founding a student organization—it's about creating lasting change in your community while developing leadership skills."
  },
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
  stats: [
    { label: 'Active Members', value: '45+' },
    { label: 'Events Hosted', value: '12' },
    { label: 'Community Partners', value: '8' },
    { label: 'Research Projects', value: '3' }
  ],
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
  }
}; 