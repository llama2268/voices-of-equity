import PageLayout from '../../../components/Layout/PageLayout';
import TeamMember from '../../../components/Team/TeamMember';
import { whoWeArePage } from '@/content';
import { Section } from '@/components/ui/Section';

export default function TeamPage() {
  const { title, subtitle, members, engineers, Media_team, Education, Outreach, Philanthrophy, VOX } = whoWeArePage.team;
  
  return (
    <PageLayout>
      <Section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#EAF1FF] via-[#F6F9FF] to-transparent pointer-events-none" />
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#607AD4]/12 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-[#D6E1F7] bg-gradient-to-b from-white via-[#F7FAFF] to-[#F1F7FF] px-4 py-10 shadow-[0_30px_80px_-50px_rgba(50,90,180,0.35)] sm:px-6 lg:px-10">
        <div className="space-y-16">
          <div className="rounded-[1.75rem] border border-white/80 bg-white/65 px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur sm:px-6">
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Voices of Equity
              </p>
              <div className="mx-auto grid h-[4.5rem] w-fit min-w-[18rem] place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">Executive Leadership</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {members?.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[#D9E4F7] bg-gradient-to-b from-[#F7FAFF] to-[#EEF4FF] px-4 py-8 shadow-[0_20px_55px_-45px_rgba(70,110,190,0.45)] sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 xl:gap-16">
            <div className="rounded-[1.5rem] border border-white/80 bg-white/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <div className="mb-12">
                <div className="mx-auto grid h-[4.5rem] min-w-[14rem] w-fit place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                  <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">Education</h2>
                </div>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                <div className="flex gap-6 px-1">
                  {Education?.map((education_member) => (
                    <div key={education_member.name} className="min-w-[16rem] snap-center">
                      <TeamMember {...education_member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/80 bg-white/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <div className="mb-12">
                <div className="mx-auto grid h-[4.5rem] min-w-[14rem] w-fit place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                  <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">Philanthropy</h2>
                </div>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                <div className="flex gap-6 px-1">
                  {Philanthrophy?.map((phil_member) => (
                    <div key={phil_member.name} className="min-w-[16rem] snap-center">
                      <TeamMember {...phil_member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/80 bg-white/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <div className="mb-12">
                <div className="mx-auto grid h-[4.5rem] min-w-[14rem] w-fit place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                  <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">Outreach</h2>
                </div>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                <div className="flex gap-6 px-1">
                  {Outreach?.map((outreach_member) => (
                    <div key={outreach_member.name} className="min-w-[16rem] snap-center">
                      <TeamMember {...outreach_member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/80 bg-white/60 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <div className="mb-12">
                <div className="mx-auto grid h-[4.5rem] min-w-[14rem] w-fit place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                  <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">Media</h2>
                </div>
              </div>
              <div className="overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory">
                <div className="flex gap-6 px-1">
                  {Media_team?.map((Media) => (
                    <div key={Media.name} className="min-w-[16rem] snap-center">
                      <TeamMember {...Media} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/65 px-4 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur sm:px-6">
            <div className="text-center mb-12">
              <div className="mx-auto grid h-[4.5rem] w-fit min-w-[14rem] place-items-center rounded-xl border border-[#5A78D6]/30 bg-gradient-to-r from-[#E6EEFF] to-[#D7E7FF] px-6 shadow-sm">
                <h2 className="block translate-y-[7px] text-center text-3xl font-bold leading-none text-[#15306B]">VOX Equity</h2>
              </div>
            </div>
            {/* <div className = "flex justify-center"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center max-w-6xl mx-auto">
            {VOX?.map((engineer) => (
                <TeamMember key={engineer.name} {...engineer} />
              ))}
            </div>
          </div>
{/* 
          <div>
            <div className="text-center mb-12">
              <p className="font-serif text-lg text-primary-600 mb-3 italic">
                Chapters
              </p>
              <h2 className="text-3xl font-bold mb-4">Chapter Leaders</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
            </div>
          </div> */}
        </div>
        </div>
      </Section>
    </PageLayout>
  );
} 
