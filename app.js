/**
 * ==============================================================================
 * AL-MEOW PALACE - JAVASCRIPT CONTROLLER
 * Architecture: Vanilla ES6+, Lightweight Three.js 3D WebGL, i18n & Full RTL
 * Creator & Guardian: Mr. Gean
 * ==============================================================================
 */

'use strict';

/* ==============================================================================
   0. CONFIGURACIÓN CENTRALIZADA DE PAGOS & CONTACTO OFICIAL
   Mr. Gean & The Royal Felines — Al-Meow Palace
   ============================================================================== */
const PAYMENT_CONFIG = {
  // Titular & Contacto Oficial
  creatorName: "Mr. Gean",
  beneficiaryName: "Mr. Gean",
  officialEmail: "donacionparagatitos@gmail.com",

  // PayPal Internacional
  paypalEmail: "zqpswe@gmail.com",
  paypalUrl: "https://www.paypal.com/donate/?business=zqpswe@gmail.com&currency_code=USD",

  // Criptomonedas VIP (2 Monedas)
  usdtNetwork: "Tron (TRC20)",
  usdtAddress: "TPQxqrk4vTg7uvPciY3PLF3LaeCobEQvyf",
  usdtQrImg: "assets/qr-usdt.jpeg",

  btcNetwork: "Bitcoin (BTC)",
  btcAddress: "16knqtZoFVvfWaUUFMAmm13T6vsdrCDGdd",
  btcQrImg: "assets/qr-btc.jpeg",

  // Cuentas Bancarias Perú (BCP Soles)
  bcpAccountSoles1: "21504187354046",
  bcpCciSoles1: "00221510418735404625",
  bcpAccountSoles2: "21599723814020",
  bcpCciSoles2: "00221519972381402022"
};

/* ==============================================================================
   1. EDITABLE LEADERBOARD DATA (HIGH-STAKES MAGNATE SCALE)
   ============================================================================== */
const LEADERBOARD_DATA = [
  {
    id: 1,
    name: "Sheikh Hamdan Al-Maktoum",
    country: "Emiratos Árabes Unidos",
    countryCode: "AE",
    flag: "🇦🇪",
    amount: 50000,
    titleEs: "Sultán Fundador del Santuario",
    titleEn: "Founding Sultan of the Sanctuary",
    titleAr: "السلطان المؤسس للملاذ الملكي",
    date: "2026-11-18",
    vip: true
  },
  {
    id: 2,
    name: "Prince Abdullah Bin Nasser",
    country: "Arabia Saudita",
    countryCode: "SA",
    flag: "🇸🇦",
    amount: 25000,
    titleEs: "Emir de la Compasión Eterna",
    titleEn: "Emir of Eternal Compassion",
    titleAr: "أمير الرحمة الأبدية والبركة",
    date: "2026-11-17",
    vip: true
  },
  {
    id: 3,
    name: "Sultan Qaboos Al-Fahim",
    country: "Qatar",
    countryCode: "QA",
    flag: "🇶🇦",
    amount: 15000,
    titleEs: "Emir Protector de la Camada Real",
    titleEn: "Emir Protector of the Royal Litter",
    titleAr: "أمير حماية المواليد والعرش",
    date: "2026-11-19",
    vip: true
  },
  {
    id: 4,
    name: "Baron François de Montmirail",
    country: "Francia",
    countryCode: "FR",
    flag: "🇫🇷",
    amount: 10000,
    titleEs: "Noble Patrocinador de Honor",
    titleEn: "Noble Sponsor of Honor",
    titleAr: "الراعي النبيل للديوان الفخري",
    date: "2026-11-15",
    vip: false
  },
  {
    id: 5,
    name: "Lord Arthur Pemberton",
    country: "Reino Unido",
    countryCode: "GB",
    flag: "🇬🇧",
    amount: 5000,
    titleEs: "Gran Custodio de la Finca Santuario",
    titleEn: "Grand Custodian of the Farm Sanctuary",
    titleAr: "حارس أرض الملاذ الكبير",
    date: "2026-11-14",
    vip: false
  },
  {
    id: 6,
    name: "Hans-Dieter Richter",
    country: "Alemania",
    countryCode: "DE",
    flag: "🇩🇪",
    amount: 3500,
    titleEs: "Comendador del Festín Gourmet",
    titleEn: "Commander of the Gourmet Feast",
    titleAr: "قائد الولائم الملكية الفاخرة",
    date: "2026-11-12",
    vip: false
  },
  {
    id: 7,
    name: "Mecenas Anónimo de Dubái",
    country: "Emiratos Árabes Unidos",
    countryCode: "AE",
    flag: "🇦🇪",
    amount: 2500,
    titleEs: "Noble Benefactor Silencioso",
    titleEn: "Silent Noble Benefactor",
    titleAr: "المحسن النبيل الصامت",
    date: "2026-11-10",
    vip: false
  },
  {
    id: 8,
    name: "Contessa Sofia Rossi",
    country: "Italia",
    countryCode: "IT",
    flag: "🇮🇹",
    amount: 1000,
    titleEs: "Dama Protectora de Naranjosa",
    titleEn: "Protecting Lady of Naranjosa",
    titleAr: "سيدة رعاية الملكة نارانخوسا",
    date: "2026-11-08",
    vip: false
  }
];

/* ==============================================================================
   2. DONATION MILESTONES ($100 TO $1,000,000 USD)
   ============================================================================== */
const DONATION_TIERS = [100, 1000, 10000, 50000, 100000, 500000, 1000000];

/* ==============================================================================
   3. I18N MULTILINGUAL DICTIONARY (SPANISH, ENGLISH, ARABIC + RTL)
   ============================================================================== */
const I18N = {
  es: {
    nav: {
      ranking: "El Trono",
      calculator: "Calculadora de Ego",
      cats: "Familia Real (9)",
      story: "El Sueño de la Finca",
      vault: "Bóveda de Tributos",
      faq: "Preguntas",
      claimBtn: "Tributo Real"
    },
    hero: {
      badge: "EL SANTUARIO MÁS EXCLUSIVO DE ORIENTE MEDIO",
      titleGold: "AL-MEOW PALACE",
      titleSub: "El Trono de Oro & El Santuario de los 9 Felinos Reales",
      description: "Magnates y jeques del mundo compiten por el honor supremo de financiar la vida de 9 gatos rescatados y hacer realidad la Finca Santuario de Mr. Gean, donde vivirán en libertad absoluta para siempre.",
      ctaThrone: "Competir por el Trono",
      ctaRanking: "Ver el Ranking Real",
      statTotal: "Tributos Recaudados",
      statCats: "9 Vidas Felinas",
      statCatsSub: "Familia Real Protegida",
      statHuman: "Mr. Gean",
      statHumanSub: "Guardián & Protector",
      scrollDown: "Bajar al Trono"
    },
    quotes: {
      luxury: "«El lujo se olvida, un legado de grandeza es eterno.»",
      vacantThrone: "«El trono está vacío: ¿quién tendrá el honor de fundar el Santuario?»",
      noLimits: "«Demuestra que tu generosidad no conoce límites.»"
    },
    leaderboard: {
      tag: "✦ CORTE DE HONOR & LEGADO ✦",
      title: "El Trono de los Jeques",
      subtitle: "El podio sagrado donde los nombres de los mayores benefactores quedan inmortalizados con títulos nobiliarios emitidos por la Corte Real.",
      egoBanner: "El trono supremo aguarda al verdadero mecenas: ¿quién inscribirá su nombre en la historia de la Finca Santuario?",
      podium1Title: "Sultán Fundador",
      podium2Title: "Emir de Plata",
      podium3Title: "Visir de Bronce",
      supremeRibbon: "👑 LÍDER DEL TRONO",
      tableTitle: "Corte de Nobles & Mecenas de la Finca",
      liveUpdate: "Actualizado en vivo",
      disputeBtn: "Reclamar Puesto",
      colRank: "Puesto",
      colSheikh: "Noble / Jeque",
      colCountry: "Nación",
      colAmount: "Tributo",
      colHonorific: "Título Otorgado"
    },
    calculator: {
      tag: "💎 SIMULADOR DE IMPACTO & ESTATUS MILLONARIO",
      title: "Calculadora de Generosidad",
      subtitle: "Desliza entre $100 y $1,000,000 USD para desbloquear tu rango nobiliario y calcular el impacto en los 9 felinos y la adquisición de la Finca Santuario.",
      sliderAria: "Monto de donación en USD de 100 a 1,000,000",
      statusLabel: "Rango Nobiliario Desbloqueado:",
      metricFood: "Banquete Real Garantizado",
      metricSanctuary: "Impacto en Finca Santuario",
      metricHealth: "Salud & Camada Real",
      metricLegacy: "Inmortalidad & Legado",
      tributeBtn: "Ofrendar este Tributo Real",
      ladderTitle: "✦ ESCALA DE ESTATUS & DERECHOS DE LEGADO ✦",
      ladderSubtitle: "Cada nivel otorga privilegios dinásticos únicos y derechos históricos sobre el futuro Santuario.",
      tiers: {
        t100: {
          name: "Benefactor de la Corte",
          badge: "Noble Aliado",
          desc: "Alimentación balanceada, vacunas y cuidados esenciales para los 9 felinos durante semanas. Tu nombre ingresa en el libro de benefactores.",
          food: "15 días de banquete para los 9",
          sanctuary: "Aporte al fondo semilla",
          health: "Vitaminas y chequeos básicos",
          legacy: "Registro en Archivo Real"
        },
        t1000: {
          name: "Noble Patrocinador",
          badge: "Patrocinador Real",
          desc: "Asegura alimentación premium, arena y cuidados veterinarios para los 9 gatitos durante meses completos.",
          food: "4 meses de salmón y paté para los 9",
          sanctuary: "20 m² de la futura finca asegurados",
          health: "Desparasitación y vacunas al día",
          legacy: "Diploma Nobiliario Sellado"
        },
        t10000: {
          name: "Emir de la Compasión",
          badge: "Emir Protector",
          desc: "Financia un año completo de vida digna, atención médica para la camada y graba tu nombre en el Muro de Honor digital y físico.",
          food: "1 año entero de banquete real para los 9",
          sanctuary: "250 m² de pradera campestre",
          health: "Cobertura médica integral y pediatría",
          legacy: "Nombre en el Muro de Honor Físico"
        },
        t50000: {
          name: "Gran Visir del Territorio",
          badge: "Gran Visir",
          desc: "Financia la búsqueda, agrimensura y primeros cimientos de la futura Finca Santuario. Insignia dorada de cofundador.",
          food: "Reserva alimentaria multi-anual",
          sanctuary: "1,500 m² de terreno fértil para el santuario",
          health: "Botiquín y esterilizaciones seguras",
          legacy: "Mención de Honor como Gran Mecenas"
        },
        t100000: {
          name: "Sultán Fundador",
          badge: "Sultán Fundador",
          desc: "Da el primer gran paso para adquirir el terreno de la futura Finca Santuario. Te otorga el derecho a bautizar el Pabellón Principal con tu nombre.",
          food: "Abastecimiento de por vida para los 9",
          sanctuary: "Adquisición del terreno principal",
          health: "Sala médica veterinaria equipada",
          legacy: "Pabellón Principal con tu Nombre Oficial"
        },
        t500000: {
          name: "Príncipe Protector de la Tierra",
          badge: "Príncipe Protector",
          desc: "Financia la construcción de cabañas bioclimáticas, arboledas protegidas y áreas de juego seguras para los 9 gatitos y cientos de futuros rescatados.",
          food: "Despensa real inagotable",
          sanctuary: "Construcción completa de pabellones",
          health: "Clínica de rescate permanente",
          legacy: "Busto o Placa de Bronce Conmemorativa"
        },
        t1000000: {
          name: "Gran Jeque Inmortal (Leyenda del Santuario)",
          badge: "👑 LEYENDA ETERNA",
          desc: "Hace realidad la Finca completa donde estos 9 gatitos y cientos de futuros gatos rescatados vivirán en libertad absoluta. El Santuario llevará oficialmente tu nombre para la eternidad.",
          food: "Fondo perpetuo de alimentación libre",
          sanctuary: "La Finca Santuario Totalmente Comprada",
          health: "Hospital Félido Integral Gratuito",
          legacy: "EL SANTUARIO LLEVARÁ TU NOMBRE POR SIEMPRE"
        }
      }
    },
    story: {
      tag: "✦ EL SUEÑO DE LA FINCA SANTUARIO ✦",
      servantTitle: "Mr. Gean – Guardián Real",
      title: "Un Mensaje desde el Corazón: El Sueño de la Finca",
      p1: "«Salam Aleikum, noble benefactor y amigo de los animales. En la milenaria cultura de Oriente Medio y en el corazón de toda persona de bien, los gatos siempre han ocupado un lugar sagrado de reverencia y ternura por su pureza, independencia y vulnerabilidad. Detrás de la estética dorada de Dubái y los títulos honoríficos de esta corte, late una misión honesta, profunda y urgente: <strong>estos 9 gatitos son mi familia y mi vida entera</strong>.»",
      p2: "«Gatito es nuestra sabia matriarca serena; Naranjosa es la reina madre valiente que acaba de traer al mundo a 5 angelitos recién nacidos que dependen ciegamente de nosotros; y los pequeños Tomy y Manchas llenan el hogar de curiosidad y alegría. Cuidar hoy de 9 vidas felinas con vacunas, leche especializada, controles veterinarios constantes y nutrición digna supera con creces cualquier presupuesto individual. Cada aporte que ofrendas asegura su bienestar inmediato y me permite seguir dedicando mi vida en cuerpo y alma a protegerlos.»",
      p3: "«Pero nuestro horizonte no se detiene aquí. <strong>El gran sueño es construir un fondo sólido para comprar una Finca Santuario propia</strong>: una tierra fértil, amplia y segura donde estos 9 miembros reales y cientos de futuros gatos rescatados de las calles puedan correr bajo el sol, trepar árboles y envejecer en absoluta libertad y dignidad, lejos del tráfico, los venenos y el desamparo.»",
      quote: "«No estás haciendo una simple donación; estás construyendo un paraíso terrenal de compasión que llevará tu huella y honrará tu linaje para la eternidad. Gracias por ser el protector que sus vidas necesitan.»",
      signatureRole: "Fundador de Al-Meow Palace & Padre Protector de los 9 Felinos"
    },
    cats: {
      tag: "✦ LA FAMILIA REAL FELINA (9 VIDAS) ✦",
      title: "La Dinastía Felina de Mr. Gean",
      subtitle: "Conoce a los 9 miembros de la corte real: 4 almas valientes rescatadas y la camada real de 5 recién nacidos que representan el futuro de la Finca Santuario.",
      hungerLabel: "Estado de Necesidad:",
      snackBtn: "Ofrecer Banquete Real",
      snackCamadaBtn: "Ofrecer Cuidados a la Camada",
      cat1Name: "Gatito",
      cat1Role: "La Matriarca Serena (Hembra Adulta)",
      cat1Bio: "El pilar de sabiduría y paz del palacio. Rescatada de tiempos difíciles, hoy vigila a todos con mirada sosegada y exige mimos con absoluta distinción.",
      cat2Name: "Naranjosa",
      cat2Role: "La Reina Madre Valiente (Hembra Adulta)",
      cat2Bio: "Heroína indiscutible. Acaba de dar a luz a la camada real de 5 bebés; su entrega maternal conmueve a la corte entera. Necesita nutrición de máxima energía.",
      cat3Name: "Tomy",
      cat3Role: "El Príncipe Explorador (Macho Pequeño)",
      cat3Bio: "Un rayo de energía inagotable. Investiga cada cojín y estante del palacio, practicando emboscadas amistosas para convertirse en el gran explorador del santuario.",
      cat4Name: "Manchas",
      cat4Role: "El Pequeño Guardián (Macho Pequeño)",
      cat4Bio: "Distinguido por sus hermosas motas oscuras. Noble, fiel y protector; duerme siempre cerca de su madre y de la camada para alertar de cualquier peligro.",
      cat5Name: "La Camada Real: 5 Recién Nacidos",
      cat5Role: "El Futuro del Santuario (5 Bebés Lactantes)",
      cat5Bio: "Los 5 tesoros recién nacidos de Naranjosa. Pequeñas almas inocentes que aún no abren los ojos pero que simbolizan la razón fundamental para construir la Finca Santuario.",
      camadaBadge: "👑 5 RECIÉN NACIDOS ✦ EL FUTURO DEL SANTUARIO"
    },
    vault: {
      tag: "✦ CANALES INTERNACIONALES DE OFRENDA ✦",
      title: "La Bóveda de Tributos",
      subtitle: "Diseñada para la realeza de Dubái, Qatar, Arabia Saudita y mecenas del mundo entero. Transfiere tus fondos con total seguridad y confidencialidad.",
      paypalTitle: "PayPal Internacional",
      paypalSub: "Donación inmediata con tarjeta de crédito/débito global o balance",
      paypalDesc: "El método más rápido y directo para benefactores internacionales. Conviértete en mecenas en un solo clic con protección al comprador.",
      paypalEmailLabel: "Correo Oficial de PayPal:",
      paypalBtn: "Ofrendar vía PayPal",
      cryptoTitle: "Criptomonedas / Web3 VIP",
      cryptoSub: "USDT (TRC20) • Bitcoin (BTC)",
      cryptoBadge: "Instantáneo • Sin Límites",
      cryptoDesc: "Ideal para grandes ofrendas sin límites bancarios ni restricciones geográficas. Transferencias directas de $10,000 a $1,000,000 USD con confirmación inmediata.",
      cryptoNetworkLabel: "Red Soportada:",
      cryptoAddressLabel: "Dirección de Billetera USDT:",
      btcAddressLabel: "Dirección de Billetera Bitcoin (BTC):",
      usdtWarning: "⚠️ Asegúrate de enviar únicamente por la red Tron (TRC20).",
      btcWarning: "⚠️ Envía únicamente Bitcoin nativo (BTC) a esta dirección.",
      qrScanCrypto: "Escanear para depositar USDT",
      qrScanBtc: "Escanear para depositar Bitcoin",
      copiedCryptoToast: "¡Dirección copiada al portapapeles, Habibi! 💎⚡",
      copy: "Copiar",
      copiedToast: "¡Copiado al portapapeles, Habibi! 👑",
      peruAccordionTitle: "🇵🇪 ¿Apoyas desde Perú? (Cuentas BCP Soles)",
      peruAccordionDesc: "Si deseas enviar tu tributo en moneda local desde Perú, realiza tu transferencia a cualquiera de nuestras dos cuentas BCP en Soles:",
      bcpAccount1Title: "BCP Cuenta de Ahorros Soles 1",
      bcpAccount2Title: "BCP Cuenta de Ahorros Soles 2",
      bcpSubtitle: "Banco de Crédito del Perú • Soles",
      beneficiaryLabel: "Nombre del Titular:",
      bcpSolesLabel: "Número de Cuenta Soles:",
      bcpSolesCciLabel: "Código Interbancario (CCI):",
      claimBadge: "👑 AUDIENCIA CON MR. GEAN & LA CORTE",
      claimTitle: "¿Ya enviaste tu ofrenda real?",
      claimSubtitle: "Reclama tu posición en el Trono de los Jeques y el bautizo de tu espacio en la Finca Santuario. Envía tu comprobante con tu apodo nobiliario y bandera.",
      claimThroneBtn: "Ya doné, reclamar mi lugar en el Trono",
      emailSubject: "Reclamo de Trono - Al-Meow Palace | Mr. Gean",
      emailBody: "¡Salam Aleikum Mr. Gean!\n\nAcabo de realizar un tributo real para el cuidado de los 9 gatitos y el fondo de la Finca Santuario de Al-Meow Palace.\n\nAdjunto en este correo mi comprobante de pago con los siguientes datos para mi lugar en el Trono:\n- Nombre / Título Nobiliario (Jeque, Sultán o Emir): \n- País o Bandera: \n- Monto donado y método utilizado: \n\n¡Gloria a los 9 gatos de la realeza!"
    },
    faq: {
      tag: "✦ TRANSPARENCIA DE LA CORTE ✦",
      title: "Preguntas Frecuentes",
      subtitle: "Claridad total y transparencia para nuestros nobles benefactores.",
      q1: "¿A dónde se destina el 100% de los fondos donados?",
      a1: "Cada dólar tiene dos destinos prioritarios: primero, cubrir la alimentación súper premium, atención médica veterinaria, medicinas y cuidados de los 9 gatitos (incluyendo cuidados neonatales para los 5 recién nacidos) y la subsistencia básica de Mr. Gean para dedicarse por entero a su custodia. Segundo, el excedente se acumula en el fondo exclusivo para la adquisición y adecuación de la Finca Santuario campestre.",
      q2: "¿Qué es la Finca Santuario y qué derechos otorga donar a ella?",
      a2: "Es el proyecto de vida de Mr. Gean: una propiedad rural amplia y protegida donde estos 9 felinos y cientos de futuros gatos rescatados de la calle vivirán en libertad absoluta, sin jaulas y con atención médica de por vida. Donaciones a partir de $10,000 USD garantizan tu nombre en el Muro de Honor físico, y donaciones de $100,000 o $1,000,000 USD otorgan el derecho a bautizar el Pabellón Principal o el Santuario entero con tu nombre.",
      q3: "¿Cómo aparezco en el Leaderboard de los Jeques?",
      a3: "Una vez realizada tu ofrenda mediante Criptomonedas, PayPal o BCP Soles, haz clic en el botón 'Ya doné, reclamar mi lugar en el Trono' para enviar tu comprobante por correo a Mr. Gean. Podrás indicar tu nombre o alias nobiliario y la bandera de tu nación para actualizar el podio.",
      q4: "¿Los 9 gatos son reales?",
      a4: "Absolutamente reales, rescatados con amor y dedicación. Gatito, Naranjosa, Tomy, Manchas y los 5 recién nacidos conviven bajo la custodia personal de Mr. Gean. La temática satírica y de opulencia de Dubái es nuestro homenaje lúdico y digno para inspirar la generosidad de almas nobles sin recurrir a la lástima."
    },
    footer: {
      tagline: "El santuario donde 9 almas felinas son adoradas y los grandes mecenas forjan un legado eterno de compasión.",
      navTitle: "Navegación Real",
      contactTitle: "Contacto Oficial",
      location: "Lima, Perú (Sede Central del Santuario)",
      audiences: "Audiencias con Mr. Gean & Corte Real previa cita",
      disclaimerTitle: "📜 Decreto Real de Transparencia:",
      disclaimerText: "Al-Meow Palace es una iniciativa independiente creada por Mr. Gean con el fin primordial de salvar, nutrir y dar una vida digna a 9 gatos rescatados y consolidar el fondo para la Finca Santuario. Ningún felino fue obligado a lucir coronas de oro macizo durante la creación de este portal.",
      copyText: "Todos los derechos ronroneados y reservados en los siete emiratos.",
      crafted: "Forjado con honor por Mr. Gean con HTML5, CSS3 moderno, Vanilla JS & Three.js"
    }
  },

  en: {
    nav: {
      ranking: "The Throne",
      calculator: "Ego Calculator",
      cats: "Royal Family (9)",
      story: "The Sanctuary Dream",
      vault: "Tribute Vault",
      faq: "FAQ",
      claimBtn: "Royal Tribute"
    },
    hero: {
      badge: "THE MOST EXCLUSIVE SANCTUARY IN THE MIDDLE EAST",
      titleGold: "AL-MEOW PALACE",
      titleSub: "The Golden Throne & The 9 Royal Felines Sanctuary",
      description: "World magnates and sheikhs compete for the supreme honor of funding 9 rescued cats and making Mr. Gean's Farm Sanctuary a reality, where felines will roam in eternal freedom.",
      ctaThrone: "Compete for the Throne",
      ctaRanking: "View Royal Leaderboard",
      statTotal: "Tributes Collected",
      statCats: "9 Feline Souls",
      statCatsSub: "Royal Family Protected",
      statHuman: "Mr. Gean",
      statHumanSub: "Guardian & Protector",
      scrollDown: "Descend to Throne"
    },
    quotes: {
      luxury: "«Luxury is forgotten, a legacy of greatness is eternal.»",
      vacantThrone: "«The throne is vacant: who will have the honor of founding the Sanctuary?»",
      noLimits: "«Prove that your generosity knows no bounds.»"
    },
    leaderboard: {
      tag: "✦ COURT OF HONOR & LEGACY ✦",
      title: "The Throne of the Sheikhs",
      subtitle: "The sacred podium where the most generous benefactors are immortalized with noble titles decreed by the Royal Court.",
      egoBanner: "The supreme throne awaits the true patron: who will engrave their name in the history of the Farm Sanctuary?",
      podium1Title: "Founding Sultan",
      podium2Title: "Silver Emir",
      podium3Title: "Bronze Vizier",
      supremeRibbon: "👑 THRONE LEADER",
      tableTitle: "Court of Nobles & Sanctuary Patrons",
      liveUpdate: "Updated Live",
      disputeBtn: "Claim a Seat",
      colRank: "Rank",
      colSheikh: "Noble / Sheikh",
      colCountry: "Nation",
      colAmount: "Tribute",
      colHonorific: "Honorary Title"
    },
    calculator: {
      tag: "💎 IMPACT SIMULATOR & MILLIONAIRE STATUS",
      title: "Generosity Calculator",
      subtitle: "Slide between $100 and $1,000,000 USD to unlock your nobility rank and calculate the impact on the 9 felines and the Sanctuary Farm acquisition.",
      sliderAria: "Donation amount in USD from 100 to 1,000,000",
      statusLabel: "Unlocked Nobility Rank:",
      metricFood: "Guaranteed Royal Feast",
      metricSanctuary: "Sanctuary Farm Impact",
      metricHealth: "Health & Royal Litter",
      metricLegacy: "Immortality & Legacy",
      tributeBtn: "Bestow This Royal Tribute",
      ladderTitle: "✦ STATUS LADDER & LEGACY RIGHTS ✦",
      ladderSubtitle: "Each level confers unique dynastic privileges and historic naming rights over the future Sanctuary.",
      tiers: {
        t100: {
          name: "Court Benefactor",
          badge: "Noble Ally",
          desc: "Balanced nutrition, vaccines, and essential care for all 9 felines for weeks. Your name enters the Royal Book of Benefactors.",
          food: "15 days of feast for all 9 cats",
          sanctuary: "Contribution to seed land fund",
          health: "Vitamins and checkups",
          legacy: "Official Royal Register"
        },
        t1000: {
          name: "Noble Sponsor",
          badge: "Royal Sponsor",
          desc: "Secures premium nutrition, clumping litter, and veterinary medical care for all 9 cats for entire months.",
          food: "4 months of salmon & gourmet paté",
          sanctuary: "20 m² of countryside land secured",
          health: "Full deworming & updated vaccines",
          legacy: "Sealed Nobility Diploma"
        },
        t1000: {
          name: "Emir of Compassion",
          badge: "Protecting Emir",
          desc: "Funds a full year of dignified life and medical care for the litter, permanently carving your name onto the digital and physical Wall of Honor.",
          food: "1 full year of royal feast for all 9",
          sanctuary: "250 m² of protected meadow",
          health: "Comprehensive healthcare & neonatal care",
          legacy: "Name on Physical Wall of Honor"
        },
        t50000: {
          name: "Grand Vizier of the Territory",
          badge: "Grand Vizier",
          desc: "Funds the land survey, search, and foundational blueprints for the Farm Sanctuary. Gold Co-Founder Badge.",
          food: "Multi-year food stockpile",
          sanctuary: "1,500 m² of fertile sanctuary land",
          health: "First-aid medical station & sterilization",
          legacy: "Historic Co-Founder Distinction"
        },
        t100000: {
          name: "Founding Sultan",
          badge: "Founding Sultan",
          desc: "Takes the decisive leap to acquire the land for the Farm Sanctuary. Grants you the perpetual right to name the Main Pavilion after yourself.",
          food: "Lifetime supply for the 9 cats",
          sanctuary: "Acquisition of prime sanctuary estate",
          health: "Fully equipped veterinary ward",
          legacy: "Main Pavilion Named in Your Honor"
        },
        t500000: {
          name: "Prince Protector of the Land",
          badge: "Prince Protector",
          desc: "Funds the construction of bioclimatic cat pavilions, enclosed gardens, and play areas for the 9 cats and hundreds of future rescues.",
          food: "Limitless royal reserves",
          sanctuary: "Full architectural sanctuary build",
          health: "Permanent medical clinic",
          legacy: "Bronze Commemorative Statue / Plaque"
        },
        t1000000: {
          name: "Immortal Grand Sheikh (Sanctuary Legend)",
          badge: "👑 ETERNAL LEGEND",
          desc: "Brings the entire Farm Sanctuary into reality where these 9 cats and hundreds of rescued felines will live in absolute freedom. The Sanctuary will officially bear your name for eternity.",
          food: "Perpetual free feeding endowment",
          sanctuary: "Complete Sanctuary Farm Fully Acquired",
          health: "Free comprehensive feline hospital",
          legacy: "THE SANCTUARY BEARS YOUR NAME FOREVER"
        }
      }
    },
    story: {
      tag: "✦ THE SANCTUARY FARM DREAM ✦",
      servantTitle: "Mr. Gean – Royal Guardian",
      title: "A Message from the Heart: The Farm Sanctuary Dream",
      p1: "«Salam Alaykum, noble benefactor and lover of living souls. In the venerable Middle Eastern traditions and in the heart of every compassionate human, cats have always commanded profound respect for their purity, gentle grace, and innocence. Behind the golden Dubai skyline and the playful royal titles of this court lies a deeply honest and urgent calling: <strong>these 9 cats are my family and my entire universe</strong>.»",
      p2: "«Gatito is our wise and tranquil matriarch; Naranjosa is our courageous queen mother who just gave birth to 5 fragile newborn angels entirely dependent on us; and young Tomy and Manchas illuminate our days with innocent wonder. Caring today for 9 feline lives with clinical checkups, neonatal milk, vaccines, and premium food daily is a immense challenge that exceeds any individual means. Every tribute ensures their immediate survival and allows me to dedicate my life to guarding them.»",
      p3: "«Yet our dream reaches far greater horizons: <strong>establishing a permanent fund to purchase our own Farm Sanctuary</strong>—a vast, sunny countryside estate where these 9 royal cats and hundreds of future street rescues can roam freely among trees and green grass, completely safe from traffic, poisons, and abandonment.»",
      quote: "«You are not merely offering a donation; you are forging an everlasting sanctuary of compassion that will carry your legacy for generations to come. Thank you for being their royal protector.»",
      signatureRole: "Founder of Al-Meow Palace & Guardian Father of the 9 Felines"
    },
    cats: {
      tag: "✦ THE ROYAL FELINE FAMILY (9 LIVES) ✦",
      title: "Mr. Gean's Royal Feline Dynasty",
      subtitle: "Meet the 9 members of the royal court: 4 brave rescued souls and the royal litter of 5 newborns representing the future of the Farm Sanctuary.",
      hungerLabel: "Need Level:",
      snackBtn: "Serve Royal Banquet",
      snackCamadaBtn: "Nurture the Newborn Litter",
      cat1Name: "Gatito",
      cat1Role: "The Serene Matriarch (Adult Female)",
      cat1Bio: "The cornerstone of calm wisdom in the palace. Rescued from harsh streets, she observes all with gentle dignity and commands affection with graceful poise.",
      cat2Name: "Naranjosa",
      cat2Role: "The Brave Queen Mother (Adult Female)",
      cat2Bio: "Undisputed heroine. Having just brought 5 newborn angels into the world, her devotion moves the entire court. She requires high-energy royal nutrition.",
      cat3Name: "Tomy",
      cat3Role: "The Explorer Prince (Young Male)",
      cat3Bio: "A vibrant streak of curiosity. Investigates every shelf and velvet cushion, training playful pounces to become the sanctuary's chief wilderness explorer.",
      cat4Name: "Manchas",
      cat4Role: "The Little Guardian (Young Male)",
      cat4Bio: "Distinguished by his handsome spotted coat. Loyal and fiercely caring, he sleeps beside his mother and the newborns to guard against any invisible threats.",
      cat5Name: "The Royal Litter: 5 Newborns",
      cat5Role: "The Future of the Sanctuary (5 Nursing Babies)",
      cat5Bio: "Naranjosa's 5 precious newborn kittens. Innocent little souls that haven't even opened their eyes yet, representing the very reason we are building the Farm Sanctuary.",
      camadaBadge: "👑 5 NEWBORNS ✦ THE SANCTUARY'S FUTURE"
    },
    vault: {
      tag: "✦ OFFICIAL INTERNATIONAL TRIBUTE CHANNELS ✦",
      title: "The Tribute Vault",
      subtitle: "Designed for patrons from Dubai, Qatar, Saudi Arabia, and across the globe. Transfer your tribute with total security and royal distinction.",
      paypalTitle: "International PayPal",
      paypalSub: "Instant donation with global credit/debit card or balance",
      paypalDesc: "The quickest, most trusted channel for international patrons. Become a royal benefactor in seconds with comprehensive buyer protection.",
      paypalEmailLabel: "Official PayPal Email:",
      paypalBtn: "Send Tribute via PayPal",
      cryptoTitle: "Cryptocurrency / Web3 VIP",
      cryptoSub: "USDT (TRC20) • Bitcoin (BTC)",
      cryptoBadge: "Instant • Limitless",
      cryptoDesc: "Ideal for major endowments without banking limits or borders. Direct transfers from $10,000 to $1,000,000 USD with instant on-chain confirmation.",
      cryptoNetworkLabel: "Supported Network:",
      cryptoAddressLabel: "USDT Wallet Address:",
      btcAddressLabel: "Bitcoin (BTC) Wallet Address:",
      usdtWarning: "⚠️ Please ensure you send only via the Tron (TRC20) network.",
      btcWarning: "⚠️ Send native Bitcoin (BTC) only to this address.",
      qrScanCrypto: "Scan to deposit USDT",
      qrScanBtc: "Scan to deposit Bitcoin",
      copiedCryptoToast: "Address copied to clipboard, Habibi! 💎⚡",
      copy: "Copy",
      copiedToast: "Copied to clipboard, Habibi! 👑",
      peruAccordionTitle: "🇵🇪 Supporting from Peru? (BCP Soles Accounts)",
      peruAccordionDesc: "If you wish to send your support locally within Peru, you can transfer to either of our two BCP Soles accounts:",
      bcpAccount1Title: "BCP Savings Account Soles 1",
      bcpAccount2Title: "BCP Savings Account Soles 2",
      bcpSubtitle: "Banco de Crédito del Perú • Soles (PEN)",
      beneficiaryLabel: "Account Beneficiary Name:",
      bcpSolesLabel: "Soles Account Number:",
      bcpSolesCciLabel: "Interbank CCI Code (Soles):",
      claimBadge: "👑 AUDIENCE WITH MR. GEAN & THE COURT",
      claimTitle: "Already sent your royal tribute?",
      claimSubtitle: "Claim your seat on the Throne of Sheikhs and secure your naming rights on the Farm Sanctuary. Send your receipt with your preferred title and country flag.",
      claimThroneBtn: "I Have Donated, Claim My Seat on the Throne",
      emailSubject: "Throne Claim - Al-Meow Palace | Mr. Gean",
      emailBody: "Salam Alaykum Mr. Gean!\n\nI have just sent a royal tribute to support the 9 felines and fund the eternal Sanctuary Ranch of Al-Meow Palace.\n\nAttached to this email is my donation receipt, along with my details for my seat on the Throne:\n- Name / Noble Title (Sheikh, Sultan, or Emir): \n- Country / Flag: \n- Amount donated & Payment method: \n\nGlory to the 9 royal felines!"
    },
    faq: {
      tag: "✦ ROYAL TRANSPARENCY ✦",
      title: "Frequently Asked Questions",
      subtitle: "Absolute clarity and transparency for our distinguished patrons.",
      q1: "Where does 100% of the donated money go?",
      a1: "Every dollar serves two vital goals: first, sustaining super premium food, veterinary care, neonatal formulas, and medications for the 9 cats, alongside basic sustenance for Mr. Gean to care for them full-time. Second, all surplus funds accumulate in the dedicated Sanctuary Farm acquisition and construction fund.",
      q2: "What is the Farm Sanctuary and what rights does donating confer?",
      a2: "It is Mr. Gean's lifelong vision: an expansive countryside sanctuary where these 9 felines and hundreds of rescued street cats will live in safety and freedom forever. Tributes of $10,000 USD engrave your name on the physical Wall of Honor, and donations of $100,000 or $1,000,000 USD grant you the perpetual right to name the Main Pavilion or the entire Sanctuary after yourself.",
      q3: "How do I appear on the Sheikhs' Leaderboard?",
      a3: "Once your tribute is made via Cryptocurrency, PayPal, or BCP Soles, click 'I Have Donated, Claim My Seat on the Throne' to email your receipt to Mr. Gean. Provide your chosen noble moniker and country flag to update the podium.",
      q4: "Are the 9 cats real?",
      a4: "100% real, lovingly rescued living beings. Gatito, Naranjosa, Tomy, Manchas, and the 5 newborns live under the daily personal care of Mr. Gean. The Dubai luxury aesthetic is our dignified and cheerful celebration to inspire true generosity without pity."
    },
    footer: {
      tagline: "The sanctuary where 9 royal feline souls are cherished and great patrons forge an eternal legacy of compassion.",
      navTitle: "Royal Navigation",
      contactTitle: "Official Contact",
      location: "Lima, Peru (Sanctuary Headquarters)",
      audiences: "Audiences with Mr. Gean & Royal Court by appointment",
      disclaimerTitle: "📜 Royal Transparency Decree:",
      disclaimerText: "Al-Meow Palace is an independent initiative founded by Mr. Gean exclusively to nourish, protect, and provide lifelong care to 9 rescued cats, and build the Farm Sanctuary. No cats were forced to wear actual solid gold crowns during site creation.",
      copyText: "All rights purred and reserved across the seven emirates.",
      crafted: "Forged with honor by Mr. Gean using HTML5, modern CSS3, Vanilla JS & Three.js"
    }
  },

  ar: {
    nav: {
      ranking: "العرش الملكي",
      calculator: "حاسبة العظمة والإرث",
      cats: "العائلة الملكية (٩ قطط)",
      story: "حلم المزرعة والملاذ",
      vault: "خزينة التبرعات",
      faq: "الأسئلة الشائعة",
      claimBtn: "الجزية الملكية"
    },
    hero: {
      badge: "الملاذ الأكثر فخامة وحصرية في الشرق الأوسط",
      titleGold: "قصر المياو الملكي",
      titleSub: "العرش الذهبي وملاذ الأرواح السنورية التسعة",
      description: "يتنافس أثرياء وشيوخ العالم على الشرف الأسمى لرعاية 9 قطط ملكية تم إنقاذها ودعم مستر جيان لتأسيس مزرعة الملاذ الدائم... حيث تعيش القطط بحرية وسلام أبدي.",
      ctaThrone: "التنافس على العرش",
      ctaRanking: "عرض قائمة الشيوخ",
      statTotal: "إجمالي التبرعات",
      statCats: "٩ أرواح سنورية",
      statCatsSub: "عائلة ملكية محمية",
      statHuman: "مستر جيان",
      statHumanSub: "الخادم والحامي الوفي",
      scrollDown: "النزول إلى العرش"
    },
    quotes: {
      luxury: "«الفخامة تزول، وإرث العظمة يخلد للأبد.»",
      vacantThrone: "«العرش شاغر: من سينال شرف تأسيس الملاذ؟»",
      noLimits: "«أثبت أن كرمك لا يعرف حدوداً.»"
    },
    leaderboard: {
      tag: "✦ ديوان الشرف والإرث الخالد ✦",
      title: "عرش الشيوخ العظام",
      subtitle: "المنصة الشريفة حيث تُخلّد أسماء كبار المحسنين بألقاب نبيلة يمنحها الديوان الملكي لقصر المياو.",
      egoBanner: "العرش الأسمى ينتظر صاحب الهمة العالية: من سينقش اسمه في تاريخ مزرعة الملاذ؟",
      podium1Title: "السلطان المؤسس",
      podium2Title: "أمير الفضة",
      podium3Title: "وزير البرونز",
      supremeRibbon: "👑 متصدر العرش",
      tableTitle: "ديوان النبلاء ورعاة المزرعة",
      liveUpdate: "محدث مباشرة",
      disputeBtn: "المطالبة بمقعد",
      colRank: "المرتبة",
      colSheikh: "النبيل / الشيخ",
      colCountry: "الدولة",
      colAmount: "المساهمة",
      colHonorific: "اللقب الممنوح"
    },
    calculator: {
      tag: "💎 محاكي الكرم ومكانة أصحاب الملايين",
      title: "حاسبة الكرم والسيادة",
      subtitle: "حرّك المؤشر بين 100$ و 1,000,000$ دولار أمريكي لمعرفة رتبتك النبيلة وأثر مساهمتك في رعاية القطط التسعة وشراء مزرعة الملاذ.",
      sliderAria: "مبلغ التبرع بالدولار الأمريكي من 100 إلى 1,000,000",
      statusLabel: "الرتبة النبيلة المكتسبة:",
      metricFood: "الولائم الملكية المضمونة",
      metricSanctuary: "الأثر في مزرعة الملاذ",
      metricHealth: "صحة المواليد والعائلة",
      metricLegacy: "الخلود والإرث التاريخي",
      tributeBtn: "تقديم هذا القربان الملكي",
      ladderTitle: "✦ سلم المراتب وحقوق الإرث الأبدي ✦",
      ladderSubtitle: "كل مستوى يمنح امتيازات سيادية وحقوق تسمية تاريخية في الملاذ المستقبلي.",
      tiers: {
        t100: {
          name: "راعي البلاط الملكي",
          badge: "حليف نبيل",
          desc: "طعام متوازن وتطعيمات ورعاية أساسية للقطط التسعة لأسابيع كاملة، مع تدوين اسمك في السجل الملكي.",
          food: "15 يوماً من الولائم للقطط التسعة",
          sanctuary: "مساهمة في صندوق شراء الأرض",
          health: "فيتامينات وفحوصات دورية",
          legacy: "توثيق رسمي في الأرشيف الملكي"
        },
        t1000: {
          name: "الراعي النبيل",
          badge: "راعٍ ملكي",
          desc: "يؤمن غذاءً فاخراً ورمالاً صحية ورعاية بيطرية كاملة للقطط التسعة لشهور عديدة متتالية.",
          food: "4 أشهر من سمك السلمون والباتيه الفاخر",
          sanctuary: "تأمين 20 متراً مربعاً من الأرض",
          health: "تطعيمات وعلاج وقائي شامل",
          legacy: "شهادة نبلاء مختومة بختم القصر"
        },
        t10000: {
          name: "أمير الرحمة",
          badge: "أمير حامٍ",
          desc: "يمول عاماً كاملاً من الحياة الكريمة والرعاية الطبية للجراء والقطط، مع حفر اسمك على جدار الشرف الذهبي الرقمي والفعلي.",
          food: "سنة كاملة من الولائم للقطط التسعة",
          sanctuary: "تأمين 250 متراً مربعاً من المرج الأخضر",
          health: "رعاية بيطرية وطب أطفال شامل",
          legacy: "حفر الاسم على جدار الشرف الرخامي"
        },
        t50000: {
          name: "الوزير الأكبر للأراضي",
          badge: "الوزير الأكبر",
          desc: "يمول مسح الأراضي وتأسيس البنية التحتية الأولى لمزرعة الملاذ المستقبلي. وسام الشريك المؤسس الذهبي.",
          food: "مخزون غذائي استراتيجي لعدة سنوات",
          sanctuary: "1,500 متر مربع من أرض الملاذ",
          health: "تجهيز غرفة إسعافات وتعقيم",
          legacy: "لقب الشريك المؤسس التاريخي"
        },
        t100000: {
          name: "السلطان المؤسس",
          badge: "السلطان المؤسس",
          desc: "الخطوة الكبرى الحاسمة لشراء أرض مزرعة الملاذ المستقبلي. يمنحك حق تسمية الجناح الرئيسي للملاذ باسمك الرسمي للأبد.",
          food: "تأمين إعاشة مدى الحياة للقطط التسعة",
          sanctuary: "شراء صك الأرض الرئيسية للملاذ",
          health: "عيادة بيطرية متكاملة التجهيز",
          legacy: "تسمية الجناح الرئيسي للملاذ باسمك"
        },
        t500000: {
          name: "أمير الأرض الحامي",
          badge: "أمير الأرض",
          desc: "يمول بناء الأجنحة المعمارية والحدائق المحمية للقطط التسعة ولمئات القطط التي سيتم إنقاذها مستقبلاً.",
          food: "مؤونة ملكية لا تنفد",
          sanctuary: "بناء وتجهيز كامل أجنحة الملاذ",
          health: "مستوصف إنقاذ دائم",
          legacy: "تمثال برونزي ولوحة تذكارية خالدة"
        },
        t1000000: {
          name: "الشيخ الأكبر الخالد (أسطورة الملاذ)",
          badge: "👑 أسطورة الملاذ الخالدة",
          desc: "يحقق حلم المزرعة بالكامل حيث تعيش القطط التسعة ومئات القطط المنقذة في حرية وأمان مطلق. يحمل الملاذ اسمك رسمياً للأبد.",
          food: "وقف دائم للإطعام المجاني الأبدي",
          sanctuary: "شراء وتمليك مزرعة الملاذ بالكامل",
          health: "مستشفى سنوري متكامل ومجاني",
          legacy: "يحمل الملاذ بأكمله اسمك الرسمي للأبد"
        }
      }
    },
    story: {
      tag: "✦ حلم المزرعة والملاذ السنوري ✦",
      servantTitle: "مستر جيان – حامي القطط",
      title: "رسالة من صميم القلب: حلم المزرعة والملاذ",
      p1: "«السلام عليكم ورحمة الله وبركاته، أيها المحسن الكريم وصديق الأرواح الضعيفة. في ثقافتنا الشرقية والإنسانية العريقة، تحظى القطط بمكانة خاصة من الرفق والرحمة، فهي رمز الطهارة والبراءة والأمانة. وراء بريق دبي وألقاب الفخامة في هذا القصر، هناك حقيقة صادقة وأمانة ثقيلة: <strong>هذه القطط التسعة هي عائلتي وكل حياتي</strong>.»",
      p2: "«'غاتيتو' هي أمنا الروحية الحكيمة؛ و'نارانخوسا' هي الملكة الشجاعة التي وضعت لتوّها 5 مواليد أطهار ملائكيين يعتمدون كلياً علينا؛ بينما يملأ الصغيران 'تومي' و'مانشاس' البيت بالحيوية والحراسة. إن كلفة توفير الأغذية المخصصة والحليب البيطري والرعاية الصحية لتسع قطط تفوق طاقة أي فرد. وكل مساهمة تقدمها تنقذ يومهم وتتيح لي التفرغ لحمايتهم كخادم وفيّ لأمرهم.»",
      p3: "«لكن غايتنا الكبرى لا تقف عند قوت اليوم؛ <strong>حلمنا الحقيقي هو تأسيس صندوق مالي لشراء مزرعة واسعة تكون ملاذاً دائماً</strong>: أرض خضراء حرة وآمنة، يركضون فيها تحت سماء الله بين الشجر، وتفتح أبوابها مستقبلاً لإنقاذ المئات من قطط الشوارع المشردة بعيداً عن أخطار الدهس والسموم والتشرد.»",
      quote: "«إنك لا تقدم مجرد مال عابر، بل تبني جنة من الرحمة ستخلد اسمك في ديوان الشرف إلى الأبد. شكراً لأنك السند والحامي لأرواحهم البريئة.»",
      signatureRole: "مؤسس قصر المياو والأب الحامي للأرواح التسعة"
    },
    cats: {
      tag: "✦ العائلة الملكية السنورية (٩ أرواح) ✦",
      title: "سلالة القطط الملكية لمستر جيان",
      subtitle: "تعرف على الأعضاء التسعة في البلاط الملكي: 4 قطط بالغة شجاعة، والجراء الخمسة حديثي الولادة أمل الملاذ المستقبلي.",
      hungerLabel: "مستوى الحاجة والاهتمام:",
      snackBtn: "تقديم وجبة ملكية",
      snackCamadaBtn: "تقديم الرعاية للمواليد الخمسة",
      cat1Name: "غاتيتو (Gatito)",
      cat1Role: "الأم الروحية المطمئنة (أنثى بالغة)",
      cat1Bio: "عمود الحكمة والسكينة في القصر. أُنقذت من أيام عصيبة، وتراقب الجميع اليوم بنظرة سلام مهيبة وتفرض الدلال بوقار ملكي.",
      cat2Name: "نارانخوسا (Naranjosa)",
      cat2Role: "الملكة الأم الشجاعة (أنثى بالغة)",
      cat2Bio: "بطلة القصر بلا منازع. وضعت لتوّها 5 مواليد ملائكيين؛ حنانها وشجاعتها ألهمت البلاط بأكمله، وتحتاج غذاءً غنياً لتربية صغارها.",
      cat3Name: "تومي (Tomy)",
      cat3Role: "الأمير المستكشف (ذكر صغير)",
      cat3Bio: "شعلة من الفضول والنشاط لا تنطفئ. يستكشف كل ركن ووسادة في القصر، متدرباً ليكون المستكشف الأكبر في مزرعة الملاذ.",
      cat4Name: "مانشاس (Manchas)",
      cat4Role: "الحارس الصغير (ذكر صغير)",
      cat4Bio: "يتميز بفروه المرقط البديع. مخلص وشجاع؛ ينام بجوار أمه والمواليد ليكون أول من يدافع عنهم ضد أي خطر خفي.",
      cat5Name: "المواليد الملكيون: 5 حديثي الولادة",
      cat5Role: "أمل ومستقبل الملاذ (5 جراء رضع)",
      cat5Bio: "كنوز نارانخوسا الخمسة حديثي الولادة. أرواح بريئة لم تفتح عيونها بعد، وهي السبب الجوهري الذي من أجله نسعى لتأسيس الملاذ.",
      camadaBadge: "👑 ٥ مواليد رضع ✦ أمل ومستقبل الملاذ"
    },
    vault: {
      tag: "✦ قنوات تقديم الجزية الدولية ✦",
      title: "خزينة التبرعات الملكية",
      subtitle: "مخصصة لضيوفنا وأصحاب السمو من دبي، قطر، السعودية وسائر دول العالم. حوّل مساهمتك بأقصى درجات الأمان والخصوصية.",
      paypalTitle: "باي بال الدولي (PayPal)",
      paypalSub: "تبرع فوري عبر بطاقات الائتمان أو رصيد باي بال العالمي",
      paypalDesc: "الوسيلة الأسرع والأكثر أماناً للمحسنين من مختلف دول العالم، مع حماية كاملة للمتبرع وتأكيد فوري.",
      paypalEmailLabel: "البريد الرسمي المعتمد للباي بال:",
      paypalBtn: "تقديم التبرع عبر PayPal",
      cryptoTitle: "العملات المشفرة / ويب 3 كبار الشخصيات",
      cryptoSub: "USDT (TRC20) • بيتكوين (BTC)",
      cryptoBadge: "فوري • بلا حدود",
      cryptoDesc: "الخيار الأمثل لكبار المحسنين لتقديم مبالغ كبرى من 10,000$ إلى 1,000,000$ دولار دون قيود مصرفية أو حدود جغرافية.",
      cryptoNetworkLabel: "الشبكة المعتمدة:",
      cryptoAddressLabel: "عنوان محفظة USDT:",
      btcAddressLabel: "عنوان محفظة بيتكوين (BTC):",
      usdtWarning: "⚠️ يُرجى التأكد من الإرسال عبر شبكة ترون (TRC20) حصراً.",
      btcWarning: "⚠️ أرسل بيتكوين الأصلي (BTC) فقط إلى هذا العنوان.",
      qrScanCrypto: "امسح الرمز لإيداع USDT",
      qrScanBtc: "امسح الرمز لإيداع بيتكوين",
      copiedCryptoToast: "تم نسخ العنوان إلى الحافظة يا حبيبي! 💎⚡",
      copy: "نسخ",
      copiedToast: "تم النسخ إلى الحافظة يا حبيبي! 👑",
      peruAccordionTitle: "🇵🇪 هل تتبرع من داخل بيرو؟ (حسابات BCP بالعملة المحلية)",
      peruAccordionDesc: "إذا كنت ترغب في تقديم مساهمتك بالعملة المحلية داخل بيرو، يمكنك التحويل إلى أي من حسابي BCP بالسول:",
      bcpAccount1Title: "حساب توفير BCP سول ١",
      bcpAccount2Title: "حساب توفير BCP سول ٢",
      bcpSubtitle: "بنك الائتمان البيروفي • بالعملة المحلية (PEN)",
      beneficiaryLabel: "اسم صاحب الحساب (المستفيد):",
      bcpSolesLabel: "رقم الحساب بالسول (PEN):",
      bcpSolesCciLabel: "الرمز البنكي المشترك (CCI Soles):",
      claimBadge: "👑 ديوان اللقاء بمستر جيان والبلاط الملكي",
      claimTitle: "هل أرسلت جزيتك الملكية بالفعل؟",
      claimSubtitle: "طالب بمكانك على عرش الشيوخ وبحق تسمية جناحك في مزرعة الملاذ. أرسل إشعار التحويل مع لقبك المفضل وعلم دولتك.",
      claimThroneBtn: "أرسلت التبرع، المطالبة بمكاني على العرش",
      emailSubject: "المطالبة بعرش الشيوخ - قصر المياو | مستر جيان",
      emailBody: "السلام عليكم ورحمة الله وبركاته مستر جيان،\n\nأرسلت للتو جزية ملكية مباركة لدعم ورعاية القطط الملكية التسعة والمساهمة في تأسيس مزرعة الملاذ الدائم.\n\nمرفق مع هذا البريد إشعار التحويل الرسمي، مع بياناتي الخاصة لتسجيلي على عرش الشيوخ:\n- الاسم أو اللقب الملكي (شيخ، سلطان، أو أمير): \n- الدولة أو العلم: \n- قيمة التبرع والوسيلة المستخدمة: \n\nعاش قصر المياو ودامت البركة والرحمة!"
    },
    faq: {
      tag: "✦ الشفافية والمصداقية ✦",
      title: "الأسئلة الشائعة",
      subtitle: "وضوح وشفافية مطلقة لضيوفنا ومحسنينا الكرام.",
      q1: "أين تذهب أموال التبرعات بالضبط؟",
      a1: "يُخصص كل دولار لهدفين ساميين: أولاً، تأمين التغذية الفاخرة والرعاية البيطرية والحليب المتخصص للقطط التسعة (بما في ذلك الرعاية الحثيثة للمواليد الخمسة) وكفاف خادمهم مستر جيان ليتفرغ لرعايتهم. ثانياً، يُجمع الفائض بالكامل في صندوق مخصص لشراء وتجهيز مزرعة الملاذ الدائم.",
      q2: "ما هي مزرعة الملاذ وما هي الحقوق الممنوحة للمتبرع؟",
      a2: "هي حلم العمر لمستر جيان: أرض ريفية واسعة ومحمية لتعيش فيها هذه القطط ومئات القطط المنقذة في حرية تامة ودون أقفاص مدى الحياة. التبرع بـ 10,000$ يحفر اسمك على جدار الشرف الفعلي، والتبرع بـ 100,000$ أو 1,000,000$ يمنحك حق تسمية الجناح الرئيسي أو الملاذ بالكامل باسمك الشريف.",
      q3: "كيف أظهر على منصة الشيوخ وأحصل على لقبي؟",
      a3: "بمجرد إتمام التبرع عبر العملات المشفرة أو باي بال أو بنك BCP، اضغط على زر 'أرسلت التبرع، المطالبة بمكاني على العرش' وأرسل إشعار التحويل عبر البريد إلى مستر جيان مع اسمك أو لقبك المفضل وعلم دولتك لتحديث المنصة فوراً.",
      q4: "هل القطط التسعة حقيقية أم مجرد فكرة ترويجية؟",
      a4: "هي قطط حقيقية 100% تعيش برعاية مستر جيان الشخصية. وفكرة فخامة دبي وألقاب الشيوخ هي أسلوبنا الراقي المبهج لاستنهاض الكرم والرحمة دون اللجوء للاستجداء الحزين."
    },
    footer: {
      tagline: "الملاذ الذي تُكرّم فيه 9 أرواح سنورية ويصنع فيه كبار المحسنين إرثاً أبدياً من الرحمة والبركة.",
      navTitle: "التنقل الملكي",
      contactTitle: "التواصل الرسمي",
      location: "ليما، بيرو (المقر الرئيسي للملاذ الملكي)",
      audiences: "اللقاءات والمقابلات مع مستر جيان والبلاط بموعد مسبق",
      disclaimerTitle: "📜 مرسوم الشفافية الملكي:",
      disclaimerText: "قصر المياو مبادرة إنسانية مستقلة أسسها مستر جيان لإنقاذ ورعاية 9 قطط وبناء مزرعة الملاذ الدائم. لم يُجبر أي قط على ارتداء تيجان ذهبية حقيقية أثناء تطوير هذا الموقع.",
      copyText: "جميع حقوق الخرخرة محفوظة في الإمارات السبع وسائر البلدان.",
      crafted: "صُمم ونُفذ بكل شرف من قبل مستر جيان باستخدام HTML5، CSS3 الحديث، Vanilla JS & Three.js"
    }
  }
};

/* ==============================================================================
   4. APP STATE MANAGEMENT
   ============================================================================== */
let currentLang = 'es';
let activePaymentTab = 'all';
let currentTierIndex = 1; // Default to $1,000 USD (Noble Sponsor)
let threeSceneInitialized = false;

/* ==============================================================================
   5. I18N AND RTL SYSTEM
   ============================================================================== */
/**
 * Sets current language, updates HTML attributes, RTL layout and all text nodes
 * @param {string} lang - 'es' | 'en' | 'ar'
 */
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;

  const html = document.documentElement;
  html.setAttribute('lang', lang);

  // Critical RTL Rule: If Arabic is selected, update dir to 'rtl'
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('dir', 'ltr');
  }

  // Update active state in navbar language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Translate all DOM elements containing [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keyPath = el.dataset.i18n;
    const translation = getNestedTranslation(I18N[lang], keyPath);
    if (translation !== undefined) {
      if (el.tagName === 'INPUT' && el.type === 'range') {
        el.setAttribute('aria-label', translation);
      } else {
        el.textContent = translation;
      }
    }
  });

  // Re-render Dynamic Content
  renderLeaderboardPodium();
  renderLeaderboardTable();
  updateCalculatorMetrics(currentTierIndex);
  updateEmailClaimLink();

  // Save preference
  try {
    localStorage.setItem('al_meow_lang', lang);
  } catch (e) {
    // Storage not available
  }
}

/**
 * Traverses nested object path e.g. "hero.titleGold"
 */
function getNestedTranslation(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
}

/* ==============================================================================
   6. LEADERBOARD SYSTEM (PODIUM + TABLE)
   ============================================================================== */
function renderLeaderboardPodium() {
  const top1 = LEADERBOARD_DATA.find(item => item.id === 1);
  const top2 = LEADERBOARD_DATA.find(item => item.id === 2);
  const top3 = LEADERBOARD_DATA.find(item => item.id === 3);

  // Helper to get localized title
  const getTitle = (item) => {
    if (currentLang === 'ar') return item.titleAr;
    if (currentLang === 'en') return item.titleEn;
    return item.titleEs;
  };

  // Rank 1
  if (top1) {
    const p1Name = document.getElementById('p1-name');
    const p1Amount = document.getElementById('p1-amount');
    const p1Title = document.getElementById('p1-title');
    const p1Country = document.getElementById('p1-country');
    const p1Flag = document.getElementById('p1-flag');

    if (p1Name) p1Name.textContent = top1.name;
    if (p1Amount) p1Amount.textContent = top1.amount.toLocaleString();
    if (p1Title) p1Title.textContent = getTitle(top1);
    if (p1Country) p1Country.textContent = top1.country;
    if (p1Flag) p1Flag.textContent = top1.flag;
  }

  // Rank 2
  if (top2) {
    const p2Name = document.getElementById('p2-name');
    const p2Amount = document.getElementById('p2-amount');
    const p2Title = document.getElementById('p2-title');
    const p2Country = document.getElementById('p2-country');
    const p2Flag = document.getElementById('p2-flag');

    if (p2Name) p2Name.textContent = top2.name;
    if (p2Amount) p2Amount.textContent = top2.amount.toLocaleString();
    if (p2Title) p2Title.textContent = getTitle(top2);
    if (p2Country) p2Country.textContent = top2.country;
    if (p2Flag) p2Flag.textContent = top2.flag;
  }

  // Rank 3
  if (top3) {
    const p3Name = document.getElementById('p3-name');
    const p3Amount = document.getElementById('p3-amount');
    const p3Title = document.getElementById('p3-title');
    const p3Country = document.getElementById('p3-country');
    const p3Flag = document.getElementById('p3-flag');

    if (p3Name) p3Name.textContent = top3.name;
    if (p3Amount) p3Amount.textContent = top3.amount.toLocaleString();
    if (p3Title) p3Title.textContent = getTitle(top3);
    if (p3Country) p3Country.textContent = top3.country;
    if (p3Flag) p3Flag.textContent = top3.flag;
  }
}

function renderLeaderboardTable() {
  const tbody = document.getElementById('leaderboard-body');
  if (!tbody) return;

  const subsequentRanks = LEADERBOARD_DATA.filter(item => item.id > 3);
  tbody.innerHTML = '';

  subsequentRanks.forEach((item) => {
    const tr = document.createElement('tr');
    const rankNum = item.id;
    const title = currentLang === 'ar' ? item.titleAr : (currentLang === 'en' ? item.titleEn : item.titleEs);

    tr.innerHTML = `
      <td>
        <span class="td-rank-badge">#${rankNum}</span>
      </td>
      <td>
        <div class="td-sheikh-cell">
          <span>${item.flag}</span>
          <strong>${item.name}</strong>
        </div>
      </td>
      <td>${item.country}</td>
      <td class="td-amount-cell">$${item.amount.toLocaleString()} USD</td>
      <td class="td-title-cell">${title}</td>
    `;
    tbody.appendChild(tr);
  });

  // Calculate & update total in hero stats
  const total = LEADERBOARD_DATA.reduce((acc, curr) => acc + curr.amount, 0);
  const totalEl = document.getElementById('stat-total-donated');
  if (totalEl) {
    totalEl.textContent = `$${total.toLocaleString()} USD`;
  }
}

/* ==============================================================================
   7. CALCULADORA DE GENEROSIDAD (HIGH-IMPACT NON-LINEAR SLIDER)
   $100 -> $1,000 -> $10,000 -> $50,000 -> $100,000 -> $500,000 -> $1,000,000 USD
   ============================================================================== */
function initCalculator() {
  const slider = document.getElementById('generosity-slider');
  if (!slider) return;

  slider.addEventListener('input', (e) => {
    const index = parseInt(e.target.value, 10);
    currentTierIndex = index;
    updateCalculatorMetrics(index);
  });

  // Initial update
  updateCalculatorMetrics(currentTierIndex);
}

function updateCalculatorMetrics(tierIndex) {
  const usd = DONATION_TIERS[tierIndex] !== undefined ? DONATION_TIERS[tierIndex] : 1000;
  const amountDisplay = document.getElementById('calc-amount-display');
  const statusTitle = document.getElementById('calc-status-title');
  const statusDesc = document.getElementById('calc-status-desc');
  const foodVal = document.getElementById('calc-food-val');
  const sanctuaryVal = document.getElementById('calc-sanctuary-val');
  const healthVal = document.getElementById('calc-health-val');
  const legacyVal = document.getElementById('calc-legacy-val');

  if (amountDisplay) {
    amountDisplay.textContent = usd.toLocaleString();
  }

  const langDict = I18N[currentLang].calculator;
  const tierKeys = ['t100', 't1000', 't10000', 't50000', 't100000', 't500000', 't1000000'];
  const key = tierKeys[tierIndex] || 't1000';
  const tierData = langDict.tiers[key];

  if (tierData) {
    if (statusTitle) statusTitle.textContent = tierData.name;
    if (statusDesc) statusDesc.textContent = tierData.desc;
    if (foodVal) foodVal.textContent = tierData.food;
    if (sanctuaryVal) sanctuaryVal.textContent = tierData.sanctuary;
    if (healthVal) healthVal.textContent = tierData.health;
    if (legacyVal) legacyVal.textContent = tierData.legacy;
  }

  // Highlight ladder item corresponding to this tier
  document.querySelectorAll('.ladder-card').forEach((card, idx) => {
    // Map idx: 0=$1k, 1=$10k, 2=$100k, 3=$1M
    const ladderMap = [1, 2, 4, 6];
    const isTarget = ladderMap[idx] === tierIndex;
    card.classList.toggle('active-ladder', isTarget);
  });
}

/* ==============================================================================
   8. INTERACTIVE CAT CARDS (3D TILT & VIRTUAL FEEDING / NURTURING)
   ============================================================================== */
function initCatCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    const inner = card.querySelector('.cat-card-inner');
    if (!inner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  // Feeding and Nurturing Buttons
  document.querySelectorAll('.btn-feed-snack').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const catId = btn.getAttribute('data-cat');
      handleVirtualFeeding(catId, btn);
    });
  });
}

function handleVirtualFeeding(catId, button) {
  const hungerText = document.getElementById(`cat-hunger-${catId}`);
  const parentCard = button.closest('.cat-card');
  const barFill = parentCard ? parentCard.querySelector('.hunger-bar-fill') : null;

  if (catId === '5') {
    // Special handling for the newborn litter
    if (hungerText && barFill) {
      hungerText.textContent = currentLang === 'ar' ? '100% (أمان وحنان كامل!)' :
        (currentLang === 'en' ? '100% (Completely Nurtured!)' : '100% (¡Amor y nutrición garantizados!)');
      hungerText.style.color = "#10B981";
      barFill.style.width = "100%";
      barFill.className = "hunger-bar-fill";
      barFill.style.background = "linear-gradient(90deg, #10B981, #34D399)";
    }

    const rect = button.getBoundingClientRect();
    createFloatingEmoji(rect.left + rect.width / 2, rect.top, '🍼');
    createFloatingEmoji(rect.left + rect.width / 2 + 15, rect.top - 10, '✨');
    createFloatingEmoji(rect.left + rect.width / 2 - 15, rect.top - 10, '💖');

    showToast(
      currentLang === 'ar' ? 'تمت رعاية وإرضاع المواليد الخمسة بنجاح! 🍼✨' :
      (currentLang === 'en' ? 'The 5 newborn kittens have been lovingly nurtured! 🍼✨' : '¡La Camada Real ha recibido alimento y amor! 🍼✨')
    );
  } else {
    // Normal cat cards 1 to 4
    if (hungerText && barFill) {
      hungerText.textContent = currentLang === 'ar' ? '20% (شبع وسعادة ملكية!)' :
        (currentLang === 'en' ? '20% (Satisfied & Purring!)' : '20% (¡Satisfecho y ronroneando!)');
      hungerText.style.color = "#10B981";
      barFill.style.width = "20%";
      barFill.className = "hunger-bar-fill";
      barFill.style.background = "#10B981";
    }

    const rect = button.getBoundingClientRect();
    createFloatingEmoji(rect.left + rect.width / 2, rect.top, '🐟');
    createFloatingEmoji(rect.left + rect.width / 2 + 15, rect.top - 10, '💖');

    showToast(
      currentLang === 'ar' ? 'تم تقديم الوليمة الملكية لسمو القط! 👑' :
      (currentLang === 'en' ? 'Royal banquet served with honor! 👑' : '¡Banquete real servido con honor! 👑')
    );
  }

  button.disabled = true;
  button.style.opacity = '0.6';
  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = '1';
  }, 4000);
}

function createFloatingEmoji(x, y, emojiChar) {
  const el = document.createElement('div');
  el.textContent = emojiChar;
  el.style.position = 'fixed';
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.fontSize = '1.8rem';
  el.style.pointerEvents = 'none';
  el.style.zIndex = '9999';
  el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
  el.style.transform = 'translate(-50%, 0) scale(1)';
  el.style.opacity = '1';
  document.body.appendChild(el);

  requestAnimationFrame(() => {
    el.style.transform = `translate(-50%, -70px) scale(1.4)`;
    el.style.opacity = '0';
  });

  setTimeout(() => el.remove(), 1000);
}

/* ==============================================================================
   9. PAYMENT VAULT & CLIPBOARD SYSTEM
   ============================================================================== */
function initPaymentVault() {
  // Populate configurable values from PAYMENT_CONFIG
  populatePaymentConfig();

  // Crypto internal tabs switching (USDT / BTC)
  document.querySelectorAll('.crypto-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTab = btn.getAttribute('data-crypto-tab');

      document.querySelectorAll('.crypto-tab-btn').forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      const panes = ['usdt', 'btc'];
      panes.forEach(pane => {
        const paneEl = document.getElementById(`crypto-pane-${pane}`);
        if (paneEl) {
          paneEl.style.display = pane === selectedTab ? 'flex' : 'none';
        }
      });
    });
  });

  // Clipboard copy buttons
  document.querySelectorAll('.btn-copy').forEach(copyBtn => {
    copyBtn.addEventListener('click', () => {
      const targetId = copyBtn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        const textToCopy = targetEl.textContent.trim();
        const isCrypto = targetId && (targetId.includes('usdt') || targetId.includes('btc'));
        copyToClipboard(textToCopy, isCrypto);
      }
    });
  });
}

function populatePaymentConfig() {
  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  };

  // Crypto fields
  setEl('val-usdt-address', PAYMENT_CONFIG.usdtAddress);
  setEl('val-usdt-network', PAYMENT_CONFIG.usdtNetwork);
  setEl('val-btc-address', PAYMENT_CONFIG.btcAddress);
  setEl('val-btc-network', PAYMENT_CONFIG.btcNetwork);

  // Fiat & Bank fields
  setEl('val-paypal-email', PAYMENT_CONFIG.paypalEmail);
  setEl('val-wire-beneficiary-1', PAYMENT_CONFIG.beneficiaryName);
  setEl('val-wire-beneficiary-2', PAYMENT_CONFIG.beneficiaryName);
  setEl('val-footer-email', PAYMENT_CONFIG.officialEmail);
  setEl('val-bcp-soles-1', PAYMENT_CONFIG.bcpAccountSoles1);
  setEl('val-bcp-cci-soles-1', PAYMENT_CONFIG.bcpCciSoles1);
  setEl('val-bcp-soles-2', PAYMENT_CONFIG.bcpAccountSoles2);
  setEl('val-bcp-cci-soles-2', PAYMENT_CONFIG.bcpCciSoles2);

  // Update dynamic PayPal link
  const paypalBtn = document.getElementById('paypal-donate-btn');
  if (paypalBtn && PAYMENT_CONFIG.paypalUrl) {
    paypalBtn.href = PAYMENT_CONFIG.paypalUrl;
  }
}

function copyToClipboard(text, isCrypto = false) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      triggerCopyToast(isCrypto);
    }).catch(() => {
      fallbackCopy(text, isCrypto);
    });
  } else {
    fallbackCopy(text, isCrypto);
  }
}

function fallbackCopy(text, isCrypto = false) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  textArea.style.top = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    triggerCopyToast(isCrypto);
  } catch (err) {
    console.error('Fallback copy failed', err);
  }
  document.body.removeChild(textArea);
}

function triggerCopyToast(isCrypto = false) {
  const vaultDict = I18N[currentLang].vault;
  const message = (isCrypto && vaultDict.copiedCryptoToast) ? vaultDict.copiedCryptoToast : vaultDict.copiedToast;
  showToast(message);
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

/* ==============================================================================
   10. EMAIL CLAIM THRONE LINK UPDATE (DYNAMIC MAILTO)
   ============================================================================== */
function updateEmailClaimLink() {
  const claimBtn = document.getElementById('claim-throne-btn');
  if (!claimBtn) return;

  const emailDict = I18N[currentLang].vault;
  const subject = encodeURIComponent(emailDict.emailSubject);
  const body = encodeURIComponent(emailDict.emailBody);
  const targetEmail = PAYMENT_CONFIG.officialEmail || "donacionparagatitos@gmail.com";

  claimBtn.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
}

/* ==============================================================================
   11. ULTRALIGHT 3D HERO (THREE.JS PROCEDURAL SCENE)
   ============================================================================== */
function initThreeHeroScene() {
  const container = document.getElementById('hero-3d-canvas');
  if (!container || typeof THREE === 'undefined') {
    return;
  }

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 7.5;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // 3. ILUMINACIÓN CINEMATOGRÁFICA (4 LUCES)
  // Luz ambiental suave de base
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  // Luz cálida principal desde arriba a la derecha (crea brillos dorados)
  const keyLight = new THREE.DirectionalLight(0xFFF3C4, 2.5);
  keyLight.position.set(5, 6, 4);
  scene.add(keyLight);

  // Luz frontal puntual para resaltar las facetas
  const frontPointLight = new THREE.PointLight(0xD4AF37, 3, 10);
  frontPointLight.position.set(0, 1, 4);
  scene.add(frontPointLight);

  // Luz de recorte verde esmeralda real desde abajo a la izquierda (contraste de lujo)
  const emeraldRimLight = new THREE.PointLight(0x046307, 2.2, 12);
  emeraldRimLight.position.set(-4, -4, 2);
  scene.add(emeraldRimLight);

  // Grupo raíz para movimiento fluido y parallax
  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // 1. GEOMETRÍA Y MATERIALES DE LUJO
  // Núcleo principal: Esfera facetada de oro
  const coreGeo = new THREE.IcosahedronGeometry(1.4, 1);
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    metalness: 0.9,
    roughness: 0.18,
    flatShading: true
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  sceneGroup.add(coreMesh);

  // Malla exterior sutil (Wireframe) que gira en sentido contrario
  const wireGeo = new THREE.IcosahedronGeometry(1.52, 1);
  const wireMat = new THREE.MeshStandardMaterial({
    wireframe: true,
    color: 0xF3E5AB,
    transparent: true,
    opacity: 0.22,
    metalness: 0.6,
    roughness: 0.25
  });
  const wireMesh = new THREE.Mesh(wireGeo, wireMat);
  sceneGroup.add(wireMesh);

  // Anillos orbitales delgados inclinados en ángulos distintos
  const ring1Geo = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
  const ring1Mat = new THREE.MeshStandardMaterial({
    color: 0xF3E5AB,
    metalness: 0.9,
    roughness: 0.15
  });
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1.rotation.x = Math.PI / 3.2;
  ring1.rotation.y = Math.PI / 6;
  sceneGroup.add(ring1);

  const ring2Geo = new THREE.TorusGeometry(2.45, 0.01, 16, 100);
  const ring2Mat = new THREE.MeshStandardMaterial({
    color: 0xD4AF37,
    metalness: 0.9,
    roughness: 0.15
  });
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2.rotation.x = -Math.PI / 2.7;
  ring2.rotation.z = Math.PI / 4.5;
  sceneGroup.add(ring2);

  // 2. PARTÍCULAS DE POLVO DE ORO (300 partículas esféricas)
  const particleCount = 300;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Distribución esférica en volumen alrededor del núcleo
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const radius = 1.85 + Math.cbrt(Math.random()) * 2.15; // Entre 1.85 y 4.0
    
    particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
    particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    particlePositions[i + 2] = radius * Math.cos(phi);
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xF3E5AB,
    size: 0.035,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });

  const particlePoints = new THREE.Points(particleGeo, particleMat);
  sceneGroup.add(particlePoints);

  // 4. INTERACTIVIDAD Y RENDIMIENTO
  let targetRotationX = 0;
  let targetRotationY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;

  window.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotationY = mouseX * 0.4;
    targetRotationX = -mouseY * 0.3;
  }, { passive: true });

  // Handle Resize
  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }, { passive: true });

  // Pausar al cambiar de pestaña o cuando el hero está fuera de vista
  let isRunning = true;

  document.addEventListener('visibilitychange', () => {
    isRunning = !document.hidden;
  });

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isRunning = entry.isIntersecting && !document.hidden;
    });
  }, { threshold: 0.08 });

  const heroSection = document.getElementById('hero');
  if (heroSection) heroObserver.observe(heroSection);

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    if (!isRunning) return;

    const elapsedTime = clock.getElapsedTime();

    // Movimiento fluido: flotar suavemente arriba y abajo
    sceneGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

    // Seguimiento del mouse (Parallax con lerp 0.05)
    currentRotationX += (targetRotationX - currentRotationX) * 0.05;
    currentRotationY += (targetRotationY - currentRotationY) * 0.05;

    sceneGroup.rotation.x = currentRotationX;
    sceneGroup.rotation.y = currentRotationY;

    // Núcleo principal rotando de forma constante
    coreMesh.rotation.y = elapsedTime * 0.4;
    coreMesh.rotation.x = elapsedTime * 0.2;

    // Malla exterior sutil rotando en sentido contrario al núcleo
    wireMesh.rotation.y = -elapsedTime * 0.28;
    wireMesh.rotation.x = -elapsedTime * 0.15;

    // Anillos orbitales rotando lentamente sobre sus ejes
    ring1.rotation.z = elapsedTime * 0.25;
    ring2.rotation.y = -elapsedTime * 0.2;

    // Rotación suave del campo de partículas de polvo de oro
    particlePoints.rotation.y = elapsedTime * 0.06;
    particlePoints.rotation.x = Math.sin(elapsedTime * 0.25) * 0.04;

    renderer.render(scene, camera);
  }

  animate();
  threeSceneInitialized = true;
}

/* ==============================================================================
   12. NAVIGATION & SCROLL INTERACTIONS
   ============================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const backdrop = document.getElementById('mobile-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background transition
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu && backdrop) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !navMenu.classList.contains('active');
      mobileToggle.classList.toggle('active', isOpen);
      navMenu.classList.toggle('active', isOpen);
      backdrop.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    mobileToggle.addEventListener('click', () => toggleMenu());
    backdrop.addEventListener('click', () => toggleMenu(false));

    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // Language buttons event
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ==============================================================================
   13. APPLICATION BOOTSTRAP
   ============================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  let initialLang = 'es';
  try {
    const saved = localStorage.getItem('al_meow_lang');
    if (saved && I18N[saved]) initialLang = saved;
  } catch (e) {
    // Local storage not permitted
  }

  setLanguage(initialLang);
  initCalculator();
  initCatCards();
  initPaymentVault();
  initNavigation();

  if (typeof THREE !== 'undefined') {
    initThreeHeroScene();
  } else {
    window.addEventListener('load', () => {
      if (typeof THREE !== 'undefined' && !threeSceneInitialized) {
        initThreeHeroScene();
      }
    });
  }
});
