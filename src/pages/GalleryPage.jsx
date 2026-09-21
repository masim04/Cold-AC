import { useEffect } from 'react'
import Gallery from '../components/Gallery'
import { BUSINESS } from '../config'

export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Project Gallery — Cold AC | HVAC & Electrical Contracting'
  }, [])

  return (
    <div className="pt-28 pb-20">
      <div className="container-wide">
        <div className="max-w-3xl mb-4">
          <div className="badge-ice mb-2.5">Field Craftsmanship</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-cold-950 tracking-tight leading-snug">
            Recent HVAC &amp; Electrical Projects
          </h1>
          <p className="mt-3 text-cold-800 text-xs sm:text-sm leading-relaxed">
            Take a look at recent AC condenser replacements, dual-fuel heat pump installations, 200A electrical service panels, and commercial maintenance performed across Baker, Baton Rouge, Zachary, and Central, LA.
          </p>
        </div>

        <Gallery limit={24} />

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#052659] to-[#021024] p-7 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Upgrade or Repair Your System?
            </h3>
            <p className="text-xs text-cold-200 mt-1">
              Call Jim Black directly for a free replacement estimate or same-day diagnostics.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-ice text-xs uppercase tracking-wider font-extrabold py-3 px-6 whitespace-nowrap shadow-glow-ice"
          >
            Call (225) 681-1638
          </a>
        </div>
      </div>
    </div>
  )
}
