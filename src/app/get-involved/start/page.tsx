import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';
import Link from 'next/link';

export default function StartChapterPage() {
  const { title, subtitle } = getInvolved.start;
  
  return (
    <PageLayout title={title} subtitle={subtitle}>
      <div className="bg-gradient-to-r from-cyan-50 to-violet-50 py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-800 leading-relaxed">
          <section
            className="
              relative
              p-6 rounded-lg 
              shadow-lg 
              bg-white/70 
              hover:bg-white/90 
              transition-colors duration-300
            "
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-violet-300 rounded-bl-full opacity-20" />

            <h1
              className="
                text-2xl md:text-3xl font-extrabold text-center mb-4"
            >
              The following requirements must be met for consideration:
            </h1>

            <p className="mb-4">
              Starting a Voices of Equity chapter at your undergraduate institution is an exciting way to get involved 
              with combating health inequity and engaging with pressing topics in healthcare. All Voices of Equity 
              chapters are managed directly by the National Chapter Leadership. To apply to start a Voices of Equity Chapter, 
              the requirements are as follows:
            </p>

            <h2 className="text-xl font-semibold mb-2 text-[#607AD4]">
              Executive Board Team
            </h2>
            <p className="mb-3">
              A committed executive board team will run the chapter during the first semester of VoE at your institution. 
              The following roles must be fulfilled:
            </p>

            <ul className="list-inside ml-2 mb-6 space-y-1 text-cyan-800">
              <li className="list-disc">President</li>
              <li className="list-disc">Director of Philanthropy</li>
              <li className="list-disc">Director of Education</li>
              <li className="list-disc">Director of Outreach</li>
              <li className="list-disc">Media Director</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2 text-[#607AD4]">
              Cover Letter
            </h2>
            <p className="mb-4">
              A brief cover letter from the prospective president detailing their interest in health equity, Voices of Equity,
              applicable skills, and ideas for involvement.
            </p>

            <h2 className="text-xl font-semibold mb-2 text-[#607AD4]">
              Resumes
            </h2>
            <p>
              The prospective president's resume is required; resumes of the other executive board members are highly encouraged.
            </p>
          </section>

          <section
            className="
              bg-white/70 p-6 rounded-lg shadow-lg 
              hover:bg-white/90 transition-colors duration-300 
              text-center
            "
          >
            <h2
              className="
                text-3xl md:text-4xl font-semibold mb-4
              "
            >
              Chapter Registration Process
            </h2>
            <div className="space-y-2 text-gray-700">
              <p className="text-xl font-semibold mb-2 text-[#607AD4]">1. Gather Your Team</p>
              <div className="px-2 py-2">Start by finding 4 like-minded and passionate peers. To register you must be able to fill an entire executive board consisting of the following positions: President, Director of Outreach, Director of Philanthropy, Director of Education, and Media Director. Refer to by-laws for a description of the roles. </div>
              <p className="text-xl font-semibold mb-2 text-[#607AD4]">2. Fill Out the Application Form</p>
              <div className="px-2 py-2">The prospective president should fill out the registration form below.</div>
              <p className="text-xl font-semibold mb-2 text-[#607AD4]">3. Interview</p>
              <div className="px-2 py-2">Shortly after you apply, the Voices of Equity National Chapter leadership will consider your application. Promising candidates will be interviewed.</div>
              <p className="text-xl font-semibold mb-2 text-[#607AD4]">4. Get To Work!</p>
              <div className="px-2 py-2">After forming a chapter, you will now work directly with the National Chapter to establish your chapter.</div>
            </div>
          </section>

          <section className="flex flex-col items-center">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfw6ja_StdJ9zTihJpC_wZkCXxZUj46jrtEYqhRen7vIXjOMw/viewform">
          <button
              className="
                bg-gradient-to-r from-cyan-500 to-violet-500 
                text-white font-semibold 
                py-2 px-6 rounded-full shadow-lg
                hover:from-cyan-600 hover:to-violet-600 
                transition-colors duration-300
              "
            >
              Apply Here
            </button>
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}