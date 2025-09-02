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
          title: "Social Determinants of Health Explained - The Hidden Forces Shaping Your Health",
          description: "The social determinants of health—economic stability, education, neighborhood environment, healthcare access, and social support—shape our well-being long before we ever set foot in a doctor's office. In this video, we break down how these factors impact health outcomes and why addressing them is crucial for achieving health equity."
        },
        {
          videoId: "sHLq3ECOB4Q",
          title: "Food Deserts: The Silent Crisis Driving Health Inequity",
          description: "Millions of Americans live in food deserts—neighborhoods where grocery stores are scarce, and healthy food is hard to find. Without access to fresh fruits and vegetables, communities face higher rates of obesity, diabetes, and heart disease. In this video, we explore how food deserts fuel health inequities and what can be done to ensure everyone has access to the nutrition they need to thrive."
        },
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
    subtitle: "Comprehensive collection of health equity resources",
    featured: {
      id: "featured-1",
      title: "Coming Soon - Featured Content",
      description: "Featured articles, videos, and resources will be highlighted here.",
      type: "article" as const,
      date: "2025-01-01",
      tags: ["featured"],
      featured: true
    },
    items: [
      {
        id: "video-1",
        title: "Understanding Health Equity",
        description: "An introduction to health equity and why it matters in today's healthcare landscape.",
        type: "video" as const,
        date: "2024-01-01",
        tags: ["education", "introduction", "healthcare"],
        url: "https://www.youtube.com/watch?v=PJEX8nYyXBU",
        videoId: "PJEX8nYyXBU"
      },
      {
        id: "video-2",
        title: "Social Determinants of Health Explained - The Hidden Forces Shaping Your Health", 
        description: "The social determinants of health—economic stability, education, neighborhood environment, healthcare access, and social support—shape our well-being long before we ever set foot in a doctor's office. In this video, we break down how these factors impact health outcomes and why addressing them is crucial for achieving health equity.",
        type: "video" as const,
        date: "2024-02-01",
        tags: ["social determinants", "education", "healthcare"],
        url: "https://www.youtube.com/watch?v=Mfc-dMTQHbQ",
        videoId: "Mfc-dMTQHbQ"
      },
      {
        id: "article-1",
        title: "Addressing Health Equity and Social Determinants of Health Through Healthy People 2030",
        description: "The evolution of Healthy People reflects growing awareness of health inequities over the life course. Each decade, the initiative has gained understanding of how the nation can achieve health and well-being.",
        type: "article" as const,
        date: "2021-11-01",
        author: "Gómez, Cynthia A. PhD; Kleinman, Dushanka V. DDS, MScD; Pronk, Nico PhD, MA, FASCM, FAWHP; et al.",
        tags: ["research", "healthy people 2030", "policy"],
        url: "https://journals.lww.com/jphmp/fulltext/2021/11001/addressing_health_equity_and_social_determinants.9.aspx"
      },
      {
        id: "article-2",
        title: "Defining Health Equity",
        description: "The term 'health equity' has become widely used in health and health care arenas over the past few years.",
        type: "article" as const,
        date: "2022-01-01",
        author: "Paula Braveman",
        tags: ["research", "definition", "healthcare policy"],
        url: "https://www.sciencedirect.com/science/article/pii/S0027968422001432"
      },
      {
        id: "placeholder-1",
        title: "Educational Modules - Coming Soon",
        description: "Interactive educational content on health equity topics",
        type: "module" as const,
        date: "2025-01-01",
        tags: ["education", "module"]
      },
      {
        id: "placeholder-2", 
        title: "Patient Interviews - Coming Soon",
        description: "Personal stories and experiences from patients navigating healthcare inequities",
        type: "interview" as const,
        date: "2025-01-01",
        tags: ["interview", "patient stories"]
      },
      {
        id: "placeholder-3",
        title: "Onboarding Training Materials - Coming Soon", 
        description: "Resources for chapter leaders and new members",
        type: "training" as const,
        date: "2025-01-01",
        tags: ["training", "leadership"]
      },
      {
        id: "placeholder-4",
        title: "Op-Ed Articles - Coming Soon",
        description: "Opinion pieces and editorial content on health equity issues",
        type: "op-ed" as const,
        date: "2025-01-01",
        tags: ["opinion", "editorial"]
      }
    ]
  }
}