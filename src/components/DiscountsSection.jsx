import { useState } from 'react'
import { DISCOUNTS, BUSINESS } from '../config'

export default function DiscountsSection({ onSelectDiscount }) {
  const [copiedCode, setCopiedCode] = useState(null)

  const copyCode = (code) => {
    navigator.clipboard?.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2500)
  }

  return (
    <section id="discounts" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#021024] via-[#052659] to-[#021024] text-white">
      {/* Background frost glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cold-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cold-100/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cold-100/10 border border-cold-100/20 text-cold-100 text-xs font-bold tracking-wider uppercase mb-3">
            <span className="text-cold-100">❄️</span> Special Community Offers
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
            Fair Pricing &amp; Exclusive Discounts for Our Neighbors
          </h2>
          <p className="mt-3 text-cold-200 text-xs sm:text-sm leading-relaxed">
            At Cold AC, Jim Black believes in honoring our seniors, rewarding customer loyalty, and giving back to the Louisiana community that has supported us for 46 years.
          </p>
        </div>

        {/* Discounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISCOUNTS.map((item) => {
            const isSenior = item.id === 'senior'
            return (
              <div 
                key={item.id}
                className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 ${
                  isSenior 
                    ? 'bg-gradient-to-b from-[#0d3875] to-[#052659] border-2 border-cold-100 shadow-glow-ice' 
                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-cold-400/40 hover:bg-white/10'
                }`}
              >
                {/* Ribbon badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    isSenior 
                      ? 'bg-cold-100 text-cold-950 font-black' 
                      : 'bg-cold-800 text-cold-200 border border-cold-700'
                  }`}>
                    {item.badge}
                  </span>
                  <span className="text-[11px] text-cold-300 font-mono">
                    Code: <strong className="text-white">{item.code}</strong>
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1.5 flex items-baseline gap-1">
                    <span className={isSenior ? 'text-cold-100' : 'text-cold-300'}>
                      {item.percent}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-cold-200 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Action & Eligibility */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="text-[11px] text-cold-300 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-cold-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.eligibility}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href="#contact-form"
                      onClick={() => onSelectDiscount && onSelectDiscount(item.code)}
                      className={`w-full text-center text-xs font-bold py-2.5 px-3 rounded-xl transition-all ${
                        isSenior
                          ? 'bg-cold-100 text-cold-950 hover:bg-white shadow-sm'
                          : 'bg-cold-600 hover:bg-cold-500 text-white'
                      }`}
                    >
                      Apply to Service
                    </a>
                    <button
                      onClick={() => copyCode(item.code)}
                      title="Copy promo code"
                      className="px-3 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs font-mono transition-colors"
                    >
                      {copiedCode === item.code ? '✓' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cold-600/30 flex items-center justify-center text-2xl flex-shrink-0 border border-cold-400/30">
              🤝
            </div>
            <div>
              <div className="text-white font-bold text-base">
                Discounts Honored with Upfront Honesty
              </div>
              <div className="text-cold-300 text-xs sm:text-sm">
                Mention your discount when calling Jim at {BUSINESS.phone} or select it during online booking. No hidden markups, ever.
              </div>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-ice text-xs uppercase tracking-wider font-extrabold whitespace-nowrap px-6 py-3"
          >
            Call to Redeem: {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
