import { useEffect } from 'react'
import { BUSINESS, SOCIAL } from '../config'
import ContactForm from '../components/ContactForm'

export default function About() {
  useEffect(() => {
    document.title = 'About Jim Black & Cold AC — 46 Years of HVAC & Electrical Excellence'
  }, [])

  return (
    <div className="pt-28 pb-20">
      <div className="container-wide space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="badge-ice mb-2.5">Our 46-Year Story</div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cold-950 tracking-tight leading-tight">
            Dedicated to Louisiana Comfort Since 1978.
          </h1>
          <p className="mt-3 text-cold-800 text-xs sm:text-sm leading-relaxed">
            At Cold AC, we believe comfort should never be compromised by substandard workmanship or dishonest pricing. Led by <strong className="text-cold-950">Jim Black</strong>, our team combines 46 years of master-level HVAC diagnostics with certified electrical contracting.
          </p>
        </div>

        {/* Founder / Leader Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-cold-200">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                alt="Jim Black Cold AC Owner"
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 bg-cold-950/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl border border-cold-100/30 text-xs font-bold">
              Jim Black &bull; Master HVAC &amp; Electrical Contractor
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold text-cold-950 tracking-tight">
              A Personal Message From Jim Black
            </h2>
            <blockquote className="p-4 sm:p-5 rounded-2xl bg-cold-50 border-l-4 border-cold-600 text-cold-900 text-xs sm:text-sm italic leading-relaxed">
              "For 46 years, my priority has been simple: treat every home like it's my own family's. Louisiana summers are brutally unforgiving. When someone's AC goes down, they don't need a high-pressure salesman; they need a seasoned professional who can diagnose the fault right the first time and charge a fair price. That's what Cold AC has stood for since day one."
            </blockquote>

            <div className="space-y-3 text-xs sm:text-sm text-cold-800 leading-relaxed">
              <p>
                Operating out of <strong>9280 Old Comite Drive in Baker, Louisiana</strong>, we service residential homes, commercial offices, and industrial units within a 50-mile radius across Baker, Baton Rouge, Zachary, Central, and Denham Springs.
              </p>
              <p>
                We proudly offer a <strong>20% Senior Discount for elderly citizens</strong>, <strong>10% repeat customer discounts</strong>, and <strong>10% referral bonuses</strong> because community trust is the cornerstone of our longevity.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-cold-900">
              <div className="bg-cold-100/40 border border-cold-200 px-3 py-1.5 rounded-xl">
                EIN: 27-2172485
              </div>
              <div className="bg-cold-100/40 border border-cold-200 px-3 py-1.5 rounded-xl">
                Baker HQ (70714)
              </div>
              <div className="bg-cold-100/40 border border-cold-200 px-3 py-1.5 rounded-xl">
                Mon–Sat 6am–7pm
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-8 bg-white border border-cold-200">
            <div className="w-12 h-12 rounded-2xl bg-cold-100 text-cold-950 font-black text-xl flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="text-xl font-bold text-cold-950 mb-2">Unmatched Diagnostics</h3>
            <p className="text-xs sm:text-sm text-cold-700 leading-relaxed">
              With 46 years of field troubleshooting, we pinpoint capacitor shorts, compressor lockouts, refrigerant leaks, and airflow bottlenecks accurately without guesswork.
            </p>
          </div>

          <div className="card p-8 bg-white border border-cold-200">
            <div className="w-12 h-12 rounded-2xl bg-cold-100 text-cold-950 font-black text-xl flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="text-xl font-bold text-cold-950 mb-2">Dual Contractor Advantage</h3>
            <p className="text-xs sm:text-sm text-cold-700 leading-relaxed">
              Because we are fully licensed for electrical contracting as well as HVAC, we handle service panel upgrades, AC disconnects, and heavy amperage wiring in-house.
            </p>
          </div>

          <div className="card p-8 bg-white border border-cold-200">
            <div className="w-12 h-12 rounded-2xl bg-cold-100 text-cold-950 font-black text-xl flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="text-xl font-bold text-cold-950 mb-2">Honest Community Values</h3>
            <p className="text-xs sm:text-sm text-cold-700 leading-relaxed">
              Upfront quotes before we begin, zero hidden fees, and dedicated senior discounts that make critical cooling accessible to Louisiana elders.
            </p>
          </div>
        </div>

        {/* Booking Form Integration */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#052659] to-[#021024] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Speak With Jim Black Today
              </h2>
              <p className="text-xs sm:text-sm text-cold-200 leading-relaxed">
                Whether you need a free estimate on a new energy-efficient heat pump or an emergency cooling repair, our team is ready.
              </p>
              <div className="pt-2">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-ice text-xs uppercase tracking-wider font-extrabold py-3.5 px-6">
                  Direct Line: (225) 681-1638
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl text-cold-950 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
