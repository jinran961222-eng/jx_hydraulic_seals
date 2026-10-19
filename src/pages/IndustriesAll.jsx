import IndustryPage from '../components/IndustryPage.jsx'

const PRODUCTS = {
  oilSeals: ['/products/oil-seals', 'Oil Seals'],
  oRings: ['/products/o-rings', 'Custom O-Rings'],
  molded: ['/products/custom-rubber-molded-parts', 'Molded Rubber Parts'],
  moldedBonded: ['/products/custom-rubber-molded-parts', 'Molded & Metal-Bonded Parts'],
  diaphragms: ['/products/rubber-diaphragms', 'Rubber Diaphragms'],
  extruded: ['/products/extruded-rubber', 'Extruded Rubber'],
  diecut: ['/products/die-cut-gaskets', 'Die-Cut Gaskets'],
  inflatable: ['/products/inflatable-seals', 'Inflatable Seals'],
  ptfe: ['/products/ptfe-products', 'PTFE Products'],
  sheets: ['/rubber-sheets-native', 'Rubber Sheets & Coated Fabrics'],
}

const P = (key, desc) => ({ name: PRODUCTS[key][1], to: PRODUCTS[key][0], desc })

export function Automotive() {
  return <IndustryPage
    title="Automotive Rubber Components"
    heroDesc="Custom oil seals, O-rings, molded parts and weatherstrip engineered for the heat, oils, fuels, coolants and vibration of the drivetrain and chassis — built to your print under ISO 9001 and IATF 16949 quality, never pulled from a shelf."
    overviewTitle="Engineered for the road and the powertrain"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for automotive OEMs and tier suppliers where every seal has to survive years of heat cycling, fluid exposure and road vibration. We match the elastomer to your application — HNBR and FKM for hot engine oil and fuel, EPDM for coolant and weather sealing — and mold, extrude or die-cut each part to your drawing. Every component is validated before production under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Engine & transmission oil seals for hot-oil service',
      'Coolant, fuel & vacuum sealing compounds',
      'Anti-vibration mounts, bushings & isolators',
      'Weatherstrip & body-sealing extruded profiles',
      'Custom molded O-rings, grommets & diaphragms',
      'First-article inspection, PPAP & material certs on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oilSeals', 'Rotary shaft and static oil seals in HNBR and FKM for engine, transmission and axle service.'),
      P('oRings', 'AS568 and metric O-rings for fuel, coolant, oil and vacuum sealing across the vehicle.'),
      P('molded', 'Vibration mounts, bushings, grommets and bonded isolators molded to your drawing.'),
      P('diaphragms', 'Fabric-reinforced diaphragms for actuators, regulators, pumps and vacuum devices.'),
      P('extruded', 'Weatherstrip, body seals, cords and custom profiles for doors, glass and enclosures.'),
      P('diecut', 'Precision die-cut gaskets and seals for covers, housings and electronics enclosures.'),
    ]}
    materials={[
      { name: 'NBR / Nitrile', desc: 'Standard oil and fuel resistance at moderate temperature' },
      { name: 'HNBR', desc: 'Hot engine oil, timing and high-strength dynamic sealing' },
      { name: 'FKM / Viton', desc: 'High-heat fuel, oil and aggressive-fluid resistance' },
      { name: 'EPDM', desc: 'Coolant, brake fluid and weather/ozone resistance' },
      { name: 'Silicone', desc: 'Wide temperature flexibility for gaskets and covers' },
    ]}
    productsTitle="Products we build for automotive"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR AUTOMOTIVE"
    applicationsTitle="Typical automotive applications"
    applications={[
      'Rotary shaft oil seals for engines, transmissions and axles',
      'O-rings and seals for fuel systems and coolant circuits',
      'Anti-vibration engine and suspension mounts in bonded rubber',
      'Door, glass and body weatherstrip in extruded EPDM',
      'Diaphragms for actuators, pumps and vacuum regulators',
      'Grommets, bushings and firewall pass-throughs',
      'Die-cut gaskets for covers, housings and sensor enclosures',
    ]}
    ctaTitle="Need automotive rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function OilGas() {
  return <IndustryPage
    title="Oil & Gas Rubber Components"
    heroDesc="Custom seals, O-rings, packers and molded components engineered for sour-gas exposure, high pressure and high temperature downhole and at the wellhead — built to your print in explosive-decompression-resistant compounds, never pulled from a shelf."
    overviewTitle="Engineered for sour service, pressure & heat"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for upstream, midstream and downstream oil & gas equipment where H2S, CO2, methane and downhole heat destroy the wrong elastomer. We match the compound to your service conditions — HNBR and FKM for oilfield fluids, FFKM for sour and high-temperature wells, PTFE where elastomers reach their limit — and mold, extrude or machine every seal to your drawing. Parts are engineered for rapid gas decompression and validated before production, under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Sour-gas (H2S) & CO2 resistant compounds',
      'High-temperature, high-pressure downhole seals',
      'Rapid-gas-decompression (RGD/ED) resistant elastomers',
      'Wellhead, valve, pump & BOP sealing components',
      'Custom O-rings, packers, diaphragms & molded parts',
      'Material certs, first-article inspection & PPAP on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oRings', 'AS568 and metric O-rings in FFKM, FKM and HNBR for sour-gas, high-pressure static and dynamic sealing.'),
      P('ptfe', 'Inert PTFE seals, backup rings and components for aggressive media and high-temperature downhole service.'),
      P('oilSeals', 'Rotary shaft seals for mud motors, pumps and rotating equipment in oilfield fluids.'),
      P('molded', 'Packer elements, valve seats, boots and bonded components molded to your wellhead and pump specs.'),
      P('diaphragms', 'Reinforced diaphragms for chokes, regulators, actuators and metering equipment.'),
      P('inflatable', 'Pressure-actuated packer and isolation seals for zonal control and equipment closures.'),
    ]}
    materials={[
      { name: 'FFKM / Kalrez', desc: 'Sour-gas and high-temperature resistance for the harshest wells' },
      { name: 'FKM / Viton', desc: 'Broad oilfield-fluid and high-heat chemical resistance' },
      { name: 'HNBR', desc: 'Sour-gas, abrasion and high-pressure downhole toughness' },
      { name: 'NBR / Nitrile', desc: 'Economical resistance to crude oil, mud and hydraulic fluids' },
      { name: 'PTFE', desc: 'Near-universal chemistry and extreme-temperature backup sealing' },
    ]}
    productsTitle="Products we build for oil & gas"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR OIL & GAS"
    applicationsTitle="Typical oil & gas applications"
    applications={[
      'Sour-gas (H2S) wellhead and valve O-rings in FFKM',
      'High-pressure, high-temperature downhole packer and seal elements',
      'Rapid-gas-decompression resistant seals for gas service',
      'Rotary shaft seals for mud motors and oilfield pumps',
      'BOP and choke sealing components in HNBR and FKM',
      'PTFE backup rings and seats for high-pressure sealing',
      'Inflatable packer and zonal-isolation seals',
    ]}
    ctaTitle="Need oil & gas rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function MedicalPharma() {
  return <IndustryPage
    title="Medical & Pharmaceutical Rubber Components"
    heroDesc="Custom seals, tubing, diaphragms and molded parts engineered for fluid-path purity, repeated sterilization and biocompatibility — molded from FDA-grade, platinum-cured elastomers to your print, never pulled from a shelf."
    overviewTitle="Engineered for the fluid path"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for medical device and pharmaceutical OEMs where cleanliness, biocompatibility and lot-to-lot consistency are non-negotiable. We match the elastomer to your process — platinum-cured silicone for pump tubing and diaphragms, FKM and FFKM for aggressive CIP/SIP chemistries and fill lines — and mold, extrude or die-cut every part to your drawing under controlled conditions. Made to spec and validated before production, under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'FDA-grade & USP Class VI capable compounds',
      'Platinum-cured (low-extractable) silicone molding',
      'Cleanroom-compatible & low-particulate parts',
      'CIP/SIP and autoclave-tolerant elastomers',
      'Custom seals, tubing, diaphragms & gaskets',
      'Material certs, traceability & first-article inspection',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oRings', 'AS568 and metric O-rings in platinum-cured silicone, FKM and FFKM for fluid-path and fill-line sealing.'),
      P('diaphragms', 'Reinforced and PTFE-faced diaphragms for metering pumps, valves and fluid handling.'),
      P('molded', 'Custom molded seals, stoppers, bumpers and closures to your device print.'),
      P('extruded', 'Platinum-cured silicone tubing, cords and profiles for peristaltic and transfer lines.'),
      P('diecut', 'Cleanroom-compatible gaskets and seals die-cut to close tolerance for enclosures and manifolds.'),
      P('ptfe', 'Inert PTFE seals and components where chemical purity or CIP chemistry exceeds elastomer limits.'),
    ]}
    materials={[
      { name: 'Silicone', desc: 'Platinum-cured, biocompatible, autoclave-stable' },
      { name: 'FFKM / Kalrez', desc: 'Near-universal resistance for aggressive CIP/SIP media' },
      { name: 'FKM / Viton', desc: 'Chemical resistance for fill lines and solvents' },
      { name: 'EPDM', desc: 'Steam, hot water and clean-in-place resistance' },
      { name: 'PTFE', desc: 'Inert, low-extractable fluid-contact surfaces' },
    ]}
    productsTitle="Products we build for medical & pharmaceutical"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR MEDICAL & PHARMACEUTICAL"
    applicationsTitle="Typical medical & pharmaceutical applications"
    applications={[
      'Platinum-cured silicone tubing for peristaltic and transfer pumps',
      'Metering-pump and valve diaphragms for fluid handling',
      'Fluid-path and fill-line O-rings in FDA-grade compounds',
      'Cleanroom-compatible die-cut gaskets and seals',
      'Autoclave- and CIP/SIP-tolerant static seals',
      'Custom molded stoppers, closures and bumpers',
      'FFKM seals for aggressive sterilization chemistries',
    ]}
    ctaTitle="Need medical or pharma rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function FoodDairy() {
  return <IndustryPage
    title="Food & Dairy Rubber Components"
    heroDesc="Custom sanitary gaskets, seals, tubing and molded parts engineered for clean-in-place cycles, dairy fats and repeated wash-down — built to your print in FDA-compliant, 3-A minded compounds, never pulled from a shelf."
    overviewTitle="Clean, compliant seals built to your spec"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for food, dairy and beverage processing where hygiene and traceability are non-negotiable. We match the elastomer to your product contact, fats, sugars, CIP/SIP chemistry and temperature — from FDA-compliant silicone and EPDM for hot wash-down to nitrile and FKM for oils and aggressive cleaners — and mold, extrude or die-cut every part to your drawing. Each component is produced to your specification under ISO 9001:2015 and IATF 16949:2016, with material certifications on request."
    capabilities={[
      'FDA-compliant & 3-A minded product-contact compounds',
      'Sanitary gaskets, seals & tri-clamp profiles to spec',
      'CIP/SIP and hot wash-down resistant elastomers',
      'Extruded tubing, cord & custom sealing profiles',
      'Die-cut gaskets, tray liners & conveyor components',
      'Material certifications & traceability on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('diecut', 'Sanitary gaskets and sealing washers die-cut in FDA-compliant sheet for fittings, covers and enclosures.'),
      P('extruded', 'Custom tubing, cord and sealing profiles for filling, transfer and door or hopper seals.'),
      P('oRings', 'AS568 and metric O-rings in silicone, EPDM and FKM for pumps, valves and sanitary fittings.'),
      P('molded', 'Molded diaphragms, seals, bumpers and grommets for processing and packaging equipment.'),
      P('sheets', 'Food-grade sheet and coated fabric for tray liners, belting and wash-down surfaces.'),
      P('inflatable', 'Pressure-actuated door and lid seals for hygienic ovens, vessels and clean enclosures.'),
    ]}
    materials={[
      { name: 'Silicone', desc: 'FDA-compliant with a wide clean-in-place temperature range' },
      { name: 'EPDM', desc: 'Excellent steam, CIP chemistry and hot-water resistance' },
      { name: 'NBR / Nitrile', desc: 'Strong resistance to dairy fats, oils and grease' },
      { name: 'FKM / Viton', desc: 'High-heat and aggressive-cleaner chemical resistance' },
      { name: 'Neoprene', desc: 'Durable general-purpose sealing for wash-down environments' },
    ]}
    productsTitle="Products we build for food & dairy"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR FOOD & DAIRY"
    applicationsTitle="Typical food & dairy applications"
    applications={[
      'Sanitary tri-clamp and fitting gaskets in FDA-compliant compounds',
      'CIP/SIP pump and valve seals surviving repeated hot wash-down',
      'Food-grade tubing and hose for filling and product transfer',
      'Die-cut tray liners and conveyor sealing components',
      'Tank, hopper and door seals for hygienic processing vessels',
      'Molded diaphragms and grommets for packaging equipment',
      'Inflatable lid and oven seals for clean, contained processing',
    ]}
    ctaTitle="Need food & dairy rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function Marine() {
  return <IndustryPage
    title="Marine Rubber Components"
    heroDesc="Custom seals, gaskets and molded rubber parts engineered for salt water, ozone and constant immersion — built to your print under ISO 9001:2015 and IATF 16949:2016 quality, never pulled from a shelf."
    overviewTitle="Sealed against salt water and sun"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for marine and offshore equipment, where salt spray, ozone, UV and immersion attack every seal. We match the elastomer to your service conditions — from neoprene and EPDM for weather and ozone to nitrile for fuel and oil — and mold, extrude or die-cut each part to your drawing for hatches, pumps, valves and deck hardware. Every component is engineered, validated and made in China under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Salt-water, ozone & UV resistant compounds',
      'Hatch, door & deck sealing profiles',
      'Pump, valve & through-hull seals and gaskets',
      'Corrosion-resistant rubber-to-metal bonded parts',
      'Custom O-rings, gaskets, diaphragms & inflatable seals',
      'First-article inspection & material certs on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oRings', 'AS568 and metric O-rings in neoprene, EPDM and nitrile for pump, valve and fitting sealing.'),
      P('extruded', 'Custom hatch, door and deck seal profiles, cords and gaskets that shed salt water.'),
      P('diecut', 'Flange, hatch and access-panel gaskets die-cut to your pattern in marine-grade elastomers.'),
      P('molded', 'Bumpers, grommets, mounts and corrosion-resistant metal-bonded components for deck hardware.'),
      P('inflatable', 'Pressure-actuated hatch, door and watertight-closure seals for contamination and flood control.'),
      P('sheets', 'Neoprene and EPDM sheet and coated fabric for linings, splash guards and custom gaskets.'),
    ]}
    materials={[
      { name: 'Neoprene', desc: 'Excellent salt-water, ozone and weather resistance' },
      { name: 'EPDM', desc: 'Outstanding UV, ozone and water/steam resistance' },
      { name: 'NBR / Nitrile', desc: 'Fuel, oil and diesel resistance for engine-room service' },
      { name: 'Silicone', desc: 'Wide-temperature flexibility for gaskets and seals' },
      { name: 'FKM / Viton', desc: 'Broad chemical and fuel resistance for demanding media' },
    ]}
    productsTitle="Products we build for marine"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR MARINE"
    applicationsTitle="Typical marine applications"
    applications={[
      'Hatch, door and deck sealing profiles in neoprene and EPDM',
      'Pump, valve and through-hull O-rings and gaskets',
      'Watertight inflatable seals for hatches and closures',
      'Engine-room fuel and oil seals in nitrile',
      'Corrosion-resistant rubber-to-metal bonded mounts and bumpers',
      'Die-cut flange and access-panel gaskets for deck equipment',
      'UV- and ozone-resistant weather seals for topside enclosures',
    ]}
    ctaTitle="Need marine rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function Defense() {
  return <IndustryPage
    title="Defense Rubber Components"
    heroDesc="Custom mil-spec seals, O-rings and rubber-to-metal bonded isolators engineered for ground vehicles, weapons platforms and field conditions — molded to your print under ISO 9001 and IATF 16949 quality, never pulled from a shelf."
    overviewTitle="Built for the mission envelope"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for defense programs where sealing and vibration control cannot fail in the field. We match the elastomer to your fuels, hydraulic fluids, temperature extremes and shock profile — from fluorosilicone for fuel-system sealing to FFKM for the most aggressive chemistries — and bond rubber to metal for mounts, isolators and armored hardware. Every part is molded, extruded or die-cut to your drawing and validated before production, under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Mil-spec O-rings, seals & gaskets to your drawing',
      'Rubber-to-metal bonded isolators, mounts & bumpers',
      'Fuel-, oil- & hydraulic-fluid resistant compounds',
      'Extreme high/low temperature & shock-resistant elastomers',
      'Ground-vehicle & weapons-platform sealing components',
      'First-article inspection, PPAP & material certs on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oRings', 'AS568 and metric O-rings in FKM, fluorosilicone and FFKM for fuel, hydraulic and weapons-system sealing.'),
      P('moldedBonded', 'Rubber-to-metal bonded isolators, mounts, bumpers and custom molded components for ground vehicles.'),
      P('inflatable', 'Pressure-actuated hatch, door and enclosure seals for contamination and NBC control.'),
      P('diaphragms', 'Reinforced and PTFE-faced diaphragms for actuators, regulators and fluid-control valves.'),
      P('ptfe', 'Inert PTFE seals and components where elastomers reach their chemical or thermal limit.'),
      P('extruded', 'Custom profiles, cords and environmental seals for enclosures, hatches and access panels.'),
    ]}
    materials={[
      { name: 'FKM / Viton', desc: 'High-heat and broad fuel/chemical resistance' },
      { name: 'FFKM / Kalrez', desc: 'Near-universal chemical resistance for the harshest media' },
      { name: 'Fluorosilicone', desc: 'Fuel/oil resistance with wide temperature range' },
      { name: 'Silicone', desc: 'Widest temperature flexibility for seals and gaskets' },
      { name: 'EPDM', desc: 'Brake-fluid, weather and ozone resistance' },
    ]}
    productsTitle="Products we build for defense"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR DEFENSE"
    applicationsTitle="Typical defense applications"
    applications={[
      'Mil-spec fuel- and hydraulic-system O-rings and seals',
      'Rubber-to-metal bonded vibration isolators and engine mounts',
      'Ground-vehicle hatch, door and access-panel environmental seals',
      'Weapons-platform sealing and recoil-system components',
      'High- and low-temperature static and dynamic O-rings',
      'Inflatable seals for contamination-proof and NBC closures',
      'PTFE seals for aggressive-media and high-temperature service',
    ]}
    ctaTitle="Need defense rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function Agriculture() {
  return <IndustryPage
    title="Agriculture Rubber Components"
    heroDesc="Custom seals, gaskets, molded parts and extruded profiles engineered for the sun, spray chemicals, soil and vibration of ag machinery — built to your print under ISO 9001 and IATF 16949 quality, never pulled from a shelf."
    overviewTitle="Engineered for the field and the season"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for agricultural OEMs and equipment builders where parts have to survive UV, ozone, spray chemicals, dust and years of vibration in the field. We match the elastomer to your application — EPDM for weather and UV exposure, NBR for fuel and hydraulic oil, silicone for wide temperature swings — and mold, extrude or die-cut each part to your drawing. Every component is validated before production under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Weather-, UV- & ozone-resistant sealing compounds',
      'Sprayer, hose & fluid-handling seals and gaskets',
      'Hydraulic & fuel-resistant O-rings and oil seals',
      'Cab, panel & enclosure weatherstrip profiles',
      'Anti-vibration mounts, bushings & grommets',
      'First-article inspection, PPAP & material certs on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oilSeals', 'Rotary shaft and static oil seals in NBR and FKM for gearboxes, axles and hydraulic drives.'),
      P('oRings', 'AS568 and metric O-rings for hydraulic, fuel, spray and coolant sealing across the machine.'),
      P('molded', 'Vibration mounts, bushings, bumpers and bonded isolators molded to your drawing.'),
      P('extruded', 'Cab, door and panel weatherstrip, cords and custom profiles in weather-resistant EPDM.'),
      P('diecut', 'Precision die-cut gaskets for housings, covers and electronics enclosures on the machine.'),
      P('sheets', 'Abrasion- and weather-resistant sheet and coated fabric for guards, flaps and liners.'),
    ]}
    materials={[
      { name: 'EPDM', desc: 'Weather, UV, ozone and spray-chemical resistance' },
      { name: 'NBR / Nitrile', desc: 'Fuel, hydraulic oil and grease resistance' },
      { name: 'Silicone', desc: 'Wide temperature flexibility for seals and gaskets' },
      { name: 'Neoprene', desc: 'Balanced weather, oil and abrasion resistance' },
      { name: 'FKM / Viton', desc: 'High-heat fuel and aggressive-chemical resistance' },
    ]}
    productsTitle="Products we build for agriculture"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR AGRICULTURE"
    applicationsTitle="Typical agriculture applications"
    applications={[
      'Sprayer, hose and nozzle seals resistant to ag chemicals',
      'Hydraulic and fuel-system O-rings for drives and implements',
      'Rotary shaft oil seals for gearboxes, axles and PTO drives',
      'Cab, door and panel weatherstrip in extruded EPDM',
      'Anti-vibration mounts, bushings and grommets for engines and cabs',
      'Die-cut gaskets for housings, covers and sensor enclosures',
      'Guards, flaps and liners in weather-resistant rubber sheet',
    ]}
    ctaTitle="Need agriculture rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function Railways() {
  return <IndustryPage
    title="Railway & Transit Rubber Components"
    heroDesc="Custom door and glazing seals, anti-vibration mounts, gaskets and molded parts engineered for the weather, vibration and fire-safety demands of rail and transit vehicles — built to your print under ISO 9001 and IATF 16949 quality, never pulled from a shelf."
    overviewTitle="Engineered for the rails and the ride"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for railcar, locomotive and transit builders where parts have to survive decades of weather, vibration and daily duty cycles. We match the elastomer to your application — EPDM for door, window and weather sealing, neoprene and fire-retardant compounds for interiors and HVAC — and mold, extrude or die-cut each part to your drawing. Every component is validated before production under ISO 9001:2015 and IATF 16949:2016."
    capabilities={[
      'Door, window & glazing weather seals in EPDM',
      'Anti-vibration mounts, bushings & isolators',
      'HVAC, ducting & enclosure gaskets',
      'Fire-retardant compounds for rail interior standards',
      'Custom molded O-rings, grommets & diaphragms',
      'First-article inspection & material certs on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('extruded', 'Door, window and glazing seals, gangway profiles and weatherstrip extruded to your section.'),
      P('molded', 'Anti-vibration mounts, bushings, bumpers and bonded isolators molded to your drawing.'),
      P('diecut', 'Precision die-cut gaskets and seals for HVAC, ducting, panels and enclosures.'),
      P('oRings', 'AS568 and metric O-rings for pneumatic, brake and fluid systems across the vehicle.'),
      P('diaphragms', 'Fabric-reinforced diaphragms for brake actuators, valves and pneumatic devices.'),
      P('sheets', 'Sheet and fabric-reinforced stock for gaskets, flooring, bellows and lining.'),
    ]}
    materials={[
      { name: 'EPDM', desc: 'Weather, ozone and water resistance for door and window seals' },
      { name: 'Neoprene', desc: 'Balanced weather, flame and oil resistance for general sealing' },
      { name: 'Silicone', desc: 'Wide temperature flexibility for HVAC and interior gaskets' },
      { name: 'NBR / Nitrile', desc: 'Oil, fuel and pneumatic-system resistance' },
      { name: 'SBR', desc: 'Cost-effective abrasion resistance for pads and sheet' },
    ]}
    productsTitle="Products we build for railway & transit"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR RAILWAY & TRANSIT"
    applicationsTitle="Typical railway & transit applications"
    applications={[
      'Door, window and glazing weather seals in extruded EPDM',
      'Anti-vibration mounts and bushings for bogies and equipment',
      'Gangway, vestibule and inter-car connection seals',
      'HVAC, ducting and enclosure gaskets',
      'Fire-retardant interior seals to rail flammability standards',
      'Diaphragms and O-rings for brake and pneumatic systems',
      'Die-cut gaskets and sheet parts for panels and housings',
    ]}
    ctaTitle="Need railway & transit rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}

export function RenewableEnergy() {
  return <IndustryPage
    title="Renewable Energy Rubber Components"
    heroDesc="Custom seals, gaskets and molded parts engineered for the sun, wind and weather that solar and wind assets live in — built to your print in UV-, ozone- and temperature-stable elastomers, never pulled from a shelf."
    overviewTitle="Sealed against sun, wind and weather"
    overviewPara="Chinese Rubber Corp manufactures custom rubber components for solar, wind and energy-storage OEMs whose hardware must survive 20+ years of UV, ozone, moisture and thermal cycling outdoors. We match the elastomer to your exposure — EPDM for weather and ozone, silicone for wide temperature swings, FKM where fluids and heat combine — and mold, extrude or die-cut every part to your drawing. All work is engineered and validated under ISO 9001:2015 and IATF 16949:2016, made in China."
    capabilities={[
      'UV-, ozone- & weather-resistant sealing compounds',
      'Solar panel frame, junction-box & connector seals',
      'Wind turbine nacelle, blade & tower seals',
      'Wide-temperature elastomers for outdoor thermal cycling',
      'Custom O-rings, gaskets, diaphragms & extruded profiles',
      'Material certs, first-article inspection & PPAP on request',
      'ISO 9001:2015 & IATF 16949:2016 certified, Made in China',
    ]}
    products={[
      P('oRings', 'AS568 and metric O-rings in EPDM, silicone and FKM for junction-box, connector and enclosure sealing.'),
      P('diecut', 'Weather and ingress gaskets die-cut to your print for panel frames, inverters and control enclosures.'),
      P('extruded', 'Custom profiles, cords and edge seals for solar frames, nacelle covers and access panels.'),
      P('molded', 'Grommets, bushings, boots and vibration mounts molded for outdoor solar and wind hardware.'),
      P('sheets', 'Weatherable sheet and coated fabrics for tower, blade and enclosure sealing and protection.'),
      P('diaphragms', 'Reinforced diaphragms for pitch, brake and hydraulic actuators in wind turbines.'),
    ]}
    materials={[
      { name: 'EPDM', desc: 'Outstanding UV, ozone and weather resistance for outdoor service' },
      { name: 'Silicone', desc: 'Widest temperature flexibility for panel and enclosure seals' },
      { name: 'FKM / Viton', desc: 'Heat and fluid resistance for turbine drivetrain sealing' },
      { name: 'Neoprene', desc: 'Balanced weather, ozone and abrasion resistance for enclosures' },
      { name: 'FVMQ / Fluorosilicone', desc: 'Fuel/oil resistance with a wide outdoor temperature range' },
    ]}
    productsTitle="Products we build for renewable energy"
    materialsEyebrow="MATERIALS WE MOLD & EXTRUDE FOR RENEWABLE ENERGY"
    applicationsTitle="Typical renewable energy applications"
    applications={[
      'Solar panel frame and mounting gaskets in weatherable EPDM',
      'Junction-box and connector O-rings sealing against moisture ingress',
      'Wind turbine nacelle and tower access-panel seals',
      'Pitch- and brake-actuator diaphragms for turbine control',
      'UV- and ozone-stable grommets, bushings and cable boots',
      'Inverter and combiner-box enclosure gaskets',
      'Vibration-isolation mounts for outdoor power electronics',
    ]}
    ctaTitle="Need renewable energy rubber parts to spec?"
    ctaDesc="Send your drawing, sample or service conditions — our engineers confirm the compound, tooling and a path to production."
  />
}
