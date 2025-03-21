import clsx from 'clsx';
import Link from 'next/link';

type LogoProps = {
  className?: string;
  dark?: boolean;
};
export default function Logo({ className, dark }: LogoProps) {
  return (
    <Link href='/' className={clsx('flex items-center gap-4', className)}>
      {/* logo circle */}
      <div
        className='h-8 w-8 rounded-full'
        style={{
          background: dark
            ? 'conic-gradient(var(--primary) 0deg, black 360deg, var(--primary) 0deg)'
            : 'conic-gradient(var(--primary) 0deg, white 360deg, var(--primary) 0deg)',
        }}
      ></div>
      <h1
        className={clsx(
          'text-3xl font-bold tracking-widest uppercase',
          dark ? 'text-light-gray' : 'text-dark-gray',
        )}
      >
        Designo
      </h1>
    </Link>
  );
}
