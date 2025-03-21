import Box from '@mui/material/Box';
import clsx from 'clsx';
import Button from './ui/Button';
type CTAProps = {
  className?: string;
};
export default function CTA({ className }: CTAProps) {
  return (
    <Box
      component='div'
      className={clsx(
        'bg-primary mx-auto w-11/12 space-y-8 rounded-xl p-7 text-center pb-10',
        className,
      )}
    >
      <h1 className='text-5xl font-semibold'>
        Let&apos;s talk about your project
      </h1>
      <p className='text-xl'>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Button>Get in touch</Button>
    </Box>
  );
}
