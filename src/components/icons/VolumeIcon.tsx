import React from 'react';

interface VolumeIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  muted?: boolean;
  style?: React.CSSProperties;
}

export default function VolumeIcon({ 
  width = 24, 
  height = 24, 
  color = '#FFFFFF', 
  muted = false,
  style 
}: VolumeIconProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g>
        {/* Speaker base */}
        <path 
          d="M3 9v6h4l5 5V4l-5 5H3z" 
          fill={color}
        />
        
        {muted ? (
          /* Muted - X over speaker */
          <path 
            d="m16.5 12 3-3m0 3-3-3" 
            stroke={color} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        ) : (
          /* Unmuted - Sound waves */
          <>
            <path 
              d="M15.54 8.46a5 5 0 0 1 0 7.07" 
              stroke={color} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M18.36 5.64a9 9 0 0 1 0 12.72" 
              stroke={color} 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </>
        )}
      </g>
    </svg>
  );
}
