import { useState, useEffect } from 'react'
import { GALLERY_IMAGES } from '../config'

export default function Gallery({ limit = 12 }) {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const [index, setIndex] = useState(0)

  const cats = [
    { id: 'all', label: 'All Projects' },
    { id: 'installation', label: 'AC & Heat Pump Installations' },
    { id: 'electrical', label: 'Electrical Panels & Wiring' },
    { id: 'repair', label: 'Emergency Repairs' },
    { id: 'commercial', label: 'Commercial RTUs' }
  ]

  const visible = GALLERY_IMAGES.filter(i => filter === 'all' || i.category === filter).slice(0, limit)

  useEffect(() => {
    function onKey(e) {
      if (!lightbox) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') {
        const next = Math.min(index + 1, visible.length - 1)
        setIndex(next)
        setLightbox(visible[next])
      }
      if (e.key === 'ArrowLeft') {
        const prev = Math.max(index - 1, 0)
        setIndex(prev)
        setLightbox(visible[prev])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, visible, index])

  function open(i) {
    setIndex(i)
    setLightbox(visible[i])
  }

  return (
    <section className="py-16">
      <div className="container-wide">
        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-8">
          {cats.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all ${
                filter === c.id
                  ? 'bg-cold-950 text-white shadow-sm'
                  : 'bg-cold-50 text-cold-800 hover:bg-cold-100'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((img, idx) => (
            <div
              key={idx}
              onClick={() => open(idx)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white border border-cold-200 shadow-soft hover:shadow-frost hover:border-cold-400 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cold-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-xs text-cold-100 font-bold flex items-center gap-1.5">
                    <span>Click to Expand</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-cold-500 mb-1">
                    {img.location || 'Baker & Baton Rouge, LA'}
                  </div>
                  <h4 className="text-base font-bold text-cold-950 group-hover:text-cold-700 transition-colors">
                    {img.title || img.alt}
                  </h4>
                </div>
                <div className="mt-3 pt-3 border-t border-cold-100 flex items-center justify-between text-xs text-cold-600">
                  <span className="capitalize font-medium">{img.category}</span>
                  <span className="text-cold-900 font-bold group-hover:translate-x-1 transition-transform">
                    View &bull;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-cold-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cold-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-5 bg-cold-950 text-white flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">{lightbox.title || lightbox.alt}</h4>
                <p className="text-xs text-cold-300">{lightbox.location} &bull; Cold AC Field Installation</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
