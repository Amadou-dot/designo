import Box from '@mui/material/Box';
import Image, { StaticImageData } from 'next/image';
type CardProps = {
  imgSrc: StaticImageData;
  title: string;
  alt: string;
  children: React.ReactNode;
};
export default function IllustrationCard({
  imgSrc,
  alt,
  children,
  title,
}: CardProps) {
  return (
    <Box
      component='div'
      className='flex flex-col items-center gap-6 text-center md:flex-row md:text-left lg:flex-col lg:text-center'
    >
      <Box
        component='div'
        className='flex-2/3 bg-[linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.4)),url(../assets/bg-pattern-hero-home.svg)] bg-contain bg-no-repeat'
      >
        <Image src={imgSrc} alt={alt} />
      </Box>
      <Box component='div' className='flex flex-col gap-6 md:gap-4'>
        <p className='font-semibold tracking-[5px] uppercase'>{title}</p>
        {children}
      </Box>
    </Box>
  );
}
