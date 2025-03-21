import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Logo from './ui/Logo';
import CTA from './CTA';

export default function Footer() {
  return (
    <Box className='text-light-gray mt-80 bg-black'>
      <CTA className='-translate-y-[50%] transform' />
      <Box className='-translate-y-30 transform text-center'>
        <Box className='flex w-full flex-col items-center gap-4 text-lg font-light uppercase md:flex-row md:justify-between md:p-8'>
          <Logo dark />
          <Box className='flex flex-col gap-8 md:flex-row decoration-primary underline-offset-4 *:hover:underline lg:*:opacity-80 lg:*:hover:opacity-100' >
            <Link href='/about'>Our Company</Link>
            <Link href='/locations'>Locations</Link>
            <Link href='/contact'>Contact</Link>
          </Box>
        </Box>

        <Box className='mt-10 flex flex-col gap-8 px-8 md:gap-12 lg:flex-row lg:justify-between'>
          <Box className='text-gray-500'>
            <h3 className='text-lg font-semibold'>Designo Central Office</h3>
            <Link href='/locations' className='hover:underline'>
              3886 Wellington StreetToronto, Ontario M9C 3J5
            </Link>
          </Box>
          <Box className='text-gray-500'>
            <h3 className='text-lg font-semibold'>
              Contact Us (Central Office)
            </h3>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </Box>

          <Box
            className='text-primary *:hover:text-primary-light flex justify-center gap-8 *:hover:cursor-pointer lg:items-end'
            fontSize='30px'
          >
            <Facebook fontSize='inherit' />
            <YouTube fontSize='inherit' />
            <Twitter fontSize='inherit' />
            <Pinterest fontSize='inherit' />
            <Instagram fontSize='inherit' />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
