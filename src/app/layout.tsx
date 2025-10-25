import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Priya Das - Portfolio',
  description: 'Data Science Intern & Frontend Developer | Machine Learning | Web Development | Python | React',
  keywords: ['Priya Das', 'Data Science', 'Machine Learning', 'Frontend Development', 'Python', 'React', 'Portfolio'],
  authors: [{ name: 'Priya Das' }],
  creator: 'Priya Das',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priyadas03.github.io',
    title: 'Priya Das - Portfolio',
    description: 'Data Science Intern & Frontend Developer | Machine Learning | Web Development | Python | React',
    siteName: 'Priya Das Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priya Das - Portfolio',
    description: 'Data Science Intern & Frontend Developer | Machine Learning | Web Development | Python | React',
    creator: '@priyadas03',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ParticleBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
