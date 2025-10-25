'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Eye, Code, Database, Globe, Smartphone } from 'lucide-react'
import { projects } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'ml', label: 'Machine Learning', icon: Database },
    { id: 'data', label: 'Data Science', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
      case 'web':
        return Globe
      case 'ml':
      case 'data':
        return Database
      case 'mobile':
        return Smartphone
      default:
        return Code
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web':
        return 'from-blue-500 to-cyan-500'
      case 'ml':
        return 'from-purple-500 to-pink-500'
      case 'data':
        return 'from-green-500 to-emerald-500'
      case 'mobile':
        return 'from-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and personal projects that demonstrate my skills and passion
          </motion.p>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={cn(
                  'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2',
                  filter === category.id
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="glass p-6 rounded-2xl h-full hover:bg-white/10 transition-all duration-300 card-hover">
                    {/* Project Image Placeholder */}
                    <div className={cn(
                      'w-full h-48 rounded-xl mb-6 bg-gradient-to-br',
                      getCategoryColor(project.category),
                      'flex items-center justify-center relative overflow-hidden'
                    )}>
                      <CategoryIcon className="w-16 h-16 text-white/80" />
                      {project.featured && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-yellow-500/90 text-black text-xs font-bold rounded-full">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex gap-3">
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                          >
                            <Github className="w-5 h-5 text-gray-300" />
                          </motion.a>
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-300" />
                            </motion.a>
                          )}
                        </div>
                        
                        <motion.button
                          onClick={() => setSelectedProject(project.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <Eye size={16} />
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null
                  
                  const CategoryIcon = getCategoryIcon(project.category)
                  
                  return (
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            'p-3 rounded-xl bg-gradient-to-r',
                            getCategoryColor(project.category)
                          )}>
                            <CategoryIcon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                            <p className="text-primary-400 font-medium">{project.category.toUpperCase()}</p>
                          </div>
                        </div>
                        <motion.button
                          onClick={() => setSelectedProject(null)}
                          whileHover={{ scale: 1.1, rotate: 90 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 glass rounded-lg hover:bg-white/20 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6 text-gray-300" />
                        </motion.button>
                      </div>

                      {/* Description */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
                        <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                        >
                          <Github size={20} />
                          View Code
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
