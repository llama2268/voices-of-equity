import type {
  TeamMember,
  Engineer,
  TimelineEvent,
  Media,
  Outreach,
  Education,
  Philanthrophy,
  VOX,
} from "./types";

// WHO WE ARE PAGES
export const whoWeArePage = {
  mission: {
    title: "Our Mission",
    subtitle: "Building a more equitable future in healthcare",
    introduction: {
      mainHeading:
        "VOICES OF EQUITY IS AT THE FOREFRONT OF ADVANCING HEALTH EQUITY",
      text: "We are a nationwide organization committed to addressing systemic health disparities through education, advocacy, and community engagement. Through our growing network of empowered students, healthcare professionals, and community leaders, we create opportunities for meaningful change in healthcare accessibility and outcomes.",
    },
    mission: {
      heading: "OUR MISSION",
      text: "To educate, inspire, and empower communities and future healthcare leaders on health equity issues through impactful content, storytelling, and actionable community-based initiatives.",
      keyPoints: [
        {
          title: "Educate",
          description:
            "We equip students, healthcare professionals, and communities with accessible resources, engaging workshops, and thought-provoking discussions to raise awareness about systemic health disparities and the social determinants of health.",
          icon: "📚",
        },
        {
          title: "Inspire",
          description:
            "Through storytelling, lived experiences, and expert insights, we spark passion and motivation in the next generation of changemakers, encouraging them to prioritize health equity in their careers and communities.",
          icon: "📢",
        },
        {
          title: "Empower",
          description:
            "By providing leadership opportunities, establishing campus chapters, and fostering advocacy initiatives, we empower individuals with the tools, network, and support they need to take tangible action in addressing health inequities nationwide.",
          icon: "✨",
        },
      ],
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
          title: "V — Vision",
          description:
            "Stay focused on long-term impact and health equity outcomes. Every decision we make should move us closer to a world where healthcare access is not determined by geography, race, or income.",
        },
        {
          title: "O — Opportunity for Better Health",
          description:
            "Health isn't just about doctors and hospitals — it's about the opportunities people have to stay healthy. We fight to remove barriers like lack of insurance, food insecurity, and unequal access to care.",
        },
        {
          title: "I — Impact Over Words",
          description:
            "We measure success not by what we say, but by what we do. Every initiative, event, and partnership must drive tangible outcomes for the communities we serve.",
        },
        {
          title: "C — Community First",
          description:
            "Health starts where we live, work, and gather. We listen to communities, support grassroots efforts, and ensure that solutions are created with the people they serve.",
        },
        {
          title: "E — Empowerment",
          description:
            "Inspire and enable others to lead and create change. We believe lasting impact comes from building the capacity of individuals to advocate for their own health and the health of their communities.",
        },
        {
          title: "S — Sustainability",
          description:
            "Build systems and partnerships that endure beyond any single leader, event, or academic year. Real change doesn't happen overnight — we work to create lasting systems of support.",
        },
      ],
    },
    callToAction: {
      heading: "Join Our Mission",
      text: "Together, we can create a more equitable healthcare system for all.",
      buttonText: "Get Involved",
      buttonLink: "/get-involved/chapters",
    },
  },
  history: {
    title: "Our History",
    subtitle: "The Journey of Voices of Equity",
    content: [
      "Our journey began with firsthand experiences in hospitals, community clinics, and underserved neighborhoods — both locally and globally — where the stark realities of health disparities were impossible to ignore. Whether it was witnessing patients struggle to access quality care or hearing stories of systemic barriers from healthcare professionals, the message was clear: the time for change is now.",
      "Driven by a blend of personal and professional experiences, the Voices of Equity team understood the urgency of this issue. They realized that addressing these disparities required both awareness and meaningful action—bridging the gaps between education, inspiration, and empowerment.",
      "In response, Voices of Equity was established to amplify the call for systemic change. By bringing together students, healthcare professionals, and community leaders, we created a platform to educate the next generation, share powerful stories, and equip communities with the tools to fight for equity. What started as a grassroots initiative has grown into a nationwide movement, uniting diverse voices around a shared mission: to dismantle barriers to health and create a world where everyone has the opportunity to thrive.",
      "Today, Voices of Equity stands as a testament to the power of collective action. Together, we're building awareness, inspiring change, and empowering communities—one story, one initiative, and one VOICE at a time.",
    ],
    timeline: [
      {
        year: "DEC 2024",
        title: "VoE Founded",
        description:
          "Voices of Equity is officially established, laying the foundation for a nationwide movement to advance health equity through education, advocacy, and community action",
        side: "right",
      },
      {
        year: "JAN 2025",
        title: "Cornell Chapter Established",
        description:
          "The first undergraduate chapter is launched at Cornell University, serving as a model for future chapters and student-led initiatives",
        side: "left",
      },
      {
        year: "FEB 2025",
        title: "Curriculum & Educational Development Begins",
        description:
          "Voices of Equity begins developing a structured health equity curriculum, creating accessible educational materials to guide discussions and empower student leaders",
        side: "right",
      },
      {
        year: "MAR 2025",
        title: "National Expansion Begins",
        description:
          "Voices of Equity kicks off its expansion efforts, recruiting student leaders and forming partnerships to establish chapters at universities across the country.",
        side: "left",
      },
      {
        year: "JUN 2025",
        title: "Foundations Solidified, Future in Motion",
        description:
          "As VoE closes out its founding year, over 30 active chapters are established nationwide, a national leadership model is fully implemented, and VoE's boots-on-the-ground communities based initiatives begin shaping the future of student-led health equity",
        side: "right",
      },
      {
        year: "AUG 2025",
        title: "Leadership Onboarding Intensive",
        description:
          "In August 2025, Voices of Equity hosted its first national onboarding intensive, bringing together over 100 student leaders from 40+ undergraduate institutions. Across two days of training, presidents and committee directors were equipped with the resources, expectations, and networks needed to lead their chapters effectively. This milestone marked the formal launch of a unified national structure and the next stage of VoE's growth.",
        side: "left",
      },
      {
        year: "OCT 2025",
        title: "National Health Equity Week",
        description:
          "Our first major nationwide initiative launched with incredible momentum. Over the course of the week, we raised over $43,000, distributed $5,000+ in grants, engaged 50+ campuses, and mobilized 1,000+ members to take action in their communities.",
        side: "right",
      },
    ] satisfies TimelineEvent[],
    conclusion:
      "What began with a small team and a bold vision has now grown into a national movement. With chapters active across the country and a growing network of student leaders, Voices of Equity is building the infrastructure for long-term impact. As we expand into new communities, launch innovative initiatives, and develop the next generation of health equity leaders, our commitment remains the same: dismantling barriers to health through education, advocacy, and community-based action.",
  },
  team: {
    title: "Our Team",
    subtitle: "Meet the people behind Voices of Equity",
    formerMembers: [
      {
        id: "caleb-suh",
        name: "Caleb T. Suh",
        role: "Co-Founder & Executive Director",
        image: "/caleb-new-4.jpg",
        shortBio:
          "Caleb T. Suh serves as the Co-Founder & Executive Director of Voices of Equity..",
        fullBio: `Caleb T. Suh serves as the Co-Founder & Executive Director of Voices of Equity, where he oversees strategic direction, internal operations, and national chapter development. He leads national operations, oversees organizational growth strategy, and directs internal systems that support long-term scale and execution. His work focuses on clear execution, measurable outcomes, and long-term capacity building.

        Caleb brings extensive leadership experience to his role. As a cadet at the United States Military Academy, he ranked in the top 1% of his class and was selected to serve as the Regimental Commander for Cadet Basic Training, leading over 300 cadet leaders and overseeing the training of 1,500 cadets in mission-critical operations. Beyond his academic and military achievements, Caleb founded Operation Golden Shield, a nonprofit organization dedicated to providing immediate relief to individuals and Veterans experiencing homelessness and food insecurity. These roles reinforced his commitment to service, operational excellence, and the power of collaboration in addressing systemic challenges.

        His leadership extends across academic, nonprofit, and operational domains. He has led national service initiatives, authored peer-reviewed research, and managed large-scale, cross-institutional projects within data coordination and translational science. At Voices of Equity, he applies these experiences to grow a mission-driven team focused on building practical, scalable solutions to systemic challenges.`,
        email: "Suh.t.caleb@outlook.com",
        linkedin: "https://www.linkedin.com/in/caleb-suh-028a956a/",
      },
    ] satisfies TeamMember[],
    members: [
      {
        id: "zaid-al-shoha",
        name: "Zaid Al-Shoha",
        role: "Co-Founder & Executive Director",
        image: "/zaid-headshot.png",
        shortBio:
          "Zaid Al-Shoha leads a national, student-led movement working to address disparities in healthcare access and outcomes.",
        fullBio: `As Co-Founder & Executive Director of Voices of Equity, Zaid Al-Shoha leads a national, student-led movement working to address disparities in healthcare access and outcomes. He is responsible for the organization's strategic direction, building collaborative partnerships, and developing community-centered solutions that reach students and communities nationwide. Through this work, he strives to bridge gaps in access to quality care, inspire future healthcare leaders, and develop scalable approaches to inequity within the medical field. Zaid is a recipient of the Arab America Foundation's 30 Under 30.

        Zaid is an undergraduate at Cornell University studying Biological Sciences on the premedical track, with aspirations in academic medicine. At Cornell, he leads a health equity research team investigating frameworks for undergraduate-led community health work. He also conducts cardiac surgery outcomes research at Yale School of Medicine, neuroregeneration research in the Lin Lab, and translational cancer research at the National Institutes of Health. He is interested in advancing public health through academic medicine by developing innovative, scalable approaches to improving health outcomes in underserved communities.`,
        email: "zalshoha29@gmail.com",
        linkedin: "https://www.linkedin.com/in/zaid-al-shoha/",
      },
      {
        id: "jimmy-quinlan",
        name: "Jimmy Quinlan",
        role: "Deputy Executive Director",
        image: "/jimmy.jpg",
        shortBio:
          "Jimmy Quinlan serves as a student leader, organizer, and builder across...",
        fullBio: `James R. Quinlan serves as a student leader, organizer, and builder across multiple mission-driven initiatives. He is the Founder and former President of the Voices of Equity undergraduate chapter at Cornell, where he helped in developing the Voices of Equity Undergraduate Framework and expanding Voices of Equity across the Cornell campus. 

        In this role, he focuses on translating mission into action through clear organization, thoughtful outreach, and sustainable systems that allow student leaders to execute meaningful work at scale.

        Outside of Voices of Equity, James is a practicing EMT and Firefighter, serving his community in fast-paced, high-responsibility environments that demand composure, teamwork, and decisive action. Through this work, he has developed a strong sense of accountability, clear communication under pressure, and an ability to translate training into meaningful service during moments of crisis. 
        These experiences reflect his broader commitment to service, preparedness, and showing up for others when it matters most, qualities that shape both his leadership and his approach to his academic and professional goals.
        At the core of his work is a commitment to equity, service, and thoughtful execution — using student leadership as a platform to build practical, scalable initiatives that strengthen both campus community and broader social impact.
        .`,
        email: "voicesofequity.cornell@gmail.com",
        linkedin: "",
      },
      {
        id: "devon-cartwright",
        name: "Devon Cartwright",
        role: "Executive Chief of Staff",
        image: "/team/devon-cartwright.png",
        shortBio:
          "Devon Cartwright is an undergraduate engineering student at the University of Arkansas committed to advancing healthcare through research, leadership, and community service.",
        fullBio: `Devon Cartwright is an undergraduate engineering student at the University of Arkansas committed to advancing healthcare through research, leadership, and community service. He conducts research in regenerative medicine and biomaterials, investigating volumetric muscle loss injuries using advanced microscopy techniques and extracellular matrix based biomaterial fibers for tissue engineering applications. Through this work, he hopes to contribute to the development of novel approaches to tissue and muscle regeneration.

        Beyond the laboratory, he serves as a peer mentor for first-year engineering students, helping incoming students navigate the transition to college through academic guidance, community building, and personal and professional development. He also serves as the initiate trainer for Tau Beta Pi, the engineering honor society, where he leads the onboarding and professional development of new members, fostering a culture of scholarship, integrity, and service while helping initiates build connections within the engineering community.

        Outside of campus, Devon works at an independent family pharmacy in Fayetteville. This pharmacy hosts Blood drives, educational outreach events, and other programs that improve access to health resources and strengthen connections within the local community. These experiences have reinforced his commitment to serving others while providing firsthand insight into the role of community-based healthcare.`,
        email: "",
        linkedin: "",
      },
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
        linkedin: "https://www.linkedin.com/in/tyler-yang-88841b289/",
      },
      {
        id: "arnab-ghosh",
        name: "Arnab Ghosh",
        role: "Software Developer",
        image: "/tyler.jpg",
        shortBio: "Coming Soon",
        fullBio: `Coming Soon`,
        email: "arnabcare21@gmail.com",
        linkedin: "https://www.linkedin.com/in/arnab-ghosh819/",
      },
    ] satisfies Engineer[],
    Outreach: [
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
        linkedin: "https://www.linkedin.com/in/grace-chen-192024245/",
      },
      {
        id: "monique-lavoie",
        name: "Monique Lavoie",
        role: "Outreach Undergraduate Liaison",
        image: "/Monique.jpg",
        shortBio:
          "Monique Lavoie is a junior Biology major with double minors in...",
        fullBio: `Monique Lavoie is a junior Biology major with double minors in Spanish and Chemistry from Old Lyme, Connecticut. She serves as the Undergraduate Liaison for the Voices of Equity National Outreach Committee.


        She brings extensive experience coordinating outreach initiatives, including her role as a Site Coordinator for the largest student-led undergraduate Alternative Spring Break program in the country. In addition, she currently serves as the Outreach Director and President of the Howard University Voices of Equity Chapter. Health equity is central to her commitment to community service, and she is deeply driven by the belief that everyone deserves access to the resources necessary to thrive.
`,
        email: "",
        linkedin: "",
      },
      {
        id: "nina-mananu",
        name: "Nina Mananu",
        role: "Outreach Head of Public Relations",
        image: "/team/nina-mananu.png",
        shortBio:
          "Nina Mananu is a Health Sciences student at Ithaca College focused on health data analytics, compassion, and equity.",
        fullBio: `I'm Nina Mananu, a Health Sciences student at Ithaca College, designing my own major in Health Data Analytics with a pre-Physician Assistant track, because I believe the future of healthcare lies at the intersection of data, compassion, and equity. As a Certified Nursing Assistant in the Telemetry Unit at Cayuga Medical Center, I witness the direct impact of health disparities on patients. In the Kari Bossard-Stoos Lab, I analyze antibiotic resistance data that reveals larger patterns of environmental and healthcare inequity. These experiences taught me that understanding health data is only half the battle, communicating it accessibly is what creates real change.

        That's why my work extends beyond the hospital and lab. As Director of Community Outreach for Voices of Equity at Ithaca College, Physician Assistant Chair for IC Pre-Health Society, Vice President of the African Student Association, Senior Editor for HerCampus, and a volunteer with New York Cares, I've learned that representation matters. In healthcare leadership, in the media, and in who gets to tell their own story. Growing up in NYC, I saw how information gaps become barriers to care, and now every role I hold is part of dismantling those barriers. When I'm not working, writing, or leading, you'll find me cheering for Ithaca College, running, reading, crocheting, or chasing warm weather wherever I can find it.`,
        email: "",
        linkedin: "",
      },
      {
        id: "manushree-navaneethakrishnan",
        name: "Manushree Navaneethakrishnan",
        role: "National Recruitment Chair of Outreach",
        image: "/team/manushree-navaneethakrishnan.png",
        shortBio:
          "Manushree Navaneethakrishnan leads national recruitment initiatives and supports chapter expansion efforts.",
        fullBio: `Manushree Navaneethakrishnan is a senior at Vanderbilt University majoring in Medicine, Health & Society and Gender & Sexuality Studies. She serves as the National Outreach Chair of Recruitment for Voices of Equity, where she leads national recruitment initiatives, supports chapter expansion efforts, and works to strengthen connections between undergraduate advocates committed to advancing health equity.

        Beyond Voices of Equity, Manushree is deeply involved in community engagement, health advocacy, and student leadership. She serves as a Peer Educator with Project Safe and is a former Opinion Editor and current Games Editor of The Vanderbilt Hustler. She also serves as Editorial Director of the Nashville Student Union News Network (SUNN), working with student journalists across Tennessee to amplify youth perspectives on issues affecting their communities. Passionate about the intersection of medicine, storytelling, and health equity, Manushree believes that understanding and communicating people's experiences is essential to creating meaningful change. Through journalism, advocacy, and community engagement, she seeks to elevate underrepresented voices and examine the social factors that shape health outcomes. She hopes to pursue a career in medicine grounded in compassionate care, public engagement, and a commitment to advancing health equity.`,
        email: "",
        linkedin: "",
      },
    ] satisfies Outreach[],
    Education: [
      {
        id: "eliza-dow",
        name: "Eliza Dow",
        role: "National Director of Education",
        image: "/eliza.jpg",
        shortBio:
          "Eliza Dow serves as the National Director of Education. In these roles..",
        fullBio: `Eliza Dow serves as the National Director of Education. In these roles, she develops an expansive curriculum, educational modules, and resources designed to foster engaging and practical learning experiences. With the Associate Director of Education Vijay, she oversees the Equity Archive. Her work ensures that Voices of Equity members—and the communities they reach—gain a deeper understanding of health equity, emphasizing its relevance not only in healthcare but in all aspects of life.


        She will be graduating from Cornell University in May 2026, and is intending on pursuing a Masters in Health Administration immediately after graduation. She is currently studying Biology and Society in the College of Arts and Sciences. She is deeply passionate about health equity, particularly in the context of inclusive clinical trial practices and policies that improve healthcare outcomes for historically disadvantaged populations. Eliza hopes to use her passion to educate others on equitable practices within and beyond healthcare. She aims to teach future healthcare professionals to recognize how policies and practices can either help or harm their patients, empower patients to understand and advocate for their rights, and drive meaningful change in medicine by highlighting critical perspectives on healthcare and health equity.


        Beyond her work with Voices of Equity, she has held many leadership positions, including having been a biochemistry teaching assistant, currently a lead volunteer at the Emergency Department at Cayuga Medical Center, and captain of the Cornell Women’s Club Lacrosse team. At her sorority, the Chi chapter of Delta Gamma at Cornell, she has served as Vice President of Member Education, junior Honor Board member, and director of special events.  She is also a certified EMT, an editor for The Healthcare Review at Cornell University, and a member of the pre-medical fraternity Phi Delta Epsilon. Additionally, she previously served as the. With extensive experience in developing educational materials, teaching about diverse communities, and efficient team management skills, she brings invaluable expertise to Voices of Equity's mission.
`,
        email: "Ed497@cornell.edu",
        linkedin: "https://www.linkedin.com/in/eliza-dow-44815324a/",
      },
      {
        id: "vijay-jagarapu",
        name: "Vijay Jagarapu",
        role: "Associate Director of Education",
        image: "/vijay.png",
        shortBio:
          "Vijay Jagarapu is an undergraduate at Cornell University studying..",
        fullBio: `Vijay Jagarapu is an undergraduate at Cornell University studying Biological Sciences on the premedical track, with a concentration in computational biology. He aims to learn more about emerging neurotechnologies to improve care for individuals with psychiatric and neurological disorders.


    Outside of his studies, Vijay volunteers as a firefighter and EMT and works directly with patients with psychiatric disorders in a hospital setting. At the Cornell Life History Lab, he studies how early-life environments, stress, and social nutrition shape brain development and behavior.


    Vijay is passionate about making healthcare more accessible. Through Voices of Equity, he serves as the Associate Director of Education and is responsible for building the Equity Archive to expand access to health equity information. Through the integration of medicine and engineering, Vijay aspires to develop innovative solutions that broaden access to care.

`,
        email: "",
        linkedin: "",
      },
      {
        id: "samantha-shick",
        name: "Samantha Shick",
        role: "Education Undergraduate Liaison",
        image: "/team/samantha-shick.png",
        shortBio:
          "Samantha Shick serves as the Educational Undergraduate Liaison, supporting educational directors nationwide.",
        fullBio: `Samantha serves as the Educational Undergraduate Liaison, where she coordinates with National Director of Education, Eliza, and Assistant National Director, Vjay, to support and oversee all of VOE’s educational directors nationwide. Her work ensures smooth communication between chapter directors and the educational national board, helping ensure cohesive programming and logistical collaboration.

      Samantha is a freshman studying psychology on the pre medical track at the College of Arts and Sciences at Cornell University. She is interested in holistic views of health, aiming to intersect her interest in the study of human interactions with their physiological states through the lens of regenerative and preventative medicine. She is committed to the idea that patient wellness and adequate care extend beyond physiologies, but rather are extensive toward their mental, situational, and health equity access.

      Beyond her work at Voices of Equity, Samantha remains committed to serving and understanding her surrounding communities. She serves as Cornell’s American Red Cross Fundraiser Chair, supporting humanitarian relief efforts, and trains as a probationary officer with the Varna Fire Company, a volunteer first responder department in Tompkins County. She works with the athletic trainers on Division One athletes under Cornell’s Division One Athletics Department, where she is certified to practice preliminary sports medical techniques, is a member of the pre-medical fraternity Phi Delta Epsilon, and is a part of the club figure skating team.`,
        email: "",
        linkedin: "",
      },
    ] satisfies Education[],
    Media_team: [
      {
        id: "jennifer-zhu",
        name: "Jennifer Zhu",
        role: "National Director of Media",
        shortBio:
          "Jennifer Zhu serves as the National Director of Media for Voices of Equity...",
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
        linkedin: "https://www.linkedin.com/in/jennifer-zhu-a741221a8/",
      },
      {
        id: "gbemi-soneye",
        name: "Gbemi Soneye",
        role: "Media Undergraduate Liaison",
        shortBio: "Gbemi Soneye is a Karsh STEM Scholar and Honors student..",
        image: "/gbemi.jpg",
        fullBio: `Gbemi Soneye is a Karsh STEM Scholar and Honors student at Howard University, where she pursues interdisciplinary training at the intersection of neuroscience, public health, and translational science.
        As a Karsh Scholar, a distinction awarded to outstanding students demonstrating exceptional promise in science and leadership, Gbemi has cultivated a foundation in research, service, and innovation. She is deeply 
        committed to understanding the structural determinants of health and translating knowledge into actionable solutions for health disparities.
        
        

        Gbemi brings extensive experience in research, leadership, and science communication. She has conducted neuroscience and public health research at MD Anderson Cancer Center and Howard University
        
        


        Across her work, Gbemi strives to integrate research, policy, and community engagement to drive meaningful, equity-focused change in the field of public health. 
        `,
        email: "",
        linkedin: "",
      },
    ] satisfies Media[],
    Philanthrophy: [
      {
        id: "adam-jac",
        name: "Adam Jac",
        role: "National Director of Philanthropy",
        image: "/team/adam-jac-updated.png",
        shortBio:
          "Adam Jac is a masters student at Cornell University in Biomedical Engineering...",
        fullBio: `Adam Jac is a masters student at Cornell University in Biomedical Engineering and plans on pursuing medical school. 
        He is passionate about surgery and advancing health equity, Adam is committed to leveraging philanthropy, research, and clinical 
        experience to drive meaningful change in healthcare access and outcomes. 
        As the National Director of Philanthropy at Voices of Equity, Adam leads national philanthropic initiatives such as National Health 
        Equity Week and the CARE packet project that align with the organization's mission to address systemic health disparities. 
        He designs and oversees large-scale fundraising campaigns, supports national projects and chapter activities, and collaborates with 
        chapters to execute impactful philanthropic events. 
        Additionally, he plays a key role in developing partnerships with organizations that support Voices of Equity's philanthropic goals,
        ensuring sustainable funding for health equity initiatives.



        Beyond his work at Voices of Equity, Adam has extensive clinical and research experience. He is a certified EMT and has worked in primary
         care settings, gaining first hand exposure to the challenges patients face in accessing care. 
        He conducts clinical research with the Department of Plastic Surgery at Beth Israel Deaconess Medical Center and has started a project at 
        the DeLisa Research Group at Cornell, where he has received two grants to continue testing ubiquibodies in cancer research. 
        His diverse experiences in medicine, research, and philanthropy fuel his commitment to creating tangible solutions that bridge gaps in healthcare access.
        `,
        email: "Aj439@cornell.edu",
        linkedin: "https://www.linkedin.com/in/adam-jac-41a833299/",
      },
      {
        id: "lucas-santos",
        name: "Lucas Santos",
        role: "Philanthropy Undergraduate Liaison",
        image: "/lucas.PNG",
        shortBio:
          "Lucas Santos is a third-year Biology major with minors in Chemistry and Spanish at Howard University...",
        fullBio: `
        Lucas Santos is a third-year Biology major with minors in Chemistry and Spanish at Howard University. She is deeply committed to advancing health equity through community-based initiatives, culturally competent care, and public health advocacy.


        Lucas currently serves as the National Philanthropy Liaison and the Director of Philanthropy for her chapter, where she leads fundraising efforts to support local health equity initiatives and acts as a liaison between undergraduate chapters and the national executive board. Her work focuses on mobilizing resources to address structural health disparities and supporting mission-aligned community organizations.


        Her academic and experiential background includes global health and medical Spanish training, with experience in patient communication and public health challenges in underserved and rural communities. Lucas has participated in biomedical research, including published work on cardiovascular biomechanics, and remains actively engaged in service through food access programs, science education, and equity-focused student organizations.


        Through her interdisciplinary training and leadership, Lucas is dedicated to promoting equitable access to healthcare and improving health outcomes for marginalized populations.

        `,
        email: "",
        linkedin: "",
      },
    ] satisfies Philanthrophy[],
    VOX: [
      {
        id: "rhea-saranth",
        name: "Rhea Saranath",
        role: "VOX Equity Co-Director",
        image: "/rhea.jpg",
        shortBio:
          "Rhea Saranath is a student at Tulane University studying Public Health...",
        fullBio: `Rhea Saranath is a student at Tulane University studying Public Health, on the Pre-Med track. 
        Her academic and professional interests sit at the intersection of health equity, science, and policy, 
        shaped by experiences spanning clinical medicine, global community health, neuroscience research, and sustainability-focused business development. 
        From founding and scaling a nonprofit addressing hygiene poverty to working in sports medicine with Tulane Athletics and conducting neuroimaging research on premature brain injury, Rhea’s work reflects a consistent commitment to translating knowledge into impact.
         She is particularly drawn to spaces where data, compassion, and systems-level thinking converge—whether in public health, medicine, or global development—and approaches her work with both rigor and humanity. `,
        email: "",
        linkedin: "",
      },
      {
        id: "conner-entenberg",
        name: "Conner Entenberg",
        role: "VOX Equity Co-Director",
        image: "/conner.jpg",
        shortBio:
          "Conner Entenberg is a pre-medical student at Binghamton University...",
        fullBio: `Conner Entenberg is a pre-medical student at Binghamton University with a focus on bridging biomedical research and health equity. 
        His research experience spans immunology and oncology, and includes his time investigating chemotherapy's effects on thymic function at Albert Einstein College of Medicine, his work researching anti-tuberculosis drugs’ impact on the liver, 
        and his use of bioprinted tumor models to better understand immuno-oncology. He also works directly with patients as a dental assistant. 
        Both clinically and in a laboratory, Conner's work centers around translating scientific advances into improved healthcare outcomes for all patients, especially underserved populations. `,
        email: "",
        linkedin: "",
      },
      {
        id: "jimmy-quinlan-vox",
        name: "Jimmy Quinlan",
        role: "Acting VOX Equity Exeuctive Director",
        image: "/jimmy.jpg",
        shortBio:
          "Jimmy Quinlan serves as a student leader, organizer, and builder across...",
        fullBio: `James R. Quinlan serves as a student leader, organizer, and builder across multiple mission-driven initiatives. He is the Founder and former President of the Voices of Equity undergraduate chapter at Cornell, where he helped in developing the Voices of Equity Undergraduate Framework and expanding Voices of Equity across the Cornell campus. 

        In this role, he focuses on translating mission into action through clear organization, thoughtful outreach, and sustainable systems that allow student leaders to execute meaningful work at scale.

        Outside of Voices of Equity, James is a practicing EMT and Firefighter, serving his community in fast-paced, high-responsibility environments that demand composure, teamwork, and decisive action. Through this work, he has developed a strong sense of accountability, clear communication under pressure, and an ability to translate training into meaningful service during moments of crisis. 
        These experiences reflect his broader commitment to service, preparedness, and showing up for others when it matters most, qualities that shape both his leadership and his approach to his academic and professional goals.
        At the core of his work is a commitment to equity, service, and thoughtful execution — using student leadership as a platform to build practical, scalable initiatives that strengthen both campus community and broader social impact.
        .`,
        email: "voicesofequity.cornell@gmail.com",
        linkedin: "",
      },
    ] satisfies VOX[],
  },
};
