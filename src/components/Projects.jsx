import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TrendingUp, Code2, ExternalLink, Github, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    type: 'marketing',
    tag: 'Case Study',
    tagColor: 'text-accent bg-accent/10 border-accent/20',
    icon: TrendingUp,
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10',
    accent: 'accent',
    title: 'D2C Brand Growth Campaign',
    subtitle: 'Social-first growth strategy for an emerging D2C brand',
    problem: 'A newly launched D2C skincare brand was struggling to gain traction — low organic reach, near-zero engagement, and no measurable conversion pipeline despite strong product quality.',
    strategy: 'Designed a full-funnel content and performance strategy: awareness through Reels + Shorts, mid-funnel trust-building via UGC and educational content, and bottom-of-funnel retargeting with dynamic ad creatives.',
    execution: 'Managed end-to-end: content calendar, copywriting, creative briefing, A/B testing ad sets, and weekly analytics reporting to iterate on what was converting.',
    results: [
      { metric: '3.2×', label: 'Organic Reach Growth' },
      { metric: '220%', label: 'Engagement Rate Increase' },
      { metric: '18%', label: 'CAC Reduction (3 months)' },
      { metric: '4.1×', label: 'ROAS on Paid Ads' },
    ],
    tech: ['Meta Ads Manager', 'Google Analytics', 'Canva', 'Notion', 'HubSpot'],
  },
  {
    type: 'dev',
    tag: 'MERN App',
    tagColor: 'text-accent2 bg-accent2/10 border-accent2/20',
    icon: Code2,
    iconColor: 'text-accent2',
    iconBg: 'bg-accent2/10',
    accent: 'accent2',
    title: 'Cricket Talent Connect',
    subtitle: 'A full-stack platform connecting cricket talent with clubs & scouts',
    problem: 'Amateur cricketers had no structured platform to showcase their stats and get discovered by regional clubs and scouts.',
    strategy: 'Built a dedicated MERN stack platform with role-based access (Player / Scout / Admin), allowing talent profiles, match stats uploads, and recruiter outreach — all under a secure authentication layer.',
    execution: 'Architected the REST API with Node/Express, implemented MongoDB schemas for players and matches, built a responsive React dashboard, and secured all routes with JWT + refresh token rotation.',
    features: [
      'JWT Authentication with refresh tokens',
      'Full CRUD: profiles, stats, match reports',
      'MongoDB Atlas integration with aggregation pipelines',
      'Protected routes & role-based authorization',
      'Responsive dashboard built with React + Tailwind',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: '#',
    live: '#',
  },
]

function CaseStudyCard({ project, inView, delay }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="glass rounded-3xl p-8 border border-white/8 hover:border-accent/20 transition-all duration-500 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl ${project.iconBg} flex items-center justify-center`}>
            <Icon size={22} className={project.iconColor} />
          </div>
          <div>
            <span className={`text-xs font-mono border rounded-full px-3 py-1 ${project.tagColor}`}>
              {project.tag}
            </span>
          </div>
        </div>
      </div>

      <h3 className="font-display text-2xl font-800 text-white mb-2">{project.title}</h3>
      <p className="text-white/40 text-sm font-body mb-6">{project.subtitle}</p>

      {/* Case study content */}
      {project.type === 'marketing' && (
        <>
          {/* Results grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {project.results.map((r) => (
              <div key={r.label} className="bg-accent/5 border border-accent/10 rounded-xl p-3 text-center">
                <div className="font-display text-xl font-800 text-accent">{r.metric}</div>
                <div className="text-xs text-white/40 font-body mt-0.5">{r.label}</div>
              </div>
            ))}
          </div>

          {/* Expandable detail */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-mono text-accent/60 hover:text-accent transition-colors mb-4"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {expanded ? 'Less detail' : 'Full case study'}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-2 border-t border-white/8">
                  {[
                    { label: 'Problem', content: project.problem },
                    { label: 'Strategy', content: project.strategy },
                    { label: 'Execution', content: project.execution },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-xs font-mono text-accent/60 uppercase tracking-widest mb-1">{item.label}</div>
                      <p className="text-white/55 text-sm font-body leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}

      {project.type === 'dev' && (
        <>
          {/* Features list */}
          <ul className="space-y-2 mb-6">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-white/55 font-body">
                <span className="text-accent2 mt-0.5">→</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <a href={project.github} className="flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white transition-colors">
                <Github size={13} /> GitHub
              </a>
              <a href={project.live} className="flex items-center gap-1.5 text-xs font-mono text-accent/60 hover:text-accent transition-colors">
                <ExternalLink size={13} /> Live Demo
              </a>
            </div>
            <ArrowUpRight size={18} className="text-white/20 group-hover:text-accent2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-white/35 bg-white/5 rounded-lg px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">03 — Projects</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight">
            Work that <span className="gradient-text">moves the needle.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <CaseStudyCard key={p.title} project={p} inView={inView} delay={0.2 + i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  )
}
