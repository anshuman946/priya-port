'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Code, Database, Globe } from 'lucide-react'
import { experiences } from '@/lib/data'
import { cn, formatDateRange } from '@/lib/utils'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return Code
      case 'full-time':
        return Database
      case 'part-time':
        return Globe
      default:
        return Code
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'internship':
        return 'from-primary-500 to-primary-600'
      case 'full-time':
        return 'from-secondary-500 to-secondary-600'
      case 'part-time':
        return 'from-accent-500 to-accent-600'
      default:
        return 'from-primary-500 to-primary-600'
    }
  }

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and the valuable experiences that shaped my skills
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform md:-translate-x-0.5"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {experiences.map((exp, index) => {
              const TypeIcon = getTypeIcon(exp.type)
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={cn(
                    'relative flex items-center',
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    'ml-12 md:ml-0 md:w-1/2',
                    isEven ? 'md:pr-8' : 'md:pl-8'
                  )}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            'p-2 rounded-lg bg-gradient-to-r',
                            getTypeColor(exp.type)
                          )}>
                            <TypeIcon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-primary-400 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-gray-400 text-sm mb-1">
                            <Calendar className="w-4 h-4" />
                            {formatDateRange(exp.startDate, exp.endDate)}
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Type Badge */}
                      <div className="mt-4 flex justify-between items-center">
                        <span className={cn(
                          'px-3 py-1 rounded-full text-xs font-medium capitalize',
                          exp.type === 'internship' && 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
                          exp.type === 'full-time' && 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30',
                          exp.type === 'part-time' && 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                        )}>
                          {exp.type.replace('-', ' ')}
                        </span>
                        
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to take on new challenges and contribute to innovative projects. 
              Let's discuss how I can help bring your ideas to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold inline-flex items-center gap-2"
            >
              <ExternalLink size={20} />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
