export const BUSINESS = {
  name: 'Cold AC',
  legalName: 'COLD AC HVAC and Electrical Services',
  owner: 'Jim Black',
  phone: '(225) 681-1638',
  phoneRaw: '2256811638',
  ein: '27-2172485',
  email: 'service@coldac.org',
  address: '9280 Old Comite Drive, Baker, Louisiana 70714',
  baseCity: 'Baker, LA',
  serviceRadius: '50-Mile Radius from Baker',
  hours: '6:00 AM – 7:00 PM, Monday to Saturday',
  emergency: '24/7 Emergency HVAC & AC Service Available',
  experienceYears: 46,
  licenseStatus: 'Licensed, Bonded & Insured in Louisiana'
}

export const CONTACT = {
  phone: BUSINESS.phone,
  phoneRaw: BUSINESS.phoneRaw,
  email: BUSINESS.email,
  address: BUSINESS.address,
  hours: BUSINESS.hours,
  owner: BUSINESS.owner,
  ein: BUSINESS.ein
}

export const DISCOUNTS = [
  {
    id: 'senior',
    code: 'SENIOR20',
    title: '20% Senior & Elderly Discount',
    percent: '20% OFF',
    description: 'Special 20% savings on labor and repair services for our valued senior citizens across Baker & the Baton Rouge area.',
    badge: 'Most Popular',
    eligibility: 'Ages 65+ on residential repairs & maintenance'
  },
  {
    id: 'repeat',
    code: 'REPEAT10',
    title: '10% Repeat Customer Loyalty',
    percent: '10% OFF',
    description: 'We reward ongoing trust! Returning homeowners & businesses receive 10% off any repair or scheduled service.',
    badge: 'Loyalty Reward',
    eligibility: 'All prior customers of Cold AC'
  },
  {
    id: 'referral',
    code: 'REFER10',
    title: '10% Referral Reward',
    percent: '10% OFF',
    description: 'Tell a neighbor, family member, or friend! When they book a service, you get 10% off your next job.',
    badge: 'Customer Favorite',
    eligibility: 'Applies to your next scheduled service after referral'
  },
  {
    id: 'estimate',
    code: 'FREEEST',
    title: 'Free Replacement Estimate',
    percent: '$0 FREE',
    description: 'Thinking about upgrading your system? Get a thorough on-site evaluation and transparent proposal at no charge.',
    badge: 'Zero Obligation',
    eligibility: 'New AC & HVAC full system installations'
  }
]

export const SERVICES_DETAILED = [
  {
    id: 'ac-repair',
    title: 'AC Repair & Diagnostics',
    category: 'cooling',
    shortDesc: 'Fast troubleshooting for blowing warm air, frozen coils, strange noises, or sudden shutdowns.',
    fullDesc: 'When Louisiana heat is at its peak, you cannot afford to wait. Jim Black and the Cold AC team diagnose electrical components, refrigerant leaks, compressor failures, and blower motors with pinpoint precision.',
    features: ['Same-day emergency response', 'Refrigerant leak detection & recharge', 'Capacitor, contractor & motor repairs', 'All major makes & models serviced'],
    icon: 'wrench'
  },
  {
    id: 'ac-replacement',
    title: 'AC Replacement & Installation',
    category: 'cooling',
    shortDesc: 'High-efficiency SEER2 cooling systems engineered for lower energy bills and whisper-quiet cooling.',
    fullDesc: 'If your existing system is over 10-15 years old or facing frequent repairs, upgrading to a high-efficiency AC system will cut utility bills and protect your indoor comfort for decades.',
    features: ['Free in-home replacement estimates', 'Top-tier brands & warranties', 'Precision duct load calculations', 'Flexible financing options available'],
    icon: 'sparkles'
  },
  {
    id: 'hvac-repair',
    title: 'HVAC Repair & Troubleshooting',
    category: 'hvac',
    shortDesc: 'Comprehensive heating and cooling troubleshooting for reliable year-round climate balance.',
    fullDesc: 'Complete residential and light commercial HVAC diagnostic and repair service. We verify airflow, thermostat communication, electrical connections, and heat exchanger safety.',
    features: ['46 years of proven troubleshooting', 'OEM factory replacement parts', 'Transparent upfront flat-rate pricing', 'Complete system performance testing'],
    icon: 'cpu'
  },
  {
    id: 'hvac-replacement',
    title: 'HVAC Replacement & Heat Pumps',
    category: 'hvac',
    shortDesc: 'Modern dual-fuel heat pumps and central systems designed to handle humid southern summers and damp winters.',
    fullDesc: 'Upgrade your whole-home comfort with modern inverter heat pumps or split HVAC packages designed for high durability and energy conservation in Louisiana climates.',
    features: ['Dual-fuel & heat pump specialists', 'Removal & safe disposal of old units', 'Factory warranty registration', 'Senior & Repeat discounts applicable'],
    icon: 'refresh'
  },
  {
    id: 'emergency-hvac',
    title: '24/7 Emergency HVAC Service',
    category: 'emergency',
    shortDesc: 'Urgent response when extreme temperatures threaten your home safety or commercial operations.',
    fullDesc: 'AC died during a heat advisory or heat quit on a freezing night? Call Jim Black directly at (225) 681-1638 for emergency dispatch within our 50-mile Baker radius.',
    features: ['Direct line to technicians', 'Rapid dispatch within 50 miles', 'Fully stocked service trucks', 'Available weekends and holidays'],
    icon: 'bell-alert'
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services & Panel Upgrades',
    category: 'electrical',
    shortDesc: 'Licensed electrical contracting: AC dedicated circuits, 200A panel upgrades, breakers, and wiring.',
    fullDesc: 'Modern high-efficiency HVAC equipment requires solid, up-to-code electrical infrastructure. As a dual HVAC & Electrical contractor, Cold AC handles breaker boxes, dedicated lines, disconnect boxes, and whole-home surges.',
    features: ['Service panel upgrades (100A to 200A+)', 'AC disconnect box & whip installation', 'Dedicated appliance circuits', 'Generator interlock switches'],
    icon: 'bolt'
  },
  {
    id: 'heating-service',
    title: 'Heating & Furnace Solutions',
    category: 'heating',
    shortDesc: 'Furnace inspections, electric heat strip replacements, and gas heating safety audits.',
    fullDesc: 'Ensure your heating system runs clean, safe, and efficiently before winter cold snaps arrive. We inspect burners, ignition systems, and heat exchangers for deadly carbon monoxide leaks.',
    features: ['Gas and electric furnace repair', 'Heat exchanger crack inspection', 'Blower wheel cleaning & balance', 'Thermostat heat cycle calibration'],
    icon: 'flame'
  },
  {
    id: 'ductwork-solutions',
    title: 'Ductwork Inspection & Sealing',
    category: 'quality',
    shortDesc: 'Eliminate hot spots, reduce humidity leaks, and recover up to 30% lost air conditioning.',
    fullDesc: 'Leaky attic ducts force your AC unit to work double-time in 130-degree attic spaces. We inspect, seal, and redesign duct routing to ensure balanced airflow in every room.',
    features: ['Air leakage detection', 'Mastic duct sealing & insulation wrap', 'Damaged flex duct replacement', 'Airflow balancing across rooms'],
    icon: 'wind'
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality & Humidity Control',
    category: 'quality',
    shortDesc: 'Whole-house dehumidifiers, UV germicidal lamps, and high-efficiency filtration.',
    fullDesc: 'Louisiana humidity fosters mold and allergens. We install advanced whole-home dehumidifiers and UV air purifiers that keep your indoor air pure, fresh, and breathable.',
    features: ['Whole-home dehumidifier systems', 'UV-C germicidal coil lamps', 'MERV 11–16 media air cleaners', 'Mold & allergen prevention'],
    icon: 'shield-check'
  },
  {
    id: 'smart-thermostats',
    title: 'Smart Thermostat Installation',
    category: 'quality',
    shortDesc: 'Professional setup of Nest, Ecobee, and Honeywell smart thermostats with mobile control.',
    fullDesc: 'Take control of your monthly power bill with smart climate scheduling. We correctly wire the C-wire, configure multi-stage cooling/heating, and link to your smartphone app.',
    features: ['C-wire power adapter installation', 'Wi-Fi configuration & phone sync', 'Multi-stage and heat pump programming', 'Energy usage tracking tutorial'],
    icon: 'device'
  },
  {
    id: 'maintenance-plans',
    title: 'Seasonal AC & HVAC Tune-Ups',
    category: 'maintenance',
    shortDesc: 'Comprehensive 21-point preventative inspection to maximize equipment lifespan and avoid breakdowns.',
    fullDesc: 'Prevent sudden breakdowns before the humid summer rush. Our thorough tune-up cleans coils, checks refrigerant pressures, lubricates motors, and tests electrical draw.',
    features: ['21-point safety & performance check', 'Condensate drain line flush', 'Coil cleaning & amp draw test', 'Priority dispatch for club members'],
    icon: 'check-badge'
  },
  {
    id: 'commercial-hvac',
    title: 'Commercial HVAC & Electrical',
    category: 'commercial',
    shortDesc: 'Reliable rooftop package units, split systems, and commercial electrical maintenance for local businesses.',
    fullDesc: 'Keep your customers comfortable and protect sensitive equipment. We provide responsive preventative maintenance and emergency repair for retail stores, offices, and warehouses.',
    features: ['Rooftop units (RTUs) up to 25 tons', 'Preventative maintenance agreements', 'Commercial electrical wiring', 'Rapid after-hours service'],
    icon: 'building'
  }
]

export const SERVICES = SERVICES_DETAILED.map(s => s.title)

export const SERVICE_AREAS = [
  { name: 'Baker, LA', zip: '70714', base: true, distance: 'Base Headquarters' },
  { name: 'Baton Rouge, LA', zip: '70801', distance: '12 miles' },
  { name: 'Zachary, LA', zip: '70791', distance: '8 miles' },
  { name: 'Central, LA', zip: '70739', distance: '10 miles' },
  { name: 'Denham Springs, LA', zip: '70726', distance: '22 miles' },
  { name: 'Prairieville, LA', zip: '70769', distance: '28 miles' },
  { name: 'Gonzales, LA', zip: '70737', distance: '34 miles' },
  { name: 'St. Francisville, LA', zip: '70775', distance: '24 miles' },
  { name: 'Port Allen, LA', zip: '70767', distance: '16 miles' },
  { name: 'Shenandoah, LA', zip: '70817', distance: '20 miles' },
  { name: 'Walker, LA', zip: '70785', distance: '26 miles' },
  { name: 'Donaldsonville, LA', zip: '70346', distance: '45 miles' }
]

export const TESTIMONIALS = [
  {
    name: 'Jessica M.',
    role: 'Homeowner in Baker, LA',
    text: 'COLD AC provided exceptional service, ensuring comfort in our home. Jim and his team were professional, timely, and resolved all our issues efficiently. The 20% senior discount for my mother made a huge difference!',
    rating: 5,
    source: 'Yelp Verified Review'
  },
  {
    name: 'Mark T.',
    role: 'Homeowner in Baton Rouge, LA',
    text: 'Superb experience with COLD AC! They handled our electrical panel upgrade and replaced our ancient condenser smoothly. They exceeded our expectations with their attention to detail and honest pricing.',
    rating: 5,
    source: 'Facebook Review'
  },
  {
    name: 'Linda R.',
    role: 'Commercial Office Manager',
    text: 'COLD AC transformed our office heating and AC system quickly and affordably. With their 46 years of experience, Jim diagnosed an airflow bottleneck in minutes that three other companies missed.',
    rating: 5,
    source: 'Client Review'
  },
  {
    name: 'Robert D.',
    role: 'Central, LA Resident',
    text: 'Called Jim at 7am when our AC stopped blowing cold during an August heatwave. He arrived within 90 minutes, replaced a bad capacitor, flushed the drain line, and had cold air pumping again. Fair, honest, and local.',
    rating: 5,
    source: 'Google Review'
  }
]

export const SOCIAL = {
  facebook: 'https://www.facebook.com/61586249504534/',
  yelp: 'https://www.yelp.com/biz/cold-ac-baker',
  phone: BUSINESS.phone
}

import image1 from './assets/1.jpg'
import image2 from './assets/2.jpg'
import image3 from './assets/3.jpg'
import image4 from './assets/4.jpg'
import image5 from './assets/5.jpg'
import image6 from './assets/6.jpg'
import image7 from './assets/7.jpg'
import image8 from './assets/8.jpg'

export const HERO = {
  badge: '46 Years Serving Baker & Greater Baton Rouge',
  title: '46 Years of Trusted HVAC & Electrical Excellence.',
  subtitle: 'Led by Jim Black. Fast AC repair, high-efficiency replacements, and full electrical contracting within 50 miles of Baker, LA. Mon–Sat 6am–7pm with 24/7 Emergency Dispatch.',
  image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1400&auto=format&fit=crop'
}

export const GALLERY_IMAGES = [
  {
    src: image1,
    alt: 'AC condenser and attic installation work',
    category: 'installation',
    title: 'AC Condenser Replacement',
    location: 'Baker, LA'
  },
  {
    src: image2,
    alt: 'Electrical panel upgrade in attic mechanical room',
    category: 'electrical',
    title: '200A Electrical Panel Upgrade',
    location: 'Baton Rouge, LA'
  },
  {
    src: image3,
    alt: 'Residential HVAC unit in attic',
    category: 'repair',
    title: 'Emergency AC Diagnostic & Repair',
    location: 'Zachary, LA'
  },
  {
    src: image4,
    alt: 'Heat pump installation in a tight attic space',
    category: 'installation',
    title: 'Dual-Fuel Heat Pump Installation',
    location: 'Central, LA'
  },
  {
    src: image5,
    alt: 'Airflow and ductwork work in an attic',
    category: 'quality',
    title: 'Duct Sealing & IAQ Purification',
    location: 'Denham Springs, LA'
  },
  {
    src: image6,
    alt: 'Commercial HVAC package unit in a service area',
    category: 'commercial',
    title: 'Commercial RTU Seasonal Tune-Up',
    location: 'Gonzales, LA'
  },
  {
    src: image7,
    alt: 'HVAC equipment install in an attic',
    category: 'installation',
    title: 'Residential HVAC Installation',
    location: 'Port Allen, LA'
  },
  {
    src: image8,
    alt: 'Service call on an aging air conditioning unit',
    category: 'repair',
    title: 'System Repair & Performance Check',
    location: 'East Baton Rouge Parish, LA'
  }
]
