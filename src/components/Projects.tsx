import imgAppDesign from '../assets/image-app-design.jpg';
import imgGraphicDesign from '../assets/image-graphic-design.jpg';
import imgWebDesign from '../assets/image-web-design-small.jpg';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <div className='mt-10 flex h-[50vh] max-w-[1600px] flex-col items-center justify-evenly lg:mx-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-6'>
      <ProjectCard
        image={imgWebDesign}
        title='Web Design'
        link='/projects/web-design'
        className='lg:col-start-1 lg:row-span-2 lg:h-full lg:w-full'
      />
      <ProjectCard
        image={imgAppDesign}
        title='App Design'
        link='/projects/app-design'
        className='lg:col-start-2 lg:row-start-1 lg:h-full lg:w-full'
      />
      <ProjectCard
        image={imgGraphicDesign}
        title='Graphic Design'
        link='/projects/graphic-design'
        className='lg:col-start-2 lg:row-start-2 lg:h-full lg:w-full'
      />
    </div>
  );
}
