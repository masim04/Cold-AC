import { useState } from 'react'
import ServiceCard from './ServiceCard'
import { SERVICES_DETAILED, BUSINESS } from '../config'

export default function ServicesGrid({ limit }) {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cooling', label: 'AC & Cooling' },
    { id: 'hvac', label: 'HVAC & Heat Pumps' },
    { id: 'electrical', label: 'Electrical Services' },
    { id: 'emergency', label: 'Emergency 24/7' },
    { id: 'quality', label: 'Air Quality & Ducts' }
  ]

  const filtered = SERVICES_DETAILED.filter(s => {
    if (filter === 'all') return true
    return s.category === filter
  })

  const displayed = limit ? filtered.slice(0, limit) : filtered

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
          <div>
            <div className="badge-ice mb-2.5">Licensed HVAC &amp; Electrical</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight">
              Comprehensive HVAC &amp; Electrical Services
            </h2>
            <p className="mt-2 text-cold-700 text-xs sm:text-sm max-w-2xl leading-relaxed">
              From emergency AC breakdowns during hot Louisiana summers to full home electrical panel upgrades, Jim Black brings 46 years of hands-on field experience.
            </p>
          </div>

          <a 
            href={`tel:${BUSINESS.phoneRaw}`} 
            className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5 whitespace-nowrap self-start md:self-auto"
          >
            Emergency Service: {BUSINESS.phone}
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                filter === cat.id
                  ? 'bg-cold-950 text-white shadow-sm'
                  : 'bg-cold-50 text-cold-800 hover:bg-cold-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-cold-50 via-white to-cold-50 border border-cold-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-cold-950">
              Need a Custom Electrical or Commercial HVAC Solution?
            </h3>
            <p className="text-sm text-cold-700 mt-1">
              Jim Black handles custom wiring, backup generator circuits, and multi-zone climate systems within 50 miles of Baker.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-xs uppercase tracking-wider">
              Call Jim Directly
            </a>
            <a href="/services" className="btn-ghost text-xs">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
