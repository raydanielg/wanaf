import {
  IconBuildingEstate,
  IconBuildingBank,
  IconFlame,
  IconTruckDelivery,
  IconAntenna,
  IconPlant,
  IconHeartPlus,
  IconBrain,
  IconDatabase,
  IconCode,
  IconShieldCheck,
  IconCloud,
  IconRobot,
  IconEye,
  IconMessage2,
  IconChartLine,
  IconFileText,
  IconUsers,
  IconMapPin,
  IconTruck,
  IconShip,
  IconPackage,
  IconRoute,
  IconBuildingBridge,
  IconBroadcast,
  IconTower,
  IconSignal5g,
  IconDeviceMobile,
  IconCurrencyDollar,
  IconLeaf,
  IconSeeding,
  IconBug,
  IconSatellite,
  IconDroplet,
  IconSun,
  IconStethoscope,
  IconClipboardHeart,
  IconPill,
  IconMicroscope,
  IconBed,
  IconCalendarHeart,
  type Icon,
} from "@tabler/icons-react"

export interface IndustryCapability {
  icon: Icon
  title: string
  description: string
}

export interface IndustryUseCase {
  title: string
  problem: string
  solution: string
  impact: string
}

export interface IndustryStat {
  value: string
  label: string
}

export interface IndustryData {
  slug: string
  title: string
  label: string
  tagline: string
  description: string
  heroIcon: Icon
  capabilities: IndustryCapability[]
  useCases: IndustryUseCase[]
  stats: IndustryStat[]
  services: string[]
}

export const industriesData: Record<string, IndustryData> = {
  government: {
    slug: "government",
    title: "Government & Public Sector",
    label: "Industry",
    tagline: "AI-powered public services for the citizen of tomorrow.",
    description:
      "We help government entities digitise services, automate document processing, and deliver citizen-facing assistants in local languages. From inter-agency data integration to smart-city systems, WANAF builds the technology foundation for efficient, transparent public services.",
    heroIcon: IconBuildingEstate,
    capabilities: [
      {
        icon: IconMessage2,
        title: "Citizen Service Assistants",
        description: "Multilingual AI assistants for public enquiries, permit applications, and service navigation in Arabic, English, and Swahili.",
      },
      {
        icon: IconFileText,
        title: "Document & Permit Processing",
        description: "Automated classification, extraction, and routing of government documents and permit applications.",
      },
      {
        icon: IconDatabase,
        title: "Inter-Agency Data Integration",
        description: "Unified data platforms connecting ministries and agencies for cross-government analytics and service delivery.",
      },
      {
        icon: IconChartLine,
        title: "Policy Analytics",
        description: "Data-driven insights for policy design, programme evaluation, and public expenditure tracking.",
      },
      {
        icon: IconEye,
        title: "Smart City & Traffic Systems",
        description: "Computer vision for traffic management, public safety monitoring, and urban planning analytics.",
      },
      {
        icon: IconShieldCheck,
        title: "Data Sovereignty & Security",
        description: "On-premise and in-country deployment with full data residency compliance for sensitive government data.",
      },
    ],
    useCases: [
      {
        title: "Automated Permit Processing",
        problem: "Manual permit review taking 2-3 weeks per application with high error rates.",
        solution: "AI-powered document classification and data extraction with automated routing to relevant departments.",
        impact: "Processing time reduced to 3-5 days with 94% accuracy on first pass.",
      },
      {
        title: "Citizen Enquiry Assistant",
        problem: "Call centres overwhelmed with repetitive enquiries in multiple languages.",
        solution: "Multilingual AI assistant handling common enquiries 24/7 with escalation to human agents.",
        impact: "60% of enquiries resolved without human intervention, citizen satisfaction up 35%.",
      },
      {
        title: "Public Expenditure Analytics",
        problem: "Fragmented financial data across agencies making oversight difficult.",
        solution: "Integrated data platform with real-time dashboards for expenditure tracking and anomaly detection.",
        impact: "Full visibility into spending patterns with automated alerts for budget deviations.",
      },
    ],
    stats: [
      { value: "3-5 days", label: "Permit processing time" },
      { value: "60%", label: "Enquiries automated" },
      { value: "3", label: "Languages supported" },
      { value: "94%", label: "First-pass accuracy" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Software Engineering", "Cybersecurity", "Enterprise Technology"],
  },
  banking: {
    slug: "banking",
    title: "Banking, Fintech & Insurance",
    label: "Industry",
    tagline: "Intelligent financial services from risk to customer experience.",
    description:
      "From credit scoring with alternative data to real-time fraud detection and claims automation, WANAF helps financial institutions deploy AI that is auditable, compliant, and production-ready. We build systems that integrate with your core banking platform and regulatory framework.",
    heroIcon: IconBuildingBank,
    capabilities: [
      {
        icon: IconChartLine,
        title: "Credit Scoring & Lending",
        description: "Alternative-data credit models, automated loan decisioning, and portfolio risk scoring.",
      },
      {
        icon: IconShieldCheck,
        title: "Fraud & AML Detection",
        description: "Real-time transaction monitoring, anomaly detection, and automated suspicious activity reporting.",
      },
      {
        icon: IconFileText,
        title: "Claims Automation",
        description: "AI-powered claims intake, classification, and adjudication for insurance providers.",
      },
      {
        icon: IconUsers,
        title: "KYC & Onboarding",
        description: "Automated identity verification, document checking, and customer onboarding workflows.",
      },
      {
        icon: IconRobot,
        title: "Collections Prioritisation",
        description: "ML-driven collections scoring and outreach prioritisation for recovery teams.",
      },
      {
        icon: IconMessage2,
        title: "Customer Service AI",
        description: "Banking assistants for balance enquiries, transfers, and product recommendations.",
      },
    ],
    useCases: [
      {
        title: "Real-Time Fraud Detection",
        problem: "Rule-based systems missing sophisticated fraud patterns with high false-positive rates.",
        solution: "Machine learning model analysing transaction patterns, device fingerprints, and behavioural signals in real time.",
        impact: "Fraud detection rate improved by 45% with 60% reduction in false positives.",
      },
      {
        title: "Alternative-Data Credit Scoring",
        problem: "Large unbanked population with no traditional credit history.",
        solution: "Credit model using mobile money history, utility payments, and transaction behaviour for risk assessment.",
        impact: "40% increase in approved loans with non-performing loan rate held below industry average.",
      },
      {
        title: "Automated Claims Processing",
        problem: "Manual claims review taking 10+ days with inconsistent decisions.",
        solution: "AI classification and data extraction with automated adjudication for low-complexity claims.",
        impact: "70% of claims auto-processed, average settlement time reduced to 2 days.",
      },
    ],
    stats: [
      { value: "45%", label: "Better fraud detection" },
      { value: "40%", label: "More loans approved" },
      { value: "2 days", label: "Claims settlement" },
      { value: "60%", label: "Fewer false positives" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Software Engineering", "Cybersecurity", "Cloud & Infrastructure"],
  },
  energy: {
    slug: "energy",
    title: "Energy, Oil, Gas & Mining",
    label: "Industry",
    tagline: "Predictive operations for high-stakes infrastructure.",
    description:
      "WANAF delivers AI and IoT solutions for energy and extractive industries operating in demanding environments. From predictive maintenance on critical equipment to safety monitoring by computer vision, we help you reduce downtime, protect workers, and optimise production.",
    heroIcon: IconFlame,
    capabilities: [
      {
        icon: IconChartLine,
        title: "Predictive Maintenance",
        description: "Sensor-based anomaly detection and failure prediction for pumps, compressors, turbines, and drilling equipment.",
      },
      {
        icon: IconEye,
        title: "Safety Monitoring by Computer Vision",
        description: "Real-time PPE compliance, restricted-zone monitoring, and hazard detection across field sites.",
      },
      {
        icon: IconDatabase,
        title: "Production Forecasting",
        description: "ML models for output prediction based on historical data, weather, and operational parameters.",
      },
      {
        icon: IconFileText,
        title: "Field Data Capture",
        description: "Mobile inspection and maintenance reporting with automated data sync to central systems.",
      },
      {
        icon: IconShieldCheck,
        title: "Asset & Inspection Analytics",
        description: "Drone and satellite imagery analysis for pipeline, rig, and mine site inspection.",
      },
      {
        icon: IconCloud,
        title: "SCADA & IoT Integration",
        description: "Real-time data integration from SCADA, IoT sensors, and operational systems into unified dashboards.",
      },
    ],
    useCases: [
      {
        title: "Predictive Pump Maintenance",
        problem: "Unplanned pump failures causing 12+ hours of production downtime per incident.",
        solution: "Vibration and temperature sensor data fed into ML model predicting failures 5-7 days in advance.",
        impact: "85% of failures predicted early, average downtime reduced by 70%.",
      },
      {
        title: "Site Safety Monitoring",
        problem: "Manual safety oversight unable to cover all areas of large field sites.",
        solution: "Computer vision cameras detecting PPE violations and restricted-zone breaches in real time.",
        impact: "Safety incidents reduced by 50%, full site coverage 24/7.",
      },
      {
        title: "Pipeline Inspection by Drone",
        problem: "Manual pipeline inspection taking weeks with limited accuracy on small defects.",
        solution: "Drone imagery analysed by computer vision for corrosion, leaks, and structural issues.",
        impact: "Inspection time reduced by 80%, defect detection accuracy improved to 96%.",
      },
    ],
    stats: [
      { value: "70%", label: "Less downtime" },
      { value: "50%", label: "Fewer safety incidents" },
      { value: "80%", label: "Faster inspections" },
      { value: "96%", label: "Defect detection" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Cloud & Infrastructure", "Cybersecurity", "Managed IT"],
  },
  logistics: {
    slug: "logistics",
    title: "Logistics, Ports & Trade",
    label: "Industry",
    tagline: "Intelligent movement of goods across the Gulf-Africa corridor.",
    description:
      "WANAF builds AI systems for ports, shipping lines, freight forwarders, and trade platforms. From route optimisation and customs automation to gate recognition and shipment visibility, we help you move goods faster, cheaper, and with full transparency.",
    heroIcon: IconTruckDelivery,
    capabilities: [
      {
        icon: IconRoute,
        title: "Route & Load Optimisation",
        description: "AI-powered route planning, load consolidation, and fuel optimisation across fleet operations.",
      },
      {
        icon: IconFileText,
        title: "Customs & Trade Documentation",
        description: "Automated classification, data extraction, and submission of customs and trade documents.",
      },
      {
        icon: IconEye,
        title: "Gate & Yard Recognition",
        description: "Computer vision for container number reading, damage detection, and gate automation.",
      },
      {
        icon: IconPackage,
        title: "Shipment Visibility",
        description: "End-to-end tracking platform integrating carrier, port, and last-mile data for real-time visibility.",
      },
      {
        icon: IconShip,
        title: "Port Operations Analytics",
        description: "Berth planning, crane utilisation, and dwell-time analytics for port operators.",
      },
      {
        icon: IconTruck,
        title: "Fleet Telematics",
        description: "IoT-based fleet monitoring with driver behaviour scoring and predictive maintenance alerts.",
      },
    ],
    useCases: [
      {
        title: "Container Gate Automation",
        problem: "Manual gate checks causing 30+ minute queues during peak hours.",
        solution: "Computer vision reading container numbers and detecting damage as trucks pass through gates.",
        impact: "Gate processing time reduced to 45 seconds, throughput increased by 3x.",
      },
      {
        title: "Customs Document Automation",
        problem: "Manual data entry from trade documents with high error rates and processing delays.",
        solution: "AI extraction and classification of commercial invoices, bills of lading, and customs declarations.",
        impact: "Document processing time reduced by 85%, data accuracy improved to 98%.",
      },
      {
        title: "Dynamic Route Optimisation",
        problem: "Static routes not accounting for traffic, weather, or delivery window changes.",
        solution: "Real-time route optimisation engine integrating traffic, weather, and customer constraints.",
        impact: "Fuel costs reduced by 18%, on-time delivery rate improved to 95%.",
      },
    ],
    stats: [
      { value: "3x", label: "Gate throughput" },
      { value: "85%", label: "Faster document processing" },
      { value: "18%", label: "Less fuel cost" },
      { value: "95%", label: "On-time delivery" },
    ],
    services: ["Artificial Intelligence", "Software Engineering", "Data & Analytics", "Cloud & Infrastructure", "Enterprise Technology"],
  },
  telecommunications: {
    slug: "telecommunications",
    title: "Telecommunications",
    label: "Industry",
    tagline: "Network intelligence and customer experience at scale.",
    description:
      "WANAF helps telecom operators optimise networks, reduce churn, and deliver intelligent customer support. From mobile money analytics to 5G network planning, we build AI systems that handle the scale and complexity of modern telecommunications.",
    heroIcon: IconAntenna,
    capabilities: [
      {
        icon: IconSignal5g,
        title: "Network Optimisation",
        description: "ML-based capacity planning, interference detection, and automated network parameter tuning.",
      },
      {
        icon: IconChartLine,
        title: "Churn Prediction",
        description: "Customer behaviour models predicting churn risk with recommended retention actions.",
      },
      {
        icon: IconCurrencyDollar,
        title: "Revenue Assurance",
        description: "Automated detection of revenue leakage, billing errors, and fraudulent usage patterns.",
      },
      {
        icon: IconMessage2,
        title: "Automated Customer Support",
        description: "AI assistants for plan enquiries, troubleshooting, and self-service account management.",
      },
      {
        icon: IconDeviceMobile,
        title: "Mobile Money Analytics",
        description: "Transaction pattern analysis, fraud detection, and agent performance monitoring for mobile money.",
      },
      {
        icon: IconBroadcast,
        title: "Tower & Site Monitoring",
        description: "IoT-based monitoring of tower power, temperature, and equipment health with predictive alerts.",
      },
    ],
    useCases: [
      {
        title: "Churn Prevention",
        problem: "Monthly churn rate of 3.5% with retention offers applied too late to be effective.",
        solution: "ML model scoring churn risk weekly with automated trigger of targeted retention campaigns.",
        impact: "Churn reduced to 2.1%, retention campaign ROI improved by 4x.",
      },
      {
        title: "Network Fault Prediction",
        problem: "Reactive fault management causing extended outages and customer complaints.",
        solution: "Predictive model analysing network KPIs to identify degrading components before failure.",
        impact: "60% of faults predicted and prevented, MTTR reduced by 45%.",
      },
      {
        title: "Mobile Money Fraud Detection",
        problem: "Increasing fraud incidents targeting mobile money platforms with manual review delays.",
        solution: "Real-time transaction monitoring with ML detecting suspicious patterns and freezing accounts automatically.",
        impact: "Fraud losses reduced by 75%, false positive rate below 2%.",
      },
    ],
    stats: [
      { value: "2.1%", label: "Churn rate achieved" },
      { value: "60%", label: "Faults prevented" },
      { value: "75%", label: "Less fraud losses" },
      { value: "45%", label: "Faster MTTR" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Software Engineering", "Cloud & Infrastructure", "Cybersecurity"],
  },
  agriculture: {
    slug: "agriculture",
    title: "Agriculture & Agri-processing",
    label: "Industry",
    tagline: "From satellite to shelf — data-driven farming for food security.",
    description:
      "WANAF brings AI and IoT to agriculture across the Gulf and Africa. From satellite-based crop monitoring to quality inspection in processing facilities, we help agribusinesses increase yields, reduce losses, and build transparent supply chains.",
    heroIcon: IconPlant,
    capabilities: [
      {
        icon: IconSatellite,
        title: "Satellite & Drone Crop Monitoring",
        description: "Remote sensing for crop health, growth stage estimation, and stress detection across large areas.",
      },
      {
        icon: IconChartLine,
        title: "Yield Estimation",
        description: "ML models predicting crop yields based on weather, soil, and historical performance data.",
      },
      {
        icon: IconRoute,
        title: "Traceability & Supply Chain",
        description: "End-to-end tracking from farm to processor with QR-coded batch identification.",
      },
      {
        icon: IconBug,
        title: "Pest & Disease Detection",
        description: "Computer vision identifying crop diseases and pest damage from field images.",
      },
      {
        icon: IconDroplet,
        title: "Irrigation Optimisation",
        description: "Soil moisture and weather data driving automated irrigation schedules for water efficiency.",
      },
      {
        icon: IconEye,
        title: "Quality Inspection",
        description: "Automated visual inspection of harvested produce for grading and sorting in processing facilities.",
      },
    ],
    useCases: [
      {
        title: "Satellite Crop Health Monitoring",
        problem: "Manual field scouting unable to cover large commercial farms effectively.",
        solution: "Satellite imagery with NDVI analysis providing weekly crop health maps and stress alerts.",
        impact: "Early stress detection improved yields by 22%, scouting costs reduced by 60%.",
      },
      {
        title: "Automated Produce Grading",
        problem: "Manual sorting of harvested produce with inconsistent quality standards.",
        solution: "Computer vision system grading produce by size, colour, and defect on the processing line.",
        impact: "Sorting speed increased 5x, grading consistency improved to 97%.",
      },
      {
        title: "Smart Irrigation Scheduling",
        problem: "Fixed irrigation schedules wasting water and not responding to actual crop needs.",
        solution: "IoT soil moisture sensors with weather forecast integration driving automated irrigation zones.",
        impact: "Water usage reduced by 35%, crop yield improved by 15% in water-stressed zones.",
      },
    ],
    stats: [
      { value: "22%", label: "Higher yields" },
      { value: "5x", label: "Faster sorting" },
      { value: "35%", label: "Less water usage" },
      { value: "97%", label: "Grading accuracy" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Software Engineering", "Cloud & Infrastructure", "Managed IT"],
  },
  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    label: "Industry",
    tagline: "AI that supports clinicians and protects patient privacy.",
    description:
      "WANAF builds healthcare AI systems with privacy at the core. From medical records digitisation and clinical documentation assistance to imaging support tools and capacity planning, we help providers deliver better care while maintaining full data sovereignty and compliance.",
    heroIcon: IconHeartPlus,
    capabilities: [
      {
        icon: IconFileText,
        title: "Records Digitisation & Search",
        description: "Automated extraction and indexing of medical records with full-text search across patient history.",
      },
      {
        icon: IconStethoscope,
        title: "Clinical Documentation Assistance",
        description: "AI-assisted clinical note generation and coding with human review and approval workflow.",
      },
      {
        icon: IconMicroscope,
        title: "Imaging Support Tools",
        description: "Computer vision for preliminary analysis of X-rays, CT scans, and pathology slides with clinician oversight.",
      },
      {
        icon: IconCalendarHeart,
        title: "Scheduling & Capacity Planning",
        description: "Predictive models for patient flow, bed capacity, and staff scheduling optimisation.",
      },
      {
        icon: IconPill,
        title: "Medication Management",
        description: "Automated medication reconciliation, interaction checking, and prescription monitoring.",
      },
      {
        icon: IconShieldCheck,
        title: "Privacy & Compliance",
        description: "On-premise deployment, data encryption, and audit trails for full patient data sovereignty.",
      },
    ],
    useCases: [
      {
        title: "Medical Records Digitisation",
        problem: "Paper-based records causing delays in patient care and lost historical data.",
        solution: "AI extraction and digitisation of paper records with automated indexing and search.",
        impact: "Records retrieval time reduced from days to seconds, 99.5% data capture accuracy.",
      },
      {
        title: "Imaging Preliminary Analysis",
        problem: "Radiologist workload causing reporting delays of 24-48 hours.",
        solution: "Computer vision providing preliminary findings for prioritisation with full radiologist review.",
        impact: "Critical cases flagged 6x faster, radiologist workload reduced by 30%.",
      },
      {
        title: "Bed Capacity Predictions",
        problem: "Unpredictable patient admissions causing bed shortages and staff strain.",
        solution: "Predictive model forecasting admissions based on seasonality, trends, and local health data.",
        impact: "Bed occupancy optimised to 88%, emergency department wait times reduced by 40%.",
      },
    ],
    stats: [
      { value: "6x", label: "Faster critical case flagging" },
      { value: "30%", label: "Less radiologist workload" },
      { value: "40%", label: "Shorter ED wait times" },
      { value: "99.5%", label: "Data capture accuracy" },
    ],
    services: ["Artificial Intelligence", "Data & Analytics", "Software Engineering", "Cybersecurity", "Cloud & Infrastructure"],
  },
}

export const industrySlugs = Object.keys(industriesData)
