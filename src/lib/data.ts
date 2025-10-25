import { Project, Experience, Skill, Education, Certificate } from '@/types'

export const personalInfo = {
  name: 'Priya Das',
  title: 'Data Science Intern & Frontend Developer',
  location: 'Haldia, West Bengal - 721602',
  phone: '+91 7658856902',
  email: 'priya121803@gmail.com',
  linkedin: 'https://linkedin.com/in/priya-das03',
  github: 'https://github.com/priyadas03',
  bio: 'Passionate Data Science Intern and Frontend Developer with expertise in Machine Learning, Python, and modern web technologies. Currently pursuing Computer Science Engineering at Lovely Professional University with a strong foundation in data analysis, algorithm development, and responsive web design.',
  shortBio: 'Data Science Intern & Frontend Developer passionate about ML and web technologies.'
}

export const experiences: Experience[] = [
  {
    id: 'cipherbyte-intern',
    title: 'Data Science Intern',
    company: 'CipherByte Technologies',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-07-31',
    type: 'internship',
    description: [
      'Conducted unemployment analysis using Python to identify trends and provide actionable insights',
      'Developed a machine learning model for email spam detection using Python for accurate classification',
      'Applied statistical analysis and data visualization techniques to extract meaningful patterns from large datasets',
      'Collaborated with team members to deliver data-driven solutions and recommendations'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn']
  },
  {
    id: 'prodigy-intern',
    title: 'Frontend Development Intern',
    company: 'Prodigy InfoTech',
    location: 'Remote',
    startDate: '2024-06-01',
    endDate: '2024-07-31',
    type: 'internship',
    description: [
      'Developed a responsive landing page for McLaren cars using HTML, CSS, and JavaScript',
      'Created a fully functional stopwatch with interactive features using HTML, CSS, and JavaScript',
      'Built a currency converter application with clean UI and interactive elements using HTML, CSS, and JavaScript',
      'Implemented modern web design principles and responsive layouts for optimal user experience'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'UI/UX', 'Git']
  }
]

export const projects: Project[] = [
  {
    id: 'email-spam-detection',
    title: 'Email Spam Detection',
    description: 'Machine learning model to classify emails as spam or non-spam using text-based features.',
    longDescription: 'A comprehensive email spam detection system built using Python and machine learning algorithms. The project involved extensive data preprocessing, feature engineering, and model optimization to achieve high accuracy in spam classification. The system can process large volumes of emails and provide real-time classification results.',
    technologies: ['Python', 'Machine Learning', 'Natural Language Processing', 'Scikit-learn', 'Pandas', 'NumPy'],
    image: '/images/email-spam-detection.jpg',
    githubUrl: 'https://github.com/priyadas03/CBT-CIP',
    featured: true,
    category: 'ml',
    startDate: '2024-10-01',
    endDate: '2024-10-31'
  },
  {
    id: 'face-detection',
    title: 'Face Detection System',
    description: 'Real-time face detection system using computer vision and OpenCV.',
    longDescription: 'An advanced face detection system developed using C++ and OpenCV library. The system utilizes Haar cascades for facial feature extraction and detection, with optimized performance for real-time applications. Features include multi-face detection, varying lighting condition handling, and efficient processing algorithms.',
    technologies: ['C++', 'OpenCV', 'Computer Vision', 'Haar Cascades', 'Image Processing'],
    image: '/images/face-detection.jpg',
    githubUrl: 'https://github.com/priyadas03/Face-recognition',
    featured: true,
    category: 'ml',
    startDate: '2024-08-01',
    endDate: '2024-09-30'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Responsive and visually appealing personal portfolio website showcasing projects and achievements.',
    longDescription: 'A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features include dynamic animations, mobile-first design, interactive elements, and smooth scrolling navigation. The website effectively showcases technical skills, projects, and professional experience with an engaging user interface.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Animations', 'Git'],
    image: '/images/portfolio-website.jpg',
    githubUrl: 'https://github.com/priyadas03/Persional-Portfolio',
    featured: true,
    category: 'web',
    startDate: '2024-07-01',
    endDate: '2024-08-15'
  }
]

export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 90, category: 'language' },
  { name: 'C++', level: 85, category: 'language' },
  { name: 'Java', level: 80, category: 'language' },
  { name: 'C', level: 75, category: 'language' },
  { name: 'JavaScript', level: 85, category: 'language' },
  { name: 'HTML5', level: 95, category: 'language' },
  { name: 'CSS3', level: 90, category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React', level: 80, category: 'framework' },
  { name: 'Next.js', level: 75, category: 'framework' },
  { name: 'NumPy', level: 85, category: 'framework' },
  { name: 'Pandas', level: 90, category: 'framework' },
  { name: 'Scikit-learn', level: 85, category: 'framework' },
  { name: 'OpenCV', level: 80, category: 'framework' },
  { name: 'R Programming', level: 70, category: 'framework' },
  
  // Tools & Technologies
  { name: 'Git', level: 85, category: 'tool' },
  { name: 'MySQL', level: 80, category: 'database' },
  { name: 'Data Structures & Algorithms', level: 85, category: 'tool' },
  { name: 'Machine Learning', level: 85, category: 'tool' },
  { name: 'Data Analysis', level: 90, category: 'tool' },
  { name: 'Responsive Web Design', level: 90, category: 'tool' },
  { name: 'Problem Solving', level: 95, category: 'tool' }
]

export const education: Education[] = [
  {
    degree: 'Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    startDate: '2022-08-01',
    endDate: '2026-06-30',
    gpa: '8.03',
    description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with focus on Data Science, Machine Learning, and Software Development.'
  },
  {
    degree: '12th with Science',
    institution: 'Kendriya Vidyalaya Zirakpur',
    location: 'Zirakpur, Punjab',
    startDate: '2021-04-01',
    endDate: '2022-03-31',
    percentage: '94%',
    description: 'Completed Higher Secondary Education with Science stream, focusing on Mathematics, Physics, Chemistry, and Computer Science.'
  },
  {
    degree: '10th with Science',
    institution: 'Kendriya Vidyalaya Zirakpur',
    location: 'Zirakpur, Punjab',
    startDate: '2019-04-01',
    endDate: '2020-03-31',
    percentage: '93%',
    description: 'Completed Secondary Education with excellent academic performance and strong foundation in core subjects.'
  }
]

export const certificates: Certificate[] = [
  {
    name: 'Excel Skills for Data Analytics and Visualization',
    issuer: 'Coursera',
    date: '2024-11-01',
    url: 'https://coursera.org'
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: '2024-12-01',
    url: 'https://nptel.ac.in'
  }
]

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]
