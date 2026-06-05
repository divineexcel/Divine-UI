'use client'

import { motion } from 'framer-motion'
import {
  Search,
  Lightbulb,
  PenTool,
  Layers,
  Code,
  TestTube,
} from 'lucide-react'

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    phase: '01',
    description:
      'Deep dive into user research, competitive analysis, and stakeholder interviews to understand the problem space.',
    deliverables: ['User Interviews', 'Competitive Analysis', 'User Journey Maps'],
  },
  {
    icon: Lightbulb,
    title: 'Define',
    phase: '02',
    description:
      'Synthesize research findings into actionable insights, user personas, and clear problem statements.',
    deliverables: ['User Personas', 'Problem Statement', 'Design Brief'],
  },
  {
    icon: PenTool,
    title: 'Ideate',
    phase: '03',
    description:
      'Brainstorm solutions through sketching, wireframing, and collaborative design sprints with stakeholders.',
    deliverables: ['Sketches', 'Wireframes', 'User Flows'],
  },
  {
    icon: Layers,
    title: 'Design',
    phase: '04',
    description:
      'Create high-fidelity designs with attention to visual hierarchy, accessibility, and brand consistency.',
    deliverables: ['UI Design', 'Design System', 'Interactive Prototypes'],
  },
  {
    icon: TestTube,
    title: 'Test',
    phase: '05',
    description:
      'Validate designs through usability testing, gather feedback, and iterate based on user insights.',
    deliverables: ['Usability Tests', 'A/B Testing', 'Iteration Reports'],
  },
  {
    icon: Code,
    title: 'Handoff',
    phase: '06',
    description:
      'Collaborate with developers to ensure pixel-perfect implementation and smooth design-to-dev workflow.',
    deliverables: ['Dev Specs', 'Asset Library', 'Documentation'],
  },
]

export function DesignProcess() {
  return (
    <section id="process" className="py-24 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            How I Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-foreground">
            Design Process
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A systematic approach to transforming ideas into impactful digital
            experiences through research-driven design thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Phase number */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors duration-500">
                {step.phase}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Deliverables */}
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
