import React from 'react'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../style'
import Tilt from 'react-tilt'
import { projects } from '../constants'
import { github } from '../assets'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variant={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      ><div
      className='relative w-full h-[230px]'
      >
        <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl"
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div 
          onClick={()=>window.open(source_code_link,"_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
            src={github}
            alt="github"
            className='w-1/2 h-1/2'
            object-contain
            />

          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
           #{tag.name}

          </p>
        ))

        }
      </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>

      </motion.div>
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following project showcase my skills in developing mobile
          applications for Android devices. The project is a simple but
          functional to-do list application that allows users to create,
          edit, and delete tasks. The app also features a reminder system
          that sends push notifications to users when a task is due. I
          developed the app using Java and Android Studio, and I implemented
          various Android components such as Activities, Fragments, and
          RecyclerViews. The project also demonstrates my ability to
          design and implement user interfaces that are intuitive and
          easy to use. Through this project, I was able to improve my
          skills in mobile app development, and I am confident that I can
          develop more complex and sophisticated apps in the future.
        </motion.p>

      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          ></ProjectCard>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')