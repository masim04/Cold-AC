import { useEffect } from 'react'
import ServicesGrid from '../components/ServicesGrid'
import DiscountsSection from '../components/DiscountsSection'
import { BUSINESS } from '../config'

export default function Services() {
  useEffect(() => {
    document.title = 'HVAC & Electrical Services — Cold AC | Baker & Baton Rouge, LA'
  }, [])

  const faqs = [
    {
      q: 'How fast can you respond to an AC emergency?',
      a: 'We offer 24/7 Emergency Dispatch throughout our 50-mile Baker radius. For urgent no-cooling calls during extreme heat advisories, call Jim directly at (225) 681-1638.'
    },
    {
      q: 'How do I claim the 20% Senior / Elderly Discount?',
      a: 'Simply mention code SENIOR20 when calling or select the Senior Discount in our online booking form. It applies to all labor, diagnostics, and repairs for seniors 65+.'
    },
    {
      q: 'Do you provide free estimates on new AC systems?',
      a: 'Yes! We offer 100% free, zero-obligation in-home estimates on complete HVAC and AC system replacements, including heat pumps and split systems.'
    },
    {
      q: 'Can Cold AC upgrade my electrical service panel too?',
      a: 'Yes! Cold AC is a licensed electrical contractor in addition to HVAC. We upgrade 100A panels to 200A+, install dedicated AC disconnects, surge protectors, and generator transfer switches.'
    },
    {
      q: 'What areas do you serve?',
      a: 'We are based at 9280 Old Comite Drive in Baker, LA 70714 and service a 50-mile radius, including Baton Rouge, Zachary, Central, Denham Springs, Gonzales, Prairieville, St. Francisville, Port Allen, and surrounding parishes.'
    }
  ]

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Page Header */}
      <div className="container-wide">
        <div className="max-w-3xl">
          <div className="badge-ice mb-2.5">Expert Service Portfolio</div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cold-950 tracking-tight leading-tight">
            Comprehensive HVAC &amp; Electrical Contracting.
          </h1>
          <p className="mt-3 text-cold-800 text-xs sm:text-sm leading-relaxed">
            From precision cooling diagnostics to whole-house electrical rewiring, Jim Black brings 46 years of proven Louisiana craftsmanship to every job.
          </p>
        </div>
      </div>

      {/* Services Grid with Filter Tabs */}
      <ServicesGrid />

      {/* Special Discounts Banner */}
      <DiscountsSection />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-10">
            <div className="badge-ice mb-2.5">Frequently Asked Questions</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight">
              Got Questions? Jim Has Answers.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-cold-50 border border-cold-200 space-y-2">
                <h3 className="text-base font-bold text-cold-950">
                  {faq.q}
                </h3>
                <p className="text-sm text-cold-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-cold-700">Have a question not listed here?</p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary text-xs uppercase tracking-wider mt-3 inline-flex">
              Call Jim at {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
