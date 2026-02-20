// WHAT WE DO PAGES
import type { ChapterReflection } from './types'

export const whatWeDoPage = {
  impact: {
    title: "Our Impact",
    subtitle: "Stories of change and transformation in our communities",
    nationalStats: [
      { label: "$2k+ raised", icon: "✓" },
      { label: "$1000+ in VoE Grant funding distributed", icon: "✓" },
      { label: "30+ University campuses engaged across North America", icon: "✓" },
      { label: "200+ members involved", icon: "✓" },
      { label: "1000+ students reached through educational programing", icon: "✓" }
    ],
    chapterReflections: [
      {
        chapterName: "Ithaca College",
        president: {
          name: "Aya Oulida",
          title: "Chapter President",
          headshot: "/ithacacollege/ayaoulida_headshot.jpg"
        },
        quote: "I learned that even a small impact can go a long way. What began as a small medical community at IC ultimately came together to be part of something much bigger. I truly enjoyed working alongside people who were eager to learn more. The collaborative process itself was rewarding, and the encouragement and support from the professor played a significant role in motivating our work. Looking ahead, we hope to collaborate with the Binghamton and Cornell chapters to furthering improve the medical experience for local communities at Guthrie and Cayuga Medical Center- whether through increased transportation access or by empowering patients with a better understanding of what they deserve when receiving medical care.",
        images: ["/ithacacollege/IC_promo.PNG"],
        semester: "Fall 2025",
        featured: true
      },
      {
        chapterName: "UT Austin",
        president: {
          name: "Tracy Vuong",
          title: "Chapter President"
        },
        quote: "This semester, Texas Voices of Equity found Health Equity Week, specifically the fundraiser, to be our most meaningful and successful experience. As a new organization, recruiting and retaining members was one of our greatest struggles. However, with the fundraiser came an opportunity to discuss our chapter's goals and the national initiative to our peers. Most importantly, our team had fun, and we were able to spread joy on campus within the early hours of the day through our matcha, coffee, donuts, and cartwheel performances.",
        images: [
          "/utaustin/78507850279__CAD9A087-2246-4F31-A93A-B6C8C06C8FA5.jpg",
          "/utaustin/IMG_7033.jpg",
          "/utaustin/IMG_7040.jpg",
          "/utaustin/IMG_7041.jpg",
          "/utaustin/IMG_7045.jpg",
          "/utaustin/IMG_7047.jpg",
          "/utaustin/IMG_7048.jpg"
        ],
        semester: "Fall 2025",
        featured: true
      },
      {
        chapterName: "UConn",
        president: {
          name: "Chiamaka Okafor",
          title: "Chapter President"
        },
        quote: "I think overall having this opportunity to open a chapter was very meaningful. I was always very hesitant about starting my own org and I found VOE as a helpful guiding hand in starting one. I really enjoyed working with my eboard and value all of their unique experiences. I also valued learning about the founding chapters meaning and passion behind this organization that pushed them to allow others to make an impact as well.",
        images: [],
        semester: "Fall 2025",
        featured: false
      }
    ] satisfies ChapterReflection[],
    spotlights: [
      { name: "Purdue University", image: "/icons/chapters/Purdue University - West Lafayette.png" },
      { name: "University of Arkansas", image: "/icons/chapters/arkansas.png" },
      { name: "Cornell University", image: "/cornell-chapter.jpg" },
      { name: "Carnegie Mellon", image: "/media/10.jpeg" },
      { name: "University of Illinois", image: "/media/13.jpeg" },
      { name: "Amherst College", image: "/media/11.jpeg" },
    ],
    content: [
      {
        title: "G-body Meetings",
        description: "At General Body Meetings, leaders from our Education, Outreach, Philanthropy, and Media committees share updates, reflect on progress, and set collective goals for upcoming projects. These meetings create spaces for learning and dialogue across chapters, fostering the connections and collaborative spirit that drive Voices of Equity’s commitment to building healthier, more equitable communities.",
        images: [
          { src: "/media/1.jpg", alt: "General Body Meeting" },
          { src: "/media/2.jpeg", alt: "General Body Meeting Discussion" }
        ]
      },
      {
        title: "Education",
        description: "As one of our main pillars, education is a continuous effort at Voices of Equity. Our leaders strive to deepen their understanding of health equity while engaging with peers who bring diverse backgrounds, interests, and career paths.",
        images: [
          { src: "/media/3.jpg", alt: "Education Session" },
          { src: "/media/4.jpeg", alt: "Group Learning" }
        ]
      },
      {
        title: "Interactive Activities",
        description: "Our Education directors create health equity themed modules and activities like this Social Determinants of Health crossword to inspire teamwork and deepen our understanding of the factors that shape health outcomes.",
        images: [
          { src: "/media/5.jpg", alt: "Interactive Activity - Crossword" }
        ]
      },
      {
        title: "Fundraising",
        description: "At our “Pie the E-Board” fundraiser, members came together in a fun and collaborative effort to support community organizations while educating students on campus on important topics in health equity.",
        images: [
          { src: "/media/6.JPG", alt: "Pie the E-Board Fundraiser" }
        ]
      },
      {
        title: "Engagement",
        description: "Small-group discussions give students the space to reflect, ask questions, and learn from peers. By engaging directly with one another, members share stories and experiences which broaden their perspectives and inspire individuals to enact change.",
        images: [
          { src: "/media/7.jpeg", alt: "Small Group Discussion" },
          { src: "/media/8.JPG", alt: "Student Engagement" },
          { src: "/media/9.JPG", alt: "Peer Learning" }
        ]
      },
      {
        title: "Tabling",
        description: "Tabling events organized by our students raise awareness towards health equity and open up the conversation to anybody interested in or affected by such issues. These moments of outreach help create accessible entry points for learning, engagement, and community connection.",
        images: [
          { src: "/media/10.jpeg", alt: "Tabling at CMU", caption: "Carnegie Mellon University" },
          { src: "/media/11.jpeg", alt: "Tabling at Amherst", caption: "Amherst College" },
          { src: "/media/12.png", alt: "Tabling at Binghamton", caption: "Binghamton University" }
        ]
      },
      {
        title: "National Health Equity Week",
        description: "For our 2025 National Health Equity Week, student leaders hosted creative donut and matcha fundraisers in collaboration with our partner organizations, Young People in Recovery and The Phoenix Recovery. All proceeds went to support community-based programs that expand access to recovery resources and promote equitable pathways to healing for individuals affected by substance use disorders.",
        images: [
          { src: "/media/13.jpeg", alt: "Health Equity Week at Illinois", caption: "University of Illinois" },
          { src: "/media/14.JPG", alt: "Fundraiser at CMU", caption: "Carnegie Mellon University" },
          { src: "/media/15.jpeg", alt: "Event at CMU", caption: "Carnegie Mellon University" },
          { src: "/media/16.jpeg", alt: "Health Equity Week Activity" }
        ]
      },
      {
        title: "Empowerment",
        description: "Our student leaders are dedicated to creating welcoming spaces where peers feel empowered to learn, connect, and take action toward health equity. Stop by a Voices of Equity table on your campus to explore how you can get involved!",
        images: [
          { src: "/media/17.png", alt: "Student Empowerment" },
          { src: "/media/18.jpg", alt: "Community Connection" }
        ]
      },
      {
        title: "Our Voices",
        description: "Each of our leaders brings a unique motivation shaped by experiences within their own communities, driving their dedication to advancing health equity. Their commitment to service, learning, and advocacy reflects a shared belief that meaningful change begins with individuals willing to lead with purpose.",
        images: [
          { src: "/media/19.jpeg", alt: "Leader Spotlight" },
          { src: "/media/20.jpeg", alt: "Voices of Equity Leaders" }
        ]
      }
    ]
  },
  national: {
    title: "National Initiatives",
    subtitle: "Advancing health equity across communities",
    poster: {
      src: "/health-equity-week-2025-poster.jpg",
      alt: "National Health Equity Week 2025 - Addiction in Health Equity"
    },
    intro: "Voices of Equity unites our chapters under a national initiative to spotlight a prevalent issue in health equity. For Fall 2025, our focus is on health equity through the lens of addiction.",
    content: [
      {
        type: "paragraph",
        text: "Addiction is not only a medical condition, but also a deeply rooted equity issue. Substance use and abuse is shaped by disparities in access to care, stigma, systemic bias, and socioeconomic barriers. Systemic and institutional effects shape differences in education regarding substance use, physical access to successful treatments, financial support for rehabilitation services, and more. Understanding these unique effects and differences is essential to comprehending the occurrence and prevalence of addiction, and how to help those who need it. Through this initiative, we aim to educate, advocate, and take action to support individuals and communities impacted by addiction."
      },
      {
        type: "paragraph",
        text: "As part of this initiative, all chapters will participate in Health Equity Week (October 20–26, 2025), a coordinated effort across more than 40 universities. This week will include:"
      },
      {
        type: "list",
        items: [
          "Fundraising efforts to support national and local partners advancing equity in addiction care.",
          "Advocacy campaigns that raise awareness and push for systemic change.",
          "Educational modules to ground members in the science, policies, and lived realities of addiction.",
          "Panels and guest speakers featuring professionals, advocates, and those with lived experience who inspire us to take meaningful action."
        ]
      }
    ],
    speakerPoster: {
      src: "/ryan-leaf-speaker-event.jpg",
      alt: "Ryan Leaf Virtual Guest Speaker Event - October 21, 2025"
    },
    partners: {
      title: "2025 National Initiative Partners",
      organizations: [
        {
          name: "Young People in Recovery",
          logo: "/ypr-logo.png",
          description: "",
          handout: "/ypr-handout.png"
        },
        {
          name: "The Phoenix",
          logo: "/thephoenixlogo.png",
          description: "",
          handout: "/phoenixhandout.pdf"
        }
      ]
    }
  },
  local: {
    title: "Local Initiatives",
    subtitle: "Community-based programs creating meaningful impact",
    content: "Coming Soon"
  },
  // News section commented out until content is ready
  // news: {
  //   title: "Voices & Impact",
  //   subtitle: "Updates from our community",
  //   content: "Coming Soon"
  // }
}
