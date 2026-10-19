import MetricSizeChart from '../components/MetricSizeChart.jsx'
import { bs1806Cols, bs1806Data } from '../data/bs1806.js'
import { bs4518Cols, bs4518Data } from '../data/bs4518.js'
import { din3771Cols, din3771Data } from '../data/din3771.js'
import { nft47501Cols, nft47501Data } from '../data/nft47501.js'
import { sms1586Cols, sms1586Data } from '../data/sms1586.js'
import { iso6149Cols, iso6149Data } from '../data/iso6149.js'
import { genericCols, genericData } from '../data/generic.js'
import { crossRefCols, crossRefData } from '../data/crossRef.js'
import { jis2401Tables } from '../data/jis2401Data.js'

const related = [
  { label: 'Standard O-Rings', to: '/products/o-rings' },
  { label: 'Custom O-Rings', to: '/products/o-rings' },
  { label: 'Tolerance Calculator', to: '/products/standard-o-rings/metric-o-ring-tolerances-calculator' },
  { label: 'O-ring materials', to: '/elastomers' },
]

export function Bs1806() {
  return (
    <MetricSizeChart
      crumb="BS 1806 Metric Sizes"
      eyebrow="O-Ring Size Standard"
      title="BS 1806 Imperial O-Ring Size Chart"
      heroDesc="The BS 1806 imperial O-ring size chart is where engineers and buyers land when they need to translate a British Standard dash number into a real, buildable seal. Search a size to confirm the inside diameter, cross-section and tolerance for each dash number across the AS568 cross-section groups, then lock it before you request a quote."
      introTitle="Using the BS 1806 chart to spec your O-ring"
      introParas={[
        'The BS 1806 imperial O-ring size chart is where engineers and buyers land when they need to translate a British Standard dash number into a real, buildable seal. Search for a BS 1806 size and the chart returns the nominal inside diameter, cross-section and tolerance for each dash number across the AS568 cross-section groups plus the between-sizes BS 1806 adds. Use it to confirm the O-ring inside diameter and cross-section against your gland dimensions, cross-reference an existing part, or lock the size before you request a quote so nothing gets lost between drawing and production.',
        'ARC builds O-rings to BS 1806 dimensions as made-to-spec parts, in the compound your application calls for such as Nitrile, EPDM, Viton, silicone and more, matched to temperature, media and pressure. As a US manufacturer with 20 years of custom rubber experience and ISO 9001:2015 and IATF 16949:2016 quality systems, we confirm the size, material and tooling before we cut a single part. Send a dash number, dimensions or a drawing and our engineers turn it into a fast, accurate quote.',
      ]}
      chartTitle="BS 1806 Metric Size Chart"
      cols={bs1806Cols}
      data={bs1806Data}
      searchPh="Search a BS 1806 size or reference…"
      related={related}
      ctaTitle="Need BS 1806 O-rings built to spec?"
      ctaDesc="Send your dash number, dimensions or drawing and our engineers confirm the size, compound and tooling for production."
      introImage="https://i.postimg.cc/Y00xJZyj/bs.jpg"
      introImageTitle="BS 1806 Metric Size Chart"
      introImageParas={[
        'The BS 1806 O-Ring size guide was issued by the British Standards Institution and lists all Imperial standard sizes. This standard includes all of the 5 main cross section groups in AS568 plus several sizes that are "between" AS568 Sizes. BS 1806 has been superseded by BS ISO 3601, however, since BS 1806 is still widely referenced in certain industries / regions of the world, it is still relevant for cross reference purposes.',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
      ]}
    />
  )
}

export function Bs4518() {
  return (
    <MetricSizeChart
      crumb="BS 4518 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="BS 4518 Metric O-Ring Size Chart"
      heroDesc="The fast way to translate a British Standard size code into a real seal — read the code as inside diameter in 0.1 mm followed by cross-section in 0.1 mm, and the chart gives you the exact ID and section you need."
      introTitle="Sourcing BS 4518 metric O-rings for your build"
      introParas={[
        'The BS 4518 metric O-ring size chart is the fast way to translate a British Standard size code into a real seal. Read the code as inside diameter in 0.1 mm followed by cross-section in 0.1 mm, and the chart gives you the exact ID and section you need. Engineers and buyers use it to look up BS 4518 O-ring sizes, confirm a part against a gland or groove, and pin down the metric dimensions before they source or requote a seal.',
        'Once you have the code, ARC molds it to spec. As a US custom rubber components manufacturer, we build BS 4518 O-rings in the compound your application demands — NBR, FKM, EPDM, silicone, HNBR and more — with certified materials backed by our ISO 9001:2015 and IATF 16949:2016 quality systems. Send the size code, ID and cross-section and our engineers confirm the material, tooling and a fast path to a quote.',
      ]}
      chartTitle="BS 4518 Metric O-Rings"
      cols={bs4518Cols}
      data={bs4518Data}
      searchPh="Search a BS 4518 size or reference…"
      related={related}
      ctaTitle="Need BS 4518 O-rings built to spec?"
      ctaDesc="Send us the size code, ID and cross-section — our engineers confirm the compound, tooling and a path to production."
      introImage="https://i.postimg.cc/Y00xJZyj/bs.jpg"
      introImageTitle="BS 4518 Metric O-Rings"
      introImageParas={[
        'Issued by the British Standards Institution, Standard BS 4518 identifies British Standard metric sizes. The size code for these O-Rings is a four digit number indicating the O-Ring I.D. in tenths of millimeters followed by a hyphen and two digits indicating the O-Ring Cross Section, also in tenths of a millimeter.',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
      ]}
    />
  )
}

export function Din3771() {
  return (
    <MetricSizeChart
      crumb="DIN 3771 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="DIN 3771 Metric O-Ring Size Chart"
      heroDesc="The German metric O-ring size standard — read across the chart to translate a DIN 3771 callout (ID x C/S in millimeters) into the exact dimensions you need, then confirm the quality level and hardness code that go with it."
      introTitle="Using the DIN 3771 chart to spec your O-ring"
      introParas={[
        'DIN 3771 is the German metric O-ring size standard engineers reach for when a drawing calls out a seal as inside diameter x cross-section in millimeters rather than a dash number. Read across the chart to translate a DIN 3771 callout into the exact ID and cross-section (CS) you need, then confirm the quality level and hardness code that go with it — the quality grade governs allowable surface and molding defects, and the hardness code sets the durometer (Shore A) for your groove and duty. Buyers searching DIN 3771 metric O-ring sizes use this table to lock the ID x CS, grade and hardness before release, so the seal fits its groove and passes incoming inspection the first time.',
        'Once you have the size, grade and hardness, ARC molds it to your spec. Twenty years of US custom rubber manufacturing, ISO 9001:2015 and IATF 16949:2016 certification, and a full range of compounds — NBR, HNBR, FKM/Viton, EPDM, silicone and more — mean you choose the material and durometer for your temperature, pressure and chemical duty while we hold the DIN 3771 dimensions and quality level you specify. Send the ID x cross-section, quality level and hardness, or a drawing, and our engineers confirm compound, tolerances and a fast quote.',
        'The DIN 3771 o-ring standard is issued by The German Institute for Standards (Deutsches Institut für Normung). This standard identifies O-Ring sizes by the ID x C/S, and may be followed by a letter indicating the quality level (N – normal quality; S – special quality), and a code indicating the rubber polymer and IRHD hardness.',
      ]}
      chartTitle="DIN 3771 Metric O-Rings"
      cols={din3771Cols}
      data={din3771Data}
      searchPh="Search a DIN 3771 size or reference…"
      related={related}
      ctaTitle="Need DIN 3771 O-rings built to spec?"
      ctaDesc="Send us the ID x cross-section, quality level and hardness — our engineers confirm the compound, tolerances and a path to production."
    />
  )
}

export function Nft47501() {
  return (
    <MetricSizeChart
      crumb="NF T 47-501 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="NF T 47-501 French Metric O-Ring Sizes &amp; Tolerances"
      heroDesc="The French national standard for metric O-rings, closely aligned with ISO 3601-1 — pin down the inside diameter and cross-section, then choose your precision class and visual inspection acceptance grade."
      introTitle="Using the NF T 47-501 chart to spec your metric O-ring"
      introParas={[
        'NF T 47-501 is the French national standard for metric O-rings, closely aligned with ISO 3601-1. Engineers and buyers reach for this chart when a print calls out an NF T 47-501 size or when they need to cross-reference a French metric O-ring to an ISO 3601 equivalent. Read across the table to pin down the inside diameter and cross-section, then choose your precision class — aerospace-tight or general industrial — and the visual inspection acceptance class that governs allowable surface and molding defects. That combination of size, precision class and inspection grade is what fully defines the part you need to source.',
        'ARC molds every NF T 47-501 size to your specification — you pick the compound and hardness, we match the precision and inspection class your application demands. As a US custom manufacturer certified to ISO 9001:2015 and IATF 16949:2016, we support a wide range of elastomers for temperature, chemical and pressure requirements. Send your size or drawing and our engineers return a material recommendation and quote, usually within one business day.',
      ]}
      chartTitle="NF T 47-501 Metric O-Rings"
      cols={nft47501Cols}
      data={nft47501Data}
      searchPh="Search an NF T 47-501 size or reference…"
      related={related}
      ctaTitle="Need NF T 47-501 O-rings in the right compound?"
      ctaDesc="Send your size, cross-section or drawing — our engineers confirm the material, precision class, inspection grade and a path to production, usually within one business day."
      introImage="https://i.postimg.cc/Y00xJZyj/bs.jpg"
      introImageTitle="NF T 47-501 Metric O-Rings"
      introImageParas={[
        'NF T 47-501 is issued by the Association Française de Normalisation (French Standards Institute). It is very similar to ISO 3601-1 in both the sizes included and the size reference. The size reference codes are designated with a letter corresponding to each of 5 cross section groups (A-E), 4 digits indicating ID (rounded to 0.1 mm), a 2nd letter indicating Precision Class and a 3rd letter indicating Visual (inspection) Class. The Precision Class is indicated by the letter A (for Aerospace applications) or G (for General Purpose applications). The visual classes are N (1.0 AQL) and S (.65 AQL).',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
      ]}
    />
  )
}

export function Sms1586() {
  return (
    <MetricSizeChart
      crumb="SMS 1586 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="SMS 1586 Metric O-Ring Size Chart"
      heroDesc="The Swedish metric O-ring standard — each size is sorted into a service group: group D covers dynamic and static duty, while group S is intended for static sealing only."
      introTitle="Using the SMS 1586 chart to spec your O-ring"
      introParas={[
        'SMS 1586 is the Swedish metric O-ring standard, and engineers reach this chart when they need to match a ring by its inside diameter (ID) and cross-section (CS) rather than an imperial dash number. Each size is sorted into a service group: group D covers dynamic and static duty, while group S is intended for static sealing only. Whether you are cross-referencing an existing SMS 1586 metric O-ring, confirming a groove design, or searching for the right Swedish metric O-ring size, use the ID and CS columns to lock the geometry and the D/S group to confirm the ring suits your application.',
        'Once you have the size, ARC molds SMS 1586 O-rings to spec in the compound your build demands — NBR, HNBR, FKM, EPDM, silicone, FFKM and more — matched to your temperature, media and pressure requirements. As a US custom manufacturer with 20 years of experience and ISO 9001:2015 plus IATF 16949:2016 quality systems, we tool to your exact ID, cross-section and tolerance and turn a fast, no-obligation quote. Send us the size and group and our engineers confirm the material, tooling and a clear path to production.',
      ]}
      chartTitle="SMS 1586 Metric O-Rings"
      cols={sms1586Cols}
      data={sms1586Data}
      searchPh="Search an SMS 1586 size or reference…"
      related={related}
      ctaTitle="Need SMS 1586 O-rings built to spec?"
      ctaDesc="Send us the ID, cross-section and group — our engineers confirm the compound, tooling and a path to production."
      chartIntroParas={[
        'SMS 1586 refers to Swedish Mechanical Standard for o-rings (Sveriges Mekanstandardisering). In this standard, O-Rings are simply identified by ID and C/S, similar to DIN 3771. Additionally, all SMS 1586 O-Rings are classified into two groups. The first group, intended for dynamic and static installations is indicated in our table by the letter D. The second group, intended mainly for static applications, is indicated with an S.',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
      ]}
    />
  )
}

export function Iso6149() {
  return (
    <MetricSizeChart
      crumb="ISO 6149 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="ISO 6149 Metric O-Ring Size Chart"
      heroDesc="The 13 ISO 6149 O-ring sizes for metric tube-fitting and hydraulic port connections, each matched to its metric thread so you can specify the right seal for the port. ARC molds these O-rings to spec in the compound your application demands."
      introTitle="Sourcing ISO 6149 O-rings for your metric port connections"
      introParas={[
        'ISO 6149 defines the metric-thread port and stud-end connections used across hydraulic systems and metric tube fittings, and this chart lists the 13 thread-matched O-ring sizes so you can pair the right seal to each port. Engineers and buyers searching for ISO 6149 O-ring sizes, metric port seal dimensions, or hydraulic port O-rings by metric thread use it to read the inside diameter and cross-section that seat in the port\u2019s counterbore, confirm the seal against the thread size, and spec the part before releasing a drawing or requesting a quote — heading off leak paths at the port face.',
        'ARC molds these ISO 6149 O-rings to spec in the compound your system demands — NBR, HNBR, FKM/Viton, EPDM and more — matched to the temperature, hydraulic fluid and pressure you\u2019re sealing. As a US custom rubber manufacturer with 20 years of experience and ISO 9001:2015 and IATF 16949:2016 quality systems, we take your port size, thread or drawing and come back fast with the confirmed material, tooling path and a production quote.',
      ]}
      chartTitle="ISO 6149 Metric O-Rings Size Chart"
      cols={iso6149Cols}
      data={iso6149Data}
      searchPh="Search an ISO 6149 thread or reference…"
      related={related}
      ctaTitle="Need ISO 6149 O-rings in the right compound?"
      ctaDesc="Send your port size, thread or drawing and our engineers confirm the material, tooling and a path to production."
    />
  )
}

export function Generic() {
  return (
    <MetricSizeChart
      crumb="Generic Metric O-Rings"
      eyebrow="O-Ring Size Reference"
      title="Generic Metric O-Ring Sizes"
      heroDesc="Common metric O-ring sizes — inside diameter (ID) and cross-section (CS) in millimeters — that fall outside any single formal standard yet share established tooling."
      introTitle="Using the metric O-ring size chart to spec your seal"
      introParas={[
        'This chart lists common metric O-ring sizes — inside diameter (ID) and cross-section (CS) in millimeters — that fall outside any single formal standard yet share established tooling. Engineers and buyers searching for generic metric O-ring sizes, metric O-ring dimensions, or a metric O-ring size chart use it to match a groove or mating bore to a known ID/CS pair, confirm that tooling already exists, and avoid the lead time and cost of a fully custom mold.',
        'Give us the ID, cross-section, and application and ARC manufactures the seal made-to-spec in your chosen compound — from NBR, EPDM, and FKM to silicone and HNBR — with material selected for temperature, pressure, and chemical exposure. As a US manufacturer certified to ISO 9001:2015 and IATF 16949:2016, we confirm tooling and return a fast, accurate quote so your build stays on schedule.',
      ]}
      chartTitle="Generic Metric O-Rings"
      cols={genericCols}
      data={genericData}
      searchPh="Search an ID, CS or reference…"
      related={related}
      ctaTitle="Need a metric O-ring built to spec?"
      ctaDesc="Send us your inside diameter, cross-section, and compound and our engineers will confirm tooling and quote your part."
      chartIntroParas={[
        'This chart shows all of the most common metric sizes that may or may not match up with any of the international standard sizes. We are able to supply most of these sizes, as most factories have established tooling on these generic metric sizes.',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
      ]}
    />
  )
}

export function CrossReference() {
  return (
    <MetricSizeChart
      crumb="Metric O-Ring Size Cross-Reference"
      eyebrow="O-Ring Size Reference"
      title="Metric O-Ring Size Cross-Reference Table"
      heroDesc="Convert an O-ring size across AS568 dash numbers, ISO 3601, DIN 3771, JIS B 2401, BS 1806/4518, SMS 1586 and NF T 47-501 so you can confirm the true inside diameter and cross-section before you commit to a size."
      introTitle="Using the metric O-ring cross-reference chart to spec your part"
      introParas={[
        'Engineers and buyers reach for a metric O-ring size cross-reference table when a drawing calls out one standard but their seal groove, mating hardware or supplier catalog speaks another. This chart lets you convert an O-ring size across AS568 dash numbers, ISO 3601, DIN 3771, JIS B 2401, BS 1806/4518, SMS 1586 and NF T 47-501 so you can confirm the true inside diameter and cross-section before you commit to a size. Use it to translate a legacy part number, match a metric o-ring size to an imported assembly, or verify that an equivalent listing actually shares the same ID and CS.',
        'Once you know the size you need, ARC molds it to your exact spec. As a US custom rubber components manufacturer with 20 years of experience, we tool O-rings to any of these standards in the compound your application demands, from NBR and FKM to EPDM, silicone and HNBR. Every part is produced under our ISO 9001:2015 and IATF 16949:2016 quality systems, and our engineers return a fast quote that confirms the equivalent size, material and tooling path.',
        'No tolerances or materials taken into consideration.',
      ]}
      chartTitle="Metric O-Ring Size Cross Reference Table"
      cols={crossRefCols}
      data={crossRefData}
      searchPh="Search a part, size or standard reference…"
      related={related}
      ctaTitle="Need a match confirmed for production?"
      ctaDesc="Send us your dash number, standard or dimensions and our engineers will confirm the equivalent size, compound and tooling path."
    />
  )
}

export function Jis2401() {
  return (
    <MetricSizeChart
      crumb="JIS B 2401 Metric O-Rings"
      eyebrow="O-Ring Size Standard"
      title="JIS B 2401 Japanese Metric O-Ring Sizes"
      heroDesc="The Japanese Industrial Standard for metric O-rings — organized into four application series so you specify the right seal by function: P for dynamic (moving) service, G for static (fixed) seals, S for compact and special fits, and V for vacuum."
      introTitle="Using the JIS B 2401 chart to spec your O-ring"
      introParas={[
        'JIS B 2401 is the Japanese Industrial Standard for metric O-rings, and this chart organizes every size into four application series so you specify the right seal by function: P for dynamic (moving) service, G for static (fixed) seals, S for compact and special fits, and V for vacuum. Engineers and buyers searching for JIS B 2401 O-ring sizes, Japanese metric O-rings, or P / G / S / V series dimensions use it to read the inside diameter and cross-section by series and part number, match a standardized bore and groove, and confirm the seal on Japanese-built equipment before releasing a drawing or requesting a quote.',
        'ARC molds every JIS B 2401 size to spec in the compound your application demands — NBR, HNBR, FKM/Viton, EPDM, silicone and more — matched to your temperature, media and hardness. As a US custom rubber manufacturer with 20 years of experience and ISO 9001:2015 and IATF 16949:2016 quality systems, we take your P, G, S or V series number, cross-section or drawing and come back fast with the confirmed material, tolerance and a path to production.',
      ]}
      chartTitle="JIS B 2401 Metric O-Rings Size Chart"
      tables={jis2401Tables}
      searchPh="Search a JIS series, size or reference…"
      related={related}
      ctaTitle="Need JIS B 2401 O-rings in the right compound?"
      ctaDesc="Send your P, G, S or V series number, cross-section or drawing — our engineers confirm the material, hardness and a path to production, usually within one business day."
      introImage="https://i.postimg.cc/Y00xJZyj/bs.jpg"
      introImageTitle="JIS B 2401 Metric O-Rings Size Chart"
      introImageParas={[
        'JIS B 2401 is a Japanese Industrial Standard for O-Ring sizes. This standard, often referred to as "Japanese Metrics", is organized into four series, based on their application. The O-Rings in each section have ascending number codes to complete the size reference.',
        'For a complete listing of all metric o-ring sizes, visit our Metric O-Ring Cross Reference Table.',
        'Click on a Series below to view the size chart for that particular series, or scroll down to see the size chart for all JIS sizes sorted from smallest to largest, C/S then I.D.',
        '☑ JIS: P Series – Moving (dynamic)\n☑ JIS: G Series – Fixed (static)\n☑ JIS: S Series – Special Sizes\n☑ JIS: V Series – Vacuum Flange',
      ]}
    />
  )
}
