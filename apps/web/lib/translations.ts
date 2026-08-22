export type Lang = "en" | "ar"

export const translations = {
  en: {
    // Header
    nav_about: "About",
    nav_services: "Services",
    nav_industries: "Industries",
    nav_how_we_work: "How We Work",
    nav_markets: "Markets",
    nav_insights: "Insights",
    nav_contact: "Contact Us",
    nav_consultation: "Request a Consultation",

    // Hero
    hero_location: "Dubai · Gulf & Africa",
    hero_title: "Artificial Intelligence, engineered for",
    hero_subtitle:
      "WANAF Technologies builds AI, data and enterprise technology systems that solve real operational problems across the Gulf and Africa.",
    hero_cta: "Talk to an Expert",

    // Trust Strip
    trust_ai_data: "AI & Data",
    trust_enterprise: "Enterprise Software",
    trust_cloud: "Cloud Infrastructure",
    trust_cyber: "Cybersecurity",
    trust_managed: "Managed IT",
    trust_location: "Dubai · GCC · Africa",

    // Who We Are
    who_label: "Who We Are",
    who_title_1: "One technology partner.",
    who_title_2: "Two regions.",
    who_description:
      "WANAF Technologies is a Dubai-based artificial intelligence and information technology company delivering AI, data platforms, enterprise software, cloud infrastructure and cybersecurity solutions across the Gulf and Africa.",
    who_cta: "Discover WANAF",

    // Gulf Africa
    gulf_label: "Coverage",
    gulf_title: "Built between two markets.",
    gulf_title_h3: "Gulf Cooperation Council",
    gulf_africa_h3: "Africa",
    gulf_connector_gulf: "Gulf",
    gulf_connector_africa: "Africa",

    // Services
    services_label: "What we build",
    services_title: "Core services",
    services_view_all: "View All Services",
    s1_title: "Artificial Intelligence",
    s1_desc: "AI strategy, GenAI, machine learning, computer vision and AI governance.",
    s2_title: "Data & Analytics",
    s2_desc: "Data platforms, warehouses, pipelines, BI and operational analytics.",
    s3_title: "Software Engineering",
    s3_desc: "Web, mobile, enterprise applications and system integrations.",
    s4_title: "Cloud & Infrastructure",
    s4_desc: "Cloud architecture, DevOps, private/hybrid infrastructure and managed hosting.",
    s5_title: "Cybersecurity",
    s5_desc: "Security assessments, IAM, monitoring, incident response and compliance.",
    s6_title: "Enterprise Technology",
    s6_desc: "ERP, CRM, workflow, document management, payments and telecom integrations.",
    s7_title: "Managed IT",
    s7_desc: "Service desk, infrastructure management, licensing and technology support.",

    // AI Section
    ai_label: "Core Practice",
    ai_title: "AI that moves from strategy to production.",
    ai_subtitle:
      "We don't build AI for demonstration. We build systems designed to operate inside real organisations.",
    ai_cta: "Explore AI Solutions",
    ai_cap_1_title: "AI Strategy",
    ai_cap_1_desc: "Opportunity assessment and use-case prioritisation.",
    ai_cap_2_title: "Generative AI",
    ai_cap_2_desc: "Assistants grounded in your documents and databases.",
    ai_cap_3_title: "Machine Learning",
    ai_cap_3_desc: "Forecasting, scoring and predictive models.",
    ai_cap_4_title: "Computer Vision",
    ai_cap_4_desc: "Image, video and sensor analysis at scale.",
    ai_cap_5_title: "Data Engineering",
    ai_cap_5_desc: "Warehouses, pipelines and governed data platforms.",
    ai_cap_6_title: "Intelligent Automation",
    ai_cap_6_desc: "Workflow automation with AI decisioning.",
    ai_cap_7_title: "AI Governance",
    ai_cap_7_desc: "Policy, bias testing, audit trails and compliance.",

    // AI Use Cases
    ai_uc_label: "Applied AI",
    ai_uc_title: "AI for real operational problems",
    ai_uc_cat_1: "Predict",
    ai_uc_cat_2: "Automate",
    ai_uc_cat_3: "Detect",
    ai_uc_cat_4: "Understand",

    // Industries
    ind_label: "Featured",
    ind_title: "Technology built for the way your industry works.",
    ind_all: "All industries",
    ind_explore: "Explore Industries",
    ind_learn_more: "Learn more",
    ind_gov_title: "Government",
    ind_gov_desc: "AI-powered public services, document processing and citizen experience.",
    ind_bank_title: "Banking & Fintech",
    ind_bank_desc: "Fraud detection, credit scoring, KYC automation and intelligent customer operations.",
    ind_log_title: "Logistics & Trade",
    ind_log_desc: "Route optimisation, customs automation, yard intelligence and shipment visibility.",

    // Infrastructure
    infra_label: "Foundation",
    infra_title: "AI is only as strong as the infrastructure beneath it.",
    infra_subtitle:
      "From cloud architecture and data engineering to cybersecurity and enterprise applications, WANAF delivers the technology foundation required to run AI reliably.",
    infra_ai: "AI",
    infra_cloud: "Cloud & Infrastructure",

    // How We Work
    hww_label: "Method",
    hww_title: "How we work",
    hww_s1_title: "Discover",
    hww_s1_desc: "Understand the problem. Map the current process, data and constraints.",
    hww_s2_title: "Design",
    hww_s2_desc: "Define architecture, scope, timeline and cost. Agreed in writing.",
    hww_s3_title: "Prove",
    hww_s3_desc: "Test the idea against a measurable outcome. If it doesn't clear the bar, we say so.",
    hww_s4_title: "Build",
    hww_s4_desc: "Develop and deploy working software in short delivery cycles.",
    hww_s5_title: "Run",
    hww_s5_desc: "Support, monitor and improve. Handover, documentation and training.",

    // Engagement
    eng_label: "Engagement",
    eng_title: "Engagement models",
    eng_m1_title: "Fixed-Scope Project",
    eng_m1_desc: "Defined deliverables, milestones and a fixed price.",
    eng_m2_title: "AI Pilot",
    eng_m2_desc: "A contained proof of value with an agreed success measure.",
    eng_m3_title: "Dedicated Team",
    eng_m3_desc: "A named engineering or data team retained monthly.",
    eng_m4_title: "Managed Service",
    eng_m4_desc: "Ongoing operation, model monitoring and support against SLAs.",
    eng_m5_title: "Advisory",
    eng_m5_desc: "Architecture, AI readiness and security assessments.",

    // Why WANAF
    why_label: "Difference",
    why_title: "Why organisations choose WANAF",
    why_r1_title: "Two Regions. One Team.",
    why_r1_desc: "Dubai governance + African delivery capability. One point of responsibility across both.",
    why_r2_title: "Production First",
    why_r2_desc: "Systems designed for real-world deployment, monitoring and handover from day one.",
    why_r3_title: "Multilingual",
    why_r3_desc: "Solutions built to work in English, Arabic and Swahili — not translated after the fact.",
    why_r4_title: "Data Residency",
    why_r4_desc: "Private, on-premise and in-country deployment where regulation or policy requires it.",
    why_r5_title: "Vendor Neutral",
    why_r5_desc: "Technology selected based on requirements and budget, not the largest margin.",
    why_r6_title: "Transparent Commercials",
    why_r6_desc: "Clear pricing, licensing and infrastructure costs set out before signature.",

    // Footer
    footer_cta_title: "Have a problem worth solving?",
    footer_cta_subtitle: "Tell us the challenge. We'll tell you what it takes.",
    footer_cta_btn: "Request a Consultation",
    footer_desc:
      "Artificial intelligence and information technology solutions for the Gulf and Africa.",
    footer_services: "Services",
    footer_industries: "Industries",
    footer_company: "Company",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_rights: "All rights reserved.",
    footer_location: "Dubai · Gulf & Africa",
    footer_east_africa: "Tanzania, East Africa",

    // Language toggle
    lang_switch_to: "العربية",
  },

  ar: {
    // Header
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_industries: "القطاعات",
    nav_how_we_work: "كيف نعمل",
    nav_markets: "الأسواق",
    nav_insights: "الرؤى",
    nav_contact: "تواصل معنا",
    nav_consultation: "اطلب استشارة",

    // Hero
    hero_location: "دبي · الخليج وأفريقيا",
    hero_title: "الذكاء الاصطناعي، مصمم من أجل",
    hero_subtitle:
      "شركة واناف للتقنية تبني أنظمة الذكاء الاصطناعي والبيانات والتقنيات المؤسسية التي تحل مشاكل تشغيلية حقيقية في الخليج وأفريقيا.",
    hero_cta: "تحدث مع خبير",

    // Trust Strip
    trust_ai_data: "الذكاء الاصطناعي والبيانات",
    trust_enterprise: "البرمجيات المؤسسية",
    trust_cloud: "البنية السحابية",
    trust_cyber: "الأمن السيبراني",
    trust_managed: "إدارة تقنية المعلومات",
    trust_location: "دبي · مجلس التعاون · أفريقيا",

    // Who We Are
    who_label: "من نحن",
    who_title_1: "شريك تقني واحد.",
    who_title_2: "منطقتان.",
    who_description:
      "واناف للتقنية شركة مقرها دبي متخصصة في الذكاء الاصطناعي وتقنية المعلومات، تقدم حلول الذكاء الاصطناعي ومنصات البيانات والبرمجيات المؤسسية والبنية السحابية والأمن السيبراني في الخليج وأفريقيا.",
    who_cta: "اكتشف واناف",

    // Gulf Africa
    gulf_label: "التغطية",
    gulf_title: "مبنية بين سوقين.",
    gulf_title_h3: "مجلس التعاون الخليجي",
    gulf_africa_h3: "أفريقيا",
    gulf_connector_gulf: "الخليج",
    gulf_connector_africa: "أفريقيا",

    // Services
    services_label: "ما نبنيه",
    services_title: "الخدمات الأساسية",
    services_view_all: "عرض جميع الخدمات",
    s1_title: "الذكاء الاصطناعي",
    s1_desc: "استراتيجية الذكاء الاصطناعي، الذكاء التوليدي، تعلم الآلة، الرؤية الحاسوبية وحوكمة الذكاء الاصطناعي.",
    s2_title: "البيانات والتحليلات",
    s2_desc: "منصات البيانات، المستودعات، الخطوط البرمجية، التحليلات التجارية والتحليلات التشغيلية.",
    s3_title: "هندسة البرمجيات",
    s3_desc: "تطبيقات الويب والجوال والمؤسسات وتكامل الأنظمة.",
    s4_title: "السحابة والبنية التحتية",
    s4_desc: "هندسة السحابة، DevOps، البنية الخاصة/الهجينة والاستضافة المدارة.",
    s5_title: "الأمن السيبراني",
    s5_desc: "تقييمات الأمن، إدارة الهوية والوصول، المراقبة، الاستجابة للحوادث والامتثال.",
    s6_title: "التقنيات المؤسسية",
    s6_desc: "ERP، CRM، سير العمل، إدارة المستندات، المدفوعات وتكامل الاتصالات.",
    s7_title: "إدارة تقنية المعلومات",
    s7_desc: "مكتب الخدمة، إدارة البنية التحتية، الترخيص ودعم التقنية.",

    // AI Section
    ai_label: "الممارسة الأساسية",
    ai_title: "ذكاء اصطناعي ينتقل من الاستراتيجية إلى الإنتاج.",
    ai_subtitle:
      "لا نبني الذكاء الاصطناعي للعرض. نبني أنظمة مصممة للعمل داخل مؤسسات حقيقية.",
    ai_cta: "استكشف حلول الذكاء الاصطناعي",
    ai_cap_1_title: "استراتيجية الذكاء الاصطناعي",
    ai_cap_1_desc: "تقييم الفرص وتحديد أولويات حالات الاستخدام.",
    ai_cap_2_title: "الذكاء التوليدي",
    ai_cap_2_desc: "مساعدون يستندون إلى مستنداتك وقواعد بياناتك.",
    ai_cap_3_title: "تعلم الآلة",
    ai_cap_3_desc: "التنبؤ والتقييم والنماذج التنبؤية.",
    ai_cap_4_title: "الرؤية الحاسوبية",
    ai_cap_4_desc: "تحليل الصور والفيديو والمستشعرات على نطاق واسع.",
    ai_cap_5_title: "هندسة البيانات",
    ai_cap_5_desc: "المستودعات وخطوط البيانات ومنصات البيانات المحوكمة.",
    ai_cap_6_title: "الأتمتة الذكية",
    ai_cap_6_desc: "أتمتة سير العمل بقرارات الذكاء الاصطناعي.",
    ai_cap_7_title: "حوكمة الذكاء الاصطناعي",
    ai_cap_7_desc: "السياسات، اختبار التحيز، سجلات التدقيق والامتثال.",

    // AI Use Cases
    ai_uc_label: "الذكاء الاصطناعي التطبيقي",
    ai_uc_title: "ذكاء اصطناعي لمشاكل تشغيلية حقيقية",
    ai_uc_cat_1: "تنبأ",
    ai_uc_cat_2: "أتمت",
    ai_uc_cat_3: "اكتشف",
    ai_uc_cat_4: "افهم",

    // Industries
    ind_label: "مميز",
    ind_title: "تقنية مبنية لطريقة عمل قطاعك.",
    ind_all: "جميع القطاعات",
    ind_explore: "استكشف القطاعات",
    ind_learn_more: "اعرف المزيد",
    ind_gov_title: "الحكومة",
    ind_gov_desc: "خدمات عامة مدعومة بالذكاء الاصطناعي ومعالجة المستندات وتجربة المواطنين.",
    ind_bank_title: "البنوك والتقنية المالية",
    ind_bank_desc: "كشف الاحتيال، تقييم الائتمان، أتمتة KYC وعمليات العملاء الذكية.",
    ind_log_title: "الخدمات اللوجستية والتجارة",
    ind_log_desc: "تحسين المسارات، أتمتة الجمارك، ذكاء الساحات ومراقبة الشحنات.",

    // Infrastructure
    infra_label: "الأساس",
    infra_title: "الذكاء الاصطناعي قوي بقدر قوة البنية التحتية تحته.",
    infra_subtitle:
      "من هندسة السحابة وهندسة البيانات إلى الأمن السيبراني والتطبيقات المؤسسية، تقدم واناف الأساس التقني اللازم لتشغيل الذكاء الاصطناعي بشكل موثوق.",
    infra_ai: "الذكاء الاصطناعي",
    infra_cloud: "السحابة والبنية التحتية",

    // How We Work
    hww_label: "المنهجية",
    hww_title: "كيف نعمل",
    hww_s1_title: "اكتشف",
    hww_s1_desc: "افهم المشكلة. ارسم العملية الحالية والبيانات والقيود.",
    hww_s2_title: "صمم",
    hww_s2_desc: "حدد الهيكل والنطاق والجدول الزمني والتكلفة. متفق عليه كتابياً.",
    hww_s3_title: "أثبت",
    hww_s3_desc: "اختبر الفكرة مقابل نتيجة قابلة للقياس. إذا لم تتجاوز المعيار، نقول ذلك.",
    hww_s4_title: "ابنِ",
    hww_s4_desc: "طور وانشر برمجيات عاملة في دورات تسليم قصيرة.",
    hww_s5_title: "شغّل",
    hww_s5_desc: "الدعم والمراقبة والتحسين. التسليم والتوثيق والتدريب.",

    // Engagement
    eng_label: "التعاون",
    eng_title: "نماذج التعاون",
    eng_m1_title: "مشروع محدد النطاق",
    eng_m1_desc: "مخرجات محددة ومراحل وسعر ثابت.",
    eng_m2_title: "رائد ذكاء اصطناعي",
    eng_m2_desc: "إثبات قيمة محدود بمقياس نجاح متفق عليه.",
    eng_m3_title: "فريق مخصص",
    eng_m3_desc: "فريق هندسة أو بيانات محدد باسمه على أساس شهري.",
    eng_m4_title: "خدمة مدارة",
    eng_m4_desc: "تشغيل مستمر ومراقبة النماذج والدعم وفق اتفاقيات مستوى الخدمة.",
    eng_m5_title: "استشارات",
    eng_m5_desc: "تقييمات الهيكل وجاهزية الذكاء الاصطناعي والأمن.",

    // Why WANAF
    why_label: "الفرق",
    why_title: "لماذا تختار المؤسسات واناف",
    why_r1_title: "منطقتان. فريق واحد.",
    why_r1_desc: "حوكمة دبي + قدرة التسليم الأفريقية. نقطة مسؤولية واحدة عبرهما.",
    why_r2_title: "الإنتاج أولاً",
    why_r2_desc: "أنظمة مصممة للنشر الواقعي والمراقبة والتسليم من اليوم الأول.",
    why_r3_title: "متعدد اللغات",
    why_r3_desc: "حلول مبنية للعمل بالإنجليزية والعربية والسواحيلية — وليست مترجمة لاحقاً.",
    why_r4_title: "إقامة البيانات",
    why_r4_desc: "نشر خاص وداخلي ووطني حيث يتطلب التنظيم أو السياسة ذلك.",
    why_r5_title: "حياد الموردين",
    why_r5_desc: "التقنية تُختار بناءً على المتطلبات والميزانية، وليس أكبر هامش.",
    why_r6_title: "شفافية تجارية",
    why_r6_desc: "تسعير واضح وتكاليف الترخيص والبنية التحتية موضحة قبل التوقيع.",

    // Footer
    footer_cta_title: "هل لديك مشكلة تستحق الحل؟",
    footer_cta_subtitle: "أخبرنا بالتحدي. سنخبرك بما يتطلبه الأمر.",
    footer_cta_btn: "اطلب استشارة",
    footer_desc: "حلول الذكاء الاصطناعي وتقنية المعلومات للخليج وأفريقيا.",
    footer_services: "الخدمات",
    footer_industries: "القطاعات",
    footer_company: "الشركة",
    footer_legal: "قانوني",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_location: "دبي · الخليج وأفريقيا",
    footer_east_africa: "تنزانيا، شرق أفريقيا",

    // Language toggle
    lang_switch_to: "English",
  },
} as const

export type TranslationKey = keyof typeof translations.en
