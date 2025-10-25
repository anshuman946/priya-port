export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'ml' | 'data' | 'mobile'
  startDate: string
  endDate?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  type: 'internship' | 'full-time' | 'part-time' | 'contract'
}

export interface Skill {
  name: string
  level: number
  category: 'language' | 'framework' | 'tool' | 'database'
  icon?: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  startDate: string
  endDate: string
  gpa?: string
  percentage?: string
  description?: string
}

export interface Certificate {
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
    }
  }
}

export interface ParticleConfig {
  count: number
  color: string
  size: number
  speed: number
  opacity: number
}

export interface Theme {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
}
