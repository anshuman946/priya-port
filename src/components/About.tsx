'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Database, Cpu, Globe, Award, BookOpen, Download } from 'lucide-react'
import { personalInfo, education } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function About() {
  const [activeTab, setActiveTab] = useState('about')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tabs = [
    { id: 'about', label: 'About Me', icon: BookOpen },
    { id: 'education', label: 'Education', icon: Award },
    { id: 'passion', label: 'Passion', icon: Code }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  const stats = [
    { label: 'Projects Completed', value: '10+', icon: Code },
    { label: 'Technologies Mastered', value: '15+', icon: Cpu },
    { label: 'Certifications', value: '5+', icon: Award },
    { label: 'Years Learning', value: '3+', icon: BookOpen }
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="glass p-2 rounded-xl">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2',
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={20} />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === 'about' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white mb-6">My Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Computer Science Engineering student at Lovely Professional University, 
                  currently in my final year with a CGPA of 8.03. My journey in technology began with a 
                  curiosity for problem-solving and has evolved into a deep passion for Data Science and 
                  Machine Learning.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As a Data Science Intern at CipherByte Technologies, I've had the opportunity to work 
                  on real-world projects including unemployment analysis and email spam detection systems. 
                  These experiences have strengthened my skills in Python, machine learning algorithms, 
                  and data visualization.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm also passionate about frontend development, having completed an internship at 
                  Prodigy InfoTech where I built responsive web applications using modern technologies. 
                  I believe in creating user-friendly interfaces that make technology accessible to everyone.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="glass p-8 rounded-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span className="text-white font-medium">Location: {personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                      <span className="text-white font-medium">Phone: {personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                      <span className="text-white font-medium">Email: {personalInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl">
                    <h4 className="text-xl font-bold text-white mb-3">Current Focus</h4>
                    <p className="text-gray-300 mb-4">
                      Expanding my expertise in Machine Learning, Deep Learning, and Full-Stack Development 
                      while contributing to open-source projects and building innovative solutions.
                    </p>
                    <motion.a
                      href="/resume/Priya_Das_Resume.pdf"
                      download="Priya_Das_Resume.pdf"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <Download size={16} />
                      Download Resume
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-primary-400 font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-gray-300 text-sm">
                        {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                      </p>
                      {(edu.gpa || edu.percentage) && (
                        <p className="text-accent-400 font-bold text-lg">
                          {edu.gpa ? `CGPA: ${edu.gpa}` : `${edu.percentage}`}
                        </p>
                      )}
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'passion' && (
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white mb-6">My Passion</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Data Science</h4>
                      <p className="text-gray-300">
                        I love uncovering insights from data and building models that can make predictions 
                        and solve real-world problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Cpu className="w-6 h-6 text-secondary-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
                      <p className="text-gray-300">
                        Exploring algorithms and building intelligent systems that can learn and adapt 
                        fascinates me.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-accent-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Web Development</h4>
                      <p className="text-gray-300">
                        Creating beautiful, responsive, and user-friendly web experiences that make 
                        technology accessible to everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-xl font-bold text-white mb-4">Goals & Aspirations</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-300">Master advanced ML algorithms and deep learning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                    <span className="text-gray-300">Contribute to open-source AI projects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    <span className="text-gray-300">Build innovative data-driven solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-300">Mentor aspiring developers and data scientists</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
