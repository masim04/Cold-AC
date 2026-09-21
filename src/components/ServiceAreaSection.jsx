import { useState } from 'react'
import { SERVICE_AREAS, BUSINESS } from '../config'

export default function ServiceAreaSection() {
  const [selectedCity, setSelectedCity] = useState(SERVICE_AREAS[0])

  return (
    <section id="service-area" className="py-20 bg-white relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Info & Radius details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-ice">50-Mile Dispatch Radius</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight">
              Proudly Serving Baker, Baton Rouge &amp; Surrounding Parishes
            </h2>
            <p className="text-cold-700 text-xs sm:text-sm leading-relaxed">
              Based at <strong className="text-cold-950">9280 Old Comite Drive in Baker, Louisiana</strong>, Cold AC dispatches fully-stocked service trucks within a 50-mile radius across East Baton Rouge, West Baton Rouge, Ascension, Livingston, and Feliciana parishes.
            </p>

            {/* Base Highlights Box */}
            <div className="p-5 rounded-2xl bg-cold-50 border border-cold-200 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cold-950 text-cold-100 flex items-center justify-center font-bold text-lg">
                  📍
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-cold-500 font-bold">HQ Base Location</div>
                  <div className="text-sm font-bold text-cold-950">{BUSINESS.address}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-white p-2.5 rounded-xl border border-cold-100">
                  <span className="text-cold-500 block">Dispatch Radius</span>
                  <strong className="text-cold-950 font-bold text-sm">50 Miles</strong>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-cold-100">
                  <span className="text-cold-500 block">Avg Response</span>
                  <strong className="text-cold-950 font-bold text-sm">Same-Day / Rapid</strong>
                </div>
              </div>
            </div>

            {/* Quick City Pills */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cold-900 mb-3">
                Primary Cities We Service:
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all ${
                      selectedCity.name === city.name
                        ? 'bg-cold-950 text-white border-cold-950'
                        : 'bg-cold-50 text-cold-800 border-cold-200 hover:border-cold-400'
                    }`}
                  >
                    {city.name} {city.base && '⭐'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-primary text-xs uppercase tracking-wider py-3 px-6"
              >
                Request Dispatch: {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Right: Graphic Radius Visual Representation */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#052659] to-[#021024] text-white relative overflow-hidden shadow-2xl">
              {/* Radar Rings Effect */}
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-full border border-cold-400/20 flex items-center justify-center">
                {/* 50 mile ring */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cold-300/30 animate-spin" style={{ animationDuration: '60s' }}></div>
                
                {/* 35 mile ring */}
                <div className="w-3/4 h-3/4 rounded-full border border-cold-400/25 flex items-center justify-center">
                  {/* 20 mile ring */}
                  <div className="w-2/3 h-2/3 rounded-full border border-cold-100/30 bg-cold-100/5 flex items-center justify-center">
                    {/* Baker Core Pin */}
                    <div className="text-center p-3 z-10">
                      <div className="w-12 h-12 rounded-full bg-cold-100 text-cold-950 font-black flex items-center justify-center text-xl mx-auto shadow-glow-ice pulse-animation">
                        ❄️
                      </div>
                      <div className="text-xs font-extrabold text-white mt-1">Baker HQ</div>
                      <div className="text-[10px] text-cold-200">70714</div>
                    </div>
                  </div>
                </div>

                {/* Floating Service Markers around radius */}
                <div className="absolute top-4 left-1/4 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                  Zachary (8 mi)
                </div>
                <div className="absolute bottom-8 right-1/4 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                  Baton Rouge (12 mi)
                </div>
                <div className="absolute top-1/3 right-4 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                  Central (10 mi)
                </div>
                <div className="absolute bottom-16 left-6 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                  Port Allen (16 mi)
                </div>
                <div className="absolute top-8 right-10 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/20">
                  Denham Springs (22 mi)
                </div>
              </div>

              {/* Status info bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-cold-200">
                  Selected Area: <strong className="text-white">{selectedCity.name}</strong> ({selectedCity.distance})
                </span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Active Service Zone
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
