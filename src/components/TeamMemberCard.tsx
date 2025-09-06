'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getImageKitUrl } from '@/lib/imagekit';

interface TeamMemberCardProps {
  name: string;
  role: string;
  portfolio: string;
  imagePath: string;
  className?: string;
}

export default function TeamMemberCard({ 
  name, 
  role, 
  portfolio, 
  imagePath, 
  className = '' 
}: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Team member photo */}
      <div className="relative w-18 h-18 md:w-32 md:h-32 lg:w-30 lg:h-30 rounded-full overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400 transition-all duration-300">
        <Image
          src={getImageKitUrl(imagePath, 'w-144,h-144,f-auto,q-100')}
          alt={`${name} - ${role}`}
          width={144}
          height={144}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          quality={100}
        />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Hover card */}
      <div className={`
        absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4
        w-80 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95
        backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl
        p-6 z-50 transition-all duration-300 ease-out
        ${isHovered 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }
      `}>
        {/* Arrow pointing down */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-400/20"></div>
        
        {/* Card content */}
        <div className="text-center">
          {/* Profile image in card */}
          <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400/40">
            <Image
              src={getImageKitUrl(imagePath, 'w-200,h-200,f-auto,q-100')}
              alt={`${name} - ${role}`}
              width={200}
              height={200}
              className="w-full h-full object-cover"
              loading="lazy"
              quality={100}
            />
            {/* Professional glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10"></div>
          </div>

          {/* Name and role */}
          <h3 className="text-xl font-bold text-white mb-2 professional-heading">
            {name}
          </h3>
          <p className="text-cyan-400 font-medium mb-4 professional-subheading">
            {role}
          </p>

          {/* Portfolio link */}
          <a
            href={portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-6 py-3 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold rounded-xl
              transition-all duration-300 transform
              hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25
              focus:outline-none focus:ring-2 focus:ring-cyan-400/50
            "
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            View Portfolio
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
      </div>
    </div>
  );
}
