import { useState } from 'react'
import { Menu, X, Settings, TrendingUp, Users, Award, ArrowRight, Phone, Mail, MapPin, ChevronRight, BarChart3, Cog, Gauge } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    icon: Cog,
    title: 'Greefa Line Optimization',
    description: 'Fine-tune your Greefa sorting and grading lines for maximum throughput, accuracy, and fruit quality.',
  },
  {
    icon: BarChart3,
    title: 'Packhouse Throughput Analysis',
    description: 'Data-driven audits of your entire packhouse flow — identify bottlenecks and unlock hidden capacity.',
  },
  {
    icon: Gauge,
    title: 'Operator Training & Support',
    description: 'Hands-on training for your team on Greefa software, calibration, and maintenance best practices.',
  },
]

const WHY_US = [
  {
    icon: Award,
    title: 'Deep Greefa Expertise',
    description: 'Years of hands-on experience with the full Greefa product line — from SmartSort to AFS.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Results',
    description: 'We track before-and-after KPIs so you see exactly what improved — throughput, grade-out, or pack rate.',
  },
  {
    icon: Users,
    title: 'On-Site, Hands-On',
    description: 'We come to your packhouse, work alongside your team, and don\'t leave until the line runs right.',
  },
]

const STATS = [
  { value: '15+', label: 'Years Greefa Experience' },
  { value: '40+', label: 'Packhouses Optimized' },
  { value: '30%', label: 'Avg Throughput Gain' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-heading text-xl font-bold tracking-tight">
            Ryn<span className="text-accent">hart</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-text-muted hover:text-heading transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent text-black font-semibold px-5 py-2 rounded-lg text-sm hover:brightness-110 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-heading" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-bg border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-text-muted hover:text-heading transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-accent text-black font-semibold px-5 py-2.5 rounded-lg text-sm text-center hover:brightness-110 transition-all"
            >
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent-glow border border-[rgba(200,150,62,0.2)] rounded-full px-4 py-1.5 mb-8">
            <Settings size={14} className="text-accent" />
            <span className="text-accent text-xs font-medium tracking-wide uppercase">Greefa Packhouse Specialists</span>
          </div>

          <h1 className="text-heading text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Maximise Your{' '}
            <span className="text-accent">Greefa</span>{' '}
            Investment
          </h1>

          <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Unlock the full potential of your Greefa grading and sorting lines.
            We optimise packhouse throughput, reduce fruit damage, and train your
            operators — so every piece of fruit counts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all"
            >
              Get a Free Assessment <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-border text-heading font-medium px-8 py-3.5 rounded-lg hover:bg-bg-card-hover transition-all"
            >
              Our Services <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-bg-card">
        <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-accent mb-1">{s.value}</div>
              <div className="text-text-muted text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-3xl md:text-4xl font-bold mb-4">
              Packhouse Optimisation Services
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              End-to-end Greefa expertise — from line audits to operator training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
            {SERVICES.map(s => (
              <div
                key={s.title}
                className="bg-bg p-8 md:p-10 hover:bg-bg-card-hover transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-glow border border-[rgba(200,150,62,0.15)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-heading text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rynhart */}
      <section id="about" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-heading text-3xl md:text-4xl font-bold mb-4">
              Why Packhouses Choose Rynhart
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Not all consultants understand Greefa. We live and breathe it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {WHY_US.map(w => (
              <div key={w.title} className="bg-bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center mb-5">
                  <w.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-heading text-lg font-semibold mb-3">{w.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimise?
          </h2>
          <p className="text-text-muted text-lg mb-10 max-w-lg mx-auto">
            Let's talk about your packhouse. No obligation — just a conversation
            about what's possible with the equipment you already have.
          </p>

          <div className="bg-bg-card border border-border rounded-2xl p-8 md:p-10 max-w-md mx-auto">
            <h3 className="text-heading text-xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={e => { e.preventDefault(); alert('Thanks! We\'ll be in touch within 24 hours.') }} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-bg border border-border rounded-lg px-4 py-3 text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-bg border border-border rounded-lg px-4 py-3 text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-bg border border-border rounded-lg px-4 py-3 text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors"
              />
              <textarea
                placeholder="Tell us about your packhouse..."
                rows={3}
                className="bg-bg border border-border rounded-lg px-4 py-3 text-heading text-sm placeholder:text-text-muted focus:outline-none focus:border-accent/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all mt-2"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-text-muted">
            <span className="flex items-center gap-2"><Phone size={14} className="text-accent" />+27 82 123 4567</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-accent" />info@rynhart.co.za</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" />Cape Town, South Africa</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-heading text-lg font-bold tracking-tight">
            Ryn<span className="text-accent">hart</span>
          </a>
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Rynhart. Packhouse optimisation specialists.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="hover:text-heading transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
