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
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
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
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => router.push(`/who-we-are/team/${id}`)}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      {/* Portrait Photo */}
      <div className="relative mb-4 aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-lg">
        {imgError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#587FDA]">
            <span className="font-display text-2xl font-bold text-white">
              {getInitials(name)}
            </span>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="duration-400 object-cover transition-all group-hover:scale-105"
            sizes="200px"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Name & Role */}
      <div className="border-b-2 border-transparent pb-2 transition-colors duration-300 group-hover:border-[#587FDA]">
        <h3 className="font-display text-base font-bold text-[#171219] transition-colors duration-300 group-hover:text-[#587FDA]">
          {name}
        </h3>
        <p className="mt-0.5 text-sm text-[#4A5568]">{role}</p>
      </div>

      {/* Social links */}
      {(email || linkedin) && (
        <div className="mt-3 flex gap-3">
          {email && (
            <div onClick={(e) => e.stopPropagation()}>
              <a
                href={`mailto:${email}`}
                className="text-gray-400 transition-colors hover:text-[#587FDA]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          )}
          {linkedin && (
            <div onClick={(e) => e.stopPropagation()}>
              <a
                href={linkedin}
                className="text-gray-400 transition-colors hover:text-[#587FDA]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
