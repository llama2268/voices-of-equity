export const siteConfig = {
  name: 'Voices of Equity',
  description: 'Empowering voices for a more equitable future',
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
        { title: 'Our Voices', href: '/what-we-do/voices' },
        { title: 'Our Impact', href: '/what-we-do/impact' },
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
};

export const homePage = {
  hero: {
    title: "Amplifying Voices for Change",
    subtitle: "Building a more equitable future, one voice at a time",
    description: "We're a non-profit organization dedicated to promoting equity and inclusion through education, advocacy, and community engagement.",
    ctaButton: {
      text: "Join Our Movement",
      href: "/get-involved/chapters"
    }
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
  ]
};

export const whoWeAre = {
  mission: {
    title: "Our Mission",
    header1: "VOICES OF EQUITY IS AT THE FOREFRONT OF ADVANCING HEALTH EQUITY.",
    subtitle: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives.",
    content: "We are a nationwide organization committed to addressing systemic health disparities. Through a growing network of empowered students, healthcare professionals, and community leaders, we create opportunities for education, share impactful stories, and develop actionable initiatives that drive meaningful change.",
    header2: "OUR MISSION",
    content2: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives.",
    header3: "OUR VISION",
    content3: " To build a nationwide network of students, healthcare professionals, and community leaders working together to address systemic health disparities and create lasting change in communities across the country"
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
        fullBio: `Zaid Al-Shoha is an undergraduate student at Cornell University, studying Biological Sciences. Passionate about medical research and leveraging leadership to drive positive change, Zaid is dedicated to addressing systemic health disparities and empowering future healthcare leaders through education and advocacy. As the Co-Founder of Voices of Equity, Zaid combines his interest in academic 
        
        medicine and surgery with his commitment to fostering health equity. He plays a pivotal role in developing impactful educational content, mobilizing campus chapters across the U.S., and building partnerships with influential public health leaders. Through social media engagement and community-based initiatives, Zaid inspires university students to take action and create meaningful change in their 
        
        local communities.`,
        email: "zaid@voicesofequity.org"
      }
    ]
  }
};

export const whatWeDo = {
  voices: {
    title: "Our Voices",
    subtitle: "Stories that inspire change"
  },
  impact: {
    title: "Our Impact",
    subtitle: "Making a difference in communities across the nation"
  },
  resources: {
    title: "Our Resources",
    subtitle: "Tools for change"
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
  subtitle: "Leading change at Cornell University"
}; 