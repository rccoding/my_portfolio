import React from 'react'
import Tilt from "react-parallax-tilt"
import {motion} from "framer-motion"
import {styles } from "../style.js"
import {services } from "../constants";
import {fadeIn,textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc/index.js'
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}> Overview</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("","",0.1,1)}
    className="my-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
      As a Software Developer specializing in web applications and blockchain integration,
       I have developed robust solutions using Next.js, React, Tailwind CSS, and advanced AI models.
        My technical design expertise and passion for technology have enabled me to successfully manage complete
         software lifecycles, from concept through high-quality deployment architectures. I have a strong
       background in UX and interface optimization, ensuring scalable and secure applications.
      I am always up for challenges and learning new technologies
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
    
            <ServiceCard 
            key={service.title}
            index={index}
             {...service}/>
        ))}

    </div>
    </>
  )
}

export default SectionWrapper(About,"about")