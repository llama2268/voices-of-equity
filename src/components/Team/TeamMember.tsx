"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  email?: string;
  linkedin?: string;
}

const TeamMember = ({
  id,
  name,
  role,
  image,
  shortBio,
  email,
  linkedin,
}: TeamMemberProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/who-we-are/team/${id}`)}
      className="flex cursor-pointer flex-col items-center space-y-4 rounded-lg bg-white/60 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
    >
      <div className="h-32 w-32 overflow-hidden rounded-full">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-[#607AD4]">{role}</p>
      </div>
      <p className="line-clamp-3 text-center text-gray-600">{shortBio}</p>
      <div className="flex flex-row">
        {email && (
          <div className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
            <a
              href={`mailto:${email}`}
              className="text-gray-400 hover:text-[#607AD4]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        )}
        {linkedin && (
          <div className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
            <a href={linkedin} className="text-gray-400 hover:text-[#607AD4]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
