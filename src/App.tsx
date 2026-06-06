import { useState } from 'react'
import { Menu, X, TrendingUp, ArrowRight, Phone, Mail, MapPin, ChevronRight, Cog, ClipboardCheck, BookOpen, Zap, Shield, Wrench } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const STATS = [
  { value: '90', suffix: 'yrs', label: 'Greefa Engineering Heritage' },
  { value: '30', suffix: '%+', label: 'Average Throughput Gain' },
  { value: '40', suffix: '+', label: 'Packhouses Serviced' },
]

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: 'System Audit & Diagnostics',
    desc: 'Comprehensive assessment of your entire Greefa line — grading accuracy, throughput bottlenecks, fruit damage points, and software configuration.',
  },
  {
    icon: Cog,
    title: 'Configuration & Calibration',
    desc: 'Fine-tune iQS Pro cameras, weight sensors, size graders, and sorting logic for your specific fruit varieties and pack-out requirements.',
  },
  {
    icon: TrendingUp,
    title: 'Throughput Optimisation',
    desc: 'Reconfigure lane assignments, cup speeds, and pack station workflows to maximise cartons-per-hour without compromising fruit quality.',
  },
  {
    icon: BookOpen,
    title: 'Operator Training',
    desc: 'Hands-on training for your team — SmartSort software, AFS interface, daily calibration routines, and troubleshooting common faults.',
  },
  {
    icon: Wrench,
    title: 'Preventative Maintenance',
    desc: 'Scheduled maintenance programmes to keep your Greefa line running at peak performance — fewer breakdowns, longer equipment life.',
  },
  {
    icon: Zap,
    title: 'Software & Workflow Integration',
    desc: 'Connect your Greefa AFS data to your packhouse management system for real-time reporting, traceability, and quality KPIs.',
  },
]

const GREEFA_SYSTEMS = [
  { name: 'SmartSort', desc: 'High-speed electronic grading with individual cup carriers' },
  { name: 'GeoSort', desc: 'Mechanical size grading — robust and cost-effective' },
  { name: 'CombiSort', desc: 'Combined mechanical + electronic grading flexibility' },
  { name: 'iQS Pro', desc: 'External quality cameras — colour, blemish, shape detection' },
  { name: 'iFA', desc: 'Internal quality analysis — Brix, firmness, internal defects' },
  { name: 'AFS Software', desc: 'Greefa Automated Fruit Sorting interface & reporting' },
]

const FRUITS = [
  'Apples', 'Pears', 'Citrus', 'Stone Fruit', 'Avocados', 'Kiwis', 'Mangoes',
]

const PROCESS = [
  {
    step: '01',
    title: 'Audit',
    desc: 'We spend a full day on your packhouse floor — watching your line run, measuring throughput, checking calibration, and talking to your operators.',
  },
  {
    step: '02',
    title: 'Diagnose',
    desc: 'Detailed report showing exactly where you\'re losing throughput, where fruit damage is occurring, and what your line is capable of.',
  },
  {
    step: '03',
    title: 'Optimise',
    desc: 'On-site reconfiguration — recalibrating cameras and sensors, adjusting sorting logic, retraining operators, and rebalancing workflows.',
  },
  {
    step: '04',
    title: 'Sustain',
    desc: 'Remote monitoring check-ins, calibration schedules, refresher training, and priority support when you need it.',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#08090A] text-[#9CA3AF] font-sans selection:bg-[#C8963E]/30">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08090A]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-[#F3F4F6] text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#C8963E] flex items-center justify-center">
              <Cog size={14} className="text-black" />
            </div>
            Ryn<span className="text-[#C8963E]">hardt</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-[#6B7280] hover:text-[#F3F4F6] transition-colors text-sm font-medium">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="bg-[#C8963E] text-black font-semibold px-5 py-2 rounded-lg text-sm hover:brightness-110 transition-all">
              Get in Touch
            </a>
          </div>

          <button className="md:hidden text-[#F3F4F6]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#08090A] border-b border-white/[0.06] px-6 pb-6 pt-2 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-[#6B7280] hover:text-[#F3F4F6] transition-colors text-sm">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#C8963E] text-black font-semibold px-5 py-2.5 rounded-lg text-sm text-center hover:brightness-110 transition-all">
              Get in Touch
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 px-6 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(200,150,62,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,150,62,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#C8963E]/10 border border-[#C8963E]/20 rounded-full px-4 py-1.5 mb-8">
            <Shield size={14} className="text-[#C8963E]" />
            <span className="text-[#C8963E] text-xs font-semibold tracking-widest uppercase">Greefa Configuration Specialists</span>
          </div>

          <h1 className="text-[#F3F4F6] text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Your <span className="text-[#C8963E]">Greefa</span>.
            <br />
            <span className="text-[#C8963E]">Optimised.</span>
          </h1>

          <p className="text-[#6B7280] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Nearly 90 years of Dutch engineering sits on your packhouse floor.
            We make sure you're getting every last carton per hour out of it —
            without compromising fruit quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#C8963E] text-black font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all text-base">
              Book a Line Audit <ArrowRight size={18} />
            </a>
            <a href="#process" className="inline-flex items-center justify-center gap-2 border border-white/[0.08] text-[#F3F4F6] font-medium px-8 py-3.5 rounded-lg hover:bg-white/[0.04] transition-all text-base">
              How We Work <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="border-y border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="text-[#C8963E] text-sm font-semibold tracking-widest uppercase mb-4">The Reality</div>
              <h2 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold leading-tight mb-6">
                Most Greefa lines run at <span className="text-[#C8963E]">60–70%</span> of their true capacity.
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-6">
                Greefa builds world-class equipment. But between installation and daily operation,
                settings drift. Cameras lose calibration. Operators develop workarounds. Sorting
                logic gets copied from last season's crop. Before you know it, you're leaving
                thousands of cartons on the table every month.
              </p>
              <p className="text-[#6B7280] text-base leading-relaxed">
                That's where we come in. No new machines. No capital expenditure. Just your
                existing Greefa line — configured properly, running the way it was engineered to run.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
              {STATS.map(s => (
                <div key={s.label} className="bg-[#08090A] p-6 md:p-8 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#C8963E] mb-1">
                    {s.value}<span className="text-xl">{s.suffix}</span>
                  </div>
                  <div className="text-[#6B7280] text-xs leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#C8963E] text-sm font-semibold tracking-widest uppercase mb-4">Services</div>
            <h2 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold mb-4">
              Everything your Greefa line needs
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              From one-day audits to ongoing optimisation programmes. No job too small, no packhouse too complex.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-[#08090A] p-8 md:p-10 hover:bg-white/[0.02] transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-[#C8963E]/10 border border-[#C8963E]/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon size={20} className="text-[#C8963E]" />
                </div>
                <h3 className="text-[#F3F4F6] text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Greefa Systems */}
      <section id="expertise" className="py-24 md:py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#C8963E] text-sm font-semibold tracking-widest uppercase mb-4">Expertise</div>
            <h2 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold mb-4">
              Deep knowledge. <span className="text-[#C8963E]">Full stack.</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              We work across the entire Greefa product range — from mechanical graders to AI-powered vision systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {GREEFA_SYSTEMS.map(g => (
              <div key={g.name} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.1] transition-all">
                <h3 className="text-[#F3F4F6] text-base font-semibold mb-2">{g.name}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>

          {/* Fruit types */}
          <div className="text-center">
            <p className="text-[#6B7280] text-sm mb-4">Experience across all major fruit types</p>
            <div className="flex flex-wrap justify-center gap-2">
              {FRUITS.map(f => (
                <span key={f} className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#9CA3AF] text-sm">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 px-6 border-t border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#C8963E] text-sm font-semibold tracking-widest uppercase mb-4">Process</div>
            <h2 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold mb-4">
              From audit to autonomy
            </h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Four steps to a faster, more accurate, more profitable packhouse.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
            {PROCESS.map(p => (
              <div key={p.step} className="bg-[#08090A] p-8 relative">
                <div className="text-5xl font-bold text-white/[0.03] absolute top-4 right-4">{p.step}</div>
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#C8963E]/10 border border-[#C8963E]/20 flex items-center justify-center mb-5">
                    <span className="text-[#C8963E] font-bold text-sm">{p.step}</span>
                  </div>
                  <h3 className="text-[#F3F4F6] text-lg font-semibold mb-3">{p.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 md:py-32 px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#C8963E] text-sm font-semibold tracking-widest uppercase mb-4">Start Here</div>
          <h2 className="text-[#F3F4F6] text-3xl md:text-4xl font-bold mb-4">
            Let's look at your line
          </h2>
          <p className="text-[#6B7280] text-lg mb-12 max-w-lg mx-auto">
            No commitment. No sales pitch. Just a conversation about your packhouse
            and what's possible with the equipment you already have.
          </p>

          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 md:p-10 max-w-md mx-auto">
            <form
              onSubmit={e => {
                e.preventDefault()
                alert('Thanks! We\'ll be in touch within 24 hours to schedule a call.')
              }}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#08090A] border border-white/[0.08] rounded-lg px-4 py-3 text-[#F3F4F6] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#08090A] border border-white/[0.08] rounded-lg px-4 py-3 text-[#F3F4F6] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#C8963E]/40 transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-[#08090A] border border-white/[0.08] rounded-lg px-4 py-3 text-[#F3F4F6] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#C8963E]/40 transition-colors"
              />
              <select className="bg-[#08090A] border border-white/[0.08] rounded-lg px-4 py-3 text-[#F3F4F6] text-sm focus:outline-none focus:border-[#C8963E]/40 transition-colors">
                <option value="">What equipment do you run?</option>
                <option>SmartSort</option>
                <option>GeoSort</option>
                <option>CombiSort</option>
                <option>EasySort</option>
                <option>QSort</option>
                <option>Multiple / Not sure</option>
              </select>
              <textarea
                placeholder="Tell us about your packhouse — what fruit, what volumes, what challenges?"
                rows={3}
                className="bg-[#08090A] border border-white/[0.08] rounded-lg px-4 py-3 text-[#F3F4F6] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#C8963E]/40 transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-[#C8963E] text-black font-semibold px-6 py-3.5 rounded-lg hover:brightness-110 transition-all mt-2"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-[#6B7280]">
            <span className="flex items-center gap-2"><Phone size={14} className="text-[#C8963E]" />076 846 8726</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-[#C8963E]" />hello@rynhardt.co.za</span>
            <span className="flex items-center gap-2"><MapPin size={14} className="text-[#C8963E]" />Cape Town, South Africa</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="text-[#F3F4F6] text-lg font-bold tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#C8963E] flex items-center justify-center">
              <Cog size={12} className="text-black" />
            </div>
            Ryn<span className="text-[#C8963E]">hardt</span>
          </a>
          <p className="text-[#6B7280] text-sm">
            &copy; {new Date().getFullYear()} Rynhardt. Greefa packhouse optimisation.
          </p>
          <div className="flex items-center gap-6 text-sm text-[#6B7280]">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="hover:text-[#F3F4F6] transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/27768468726"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </a>
    </div>
  )
}
