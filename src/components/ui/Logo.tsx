import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4'>
      {/* logo circle */}
      <div
        className='h-8 w-8 rounded-full'
        style={{
          background:
            'conic-gradient(var(--primary) 0deg, white 360deg, var(--primary) 0deg)',
        }}
      ></div>
      <h1 className='text-dark-gray text-3xl font-bold tracking-widest uppercase'>
        Designo
      </h1>
    </Link>
  );
}
