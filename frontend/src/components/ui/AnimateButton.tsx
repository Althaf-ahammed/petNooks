'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Typography } from './Typography';

interface AnimateButtonProps {
  text: any;
  className?: string;
}

export default function AnimateButton({ text, className }: AnimateButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Typography
      variant="body"
      as="div"
      size="sm"
      className={cn(
        'text-foreground overflow-hidden mt-2',
        isHovered && 'hovered',
        className
      )}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="block items-center max-md:justify-center h-4 lg:h-6 overflow-hidden ml-1">
        <div className="flex">
          <span className="duration-300 font-medium delay-150 ease-in-out inline-block group-hover:transform group-hover:-translate-y-full group-hover:inline-flex group-hover:opacity-0 transition-all">
            {text}
          </span>
        </div>

        <div>
          <span className="transition-all font-medium duration-300 delay-150 ease-in-out text-white inline-block group-hover:transform group-hover:-translate-y-full group-hover:inline-flex">
            {text}
          </span>
        </div>
      </div>
    </Typography>
  );
}
