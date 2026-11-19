

/* BACKGROUND MUSIC */
(function(){
  const audio = document.getElementById('bgMusic');
  const btn   = document.getElementById('muteBtn');
  if (!audio || !btn) return;
  
  let started = false;

  // Empezar silenciado visualmente en el boton si no ha iniciado
  btn.classList.add('muted');

  function tryPlay() {
    if (started) return;
    audio.volume = 0.35;
    audio.muted = false;
    audio.play().then(() => {
      started = true;
      btn.classList.remove('muted');
      btn.classList.add('playing');
    }).catch(() => {
      // Bloqueado temporalmente por navegador
    });
  }

  // Intentamos reproducir al primer clic humano en cualquier lugar
  document.body.addEventListener('click', tryPlay, { once: true, capture: true });
  document.body.addEventListener('touchstart', tryPlay, { once: true, capture: true });

  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (!started) {
      tryPlay();
      return;
    }
    // Si ya habia iniciado, togglea el mute
    if (audio.muted) {
      audio.muted = false;
      audio.play(); // Asegurar si estaba pausado
      btn.classList.remove('muted');
      btn.classList.add('playing');
      btn.title = 'Silenciar música';
    } else {
      audio.muted = true;
      btn.classList.add('muted');
      btn.classList.remove('playing');
      btn.title = 'Activar música';
    }
  });
})();

const T = {
  en:{
    nav_partners:"For Partners",nav_services:"Services",nav_about:"About Us",nav_how:"How It Works",nav_contact:"Contact",nav_drive:"Drive With Us →",
    hero_eyebrow:"B2B Institutional Transportation · 4 Years · Multi-State",
    hero_h1a:"Operational Stability",hero_h1b:"Districts Can Measure.",hero_h1c:"Risks They Won't Have to Manage.",
    hero_p:"Safe Drive Services is a structured B2B operator delivering compliant, trackable student transportation for school districts, transport brokers, and charter institutions across multiple states.",
    hero_cta1:"Our Partners →",hero_cta2:"Request a Meeting",
    stat1:"On-Time Standard",stat2:"Years Operating",stat3:"States",stat4:"Institutional Only",
    tb1:"School Districts",tb2:"Transport Brokers",tb3:"Charter & Private Schools",tb4:"Regulatory Compliance",tb5:"Verified Metrics",
    m1:"On-Time Rate<br>Operational Standard",m2:"Years of Multi-State<br>Structured Operation",m3:"Tolerance for<br>Regulatory Non-Compliance",m4:"States with Active<br>Operations",
    part_eyebrow:"Strategic Partners",part_title:"Built for Institutional Operations",part_sub:"Safe Drive operates exclusively B2B. Select your profile to see how we reduce operational risk for your organization.",
    tab_districts:"School Districts",tab_brokers:"Transport Brokers",tab_charter:"Charter &amp; Private Schools",
    td_ey:"For School Districts",td_title:"Reduce Legal Exposure.<br>Guarantee Contractual Compliance.",
    td_body:"School districts face regulatory pressure, parent complaints, and liability exposure with every route. Safe Drive provides a structured operator with defined protocols, measurable punctuality, and full state-level regulatory compliance — eliminating the operational chaos that districts cannot afford.",
    td_v1h:"Regulatory compliance per jurisdiction",td_v1p:"Every state operates under its specific regulations. No exceptions.",
    td_v2h:"95% on-time standard",td_v2p:"A measurable, contractual metric, not a marketing claim.",
    td_v3h:"Sensitive case handling",td_v3p:"Trained staff for special needs students with defined protocols.",
    td_v4h:"Incident reduction",td_v4p:"Structured operation that minimizes complaints, delays, and emergency rescues.",
    td_cta:"Contact a District Representative →",
    tmo1:"Punctuality",tmo2:"Regulatory Gaps",tmo3:"Aligned",tmo4:"Compliant",tmo5:"Structured Routes",tmo6:"Institutional Standards",
    tbe_ey:"For Transport Brokers",tbe_title:"An Operator That Executes<br>Without Friction.",
    tbe_body:"Brokers like EverDriven need operators who deliver — without escalations, without exceptions. Safe Drive is a multi-state structured operator that aligns to your KPIs and SLAs, manages its own protocols, and keeps your accounts stable.",
    tbe_v1h:"KPI and SLA alignment",tbe_v1p:"We operate under your metrics. Reporting available on request.",
    tbe_v2h:"Multi-state coverage",tbe_v2p:"Consistent execution across jurisdictions under a single operator.",
    tbe_v3h:"Low operational friction",tbe_v3p:"Internal protocols handle escalations before they reach your account team.",
    tbe_v4h:"Contractual stability",tbe_v4p:"4 years of consistent operation. No sudden capacity failures.",
    tbe_cta:"Connect With Our Operations Team →",
    tc_ey:"For Charter & Private Schools",tc_title:"Structured Access.<br>Institutional Accountability.",
    tc_body:"Charter and private schools need transport partners who operate under defined standards — not informal arrangements. Safe Drive delivers consistent routes, regulatory compliance, and operational control that protects your institution's reputation.",
    tc_v1h:"Assigned recurring routes",tc_v1p:"Stable, predictable operation with no improvised scheduling.",
    tc_v2h:"Alternative transport coverage",tc_v2p:"Backup capacity for non-standard or emergency transportation needs.",
    tc_v3h:"Defined institutional protocols",tc_v3p:"Every route follows formal procedures, not ad-hoc arrangements.",
    tc_v4h:"Reputational protection",tc_v4p:"Incidents reduced through structured control, not luck.",
    tc_cta:"Start a Conversation →",
    serv_eyebrow:"Service Scope",serv_title:"What We Execute",serv_sub:"All services delivered under defined protocols, regulatory compliance, and operational control. No improvised arrangements.",
    s1_title:"Assigned Contract Routes",s1_p:"Recurring routes executed under contractual agreements. Predictable, structured, compliant.",
    s2_title:"Special Needs Transport",s2_p:"Staff trained in defined protocols for students with physical, cognitive, and developmental needs.",
    s3_title:"Alternative Transport",s3_p:"Backup transport capacity within a regulated framework for non-standard needs.",
    s4_title:"Sensitive Case Handling",s4_p:"Dedicated protocols for high-risk students. Executed with discretion and institutional accountability.",
    s5_title:"GPS Monitoring & Tracking",s5_p:"Real-time vehicle tracking with event-based logging for district and broker oversight.",
    s6_title:"School Mobility Program",s6_p:"Extended coverage ensuring access to education regardless of geography, multi-state compliant.",
    about_eyebrow:"About Safe Drive",about_title:"Operational Risk Reduction, Not Just Transportation",
    about_sub:"Safe Drive Service is a B2B institutional operator with 4 years of multi-state structured operation. The value we deliver is not physical movement — it is the elimination of operational chaos that districts, brokers, and schools cannot afford to absorb.",
    chk1_h:"Compliance Before Speed",chk1_p:"Regulatory compliance is non-negotiable in every jurisdiction we operate.",
    chk2_h:"Control Before Improvisation",chk2_p:"Every route operates under defined protocols. No ad-hoc decisions on critical routes.",
    chk3_h:"Controlled, Strategic Expansion",chk3_p:"We grow within real operational capacity. No commitments beyond our ability to execute with full compliance.",
    cov_eyebrow:"National Reach",cov_title:"Our Active States",cov_sub:"Safe Drive provides structured transportation across multiple states. Hover over an active state below to view operations data.",
    how_eyebrow:"Onboarding Process",how_title:"How We Onboard Partners",how_sub:"A structured, frictionless process from first contact to full operational execution.",
    step1_h:"Initial Contact",step1_p:"Connect via form or phone. We assess your operational requirements and jurisdictional scope.",
    step2_h:"Route & Scope Review",step2_p:"Operations team reviews route volume, geography, student profiles, and compliance requirements per state.",
    step3_h:"Contract & Protocol Setup",step3_p:"Formal agreements established. Protocols defined per route type. Assignments confirmed.",
    step4_h:"Live Execution",step4_p:"Fully operational with GPS monitoring, real-time reporting, and 95% on-time standard from day one.",
    hire_eyebrow:"We're Hiring",hire_title:"Drive With Us.<br>Make a Difference.",
    hire_sub:"Safe Drive is expanding and continuously seeking qualified drivers and student monitors across the United States. Join a structured, professional operation.",
    perk1_h:"Competitive Pay",perk1_p:"Attractive rates with route bonuses and performance incentives.",
    perk2_h:"Flexible Hours",perk2_p:"School-hours routes only — no nights or weekends required.",
    perk3_h:"Growth Opportunities",perk3_p:"Professional and career growth opportunities available.",
    perk4_h:"Structured Operation",perk4_p:"Clear protocols, defined routes, and professional institutional standards.",
    req_title:"Basic Requirements",
    req1:"Valid Driver's License",req2:"Clean driving record — last 3 years",req3:"Federal & state background check clearance",req4:"Minimum 21 years of age",req5:"Employment Certificates",req6:"Drug screening clearance",req7:"Basic English communication skills",req8:"CPR / First Aid certified (or willing to obtain)",req9:"Reliable, punctual, and professional attitude",req10:"Prior experience with children is a plus",
    pos2:"Van Drivers",pos3:"Student Monitors",
    cta_title:"Ready to Join Our Team?",cta_sub:"Fill out our quick application — under 3 minutes. We'll be in touch within 48 hours.",apply_btn:"Apply Now",
    team_eyebrow:"Our Leadership",team_title:"The Team Behind Safe Drive",
    tm1_role:"Chief Executive Officer",tm2_role:"Chief Operating Officer",tm3_role:"Recruitment & Marketing",tm4_role:"Digital Support",tm5_role:"Recruitment & Marketing",tm6_role:"Financial Coordinator",
    contact_eyebrow:"Get In Touch",contact_title:"Start a Conversation",
    contact_sub:"Whether you represent a school district, a transport broker, or a charter institution — our operations team will respond within 24 business hours.",
    cc1_h:"Phone",cc2_h:"Email",cc3_h:"Location",cc3_p:"Florida, USA · Multi-State Operations",cc4_h:"Careers",cc4_p:"Apply to drive with us →",
    form_title:"Send Us a Message",f_fname:"First Name",f_lname:"Last Name",f_email:"Email",f_phone:"Phone",f_iam:"I represent a...",
    f_opt1:"School District",f_opt2:"Transport Broker",f_opt3:"Charter / Private School",f_opt4:"Other Institution",f_opt5:"Prospective Driver",
    f_msg:"Message",f_submit:"Send Message →",ph_fname:"Maria",ph_lname:"Lopez",ph_msg:"Describe your operational needs...",
    ft_tagline:"Structured B2B student transportation for school districts, transport brokers, and charter institutions — multi-state, compliance-first.",
    ft_company:"Company",ft_mobility:"School Mobility",ft_privacy:"Privacy Policy",ft_contact_h:"Contact",ft_join:"Join Our Team",ft_send:"Send a Message",ft_rights:"© 2026 Safe Drive Services. All Rights Reserved.",ft_location:"Florida, USA · Multi-State B2B Operations",
    pp_page_title:"Privacy Policy — Safe Drive Services",
    pp_back:"← Back to Home",
    pp_eyebrow:"Legal & Privacy",
    pp_title:"Safe Drive Services Privacy Policy",
    pp_meta_updated_label:"Last Updated",
    pp_meta_updated_val:"November 2026",
    pp_meta_web_label:"Website",
    pp_meta_hq_label:"Headquarters",
    pp_meta_hq_val:"Orlando, Florida, United States.",
    pp_intro:"At <strong>Safe Drive Services (SDS)</strong>, we respect your right to privacy. This policy describes how we collect, use, store, and protect the personal information you provide when interacting with our websites, online forms, social media channels, or messaging applications (WhatsApp, SMS).",
    pp_s1_h:"1. Information We Collect",
    pp_s1_p:"When you complete a recruitment form or contact us directly, we may collect:",
    pp_s1_li1:"<strong>Identification and contact details:</strong> Full name, phone number, email address, city, and state or ZIP code.",
    pp_s1_li2:"<strong>Employment eligibility information:</strong> Driver's license status, driving record (MVR), U.S. work authorization status, certifications (such as CPR/First Aid), and screening results (Background Check and Drug Test).",
    pp_s1_li3:"<strong>Vehicle information:</strong> Make, model, year, registration status, auto insurance, and mechanical inspection (when using a personal vehicle applies).",
    pp_s2_h:"2. How We Use Information",
    pp_s2_p:"We use the collected data solely to:",
    pp_s2_li1:"Evaluate and process applications from drivers interested in providing services with SDS.",
    pp_s2_li2:"Verify compliance with safety standards required by school districts and state laws.",
    pp_s2_li3:"Contact you by phone call, email, SMS, or WhatsApp to advance your onboarding process or inform you about available routes.",
    pp_s2_li4:"Coordinate logistics and operational assignment of specialized student transportation services.",
    pp_s3_h:"3. Disclosure and Transfer of Data to Third Parties",
    pp_s3_callout:"<strong>We do not sell, rent, or trade your personal information to third parties.</strong>",
    pp_s3_p:"Your data may only be shared under the following conditions:",
    pp_s3_li1:"<strong>Verification providers:</strong> Accredited companies responsible for conducting criminal background reports, substance screenings, and driving record checks, always under strict confidentiality.",
    pp_s3_li2:"<strong>Legal compliance and school districts:</strong> Regulatory authorities or contracting entities when strictly required by law or school regulations for service delivery.",
    pp_s4_h:"4. Data Security",
    pp_s4_p:"We implement administrative, technical, and organizational measures to protect your personal data against unauthorized access, loss, alteration, or improper disclosure.",
    pp_s5_h:"5. Communications and Consent",
    pp_s5_p:"By providing your data through forms or direct messages, you authorize Safe Drive Services to contact you regarding service opportunities. You may revoke this consent or opt out of our communications at any time by replying \"STOP\" to a message or requesting it in writing.",
    pp_s6_h:"6. Your Rights",
    pp_s6_p:"You have the right to request access to, correction of, or deletion of your personal data stored in our databases, except for records we are required to retain under legal or contractual regulations in the transportation sector.",
    pp_s7_h:"7. Contact",
    pp_s7_p:"For questions about this policy or the handling of your data, you may contact the Safe Drive Services team through our website:"
  },
  es:{
    nav_partners:"Para Socios",nav_services:"Servicios",nav_about:"Nosotros",nav_how:"Cómo Funciona",nav_contact:"Contacto",nav_drive:"Trabaja con Nosotros →",
    hero_eyebrow:"Transporte Institucional B2B · 4 Años · Multiestado",
    hero_h1a:"Estabilidad Operativa",hero_h1b:"Que los Distritos Pueden Medir.",hero_h1c:"Riesgos que No Tendrán que Gestionar.",
    hero_p:"Safe Drive Services es un operador B2B estructurado que entrega transporte estudiantil conforme y trazable para distritos escolares, brokers de transporte e instituciones charter en múltiples estados.",
    hero_cta1:"Nuestros Socios →",hero_cta2:"Solicitar Reunión",
    stat1:"Estándar de Puntualidad",stat2:"Años de Operación",stat3:"Estados",stat4:"Solo Institucional",
    tb1:"Distritos Escolares",tb2:"Brokers de Transporte",tb3:"Escuelas Charter y Privadas",tb4:"Cumplimiento Regulatorio",tb5:"Métricas Verificables",
    m1:"Tasa de Puntualidad<br>Estándar Operativo",m2:"Años de Operación<br>Estructurada Multiestado",m3:"Tolerancia a<br>Incumplimiento Regulatorio",m4:"Estados con Operaciones<br>Activas",
    part_eyebrow:"Socios Estratégicos",part_title:"Diseñado para Operaciones Institucionales",part_sub:"Safe Drive opera exclusivamente B2B. Selecciona tu perfil para ver cómo reducimos el riesgo operativo en tu organización.",
    tab_districts:"Distritos Escolares",tab_brokers:"Brokers de Transporte",tab_charter:"Escuelas Charter y Privadas",
    td_ey:"Para Distritos Escolares",td_title:"Reduce la Exposición Legal.<br>Garantiza el Cumplimiento Contractual.",
    td_body:"Los distritos escolares enfrentan presión regulatoria, quejas de padres y exposición legal en cada ruta. Safe Drive ofrece un operador estructurado con protocolos definidos, puntualidad medible y cumplimiento regulatorio completo — eliminando el caos operativo que los distritos no pueden permitirse.",
    td_v1h:"Cumplimiento regulatorio por jurisdicción",td_v1p:"Cada estado opera bajo sus regulaciones específicas. Sin excepciones.",
    td_v2h:"Estándar de puntualidad del 95%",td_v2p:"Una métrica contractual y medible, no una promesa de marketing.",
    td_v3h:"Manejo de casos sensibles",td_v3p:"Personal capacitado para estudiantes con necesidades especiales bajo protocolos definidos.",
    td_v4h:"Reducción de incidentes",td_v4p:"Operación estructurada que minimiza quejas, retrasos y rescates de emergencia.",
    td_cta:"Contactar a un Representante de Distrito →",
    tmo1:"Puntualidad",tmo2:"Brechas Regulatorias",tmo3:"Alineado",tmo4:"Conforme",tmo5:"Rutas Estructuradas",tmo6:"Estándares Institucionales",
    tbe_ey:"Para Brokers de Transporte",tbe_title:"Un Operador que Ejecuta<br>Sin Fricción.",
    tbe_body:"Brokers como EverDriven necesitan operadores que cumplan — sin escalaciones, sin excepciones. Safe Drive es un operador estructurado multiestado que se alinea con tus KPI y SLA, gestiona sus propios protocolos y mantiene tus cuentas estables.",
    tbe_v1h:"Alineación con KPI y SLA",tbe_v1p:"Operamos bajo tus métricas. Reportes disponibles bajo solicitud.",
    tbe_v2h:"Cobertura multiestado",tbe_v2p:"Ejecución consistente en múltiples jurisdicciones bajo un solo operador.",
    tbe_v3h:"Baja fricción operativa",tbe_v3p:"Los protocolos internos gestionan escalaciones antes de que lleguen a tu equipo.",
    tbe_v4h:"Estabilidad contractual",tbe_v4p:"4 años de operación consistente. Sin fallas de capacidad inesperadas.",
    tbe_cta:"Conectar con Nuestro Equipo de Operaciones →",
    tc_ey:"Para Escuelas Charter y Privadas",tc_title:"Acceso Estructurado.<br>Responsabilidad Institucional.",
    tc_body:"Las escuelas charter y privadas necesitan socios de transporte que operen bajo estándares definidos. Safe Drive entrega rutas consistentes, cumplimiento regulatorio y control operativo que protege la reputación de tu institución.",
    tc_v1h:"Rutas recurrentes asignadas",tc_v1p:"Operación estable y predecible sin programación improvisada.",
    tc_v2h:"Cobertura de transporte alternativo",tc_v2p:"Capacidad de respaldo para necesidades no estándar o de emergencia.",
    tc_v3h:"Protocolos institucionales definidos",tc_v3p:"Cada ruta sigue procedimientos formales, no arreglos ad-hoc.",
    tc_v4h:"Protección reputacional",tc_v4p:"Incidentes reducidos mediante control estructurado, no por suerte.",
    tc_cta:"Iniciar una Conversación →",
    serv_eyebrow:"Alcance del Servicio",serv_title:"Lo Que Ejecutamos",serv_sub:"Todos los servicios bajo protocolos definidos, cumplimiento regulatorio y control operativo. Sin arreglos improvisados.",
    s1_title:"Rutas Contractuales Asignadas",s1_p:"Rutas recurrentes bajo acuerdos contractuales. Predecibles, estructuradas y conformes.",
    s2_title:"Transporte para Necesidades Especiales",s2_p:"Personal capacitado en protocolos definidos para estudiantes con necesidades físicas, cognitivas y del desarrollo.",
    s3_title:"Transporte Alternativo",s3_p:"Capacidad de respaldo para instituciones con necesidades flexibles dentro de un marco regulado.",
    s4_title:"Manejo de Casos Sensibles",s4_p:"Protocolos dedicados para estudiantes de alto riesgo. Con discreción y responsabilidad institucional.",
    s5_title:"Monitoreo y Rastreo GPS",s5_p:"Rastreo vehicular en tiempo real con registro de eventos para supervisión de distritos y brokers.",
    s6_title:"Programa de Movilidad Escolar",s6_p:"Cobertura extendida que garantiza acceso a la educación sin importar la geografía, cumplimiento multiestado.",
    about_eyebrow:"Sobre Safe Drive",about_title:"Reducción de Riesgo Operativo, No Solo Transporte",
    about_sub:"Safe Drive Service es un operador institucional B2B con 4 años de operación estructurada multiestado. El valor que entregamos no es el traslado físico — es la eliminación del caos operativo que distritos, brokers y escuelas no pueden absorber.",
    chk1_h:"Cumplimiento Antes que Velocidad",chk1_p:"El cumplimiento regulatorio no es negociable en ninguna jurisdicción donde operamos.",
    chk2_h:"Control Antes que Improvisación",chk2_p:"Cada ruta opera bajo protocolos definidos. Sin decisiones ad-hoc en rutas críticas.",
    chk3_h:"Expansión Controlada y Estratégica",chk3_p:"Crecemos dentro de nuestra capacidad operativa real. Sin compromisos más allá de nuestra capacidad de ejecución.",
    cov_eyebrow:"Alcance Nacional",cov_title:"Nuestros Estados Activos",cov_sub:"Safe Drive proporciona transporte estructurado en múltiples estados. Pasa el cursor sobre un estado activo para ver datos de operaciones.",
    how_eyebrow:"Proceso de Incorporación",how_title:"Cómo Incorporamos Socios",how_sub:"Un proceso estructurado y sin fricción, desde el primer contacto hasta la ejecución operativa completa.",
    step1_h:"Contacto Inicial",step1_p:"Conéctate por formulario o teléfono. Evaluamos tus requisitos operativos y alcance jurisdiccional.",
    step2_h:"Revisión de Ruta y Alcance",step2_p:"Revisamos volumen de rutas, geografía, perfiles de estudiantes y requisitos de cumplimiento por estado.",
    step3_h:"Contrato y Configuración de Protocolo",step3_p:"Acuerdos formales establecidos. Protocolos definidos por tipo de ruta. Asignaciones confirmadas.",
    step4_h:"Ejecución en Vivo",step4_p:"Servicio completo con monitoreo GPS, reportes en tiempo real y estándar de puntualidad del 95% desde el día uno.",
    hire_eyebrow:"Estamos Contratando",hire_title:"Maneja con Nosotros.<br>Marca la Diferencia.",
    hire_sub:"Safe Drive está en expansión y busca continuamente conductores calificados y monitores estudiantiles en todo Estados Unidos. Únete a una operación estructurada y profesional.",
    perk1_h:"Pago Competitivo",perk1_p:"Tarifas con bonificaciones por ruta e incentivos por desempeño.",
    perk2_h:"Horarios Flexibles",perk2_p:"Solo rutas en horario escolar — sin noches ni fines de semana.",
    perk3_h:"Oportunidades de Crecimiento",perk3_p:"Oportunidades de crecimiento profesional y laboral disponibles.",
    perk4_h:"Operación Estructurada",perk4_p:"Protocolos claros, rutas definidas y estándares institucionales profesionales.",
    req_title:"Requisitos Básicos",
    req1:"Licencia de conducir válida",req2:"Historial de manejo limpio — últimos 3 años",req3:"Verificación de antecedentes federal y estatal",req4:"Mínimo 21 años de edad",req5:"Certificados Laborales",req6:"Prueba de drogas aprobada",req7:"Habilidades básicas de comunicación en inglés",req8:"Certificado en RCP / Primeros Auxilios (o disposición para obtenerlo)",req9:"Actitud confiable, puntual y profesional",req10:"Experiencia previa con niños es un plus",
    pos2:"Conductores de Van",pos3:"Monitores Estudiantiles",
    cta_title:"¿Listo para Unirte a Nuestro Equipo?",cta_sub:"Completa nuestra solicitud rápida — menos de 3 minutos. Nos pondremos en contacto en 48 horas.",apply_btn:"Aplicar Ahora",
    team_eyebrow:"Nuestro Liderazgo",team_title:"El Equipo Detrás de Safe Drive",
    tm1_role:"Directora Ejecutiva",tm2_role:"Directora de Operaciones",tm3_role:"Reclutamiento y Marketing",tm4_role:"Soporte Digital",tm5_role:"Reclutamiento y Marketing",tm6_role:"Coordinador Financiero",
    contact_eyebrow:"Contáctanos",contact_title:"Inicia una Conversación",
    contact_sub:"Si representas un distrito escolar, un broker de transporte o una institución charter — nuestro equipo de operaciones responderá dentro de 24 horas hábiles.",
    cc1_h:"Teléfono",cc2_h:"Correo",cc3_h:"Ubicación",cc3_p:"Florida, EE.UU. · Operaciones Multiestado",cc4_h:"Empleos",cc4_p:"Aplica para conducir con nosotros →",
    form_title:"Envíanos un Mensaje",f_fname:"Nombre",f_lname:"Apellido",f_email:"Correo Electrónico",f_phone:"Teléfono",f_iam:"Represento a...",
    f_opt1:"Distrito Escolar",f_opt2:"Broker de Transporte",f_opt3:"Escuela Charter / Privada",f_opt4:"Otra Institución",f_opt5:"Conductor Potencial",
    f_msg:"Mensaje",f_submit:"Enviar Mensaje →",ph_fname:"María",ph_lname:"López",ph_msg:"Describe tus necesidades operativas...",
    ft_tagline:"Transporte estudiantil B2B estructurado para distritos escolares, brokers de transporte e instituciones charter — multiestado, cumplimiento primero.",
    ft_company:"Empresa",ft_mobility:"Movilidad Escolar",ft_privacy:"Política de Privacidad",ft_contact_h:"Contacto",ft_join:"Únete al Equipo",ft_send:"Enviar Mensaje",ft_rights:"© 2026 Safe Drive Services. Todos los derechos reservados.",ft_location:"Florida, EE.UU. · Operaciones B2B Multiestado",
    pp_page_title:"Política de Privacidad — Safe Drive Services",
    pp_back:"← Volver al Inicio",
    pp_eyebrow:"Legal y Privacidad",
    pp_title:"Política de Privacidad de Safe Drive Services",
    pp_meta_updated_label:"Última actualización",
    pp_meta_updated_val:"Noviembre de 2026",
    pp_meta_web_label:"Sitio web",
    pp_meta_hq_label:"Sede principal",
    pp_meta_hq_val:"Orlando, Florida, Estados Unidos.",
    pp_intro:"En <strong>Safe Drive Services (SDS)</strong> respetamos tu derecho a la privacidad. Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal que nos proporcionas al interactuar con nuestros sitios web, formularios en línea, canales de redes sociales o aplicaciones de mensajería (WhatsApp, SMS).",
    pp_s1_h:"1. Información que recopilamos",
    pp_s1_p:"Cuando completas un formulario de reclutamiento o nos contactas directamente, podemos recopilar:",
    pp_s1_li1:"<strong>Datos de identificación y contacto:</strong> Nombre completo, número de teléfono, dirección de correo electrónico, ciudad y estado o código postal.",
    pp_s1_li2:"<strong>Información de idoneidad laboral:</strong> Estado de licencia de conducir, historial de manejo (MVR), estatus legal de trabajo en EE. UU., certificaciones (como CPR/primeros auxilios) y resultados de verificaciones de antecedentes (Background Check y Drug Test).",
    pp_s1_li3:"<strong>Información del vehículo:</strong> Marca, modelo, año, estado de registro, seguro vehicular e inspección mecánica (cuando aplica el uso de vehículo propio).",
    pp_s2_h:"2. Uso de la información",
    pp_s2_p:"Utilizamos los datos recolectados únicamente para:",
    pp_s2_li1:"Evaluar y procesar solicitudes de conductores interesados en prestar servicios con SDS.",
    pp_s2_li2:"Verificar el cumplimiento de los estándares de seguridad exigidos por los distritos escolares y las leyes estatales.",
    pp_s2_li3:"Contactarte por llamada, correo electrónico, SMS o WhatsApp para avanzar en tu proceso de registro o informarte sobre rutas disponibles.",
    pp_s2_li4:"Coordinar la logística y asignación operativa de servicios de transporte escolar especializado.",
    pp_s3_h:"3. Divulgación y transferencia de datos a terceros",
    pp_s3_callout:"<strong>No vendemos, alquilamos ni comercializamos tu información personal a terceros.</strong>",
    pp_s3_p:"Tus datos solo pueden ser compartidos bajo las siguientes condiciones:",
    pp_s3_li1:"<strong>Proveedores de verificación:</strong> Empresas acreditadas encargadas de realizar reportes de antecedentes penales, pruebas de detección de sustancias y récord de manejo, siempre bajo estricta confidencialidad.",
    pp_s3_li2:"<strong>Cumplimiento legal y distritos escolares:</strong> Autoridades reguladoras o entidades contratantes cuando sea estrictamente requerido por ley o normativa escolar para la prestación del servicio.",
    pp_s4_h:"4. Seguridad de los datos",
    pp_s4_p:"Implementamos medidas administrativas, técnicas y organizativas para proteger tus datos personales contra accesos no autorizados, pérdida, alteración o divulgación indebida.",
    pp_s5_h:"5. Comunicaciones y consentimiento",
    pp_s5_p:"Al facilitarnos tus datos a través de formularios o mensajes directos, autorizas a Safe Drive Services a ponerse en contacto contigo respecto a oportunidades de servicio. Puedes revocar este consentimiento o solicitar darte de baja de nuestras comunicaciones en cualquier momento respondiendo \"STOP\" a un mensaje o solicitándolo por escrito.",
    pp_s6_h:"6. Tus derechos",
    pp_s6_p:"Tienes derecho a solicitar acceso, corrección o eliminación de tus datos personales archivados en nuestras bases de datos, salvo aquellos registros que debamos conservar por regulaciones legales o contractuales del sector transporte.",
    pp_s7_h:"7. Contacto",
    pp_s7_p:"Para dudas sobre esta política o el tratamiento de tus datos, puedes comunicarte con el equipo de Safe Drive Services a través de nuestro sitio web:"
  }
};

let lang = localStorage.getItem('sds-lang') || 'en';

function applyLang(l) {
  const t = T[l];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) {
      if (el.tagName === 'TITLE') document.title = t[k];
      else el.innerHTML = t[k];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.getAttribute('data-i18n-ph');
    if (t[k] !== undefined) el.setAttribute('placeholder', t[k]);
  });
  const langEN = document.getElementById('langEN');
  const langES = document.getElementById('langES');
  if (langEN) langEN.classList.toggle('active', l === 'en');
  if (langES) langES.classList.toggle('active', l === 'es');
  document.documentElement.lang = l;
}
applyLang(lang);
const langBtn = document.getElementById('langBtn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('sds-lang', lang);
    applyLang(lang);
  });
}

/* THEME */
const html = document.documentElement;
html.setAttribute('data-theme', localStorage.getItem('sds-theme') || 'light');
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const n = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', n);
    localStorage.setItem('sds-theme', n);
  });
}

/* TABS */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* VIDEO */
const vid = document.getElementById('heroBgVideo');
const vw = document.getElementById('heroVideoWrap');
if (vid && vw) {
  vid.addEventListener('error', () => { vw.style.display = 'none'; });
  let vl = false;
  vid.addEventListener('canplay', () => { vl = true; });
  setTimeout(() => { if (!vl) vw.style.display = 'none'; }, 6000);
}

/* NAV */
const nav = document.getElementById('mainNav');
if (nav) {
  let ly = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    y > 80 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    if (y > ly && y > 200) nav.classList.add('hidden'); else nav.classList.remove('hidden');
    ly = y;
  }, { passive: true });
}

/* HAMBURGER */
const hbg = document.getElementById('hbg');
const mn = document.getElementById('mobNav');
if (hbg && mn) {
  hbg.addEventListener('click', () => { hbg.classList.toggle('open'); mn.classList.toggle('open'); });
  mn.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { hbg.classList.remove('open'); mn.classList.remove('open'); }));
}

/* REVEAL */
const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.07, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.rv').forEach(el => obs.observe(el));



const stateData = {
  "Florida":    { manager: "Carlos Diaz",       routes: 45 },
  "Arizona":    { manager: "Sarah Miller",       routes: 350 },
  "California": { manager: "Edwin Lopez",        routes: 38 },
  "Texas":      { manager: "Elena Rodriguez",    routes: 56 },
  "Alaska":     { manager: "John Smith",         routes: 20 },
  "Colorado":   { manager: "David Connor",       routes: 19 }
};

const mapTooltip = document.getElementById('map-tooltip');
const statesGroup = document.getElementById('states');
const mapSvg = document.getElementById('us-map');

if (mapTooltip && statesGroup && mapSvg) {
  // Al cargar: mueve todos los estados inactivos al inicio del <g>
  // → se pintan primero = capa más baja
  document.querySelectorAll('.state:not(.active)').forEach(s => {
    statesGroup.insertBefore(s, statesGroup.firstChild);
  });

  let lastHovered = null;

  // Escuchar en el SVG padre evita el bug de mouseout al mover elementos en el DOM
  mapSvg.addEventListener('mousemove', (e) => {
    const target = e.target;

    if (target.classList.contains('state') && target.classList.contains('active')) {
      // Solo reordenar cuando el cursor llega a un estado diferente
      if (target !== lastHovered) {
        statesGroup.appendChild(target); // → pinta último = capa más alta
        lastHovered = target;
      }

      const stateName = target.getAttribute('data-name');
      const data = stateData[stateName];
      if (data) {
        document.getElementById('tt-state').textContent = stateName;
        document.getElementById('tt-routes').textContent = data.routes;
        document.getElementById('tt-manager').textContent = data.manager;
        mapTooltip.style.opacity = 1;
        mapTooltip.style.transform = `translate(${e.pageX + 15}px, ${e.pageY + 15}px)`;
      }
    } else {
      mapTooltip.style.opacity = 0;
    }
  });

  mapSvg.addEventListener('mouseleave', () => {
    mapTooltip.style.opacity = 0;
    lastHovered = null;
  });
}







