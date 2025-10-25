'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Database, Globe, Cpu, TrendingUp, Award } from 'lucide-react'
import { skills } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = [
    { id: 'all', label: 'All Skills', icon: Award },
    { id: 'language', label: 'Languages', icon: Code },
    { id: 'framework', label: 'Frameworks', icon: Globe },
    { id: 'tool', label: 'Tools', icon: Cpu },
    { id: 'database', label: 'Database', icon: Database }
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'language':
        return Code
      case 'framework':
        return Globe
      case 'tool':
        return Cpu
      case 'database':
        return Database
      default:
        return Award
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language':
        return 'from-blue-500 to-cyan-500'
      case 'framework':
        return 'from-purple-500 to-pink-500'
      case 'tool':
        return 'from-green-500 to-emerald-500'
      case 'database':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500'
    if (level >= 80) return 'from-blue-500 to-cyan-500'
    if (level >= 70) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 80) return 'Advanced'
    if (level >= 70) return 'Intermediate'
    return 'Beginner'
  }

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        filteredSkills.forEach((skill, index) => {
          setTimeout(() => {
            setAnimatedSkills(prev => new Set(Array.from(prev).concat(skill.name)))
          }, index * 100)
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, filteredSkills])

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setAnimatedSkills(new Set())
                }}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2',
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={18} />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const CategoryIcon = getCategoryIcon(skill.category)
            const isAnimated = animatedSkills.has(skill.name)
            
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'p-2 rounded-lg bg-gradient-to-r',
                      getCategoryColor(skill.category)
                    )}>
                      <CategoryIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400 capitalize">{skill.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{skill.level}%</div>
                    <div className="text-xs text-gray-400">{getSkillLevel(skill.level)}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={cn(
                        'h-full rounded-full bg-gradient-to-r',
                        getSkillColor(skill.level)
                      )}
                      initial={{ width: 0 }}
                      animate={{ width: isAnimated ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                    />
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Proficiency</span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'w-2 h-2 rounded-full',
                          i < Math.floor(skill.level / 20)
                            ? 'bg-primary-400'
                            : 'bg-gray-600'
                        )}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="glass p-6 rounded-xl text-center">
            <TrendingUp className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
            <p className="text-gray-300">
              Always exploring new technologies and staying updated with the latest trends in 
              data science and web development.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <Award className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Certified Skills</h3>
            <p className="text-gray-300">
              Multiple certifications in Excel for Data Analytics, Cloud Computing, and 
              various programming languages.
            </p>
          </div>
          
          <div className="glass p-6 rounded-xl text-center">
            <Code className="w-12 h-12 text-accent-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
            <p className="text-gray-300">
              Strong foundation in Data Structures & Algorithms with a focus on 
              efficient and scalable solutions.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Leverage These Skills?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm passionate about applying these skills to solve real-world problems and 
              create innovative solutions. Let's discuss how I can contribute to your project.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold inline-flex items-center gap-2"
            >
              <Code size={20} />
              Start a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
