import { useState } from 'react'
import { BUSINESS } from '../config'

export default function EstimateCalculator() {
  const [service, setService] = useState('ac-repair')
  const [homeSize, setHomeSize] = useState('medium') // small, medium, large
  const [discountType, setDiscountType] = useState('senior') // none, senior (20%), repeat (10%), referral (10%)

  const serviceData = {
    'ac-repair': { name: 'AC Diagnostics & Repair', baseMin: 120, baseMax: 380, note: 'Includes diagnostic fee credited toward repair' },
    'ac-replace': { name: 'Full AC System Replacement', baseMin: 4800, baseMax: 8900, note: 'High-efficiency SEER2 unit + professional install' },
    'hvac-replace': { name: 'HVAC Dual-Fuel Heat Pump', baseMin: 5800, baseMax: 9800, note: 'Year-round cooling and energy-saving heating' },
    'electrical-panel': { name: '200A Electrical Panel Upgrade', baseMin: 1400, baseMax: 2600, note: 'Whole-house capacity + dedicated AC breakers' },
    'tune-up': { name: '21-Point AC Seasonal Tune-Up', baseMin: 89, baseMax: 149, note: 'Full coil, electrical & refrigerant check' },
    'duct-sealing': { name: 'Ductwork Inspection & Sealing', baseMin: 450, baseMax: 1100, note: 'Restores airflow & lowers monthly power bills' }
  }

  const sizeMultiplier = homeSize === 'small' ? 0.85 : homeSize === 'large' ? 1.25 : 1.0
  const discountMultiplier = discountType === 'senior' ? 0.8 : discountType === 'repeat' || discountType === 'referral' ? 0.9 : 1.0

  const active = serviceData[service]
  const estMin = Math.round(active.baseMin * sizeMultiplier * discountMultiplier)
  const estMax = Math.round(active.baseMax * sizeMultiplier * discountMultiplier)
  const savings = Math.round((active.baseMin * sizeMultiplier) * (1 - discountMultiplier))

  return (
    <section className="py-20 bg-[#F4F9FD]">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#C1E8FF] shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
              <div>
                <div className="badge-ice mb-3">Instant Cost Guide</div>
                <h3 className="text-2xl sm:text-3xl font-black text-cold-950 tracking-tight">
                  Estimate Your HVAC or Electrical Project
                </h3>
                <p className="text-sm text-cold-700 mt-2">
                  Get a transparent ballpark range and see your instant savings with Cold AC discounts applied.
                </p>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cold-900 mb-2">
                  1. Select Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {Object.entries(serviceData).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setService(key)}
                      className={`text-left text-xs font-semibold p-3 rounded-xl border transition-all ${
                        service === key
                          ? 'bg-cold-950 text-white border-cold-950 shadow-sm'
                          : 'bg-cold-50/70 text-cold-900 border-cold-200 hover:border-cold-400'
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Property / Home Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cold-900 mb-2">
                  2. Home / Property Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'small', label: 'Under 1,500 sq ft' },
                    { id: 'medium', label: '1,500 – 2,800 sq ft' },
                    { id: 'large', label: '2,800+ sq ft' }
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setHomeSize(size.id)}
                      className={`text-xs font-semibold py-2.5 px-3 rounded-xl border text-center transition-all ${
                        homeSize === size.id
                          ? 'bg-cold-600 text-white border-cold-600'
                          : 'bg-cold-50/70 text-cold-800 border-cold-200 hover:border-cold-400'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Applicable Discount */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cold-900 mb-2">
                  3. Select Qualified Discount
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'senior', label: '20% Senior', tag: 'Elderly' },
                    { id: 'repeat', label: '10% Repeat', tag: 'Loyalty' },
                    { id: 'referral', label: '10% Referral', tag: 'Friend' },
                    { id: 'none', label: 'Standard Rate', tag: 'Regular' }
                  ].map((disc) => (
                    <button
                      key={disc.id}
                      type="button"
                      onClick={() => setDiscountType(disc.id)}
                      className={`text-xs font-semibold p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                        discountType === disc.id
                          ? 'bg-cold-900 text-white border-cold-900 shadow-sm'
                          : 'bg-cold-50/70 text-cold-800 border-cold-200 hover:border-cold-400'
                      }`}
                    >
                      <span>{disc.label}</span>
                      <span className="text-[10px] opacity-75 font-normal">({disc.tag})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Result Display Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#052659] to-[#021024] text-white p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-cold-300 font-bold">
                  Estimated Pricing &bull; Baker &amp; 50-Mi Radius
                </span>

                <div className="mt-4">
                  <div className="text-xs text-cold-200 font-medium">Estimated Project Range:</div>
                  <div className="text-3xl sm:text-4xl font-black text-cold-100 mt-1">
                    ${estMin.toLocaleString()} – ${estMax.toLocaleString()}
                  </div>
                </div>

                {savings > 0 && (
                  <div className="mt-4 p-3 rounded-xl bg-cold-100/10 border border-cold-100/30 flex items-center justify-between text-xs">
                    <span className="text-cold-200">Applied Discount Savings:</span>
                    <span className="text-cold-100 font-bold text-sm">~${savings.toLocaleString()} OFF</span>
                  </div>
                )}

                <p className="mt-4 text-xs text-cold-300 leading-relaxed">
                  {active.note}. Every property is unique; Jim Black provides exact flat-rate proposals before beginning any work.
                </p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2 text-xs text-cold-200">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> No hidden diagnostic travel markups
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> Free in-home estimates on new AC units
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> Licensed, bonded &amp; insured (EIN: 27-2172485)
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="btn-ice w-full text-center text-xs sm:text-sm uppercase tracking-wider font-extrabold py-3.5"
                >
                  Confirm Estimate: (225) 681-1638
                </a>
                <a
                  href="#contact-form"
                  className="btn-dark-ghost w-full text-center text-xs py-2.5"
                >
                  Lock In Pricing Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
