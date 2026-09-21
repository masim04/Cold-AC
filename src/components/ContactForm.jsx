import { useState } from 'react'
import { BUSINESS, SERVICES_DETAILED, DISCOUNTS } from '../config'

export default function ContactForm({ preselectedDiscount }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'AC Repair & Diagnostics',
    property: 'Residential',
    discount: preselectedDiscount || 'SENIOR20',
    isEmergency: false,
    date: '',
    address: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl p-8 bg-gradient-to-br from-[#052659] to-[#021024] text-white border border-[#C1E8FF]/30 shadow-2xl text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-cold-100 text-cold-950 font-black text-2xl flex items-center justify-center mx-auto shadow-glow-ice">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-white">
          Request Received, {form.name}!
        </h3>
        <p className="text-sm text-cold-200 max-w-md mx-auto">
          Jim Black and the Cold AC team will review your details and call you at <strong className="text-white">{form.phone}</strong> shortly.
        </p>
        {form.discount && form.discount !== 'NONE' && (
          <div className="inline-block bg-cold-100/20 border border-cold-100/40 text-cold-100 px-3.5 py-1.5 rounded-full text-xs font-bold">
            Discount Applied: {form.discount}
          </div>
        )}
        <div className="pt-4">
          <p className="text-xs text-cold-300">Need emergency dispatch immediately?</p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-ice text-xs uppercase tracking-wider font-black mt-2 inline-flex"
          >
            Direct Line: (225) 681-1638
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} id="contact-form" className="space-y-4">
      {/* Emergency Alert Toggle */}
      <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-600 pulse-animation"></span>
          <span className="text-xs font-bold text-rose-900">
            Is this an urgent HVAC emergency?
          </span>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="isEmergency"
            checked={form.isEmergency}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-rose-600"></div>
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jim Black"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="(225) 681-1638"
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="homeowner@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
          />
        </div>

        {/* City or ZIP */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Service Address / City / ZIP
          </label>
          <input
            type="text"
            name="address"
            placeholder="Baker, Baton Rouge, Zachary..."
            value={form.address}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Dropdown */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Service Required *
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
          >
            {SERVICES_DETAILED.map(s => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
        </div>

        {/* Special Discount Claimed */}
        <div>
          <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
            Special Discount
          </label>
          <select
            name="discount"
            value={form.discount}
            onChange={handleChange}
            className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none font-medium"
          >
            <option value="SENIOR20">👵 20% Elderly / Senior Discount</option>
            <option value="REPEAT10">🔁 10% Repeat Customer Discount</option>
            <option value="REFER10">🤝 10% Referral Reward</option>
            <option value="FREEEST">❄️ Free Replacement Estimate ($0)</option>
            <option value="NONE">Standard Rate (No Discount)</option>
          </select>
        </div>
      </div>

      {/* Message / Description */}
      <div>
        <label className="block text-xs font-bold text-cold-900 uppercase tracking-wider mb-1.5">
          Describe the issue or project details
        </label>
        <textarea
          name="message"
          rows="3"
          placeholder="E.g. AC stopped cooling yesterday, blowing ambient air, unit is outside Baker..."
          value={form.message}
          onChange={handleChange}
          className="w-full bg-cold-50 border border-cold-200 focus:border-cold-600 focus:bg-white rounded-xl p-3 text-sm text-cold-950 transition-colors focus:outline-none"
        ></textarea>
      </div>

      {/* Buttons & Direct Call CTA */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full sm:w-auto text-xs uppercase tracking-wider font-extrabold py-3.5 px-7"
        >
          {loading ? 'Submitting...' : 'Submit Service Request'}
        </button>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="btn-ghost w-full sm:w-auto text-xs text-center py-3.5 px-5"
        >
          Or Call Jim: (225) 681-1638
        </a>
      </div>

      <div className="text-[11px] text-cold-500 pt-1 flex items-center gap-2">
        <span>🔒 Your information is confidential &bull; Licensed &amp; Insured &bull; EIN: 27-2172485</span>
      </div>
    </form>
  )
}
