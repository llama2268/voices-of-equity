// Centralized type definitions for all content

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Engineer {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Media {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Education {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Outreach {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Philanthrophy {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface VOX {
  id: string
  name: string
  role: string
  image: string
  shortBio: string
  fullBio: string
  email: string
  linkedin: string
}

export interface Chapter {
  name: string
  location: string
  established: string
  members: number
  image: string
  achievements: string[]
  leadership: {
    president: string
    vicePresident: string
    contact: string
  }
  featured: boolean
  slug: string
  stats: Array<{ label: string; value: string }>
  link: string
}

export interface Stat {
  value: string
  label: string
  description?: string
}

export interface Initiative {
  title: string
  description: string
  icon: string
  image: string
}

export interface TimelineEvent {
  year: string | number
  title?: string
  description?: string
  side?: 'left' | 'right'
}

export interface NavItem {
  title: string
  href?: string
  submenu?: Array<{ title: string; href: string }>
}

export interface Video {
  videoId: string
  title: string
  description: string
}

export interface ResearchPaper {
  title: string
  authors: string
  year: string
  description: string
  link: string
}

export interface Guide {
  title: string
  description: string
  icon: string
  link: string
}

export interface Requirement {
  title: string
  description: string
}

export interface ArchiveItem {
  id: string
  title: string
  description: string
  type: 'article' | 'video' | 'training' | 'interview' | 'module' | 'op-ed' | 'resource'
  date: string
  author?: string
  tags: string[]
  url?: string
  image?: string
  featured?: boolean
  videoId?: string // For YouTube videos
}

export interface ChapterReflection {
  chapterName: string
  president: {
    name: string
    title: string
    headshot?: string
  }
  quote: string
  images: string[]
  semester: string
  featured?: boolean
}