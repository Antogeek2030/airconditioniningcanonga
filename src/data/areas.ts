export interface Area {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
}

export const areas: Area[] = [
  {
    slug: 'canoga-park',
    name: 'Canoga Park',
    metaTitle: 'HVAC Services in Canoga Park CA | Local AC & Heating Experts',
    metaDescription: 'Trusted HVAC repair and installation in Canoga Park, CA. Air conditioning, furnaces, and heat pumps served by local technicians.',
    intro: 'Canoga Park is our home base. We provide full-service heating, cooling, and indoor air quality support to residents and businesses throughout the neighborhood, from older homes near the boulevard to newer developments.',
    highlights: [
      'Same-day and next-day service options when available',
      'Familiarity with common local housing stock and duct layouts',
      'Convenient access from our Canoga Park location'
    ]
  },
  {
    slug: 'winnetka',
    name: 'Winnetka',
    metaTitle: 'AC Repair & HVAC Service in Winnetka CA',
    metaDescription: 'Professional air conditioning and heating service for Winnetka homes. Reliable local HVAC technicians nearby.',
    intro: 'Winnetka homeowners rely on consistent cooling during long summers and dependable heat when nights turn cool. We serve the community with repair, maintenance, and installation services tailored to residential systems common in the area.',
    highlights: [
      'Quick response from nearby Canoga Park',
      'Experience with mid-century and ranch-style homes',
      'Maintenance plans to prevent peak-season failures'
    ]
  },
  {
    slug: 'reseda',
    name: 'Reseda',
    metaTitle: 'HVAC Repair in Reseda CA | Air Conditioning & Heating',
    metaDescription: 'Reseda AC repair, furnace service, and HVAC installation from a local team serving the San Fernando Valley.',
    intro: 'Reseda’s mix of single-family homes and multi-unit properties creates varied HVAC needs. We help residents keep systems running efficiently with honest diagnostics and solid workmanship.',
    highlights: [
      'Service for central AC, furnaces, and heat pumps',
      'Duct inspection and sealing options',
      'Clear pricing before any major work begins'
    ]
  },
  {
    slug: 'chatsworth',
    name: 'Chatsworth',
    metaTitle: 'Air Conditioning Repair Chatsworth CA | HVAC Service',
    metaDescription: 'Chatsworth residents trust us for AC repair, heating service, and system replacements. Local, professional HVAC care.',
    intro: 'From the hills to the more established neighborhoods of Chatsworth, temperature control matters year-round. Our technicians provide dependable HVAC repair and installation support throughout the area.',
    highlights: [
      'Comfortable with hillside and larger-lot properties',
      'Heat pump and dual-fuel system experience',
      'Seasonal tune-ups before extreme weather'
    ]
  },
  {
    slug: 'northridge',
    name: 'Northridge',
    metaTitle: 'HVAC Services Northridge CA | AC & Furnace Experts',
    metaDescription: 'Northridge air conditioning repair and heating service. Professional HVAC technicians serving homes near CSUN and beyond.',
    intro: 'Northridge families and property owners need reliable comfort systems. We deliver straightforward AC and heating service with a focus on lasting repairs and properly sized replacements when needed.',
    highlights: [
      'Support for a wide range of system ages and brands',
      'Indoor air quality upgrades available',
      'Responsive scheduling for busy households'
    ]
  },
  {
    slug: 'woodland-hills',
    name: 'Woodland Hills',
    metaTitle: 'AC Repair Woodland Hills CA | Heating & Cooling Service',
    metaDescription: 'Woodland Hills HVAC repair and installation. Quality air conditioning and heating service from experienced local technicians.',
    intro: 'Woodland Hills homes often feature larger floor plans and higher cooling loads. We provide system diagnostics, repairs, and installations that match the comfort expectations of the community.',
    highlights: [
      'Experience with higher-capacity residential systems',
      'Zoning and multi-system solutions',
      'Emphasis on efficiency and quiet operation'
    ]
  },
  {
    slug: 'west-hills',
    name: 'West Hills',
    metaTitle: 'HVAC Repair West Hills CA | Local Air Conditioning Service',
    metaDescription: 'West Hills AC repair, furnace service, and HVAC maintenance. Trusted local technicians ready to help.',
    intro: 'West Hills residents enjoy a suburban setting that still demands strong cooling performance. We keep heating and air conditioning systems in good working order with professional service visits.',
    highlights: [
      'Convenient service from Canoga Park',
      'Preventive maintenance to avoid summer emergencies',
      'Honest recommendations on repair vs. replace'
    ]
  },
  {
    slug: 'tarzana',
    name: 'Tarzana',
    metaTitle: 'Air Conditioning Service Tarzana CA | HVAC Repair',
    metaDescription: 'Tarzana HVAC repair and installation services. Dependable AC and heating technicians for your home.',
    intro: 'Tarzana’s tree-lined streets and varied architecture come with diverse HVAC setups. We diagnose problems carefully and restore comfort with repairs or carefully planned system upgrades.',
    highlights: [
      'Service for both older and updated homes',
      'Mini-split options for additions and bonus rooms',
      'Focus on clean, respectful job sites'
    ]
  },
  {
    slug: 'porter-ranch',
    name: 'Porter Ranch',
    metaTitle: 'HVAC Services Porter Ranch CA | AC & Heating Experts',
    metaDescription: 'Porter Ranch air conditioning and heating service. Professional HVAC repair and maintenance for newer and established homes.',
    intro: 'Porter Ranch includes many newer constructions with modern systems as well as established properties. We support both with maintenance, repair, and replacement services designed for reliable year-round comfort.',
    highlights: [
      'Familiarity with contemporary high-efficiency equipment',
      'Smart thermostat and zoning integration',
      'Scheduled maintenance for warranty support'
    ]
  },
  {
    slug: 'encino',
    name: 'Encino',
    metaTitle: 'AC Repair Encino CA | Heating and Cooling Service',
    metaDescription: 'Encino HVAC repair, AC installation, and furnace service from a local San Fernando Valley team.',
    intro: 'Encino homeowners expect responsive, quality HVAC care. We provide air conditioning and heating solutions ranging from emergency repairs to planned system replacements.',
    highlights: [
      'Prompt diagnostics for cooling and heating failures',
      'Options for improved efficiency and air quality',
      'Transparent communication throughout the job'
    ]
  }
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug);
}
