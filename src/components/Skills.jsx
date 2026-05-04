import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BarChart2, Globe, Code2, Database, Shield, GitBranch, FileJson, Server, LayoutDashboard, Megaphone } from 'lucide-react'

const marketingSkills = [
  { name: 'Digital Growth Strategy', icon: BarChart2, level: 90 },
  { name: 'Social Media Management', icon: Globe, level: 85 },
  { name: 'Performance Optimization', icon: LayoutDashboard, level: 80 },
  { name: 'Analytics & Reporting', icon: BarChart2, level: 88 },
  { name: 'Content Strategy', icon: Megaphone, level: 82 },
]

const devSkills = [
  { name: 'MongoDB', icon: Database, level: 85 },
  { name: 'Express.js', icon: Server, level: 88 },
  { name: 'React.js', icon: Code2, level: 90 },
  { name: 'Node.js', icon: GitBranch, level: 88 },
  { name: 'REST APIs', icon: FileJson, level: 92 },
  { name: 'JWT Authentication', icon: Shield, level: 85 },
]

function SkillCard({ skill, color, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass glass-hover rounded-xl p-4 border border-white/5 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg ${color.bg} flex items-center justify-center`}>
            <skill.icon size={15} className={color.text} />
          </div>
          <span className="font-body text-sm font-medium text-white/80">{skill.name}</span>
        </div>
        <span className={`font-mono text-xs ${color.text}`}>{skill.level}%</span>
      </div>
      {/* Progress bar */}
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
          className={`h-full rounded-full ${color.bar}`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-32 bg-surface" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent2/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">02 — Skills</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight">
            A dual-threat <span className="gradient-text">toolkit.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Marketing */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-accent to-accent/30" />
              <h3 className="font-display font-700 text-lg text-white">Digital Growth & Marketing</h3>
            </motion.div>
            <div className="space-y-3">
              {marketingSkills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={{ bg: 'bg-accent/10', text: 'text-accent', bar: 'bg-gradient-to-r from-accent to-accent/60' }}
                  delay={0.2 + i * 0.08}
                  inView={inView}
                />
              ))}
            </div>
          </div>

          {/* Development */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-accent2 to-accent2/30" />
              <h3 className="font-display font-700 text-lg text-white">Development</h3>
            </motion.div>
            <div className="space-y-3">
              {devSkills.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  color={{ bg: 'bg-accent2/10', text: 'text-accent2', bar: 'bg-gradient-to-r from-accent2 to-accent2/60' }}
                  delay={0.2 + i * 0.08}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
