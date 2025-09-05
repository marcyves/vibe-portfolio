import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital experiences that are not only functional but also aesthetically pleasing. 
              I specialize in React, Node.js, and modern web technologies.
            </p>
            <p>
              My journey started with a curiosity about how things work on the web, and it has 
              evolved into a love for creating applications that solve real-world problems. 
              I enjoy the entire process, from initial concept and design to deployment and maintenance.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open source projects, or enjoying outdoor activities. I believe in continuous 
              learning and staying updated with the latest industry trends.
            </p>
          </motion.div>
          
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
