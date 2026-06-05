'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Ethical Eater',
    category: 'Mobile App Design',
    description:
      'A smart meal recommendation application that helps users discover healthy, nutritious meals based on their dietary preferences, health goals, and lifestyle, making healthy eating simple and accessible.',
    tags: ['UI/UX Design', 'Mobile', 'Healthcare', 'Figma'],
    image: '/projects/Login.png',
    color: 'from-emerald-500/20 to-cyan-500/20',
    link: 'https://www.figma.com/design/JMnixUpFZCPixyy6A97pLw/UI-Short-Course?node-id=1-54&t=B4NVYD9brWn59qmS-1',
  },
  {
    id: 2,
    title: 'Royal Sisters',
    category: 'Mobile Application',
    description:
      'A property recovery and tracking platform that assists individuals in reporting, locating, and reclaiming lost or stolen properties through a streamlined and secure process.',
    tags: ['Web Design', 'Property Recovery', 'Dashboard', 'Prototyping'],
    image: '/projects/UI.png',
    color: 'from-blue-500/20 to-purple-500/20',
    link: 'https://www.figma.com/design/JMnixUpFZCPixyy6A97pLw/UI-Short-Course?node-id=2007-2&t=B4NVYD9brWn59qmS-1',
  }
]

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
            A curated collection of design projects showcasing my approach to
            solving user problems through thoughtful design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => window.open(project.link, '_blank')}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div
                className={`relative h-64 md:h-80 bg-gradient-to-br ${project.color} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-secondary/50" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-4/5 h-4/5 rounded-xl overflow-hidden shadow-2xl bg-card border border-border">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-foreground font-semibold text-lg">
                        {project.title}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
