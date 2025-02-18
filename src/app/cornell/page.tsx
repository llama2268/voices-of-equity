'use client';

import PageLayout from '../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { cornellChapter } from '@/content/content';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Callout } from '@/components/ui/Callout';

export default function CornellPage() {
  return (
    <PageLayout title="Cornell Chapter">
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-700">
          Coming Soon
        </h1>
      </div>
    </PageLayout>
  );
}

// export default function CornellChapterPage() {
//   const { title, subtitle, hero, introduction, initiatives, leadership, impact, getInvolved, contact } = cornellChapter;
  
//   return (
//     <PageLayout title={title} subtitle={subtitle}>
//       {/* Hero Section */}
//       <div className="relative w-full h-[70vh] overflow-hidden">
//         <motion.img
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//           src={hero.image}
//     alt="Cornell Chapter"
//     className="object-cover w-full h-full"
//   />
//         <div className="absolute inset-0 bg-black/40" />
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-white"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full border-4 border-[#B31B1B] shadow-xl overflow-hidden"
//       >
//         <img 
//               src={hero.logo} 
//           alt="Cornell Logo" 
//               className="w-full h-full object-contain bg-white"
//             />
//           </motion.div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
//             {title}
//           </h1>
//           <p className="font-serif text-xl md:text-2xl text-white/90 mx-4 italic">
//             {hero.tagline}
//           </p>
//         </motion.div>
//       </div>

//       {/* Introduction */}
//       <Section spacing="xl">
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <p className="font-serif text-lg text-primary-600 mb-3 italic">
//             Our Story
//           </p>
//           <h2 className="text-3xl font-bold mb-6">{introduction.heading}</h2>
//           <blockquote className="mb-12">
//             <p className="font-serif text-xl md:text-2xl text-gray-800 italic leading-relaxed">
//               {introduction.text}
//             </p>
//           </blockquote>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {introduction.stats.map((stat, index) => (
//             <Card key={index} className="text-center">
//               <div className="text-4xl font-bold text-gradient-primary mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-xl font-semibold mb-1">{stat.label}</div>
//               <div className="text-gray-600">{stat.description}</div>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       {/* Initiatives */}
//       <Section variant="alternate">
//         <div className="text-center mb-12">
//           <p className="font-serif text-lg text-primary-600 mb-3 italic">
//             Our Programs
//           </p>
//           <h2 className="text-3xl font-bold mb-4">{initiatives.heading}</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             {initiatives.description}
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {initiatives.items.map((initiative, index) => (
//             <Card key={index} variant="interactive" className="overflow-hidden">
//               <div className="h-48 mb-4 overflow-hidden">
//                 <img
//                   src={initiative.image}
//                   alt={initiative.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
//               <p className="text-gray-600 mb-4">{initiative.description}</p>
//               <p className="font-serif text-sm text-primary-600 italic">
//                 {initiative.date}
//               </p>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       <Section spacing="sm">
//         <div className="max-w-4xl mx-auto">
//           <Callout
//             eyebrow="Success Story"
//             title="Community Health Initiative"
//             description="Learn how our Cornell chapter's health literacy program has impacted over 500 community members."
//             link={{
//               text: "Read Full Story",
//               href: "/what-we-do/impact/cornell-health-literacy"
//             }}
//             variant="impact"
//           />
//         </div>
//       </Section>

//       {/* Leadership */}
//       <Section>
//         <div className="text-center mb-12">
//           <p className="font-serif text-lg text-primary-600 mb-3 italic">
//             Meet Our Team
//           </p>
//           <h2 className="text-3xl font-bold mb-4">{leadership.heading}</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             {leadership.description}
//           </p>
//         </div>
//         <div className="grid md:grid-cols-4 gap-8">
//           {leadership.members.map((member, index) => (
//             <Link key={index} href={member.link}>
//               <Card
//                 variant="interactive"
//                 className="text-center"
//               >
//                 <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <Heading level={3} className="mb-1">
//                   {member.name}
//                 </Heading>
//                 <div className="text-primary-500 font-medium mb-2">
//                   {member.role}
//                 </div>
//                 <p className="text-gray-600">
//                   {member.bio}
//                 </p>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </Section>

//       {/* Impact */}
//       <Section variant="alternate">
//         <Heading level={2} className="text-center mb-12">
//           {impact.heading}
//         </Heading>
//         <div className="grid md:grid-cols-3 gap-8">
//           {impact.metrics.map((metric, index) => (
//             <Card key={index} className="text-left">
//               <Heading level={3} className="mb-6 text-center text-primary-600">
//                 {metric.category}
//               </Heading>
//               <ul className="space-y-4">
//                 {metric.achievements.map((achievement, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="text-primary-500 mr-3 text-3xl leading-none mt-1">•</span>
//                     <span className="text-gray-700 text-lg leading-tight">
//                       {achievement}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </Card>
//           ))}
//         </div>
//       </Section>

//       {/* Get Involved */}
//       <Section variant="highlight">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="font-serif text-lg text-primary-600 mb-3 italic">
//             Join Us
//           </p>
//           <h2 className="text-3xl font-bold mb-4">{getInvolved.heading}</h2>
//           <p className="font-serif text-xl text-gray-800 mb-8 leading-relaxed">
//             {getInvolved.description}
//           </p>
//           <Card className="mb-8">
//             <Heading level={3} className="mb-4">
//               Application Deadline: {getInvolved.applicationInfo.nextDeadline}
//             </Heading>
//             <ul className="mb-6 space-y-2">
//               {getInvolved.applicationInfo.requirements.map((req, index) => (
//                 <li key={index} className="flex items-center justify-center">
//                   <span className="text-[#B31B1B] mr-2 text-lg">•</span>
//                   {req}
//                 </li>
//               ))}
//             </ul>
//             <Link href={getInvolved.applicationInfo.applicationLink}>
//               <Button size="lg">Apply Now</Button>
//             </Link>
//           </Card>
          
//           {getInvolved.upcomingEvents.map((event, index) => (
//             <Card key={index} variant="hover" className="text-left mb-4">
//               <Heading level={4} className="mb-2">
//                 {event.name}
//               </Heading>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <div className="text-gray-600">Date & Time</div>
//                   <div>{event.date} at {event.time}</div>
//                 </div>
//                 <div>
//                   <div className="text-gray-600">Location</div>
//                   <div>{event.location}</div>
//   </div>
// </div>
//               <Link href={event.registrationLink}>
//                 <Button variant="outline" size="sm">
//                   Register
//                 </Button>
//               </Link>
//             </Card>
//           ))}
//       </div>
//       </Section>

//       {/* Contact */}
//       <Section className="text-center">
//         <Card>
//           <Heading level={2} variant="subtle" className="mb-6">
//             Connect With Us
//           </Heading>
//           <div className="space-y-4">
//             <p className="text-lg">
//               <span className="font-semibold">Email:</span>{' '}
//               <a href={`mailto:${contact.email}`} className="text-primary-500 hover:text-primary-600">
//                 {contact.email}
//               </a>
//             </p>
//             <p className="text-lg">
//               <span className="font-semibold">Instagram:</span>{' '}
//               <a href="#" className="text-primary-500 hover:text-primary-600">
//                 {contact.socialMedia.instagram}
//               </a>
//             </p>
//             <p className="text-lg">
//               <span className="font-semibold">LinkedIn:</span>{' '}
//               <a href="#" className="text-primary-500 hover:text-primary-600">
//                 {contact.socialMedia.linkedin}
//               </a>
//             </p>
//             <p className="text-lg">
//               <span className="font-semibold">Location:</span>{' '}
//               {contact.location}
//             </p>
//       </div>
//         </Card>
//       </Section>
//     </PageLayout>
//   );
// } 