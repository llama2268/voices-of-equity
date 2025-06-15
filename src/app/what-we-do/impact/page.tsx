'use client'
import PageLayout from '../../../components/Layout/PageLayout';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ResponsiveContainer, BarChart, Bar,XAxis,YAxis,Tooltip} from 'recharts';

// Sample data for chart (impact over time)
const impactData = [
  { month: 'Jan', chapters: 5, voices: 20 },
  { month: 'Feb', chapters: 8, voices: 45 },
  { month: 'Mar', chapters: 12, voices: 70 },
  { month: 'Apr', chapters: 18, voices: 110 },
  { month: 'May', chapters: 25, voices: 150 },
  { month: 'Jun', chapters: 30, voices: 180 },
];

export default function ImpactPage() {
  const metrics = [
    { label: 'Active Chapters Worldwide', value: 30 },
    { label: 'Student Leaders in Action', value: 150 },
    { label: 'Voices Heard', value: 150000 },
    { label: 'Resources Circulated', value: 1200 },
    { label: 'Funds Raised for Equity', value: 30000, prefix: '$' },
    { label: 'VOE Scholarships Awarded', value: 5000, prefix: '$' },
    { label: 'Events Hosted', value: 85 },
    { label: 'Volunteer Hours', value: 12000 },
  ];

  return (
    <PageLayout title="Our Impact" subtitle="Making real change in communities">
      <Section>
        <div className="min-h-screen flex flex-col items-center justify-start">
          <h1 className="text-6xl md:text-8xl font-bold text-center text-primary-600">
            Coming Soon
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Stay tuned for our impact dashboard.
          </p>
        </div>
      </Section>
    </PageLayout>
    // <PageLayout title="Our Impact" subtitle="Making real change in communities">
    //   <Section>
    //     <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
    //       <motion.h1
    //         className="text-4xl md:text-5xl font-bold text-center"
    //         initial={{ opacity: 0, y: -20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.8 }}
    //       >
    //         Impact Tracker Dashboard
    //       </motion.h1>


    //       {/* Dynamic Metrics Grid */}
    //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    //         {metrics.map(({ label, value, prefix }) => (
    //           <motion.div
    //             key={label}
    //             className="p-6 bg-white rounded-2xl shadow-lg text-center"
    //             whileHover={{ scale: 1.05 }}
    //           >
    //             <p className="text-3xl font-extrabold text-primary-600">
    //               <CountUp end={value} duration={2} prefix={prefix || ''} separator="," />
    //             </p>
    //             <p className="mt-2 text-base font-medium text-gray-700">
    //               {label}
    //             </p>
    //           </motion.div>
    //         ))}
    //       </div>

    //       {/* Impact Over Time Chart */}
    //       <div className="bg-white rounded-2xl shadow-lg p-8">
    //         <h2 className="text-2xl font-bold text-center mb-4">
    //           Impact Growth Over Time
    //         </h2>
    //         <ResponsiveContainer width="100%" height={300}>
    //           <BarChart data={impactData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
    //             <XAxis dataKey="month" />
    //             <YAxis />
    //             <Tooltip />
    //             <Bar dataKey="chapters" name="Chapters" />
    //             <Bar dataKey="voices" name="Voices (K)" />
    //           </BarChart>
    //         </ResponsiveContainer>
    //       </div>

    //       {/* Partner Organizations */}
    //       <div className="space-y-4 justify-center">
    //         <h2 className="text-3xl font-bold text-center">
    //           Partner Organizations
    //         </h2>
    //         <p className="text-lg text-center text-gray-600">
    //           Our growing coalition of institutions and partners committed to equity.
    //         </p>
    //         <div className="flex justify-center gap-8 overflow-x-auto py-4 items-center">
    //           {[
    //             { src: '/cornell-center-he.png', alt: 'Cornell Center for Health Equity' },
    //             { src: '/ymca-logo.png', alt: 'YMCA' },
    //             // add more partners here
    //           ].map(({ src, alt }) => (
    //             <div key={alt} className="relative w-48 h-32 flex-shrink-0">
    //               <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </Section>
    // </PageLayout>
  );
}
