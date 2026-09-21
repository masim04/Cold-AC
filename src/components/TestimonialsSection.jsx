import { TESTIMONIALS, SOCIAL, BUSINESS } from '../config'

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#F4F9FD]">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="badge-ice mb-2.5">Verified Local Reviews</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight">
            Loved by Homeowners Across Louisiana
          </h2>
          <p className="text-xs sm:text-sm text-cold-700 mt-2.5 leading-relaxed">
            Read real feedback from clients in Baker, Baton Rouge, Zachary, Central, and surrounding communities who rely on Jim Black for dependable HVAC and electrical contracting.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="card bg-white flex flex-col justify-between border border-cold-100 hover:border-cold-400/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="text-amber-400 text-base tracking-tight">
                    {'★'.repeat(t.rating)}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-cold-500 bg-cold-50 px-2 py-0.5 rounded-full border border-cold-100">
                    {t.source}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-cold-800 leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-cold-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cold-900 text-cold-100 font-bold text-xs flex items-center justify-center">
                  {t.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-bold text-cold-950">{t.name}</div>
                  <div className="text-[11px] text-cold-600">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof & Review Badges */}
        <div className="mt-12 rounded-2xl bg-white border border-cold-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="text-sm font-bold text-cold-950">
                46 Years of Trusted Reputation in Greater Baton Rouge
              </div>
              <div className="text-xs text-cold-600">
                Check our official business profiles on Facebook and Yelp.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-4 flex items-center gap-2 border-cold-200"
            >
              <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Reviews</span>
            </a>

            <a
              href={SOCIAL.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs py-2 px-4 flex items-center gap-2 border-cold-200"
            >
              <span className="text-red-600 font-bold">yelp</span>
              <span>Yelp Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
