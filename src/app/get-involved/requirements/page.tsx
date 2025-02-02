import PageLayout from '../../../components/Layout/PageLayout';
import { getInvolved } from '@/content/content';

export default function RequirementsPage() {
  const { title, subtitle } = getInvolved.requirements;
  const {req1, req1desc, req2, req2desc, req3, req3desc, bottom, bottominfo } = getInvolved.requirements.content
  
    return (
      <PageLayout title={title} subtitle={subtitle}>
        <div className="space-y-8 mt-8"> 
          <div className="bg-gray-30 border-l-4 border-indigo-300 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold  mb-2">
              {req1}
            </h2>
            <p className=" leading-relaxed">
              {req1desc}
            </p>
          </div>
  
          <div className="bg-gray-30 border-l-4 border-indigo-300 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold  mb-2">
              {req2}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {req2desc}
            </p>
          </div>
  
          <div className="bg-gray-30 border-l-4 border-indigo-300 p-6 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-2">
              {req3}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {req3desc}
            </p>
          </div>
  
          <div className ="text-center mx-auto my-8 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold 
      text-transparent bg-clip-text 
      bg-gradient-to-r from-blue-600 to-white-600
      mb-4">
              {bottom}
            </h2>
            <div className="h-1 w-16 bg-black mx-auto my-4 rounded"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {bottominfo}
            </p>
          </div>
          <div
  className="
    mx-auto my-8 max-w-sm
    py-4 px-10
    bg-blue-100
    rounded-md
    border-l-4 border-blue-400
    shadow-sm
    text-center
  "
>
  <h2 className="text-lg">
    File Coming Soon
  </h2>
</div>
        </div>
      </PageLayout>
    );
  }