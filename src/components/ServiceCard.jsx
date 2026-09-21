import { BUSINESS } from '../config'

export default function ServiceCard({ service }) {
  const getCategoryColor = (cat) => {
    switch(cat) {
      case 'emergency': return 'bg-rose-100 text-rose-800 border-rose-200'
      case 'electrical': return 'bg-amber-100 text-amber-900 border-amber-200'
      case 'cooling': return 'bg-cold-100 text-cold-950 border-cold-200'
      case 'heating': return 'bg-orange-100 text-orange-900 border-orange-200'
      default: return 'bg-cold-50 text-cold-800 border-cold-200'
    }
  }

  return (
    <div className="card flex flex-col justify-between group hover:border-cold-400/80 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getCategoryColor(service.category)}`}>
            {service.category === 'emergency' ? '🚨 24/7 Urgent' : service.category}
          </span>
          <span className="text-cold-400 group-hover:text-cold-600 transition-colors font-mono text-sm">
            #ColdAC
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-cold-950 group-hover:text-cold-700 transition-colors mb-2">
          {service.title}
        </h3>

        <p className="text-xs text-cold-800 leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {service.features && (
          <ul className="space-y-1.5 mb-6 text-xs text-cold-700">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cold-600 flex-shrink-0"></span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-cold-100 flex items-center justify-between gap-2">
        <a 
          href={`tel:${BUSINESS.phoneRaw}`} 
          className="text-xs font-bold text-cold-900 hover:text-cold-600 flex items-center gap-1"
        >
          <span>Call Jim</span>
          <span>→</span>
        </a>
        <a 
          href="#contact-form" 
          className="btn-primary text-xs py-2 px-3.5 tracking-normal"
        >
          Book Service
        </a>
      </div>
    </div>
  )
}
