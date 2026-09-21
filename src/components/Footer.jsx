import { Link } from 'react-router-dom'
import { BUSINESS, CONTACT, SERVICES_DETAILED, SOCIAL, DISCOUNTS } from '../config'
import logoImg from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#021024] text-white border-t border-[#052659] pt-14 pb-12 mt-12">
      <div className="container-wide">
        {/* Top Emergency Action Bar */}
        <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-r from-[#052659] via-[#0d3875] to-[#052659] border border-cold-100/20 shadow-xl mb-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-500 pulse-animation"></span>
              24/7 Emergency Dispatch Line
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              HVAC Breakdown in Louisiana?
            </h3>
            <p className="text-xs text-cold-200">
              When heat indexes soar, don't wait. Call Jim Black directly for rapid service in our 50-mile Baker radius.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="btn-ice text-xs uppercase tracking-wider font-extrabold py-3 px-5 whitespace-nowrap shadow-glow-ice"
            >
              Call (225) 681-1638
            </a>
            <Link
              to="/contact"
              className="btn-dark-ghost text-xs uppercase tracking-wider font-bold py-3 px-5 whitespace-nowrap"
            >
              Book Service Online
            </Link>
          </div>
        </div>

        {/* 4 Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-cold-900">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 px-3 py-1.5 rounded-xl inline-block shadow-sm">
              <img src={logoImg} alt="Cold AC Logo" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-xs sm:text-sm text-cold-300 leading-relaxed max-w-sm">
              <strong>COLD AC HVAC and Electrical Services</strong>, led by <strong>Jim Black</strong>. 46 years of proven cooling, heating, and electrical contracting serving Baker, Baton Rouge, and a 50-mile radius.
            </p>
            <div className="pt-2 text-xs text-cold-400 space-y-1">
              <div><strong>Owner:</strong> Jim Black</div>
              <div><strong>EIN:</strong> 27-2172485 (Licensed &amp; Insured)</div>
              <div><strong>Base:</strong> 9280 Old Comite Drive, Baker, LA 70714</div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={SOCIAL.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-cold-900 border border-cold-700 flex items-center justify-center text-white hover:bg-cold-700 hover:text-cold-100 transition-colors"
                title="Follow Cold AC on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={SOCIAL.yelp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-cold-900 border border-cold-700 flex items-center justify-center text-white hover:bg-cold-700 hover:text-cold-100 transition-colors"
                title="Review Cold AC on Yelp"
              >
                <span className="font-extrabold text-xs text-red-400">Yelp</span>
              </a>
              <a 
                href={`tel:${BUSINESS.phoneRaw}`} 
                className="w-9 h-9 rounded-xl bg-cold-900 border border-cold-700 flex items-center justify-center text-white hover:bg-cold-700 hover:text-cold-100 transition-colors"
                title="Call Jim directly"
              >
                <svg className="w-4 h-4 text-cold-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              HVAC &amp; Electrical
            </h4>
            <ul className="text-xs text-cold-300 space-y-2">
              {SERVICES_DETAILED.slice(0, 6).map(s => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-cold-100 hover:underline transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Special Discounts */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              Special Discounts
            </h4>
            <ul className="text-xs text-cold-300 space-y-2.5">
              <li>
                <a href="/#discounts" className="text-cold-100 font-bold hover:underline block">
                  20% Senior Discount
                </a>
                <span className="text-[11px] text-cold-400">For elderly &amp; seniors 65+</span>
              </li>
              <li>
                <a href="/#discounts" className="text-cold-100 font-bold hover:underline block">
                  10% Repeat Customer
                </a>
                <span className="text-[11px] text-cold-400">Ongoing client savings</span>
              </li>
              <li>
                <a href="/#discounts" className="text-cold-100 font-bold hover:underline block">
                  10% Referral Reward
                </a>
                <span className="text-[11px] text-cold-400">For recommending a neighbor</span>
              </li>
              <li>
                <a href="/#discounts" className="text-cold-100 font-bold hover:underline block">
                  Free Estimate ($0)
                </a>
                <span className="text-[11px] text-cold-400">On all replacements</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wider uppercase">
              Contact &amp; Hours
            </h4>
            <div className="text-xs text-cold-300 space-y-2 leading-relaxed">
              <p>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${BUSINESS.phoneRaw}`} className="text-cold-100 font-bold hover:underline">
                  {BUSINESS.phone}
                </a>
              </p>
              <p>
                <strong>Hours:</strong> {BUSINESS.hours}
              </p>
              <p className="text-rose-300">
                <strong>Emergency:</strong> 24/7 HVAC Service
              </p>
              <p>
                <strong>Address:</strong><br />
                {BUSINESS.address}
              </p>
              <p>
                <strong>Service Area:</strong> Baker + 50-Mile Radius (Baton Rouge, Zachary, Central, Denham Springs, Gonzales, Prairieville)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cold-400">
          <div>
            &copy; {new Date().getFullYear()} Cold AC. All rights reserved. &bull; EIN: 27-2172485 &bull; Licensed in Louisiana
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-cold-200">About Jim Black</Link>
            <span>&bull;</span>
            <Link to="/services" className="hover:text-cold-200">Services</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-cold-200">Contact</Link>
            <span>&bull;</span>
            <a href={SOCIAL.yelp} target="_blank" rel="noopener noreferrer" className="hover:text-cold-200">Yelp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
