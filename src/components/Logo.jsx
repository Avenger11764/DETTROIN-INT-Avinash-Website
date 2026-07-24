import React from 'react';

const CrestShieldLogo = ({ size = 44 }) => (
  <svg
    width={size}
    height={size * 1.1}
    viewBox="0 0 100 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0 drop-shadow-md"
  >
    {/* Outer Gold Border Shield */}
    <path
      d="M10 5 H90 V65 L50 105 L10 65 Z"
      fill="#1c3d6e"
      stroke="#b8860b"
      strokeWidth="4"
      strokeLinejoin="round"
    />

    {/* Inner Yellow Shield Crest */}
    <path
      d="M20 18 Q35 12 50 10 Q65 12 80 18 C78 40 78 50 50 82 C22 50 22 40 20 18 Z"
      fill="#ffcc00"
    />

    {/* Red Rising Sun & People Figures Motif */}
    <g fill="#c62828">
      {/* 3 People Circles */}
      <circle cx="40" cy="22" r="3.5" />
      <circle cx="50" cy="19" r="4" />
      <circle cx="60" cy="22" r="3.5" />

      {/* Sun Rays / Figures Body */}
      <path d="M48 24 H52 L54 36 H46 Z" />
      <path d="M38 27 L42 26 L46 36 L43 36 Z" />
      <path d="M62 27 L58 26 L54 36 L57 36 Z" />

      {/* Open Book Pages */}
      <path d="M26 42 Q38 38 50 44 Q62 38 74 42 Q62 48 50 46 Q38 48 26 42 Z" stroke="#c62828" strokeWidth="1.5" fill="#ffcc00" />
      <path d="M28 47 Q38 43 50 49 Q62 43 72 47 Q62 52 50 50 Q38 52 28 47 Z" stroke="#c62828" strokeWidth="1.5" fill="#ffcc00" />
    </g>

    {/* Crest Text */}
    <text x="50" y="58" textAnchor="middle" fill="#1c3d6e" fontSize="7" fontWeight="bold" fontFamily="serif">
      Krishna
    </text>
    <text x="50" y="65" textAnchor="middle" fill="#1c3d6e" fontSize="5.5" fontWeight="bold" fontFamily="serif">
      International
    </text>
    <text x="50" y="72" textAnchor="middle" fill="#1c3d6e" fontSize="5.5" fontWeight="bold" fontFamily="serif">
      School
    </text>
  </svg>
);

const Logo = ({ variant = 'dark', className = '' }) => {
  const isDarkBg = variant === 'light';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Shield Crest */}
      <CrestShieldLogo size={44} />

      {/* Official Typography Logo Text */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-serif text-xl sm:text-2xl font-extrabold tracking-wider ${
              isDarkBg ? 'text-white' : 'text-[#000666]'
            }`}
          >
            KRISHNA
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded ${
              isDarkBg ? 'bg-[#feb300] text-[#281900]' : 'bg-[#e0e0ff] text-[#000666]'
            }`}
          >
            ALIGARH
          </span>
        </div>
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.2em] mt-1 ${
            isDarkBg ? 'text-white/80' : 'text-[#454652]'
          }`}
        >
          INTERNATIONAL SCHOOL
        </span>
        <span
          className={`text-[8px] font-semibold tracking-tight mt-0.5 opacity-75 hidden sm:block ${
            isDarkBg ? 'text-white/60' : 'text-[#7e5700]'
          }`}
        >
          Affiliated to C.B.S.E., Delhi | ISO 9001:2008
        </span>
      </div>
    </div>
  );
};

export default Logo;
