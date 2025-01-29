'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  email?: string;
}

const TeamMember = ({ id, name, role, image, shortBio, email }: TeamMemberProps) => {
  const router = useRouter();

  return (
    <div 
      onClick={() => router.push(`/who-we-are/team/${id}`)}
      className="flex flex-col items-center p-6 space-y-4 bg-white/60 backdrop-blur-sm rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
    >
      <div className="w-32 h-32 overflow-hidden rounded-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-[#607AD4]">{role}</p>
      </div>
      <p className="text-gray-600 text-center line-clamp-3">{shortBio}</p>
      {email && (
        <div className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
          <a
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-[#607AD4]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default TeamMember; 