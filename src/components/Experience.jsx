import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Digital Growth Associate',
    company: 'Growth Studio / Agency',
    period: 'Jan 2024 — Present',
    location: 'Remote / Noida, IN',
    type: 'Full-time',
    highlights: [
      'Owned end-to-end social media strategy for 3 D2C brands, growing combined organic reach by 3.2× in 6 months.',
      'Built and maintained performance dashboards tracking 20+ KPIs across Meta, Google, and organic channels.',
      'Produced data-backed content calendars that reduced creative revision cycles by 40%.',
      'Led A/B testing campaigns that improved landing page CVR by 22% quarter-over-quarter.',
      'Coordinated with engineering teams to implement analytics instrumentation for user behavior tracking.',
    ],
    stack: ['Meta Ads', 'Google Analytics 4', 'HubSpot', 'Notion', 'Figma', 'Canva'],
    color: 'accent',
  },
  {
    role: 'MERN Stack Developer',
    company: 'Freelance / Personal Projects',
    period: 'Jun 2023 — Present',
    location: 'Remote',
    type: 'Freelance',
    highlights: [
      'Architected and shipped "Cricket Talent Connect" — a role-based MERN platform with JWT auth and MongoDB Atlas.',
      'Delivered 4+ client websites with React front-ends, custom REST APIs, and responsive UI systems.',
      'Implemented secure authentication flows using JWT + refresh tokens and bcrypt password hashing.',
      'Integrated third-party APIs (payment gateways, email services) into Node.js backends.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'REST APIs'],
    color: 'accent2',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-32 bg-surface" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">04 — Experience</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-800 mb-14"
        >
          The journey <span className="gradient-text">so far.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent2/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-5 w-12 h-12 rounded-full ${exp.color === 'accent' ? 'bg-accent/10 border-accent/30' : 'bg-accent2/10 border-accent2/30'} border-2 hidden md:flex items-center justify-center`}>
                  <Briefcase size={16} className={exp.color === 'accent' ? 'text-accent' : 'text-accent2'} />
                </div>

                <div className="glass rounded-2xl p-7 border border-white/6 hover:border-white/10 transition-all duration-300">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-800 text-white">{exp.role}</h3>
                      <p className={`text-sm font-mono mt-1 ${exp.color === 'accent' ? 'text-accent' : 'text-accent2'}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/30 font-mono">
                        <MapPin size={11} />
                        {exp.location}
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-mono ${
                        exp.type === 'Full-time' ? 'text-accent3 border-accent3/30 bg-accent3/10' : 'text-white/30 border-white/10'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-white/55 font-body leading-relaxed">
                        <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${exp.color === 'accent' ? 'bg-accent' : 'bg-accent2'}`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span key={s} className="text-xs font-mono text-white/30 bg-white/4 border border-white/8 rounded-lg px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
