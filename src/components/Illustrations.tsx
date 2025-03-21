import Box from '@mui/material/Box';
import friendly from '../assets/illustration-friendly.svg';
import passionate from '../assets/illustration-passionate.svg';
import resourceful from '../assets/illustration-resourceful.svg';
import IllustrationCard from './IllustrationCard';
export default function Illustrations() {
  return (
    <Box
      component='div'
      className='flex flex-col gap-20 px-4 *:text-lg lg:mt-20 lg:flex-row lg:px-8'
    >
      <IllustrationCard
        title='Passionate'
        imgSrc={passionate}
        alt='A person sitting at a desk working on a tablet'
      >
        Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions.
      </IllustrationCard>
      <IllustrationCard
        title='Resourceful'
        imgSrc={resourceful}
        alt='A person sitting at a desk working on a tablet'
      >
        Everything that we do has a strategic purpose. We use an agile approach
        in all of our projects and value customer collaboration. It guarantees
        superior results that fulfill our clients’ needs.
      </IllustrationCard>
      <IllustrationCard
        title='Friendly'
        imgSrc={friendly}
        alt='Two people holding a board with the share icon on it'
      >
        We are a group of enthusiastic folks who know how to put people first.
        Our success depends on our customers, and we strive to give them the
        best experience a company can provide.
      </IllustrationCard>
    </Box>
  );
}
