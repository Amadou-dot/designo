'use client';
import { ChevronRight } from '@mui/icons-material';
import clsx from 'clsx';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type CardProps = {
  image: StaticImageData;
  title: string;
  subtitle?: string;
  link: string;
  className?: string;
};
export default function ProjectCard({
  image,
  link,
  subtitle,
  title,
  className,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={link}
      className={clsx(
        'text-light-gray relative flex h-52 w-10/12 flex-col items-center justify-center gap-2 rounded-2xl border transition-all duration-300 md:gap-8',
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(${
          isHovered ? 'rgba(231, 129, 107, 0.8)' : 'rgba(0, 0, 0, 0.5)'
        }, ${
          isHovered ? 'rgba(231, 129, 107, 0.8)' : 'rgba(0, 0, 0, 0.5)'
        }), url(${image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className='text-2xl font-semibold tracking-widest text-inherit uppercase'>
        {title}
      </p>
      <p className='text-sm tracking-widest text-inherit uppercase'>
        {subtitle || 'View Projects'}{' '}
        <ChevronRight sx={{ color: 'var(--primary)' }} />
      </p>
    </Link>
  );
}
