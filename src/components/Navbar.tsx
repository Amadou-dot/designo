'use client';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Logo from './ui/Logo';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      <Logo />
      <div className='md:hidden'>
        <MobileMenu />
      </div>
      <div className='decoration-primary hidden items-center gap-4 text-sm uppercase underline-offset-4 *:opacity-80 *:hover:underline *:hover:opacity-100 md:flex'>
        <Link href='/about'>Our company</Link>
        <Link href='/locations'>Locations</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  );
}
