import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { BUSINESS } from '../config'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)

    // set CSS variable for header height so content can offset beneath fixed header
    const setHeaderHeight = () => {
      const h = headerRef.current?.offsetHeight || 120
      document.documentElement.style.setProperty('--site-header-height', `${h}px`)
    }
    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', setHeaderHeight)
    }
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Top Notification / Emergency & Discount Banner */}
      <div className="bg-[#021024] text-white text-[11px] border-b border-[#052659] py-1.5 px-4">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#b91c1c] text-white px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-white pulse-animation"></span>
              24/7 EMERGENCY
            </span>
            <span className="hidden md:inline text-cold-200">
              Serving Baker, Baton Rouge &amp; 50-Mile Radius
            </span>
            <span className="text-cold-100 font-semibold sm:ml-2">
              Mon–Sat 6am–7pm
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="hidden lg:inline text-cold-200 text-[11px]">
              Special Savings: <strong className="text-cold-100 font-bold">20% Senior Discount</strong> &bull; <strong className="text-cold-100 font-bold">10% Repeat</strong>
            </span>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-1.5 text-cold-100 hover:text-white font-bold transition-colors text-xs"
            >
              <svg className="w-3.5 h-3.5 text-cold-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (225) 681-1638
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className={`px-4 pt-2.5 pb-2 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-2.5'}`}>
        <div className="container-wide glass-nav rounded-2xl px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-soft border border-cold-100/60">
          {/* Logo from assets */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logoImg}
              alt="Cold AC HVAC and Electrical Services"
              className="h-9 sm:h-12 w-26 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-cold-900">
            <NavLink
              to="/"
              className={({ isActive }) => isActive
                ? 'text-cold-900 font-bold border-b-2 border-cold-600 pb-1'
                : 'text-cold-800 hover:text-cold-600 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => isActive
                ? 'text-cold-900 font-bold border-b-2 border-cold-600 pb-1'
                : 'text-cold-800 hover:text-cold-600 transition-colors'
              }
            >
              Services
            </NavLink>
            <a
              href="/#discounts"
              className="text-cold-800 hover:text-cold-600 transition-colors flex items-center gap-1"
            >
              <span>Discounts</span>
              <span className="bg-cold-100 text-cold-950 text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                20% OFF
              </span>
            </a>
            <a
              href="/#service-area"
              className="text-cold-800 hover:text-cold-600 transition-colors"
            >
              Service Area
            </a>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive
                ? 'text-cold-900 font-bold border-b-2 border-cold-600 pb-1'
                : 'text-cold-800 hover:text-cold-600 transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) => isActive
                ? 'text-cold-900 font-bold border-b-2 border-cold-600 pb-1'
                : 'text-cold-800 hover:text-cold-600 transition-colors'
              }
            >
              Work Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive
                ? 'text-cold-900 font-bold border-b-2 border-cold-600 pb-1'
                : 'text-cold-800 hover:text-cold-600 transition-colors'
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Quick Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-cold-50 border border-cold-200 text-cold-950 hover:bg-cold-100 font-bold text-sm px-4 py-2.5 rounded-full transition-all shadow-sm"
              title="Call Jim Black directly"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>(225) 681-1638</span>
            </a>

            <Link
              to="/contact"
              className="btn-primary text-xs tracking-wide uppercase px-4 py-2.5"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-xl text-cold-950 hover:bg-cold-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            {open ? (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="fixed inset-0 top-[90px] z-40 bg-cold-950/95 backdrop-blur-xl text-white p-6 overflow-y-auto lg:hidden flex flex-col justify-between animate-fadeIn">
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-cold-800 pb-3">
              <div className="bg-white/90 p-1.5 rounded-xl inline-block">
                <img src={logoImg} alt="Cold AC" className="h-7 w-auto object-contain" />
              </div>
              <span className="text-[11px] uppercase tracking-widest text-cold-400 font-semibold">
                Menu
              </span>
            </div>
            <nav className="flex flex-col space-y-3 text-lg font-semibold">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-cold-400">→</span>
              </Link>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>Services (HVAC &amp; Electrical)</span>
                <span className="text-cold-400">→</span>
              </Link>
              <a
                href="/#discounts"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between text-cold-100"
              >
                <div className="flex items-center gap-2">
                  <span>Special Discounts</span>
                  <span className="bg-cold-600 text-white text-xs px-2 py-0.5 rounded-full">20% OFF</span>
                </div>
                <span className="text-cold-400">→</span>
              </a>
              <a
                href="/#service-area"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>50-Mile Service Area</span>
                <span className="text-cold-400">→</span>
              </a>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>About Jim Black (46 Years)</span>
                <span className="text-cold-400">→</span>
              </Link>
              <Link
                to="/gallery"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>Recent Projects</span>
                <span className="text-cold-400">→</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-cold-900 transition-colors flex items-center justify-between"
              >
                <span>Contact &amp; Map</span>
                <span className="text-cold-400">→</span>
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-cold-800 space-y-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="btn-ice w-full justify-center text-base py-3"
            >
              <svg className="w-5 h-5 text-cold-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Jim: {BUSINESS.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-dark-ghost w-full justify-center py-3 text-sm"
            >
              Request Free Estimate
            </Link>
            <p className="text-xs text-center text-cold-400 pt-2">
              9280 Old Comite Drive, Baker, LA 70714 &bull; EIN: 27-2172485
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
