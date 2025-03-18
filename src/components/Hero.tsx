import Image from 'next/image';
import phone from '../assets/image-hero-phone.png';
import Button from './ui/Button';
export default function Hero() {
  return (
    <div className='bg-primary relative min-h-0 flex-grow overflow-clip bg-[url(../assets/bg-pattern-hero-home.svg)] bg-cover bg-left-top bg-no-repeat p-4 lg:flex lg:items-center lg:justify-center'>
      <div className='text-light-gray isolate container text-center lg:flex lg:items-center lg:text-left'>
        <div className='space-y-4'>
          <h1 className='mt-10 text-3xl leading-10 font-bold tracking-wide text-inherit md:text-6xl md:leading-16 lg:leading-20'>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className='text-lg font-light text-inherit lg:text-2xl'>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences.
            <br className='hidden lg:block' />
            Find out more about our services.
          </p>
          <Button>Learn More</Button>
        </div>
        <div className='flex w-full items-center justify-center'>
          <Image
            src={phone}
            alt='Iphone displaying the app'
            className='-z-50 lg:scale-110'
          />
        </div>
      </div>
    </div>
  );
}
