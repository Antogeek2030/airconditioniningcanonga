export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  process: { title: string; description: string }[];
  priceRange: string;
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'air-conditioner-repair',
    title: 'Air Conditioner Repair in Canoga Park',
    shortTitle: 'AC Repair',
    metaTitle: 'Air Conditioner Repair Canoga Park CA | Fast Same-Day Service',
    metaDescription: 'Need AC repair in Canoga Park? Our local technicians diagnose and fix air conditioners quickly. Reliable service for homes and businesses. Call today.',
    intro: 'When your air conditioner stops cooling on a hot San Fernando Valley day, you need help fast. We provide thorough air conditioner repair throughout Canoga Park and nearby neighborhoods. Our technicians arrive ready to diagnose common issues—from failed capacitors and refrigerant leaks to blower motor problems—and restore comfort as efficiently as possible.',
    process: [
      { title: 'Schedule Your Service', description: 'Call or request service online. We offer flexible appointment windows, including same-day options when available.' },
      { title: 'Diagnosis On Site', description: 'A technician inspects your system, checks electrical components, refrigerant levels, airflow, and thermostat operation.' },
      { title: 'Clear Explanation', description: 'You receive a straightforward summary of the problem and recommended repairs before any work begins.' },
      { title: 'Repair and Test', description: 'We complete the approved repairs, test the system under load, and confirm cooling performance before leaving.' }
    ],
    priceRange: 'Typical diagnostic visits start around $89–$129. Most common repairs (capacitors, contactors, motors) range from $150–$600 depending on parts and system age. Final pricing is provided after diagnosis.',
    faqs: [
      { question: 'How quickly can you respond to an AC breakdown?', answer: 'We prioritize emergency calls and often offer same-day appointments during peak season. Call early for the best availability.' },
      { question: 'Do you repair all brands of air conditioners?', answer: 'Yes. We service most major residential brands including Carrier, Trane, Lennox, Rheem, Goodman, and others.' },
      { question: 'What if my AC is old—should I repair or replace?', answer: 'If the unit is over 12–15 years old and needs major components, we will discuss replacement options so you can make an informed decision.' }
    ],
    related: ['ac-installation', 'hvac-maintenance', 'emergency-hvac-repair', 'refrigerant-recharge']
  },
  {
    slug: 'ac-installation',
    title: 'Air Conditioner Installation in Canoga Park',
    shortTitle: 'AC Installation',
    metaTitle: 'AC Installation Canoga Park CA | New Air Conditioner Systems',
    metaDescription: 'Professional air conditioner installation in Canoga Park. Proper sizing, quality equipment, and careful workmanship for reliable cooling.',
    intro: 'Replacing an aging air conditioner or installing a new system is a significant investment. We handle residential AC installation with attention to correct sizing, duct compatibility, and efficient operation. From high-efficiency central systems to modern options, our goal is a system that keeps your Canoga Park home comfortable for years.',
    process: [
      { title: 'Home Assessment', description: 'We evaluate your home’s cooling load, existing ductwork, electrical capacity, and preferred efficiency goals.' },
      { title: 'System Recommendation', description: 'You receive clear options with efficiency ratings, estimated operating costs, and warranty details.' },
      { title: 'Professional Installation', description: 'Our team removes the old equipment, installs the new system, seals connections, and configures controls.' },
      { title: 'Startup and Walkthrough', description: 'We start the system, verify performance, and show you how to operate and maintain it.' }
    ],
    priceRange: 'Complete AC replacement typically ranges from $4,500–$12,000+ depending on system size, efficiency, and installation complexity. Free estimates available.',
    faqs: [
      { question: 'How long does a typical AC installation take?', answer: 'Most standard replacements are completed in one day. More complex jobs or duct modifications may take longer.' },
      { question: 'Will you help with permits if required?', answer: 'Yes. We handle necessary permits and inspections for installations in the City of Los Angeles and surrounding areas.' },
      { question: 'What efficiency rating should I look for?', answer: 'Higher SEER2 ratings generally mean lower operating costs. We help match efficiency to your budget and usage patterns.' }
    ],
    related: ['air-conditioner-repair', 'hvac-maintenance', 'ductwork-repair', 'smart-thermostat']
  },
  {
    slug: 'furnace-repair',
    title: 'Furnace Repair in Canoga Park',
    shortTitle: 'Furnace Repair',
    metaTitle: 'Furnace Repair Canoga Park CA | Heating System Service',
    metaDescription: 'Reliable furnace repair in Canoga Park. Fix no-heat issues, strange noises, and inefficient heating before cold nights arrive.',
    intro: 'A reliable furnace is essential when temperatures drop in the Valley. We diagnose and repair gas and electric furnaces for homeowners in Canoga Park. Whether your system fails to start, cycles too frequently, or produces uneven heat, our technicians identify the root cause and restore safe operation.',
    process: [
      { title: 'Safety First Check', description: 'We inspect for gas leaks, carbon monoxide risks, and electrical hazards before proceeding.' },
      { title: 'Full System Diagnosis', description: 'Ignition, flame sensor, blower, limit switches, and thermostat signals are tested systematically.' },
      { title: 'Repair Options Presented', description: 'You receive an honest assessment of repair costs versus the age and condition of the furnace.' },
      { title: 'Safe Restart', description: 'After approved repairs, we verify proper ignition, airflow, and temperature rise.' }
    ],
    priceRange: 'Diagnostic fees typically $89–$129. Common repairs (ignitors, flame sensors, motors) often fall between $175–$550. Quotes provided before work.',
    faqs: [
      { question: 'Is it safe to keep using a furnace that makes unusual noises?', answer: 'Unusual noises can indicate mechanical issues. Schedule service promptly to avoid further damage or safety concerns.' },
      { question: 'Do you work on both gas and electric furnaces?', answer: 'Yes, we service natural gas, propane, and electric furnaces commonly found in the area.' },
      { question: 'How often should a furnace be inspected?', answer: 'Annual professional maintenance is recommended, ideally before the heating season begins.' }
    ],
    related: ['furnace-installation', 'furnace-tune-up', 'hvac-maintenance', 'emergency-hvac-repair']
  },
  {
    slug: 'furnace-installation',
    title: 'Furnace Installation in Canoga Park',
    shortTitle: 'Furnace Installation',
    metaTitle: 'Furnace Installation Canoga Park CA | New Heating Systems',
    metaDescription: 'Professional furnace installation in Canoga Park. Correctly sized, efficient heating systems installed by experienced technicians.',
    intro: 'Installing a new furnace is an opportunity to improve comfort, safety, and energy efficiency. We provide complete furnace installation services for Canoga Park homes, including proper sizing, safe gas and electrical connections, and integration with existing duct systems or new configurations.',
    process: [
      { title: 'Load Calculation', description: 'We determine the right furnace capacity based on your home’s size, insulation, and climate needs.' },
      { title: 'Equipment Selection', description: 'Options for AFUE efficiency, single-stage vs. multi-stage, and compatible thermostats are reviewed with you.' },
      { title: 'Removal and Install', description: 'Old equipment is removed carefully. The new furnace is set, connected, and sealed to manufacturer standards.' },
      { title: 'Commissioning', description: 'We test for proper combustion, temperature rise, and safety controls, then demonstrate operation.' }
    ],
    priceRange: 'Furnace replacement generally ranges from $3,500–$9,000+ depending on efficiency, size, and installation requirements. Written estimates provided.',
    faqs: [
      { question: 'How long does furnace installation take?', answer: 'Most installations are completed in a single day. Complex duct or gas line work may extend the timeline.' },
      { question: 'Can you install a high-efficiency furnace in my older home?', answer: 'Often yes. We evaluate venting requirements and may recommend high-efficiency models with appropriate exhaust solutions.' },
      { question: 'What warranty comes with a new furnace?', answer: 'Manufacturer warranties typically cover parts for 5–10 years or more. We explain labor coverage options as well.' }
    ],
    related: ['furnace-repair', 'furnace-tune-up', 'smart-thermostat', 'hvac-maintenance']
  },
  {
    slug: 'heat-pump-repair',
    title: 'Heat Pump Repair in Canoga Park',
    shortTitle: 'Heat Pump Repair',
    metaTitle: 'Heat Pump Repair Canoga Park CA | Heating & Cooling Service',
    metaDescription: 'Expert heat pump repair in Canoga Park. Restore efficient year-round comfort when your heat pump underperforms or stops working.',
    intro: 'Heat pumps provide both heating and cooling, making them a popular choice in Southern California. When performance drops—weak airflow, ice buildup, or failure to switch modes—we diagnose the issue and perform precise heat pump repair for Canoga Park residents.',
    process: [
      { title: 'Mode and Performance Check', description: 'We verify heating and cooling modes, refrigerant pressures, and reversing valve operation.' },
      { title: 'Component Testing', description: 'Compressors, outdoor fans, sensors, and defrost cycles are inspected for faults.' },
      { title: 'Targeted Repair', description: 'Approved fixes are completed with attention to refrigerant handling and electrical safety.' },
      { title: 'System Verification', description: 'Both modes are tested to confirm balanced, efficient operation.' }
    ],
    priceRange: 'Diagnostics $89–$129. Repairs commonly range $200–$800 depending on the component. Refrigerant-related work varies with system charge needs.',
    faqs: [
      { question: 'Why is my heat pump icing up?', answer: 'Ice can form from low refrigerant, restricted airflow, or a failing defrost cycle. Professional diagnosis is needed.' },
      { question: 'Can you repair ductless mini-split heat pumps too?', answer: 'Yes. We service both central heat pumps and ductless mini-split systems.' },
      { question: 'Is repair worth it on an older heat pump?', answer: 'We weigh repair cost against remaining expected life and efficiency so you can decide confidently.' }
    ],
    related: ['heat-pump-installation', 'mini-split-installation', 'hvac-maintenance', 'air-conditioner-repair']
  },
  {
    slug: 'heat-pump-installation',
    title: 'Heat Pump Installation in Canoga Park',
    shortTitle: 'Heat Pump Installation',
    metaTitle: 'Heat Pump Installation Canoga Park CA | Efficient HVAC Systems',
    metaDescription: 'Professional heat pump installation in Canoga Park. Enjoy efficient heating and cooling with a properly sized modern system.',
    intro: 'A modern heat pump can handle most of the heating and cooling needs of Canoga Park homes with excellent efficiency. We design and install heat pump systems that match your home’s load, ductwork (or ductless layout), and comfort preferences.',
    process: [
      { title: 'Site Evaluation', description: 'We assess space for outdoor units, electrical service, and indoor distribution options.' },
      { title: 'System Design', description: 'Capacity, efficiency (HSPF2/SEER2), and features such as variable-speed operation are selected together.' },
      { title: 'Installation', description: 'Equipment is placed, lineset and electrical connections completed, and controls configured.' },
      { title: 'Performance Startup', description: 'We commission the system in both modes and walk you through operation and maintenance.' }
    ],
    priceRange: 'Heat pump installations commonly range from $6,000–$15,000+ depending on capacity, efficiency, and whether ductwork modifications are needed.',
    faqs: [
      { question: 'Are heat pumps effective in the San Fernando Valley climate?', answer: 'Yes. Mild winters and warm summers make heat pumps an excellent fit for most local homes.' },
      { question: 'Do I still need a furnace with a heat pump?', answer: 'Many homes operate year-round on a heat pump alone. Dual-fuel setups are an option if desired.' },
      { question: 'How long does installation take?', answer: 'Standard installs often finish in 1–2 days. Ductless multi-zone systems may require additional time.' }
    ],
    related: ['heat-pump-repair', 'mini-split-installation', 'ac-installation', 'smart-thermostat']
  },
  {
    slug: 'hvac-maintenance',
    title: 'HVAC Maintenance Plans in Canoga Park',
    shortTitle: 'HVAC Maintenance',
    metaTitle: 'HVAC Maintenance Canoga Park CA | Prevent Breakdowns',
    metaDescription: 'Keep your heating and cooling systems running efficiently with professional HVAC maintenance in Canoga Park. Scheduled tune-ups that protect your investment.',
    intro: 'Regular HVAC maintenance helps prevent unexpected breakdowns, maintains efficiency, and extends equipment life. We offer thorough seasonal tune-ups for air conditioners, furnaces, and heat pumps serving Canoga Park homes and small businesses.',
    process: [
      { title: 'Schedule Seasonal Visit', description: 'Choose spring cooling or fall heating service, or enroll in a twice-yearly plan.' },
      { title: 'Comprehensive Inspection', description: 'Filters, coils, electrical connections, refrigerant levels, combustion, and safety controls are checked.' },
      { title: 'Cleaning and Adjustments', description: 'We clean accessible components, lubricate moving parts, and calibrate thermostats as needed.' },
      { title: 'Report and Recommendations', description: 'You receive a summary of system condition and any suggested follow-up items.' }
    ],
    priceRange: 'Single tune-ups typically $99–$179. Annual maintenance plans offer discounted rates and priority scheduling. Ask about current plan pricing.',
    faqs: [
      { question: 'How often should HVAC systems be maintained?', answer: 'Most manufacturers recommend professional service at least once per year; twice yearly is ideal for systems that heat and cool.' },
      { question: 'Does maintenance really prevent breakdowns?', answer: 'Many common failures—dirty coils, weak capacitors, restricted filters—are caught and corrected during routine visits.' },
      { question: 'Is a maintenance plan required for warranty coverage?', answer: 'Some manufacturer warranties expect documented professional maintenance. We help keep records that support warranty claims.' }
    ],
    related: ['ac-tune-up', 'furnace-tune-up', 'air-conditioner-repair', 'furnace-repair']
  },
  {
    slug: 'duct-cleaning',
    title: 'Duct Cleaning Services in Canoga Park',
    shortTitle: 'Duct Cleaning',
    metaTitle: 'Air Duct Cleaning Canoga Park CA | Improve Indoor Air',
    metaDescription: 'Professional air duct cleaning in Canoga Park. Remove dust, debris, and allergens from your ductwork for cleaner indoor air.',
    intro: 'Over time, dust, pet dander, and debris accumulate in ductwork and can circulate through your home. Professional duct cleaning can improve airflow and reduce airborne particles when performed properly. We serve Canoga Park homes with careful, methodical duct cleaning services.',
    process: [
      { title: 'Inspection', description: 'We examine supply and return ducts, registers, and accessible plenums to assess the need for cleaning.' },
      { title: 'Containment and Access', description: 'Registers are sealed or removed as needed; negative pressure methods help contain debris.' },
      { title: 'Agitation and Extraction', description: 'Specialized tools dislodge buildup, and high-powered vacuum systems remove it from the system.' },
      { title: 'Final Check', description: 'We verify cleanliness at key points and reinstall registers securely.' }
    ],
    priceRange: 'Residential duct cleaning typically ranges from $300–$700 depending on system size and number of vents. On-site evaluation provides an accurate quote.',
    faqs: [
      { question: 'How often should ducts be cleaned?', answer: 'There is no fixed schedule. Cleaning is most beneficial after renovations, pest issues, or when visible dust and poor airflow are present.' },
      { question: 'Will duct cleaning eliminate all allergens?', answer: 'It reduces particulate load in the ducts but is one part of a broader indoor air quality strategy that includes filtration and humidity control.' },
      { question: 'Do you clean dryer vents as well?', answer: 'Yes, dryer vent cleaning is available as a separate or add-on service to reduce fire risk and improve dryer efficiency.' }
    ],
    related: ['indoor-air-quality', 'ductwork-repair', 'hvac-maintenance', 'air-filter-replacement']
  },
  {
    slug: 'thermostat-installation',
    title: 'Thermostat Installation in Canoga Park',
    shortTitle: 'Thermostat Install',
    metaTitle: 'Thermostat Installation Canoga Park CA | Accurate Climate Control',
    metaDescription: 'Upgrade or replace your thermostat with professional installation in Canoga Park. Compatible options for most HVAC systems.',
    intro: 'An accurate, well-placed thermostat is the brain of your HVAC system. Whether you need a simple replacement or a more advanced programmable model, we provide professional thermostat installation for Canoga Park homes, ensuring correct wiring and configuration.',
    process: [
      { title: 'Compatibility Check', description: 'We confirm voltage, wiring, and system type so the new thermostat will work correctly.' },
      { title: 'Removal and Wiring', description: 'The old thermostat is carefully disconnected and the new unit is wired to manufacturer specifications.' },
      { title: 'Configuration', description: 'System type, stages, and schedules are set up according to your preferences.' },
      { title: 'Test and Orientation', description: 'We verify heating and cooling response and show you how to adjust settings.' }
    ],
    priceRange: 'Basic thermostat replacement often $150–$300 installed. Programmable models vary by feature set. Smart thermostats are quoted separately.',
    faqs: [
      { question: 'Can any thermostat work with my system?', answer: 'Not always. Heat pumps, multi-stage systems, and certain furnace types require specific thermostat capabilities.' },
      { question: 'Do you install smart thermostats?', answer: 'Yes. See our smart thermostat service page for Wi-Fi enabled options and setup support.' },
      { question: 'Where should a thermostat be located?', answer: 'Ideally on an interior wall away from direct sunlight, drafts, and supply vents for accurate readings.' }
    ],
    related: ['smart-thermostat', 'hvac-maintenance', 'air-conditioner-repair', 'furnace-repair']
  },
  {
    slug: 'emergency-hvac-repair',
    title: 'Emergency HVAC Repair in Canoga Park',
    shortTitle: 'Emergency Repair',
    metaTitle: 'Emergency HVAC Repair Canoga Park CA | 24/7 Response',
    metaDescription: 'Urgent heating or cooling failure? Emergency HVAC repair available in Canoga Park. Fast response when you need comfort restored quickly.',
    intro: 'HVAC emergencies rarely happen at convenient times. No heat on a cold night or a failed AC during a heat wave requires prompt attention. We provide emergency HVAC repair services for Canoga Park residents who need help outside regular hours when possible.',
    process: [
      { title: 'Call for Priority Response', description: 'Contact us describing the issue. We triage urgency and dispatch the next available technician.' },
      { title: 'Rapid Diagnosis', description: 'On arrival, the technician focuses on restoring safe, basic function as quickly as possible.' },
      { title: 'Temporary or Permanent Fix', description: 'Depending on parts availability, we may implement a temporary solution until permanent repair can be completed.' },
      { title: 'Follow-Up Plan', description: 'If additional work is needed, we schedule it promptly and keep you informed.' }
    ],
    priceRange: 'Emergency service rates may include after-hours fees. Diagnostics and repairs are quoted on site. We prioritize clear communication about costs before proceeding.',
    faqs: [
      { question: 'What qualifies as an HVAC emergency?', answer: 'Complete loss of heating or cooling in extreme weather, suspected gas leaks, or electrical burning smells are treated as urgent.' },
      { question: 'Are you available nights and weekends?', answer: 'We offer extended and emergency response when technicians are available. Call to check current status.' },
      { question: 'What should I do while waiting for service?', answer: 'For suspected gas issues, leave the home and call the gas utility. Otherwise, avoid repeated hard resets that could worsen damage.' }
    ],
    related: ['air-conditioner-repair', 'furnace-repair', 'heat-pump-repair', 'hvac-maintenance']
  },
  {
    slug: 'mini-split-installation',
    title: 'Mini Split Installation in Canoga Park',
    shortTitle: 'Mini Split',
    metaTitle: 'Mini Split Installation Canoga Park CA | Ductless HVAC',
    metaDescription: 'Ductless mini-split installation in Canoga Park. Efficient zone cooling and heating without extensive ductwork.',
    intro: 'Mini-split systems deliver targeted comfort to individual rooms or additions without relying on existing ducts. They are ideal for older Canoga Park homes, converted spaces, or rooms that need independent temperature control. We design and install single- and multi-zone ductless systems.',
    process: [
      { title: 'Zone Planning', description: 'We discuss which rooms need coverage and select appropriate indoor unit styles and capacities.' },
      { title: 'Placement and Routing', description: 'Outdoor and indoor unit locations are chosen for performance, aesthetics, and efficient line-set paths.' },
      { title: 'Professional Install', description: 'Mounting, drilling, line-set installation, vacuuming, and electrical connections are completed carefully.' },
      { title: 'Commissioning', description: 'Each zone is tested for cooling and heating response and remote or app controls are configured.' }
    ],
    priceRange: 'Single-zone mini-splits often start around $3,000–$5,500 installed. Multi-zone systems scale with the number of indoor units and capacity.',
    faqs: [
      { question: 'Do mini-splits require outdoor space?', answer: 'Yes, an outdoor condenser is required. We help choose a location that balances noise, airflow, and appearance.' },
      { question: 'Can one outdoor unit serve multiple rooms?', answer: 'Multi-zone systems allow one outdoor unit to connect to several indoor units, each with independent control.' },
      { question: 'Are mini-splits energy efficient?', answer: 'Modern inverter-driven mini-splits are among the most efficient options for zoned comfort.' }
    ],
    related: ['heat-pump-installation', 'zoning-systems', 'air-conditioner-repair', 'indoor-air-quality']
  },
  {
    slug: 'indoor-air-quality',
    title: 'Indoor Air Quality Solutions in Canoga Park',
    shortTitle: 'Air Quality',
    metaTitle: 'Indoor Air Quality Canoga Park CA | Cleaner Home Air',
    metaDescription: 'Improve indoor air quality in your Canoga Park home with filtration upgrades, UV lights, humidity control, and related HVAC solutions.',
    intro: 'Indoor air can contain dust, allergens, and other particles that affect comfort and well-being. We help Canoga Park homeowners improve indoor air quality through filtration upgrades, purification options, and humidity management integrated with the existing HVAC system.',
    process: [
      { title: 'Air Quality Discussion', description: 'We review your concerns—allergies, dust, odors, or dryness—and inspect current filtration.' },
      { title: 'Solution Options', description: 'Media filters, electronic air cleaners, UV lights, and whole-home humidifiers or dehumidifiers are explained.' },
      { title: 'Installation', description: 'Chosen equipment is integrated with your HVAC system and commissioned for proper airflow.' },
      { title: 'Maintenance Guidance', description: 'You learn how often filters and components need attention for continued performance.' }
    ],
    priceRange: 'Upgraded media filter cabinets typically $400–$900 installed. UV systems and whole-home humidifiers vary widely; we provide itemized quotes.',
    faqs: [
      { question: 'Will a better filter fix all air quality issues?', answer: 'Improved filtration reduces particles but may need to be paired with source control, ventilation, and humidity management.' },
      { question: 'Do UV lights really help?', answer: 'UV-C lights can reduce microbial growth on coils and in drain pans when properly installed and maintained.' },
      { question: 'How do I know what my home needs?', answer: 'A conversation about symptoms and a look at your current system usually points to the most effective next steps.' }
    ],
    related: ['duct-cleaning', 'air-filter-replacement', 'hvac-maintenance', 'ductwork-repair']
  },
  {
    slug: 'ac-tune-up',
    title: 'AC Tune-Up Service in Canoga Park',
    shortTitle: 'AC Tune-Up',
    metaTitle: 'AC Tune-Up Canoga Park CA | Seasonal Cooling Maintenance',
    metaDescription: 'Prepare your air conditioner for summer with a professional AC tune-up in Canoga Park. Improve efficiency and catch small issues early.',
    intro: 'An annual AC tune-up helps your system start the cooling season ready to perform. We clean critical components, check electrical health, verify refrigerant charge, and confirm that controls respond correctly—so you can rely on consistent cooling through Canoga Park summers.',
    process: [
      { title: 'Outdoor Unit Service', description: 'We clean the condenser coil, check the fan motor, and inspect electrical connections and contactors.' },
      { title: 'Indoor Inspection', description: 'Evaporator access, drain line, blower, and filter condition are evaluated.' },
      { title: 'Performance Checks', description: 'Temperature split, amperage draws, and thermostat operation are measured.' },
      { title: 'Recommendations', description: 'Any items needing attention are noted so you can plan repairs or upgrades.' }
    ],
    priceRange: 'Standard AC tune-ups typically $99–$159. Combination heating and cooling plans may offer savings.',
    faqs: [
      { question: 'When is the best time for an AC tune-up?', answer: 'Spring, before heavy cooling demand begins, is ideal. Early booking helps avoid the summer rush.' },
      { question: 'What if you find a problem during the tune-up?', answer: 'We explain the issue and provide a repair estimate. You decide whether to proceed.' },
      { question: 'Does a tune-up include filter replacement?', answer: 'We inspect and can replace standard filters if you have a replacement on hand or purchase one from us.' }
    ],
    related: ['hvac-maintenance', 'air-conditioner-repair', 'furnace-tune-up', 'air-filter-replacement']
  },
  {
    slug: 'furnace-tune-up',
    title: 'Furnace Tune-Up Service in Canoga Park',
    shortTitle: 'Furnace Tune-Up',
    metaTitle: 'Furnace Tune-Up Canoga Park CA | Pre-Season Heating Service',
    metaDescription: 'Get your furnace ready for cooler weather with a professional tune-up in Canoga Park. Safety checks and efficiency adjustments included.',
    intro: 'A furnace tune-up before the heating season reduces the chance of mid-winter failures and helps the system run cleanly. We perform safety inspections, clean key components, and verify proper operation for Canoga Park homes.',
    process: [
      { title: 'Safety Inspection', description: 'Heat exchanger (visual), gas connections, venting, and carbon monoxide safety are prioritized.' },
      { title: 'Cleaning and Lubrication', description: 'Burners, flame sensor, and accessible blower components are cleaned; moving parts are lubricated as appropriate.' },
      { title: 'Operational Tests', description: 'Ignition sequence, temperature rise, and limit controls are verified under normal conditions.' },
      { title: 'Filter and Report', description: 'Filter condition is checked and a simple report of findings is provided.' }
    ],
    priceRange: 'Furnace tune-ups commonly $99–$159. Annual plans that include both heating and cooling visits are available.',
    faqs: [
      { question: 'Is a furnace tune-up the same as a safety inspection?', answer: 'A thorough tune-up includes important safety checks. Dedicated carbon monoxide testing may be recommended in some situations.' },
      { question: 'How long does a tune-up take?', answer: 'Most visits last 45–90 minutes depending on system accessibility and condition.' },
      { question: 'Should I tune up a brand-new furnace?', answer: 'Manufacturer guidelines often recommend professional maintenance starting in the first year to support warranty coverage.' }
    ],
    related: ['hvac-maintenance', 'furnace-repair', 'ac-tune-up', 'emergency-hvac-repair']
  },
  {
    slug: 'refrigerant-recharge',
    title: 'Refrigerant Recharge in Canoga Park',
    shortTitle: 'Refrigerant',
    metaTitle: 'AC Refrigerant Recharge Canoga Park CA | Coolant Service',
    metaDescription: 'Low on refrigerant? Professional AC refrigerant recharge and leak evaluation in Canoga Park. Restore cooling capacity the right way.',
    intro: 'Air conditioners and heat pumps do not “use up” refrigerant under normal conditions. A low charge usually indicates a leak. We diagnose charge issues, locate leaks when practical, and recharge systems to the correct specification for Canoga Park homes.',
    process: [
      { title: 'Pressure and Temperature Diagnosis', description: 'We measure operating pressures and temperatures to confirm whether refrigerant is low.' },
      { title: 'Leak Assessment', description: 'Common leak points are inspected. Dye or electronic detection may be used when needed.' },
      { title: 'Repair Recommendation', description: 'If a leak is found, repair options are presented before adding refrigerant.' },
      { title: 'Accurate Recharge', description: 'We add the correct type and amount of refrigerant and verify system performance.' }
    ],
    priceRange: 'Recharge pricing depends on refrigerant type (R-410A, R-22 transition options, etc.) and amount needed. Leak repair is quoted separately. Expect transparent, itemized pricing.',
    faqs: [
      { question: 'Why does my AC need refrigerant again after a few years?', answer: 'Refrigerant should stay contained. Repeated need for recharge points to a leak that should be addressed.' },
      { question: 'Do you still service R-22 systems?', answer: 'We can evaluate older R-22 systems and discuss repair, retrofit, or replacement options as supplies and regulations allow.' },
      { question: 'Is topping off refrigerant a permanent fix?', answer: 'Only if the leak is found and repaired. Otherwise the charge will decline again over time.' }
    ],
    related: ['air-conditioner-repair', 'heat-pump-repair', 'ac-installation', 'hvac-maintenance']
  },
  {
    slug: 'ductwork-repair',
    title: 'Ductwork Repair in Canoga Park',
    shortTitle: 'Ductwork Repair',
    metaTitle: 'Ductwork Repair Canoga Park CA | Fix Leaks & Improve Airflow',
    metaDescription: 'Repair leaky or damaged ductwork in Canoga Park. Better airflow, more even temperatures, and reduced energy waste.',
    intro: 'Leaky, crushed, or poorly connected ducts waste conditioned air and create comfort problems. We inspect and repair residential ductwork in Canoga Park homes so your HVAC system delivers air where it is needed.',
    process: [
      { title: 'Duct Inspection', description: 'Accessible runs, connections, and returns are examined for gaps, disconnections, and damage.' },
      { title: 'Priority Repairs', description: 'Disconnected sections, major leaks, and crushed ducts are addressed first for the largest impact.' },
      { title: 'Sealing and Support', description: 'Approved sealants and mechanical fasteners restore integrity; supports are added where needed.' },
      { title: 'Airflow Check', description: 'We confirm improved delivery at registers after repairs.' }
    ],
    priceRange: 'Minor sealing and reconnection work may start in the low hundreds. Larger repairs or partial redesigns are quoted after inspection.',
    faqs: [
      { question: 'How do I know if my ducts are leaking?', answer: 'Uneven rooms, excessive dust, high energy bills, or visible gaps at connections are common clues.' },
      { question: 'Can you repair ducts in attics and crawlspaces?', answer: 'Yes. We work in typical residential attic and crawlspace environments found in the area.' },
      { question: 'Is full duct replacement ever necessary?', answer: 'When ducts are extensively damaged, undersized, or contaminated, replacement of sections or the full system may be the better long-term choice.' }
    ],
    related: ['duct-cleaning', 'ac-installation', 'hvac-maintenance', 'indoor-air-quality']
  },
  {
    slug: 'commercial-hvac',
    title: 'Commercial HVAC Services in Canoga Park',
    shortTitle: 'Commercial HVAC',
    metaTitle: 'Commercial HVAC Canoga Park CA | Business Heating & Cooling',
    metaDescription: 'Reliable commercial HVAC service for Canoga Park businesses. Maintenance, repair, and system support to keep employees and customers comfortable.',
    intro: 'Businesses depend on consistent indoor comfort. We provide commercial HVAC repair, maintenance, and support for small and mid-sized properties in Canoga Park—retail spaces, offices, light industrial, and professional buildings.',
    process: [
      { title: 'Site Walkthrough', description: 'We review equipment locations, access, and any recurring comfort or reliability issues.' },
      { title: 'Service Plan Options', description: 'Preventive maintenance schedules and response expectations are tailored to your operating hours.' },
      { title: 'Repair or Maintenance Visit', description: 'Technicians work efficiently to minimize disruption to your business.' },
      { title: 'Documentation', description: 'Service records are provided to support facility management and budgeting.' }
    ],
    priceRange: 'Commercial pricing is customized based on equipment count, system type, and service agreement scope. Contact us for a property-specific proposal.',
    faqs: [
      { question: 'Do you service rooftop units (RTUs)?', answer: 'Yes. We work on common packaged rooftop systems found on commercial buildings.' },
      { question: 'Can you work after business hours?', answer: 'Whenever possible we accommodate off-hours service to reduce impact on customers and staff.' },
      { question: 'Do you offer maintenance contracts for businesses?', answer: 'Yes. Scheduled maintenance plans help control costs and reduce unexpected downtime.' }
    ],
    related: ['hvac-maintenance', 'emergency-hvac-repair', 'air-conditioner-repair', 'furnace-repair']
  },
  {
    slug: 'smart-thermostat',
    title: 'Smart Thermostat Installation in Canoga Park',
    shortTitle: 'Smart Thermostat',
    metaTitle: 'Smart Thermostat Installation Canoga Park CA | Wi-Fi Climate Control',
    metaDescription: 'Install a smart thermostat in your Canoga Park home. Remote control, schedules, and energy insights with professional setup.',
    intro: 'Smart thermostats let you adjust temperatures from your phone, learn usage patterns, and often provide energy reports. We install and configure popular smart thermostats for compatible HVAC systems in Canoga Park homes.',
    process: [
      { title: 'Compatibility Confirmation', description: 'We verify C-wire or power options, system stages, and heat pump requirements.' },
      { title: 'Physical Installation', description: 'The new thermostat is mounted and wired correctly; the old unit is removed cleanly.' },
      { title: 'App and Account Setup', description: 'We help connect the device to your Wi-Fi and guide initial account creation if desired.' },
      { title: 'Feature Orientation', description: 'Schedules, geofencing, and basic energy features are explained so you can use them confidently.' }
    ],
    priceRange: 'Smart thermostat installation typically $250–$450 including a common model, or less if you supply the device. Complex multi-system setups may differ.',
    faqs: [
      { question: 'Do I need a C-wire for a smart thermostat?', answer: 'Many models prefer a C-wire. We can often add one or use compatible power solutions when needed.' },
      { question: 'Which brands do you install?', answer: 'We commonly install well-known brands such as Google Nest, Ecobee, and similar systems compatible with your equipment.' },
      { question: 'Will a smart thermostat work with my heat pump?', answer: 'Yes, when the correct heat pump configuration is selected during setup. We handle that configuration.' }
    ],
    related: ['thermostat-installation', 'hvac-maintenance', 'heat-pump-installation', 'zoning-systems']
  },
  {
    slug: 'air-filter-replacement',
    title: 'Air Filter Replacement in Canoga Park',
    shortTitle: 'Filter Replacement',
    metaTitle: 'HVAC Air Filter Replacement Canoga Park CA | Cleaner Airflow',
    metaDescription: 'Professional air filter replacement and guidance for Canoga Park homes. Keep airflow strong and indoor air cleaner.',
    intro: 'A clean air filter is one of the simplest ways to protect your HVAC equipment and support better indoor air. We provide filter replacement service and help Canoga Park homeowners choose the right size and MERV rating for their systems.',
    process: [
      { title: 'Locate and Inspect', description: 'We find all system filters, check current condition, and note size and type.' },
      { title: 'Correct Replacement', description: 'Filters are replaced with the proper size and an appropriate efficiency rating for your equipment.' },
      { title: 'System Check', description: 'We confirm that airflow is restored and that the filter is seated correctly.' },
      { title: 'Maintenance Tips', description: 'You receive simple guidance on how often to change filters based on your home and usage.' }
    ],
    priceRange: 'Filter replacement visits are modest in cost; pricing depends on filter type and number of systems. Many homeowners also purchase filters for self-service changes.',
    faqs: [
      { question: 'How often should I change my HVAC filter?', answer: 'Every 1–3 months is common. Homes with pets, allergies, or heavy use may need more frequent changes.' },
      { question: 'Is a higher MERV always better?', answer: 'Higher MERV captures smaller particles but can restrict airflow if the system is not designed for it. We help balance filtration and performance.' },
      { question: 'Can you set up a filter delivery reminder?', answer: 'We can note preferred sizes and discuss simple reminder strategies during the visit.' }
    ],
    related: ['hvac-maintenance', 'indoor-air-quality', 'ac-tune-up', 'duct-cleaning']
  },
  {
    slug: 'zoning-systems',
    title: 'HVAC Zoning Systems in Canoga Park',
    shortTitle: 'Zoning Systems',
    metaTitle: 'HVAC Zoning Canoga Park CA | Room-by-Room Comfort Control',
    metaDescription: 'Add zoning to your HVAC system in Canoga Park. Control temperatures independently in different areas of your home.',
    intro: 'Zoning systems use dampers and multiple thermostats to direct conditioned air where it is needed. They are useful for multi-story homes, additions, or spaces with different occupancy patterns. We design and install zoning solutions for compatible systems in Canoga Park.',
    process: [
      { title: 'Comfort Mapping', description: 'We identify problem areas and discuss how you use different parts of the home.' },
      { title: 'System Compatibility', description: 'Existing equipment capacity and duct layout are evaluated for zoning feasibility.' },
      { title: 'Damper and Control Install', description: 'Zone dampers, wiring, and thermostats or control panels are installed and configured.' },
      { title: 'Balancing and Training', description: 'Zones are tested and balanced; you learn how to operate the system effectively.' }
    ],
    priceRange: 'Zoning additions vary widely based on the number of zones and duct modifications required. Typical projects start in the low thousands; detailed estimates follow a site visit.',
    faqs: [
      { question: 'Can any HVAC system be zoned?', answer: 'Many can, but capacity, duct design, and equipment type matter. We assess feasibility before recommending zoning.' },
      { question: 'Is zoning better than multiple mini-splits?', answer: 'It depends on the home. Zoning works with existing ducts; mini-splits excel when ducts are limited or independent control is preferred.' },
      { question: 'Will zoning reduce energy use?', answer: 'By conditioning only occupied zones, many homeowners see improved comfort and potential energy savings.' }
    ],
    related: ['mini-split-installation', 'smart-thermostat', 'ductwork-repair', 'hvac-maintenance']
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}
