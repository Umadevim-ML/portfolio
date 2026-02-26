import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <div className="sm:w-[360px] w-full animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.12}
        transitionSpeed={450}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className='bg-tertiary p-5 rounded-2xl h-full flex flex-col glass-morphism cursor-pointer'
      >

        <div className='relative w-full h-[230px] flex-shrink-0 group overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex-1 flex flex-col'>
          <h3 className='text-white font-bold text-[24px] group-hover:text-[#915EFF] transition-colors'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] flex-1'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} font-medium`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div >
  );
};


const Projects = () => {
  return (
    <>
      <div className="animate-slide-in-left">
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex animate-slide-up'>
        <p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");

