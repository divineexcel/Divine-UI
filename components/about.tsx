'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Briefcase, Code2 } from 'lucide-react'

const skills = [
  { name: 'Figma', level: 90 },
  { name: 'User Research', level: 85 },
  { name: 'Wireframing', level: 90 },
  { name: 'Prototyping', level: 88 },
  { name: 'Visual Design', level: 85 },
  { name: 'Design Systems', level: 80 },
]

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'InVision',
  'Miro',
  'Notion',
  'Jira',
  'Slack',
]

const experience = [
  {
    role: 'UI/UX Intern',
    company: '3MTT Next Gen Cohort',
    period: '2024 - Present',
    description:
      'Collaborative design projects focusing on user research, persona development, and interface design.',
  },
  {
    role: 'Office Administrator',
    company: 'Stratford Academy',
    period: 'June 2025 - Oct 2025',
    description:
      'Designed communication materials, applying layout and readability principles transferable to UI documentation.',
  },
  {
    role: 'Database Administrator',
    company: "St. Paul College, Jikowyi",
    period: 'Sept 2024 - May 2025',
    description:
      'Administered portals, identified usability friction points, and informed improvements to data entry flows.',
  },
  {
    role: 'Backend Development Intern',
    company: 'AFEX, Abuja',
    period: 'Sept 2023 - Feb 2024',
    description:
      'Built backend systems with Django, developing understanding of how data flows inform front-end design decisions.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-foreground">
              Divinefavour Chidiebere Opara
            </h2>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Abuja, Nigeria
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                BSc IT, NOUN
              </span>
            </div>

            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Creative and detail-oriented IT graduate with hands-on experience
                in backend development, database management, and data analysis —
                now pivoting to UI/UX design.
              </p>
              <p>
                Skilled in translating technical complexity into intuitive user
                experiences, with a strong eye for visual hierarchy and
                user-centered thinking. I bring a unique perspective that bridges
                the gap between design and development.
              </p>
              <p>
                My technical background gives me deep understanding of how design
                decisions impact implementation, ensuring feasible and
                developer-friendly solutions.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Core Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Tools & Software
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-card border-2 border-primary" />
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-muted-foreground text-sm">{exp.company}</p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Technical Background
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Python & Django',
                  'SQL & Databases',
                  'Data Visualization',
                  'Web Administration',
                  'API Integration',
                  'Version Control',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
