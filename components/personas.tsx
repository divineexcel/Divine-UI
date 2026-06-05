'use client'

import { motion } from 'framer-motion'
import { User, Target, Heart, Frown, Quote } from 'lucide-react'
import Image from 'next/image'

const personas = [
  {
    name: 'Sarah Okeke',
    age: 28,
    occupation: 'Marketing Manager',
    location: 'Lagos, Nigeria',
    avatar: '/projects/sarah.jpg',
    bio: 'A busy professional juggling multiple campaigns, looking for tools that streamline her workflow and save time.',
    goals: [
      'Manage campaigns efficiently',
      'Track performance metrics easily',
      'Collaborate with team seamlessly',
    ],
    painPoints: [
      'Too many disconnected tools',
      'Complex reporting interfaces',
      'Time-consuming manual tasks',
    ],
    quote:
      'I need software that understands my workflow, not one that forces me to adapt to its complexity.',
    techSavvy: 4,
    patience: 2,
  },
  {
    name: 'David Ademola',
    age: 40,
    occupation: 'Small Business Owner',
    location: 'Abuja, Nigeria',
    avatar: '/projects/man.jpg',
    bio: 'Runs a local retail business and needs simple, reliable tools to manage inventory and customer relationships.',
    goals: [
      'Track inventory in real-time',
      'Understand customer preferences',
      'Grow business sustainably',
    ],
    painPoints: [
      'Limited technical knowledge',
      'Budget constraints for software',
      'Need for quick learning curve',
    ],
    quote:
      'I want technology that helps me focus on my customers, not on figuring out how to use the technology.',
    techSavvy: 2,
    patience: 3,
  },
  {
    name: 'Amara Nwosu',
    age: 22,
    occupation: 'University Student',
    location: 'Port Harcourt, Nigeria',
    avatar: '/projects/22.jpg',
    bio: 'A final-year student looking for intuitive learning platforms that fit her mobile-first lifestyle.',
    goals: [
      'Access course materials on-the-go',
      'Collaborate with study groups',
      'Track academic progress',
    ],
    painPoints: [
      'Poor mobile experiences',
      'Slow-loading applications',
      'Cluttered interfaces',
    ],
    quote:
      'If I can order food in 3 taps, why does it take 10 clicks to submit an assignment?',
    techSavvy: 5,
    patience: 1,
  },
]

export function Personas() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            User Research
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 text-foreground">
            User Personas
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Understanding users is at the heart of great design. Here are some
            personas that guide my design decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card rounded-3xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary shrink-0">
                    <Image
                      src={persona.avatar}
                      alt={persona.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {persona.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {persona.occupation}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {persona.age} years old • {persona.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="p-6 border-b border-border">
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {persona.bio}
                  </p>
                </div>
              </div>

              {/* Goals */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-primary" />
                  <h4 className="font-medium text-foreground">Goals</h4>
                </div>
                <ul className="space-y-2">
                  {persona.goals.map((goal) => (
                    <li
                      key={goal}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Heart className="w-3 h-3 text-emerald-500" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pain Points */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Frown className="w-5 h-5 text-destructive" />
                  <h4 className="font-medium text-foreground">Pain Points</h4>
                </div>
                <ul className="space-y-2">
                  {persona.painPoints.map((pain) => (
                    <li
                      key={pain}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                      {pain}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="p-6 bg-secondary/30">
                <div className="flex gap-3">
                  <Quote className="w-5 h-5 text-primary shrink-0" />
                  <p className="text-sm italic text-muted-foreground">
                    &quot;{persona.quote}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
