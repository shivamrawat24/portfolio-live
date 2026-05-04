import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shivamrawat0985@gmail.com',
    href: 'mailto:shivamrawat0985@gmail.com',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/shivamrawat629',
    href: 'https://linkedin.com',
    color: 'text-accent2',
    bg: 'bg-accent2/10',
    border: 'border-accent2/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shivamrawat24',
    href: 'https://github.com',
    color: 'text-accent3',
    bg: 'bg-accent3/10',
    border: 'border-accent3/20',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-32 bg-bg" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">05 — Contact</span>
          <div className="flex-1 section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-800 leading-tight mb-5">
              Let's build something{' '}
              <span className="gradient-text">great together.</span>
            </h2>
            <p className="text-white/45 font-body text-lg leading-relaxed mb-10">
              Whether you need a growth strategy, a full-stack application, or both — I'm ready to execute.
              Let's talk.
            </p>

            {/* Social links */}
            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className={`flex items-center gap-4 glass glass-hover rounded-xl p-4 border ${s.border} group`}
                >
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                    <s.icon size={18} className={s.color} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-0.5">{s.label}</div>
                    <div className={`text-sm font-body ${s.color}`}>{s.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass rounded-3xl p-8 border border-white/8">
              <h3 className="font-display font-700 text-lg text-white mb-6">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white/80 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-accent/40 focus:bg-white/6 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white/80 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-accent/40 focus:bg-white/6 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/30 tracking-widest uppercase mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white/80 font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-accent/40 focus:bg-white/6 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-accent text-bg font-display font-700 text-sm tracking-wide hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
                >
                  {sent ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-mono text-white/25">
          © 2026 Shivam Rawat. Crafted with intention.
        </p>
        <p className="text-xs font-mono text-white/20">
          Built with React + Vite + Tailwind + Framer Motion
        </p>
      </div>
    </section>
  )
}
