import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

          {/* LEFT: Text */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono tracking-widest uppercase mb-8"
            >
              <Sparkles size={12} />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-800 leading-[1.05] tracking-tight mb-4"
            >
              Shivam
              <br />
              <span className="gradient-text">Rawat</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="font-mono text-sm tracking-[0.2em] text-accent/70 uppercase mb-6"
            >
              Digital Growth Associate &amp; MERN Stack Developer
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="font-body text-lg text-white/50 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              I build and scale digital products using{' '}
              <span className="text-accent font-medium">data-driven marketing</span> and{' '}
              <span className="text-accent2 font-medium">full-stack development</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-bg font-display font-700 text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white/80 font-display font-600 text-sm tracking-wide hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center gap-8 mt-14 justify-center lg:justify-start"
            >
              {[
                { value: '2+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Built' },
                { value: '3x', label: 'Growth Achieved' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-800 gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted font-body mt-0.5 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex-shrink-0 relative"
          >
            {/* Outer ring animation */}
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-spin-slow scale-110" />
            <div className="absolute inset-0 rounded-full border border-accent2/10 animate-spin-slow scale-125" style={{ animationDirection: 'reverse' }} />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl scale-150" />

            {/* Gradient border wrapper */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full gradient-border p-[3px]">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                {!imgError ? (
                  <motion.img
                    src="/profile.jpg"
                    alt="Shivam Rawat"
                    className="w-full h-full object-cover object-top"
                    onError={() => setImgError(true)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent2/20">
                    <span className="font-display text-5xl font-800 gradient-text">SR</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass rounded-2xl px-4 py-2.5 border border-accent/20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent3 animate-pulse" />
                <span className="text-xs font-mono text-white/70">Open to work</span>
              </div>
            </motion.div>

            {/* Stack badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -top-2 -left-4 glass rounded-2xl px-4 py-2.5 border border-accent2/20"
            >
              <span className="text-xs font-mono text-accent2">MERN Stack</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
