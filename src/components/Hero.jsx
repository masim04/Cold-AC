import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BUSINESS, HERO, SERVICES_DETAILED } from '../config'

export default function Hero() {
  const [selectedService, setSelectedService] = useState('AC Repair & Diagnostics')
  const [zipInput, setZipInput] = useState('')
  const [zipStatus, setZipStatus] = useState(null)

  const handleCheckZip = (e) => {
    e.preventDefault()
    if (!zipInput.trim()) return
    // Any Louisiana 707xx or 708xx is within or near the 50-mile radius of Baker
    if (zipInput.startsWith('707') || zipInput.startsWith('708') || zipInput.startsWith('704') || zipInput.startsWith('703')) {
      setZipStatus({ covered: true, text: `ZIP ${zipInput} is within our 50-mile Baker dispatch zone! ✅` })
    } else {
      setZipStatus({ covered: true, text: `ZIP ${zipInput} received — call Jim at (225) 681-1638 to confirm immediate dispatch!` })
    }
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-hero-radial text-white">
      {/* Decorative frosted gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#5483B3]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#C1E8FF]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Badges, Quick Dispatch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1 pr-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold">
              <span className="bg-cold-100 text-cold-950 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                46 Years Heritage
              </span>
              <span className="text-cold-100">
                COLD AC HVAC &amp; Electrical &bull; Baker, LA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              46 Years of Trusted <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cold-100 via-cold-200 to-cold-400">
                HVAC &amp; Electrical
              </span> <br />
              Excellence in Louisiana.
            </h1>

            {/* Subtitle */}
            <p className="text-cold-200 text-sm sm:text-base max-w-xl leading-relaxed">
              Led by <strong className="text-white font-semibold">Jim Black</strong>. From high-efficiency AC replacements to rapid cooling repairs and licensed electrical contracting within 50 miles of Baker, LA.
            </p>

            {/* Operating Hours & Emergency Tag */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-cold-300">
              <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Open Mon–Sat: <strong>6:00 AM – 7:00 PM</strong></span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#b91c1c]/20 border border-[#fca5a5]/30 text-rose-200 px-3 py-1.5 rounded-xl font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-500 pulse-animation"></span>
                <span>24/7 Emergency Dispatch</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a 
                href={`tel:${BUSINESS.phoneRaw}`} 
                className="btn-ice text-xs sm:text-sm py-3 px-5 shadow-glow-ice font-bold"
              >
                <svg className="w-4 h-4 text-cold-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Jim: (225) 681-1638
              </a>

              <Link 
                to="/contact" 
                className="btn-dark-ghost text-xs sm:text-sm py-3 px-5 font-semibold"
              >
                Get a Free Estimate
              </Link>
            </div>

            {/* Interactive ZIP Dispatch Checker */}
            <div className="pt-2">
              <form onSubmit={handleCheckZip} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 max-w-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-cold-200 mb-2 flex items-center justify-between">
                  <span>Fast 50-Mile Radius Coverage Check</span>
                  <span className="text-cold-100 font-mono">Baker, LA Base</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Enter your Louisiana ZIP (e.g. 70714, 70801)"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="flex-1 bg-cold-950/70 border border-cold-700 text-white placeholder-cold-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-cold-400"
                  />
                  <button
                    type="submit"
                    className="bg-cold-600 hover:bg-cold-500 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Check Area
                  </button>
                </div>
                {zipStatus && (
                  <div className="mt-2 text-xs font-semibold text-cold-100 flex items-center gap-1.5 animate-fadeIn">
                    <span>📍</span>
                    <span>{zipStatus.text}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="border border-white/10 rounded-xl p-2.5 bg-white/5">
                <div className="text-cold-100 font-bold text-sm">46 Years</div>
                <div className="text-cold-300 text-[11px]">Since 1978</div>
              </div>
              <div className="border border-white/10 rounded-xl p-2.5 bg-white/5">
                <div className="text-cold-100 font-bold text-sm">20% Off</div>
                <div className="text-cold-300 text-[11px]">Senior Discount</div>
              </div>
              <div className="border border-white/10 rounded-xl p-2.5 bg-white/5">
                <div className="text-cold-100 font-bold text-sm">50 Miles</div>
                <div className="text-cold-300 text-[11px]">Service Radius</div>
              </div>
              <div className="border border-white/10 rounded-xl p-2.5 bg-white/5">
                <div className="text-cold-100 font-bold text-sm">Dual Pro</div>
                <div className="text-cold-300 text-[11px]">HVAC &amp; Electrical</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Verified Credentials */}
          <div className="lg:col-span-5 relative">
            {/* Glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cold-600/30 to-cold-100/20 rounded-3xl filter blur-xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-cold-900">
              <img 
                src="https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Cold AC HVAC and Electrical Technician Jim Black"
                className="w-full h-[420px] object-cover object-center"
              />

              {/* Floating verified technician badge */}
              <div className="absolute top-4 right-4 bg-cold-950/85 backdrop-blur-md border border-cold-100/40 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cold-600 flex items-center justify-center text-white font-black text-lg">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Jim Black, Owner</div>
                  <div className="text-[11px] text-cold-200">EIN: 27-2172485 Verified</div>
                </div>
              </div>

              {/* Bottom Quick Feature Overlay */}
              <div className="p-6 bg-gradient-to-t from-cold-950 via-cold-950/90 to-transparent">
                <div className="text-xs uppercase tracking-wider text-cold-300 font-bold mb-1">
                  Baker Headquarters &bull; 9280 Old Comite Drive
                </div>
                <div className="text-lg font-bold text-white">
                  Fast HVAC Diagnostics &bull; Upfront Quotes
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-cold-200 pt-3 border-t border-white/10">
                  <span>Repairs &bull; Replacements &bull; Panels</span>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="text-cold-100 font-bold hover:underline">
                    (225) 681-1638 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
