import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDatabase, FaAws, FaPython, FaVuejs 
} from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 95 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 88 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
    { name: 'Vue.js', icon: <FaVuejs />, level: 75 },
    { name: 'Python', icon: <FaPython />, level: 70 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 82 },
    { name: 'SQL', icon: <FaDatabase />, level: 78 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'AWS', icon: <FaAws />, level: 75 }
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div className="progress-bar">
                  <motion.div 
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                <span className="progress-text">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
