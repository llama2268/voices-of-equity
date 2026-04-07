"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  email?: string;
  linkedin?: string;
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

const TeamMember = ({
  id,
  name,
  role,
  image,
  email,
  linkedin,
}: TeamMemberProps) => {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/who-we-are/team/${id}`)}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Portrait Photo — grayscale by default, color on hover */}
      <div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-lg mb-4">
        {imgError ? (
          <div className="absolute inset-0 bg-[#587FDA] flex items-center justify-center">
            <span className="text-white text-2xl font-bold font-display">{getInitials(name)}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-400 group-hover:scale-105"
            sizes="200px"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Name & Role */}
      <div className="border-b-2 border-transparent group-hover:border-[#587FDA] transition-colors duration-300 pb-2">
        <h3 className="text-base font-bold font-display text-[#171219] group-hover:text-[#587FDA] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sm text-[#4A5568] mt-0.5">{role}</p>
      </div>

      {/* Social links */}
      {(email || linkedin) && (
        <div className="flex gap-3 mt-3">
          {email && (
            <div onClick={(e) => e.stopPropagation()}>
              <a
                href={`mailto:${email}`}
                className="text-gray-400 hover:text-[#587FDA] transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          )}
          {linkedin && (
            <div onClick={(e) => e.stopPropagation()}>
              <a href={linkedin} className="text-gray-400 hover:text-[#587FDA] transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeamMember;
