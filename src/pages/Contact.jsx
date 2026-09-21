import { useEffect } from 'react'
import ContactForm from '../components/ContactForm'
import { BUSINESS, SOCIAL, SERVICE_AREAS } from '../config'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Cold AC — Call (225) 681-1638 | Baker & Baton Rouge, LA'
  }, [])

  return (
    <div className="pt-28 pb-20">
      <div className="container-wide space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="badge-ice mb-3">Direct Contact &amp; Dispatch</div>
          <h1 className="text-4xl sm:text-5xl font-black text-cold-950 tracking-tight leading-tight">
            Let's Talk About Your HVAC or Electrical Needs.
          </h1>
          <p className="mt-4 text-cold-800 text-base sm:text-lg leading-relaxed">
            Need an emergency diagnostic, a free replacement estimate, or want to apply your 20% senior discount? Reach Jim Black directly or submit your request below.
          </p>
        </div>

        {/* Main Grid: Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Details Box */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="rounded-3xl p-8 bg-gradient-to-br from-[#052659] to-[#021024] text-white shadow-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-cold-200 font-bold">
                Direct Contact Line
              </span>
              <div className="text-3xl sm:text-4xl font-black text-cold-100">
                {BUSINESS.phone}
              </div>
              <p className="text-xs sm:text-sm text-cold-200 leading-relaxed">
                Call directly to speak with owner <strong>Jim Black</strong>. Available 6am–7pm Mon–Sat with 24/7 emergency response for urgent AC breakdowns.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="btn-ice text-xs uppercase tracking-wider font-extrabold w-full py-3.5 text-center justify-center"
                >
                  Click to Call Jim Now
                </a>
              </div>
            </div>

            {/* Address & Hours Info Card */}
            <div className="card space-y-4 bg-white border border-cold-200">
              <h3 className="text-lg font-bold text-cold-950">
                Headquarters &amp; Service Territory
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-cold-800">
                <div className="flex items-start gap-3">
                  <span className="text-base text-cold-600">📍</span>
                  <div>
                    <strong>Base Address:</strong>
                    <p className="text-cold-700">{BUSINESS.address}</p>
                    <span className="text-[11px] text-cold-500">Serving 50 miles across Greater Baton Rouge</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-cold-600">🕒</span>
                  <div>
                    <strong>Operating Hours:</strong>
                    <p className="text-cold-700">{BUSINESS.hours}</p>
                    <p className="text-rose-600 font-semibold">24/7 Emergency Dispatch Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-base text-cold-600">🛡️</span>
                  <div>
                    <strong>Verified Credentials:</strong>
                    <p className="text-cold-700">EIN: {BUSINESS.ein}</p>
                    <p className="text-cold-700">Licensed, Bonded &amp; Insured in Louisiana</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-cold-100 flex items-center gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-2 px-3 flex-1 text-center justify-center"
                >
                  Facebook Profile
                </a>
                <a
                  href={SOCIAL.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-2 px-3 flex-1 text-center justify-center text-red-600"
                >
                  Yelp Reviews
                </a>
              </div>
            </div>

            {/* 50-Mile Cities Tag List */}
            <div className="p-5 rounded-2xl bg-cold-50 border border-cold-200">
              <div className="text-xs font-bold uppercase tracking-wider text-cold-900 mb-2">
                50-Mile Dispatch Coverage Includes:
              </div>
              <p className="text-xs text-cold-700 leading-relaxed">
                Baker, Baton Rouge, Zachary, Central, Denham Springs, Gonzales, Prairieville, Shenandoah, Port Allen, St. Francisville, Walker, Donaldsonville, and nearby communities.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 card bg-white border border-cold-200 p-6 sm:p-10 shadow-soft">
            <h3 className="text-2xl font-black text-cold-950 mb-1">
              Send a Service Request
            </h3>
            <p className="text-xs sm:text-sm text-cold-600 mb-6">
              Complete this form to schedule service or get a free estimate. We respond rapidly!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
