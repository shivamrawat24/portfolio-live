import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, TrendingUp, Zap } from 'lucide-react'

const pillars = [
  {
    icon: TrendingUp,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    title: 'Growth-First Thinking',
    desc: 'Every decision backed by data — from content strategy to conversion funnels.',
  },
  {
    icon: Code2,
    color: 'text-accent2',
    bg: 'bg-accent2/10',
    border: 'border-accent2/20',
    title: 'Full-Stack Execution',
    desc: 'MERN stack proficiency to turn ideas into production-ready digital products.',
  },
  {
    icon: Zap,
    color: 'text-accent3',
    bg: 'bg-accent3/10',
    border: 'border-accent3/20',
    title: 'Speed & Precision',
    desc: 'Shipping fast without sacrificing quality — the edge in competitive markets.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">01 — About</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight mb-6">
              Where <span className="gradient-text">marketing meets</span>{' '}
              <br />engineering.
            </h2>
            <div className="space-y-4 text-white/55 font-body leading-relaxed text-lg">
              <p>
                I'm a hybrid digital professional who operates at the intersection of{' '}
                <span className="text-white/80 font-medium">data-driven growth strategy</span> and{' '}
                <span className="text-white/80 font-medium">modern full-stack engineering</span> — a
                rare combination that lets me own the entire product journey.
              </p>
              <p>
                As a Digital Growth Associate, I've orchestrated multi-channel campaigns,
                optimized conversion pipelines, and extracted actionable insights from analytics
                data to 3× organic reach for early-stage brands.
              </p>
              <p>
                As a MERN Stack Developer, I architect and ship scalable web applications — from
                RESTful APIs with JWT auth to dynamic React frontends — bridging the gap between
                what marketing needs and what engineering can deliver.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-surface border border-border text-white/70 font-display font-600 text-sm hover:border-accent/30 hover:text-accent transition-all duration-300"
              >
                See my work →
              </a>
            </div>
          </motion.div>

          {/* Pillar cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={`glass glass-hover rounded-2xl p-5 border ${p.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center flex-shrink-0`}>
                    <p.icon size={18} className={p.color} />
                  </div>
                  <div>
                    <h3 className={`font-display font-700 text-sm mb-1 ${p.color}`}>{p.title}</h3>
                    <p className="text-white/50 text-sm font-body leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
