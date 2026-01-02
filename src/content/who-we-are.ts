import type { TeamMember, Engineer, TimelineEvent } from './types'

// WHO WE ARE PAGES
export const whoWeArePage = {
  mission: {
    title: "Our Mission",
    subtitle: "Building a more equitable future in healthcare",
    introduction: {
      mainHeading: "VOICES OF EQUITY IS AT THE FOREFRONT OF ADVANCING HEALTH EQUITY",
      text: "We are a nationwide organization committed to addressing systemic health disparities through education, advocacy, and community engagement. Through our growing network of empowered students, healthcare professionals, and community leaders, we create opportunities for meaningful change in healthcare accessibility and outcomes."
    },
    mission: {
      heading: "OUR MISSION",
      text: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives.",
      keyPoints: [
        {
          title: "Educate",
          description: "We equip students, healthcare professionals, and communities with accessible resources, engaging workshops, and thought-provoking discussions to raise awareness about systemic health disparities and the social determinants of health.",
          icon: "📚"
        },
        {
          title: "Inspire",
          description: "Through storytelling, lived experiences, and expert insights, we spark passion and motivation in the next generation of changemakers, encouraging them to prioritize health equity in their careers and communities.",
          icon: "📢"
        },
        {
          title: "Empower",
          description: "By providing leadership opportunities, establishing campus chapters, and fostering advocacy initiatives, we empower individuals with the tools, network, and support they need to take tangible action in addressing health inequities nationwide.",
          icon: "✨"
        }
      ]
    },
    vision: {
      heading: "OUR VISION",
      text: "To build a nationwide network of students, healthcare professionals, and community leaders working together to address systemic health disparities and create lasting change in communities across the country.",
      // Stats commented out until real data is available
      // stats: [
      //   {
      //     number: "50+",
      //     label: "University Chapters",
      //     description: "Across the United States"
      //   },
      //   {
      //     number: "10,000+",
      //     label: "Active Members",
      //     description: "Working for change"
      //   },
      //   {
      //     number: "100+",
      //     label: "Community Partners",
      //     description: "Supporting our mission"
      //   }
      // ]
    },
    values: {
      heading: "OUR CORE VALUES",
      items: [
        {
          title: "Value Every Person",
          description: "We believe everyone deserves access to healthcare and the opportunity to live a healthy life—no matter their background, income, or zip code"
        },
        {
          title: "Opportunity for Better Health",
          description: "Health isn't just about doctors and hospitals—it's about the opportunities people have to stay healthy. We fight to remove barriers like lack of insurance, food insecurity, and unequal access to care"
        },
        {
          title: "Impact Over Words",
          description: "Raising awareness isn't enough. We focus on real, tangible solutions that improve health outcomes—whether that's connecting someone to free medical care or giving them the resources they need to advocate for themselves"
        },
        {
          title: "Community First",
          description: "Health starts where we live, work, and gather. We listen to communities, support grassroots efforts, and ensure that solutions are created with the people they serve"
        },
        {
          title: "Equity in Action",
          description: "We don't just talk about health equity—we act on it. From mobile clinics to patient advocacy, we take meaningful steps toward a future where quality healthcare is a right, not a privilege"
        },
        {
          title: "Sustainable Change",
          description: "Real change doesn't happen overnight. We work to create lasting systems of support—so communities don't just receive temporary relief but have ongoing access to healthcare, education, and resources"
        }
      ]
    },
    callToAction: {
      heading: "Join Our Mission",
      text: "Together, we can create a more equitable healthcare system for all.",
      buttonText: "Get Involved",
      buttonLink: "/get-involved/chapters"
    }
  },
  history: {
    title: "Our History",
    subtitle: "The Journey of Voices of Equity",
    content: [
      "Our journey began with firsthand experiences in hospitals, community clinics, and underserved neighborhoods — both locally and globally — where the stark realities of health disparities were impossible to ignore. Whether it was witnessing patients struggle to access quality care or hearing stories of systemic barriers from healthcare professionals, the message was clear: the time for change is now.",
      "Driven by a blend of personal and professional experiences, the Voices of Equity team understood the urgency of this issue. They realized that addressing these disparities required both awareness and meaningful action—bridging the gaps between education, inspiration, and empowerment.",
      "In response, Voices of Equity was established to amplify the call for systemic change. By bringing together students, healthcare professionals, and community leaders, we created a platform to educate the next generation, share powerful stories, and equip communities with the tools to fight for equity. What started as a grassroots initiative has grown into a nationwide movement, uniting diverse voices around a shared mission: to dismantle barriers to health and create a world where everyone has the opportunity to thrive.",
      "Today, Voices of Equity stands as a testament to the power of collective action. Together, we're building awareness, inspiring change, and empowering communities—one story, one initiative, and one VOICE at a time."
    ],
    timeline: [
      {
        year: 'DEC',
        title: "VoE Founded",
        description: "Voices of Equity is officially established, laying the foundation for a nationwide movement to advance health equity through education, advocacy, and community action",
        side: 'right'
      },
      {
        year: 2024
      },
      {
        year: 'JAN',
        title: "Cornell Chapter Established",
        description: "The first undergraduate chapter is launched at Cornell University, serving as a model for future chapters and student-led initiatives",
        side: 'left'
      },
      {
        year: 'FEB',
        title: "Curriculum & Educational Development Begins",
        description: "Voices of Equity begins developing a structured health equity curriculum, creating accessible educational materials to guide discussions and empower student leaders",
        side: 'right'
      },
      {
        year: 'MAR',
        title: "National Expansion Begins",
        description: "Voices of Equity kicks off its expansion efforts, recruiting student leaders and forming partnerships to establish chapters at universities across the country.",
        side: 'left'
      },
      {
        year: 'JUN',
        title: "Foundations Solidified, Future in Motion",
        description: "As VoE closes out its founding year, over 30 active chapters are established nationwide, a national leadership model is fully implemented, and VoE's boots-on-the-ground communities based initiatives begin shaping the future of student-led health equity",
        side: 'right'
      },
      {
        year: 2025
      },
      {
        year: 'AUG',
        title: "Leadership Onboarding Intensive",
        description: "In August 2025, Voices of Equity hosted its first national onboarding intensive, bringing together over 100 student leaders from 40+ undergraduate institutions. Across two days of training, presidents and committee directors were equipped with the resources, expectations, and networks needed to lead their chapters effectively. This milestone marked the formal launch of a unified national structure and the next stage of VoE's growth.",
        side: 'left'
      },
      {
        year: 'OCT',
        title: "National Health Equity Week",
        description: "Our first major nationwide initiative launched with incredible momentum. Over the course of the week, we raised over $2,000, distributed $1,000+ in grants, engaged 30+ campuses, and mobilized 200+ members to take action in their communities.",
        side: 'right'
      },
    ] satisfies TimelineEvent[],
    conclusion: "What began with a small team and a bold vision has now grown into a national movement. With chapters active across the country and a growing network of student leaders, Voices of Equity is building the infrastructure for long-term impact. As we expand into new communities, launch innovative initiatives, and develop the next generation of health equity leaders, our commitment remains the same: dismantling barriers to health through education, advocacy, and community-based action."
  },
  team: {
    title: "Our Team",
    subtitle: "Meet the people behind Voices of Equity",
    members: [
      {
        id: "caleb-suh",
        name: "Caleb T. Suh",
        role: "Co-Founder & Executive Director",
        image: "/caleb-new-4.jpg",
        shortBio: "Caleb T. Suh serves as the Co-Founder & Executive Director of Voices of Equity..",
        fullBio: `Caleb T. Suh serves as the Co-Founder & Executive Director of Voices of Equity, where he oversees strategic direction, internal operations, and national chapter development. He leads national operations, oversees organizational growth strategy, and directs internal systems that support long-term scale and execution. His work focuses on clear execution, measurable outcomes, and long-term capacity building.

        Caleb brings extensive leadership experience to his role. As a cadet at the United States Military Academy, he ranked in the top 1% of his class and was selected to serve as the Regimental Commander for Cadet Basic Training, leading over 300 cadet leaders and overseeing the training of 1,500 cadets in mission-critical operations. Beyond his academic and military achievements, Caleb founded Operation Golden Shield, a nonprofit organization dedicated to providing immediate relief to individuals and Veterans experiencing homelessness and food insecurity. These roles reinforced his commitment to service, operational excellence, and the power of collaboration in addressing systemic challenges.

        His leadership extends across academic, nonprofit, and operational domains. He has led national service initiatives, authored peer-reviewed research, and managed large-scale, cross-institutional projects within data coordination and translational science. At Voices of Equity, he applies these experiences to grow a mission-driven team focused on building practical, scalable solutions to systemic challenges.`,
        email: "Suh.t.caleb@outlook.com",
        linkedin: "https://www.linkedin.com/in/caleb-suh-028a956a/"
      },
      {
        id: "zaid-al-shoha",
        name: "Zaid Al-Shoha",
        role: "Co-Founder & Executive Director",
        image: "/zaid-headshot.png",
        shortBio: "Zaid Al-Shoha leads efforts to drive impactful change..",
        fullBio: `As the Co-Founder & Executive Director of Voices of Equity, Zaid Al-Shoha leads efforts to drive impactful change, amplify marginalized voices, and empower communities in addressing healthcare disparities. He is responsible for shaping the organization's strategic direction, building collaborative partnerships, and advancing community-centered solutions for equitable healthcare. 

        

        Zaid is an undergraduate student at Cornell University, studying Biological Sciences on the premedical track. With aspirations in academic medicine, he is particularly passionate about surgery and leveraging leadership to foster systemic change in healthcare. Through his work, he strives to bridge gaps in access to quality care, inspire future healthcare leaders, and develop innovative solutions to address inequities within the medical field.

 

        Beyond his role at Voices of Equity, his commitment to global health equity is evident in his leadership of multiple campaigns with the Red Crescent, where he has worked to improve healthcare accessibility and provide humanitarian relief. At Cornell, he works on the education subteam of Cornell Assistive Technologies, where he takes part in workshops teaching families how to modify toys for children with disabilities and contributes to the development of assistive solutions. His dedication to scientific advancement is reflected in his neuroregeneration research in the Lin Lab, where he explores the underlying mechanisms of peripheral nervous system regeneration in efforts to develop interventions for neurological disorders and trauma.

 

        Zaid's extensive experiences in leadership, healthcare, and research guide his work at Voices of Equity, driving initiatives that foster long-term, structural improvements in healthcare accessibility and equity.`,
        email: "zaid@voicesofequity.org",
        linkedin: "https://www.linkedin.com/in/zaid-al-shoha/"
      },
      {
        id: "eliza-dow",
        name: "Eliza Dow",
        role: "National Director of Education",
        image: "/eliza.jpg",
        shortBio: "Eliza Dow is a junior at Cornell University, studying Biology and Society..",
        fullBio: `Eliza Dow is a junior at Cornell University, studying Biology and Society in the College of Arts and Sciences. She is deeply passionate about health equity, particularly in the context of inclusive clinical trial practices and policies that improve healthcare outcomes for historically disadvantaged populations. Eliza hopes to use her passion to educate others on equitable practices within and beyond 
        healthcare. She aims to teach future healthcare professionals to recognize how policies and practices can either help or harm their patients, empower patients to understand and advocate for their rights, and drive meaningful change in medicine by highlighting critical perspectives on healthcare and health equity.

        At Voices of Equity, Eliza serves as the National Director of Education and the Director of Education for the Cornell chapter. In these roles, she develops an expansive curriculum, educational modules, and resources designed to foster engaging and practical learning experiences. Her work ensures that Voices of Equity members—and the communities they reach—gain a deeper understanding of health equity, emphasizing its 
        relevance not only in healthcare but in all aspects of life.

        Beyond her work with Voices of Equity, Eliza is a certified EMT and has volunteered in hospital settings. She is also an editor for The Healthcare Review at Cornell University, a member of the pre-medical fraternity Phi Delta Epsilon, and plays for Cornell Women's Club Lacrosse. Additionally, she previously served as the Vice President of Member Education for Cornell's Delta Gamma sorority. With extensive experience in
        developing educational materials and teaching about diverse communities, she brings invaluable expertise to Voices of Equity's mission.`,
        email: "Ed497@cornell.edu",
        linkedin: "https://www.linkedin.com/in/eliza-dow-44815324a/"
      },
      {
        id: "adam-jac",
        name: "Adam Jac",
        role: "National Director of Philanthropy",
        image: "/adam-new.jpg",
        shortBio: "Adam is committed to leverage philanthropy, research...",
        fullBio: `Adam Jac is an undergraduate student at Cornell University, studying Biological Sciences with plans to complete a master's in Biomedical Engineering before pursuing medical school.
        
        Passionate about surgery and advancing health equity, Adam is committed to leveraging philanthropy, research, and clinical experience to drive meaningful change in healthcare access and outcomes.
        As the Director of Philanthropy at Voices of Equity, Adam leads national philanthropic initiatives that align with the organization's mission to address systemic health disparities. 
        
        He designs and oversees large-scale fundraising campaigns, supports national projects and chapter activities, and collaborates with chapters to execute impactful philanthropic events. Additionally, he plays a key role in developing 
        partnerships with organizations that support Voices of Equity's philanthropic goals, ensuring sustainable funding for health equity initiatives.

        Beyond his work at Voices of Equity, Adam has extensive clinical and research experience. He is a certified EMT and has worked in primary care settings, gaining first hand exposure to the challenges patients face in accessing 
        care. He conducts clinical research with the Department of Plastic Surgery at Beth Israel Deaconess Medical Center and has started a project at the DeLisa Research Group at Cornell, where he has received two grants to continue 
        testing ubiquibodies in cancer research. His diverse experiences in medicine, research, and philanthropy fuel his commitment to creating tangible solutions that bridge gaps in healthcare access.`,
        email: "Aj439@cornell.edu",
        linkedin: "https://www.linkedin.com/in/adam-jac-41a833299/"
      },
      {
        id: "jennifer-zhu",
        name: "Jennifer Zhu",
        role: "National Director of Media",
        shortBio: "Jennifer's experience in healthcare, media, and leadership...",
        image: "/jennifer-zhu-new.jpg",
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
        Jennifer's experience in healthcare, media, and leadership has prepared her well to address
        healthcare disparities by supporting the missions and goals for Voices of Equity`,
        email: "Jjz57@cornell.edu",
        linkedin: "https://www.linkedin.com/in/jennifer-zhu-a741221a8/"
      },
      {
        id: "grace-chen",
        name: "Grace Chen",
        role: "National Director of Outreach",
        image: "/grace-new.jpg",
        shortBio: "Grace works to create lasting positive change..",
        fullBio: `Grace Chen is a sophomore at Cornell University and a Meinig Family Cornell National Scholar. She serves as the National Director of Outreach for Voices of Equity, where she leads national expansion efforts, maintains communication across undergraduate chapters, and works to build sustainable outreach structures that support health equity initiatives at scale.

        Grace is deeply interested in the intersection of science, policy, and health equity. She conducts plant developmental biology research in the Roeder Lab, studying iron and reactive oxygen species (ROS) interactions and their role in mitochondrial dysfunction – mechanisms that parallel those implicated in neurodegenerative diseases such as Alzheimer’s. 
        
        In addition, Grace is also a Policy and Practices Subteam Lead for Cornell iGEM, where she conducts interview-based research with policy experts to examine the ethical, regulatory, and societal implications of synthetic biology. Across her research and leadership roles, Grace is motivated by a commitment to equity-driven science and believes that advancing health equity requires both rigorous scientific inquiry and intentional community-centered leadership.`,
        email: "Gyc23@cornell.edu",
        linkedin: "https://www.linkedin.com/in/grace-chen-192024245/"
      },
      {
        id: "angie-ayoubi",
        name: "Angie Ayoubi",
        role: "Think Tank Director",
        image: "/angie.PNG",
        shortBio: "Angie believes healthcare and medicine....",
        fullBio: `Angie Ayoubi is a biological engineer and premed at MIT. She is motivated by the
        challenges we face today in research and equity and is committed to making health and scientific information accessible. As a part of VoE's national initiative, Angie is excited and determined to work with other dedicated leaders and seek out this goal as she pursues a career in medicine.
        

        In addition to her study of bioengineering and responsibilities as a student-researcher, she is an active member of MIT's Biotech Group and Undergraduate Research Journal.
        She is also a member of the Martin Trust Center's Engineering Entrepreneurship
        program, and the New Engineering Education Transformation (the NEET program). In
        the NEET Living Machines track, she applies engineering principles and concepts to
        problems in the life and medical sciences through biotechnological innovation. Outside of campus, she volunteers and trains in the lab at Mass General Brigham in
        Boston, Massachusetts, and continues to support high school science research
        students back home in New York's Hudson River Valley by both coaching them in
        effective communication as well as judging at competitive fairs.


        In the past, Angie has won grand awards at Regeneron Pharmaceutical's international
        science research fair (ISEF) and the International GENIUS Olympiad. She made Arab
        America's 2025 pick for the nation's top 20 Under 20.


        Angie believes healthcare and medicine are where our progress in mathematics,
        physics, the sciences, and engineering come together for practical application in our
        society by promoting our health and well-being—fighting against humanity's biggest
        threats and for its best interests.`,
        email: "Angie_ai@mit.edu",
        linkedin: "https://www.linkedin.com/in/angie-ayoubi-67876a245/"
      }
    ] satisfies TeamMember[],
    engineers: [
      {
        id: "tyler-yang",
        name: "Tyler Yang",
        role: "Software Developer",
        image: "/tyler.jpg",
        shortBio: "Coming Soon",
        fullBio: `Coming Soon`,
        email: "tyleryang2268@gmail.com",
        linkedin: "https://www.linkedin.com/in/tyler-yang-88841b289/"
      },
      {
        id: "arnab-ghosh",
        name: "Arnab Ghosh",
        role: "Software Developer",
        image: "/tyler.jpg",
        shortBio: "Coming Soon",
        fullBio: `Coming Soon`,
        email: "arnabcare21@gmail.com",
        linkedin: "https://www.linkedin.com/in/arnab-ghosh819/"
      }
    ] satisfies Engineer[]
  }
}
