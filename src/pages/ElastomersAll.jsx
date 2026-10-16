import ElastomerPage from '../components/ElastomerPage.jsx'

const specsBase = (temp, hard, tens, heat, low, ozone, oil, acids, solv, water, abr, comp) => [
  ['Continuous service temp', temp],
  ['Hardness', hard],
  ['Tensile strength', tens],
  ['Heat', heat],
  ['Low temperature', low],
  ['Ozone & weather', ozone],
  ['Oil & fuel', oil],
  ['Acids', acids],
  ['Solvents / ketones', solv],
  ['Water & steam', water],
  ['Abrasion', abr],
  ['Compression set', comp],
]

export function Silicone() {
  return <ElastomerPage
    crumb="silicone"
    title="Silicone (VMQ)"
    heroDesc="Silicone Elastomer — the widest temperature range in a flexible elastomer, plus clean and inert grades. An exceptionally broad service-temperature window with excellent flexibility at both extremes and FDA/medical grades — trading away mechanical strength."
    temp="-67°F to +392°F (-55°C to +200°C)"
    overviewTitle="What silicone is best at"
    overviewPara="Silicone (VMQ) retains flexibility across an extremely wide temperature range with outstanding ozone/UV stability and low compression set, and is available in FDA/USP Class VI, medical and food grades. Trade-offs are low tensile strength, poor abrasion resistance and poor resistance to hydrocarbon fuels and solvents."
    standout={['Heat', 'Low temperature', 'Ozone & weather', 'Compression set']}
    alsoStrong={['Water & steam']}
    industries={['Automotive']}
    specs={specsBase('-67°F to +392°F (-55°C to +200°C)', '20–80 Shore A', '500–1,500 psi', 'Excellent', 'Excellent', 'Excellent', 'Poor–Fair', 'Fair', 'Poor', 'Fair–Good', 'Poor', 'Excellent')}
    applications={[
      { industry: 'Pharmaceutical & Medical', items: ['Sanitary tri-clamp gaskets, USP Class VI diaphragms and tubing seals.'] },
      { industry: 'Aerospace & Defense', items: ['Wide-temperature static seals for avionics and environmental systems.'] },
      { industry: 'Automotive', items: ['Spark-plug boots, ignition seals, high-temp oven and lighting gaskets.'] },
      { industry: 'Electronics & Energy', items: ['LED and enclosure potting seals, junction-box grommets.'] },
    ]}
    chooseWhen={['Extreme high or low temperature with static sealing', 'Food, medical or clean/inert contact requirements', 'Low compression set across a wide temperature range']}
    alternative={['Fuel, oil or solvent exposure → fluorosilicone or FKM', 'Dynamic seals or abrasive, high-pressure duty → NBR, HNBR']}
    ctaTitle="Need silicone parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right silicone compound and a path to production."
    refTitle="Design references for silicone"
  />
}

export function Fluorosilicone() {
  return <ElastomerPage
    crumb="fluorosilicone"
    title="Fluorosilicone (FVMQ)"
    heroDesc="Fluorosilicone Elastomer — silicone’s temperature range with added fuel and oil resistance — the aerospace fuel-system elastomer. Silicone’s cold-temperature flexibility and broad thermal range, plus meaningfully better resistance to fuels and mineral oils."
    temp="-67°F to +350°F (-55°C to +175°C)"
    overviewTitle="What fluorosilicone is best at"
    overviewPara="FVMQ pairs silicone’s excellent low-temperature flexibility and broad thermal range with far better resistance to fuels, mineral oils and hydrocarbons. It’s most valued where cold-weather sealing and jet-fuel or oil exposure coincide. Like silicone, it’s mechanically weak and best suited to static service."
    standout={['Heat', 'Low temperature', 'Ozone & weather']}
    alsoStrong={['Oil & fuel', 'Compression set']}
    industries={['Aerospace', 'Defense', 'Automotive']}
    specs={specsBase('-67°F to +350°F (-55°C to +175°C)', '40–80 Shore A', '700–1,500 psi', 'Good–Excellent', 'Excellent', 'Excellent', 'Good', 'Fair', 'Fair', 'Fair', 'Poor', 'Good')}
    applications={[
      { industry: 'Aerospace', items: ['Jet-fuel and lubricating-oil O-rings, fuel-control and manifold static seals.'] },
      { industry: 'Defense', items: ['Cold-start fuel-system seals for ground vehicles and aircraft.'] },
      { industry: 'Automotive', items: ['Fuel-system and turbo seals requiring cold flexibility plus hydrocarbon exposure.'] },
    ]}
    chooseWhen={['Cold-temperature fuel or oil sealing where standard silicone would swell', 'Aircraft/aerospace fuel and lubricant static seals']}
    alternative={['High-pressure or dynamic, abrasive service → FKM or HNBR', 'Cost-sensitive fuel seals without a cold requirement → FKM/NBR']}
    ctaTitle="Need fluorosilicone parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right fluorosilicone compound and a path to production."
    refTitle="Design references for fluorosilicone"
  />
}

export function Fkm() {
  return <ElastomerPage
    crumb="FKM"
    title="FKM (Viton)"
    heroDesc="Fluoroelastomer — the industry standard for high-heat, oil, fuel and chemical resistance in a true elastomer. The default premium sealing elastomer: excellent heat, oil, fuel, chemical and ozone resistance with low compression set."
    temp="-4°F to +400°F (-20°C to +205°C)"
    overviewTitle="What FKM is best at"
    overviewPara="FKM (Viton is a Chemours trade name) offers excellent resistance to heat, petroleum oils and fuels, many chemicals and ozone, with low compression set — the go-to for demanding automotive, oil-and-gas and process service. Standard grades stiffen at low temperature; specialty low-temp and base-resistant grades address specific gaps."
    standout={['Heat', 'Ozone & weather', 'Oil & fuel', 'Acids', 'Compression set']}
    alsoStrong={['Solvents / ketones', 'Water & steam', 'Abrasion']}
    industries={['Oil & Gas', 'Automotive']}
    specs={specsBase('-4°F to +400°F (-20°C to +205°C)', '55–90 Shore A', '1,000–2,300 psi', 'Excellent', 'Poor–Fair', 'Excellent', 'Excellent', 'Good–Excellent', 'Good', 'Fair–Good', 'Good', 'Excellent')}
    applications={[
      { industry: 'Oil & Gas', items: ['Downhole and wellhead seals, rotary shaft seals, valve and packer elements.'] },
      { industry: 'Automotive', items: ['Fuel-injection O-rings, crankshaft/camshaft seals, turbo seals.'] },
      { industry: 'Aerospace & Defense', items: ['Engine and hydraulic seals in high-heat zones.'] },
      { industry: 'Chemical Processing', items: ['Pump and valve seals for hydrocarbons and aggressive fluids.'] },
    ]}
    chooseWhen={['High temperature combined with oil, fuel or chemical exposure', 'Long-term static or dynamic sealing needing low compression set']}
    alternative={['Low-temperature or amine/ketone/hot-steam service → specialty FKM, AFLAS or FFKM', 'Broadest chemical universality → FFKM (Kalrez)']}
    ctaTitle="Need FKM parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right FKM compound and a path to production."
    refTitle="Design references for FKM"
  />
}

export function Nbr() {
  return <ElastomerPage
    crumb="nitrile"
    title="NBR (Nitrile)"
    heroDesc="Acrylonitrile-Butadiene Rubber — the workhorse oil and fuel seal — best value for hydraulics and petroleum service. The most widely used sealing elastomer for petroleum oils, fuels and hydraulic fluids — good strength and abrasion resistance at low cost."
    temp="-40°F to +250°F (-40°C to +120°C)"
    overviewTitle="What nitrile is best at"
    overviewPara="NBR (nitrile/Buna-N) is the standard for petroleum oils, fuels and hydraulic fluids, with good mechanical strength and abrasion resistance at low cost. Performance shifts with acrylonitrile content — higher ACN improves oil resistance but worsens cold flexibility. Its weaknesses are poor ozone/weather resistance and a modest upper temperature limit."
    standout={['Oil & fuel', 'Abrasion']}
    alsoStrong={['Heat', 'Low temperature', 'Water & steam', 'Compression set']}
    industries={['Automotive', 'Oil & Gas', 'Agriculture']}
    specs={specsBase('-40°F to +250°F (-40°C to +120°C)', '40–90 Shore A', '1,500–3,000 psi', 'Fair–Good', 'Fair–Good', 'Poor', 'Excellent', 'Fair', 'Fair', 'Good', 'Good–Excellent', 'Good')}
    applications={[
      { industry: 'Automotive', items: ['Fuel-system and engine-oil seals, O-rings, fuel-line grommets.'] },
      { industry: 'Oil & Gas', items: ['Hydraulic and pump seals, rod and piston seals for oil service.'] },
      { industry: 'Agriculture', items: ['Hydraulic cylinder seals, fuel and lubricant O-rings on equipment.'] },
      { industry: 'Industrial Hydraulics', items: ['Rod seals, wipers and gaskets in oil-based systems.'] },
    ]}
    chooseWhen={['Petroleum oil, fuel or hydraulic-fluid sealing on a budget', 'Dynamic seals needing good abrasion resistance in enclosed service']}
    alternative={['Ozone, UV or outdoor exposure → EPDM, neoprene or HNBR', 'Higher heat or longer oil life → HNBR or FKM']}
    ctaTitle="Need nitrile parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right nitrile compound and a path to production."
    refTitle="Design references for nitrile"
  />
}

export function Hnbr() {
  return <ElastomerPage
    crumb="HNBR"
    title="HNBR"
    heroDesc="Hydrogenated Nitrile Rubber — nitrile’s oil resistance with much higher heat, strength and abrasion life. Hydrogenated nitrile: excellent oil and fuel resistance plus among the highest strength and abrasion resistance of common seal elastomers."
    temp="-40°F to +300°F (-40°C to +150°C)"
    overviewTitle="What HNBR is best at"
    overviewPara="Hydrogenating NBR’s backbone dramatically improves heat, ozone and mechanical strength while keeping excellent oil and fuel resistance. HNBR resists rapid gas decompression and delivers very high tensile and abrasion performance — a mainstay in automotive A/C and oilfield service."
    standout={['Heat', 'Oil & fuel', 'Abrasion']}
    alsoStrong={['Low temperature', 'Ozone & weather', 'Acids', 'Water & steam', 'Compression set']}
    industries={['Automotive', 'Oil & Gas', 'Agriculture']}
    specs={specsBase('-40°F to +300°F (-40°C to +150°C)', '50–90 Shore A', '3,000–4,000 psi', 'Good–Excellent', 'Fair–Good', 'Good', 'Excellent', 'Fair–Good', 'Fair', 'Good', 'Excellent', 'Good')}
    applications={[
      { industry: 'Automotive', items: ['A/C refrigerant (R134a/PAG) seals, timing and serpentine belts, engine seals.'] },
      { industry: 'Oil & Gas', items: ['Downhole packers and seals rated for rapid gas decompression and sour service.'] },
      { industry: 'Agriculture', items: ['Heavy-duty hydraulic seals and O-rings for high-load equipment.'] },
      { industry: 'Industrial', items: ['High-pressure hydraulic rod and piston seals.'] },
    ]}
    chooseWhen={['Oil/fuel service needing more heat, strength or abrasion life than NBR', 'Refrigerant systems and rapid-gas-decompression environments']}
    alternative={['Sustained temps above ~330°F or aggressive chemicals → FKM/FFKM', 'Cost-driven, low-demand oil seals → standard NBR']}
    ctaTitle="Need HNBR parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right HNBR compound and a path to production."
    refTitle="Design references for HNBR"
  />
}

export function Ffkm() {
  return <ElastomerPage
    crumb="FFKM"
    title="FFKM (Kalrez)"
    heroDesc="Perfluoroelastomer — near-universal chemical resistance plus extreme heat — for the harshest sealing environments. Chemical resistance approaching PTFE with elastomeric recovery — the highest-performance sealing elastomer for critical, no-fail service."
    temp="+5°F to +500°F (-15°C to +260°C)"
    overviewTitle="What FFKM is best at"
    overviewPara="FFKM (Kalrez is a DuPont trade name) is fully fluorinated, with chemical resistance approaching PTFE while retaining elastomeric recovery. It withstands aggressive acids, bases, solvents, amines and steam at temperatures well beyond FKM. It’s the highest-performance — and highest-cost — sealing elastomer, reserved for critical applications."
    standout={['Heat', 'Ozone & weather', 'Oil & fuel', 'Acids', 'Solvents / ketones', 'Water & steam', 'Compression set']}
    alsoStrong={['Abrasion']}
    industries={['Oil & Gas', 'Pharmaceutical']}
    specs={specsBase('+5°F to +500°F (-15°C to +260°C)', '65–95 Shore A', '1,500–3,000 psi', 'Excellent', 'Poor', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Good', 'Excellent')}
    applications={[
      { industry: 'Semiconductor', items: ['Wafer-process chamber, valve and RF seals exposed to plasma and aggressive chemistries.'] },
      { industry: 'Chemical Processing', items: ['Pump, valve and reactor seals for mixed and aggressive media.'] },
      { industry: 'Oil & Gas', items: ['Extreme sour-service and high-temperature downhole seals.'] },
      { industry: 'Pharmaceutical', items: ['High-purity process seals for CIP/SIP and aggressive cleaning agents.'] },
    ]}
    chooseWhen={['Mixed or aggressive chemicals, or extreme heat, where other elastomers fail', 'Critical seals where downtime or contamination cost dwarfs seal cost']}
    alternative={['Cost-sensitive applications within FKM’s envelope → FKM', 'Very low-temperature service → silicone or fluorosilicone']}
    ctaTitle="Need FFKM parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right FFKM compound and a path to production."
    refTitle="Design references for FFKM"
  />
}

export function Neoprene() {
  return <ElastomerPage
    crumb="neoprene"
    title="Neoprene (CR)"
    heroDesc="Chloroprene Rubber — a balanced all-rounder with good weather, moderate oil and excellent marine/refrigerant compatibility. A general-purpose elastomer balancing moderate oil resistance, good weathering and inherent flame resistance — strong in water and refrigerants."
    temp="-40°F to +250°F (-40°C to +120°C)"
    overviewTitle="What neoprene is best at"
    overviewPara="Neoprene (CR) offers a well-rounded balance of moderate oil resistance, good ozone/weather stability and inherent flame resistance. It performs reliably in water, refrigerants and mild chemical environments — a durable choice for marine, HVAC/refrigeration and outdoor sealing where neither NBR nor EPDM alone is ideal."
    standout={['Water & steam']}
    alsoStrong={['Heat', 'Low temperature', 'Ozone & weather', 'Oil & fuel', 'Acids', 'Abrasion', 'Compression set']}
    industries={['Marine', 'Automotive']}
    specs={specsBase('-40°F to +250°F (-40°C to +120°C)', '40–90 Shore A', '500–3,000 psi', 'Good', 'Good', 'Good', 'Good', 'Good', 'Fair', 'Excellent', 'Good', 'Good')}
    applications={[
      { industry: 'Marine', items: ['Hull and hatch gaskets, weatherseals, foam sealing, corrosion-resistant pads.'] },
      { industry: 'HVAC & Refrigeration', items: ['Refrigerant (ammonia/R-series) seals, vibration mounts, gaskets.'] },
      { industry: 'Automotive', items: ['Weatherstrip, boots, vibration isolators, belt applications.'] },
      { industry: 'Construction', items: ['Bridge bearing pads, expansion-joint seals, general gaskets.'] },
    ]}
    chooseWhen={['Balanced weather + moderate oil + water resistance in one compound', 'Marine, refrigerant or outdoor duty needing inherent flame/ozone resistance']}
    alternative={['Strong petroleum oil or fuel service → NBR or FKM', 'Aggressive weathering or steam only → EPDM']}
    ctaTitle="Need neoprene parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right neoprene compound and a path to production."
    refTitle="Design references for neoprene"
  />
}

export function Sbr() {
  return <ElastomerPage
    crumb="SBR"
    title="SBR"
    heroDesc="Styrene-Butadiene Rubber — low-cost, abrasion-resistant general-purpose rubber for non-oil, indoor service. An economical general-purpose rubber with good abrasion resistance — for water and mild, non-petroleum, enclosed service."
    temp="-40°F to +212°F (-40°C to +100°C)"
    overviewTitle="What SBR is best at"
    overviewPara="SBR is an economical general-purpose elastomer with good abrasion resistance and mechanical properties similar to natural rubber. It handles water and mild non-petroleum fluids well in wear-driven applications, but is unsuitable for oil, fuel, ozone or outdoor exposure — confining it to enclosed, cost-sensitive uses."
    standout={['Abrasion']}
    alsoStrong={['Low temperature', 'Water & steam', 'Compression set']}
    industries={['Automotive']}
    specs={specsBase('-40°F to +212°F (-40°C to +100°C)', '40–90 Shore A', '500–3,000 psi', 'Fair', 'Good', 'Poor', 'Poor', 'Fair', 'Poor', 'Good', 'Good–Excellent', 'Fair–Good')}
    applications={[
      { industry: 'Automotive', items: ['Brake components in non-petroleum fluids, bushings, vibration pads.'] },
      { industry: 'Industrial', items: ['General gaskets, non-oil seals, skirt board and conveyor components.'] },
      { industry: 'Material Handling', items: ['Wear pads, bumpers and abrasion-facing parts.'] },
    ]}
    chooseWhen={['Cost-driven, abrasion-resistant parts in water or non-oil, indoor service', 'A natural-rubber-like profile with consistent heat/abrasion behavior']}
    alternative={['Any oil, fuel, ozone or outdoor exposure → NBR, neoprene or EPDM', 'Elevated temperature → EPDM or FKM']}
    ctaTitle="Need SBR parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right SBR compound and a path to production."
    refTitle="Design references for SBR"
  />
}

export function Tpv() {
  return <ElastomerPage
    crumb="TPV"
    title="TPV (Santoprene)"
    heroDesc="Thermoplastic Vulcanizate — rubber-like sealing in a recyclable, moldable thermoplastic — ideal for weatherseals and overmolding. Elastomeric flexibility with thermoplastic processing — injection-moldable, extrudable, recyclable and easy to overmold."
    temp="-76°F to +275°F (-60°C to +135°C)"
    overviewTitle="What TPV is best at"
    overviewPara="TPV (Santoprene is an ExxonMobil trade name) combines a cured EPDM rubber phase in a polypropylene matrix, giving elastomeric flexibility with thermoplastic processing. It’s injection-moldable, extrudable, recyclable and readily overmolded, with excellent ozone/weather resistance and good fatigue life. Oil and fuel resistance is limited, and its upper temperature is below thermoset EPDM."
    standout={['Ozone & weather', 'Water & steam']}
    alsoStrong={['Heat', 'Low temperature', 'Acids', 'Abrasion', 'Compression set']}
    industries={['Automotive', 'Rail & Transit']}
    specs={specsBase('-76°F to +275°F (-60°C to +135°C)', '35 Shore A – 50 Shore D', '500–4,000 psi', 'Good', 'Good', 'Excellent', 'Fair', 'Good', 'Fair', 'Excellent', 'Good', 'Fair–Good')}
    applications={[
      { industry: 'Automotive', items: ['Weatherseals, glass-run and glazing seals, CVJ boots, overmolded grommets.'] },
      { industry: 'Rail & Transit', items: ['Door and window weatherseals, gaskets, glazing profiles.'] },
      { industry: 'Appliance & Energy', items: ['Enclosure and panel weatherseals, overmolded grips and gaskets.'] },
      { industry: 'Construction', items: ['Extruded gaskets and glazing seals for windows and facades.'] },
    ]}
    chooseWhen={['High-volume molded/extruded weatherseals where recyclability and speed matter', 'Overmolding onto rigid substrates (2-shot / insert molding)']}
    alternative={['Oil/fuel contact or high heat → thermoset EPDM, NBR or FKM', 'High-pressure dynamic sealing → thermoset elastomers']}
    ctaTitle="Need TPV parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right TPV compound and a path to production."
    refTitle="Design references for TPV"
  />
}

export function Aflas() {
  return <ElastomerPage
    crumb="AFLAS"
    title="AFLAS (TFE-P)"
    heroDesc="Tetrafluoroethylene-Propylene Elastomer — the oilfield/steam specialist — outstanding resistance to bases, amines, H₂S and steam. A fluoroelastomer built for steam, hot water, strong bases, amines and sour (H₂S) service where standard FKM degrades."
    temp="+14°F to +446°F (-10°C to +230°C)"
    overviewTitle="What AFLAS is best at"
    overviewPara="AFLAS (TFE-P, an AGC trade name) has a distinctive resistance profile: exceptional performance against steam, hot water, strong bases, amines and sour (H₂S) environments, plus good electrical properties and high-heat capability. Trade-offs are poor low-temperature flexibility and higher hardness/lower rebound than FKM."
    standout={['Heat', 'Ozone & weather', 'Acids', 'Water & steam']}
    alsoStrong={['Oil & fuel', 'Solvents / ketones', 'Abrasion', 'Compression set']}
    industries={['Oil & Gas']}
    specs={specsBase('+14°F to +446°F (-10°C to +230°C)', '60–90 Shore A', '1,500–2,500 psi', 'Excellent', 'Poor', 'Excellent', 'Good', 'Excellent', 'Good', 'Excellent', 'Good', 'Good')}
    applications={[
      { industry: 'Oil & Gas', items: ['Sour-gas (H₂S) downhole seals, amine-treating service, steam-injection and packer seals.'] },
      { industry: 'Chemical Processing', items: ['Seals and gaskets for hot caustic, amines and mixed aggressive media.'] },
      { industry: 'Power & Energy', items: ['Steam-service seals and gaskets, geothermal sealing.'] },
      { industry: 'Defense & Industrial', items: ['High-temperature seals needing base and steam resistance.'] },
    ]}
    chooseWhen={['Sour service (H₂S), amines, strong bases or steam where FKM fails', 'High-heat sealing combined with caustic or amine chemistry']}
    alternative={['Low-temperature service → FKM (low-temp grade) or fluorosilicone', 'Broadest universal chemical resistance → FFKM']}
    ctaTitle="Need AFLAS parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right AFLAS compound and a path to production."
    refTitle="Design references for AFLAS"
  />
}

export function Ptfe() {
  return <ElastomerPage
    crumb="PTFE"
    title="PTFE"
    heroDesc="Polytetrafluoroethylene (thermoplastic fluoropolymer) — virtually universal chemical inertness and the widest temperature range — a rigid fluoropolymer, not a true elastomer. Chemically inert to nearly all media, with the lowest friction of any solid — used as backup rings, envelope gaskets and O-ring encapsulation."
    temp="-328°F to +500°F (-200°C to +260°C)"
    overviewTitle="What PTFE is best at"
    overviewPara="PTFE is a thermoplastic fluoropolymer (not an elastomer): chemically inert to nearly all media, spanning an extreme temperature range with the lowest coefficient of friction of any solid. Because it doesn’t recover elastically and can cold-flow, it’s used as backup rings, chevron/lip seals, envelope gaskets, and as an encapsulating jacket over a silicone or FKM O-ring core — combining PTFE’s chemistry with an elastomeric spring."
    standout={['Heat', 'Low temperature', 'Ozone & weather', 'Oil & fuel', 'Acids', 'Solvents / ketones', 'Water & steam']}
    alsoStrong={['Abrasion']}
    industries={['Pharmaceutical', 'Oil & Gas']}
    specs={specsBase('-328°F to +500°F (-200°C to +260°C)', '~50–65 Shore D (rigid)', '2,000–5,000 psi', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Excellent', 'Good', 'Poor')}
    applications={[
      { industry: 'Chemical Processing', items: ['Envelope/lined gaskets, valve seats and seals for aggressive or universal media.'] },
      { industry: 'Pharmaceutical', items: ['Sanitary encapsulated O-rings and seals for CIP/SIP and high-purity service.'] },
      { industry: 'Oil & Gas', items: ['Backup and anti-extrusion rings, chevron/V-ring stacks, valve seals.'] },
      { industry: 'Semiconductor', items: ['High-purity, low-outgassing seals and low-friction components.'] },
    ]}
    chooseWhen={['Universal chemical inertness or extreme temperature where no elastomer suffices', 'As a backup ring, encapsulation jacket or low-friction dynamic element']}
    alternative={['Applications needing elastic recovery under compression → FFKM, FKM or an encapsulated O-ring', 'Self-energizing rubber sealing behavior → elastomer O-rings']}
    ctaTitle="Need PTFE parts to spec?"
    ctaDesc="Send your service conditions or drawing — our engineers will confirm the right PTFE compound and a path to production."
    refTitle="Design references for PTFE"
  />
}
