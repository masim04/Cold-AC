import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import DiscountsSection from '../components/DiscountsSection'
import ServicesGrid from '../components/ServicesGrid'
import ServiceAreaSection from '../components/ServiceAreaSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactForm from '../components/ContactForm'
import { BUSINESS } from '../config'

export default function Home() {
  const [selectedDiscount, setSelectedDiscount] = useState('SENIOR20')

  useEffect(() => {
    document.title = 'Cold AC — COLD AC HVAC and Electrical Services | Baker, LA'
  }, [])

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Special Discounts Section */}
      <DiscountsSection onSelectDiscount={(code) => setSelectedDiscount(code)} />

      {/* 3. Comprehensive Services Grid */}
      <ServicesGrid />

      {/* 4. 46-Year Story of Jim Black & Cold AC */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-cold-200">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                  alt="Jim Black HVAC Experience"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#052659] to-[#021024] text-white p-5 rounded-2xl border border-cold-100/30 shadow-xl max-w-xs hidden sm:block">
                <div className="text-2xl font-extrabold text-cold-100">46 Years</div>
                <div className="text-xs text-cold-200 mt-1">
                  Continuous heating, air conditioning, and electrical service in Louisiana since 1978.
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="badge-ice">Owner Leadership</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight leading-snug">
                Comfort Starts With 46 Years of Tested Experience.
              </h2>
              <p className="text-cold-800 text-xs sm:text-sm leading-relaxed">
                When your cooling fails in middle of a Louisiana heatwave, you need an experienced technician who knows systems inside out. Founded and led by <strong className="text-cold-950">Jim Black</strong>, Cold AC has been diagnosing, replacing, and maintaining HVAC systems and residential/commercial electrical panels for over 46 years.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cold-50 border border-cold-100 space-y-1">
                  <div className="font-bold text-cold-950 text-sm flex items-center gap-2">
                    <span className="text-cold-600 font-black">01.</span> Upfront Transparent Pricing
                  </div>
                  <div className="text-xs text-cold-700">
                    No deceptive estimates or unapproved charges. Flat-rate proposals before any wrench turns.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cold-50 border border-cold-100 space-y-1">
                  <div className="font-bold text-cold-950 text-sm flex items-center gap-2">
                    <span className="text-cold-600 font-black">02.</span> Dual HVAC &amp; Electrical Pro
                  </div>
                  <div className="text-xs text-cold-700">
                    We safely upgrade dedicated electrical lines, panel disconnects, and breakers alongside your AC.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cold-50 border border-cold-100 space-y-1">
                  <div className="font-bold text-cold-950 text-sm flex items-center gap-2">
                    <span className="text-cold-600 font-black">03.</span> Senior &amp; Community Care
                  </div>
                  <div className="text-xs text-cold-700">
                    20% off for elderly &amp; seniors, 10% repeat discounts, and 10% referral bonuses for life.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cold-50 border border-cold-100 space-y-1">
                  <div className="font-bold text-cold-950 text-sm flex items-center gap-2">
                    <span className="text-cold-600 font-black">04.</span> Baker 50-Mile Dispatch
                  </div>
                  <div className="text-xs text-cold-700">
                    Fully stocked service trucks dispatched from 9280 Old Comite Drive for rapid arrival.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-xs uppercase tracking-wider py-3.5 px-6">
                  Speak Directly With Jim: {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Service Area Section (Baker + 50 Miles) */}
      <ServiceAreaSection />

      {/* 7. Client Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Booking & Fast Quote Section */}
      <section className="py-20 bg-gradient-to-b from-[#021024] to-[#052659] text-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="badge-ice text-cold-100 border-cold-400/40">Ready When You Need Us</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Let's Restore Your Comfort Today.
              </h2>
              <p className="text-cold-200 text-xs sm:text-sm leading-relaxed">
                Schedule a service call, request a free replacement estimate, or claim your 20% senior or 10% repeat discount.
              </p>

              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-cold-200">
                  Prefer to Speak Immediately?
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-cold-100">
                  {BUSINESS.phone}
                </div>
                <div className="text-xs text-cold-300">
                  Operating Hours: 6:00 AM – 7:00 PM Monday to Saturday.<br />
                  24/7 Emergency Dispatch for severe failures.
                </div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="btn-ice text-xs uppercase tracking-wider font-extrabold py-3 px-5 inline-flex mt-2"
                >
                  Call Now (225) 681-1638
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-cold-950">
              <h3 className="text-xl sm:text-2xl font-bold text-cold-950 mb-1">
                Schedule Service or Request Free Estimate
              </h3>
              <p className="text-xs text-cold-600 mb-5">
                Fill in the details below and Jim Black will contact you promptly.
              </p>
              <ContactForm preselectedDiscount={selectedDiscount} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
