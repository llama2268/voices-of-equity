import type { Video, ResearchPaper, ArchiveItem } from './types'

// RESOURCES PAGES
export const resourcesPage = {
  main: {
    title: "Our Resources",
    subtitle: "Educational materials and research on health equity",
    sections: {
      videos: {
        eyebrow: "Educational Content",
        heading: "Learn Through Stories",
        description: "Explore our curated collection of videos highlighting key issues and solutions in health equity"
      },
      research: {
        eyebrow: "Academic Research",
        heading: "Evidence-Based Insights",
        description: "Discover peer-reviewed research and analysis on health equity challenges and solutions"
      },
      guides: {
        eyebrow: "Practical Tools",
        heading: "Implementation Guides",
        description: "Step-by-step resources to help you make a difference in your community"
      }
    },
    quote: {
      text: "Knowledge is the first step toward change. These resources are your gateway to understanding and action.",
      author: "Voices of Equity"
    },
    content: {
      videos: [
        {
          videoId: "PJEX8nYyXBU",
          title: "Understanding Health Equity",
          description: "An introduction to health equity and why it matters in today's healthcare landscape."
        },
        {
          videoId: "Mfc-dMTQHbQ",
          title: "Social Determinants of Health Explained",
          description: "The social determinants of health—economic stability, education, neighborhood environment, and more—shape our well-being."
        },
        {
          videoId: "Ohyu3BhhqqA",
          title: "The Science and Stigma Behind Addiction",
          description: "Explore the biological mechanisms of addiction and the social stigmas that prevent effective treatment and recovery."
        },
        {
          videoId: "_OO9w5bXJIU",
          title: "Addiction & Health Equity",
          description: "Why understanding the root causes of addiction is essential for achieving health equity."
        }
      ] satisfies Video[],
      researchPapers: [
        {
          title: "Social Determinant of Health and Health Equity",
          authors: "National Academies of Sciences, Engineering, and Medicine; National Academy of Medicine; Committee on the Future of Nursing 2020–2030; Flaubert JL, Le Menestrel S, Williams DR, et al., editors. ",
          year: "2023",
          description: "As a nurse, we have the opportunity to heal the heart, mind, soul and body of our patients, their families and ourselves.",
          link: "https://www.ncbi.nlm.nih.gov/books/NBK573923/"
        },
        {
          title: "Defining Health Equity: A Modern US Perspective",
          authors: "Kristen R Prentice, Marie Beitelshees, Andrew Hill, Charles H Jones,∗",
          year: "2024",
          description: "Health equity is a concept that has gained increasing attention and relevance in the context of the COVID-19 pandemic, which has exposed and exacerbated the health disparities and inequities among different population groups in the United States. ",
          link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11617406/"
        },
        {
          title: "Barriers to Health Equity in the United States of America: Can They Be Overcome?",
          authors: "Allen M. Chen",
          year: "2025",
          description: " In 1948, the inaugural Constitution of the newly founded World Health Organization clearly stated that \"the enjoyment of the highest attainable standard of health is one of the fundamental rights of every human being without distinction of race, religion, political belief, economic or social condition.\" Yet nearly a century later, it is arguable how much progress society has made in achieving health equity",
          link: "https://equityhealthj.biomedcentral.com/articles/10.1186/s12939-025-02401-w"
        },
        {
          title: "Addressing Health Equity and Social Determinants of Health Through Healthy People 2030",
          authors: "Gómez, Cynthia A. PhD; Kleinman, Dushanka V. DDS, MScD; Pronk, Nico PhD, MA, FASCM, FAWHP; Wrenn Gordon, Glenda L. MD, MSHP, FAPA; Ochiai, Emmeline MPH; Blakey, Carter BS; Johnson, Ayanna MSPH; Brewer, Karen H. MPH Academies of Sciences, Engineering, and Medicine; National Academy of Medicine; Committee on the Future of Nursing 2020–2030; Flaubert JL, Le Menestrel S, Williams DR, et al., editors. ",
          year: "2021",
          description: "The evolution of Healthy People reflects growing awareness of health inequities over the life course. Each decade, the initiative has gained understanding of how the nation can achieve health and well-being. ",
          link: "https://journals.lww.com/jphmp/fulltext/2021/11001/addressing_health_equity_and_social_determinants.9.aspx"
        },
        {
          title: "Defining Health Equity",
          authors: "Paula Braveman",
          year: "2022",
          description: "The term 'health equity' has become widely used in health and health care arenas over the past few years.",
          link: "https://www.sciencedirect.com/science/article/pii/S0027968422001432"
        }
      ] satisfies ResearchPaper[],
      // Guides commented out until real content
      // guides: [
      //   {
      //     title: "Chapter Leadership Guide",
      //     description: "Complete guide for running a successful VoE chapter.",
      //     icon: "📚",
      //     link: "/guides/chapter-leadership.pdf"
      //   },
      //   {
      //     title: "Health Equity Advocacy Toolkit",
      //     description: "Resources and strategies for effective advocacy.",
      //     icon: "🔧",
      //     link: "/guides/advocacy-toolkit.pdf"
      //   }
      // ] satisfies Guide[]
    }
  },
  archive: {
    title: "Equity Archive",
    subtitle: "A living library of stories, research, and resources advancing health equity.\n\nThe Equity Archive is Voices of Equity’s national hub for powerful storytelling, student-led initiatives, and accessible tools to understand and fight health disparities.\n\nExplore firsthand narratives, community case studies, health equity explainers, and multimedia content—all curated to educate, inspire, and drive change.",
    banner: "/equitybanner.png",
    items: [
      {
        id: "module-1",
        title: "General Body Meeting 1: Understanding Health Equity",
        description: "Educational module from our first general body meeting covering the fundamentals of health equity",
        type: "module" as const,
        date: "2025-10-02",
        tags: ["education", "module", "general body"],
        url: "/resources/GBody 1 - Understanding Health Equity.pdf"
      },
      {
        id: "module-2",
        title: "General Body Meeting 2: Stigmas",
        description: "Educational module from our second general body meeting on stigmas in healthcare and health equity",
        type: "module" as const,
        date: "2025-10-09",
        tags: ["education", "module", "stigma", "general body"],
        url: "/resources/GBody 2 - Stigmas.pdf"
      },
      {
        id: "module-3",
        title: "General Body Meeting 3: Socioeconomic Status",
        description: "Educational module exploring the impact of socioeconomic status on health outcomes.",
        type: "module" as const,
        date: "2025-10-16",
        tags: ["education", "module", "Socioeconomic Status"],
        url: "/resources/GBody 3 - Socioeconomic Status.pdf"
      },
      {
        id: "module-4",
        title: "General Body Meeting 4: Location",
        description: "Analyzing how geographic location and built environments influence community health.",
        type: "module" as const,
        date: "2025-10-23",
        tags: ["education", "module", "Location", "Social Determinants"],
        url: "/resources/GBody 4 - Location.pdf"
      },
      {
        id: "video-addiction-science",
        title: "The Science and Stigma Behind Addiction | Voices of Equity",
        description: "Explore the biological mechanisms of addiction and the social stigmas that prevent effective treatment and recovery.",
        type: "video" as const,
        date: "2025-11-01",
        tags: ["addiction", "stigma", "science"],
        url: "https://www.youtube.com/watch?v=Ohyu3BhhqqA",
        videoId: "Ohyu3BhhqqA"
      },
      {
        id: "video-addiction-equity",
        title: "Addiction & Health Equity – Why Recovery Starts with Understanding",
        description: "Why understanding the root causes of addiction is essential for achieving health equity.",
        type: "video" as const,
        date: "2025-11-05",
        tags: ["addiction", "health equity", "recovery"],
        url: "https://www.youtube.com/watch?v=_OO9w5bXJIU",
        videoId: "_OO9w5bXJIU"
      },
      {
        id: "keynote-ryan-leaf",
        title: "Keynote Speaker: Ryan Leaf - Addiction and Recovery",
        description: "National Health Equity Week 2025 Keynote addressing addiction, mental health, and the journey to recovery.",
        type: "video" as const,
        date: "2025-10-01",
        tags: ["keynote", "addiction", "recovery", "Ryan Leaf"],
        // Placeholder for file/video link if hosted on YouTube, otherwise generic link
        url: "https://drive.google.com/file/d/1VJRe2yQHI8pql4rekjaf3SbSsfKeTyVm/view?usp=drive_link"
      },
      {
        id: "panel-addiction",
        title: "National Health Equity Week 2025: Addiction and Health Equity Speaker Panel",
        description: "Expert panel discussion on the intersection of addiction and health equity.",
        type: "video" as const,
        date: "2025-10-02",
        tags: ["panel", "addiction", "health equity"],
        url: "#" // Placeholder until link is confirmed
      }
    ]
  }
}