export const siteConfig = {
  name: 'Voices of Equity',
  description: 'Empowering voices for a more equitable future',
  links: {
    apply: '/get-involved/chapters',
    contact: 'mailto:contact@voicesofequity.org',
    social: {
      instagram: 'https://instagram.com/voicesofequity',
      linkedin: 'https://linkedin.com/company/voices-of-equity',
    }
  }
};
//testing push
export const navigation = {
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
        { title: 'Voices & Impact', href: '/what-we-do/news' },
        { title: 'Our Resources', href: '/what-we-do/resources' },
      ],
    },
    {
      title: 'GET INVOLVED',
      submenu: [
        { title: 'Our Chapters', href: '/get-involved/chapters' },
        { title: 'Chapter Requirements', href: '/get-involved/requirements' },
        { title: 'Start a Chapter', href: '/get-involved/start' },
      ],
    },
    {
      title: 'THE CORNELL CHAPTER',
      href: '/cornell',
    },
  ],
  footerNav: {
    about: [
      { title: 'Mission', href: '/who-we-are/mission' },
      { title: 'Team', href: '/who-we-are/team' },
      { title: 'History', href: '/who-we-are/history' }
    ],
    resources: [
      { title: 'Educational Content', href: '/what-we-do/resources' },
      { title: 'Research', href: '/what-we-do/research' },
      { title: 'Impact Reports', href: '/what-we-do/impact' }
    ],
    getInvolved: [
      { title: 'Start a Chapter', href: '/get-involved/start' },
      { title: 'Requirements', href: '/get-involved/requirements' },
      { title: 'Apply', href: '/get-involved/apply' }
    ],
    legal: [
      { title: 'Privacy Policy', href: '/legal/privacy' },
      { title: 'Terms of Service', href: '/legal/terms' }
    ]
  }
};

export const homePage = {
  hero: {
    title: "Amplifying Voices for Change",
    subtitle: "Building a more equitable future, one voice at a time",
    description: "We're a non-profit organization dedicated to promoting equity and inclusion through education, advocacy, and community engagement.",
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
  stats: [
    {
      value: "50+",
      label: "Chapters Nationwide",
      description: "Active communities making a difference"
    },
    {
      value: "10,000+",
      label: "Members",
      description: "Dedicated advocates for change"
    },
    {
      value: "200+",
      label: "Events Hosted",
      description: "Bringing communities together"
    },
    {
      value: "$2M+",
      label: "Funds Raised",
      description: "Supporting equity initiatives"
    }
  ],
  initiatives: [
    {
      title: "Education Access",
      description: "Breaking down barriers to quality education through mentorship and resources.",
      icon: "🎓"
    },
    {
      title: "Community Outreach",
      description: "Building stronger communities through local engagement and support programs.",
      icon: "🤝"
    },
    {
      title: "Advocacy",
      description: "Amplifying voices and driving policy changes for a more equitable society.",
      icon: "📢"
    }
  ],
  mission: {
    quote: "We believe in creating a world where every voice is heard, every story matters, and every individual has the opportunity to thrive."
  }
};

export const whoWeAre = {
  mission: {
    title: "Our Mission",
    subtitle: "Building a more equitable future in healthcare",
    content: {
      introduction: {
        mainHeading: "VOICES OF EQUITY IS AT THE FOREFRONT OF ADVANCING HEALTH EQUITY",
        text: "We are a nationwide organization committed to addressing systemic health disparities through education, advocacy, and community engagement. Through our growing network of empowered students, healthcare professionals, and community leaders, we create opportunities for meaningful change in healthcare accessibility and outcomes."
      },
      mission: {
        heading: "OUR MISSION",
        text: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives.",
        keyPoints: [
          {
            title: "Education",
            description: "Providing comprehensive education on health equity issues and their systemic causes",
            icon: "📚"
          },
          {
            title: "Advocacy",
            description: "Amplifying voices and stories from affected communities",
            icon: "📢"
          },
          {
            title: "Action",
            description: "Creating tangible initiatives that drive real change in communities",
            icon: "✨"
          }
        ]
      },
      vision: {
        heading: "OUR VISION",
        text: "To build a nationwide network of students, healthcare professionals, and community leaders working together to address systemic health disparities and create lasting change in communities across the country.",
        stats: [
          {
            number: "50+",
            label: "University Chapters",
            description: "Across the United States"
          },
          {
            number: "10,000+",
            label: "Active Members",
            description: "Working for change"
          },
          {
            number: "100+",
            label: "Community Partners",
            description: "Supporting our mission"
          }
        ]
      },
      values: {
        heading: "OUR CORE VALUES",
        items: [
          {
            title: "Equity",
            description: "Ensuring fair access to healthcare resources and opportunities"
          },
          {
            title: "Education",
            description: "Empowering through knowledge and understanding"
          },
          {
            title: "Community",
            description: "Building strong networks for lasting change"
          },
          {
            title: "Action",
            description: "Converting awareness into meaningful initiatives"
          }
        ]
      },
      callToAction: {
        heading: "Join Our Mission",
        text: "Together, we can create a more equitable healthcare system for all.",
        buttonText: "Get Involved",
        buttonLink: "/get-involved/chapters"
      }
    }
  },
  history: {
    title: "Our History",
    subtitle: "A Legacy of Health Equity Advocacy",
    content: [
      "Our journey began with firsthand experiences in hospitals, community clinics, and underserved neighborhoods — both locally and globally — where the stark realities of health disparities were impossible to ignore. Whether it was witnessing patients struggle to access quality care or hearing stories of systemic barriers from healthcare professionals, the message was clear: the time for change is now.",
      "Driven by a blend of personal and professional experiences, the Voices of Equity team understood the urgency of this issue. They realized that addressing these disparities required both awareness and meaningful action—bridging the gaps between education, inspiration, and empowerment.",
      "In response, Voices of Equity was established to amplify the call for systemic change. By bringing together students, healthcare professionals, and community leaders, we created a platform to educate the next generation, share powerful stories, and equip communities with the tools to fight for equity. What started as a grassroots initiative has grown into a nationwide movement, uniting diverse voices around a shared mission: to dismantle barriers to health and create a world where everyone has the opportunity to thrive.",
      "Today, Voices of Equity stands as a testament to the power of collective action. Together, we're building awareness, inspiring change, and empowering communities—one story, one initiative, and one step at a time."
    ],
    timeline: [
      {
        year: 2020,
        title: "Foundation",
        description: "Established at Cornell University in response to healthcare disparities highlighted by COVID-19"
      },
      {
        year: 2021,
        title: "Initial Expansion",
        description: "Launched first five university chapters and developed core educational programs"
      },
      {
        year: 2022,
        title: "Growing Impact",
        description: "Established partnerships with major healthcare organizations and community clinics"
      },
      {
        year: 2023,
        title: "National Reach",
        description: "Expanded to 50+ chapters nationwide and launched mentorship program"
      },
      {
        year: 2024,
        title: "Innovation",
        description: "Launched comprehensive healthcare equity curriculum and digital storytelling platform"
      }
    ]
  },
  team: {
    title: "Our Team",
    subtitle: "Meet the people behind Voices of Equity",
    members: [
      {
        id: "caleb-suh",
        name: "Caleb T. Suh",
        role: "Co-Founder & Co-Director",
        image: "/caleb-suh.jpg",
        shortBio: "Caleb has dedicated his career to advancing equity in healthcare...",
        fullBio: `Caleb T. Suh serves as the Co-Founder and Co-Executive Director of Voices of Equity, where he leads initiatives to inspire meaningful action, amplify underrepresented voices, and empower communities to address inequities in healthcare. Caleb oversees the organization's strategic operations, fostering collaborative partnerships and driving community-based solutions to advance health equity.

        Caleb brings extensive leadership experience to his role. As a cadet at the United States Military Academy, he ranked in the top 1% of his class and was selected to serve as the Regimental Commander for Cadet Basic Training, leading over 300 cadet leaders and overseeing the training of 1,500 cadets in mission-critical operations.  Beyond his academic and military achievements, Caleb founded Operation Golden Shield, a nonprofit organization dedicated to providing immediate relief to individuals and Veterans experiencing homelessness and food insecurity. These roles reinforced his commitment to service, operational excellence, and the power of collaboration in addressing systemic challenges. 

        As an Emergency Department Volunteer Team Lead at Cayuga Medical Center and a certified EMT, he gained firsthand experience supporting patients in critical moments and collaborating with healthcare teams. He has authored peer-reviewed research analyzing U.S. supply chain vulnerabilities and currently conducts addiction neuroscience research at the Konova Addiction Lab, where he studies the neurobehavioral mechanisms of addiction. These experiences provided him with a unique perspective on how systemic gaps in care affect vulnerable populations, reinforcing his dedication to advancing equity in healthcare and the importance of creating community-driven solutions to address disparities in access and outcomes.

        Caleb's diverse experiences in leadership, healthcare, and research inform his work at Voices of Equity, where he remains committed to creating sustainable, community-driven solutions that address systemic inequities.`,
        email: "caleb@voicesofequity.org"
      },
      {
        id:"zaid-al-shoha",
        name:"Zaid Al-Shoha",
        role: "Co-Founder and Co-Director",
        image: "/zaid.jpg",
        shortBio: "Zaid is dedicated to addressing systemic health disparities...",
        fullBio: `As the Co-Founder and Executive Director of Voices of Equity, Zaid Al-Shoha leads efforts to drive impactful change, amplify marginalized voices, and empower communities in addressing healthcare disparities. He is responsible for shaping the organization's strategic direction, building collaborative partnerships, and advancing community-centered solutions for equitable healthcare. 

 

        Zaid is an undergraduate student at Cornell University, studying Biological Sciences on the premedical track. With aspirations in academic medicine, he is particularly passionate about surgery and leveraging leadership to foster systemic change in healthcare. Through his work, he strives to bridge gaps in access to quality care, inspire future healthcare leaders, and develop innovative solutions to address inequities within the medical field.

 

        Beyond his role at Voices of Equity, his commitment to global health equity is evident in his leadership of multiple campaigns with the Red Crescent, where he has worked to improve healthcare accessibility and provide humanitarian relief. At Cornell, he works on the education subteam of Cornell Assistive Technologies, where he takes part in workshops teaching families how to modify toys for children with disabilities and contributes to the development of assistive solutions. His dedication to scientific advancement is reflected in his neuroregeneration research in the Lin Lab, where he explores the underlying mechanisms of peripheral nervous system regeneration in efforts to develop interventions for neurological disorders and trauma.

 

        Zaid's extensive experiences in leadership, healthcare, and research guide his work at Voices of Equity, driving initiatives that foster long-term, structural improvements in healthcare accessibility and equity.`,
        email: "zaid@voicesofequity.org"
      },
      {
        id: "eliza-dow",
        name: "Eliza Dow",
        role: "National Director of Education",
        image:"/eliza.jpg",
        shortBio: "Eliza is deeply passionate about health equity, particularly...",
        fullBio: `Eliza Dow is a junior at Cornell University, studying Biology and Society in the College of Arts and Sciences. She is deeply passionate about health equity, particularly in the context of inclusive clinical trial practices and policies that improve healthcare outcomes for historically disadvantaged populations. Eliza hopes to use her passion to educate others on equitable practices within and beyond 
        healthcare. She aims to teach future healthcare professionals to recognize how policies and practices can either help or harm their patients, empower patients to understand and advocate for their rights, and drive meaningful change in medicine by highlighting critical perspectives on healthcare and health equity.

        At Voices of Equity, Eliza serves as the National Director of Education and the Director of Education for the Cornell chapter. In these roles, she develops an expansive curriculum, educational modules, and resources designed to foster engaging and practical learning experiences. Her work ensures that Voices of Equity members—and the communities they reach—gain a deeper understanding of health equity, emphasizing its 
        relevance not only in healthcare but in all aspects of life.

        Beyond her work with Voices of Equity, Eliza is a certified EMT and has volunteered in hospital settings. She is also an editor for The Healthcare Review at Cornell University, a member of the pre-medical fraternity Phi Delta Epsilon, and plays for Cornell Women’s Club Lacrosse. Additionally, she previously served as the Vice President of Member Education for Cornell’s Delta Gamma sorority. With extensive experience in
        developing educational materials and teaching about diverse communities, she brings invaluable expertise to Voices of Equity’s mission.`
      },
      {
        id: "adam-jac",
        name: "Adam Jac",
        role: "National Director of Philanthropy",
        image:"/adam.jpg",
        shortBio: "Adam is committed to leverage philanthropy, research...",
        fullBio:`Adam Jac is an undergraduate student at Cornell University, studying Biological Sciences with plans to complete a master’s in Biomedical Engineering before pursuing medical school.
        
        Passionate about surgery and advancing health equity, Adam is committed to leveraging philanthropy, research, and clinical experience to drive meaningful change in healthcare access and outcomes.
        As the Director of Philanthropy at Voices of Equity, Adam leads national philanthropic initiatives that align with the organization’s mission to address systemic health disparities. 
        
        He designs and oversees large-scale fundraising campaigns, supports national projects and chapter activities, and collaborates with chapters to execute impactful philanthropic events. Additionally, he plays a key role in developing 
        partnerships with organizations that support Voices of Equity’s philanthropic goals, ensuring sustainable funding for health equity initiatives.

        Beyond his work at Voices of Equity, Adam has extensive clinical and research experience. He is a certified EMT and has worked in primary care settings, gaining first hand exposure to the challenges patients face in accessing 
        care. He conducts clinical research with the Department of Plastic Surgery at Beth Israel Deaconess Medical Center and has started a project at the DeLisa Research Group at Cornell, where he has received two grants to continue 
        testing ubiquibodies in cancer research. His diverse experiences in medicine, research, and philanthropy fuel his commitment to creating tangible solutions that bridge gaps in healthcare access.`
      },
      {
        id: "jennifer-zhu",
        name: "Jennifer Zhu",
        role: "National Director of Media",
        shortBio: "Jennifer's experience in healthcare, media, and leadership...",
        image:"/jennifer.jpg",
        fullBio: `Jennifer Zhu serves as the National Director of Media for Voices of Equity, leading the initiative
        to spread and empower discussions about health equity through social media platforms.
        Jennifer has substantial experience in the fields of art and digital design, in addition to managing
        social media content. She collaborates with the organization to integrate graphic design with the
        advancement of educational topics as well as personal stories related to health equity.


        Jennifer is currently a junior undergraduate majoring in biology on the pre-med track in the
        College of Arts and Sciences. She holds the position of recruitment co-chair at the Varna
        Volunteer Fire Company, an all-volunteer based fire department in Tompkins County mostly
        comprising students. Her experience as a certified EMT-B since senior year of high school has
        developed her ability to lead and work well under pressure. Jennifer also earned her Interior
        Firefighting certification more than one year ago, which consisted of countless hours of training
        as well as exceptional mental and physical learning opportunities.


        As a volunteer at the Northport Veterans Affairs Hospital on Long Island, Jennifer has
        encountered many patients of various backgrounds and health conditions, which has inspired
        her to become an advocate for health equity and awareness. Stories from numerous patient
        interactions have truly shaped her perspective on healthcare issues and driven her to support
        an initiative where these topics can be discussed on a larger scale. At Cornell, Jennifer is part of
        Kappa Phi Lambda Sorority, Incorporated, an organization centered around service,
        philanthropy, and leadership. She has held the positions of public relations and philanthropy
        chair, which have developed her skills in design, publicity, and fundraising. Well trained in CPR
        and basic life support, Jennifer also works as a lifeguard both on campus and back home.
        Jennifer’s experience in healthcare, media, and leadership has prepared her well to address
        healthcare disparities by supporting the missions and goals for Voices of Equity`
      },
      {
        id: "grace-chen",
        name: "Grace Chen",
        role: "National Director of Outreach",
        image: "/grace.jpg",
        shortBio:"Grace works to create lasting positive change..",
        fullBio: `Grace Chen serves as the Director of Outreach for Voices of Equity, where she leads expansion initiatives focused on establishing new undergraduate chapters across the country. As a Biometry and Statistics major at Cornell University who is also pursuing medicine, she brings a unique perspective that combines data-driven analysis with a commitment to improving healthcare equity. She develops comprehensive outreach materials, and implements engagement strategies to empower future chapter leaders to advance health equity in their communities. Through strategic partnerships with student organizations and academic institutions, she aims to build a robust network of future healthcare leaders committed to improving healthcare accessibility and outcomes.
 
        Grace’s dedication to STEM outreach is further demonstrated by her role as a Policy and Practices Member for Cornell iGEM, conducting interviews and organizing educational and outreach-based events based on synthetic biology. Her leadership extends to coaching and mentorship, including guiding students to a national Science Olympiad victory and leading a competitive team to an overall second-place national finish.

        Combining her expertise in project management and inclusive leadership with a passionate commitment to fostering health equity, Grace works to create lasting positive change through educational outreach and community-based initiatives. Her leadership helps Voices of Equity fulfill its mission of educating, inspiring, and empowering communities through impactful content, storytelling, and actionable solutions that address healthcare disparities.`
      },

      
    ],
    engineers: [
      {
        id: "tyler-yang",
        name: "Tyler Yang",
        role: "Software Developer",
        image: "/tyler.jpg",
        shortBio: "",
        fullBio: `Coming Soon`,
        email:""
      }, 
      {
        id: "arnab-ghosh",
        name: "Arnab Ghosh",
        role: "Software Developer",
        image: "/tyler.jpg",
        shortBio: "",
        fullBio: `Coming Soon`,
        email:""
      }
    ]
  }, 
};

export const whatWeDo = {
  news: {
    title: "Voices & Impact",
    subtitle: "Deep dives into health equity issues and updates from our community",
    featured: {
      title: "The Hidden Cost of Healthcare",
      excerpt: "An in-depth analysis of how indirect costs create barriers to healthcare access",
      author: "Dr. Sarah Chen",
      date: "2024-02-15",
      image: "/featured-memo.jpg",
      category: "Analysis",
      readTime: "12 min read",
      slug: "hidden-cost-healthcare",
      type: "memo"
    },
    articles: [
      {
        title: "Rural Healthcare Deserts",
        type: "memo",
        excerpt: "Examining the growing crisis of healthcare access in rural America",
        content: `
          <h2>The Growing Crisis</h2>
          <p>Rural communities across America are facing an unprecedented healthcare crisis...</p>
          
          <blockquote>
            "In my county, the nearest hospital is over 50 miles away. That's not just inconvenient—it's dangerous."
            <cite>- Sarah Johnson, Rural Health Advocate</cite>
          </blockquote>

          <h2>Key Findings</h2>
          <ul>
            <li>Over 130 rural hospitals have closed since 2010</li>
            <li>20% of Americans live in rural areas but only 10% of physicians practice there</li>
          </ul>
        `,
        author: {
          name: "Dr. Michael Roberts",
          role: "Healthcare Policy Researcher",
          image: "/authors/michael-roberts.jpg"
        },
        date: "2024-02-10",
        image: "/memos/rural-healthcare.jpg",
        category: "Research",
        readTime: "8 min read",
        slug: "rural-healthcare-deserts",
        callout: {
          type: "statistic",
          content: "60% of rural Americans live in healthcare deserts",
          description: "Areas with limited access to primary care facilities"
        }
      },
      {
        title: "New Partnership Launches",
        type: "news",
        excerpt: "Voices of Equity partners with major healthcare providers to launch mobile clinics",
        content: `
          <h2>New Partnership</h2>
          <p>Voices of Equity is excited to announce a new partnership with major healthcare providers...</p>
          
          <div class="event-details">
            <p>Date: February 20, 2024</p>
            <p>Location: Various locations across the country</p>
          </div>
        `,
        date: "2024-02-20",
        image: "/news/partnership-launch.jpg",
        category: "Announcement",
        slug: "healthcare-partnership-2024",
        highlight: {
          type: "cta",
          text: "Learn More",
          link: "/what-we-do/news"
        }
      }
    ]
  },
  voices: {
    title: "Our Voices",
    subtitle: "Deep dives into health equity issues",
    featured: {
      title: "The Hidden Cost of Healthcare",
      excerpt: "An in-depth analysis of how indirect costs create barriers to healthcare access",
      author: "Dr. Sarah Chen",
      date: "2024-02-15",
      image: "/featured-memo.jpg",
      category: "Analysis",
      readTime: "12 min read",
      slug: "hidden-cost-healthcare"
    },
    memos: [
      {
        title: "Rural Healthcare Deserts",
        excerpt: "Examining the growing crisis of healthcare access in rural America",
        content: `
          <h2>The Growing Crisis</h2>
          <p>Rural communities across America are facing an unprecedented healthcare crisis...</p>
          
          <blockquote>
            "In my county, the nearest hospital is over 50 miles away. That's not just inconvenient—it's dangerous."
            <cite>- Sarah Johnson, Rural Health Advocate</cite>
          </blockquote>

          <h2>Key Findings</h2>
          <ul>
            <li>Over 130 rural hospitals have closed since 2010</li>
            <li>20% of Americans live in rural areas but only 10% of physicians practice there</li>
          </ul>
        `,
        author: {
          name: "Dr. Michael Roberts",
          role: "Healthcare Policy Researcher",
          image: "/authors/michael-roberts.jpg"
        },
        date: "2024-02-10",
        image: "/memos/rural-healthcare.jpg",
        category: "Research",
        readTime: "8 min read",
        slug: "rural-healthcare-deserts",
        callout: {
          type: "statistic",
          content: "60% of rural Americans live in healthcare deserts",
          description: "Areas with limited access to primary care facilities"
        }
      },
      {
        title: "Language Barriers in Healthcare",
        excerpt: "How language differences impact patient outcomes and access to care",
        content: `
          <h2>Communication is Critical</h2>
          <p>For millions of Americans, language barriers represent a significant obstacle...</p>
          
          <aside class="case-study">
            <h3>Case Study: Community Solutions</h3>
            <p>In Boston's Chinatown, a innovative program is bridging the gap...</p>
          </aside>
        `,
        author: {
          name: "Maria Garcia, MPH",
          role: "Health Equity Researcher",
          image: "/authors/maria-garcia.jpg"
        },
        date: "2024-02-01",
        image: "/memos/language-barriers.jpg",
        category: "Case Study",
        readTime: "15 min read",
        slug: "language-barriers-healthcare",
        callout: {
          type: "quote",
          content: "When you can't communicate your symptoms clearly, every hospital visit becomes a source of anxiety",
          author: "Anonymous Patient"
        }
      }
    ]
  },
  impact: {
    title: "Our Impact",
    subtitle: "News and updates from our community",
    featured: {
      title: "New Partnership Brings Healthcare to Underserved Communities",
      excerpt: "Voices of Equity partners with major healthcare providers to launch mobile clinics",
      date: "2024-02-20",
      image: "/news/partnership-launch.jpg",
      category: "Announcement",
      slug: "healthcare-partnership-2024"
    },
    news: [
      {
        title: "Student-Led Initiative Breaks Down Barriers",
        excerpt: "Cornell chapter's innovative program reaches milestone of 1,000 community members served",
        content: `
          <p>What started as a small student initiative has grown into...</p>
          
          <div class="impact-metric">
            <h3>1,000+</h3>
            <p>Community members served</p>
          </div>
        `,
        date: "2024-02-18",
        image: "/news/student-initiative.jpg",
        category: "Success Story",
        slug: "student-initiative-milestone",
        highlight: {
          type: "metric",
          value: "1,000+",
          label: "Lives Impacted",
          description: "Through direct community engagement"
        }
      },
      {
        title: "Health Equity Summit 2024 Announced",
        excerpt: "Annual gathering to focus on technological innovations in healthcare access",
        content: `
          <h2>Mark Your Calendars</h2>
          <p>The upcoming Health Equity Summit will bring together...</p>
          
          <div class="event-details">
            <p>Date: June 15-17, 2024</p>
            <p>Location: Cornell University</p>
          </div>
        `,
        date: "2024-02-15",
        image: "/news/summit-2024.jpg",
        category: "Event",
        slug: "health-equity-summit-2024",
        highlight: {
          type: "cta",
          text: "Register Now",
          link: "/events/summit-2024"
        }
      }
    ]
  },
  resources: {
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
          videoId: "your_video_id_here",
          title: "Understanding Health Equity",
          description: "An introduction to health equity and why it matters in today's healthcare landscape."
        },
        {
          videoId: "another_video_id",
          title: "Healthcare Disparities in Practice",
          description: "Real-world examples of healthcare disparities and their impact on communities."
        }
      ],
      researchPapers: [
        {
          title: "Health Equity in Urban Communities",
          authors: "Smith, J., et al.",
          year: "2023",
          description: "A comprehensive study of health disparities in urban settings.",
          link: "/papers/health-equity-urban.pdf"
        },
        {
          title: "Social Determinants of Health Access",
          authors: "Johnson, M., et al.",
          year: "2023",
          description: "Analysis of social factors affecting healthcare access.",
          link: "/papers/social-determinants.pdf"
        }
      ],
      guides: [
        {
          title: "Chapter Leadership Guide",
          description: "Complete guide for running a successful VoE chapter.",
          icon: "📚",
          link: "/guides/chapter-leadership.pdf"
        },
        {
          title: "Health Equity Advocacy Toolkit",
          description: "Resources and strategies for effective advocacy.",
          icon: "🔧",
          link: "/guides/advocacy-toolkit.pdf"
        }
      ]
    }
  }
};

export const getInvolved = {
  chapters: {
    title: "Our Chapters",
    subtitle: "Join a community near you",
    content: `Integral to the mission of Voices of Equity is education and outreach. 
    Through our chapters across undergraduate institutions we empower students to gain 
    hands-on experience in the fight against health disparities. All of our chapters are 
    led by undergraduates and managed by the Voices of Equity National Chapter Leader. 
    Chapters are dedicated to on the ground work, combating health disparities through 
    educational, philanthropic, and outreach efforts.`
  },
  requirements: {
    title: "Chapter Requirements",
    subtitle: "What it takes to start a chapter",
    content: 
      {
        req1: "General Body Meetings",
        req1desc: `All Voices of Equity Chapters must hold bi-weekly
         general body meetings. These meetings will consist of three 
         major parts. Firstly, the chapter's Director of Education 
         will present a slideshow prepared by the Voices of Equity National
          Chapter on the most pertinent topics in health equity. Next, the 
          chapter will directly engage with the content, through discussions,
           debates, and solutions. Finally, committees within the chapter will 
           gather and work on their respective events for the semester,`,
        req2: "Events",
        req2desc: `Each chapter must host a minimum of 3 events per semester: a philanthropic event, 
        an educational event, and an outreach event. Within the chapter, members are divided into committees
        , with each committee tasked wit the execution of a major event by the end of the semester.`,
        req3: "The Executive Board",
        req3desc: `Every Voices of Equity Chapter is led by an executive board. The executive board must 
        fulfill the following positions: President, Director of Philanthropy, Director of Education, 
        Director of Outreach, and Media Director. Executive board members are responsible for leading committees, 
        scheduling general body meetings and events, and directly communicating with the National Chapter leadership.`,
        bottom: 'Chapter By-Laws',
        bottominfo: `For a detailed description of all chapter requirements and logistics, 
        refer to the Chapter By-Laws document below`
      }
  },
  start: {
    title: "Start a Chapter",
    subtitle: "Lead the change in your community",
  }
};

export const cornellChapter = {
  title: "The Cornell Chapter",
  subtitle: "Our Founding Chapter",
  hero: {
    image: "/cornell-chapter.jpg",
    logo: "/cornell-logo.png",
    tagline: "Founded in January 2025, as the inaugural chapter of Voices of Equity"
  },
  introduction: {
    heading: "Where It All Began",
    text: "The Cornell University chapter represents the foundation of Voices of Equity's mission. As our founding chapter, it set the standard for how student organizations can drive meaningful change in healthcare equity.",
    stats: [
      {
        number: "100+",
        label: "Active Members",
        description: "Dedicated students driving change"
      },
      {
        number: "20+",
        label: "Events Hosted",
        description: "Engaging the Cornell community"
      },
      {
        number: "5",
        label: "Partner Organizations",
        description: "Building strong local connections"
      }
    ]
  },
  initiatives: {
    heading: "Our Key Initiatives",
    description: "Leading the way in health equity advocacy and education",
    items: [
      {
        title: "Health Equity Symposium",
        description: "Annual conference bringing together healthcare leaders, researchers, and students",
        image: "/symposium.jpg",
        date: "Spring 2025"
      },
      {
        title: "Community Health Workshop Series",
        description: "Monthly workshops addressing local health disparities",
        image: "/workshop.jpg",
        date: "Ongoing"
      },
      {
        title: "Research Mentorship Program",
        description: "Connecting students with faculty for health equity research",
        image: "/research.jpg",
        date: "Fall 2025"
      }
    ]
  },
  leadership: {
    heading: "Executive Board",
    description: "Meet the team leading our founding chapter",
    members: [
      {
        name: "Caleb T. Suh",
        role: "Co-Founder & Co-Director",
        image: "/caleb-suh.jpg",
        bio: "Dedicated to advancing equity in healthcare through leadership and research",
        link: "/who-we-are/team/caleb-suh"
      },
      {
        name: "Zaid Al-Shoha",
        role: "Co-Founder & Co-Director",
        image: "/zaid.jpg",
        bio: "Passionate about medical research and driving positive change",
        link: "/who-we-are/team/zaid-al-shoha"
      }
    ]
  },
  impact: {
    heading: "Our Impact at Cornell",
    metrics: [
      {
        category: "Education",
        achievements: [
          "Hosted 12 educational workshops",
          "Reached 500+ students through events",
          "Partnered with 3 academic departments"
        ]
      },
      {
        category: "Community Outreach",
        achievements: [
          "Established partnerships with local clinics",
          "Conducted health literacy programs",
          "Organized volunteer programs"
        ]
      },
      {
        category: "Research",
        achievements: [
          "Published 2 research papers",
          "Presented at 3 conferences",
          "Launched student research initiative"
        ]
      }
    ]
  },
  getInvolved: {
    heading: "Join the Cornell Chapter",
    description: "Be part of our mission to create lasting change",
    applicationInfo: {
      nextDeadline: "February 1, 2025",
      requirements: [
        "Current Cornell University student",
        "Passion for health equity",
        "Commitment to community service"
      ],
      applicationLink: "/get-involved/cornell-application"
    },
    upcomingEvents: [
      {
        name: "Spring Information Session",
        date: "January 25, 2025",
        location: "Warren Hall B45",
        time: "5:00 PM EST",
        registrationLink: "/events/spring-info-session"
      }
    ]
  },
  contact: {
    email: "cornell@voicesofequity.org",
    socialMedia: {
      instagram: "@voecornell",
      linkedin: "/company/voe-cornell"
    },
    location: "Cornell University, Ithaca, NY 14853"
  }
};

export const callToAction = {
  primary: {
    text: 'Join Our Movement',
    href: '/get-involved/chapters'
  },
  secondary: {
    text: 'Learn More',
    href: '/who-we-are/mission'
  }
};

export const footer = {
  tagline: "Building a more equitable future together",
  newsletter: {
    title: "Stay Updated",
    description: "Join our newsletter to receive updates about our work and impact.",
    buttonText: "Subscribe"
  },
  bottomText: "© 2024 Voices of Equity. All rights reserved."
};

export const errorPages = {
  404: {
    title: "Page Not Found",
    message: "The page you're looking for doesn't exist or has been moved.",
    buttonText: "Go Home"
  },
  500: {
    title: "Server Error",
    message: "Something went wrong on our end. Please try again later.",
    buttonText: "Try Again"
  }
}; 