import React from 'react';

interface FicusValleyLogoProps {
  variant?: 'dark' | 'light' | 'colored';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const FicusValleyLogo: React.FC<FicusValleyLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  // Color palette depending on background
  // 'dark' = for light backgrounds (slate-900 text)
  // 'light' = for dark backgrounds (white text)
  // 'colored' = with indigo & emerald accents
  const primaryColor = variant === 'light' ? '#F8FAFC' : variant === 'colored' ? '#0F172A' : '#0F172A';
  const secondaryColor = variant === 'light' ? '#94A3B8' : variant === 'colored' ? '#4F46E5' : '#475569';
  const accentColor = variant === 'light' ? '#10B981' : '#10B981';
  const strokeColor = variant === 'light' ? '#F1F5F9' : '#0F172A';

  // Sizing scale
  const dimensions = {
    sm: { height: 32, emblemSize: 30, textSize: 'text-lg', tagSize: 'text-[9px]' },
    md: { height: 42, emblemSize: 40, textSize: 'text-2xl', tagSize: 'text-[11px]' },
    lg: { height: 54, emblemSize: 52, textSize: 'text-3xl', tagSize: 'text-[12px]' },
    xl: { height: 68, emblemSize: 64, textSize: 'text-4xl', tagSize: 'text-sm' },
  }[size];

  return (
    <div className={`inline-flex items-center space-x-3 select-none ${className}`}>
      {/* Geometric Bear Totem Emblem */}
      <div 
        className="relative shrink-0 flex items-center justify-center"
        style={{ width: dimensions.emblemSize, height: dimensions.emblemSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sacred Geometry Background Triangle & Circle */}
          <polygon
            points="50,96 8,24 92,24"
            stroke={secondaryColor}
            strokeWidth="1.5"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <polygon
            points="50,6 90,78 10,78"
            stroke={secondaryColor}
            strokeWidth="1.2"
            opacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke={secondaryColor}
            strokeWidth="1"
            strokeDasharray="3 3"
            opacity="0.35"
          />

          {/* Bear Outer Crown & Ears */}
          <path
            d="M24 34 C20 22, 28 12, 38 20 C42 16, 46 14, 50 14 C54 14, 58 16, 62 20 C72 12, 80 22, 76 34"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Ear details */}
          <path
            d="M27 28 C28 22, 33 20, 36 24"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M73 28 C72 22, 67 20, 64 24"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="32" cy="22" r="1.5" fill={accentColor} />
          <circle cx="68" cy="22" r="1.5" fill={accentColor} />

          {/* Cheeks and Jawline */}
          <path
            d="M24 34 C16 46, 20 62, 32 72 C38 78, 44 86, 50 88 C56 86, 62 78, 68 72 C80 62, 84 46, 76 34"
            stroke={strokeColor}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Forehead Mandala & Third Eye Sacred Geometry */}
          <path
            d="M50 16 L50 36"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <polygon
            points="50,22 55,30 50,38 45,30"
            stroke={strokeColor}
            strokeWidth="1.8"
            fill={variant === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(79,70,229,0.08)'}
          />
          <circle cx="50" cy="30" r="2.5" fill={accentColor} />
          
          {/* Forehead side arcs */}
          <path
            d="M44 26 C40 32, 40 40, 44 46"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M56 26 C60 32, 60 40, 56 46"
            stroke={strokeColor}
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* Eyes (Faceted Geometric Bear Eyes) */}
          <polygon
            points="34,44 42,42 40,48 32,48"
            stroke={strokeColor}
            strokeWidth="2"
            fill={strokeColor}
          />
          <polygon
            points="66,44 58,42 60,48 68,48"
            stroke={strokeColor}
            strokeWidth="2"
            fill={strokeColor}
          />
          {/* Eye glow accents */}
          <circle cx="37" cy="45" r="1" fill="#FFFFFF" />
          <circle cx="63" cy="45" r="1" fill="#FFFFFF" />

          {/* Eye Surrounds & Temple Geometry */}
          <path
            d="M30 40 C34 38, 42 38, 44 42"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M70 40 C66 38, 58 38, 56 42"
            stroke={strokeColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Muzzle & Nose (Distinctive Solid Geometric Muzzle) */}
          <path
            d="M42 56 C42 50, 58 50, 58 56 C58 64, 54 68, 50 68 C46 68, 42 64, 42 56 Z"
            stroke={strokeColor}
            strokeWidth="2"
            fill={variant === 'light' ? '#1E293B' : '#FFFFFF'}
          />
          {/* Nose */}
          <path
            d="M46 56 C46 54, 54 54, 54 56 C54 60, 51 62, 50 62 C49 62, 46 60, 46 56 Z"
            fill={strokeColor}
          />
          {/* Mouth line & chin whiskers */}
          <path
            d="M50 62 L50 68"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M45 66 C47 68, 53 68, 55 66"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Cheek & Fur Geometric Facets */}
          <path
            d="M26 48 L32 54 L28 62"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M74 48 L68 54 L72 62"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M34 62 L42 66 L38 74"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M66 62 L58 66 L62 74"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Base Chin Anchor Point */}
          <circle cx="50" cy="80" r="2" fill={accentColor} />
          <path
            d="M46 84 L50 88 L54 84"
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark: "ficusValley" + Tagline */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none ${dimensions.textSize} flex items-baseline font-sans`}>
          <span style={{ color: primaryColor }} className="font-extrabold tracking-[-0.03em]">
            ficus
          </span>
          <span 
            style={{ 
              color: variant === 'colored' ? '#4F46E5' : primaryColor,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginLeft: '1px'
            }}
          >
            Valley
          </span>
        </div>

        {showTagline && (
          <span 
            className={`font-medium tracking-tight mt-0.5 whitespace-nowrap ${dimensions.tagSize}`}
            style={{ 
              color: secondaryColor,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Working to build a better learning platform
          </span>
        )}
      </div>
    </div>
  );
};
