import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import { styles } from "../style"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import 'react-vertical-timeline-component/style.min.css'
import { textVariant } from "../utils/motion"
const Experience = () => {
  const ExperienceCard=({exp})=>(
    <VerticalTimelineElement
    contentStyle={{background:'#1d1836',color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={exp.date}
    iconStyle={{background:exp.iconBg}}
    icon={
      <div
       className="flex justify-center items-center w-full h-full">
        <img
        src={exp.icon}
        alt={exp.company_name}
        className="w-[60%] h-[60%] object-contain"/>
      </div>
    }>
      <div>
        <h3 className="text-white text-[24px] font-bold"> {exp.title}

        </h3>
        <p className="text-secondary text-[16px] font-semibold">

          {exp.company_name}
        </p>

      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
{
  exp.points.map((point,index)=>(
    <li className="text-white-100 text-[14px] pl-1 tracking-wider">
{point}
    </li>
  ))
}
      </ul>
      
    </VerticalTimelineElement>
  )
   

  
  return (
    <>
        <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>what i have done</p>
      <h2 className={styles.sectionHeadText}> work experience</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {
          experiences.map((exp,index)=>(
            <ExperienceCard key={index} exp={exp}/>
          ))
        }
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")