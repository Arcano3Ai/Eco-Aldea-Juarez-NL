/**
 * @fileoverview Fuente única de verdad para el contenido editable de ECO ALDEA JUÁREZ NL.
 * Todos los textos, enlaces y rutas de fotografías locales se gestionan desde este archivo
 * para facilitar su actualización sin tocar la lógica de la interfaz.
 */

export const SITE_CONTENT = {
  brand: {
    name: 'ECO ALDEA JUÁREZ NL',
    shortName: 'Eco Aldea Juárez NL',
    region: 'Juárez, Nuevo León, México',
    communityGroup: 'Comunidad Ecológica y Participativa · Nuevo León'
  },

  whatsapp: {
    displayPhone: '8117164618',
    countryPhone: '528117164618',
    baseUrl: 'https://wa.me/528117164618',
    defaultMessage:
      'Hola, conocí Eco Aldea Juárez NL a través de su página web y me gustaría conocer más sobre el proyecto y cómo puedo participar.'
  },

  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyecto', href: '#filosofia' },
    { label: 'Pilares', href: '#construyendo' },
    { label: 'Actividades', href: '#actividades' },
    { label: 'Zona de Niños', href: '#ninos' },
    { label: 'Blog y Saberes', href: '#blog' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Participa', href: '#unete' }
  ],

  hero: {
    eyebrow: 'ECO ALDEA JUÁREZ NL',
    locationTag: 'Juárez · Área Metropolitana de Monterrey, Nuevo León',
    title: 'Volvamos a conectar con la tierra.',
    subtitle:
      'Un espacio donde las ideas germinan, las manos construyen y la comunidad crece.',
    description:
      'Invitamos a todas las personas que desean aprender, compartir y participar en la construcción de un proyecto ecológico y comunitario.',
    primaryCta: 'CONOCE NUESTRO PROYECTO',
    primaryHref: '#filosofia',
    secondaryCta: 'QUIERO PARTICIPAR',
    backgroundImage: 'assets/images/parallax/parallax-bosque-nl.jpg',
    parallaxBackgrounds: [
      'assets/images/parallax/parallax-bosque-nl.jpg',
      'assets/images/parallax/parallax-tierra-semillas.jpg',
      'assets/images/parallax/parallax-atardecer-comunidad.jpg'
    ],
    backgroundAlt:
      'Vista panorámica al atardecer de un huerto comunitario agroecológico con camas de cultivo en madera y las montañas de Nuevo León al fondo',
    featuredRealBadge: {
      image: 'assets/images/comunidad/cosecha-huerto-comunitario.jpg',
      title: 'Cosecha y guarda de semillas en Nuevo León',
      caption: 'Registro comunitario · Eco Aldea Juárez NL'
    }
  },

  philosophy: {
    eyebrow: 'NUESTRA FILOSOFÍA',
    title: 'Una semilla puede transformar mucho más que un jardín.',
    lead:
      'Creemos que los grandes cambios comienzan con pequeñas acciones. Recuperar conocimientos, compartir experiencias, cuidar la naturaleza y trabajar en comunidad son parte del camino hacia una vida más consciente y sostenible.',
    quote:
      'Cada semilla que guardamos es un acto de cuidado frente a lo desechable y un paso firme hacia nuestra autonomía.',
    mainImage: 'assets/images/editorial/filosofia-semillas-tierra.jpg',
    mainImageAlt:
      'Manos sosteniendo tierra fértil, semillas criollas y un brote verde bajo luz natural cálida',
    secondaryImage: 'assets/images/comunidad/cosecha-huerto-comunitario.jpg',
    secondaryImageAlt:
      'Integrante de Eco Aldea Juárez NL mostrando una cosecha madura en el espacio de huerto comunitario con camas de madera',
    pillars: [
      {
        id: 'tierra',
        title: 'Conexión viva con el suelo',
        text: 'Observar los ciclos naturales, nutrir la tierra con respeto y aprender directamente con las manos.'
      },
      {
        id: 'semilla',
        title: 'Saberes que se heredan',
        text: 'Las semillas y los conocimientos no se encierran: se rescatan, se cuidan con paciencia y se comparten.'
      },
      {
        id: 'comunidad',
        title: 'Horizonte colectivo',
        text: 'Nadie construye solo. Cada persona aporta su experiencia, su tiempo y su entusiasmo al bienestar común.'
      }
    ],
    seedCycle: [
      {
        step: '01',
        title: 'La Cosecha en su Punto Justo',
        description:
          'Esperar a que el fruto o la flor alcancen su madurez completa en la planta, preferiblemente en un día seco y soleado. La naturaleza misma avisa cuando están listas para recolectarse.'
      },
      {
        step: '02',
        title: 'El Secado con Respeto',
        description:
          'Extender las semillas sobre una superficie limpia y madera en un lugar fresco, sombreado y con buena ventilación, sin exponerlas al sol directo agresivo para proteger su germen interior.'
      },
      {
        step: '03',
        title: 'El Guardado Sagrado',
        description:
          'Una vez secas, resguardarlas en recipientes de vidrio herméticos, sobres de papel o bolsitas de tela natural, protegiéndolas de la humedad y de la luz directa.'
      },
      {
        step: '04',
        title: 'La Memoria del Tiempo',
        description:
          'Etiquetar cada variedad y su fecha de recolección. Las semillas son pacientes: bien cuidadas, esperarán el momento oportuno en que volvamos a sembrarlas en comunidad.'
      }
    ]
  },

  areas: {
    eyebrow: 'LO QUE ESTAMOS CONSTRUYENDO',
    title: 'Seis raíces de un proyecto vivo y participativo',
    subtitle:
      'Iniciativas abiertas al aprendizaje mutuo y al trabajo voluntario. Nuestro propósito es construir paso a paso, con honestidad y colaboración.',
    items: [
      {
        id: 'cultura-tierra',
        number: '01',
        title: 'CULTURA DE LA TIERRA',
        description:
          'Aprender a cultivar, cuidar nuestros espacios y recuperar la relación con la naturaleza.',
        icon: 'sprout',
        tag: 'Cultivo y suelo vivo'
      },
      {
        id: 'conservacion-semillas',
        number: '02',
        title: 'CONSERVACIÓN DE SEMILLAS',
        description:
          'Compartir conocimientos sobre selección, recolección, secado y conservación de semillas.',
        icon: 'seed',
        tag: 'Memoria biocultural'
      },
      {
        id: 'comunidad-colaboracion',
        number: '03',
        title: 'COMUNIDAD Y COLABORACIÓN',
        description:
          'Construir un espacio donde cada persona pueda aportar sus conocimientos, tiempo e ideas.',
        icon: 'hands',
        tag: 'Tejido social'
      },
      {
        id: 'aprendizaje-ecologico',
        number: '04',
        title: 'APRENDIZAJE ECOLÓGICO',
        description:
          'Compartir experiencias y prácticas que nos acerquen a una vida más sostenible.',
        icon: 'leafBook',
        tag: 'Saberes abiertos'
      },
      {
        id: 'convivencia-naturaleza',
        number: '05',
        title: 'CONVIVENCIA CON LA NATURALEZA',
        description:
          'Crear experiencias comunitarias alrededor de la tierra, el aprendizaje y el respeto por nuestro entorno.',
        icon: 'campfire',
        tag: 'Encuentros al aire libre'
      },
      {
        id: 'participacion-voluntaria',
        number: '06',
        title: 'PARTICIPACIÓN VOLUNTARIA',
        description:
          'Invitar a personas que quieran involucrarse y contribuir al desarrollo del proyecto.',
        icon: 'sunHeart',
        tag: 'Puertas abiertas'
      }
    ]
  },

  activities: {
    eyebrow: 'NUESTRAS ACTIVIDADES',
    title: 'Las ideas cobran vida cuando trabajamos juntos.',
    subtitle:
      'Fotografías reales de nuestro espacio y encuentros en Nuevo León. Haz clic en cualquier imagen para ampliarla en pantalla completa.',
    categories: [
      { id: 'all', label: 'Todas las actividades' },
      { id: 'cultivos', label: 'Cultivos y semillas' },
      { id: 'espacios', label: 'Jornadas y espacios' },
      { id: 'convivencia', label: 'Fogatas y convivencia' },
      { id: 'autosuficiencia', label: 'Cuidado y vida rural' }
    ],
    items: [
      {
        id: 'act-cosecha-semillas',
        src: 'assets/images/comunidad/cosecha-huerto-comunitario.jpg',
        alt: 'Integrante de Eco Aldea Juárez NL en el huerto comunitario mostrando un fruto seco para recolección y conservación de semillas',
        title: 'Cosecha y Conservación de Semillas',
        category: 'cultivos',
        categoryLabel: 'Cultivos y conservación de semillas',
        description:
          'Recolección de frutos maduros en el huerto para el rescate y resguardo de semillas destinadas a nuevas siembras.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'featured'
      },
      {
        id: 'act-fogata-convivencia',
        src: 'assets/images/comunidad/fogata-convivencia-nocturna.jpg',
        alt: 'Fogata nocturna encendida durante un encuentro de convivencia en Eco Aldea Juárez NL',
        title: 'Fogatas y Convivencia Comunitaria',
        category: 'convivencia',
        categoryLabel: 'Fogatas y convivencia',
        description:
          'Al caer la tarde, el fuego reúne a las personas para dialogar, organizar jornadas y fortalecer el vínculo humano.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      },
      {
        id: 'act-espacio-arboles',
        src: 'assets/images/comunidad/espacio-convivencia-arboles.jpg',
        alt: 'Mesa de convivencia al aire libre bajo la sombra de los árboles en el terreno de Eco Aldea Juárez NL',
        title: 'Encuentros Comunitarios al Aire Libre',
        category: 'convivencia',
        categoryLabel: 'Actividades al aire libre',
        description:
          'Espacios sencillos bajo la sombra de los árboles para compartir alimentos, ideas y aprendizajes en contacto con la naturaleza.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      },
      {
        id: 'act-preparacion-madera',
        src: 'assets/images/comunidad/preparacion-espacios-madera.jpg',
        alt: 'Estructuras y camas de cultivo construidas con tarimas de madera reutilizada en el huerto de Eco Aldea Juárez NL',
        title: 'Preparación de Espacios y Camas de Cultivo',
        category: 'espacios',
        categoryLabel: 'Preparación de espacios',
        description:
          'Aprovechamiento de madera y materiales accesibles para delimitar áreas de siembra, compostaje y trabajo colectivo.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      },
      {
        id: 'act-crianza-aves',
        src: 'assets/images/comunidad/crianza-aves-corral.jpg',
        alt: 'Cuidado de aves de corral dentro del espacio comunitario de Eco Aldea Juárez NL',
        title: 'Cuidado de Aves y Autosuficiencia',
        category: 'autosuficiencia',
        categoryLabel: 'Jornadas de trabajo',
        description:
          'El contacto cotidiano con los ciclos de la granja y el cuidado responsable de aves de corral como parte del aprendizaje integral.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      },
      {
        id: 'act-huevos-campo',
        src: 'assets/images/comunidad/cesta-huevos-campo.jpg',
        alt: 'Gallinas y recolección de huevos de campo en nido tradicional de Eco Aldea Juárez NL',
        title: 'Frutos del Cuidado Cotidiano',
        category: 'autosuficiencia',
        categoryLabel: 'Cultivos y vida natural',
        description:
          'La constancia y el respeto por los ritmos naturales nos enseñan el valor de producir con paciencia y gratitud.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      },
      {
        id: 'act-jornada-huerto',
        src: 'assets/images/comunidad/jornada-huerto-semillas.jpg',
        alt: 'Jornada de trabajo en el huerto bajo el sol de Nuevo León en Eco Aldea Juárez NL',
        title: 'Jornadas de Trabajo en el Huerto',
        category: 'espacios',
        categoryLabel: 'Jornadas de trabajo',
        description:
          'Mañanas y tardes dedicadas a limpiar, sembrar, regar y organizar en conjunto las áreas verdes del proyecto.',
        sourceBadge: 'Fotografía real del proyecto',
        span: 'standard'
      }
    ]
  },

  community: {
    eyebrow: 'LA COMUNIDAD HACE POSIBLE EL CAMBIO',
    title: 'Este proyecto también puede crecer contigo.',
    paragraphs: [
      'No necesitas ser experto en agricultura ni tener experiencia ecológica. Cada persona tiene algo que aportar: conocimientos, ideas, herramientas, tiempo, entusiasmo o simplemente las ganas de aprender.',
      'Queremos reunir personas que crean que un futuro diferente se construye participando.'
    ],
    contributions: [
      'Conocimientos y oficios',
      'Ideas y creatividad',
      'Herramientas y semillas',
      'Tiempo y manos voluntarias',
      'Entusiasmo por aprender'
    ],
    ctaText: 'QUIERO SER PARTE DE ECO ALDEA',
    image: 'assets/images/editorial/comunidad-tierra-colaboracion.jpg',
    imageAlt:
      'Personas de distintas edades colaborando al aire libre alrededor de una mesa de madera con semillas, tierra y plantas'
  },

  historyGallery: {
    eyebrow: 'GALERÍA DE NUESTRA HISTORIA',
    title: 'Momentos que dan raíz a nuestra comunidad',
    subtitle:
      'Un mosaico vivo de nuestras primeras convocatorias, cosechas, fogatas y espacios compartidos en Nuevo León. Galería preparada para crecer con cada nueva jornada.',
    items: [
      {
        id: 'hist-1',
        src: 'assets/images/comunidad/convocatoria-ecoaldea-monterrey.jpg',
        alt: 'Publicación original de invitación a participar en el proyecto de Eco Aldea en Monterrey y Juárez, Nuevo León',
        caption: 'Convocatoria abierta a la comunidad de Monterrey y Juárez, NL',
        aspect: 'tall',
        tag: 'Convocatoria comunitaria'
      },
      {
        id: 'hist-2',
        src: 'assets/images/comunidad/cosecha-huerto-comunitario.jpg',
        alt: 'Cosecha en el huerto comunitario de Eco Aldea Juárez NL rodeado de plantas y estructuras de madera',
        caption: 'Primeras cosechas y rescate de semillas en el huerto',
        aspect: 'wide',
        tag: 'Huerto y semillas'
      },
      {
        id: 'hist-3',
        src: 'assets/images/comunidad/fogata-convivencia-nocturna.jpg',
        alt: 'Fogata nocturna de convivencia entre participantes de Eco Aldea Juárez NL',
        caption: 'Veladas de fogata, diálogo y planeación de actividades',
        aspect: 'square',
        tag: 'Convivencia nocturna'
      },
      {
        id: 'hist-4',
        src: 'assets/images/comunidad/espacio-convivencia-arboles.jpg',
        alt: 'Mesa bajo los árboles lista para recibir a los colaboradores de Eco Aldea Juárez NL',
        caption: 'Sombra bajo los árboles: punto de reunión al aire libre',
        aspect: 'square',
        tag: 'Espacio natural'
      },
      {
        id: 'hist-5',
        src: 'assets/images/comunidad/crianza-aves-corral.jpg',
        alt: 'Participante cuidando aves de corral en Eco Aldea Juárez NL',
        caption: 'Trabajo diario y cuidado de aves en el proyecto',
        aspect: 'square',
        tag: 'Vida en la tierra'
      },
      {
        id: 'hist-6',
        src: 'assets/images/comunidad/preparacion-espacios-madera.jpg',
        alt: 'Detalle de las camas y cercos de madera reutilizada al atardecer en Eco Aldea Juárez NL',
        caption: 'Construcción con madera reutilizada bajo el sol de la tarde',
        aspect: 'wide',
        tag: 'Construcción colectiva'
      },
      {
        id: 'hist-7',
        src: 'assets/images/comunidad/cesta-huevos-campo.jpg',
        alt: 'Gallinas y huevos de campo recolectados en Eco Aldea Juárez NL',
        caption: 'Soberanía alimentaria y respeto por los ciclos naturales',
        aspect: 'square',
        tag: 'Autosuficiencia'
      }
    ]
  },

  join: {
    eyebrow: 'ÚNETE AL PROYECTO',
    title: 'El futuro se cultiva entre todos.',
    description:
      'Si compartes nuestra visión y quieres conocer más sobre Eco Aldea Juárez NL, escríbenos. Nos encantará conectar contigo y compartirte cómo puedes participar.',
    ctaText: 'CONTACTAR POR WHATSAPP',
    phoneLabel: 'WhatsApp directo: 81 1716 4618',
    note: 'Respuesta directa para integrarte al grupo de colaboradores y conocer las próximas actividades.'
  },

  kidsZone: {
    eyebrow: 'ZONA DE NIÑOS Y FAMILIAS · GUARDIANES DE LA TIERRA',
    title: 'Pequeñas manos que siembran el mañana.',
    subtitle:
      'Creemos que el amor por la naturaleza se aprende tocando la tierra, observando cómo germina una semilla y descubriendo la vida que habita en el huerto en familia.',
    image: 'assets/images/comunidad/zona-ninos-sembrando.jpg',
    imageAlt: 'Niña aprendiendo a sembrar semillas en macetas de barro junto a su familia al aire libre',
    activities: [
      {
        id: 'kids-semilla',
        badge: 'Descubrimiento',
        title: 'Mi Primera Semilla',
        description:
          'Aprender a preparar la tierra, sembrar una semilla criolla, regarla con cuidado y observar día a día cómo despierta su primer brote verde.'
      },
      {
        id: 'kids-exploradores',
        badge: 'Biodiversidad',
        title: 'Exploradores del Huerto',
        description:
          'Conocer a los aliados invisibles de la naturaleza: abejas polinizadoras, catarinas, lombrices de composta y aves de Nuevo León.'
      },
      {
        id: 'kids-arte',
        badge: 'Creatividad natural',
        title: 'Arte con Hojas, Tierra y Semillas',
        description:
          'Crear figuras, herbarios y murales efímeros utilizando hojas secas caídas, ramitas, arcilla y texturas del entorno sin dañar las plantas.'
      },
      {
        id: 'kids-cuentos',
        badge: 'Convivencia familiar',
        title: 'Cuentos yRondas de la Tierra',
        description:
          'Historias al aire libre sobre el ciclo del agua, el cuidado de los animales de corral y el valor de compartir en comunidad.'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: '1. ¿Qué necesita una semilla para despertar y convertirse en una planta?',
        options: [
          { text: 'Tierra fértil, agua con medida y luz suave del sol', correct: true },
          { text: 'Estar guardada en una bolsa de plástico al sol directo', correct: false },
          { text: 'Refresco y mucha azúcar', correct: false }
        ],
        explanation:
          '¡Exacto! Con tierra viva, humedad equilibrada y el calor amable del sol, la semilla despierta y echa raíces.'
      },
      {
        id: 'q2',
        question: '2. ¿Por qué las lombrices y las abejas son grandes amigas de nuestro huerto?',
        options: [
          { text: 'Porque ayudan a nutrir la tierra y a polinizar las flores para que den fruto', correct: true },
          { text: 'Porque pintan las hojas de colores con pinceles', correct: false },
          { text: 'No ayudan en nada al jardín', correct: false }
        ],
        explanation:
          '¡Muy bien! Las lombrices crean humus fértil en el suelo y las abejas llevan el polen de flor en flor.'
      },
      {
        id: 'q3',
        question: '3. ¿Qué podemos hacer con las cáscaras de fruta y las hojas secas caídas?',
        options: [
          { text: 'Hacer composta para devolver nutrientes naturales a la tierra', correct: true },
          { text: 'Tirarlas en el río o quemarlas con plástico', correct: false },
          { text: 'Esconderlas debajo de una alfombra', correct: false }
        ],
        explanation:
          '¡Excelente, Guardián de la Tierra! La composta transforma los restos orgánicos en abono lleno de vida.'
      }
    ]
  },

  blog: {
    eyebrow: 'BLOG Y BITÁCORA DE SABERES ABIERTOS',
    title: 'Conocimiento vivo para cultivar en casa y en comunidad.',
    subtitle:
      'Guías prácticas, reflexiones y aprendizajes que compartimos en Eco Aldea Juárez NL para avanzar hacia una vida más consciente y autosuficiente.',
    articles: [
      {
        id: 'blog-conservar-semillas',
        category: 'semillas',
        categoryLabel: 'Conservación de Semillas',
        readTime: '4 min de lectura',
        title: 'El tesoro que guardamos en las manos: ¿Cómo conservar nuestras propias semillas?',
        excerpt:
          'Las mejores semillas no se compran en un empaque industrial: se heredan, se rescatan y se guardan con paciencia. Conoce los 4 pasos esenciales para resguardarlas.',
        image: 'assets/images/comunidad/cosecha-huerto-comunitario.jpg',
        imageAlt: 'Cosecha de fruto maduro en el huerto comunitario de Eco Aldea Juárez NL para extracción de semillas',
        content: [
          'Muchos compañeros de la comunidad nos preguntan: ¿Adónde se consiguen las semillas? ¿Cómo dar el salto hacia una vida menos estandarizada y empezar a cultivar nuestra propia soberanía alimentaria? La respuesta más sincera es que las mejores semillas se rescatan, se cuidan y se comparten con paciencia.',
          '1. La Cosecha en su Punto Justo: Espera siempre a que el fruto o la flor alcancen su madurez completa en la planta, preferiblemente en un día seco y soleado. La naturaleza misma te avisa cuando están listas para ser recolectadas.',
          '2. El Secado con Respeto: Extiende las semillas sobre una superficie limpia (papel sin tinta o una bandeja de madera) en un lugar fresco, sombreado y con buena ventilación. Nunca las expongas al sol directo y agresivo del mediodía para no dañar su germen interior.',
          '3. El Guardado Sagrado: Una vez completamente secas, guárdalas en frascos de vidrio herméticos, sobres de papel o bolsitas de tela natural, lejos de la humedad y del calor.',
          '4. La Memoria del Tiempo: Añade siempre una etiqueta con el nombre de la variedad y la fecha de cosecha. Cada semilla que guardamos es un acto de resistencia frente a lo desechable y un paso firme hacia nuestra autonomía.'
        ]
      },
      {
        id: 'blog-composta-suelo-vivo',
        category: 'suelo',
        categoryLabel: 'Compostaje y Suelo Vivo',
        readTime: '5 min de lectura',
        title: 'De residuos a tierra fértil: Guía sencilla de compostaje para el clima de Nuevo León',
        excerpt:
          'Aprende a equilibrar hojas secas ("material café") y restos de cocina ("material verde") manteniendo la humedad ideal frente al calor del norte.',
        image: 'assets/images/editorial/filosofia-semillas-tierra.jpg',
        imageAlt: 'Tierra negra fértil y húmeda sostenida entre las manos con un brote verde',
        content: [
          'Un huerto sano empieza siempre por un suelo vivo. En lugar de ver las cáscaras de verdura, restos de café o las hojas secas de los árboles como basura, en la eco aldea los reconocemos como el alimento principal de la tierra.',
          'El equilibrio entre Café y Verde: Para que una composta huela a tierra de bosque y nunca genere malos olores, combina aproximadamente 2 partes de material seco (hojas secas, aserrín natural sin barniz, cartón sin tinta, paja) por cada parte de material fresco (cáscaras de frutas, verduras y poda verde).',
          'Cuidado con el sol de Nuevo León: Debido a que en Juárez y Monterrey las temperaturas pueden ser altas y el aire seco, ubica tu compostera bajo la sombra de un árbol o cúbrela con madera o lona transpirable. Revisa cada semana que tenga la humedad de una esponja exprimida: húmeda al tacto, pero sin escurrir agua.',
          'En pocos meses tendrás tierra oscura, suelta y rica en microorganismos lista para nutrir tus camas de cultivo y macetas.'
        ]
      },
      {
        id: 'blog-camas-madera-reutilizada',
        category: 'huertos',
        categoryLabel: 'Cultura de la Tierra',
        readTime: '4 min de lectura',
        title: 'Camas de cultivo con madera reutilizada: Construir con lo que tenemos a la mano',
        excerpt:
          'Cómo aprovechar tarimas y maderas recuperadas para delimitar espacios de siembra ordenados, accesibles y resistentes.',
        image: 'assets/images/comunidad/preparacion-espacios-madera.jpg',
        imageAlt: 'Camas de cultivo y estructuras armadas con tarimas de madera en Eco Aldea Juárez NL',
        content: [
          'Construir un espacio agroecológico no requiere grandes presupuestos industriales; requiere creatividad, colaboración y respeto por los recursos disponibles. Las tarimas de madera recuperada (tratadas únicamente con calor, sello HT) son extraordinarias aliadas en el huerto.',
          'Ventajas de las camas elevadas: Permiten concentrar la tierra fértil y la composta exactamente donde crecerán las raíces, mejoran el drenaje cuando llueve fuerte, facilitan el trabajo sin pisar ni compactar el suelo y ayudan a mantener el orden en las jornadas colectivas.',
          'Recomendación práctica: Al armar tus bancales, coloca una base de cartón limpio y ramas pequeñas en el fondo (técnica inspirada en Hügelkultur) antes de añadir la mezcla de tierra y composta; esto retendrá la humedad por mucho más tiempo.'
        ]
      },
      {
        id: 'blog-ninos-naturaleza-familia',
        category: 'familia',
        categoryLabel: 'Niños y Familia',
        readTime: '3 min de lectura',
        title: 'Por qué invitar a las niñas y niños a ensuciarse las manos en la tierra',
        excerpt:
          'Sembrar en familia despierta la paciencia, la empatía por los seres vivos y la alegría de ver crecer aquello que cuidamos juntos.',
        image: 'assets/images/comunidad/zona-ninos-sembrando.jpg',
        imageAlt: 'Niña sonriendo mientras planta semillas junto a su familia en una mesa de madera',
        content: [
          'En un mundo cada vez más acelerado y lleno de pantallas, regalar a las niñas y niños una mañana bajo los árboles, tocando la tierra y observando una semilla germinar es una de las experiencias más valiosas que podemos compartir.',
          'Cuando un niño siembra una semilla, descubre que las cosas importantes toman tiempo: que no basta con presionar un botón, sino que hay que regar, observar el sol, cuidar a los insectos polinizadores y esperar con alegría.',
          'En Eco Aldea Juárez NL queremos que las familias encuentren un entorno seguro, sencillo y humano donde aprender juntos sea parte natural de la convivencia.'
        ]
      }
    ]
  },

  faq: {
    eyebrow: 'PREGUNTAS FRECUENTES · GUÍA DE PARTICIPACIÓN',
    title: 'Todo lo que necesitas saber para sumarte',
    items: [
      {
        q: '¿Necesito tener experiencia en agricultura o ecología para participar?',
        a: 'No necesitas ninguna experiencia previa. Eco Aldea Juárez NL es un espacio de aprendizaje colectivo: aquí aprendemos juntos en la práctica. Puedes aportar tus ganas de aprender, tus manos, tus ideas o cualquier oficio que conozcas.'
      },
      {
        q: '¿Puedo asistir con mis hijos o en familia?',
        a: '¡Por supuesto! La convivencia intergeneracional es parte esencial de nuestra visión. Contamos con actividades pensadas para que niñas, niños y adultos aprendan juntos el respeto por las semillas, las plantas y los animales.'
      },
      {
        q: '¿Qué puedo llevar o aportar a las jornadas comunitarias?',
        a: 'Para tu comodidad personal te sugerimos traer sombrero o gorra, agua para hidratarte, ropa cómoda de trabajo y protector solar. Si deseas aportar al proyecto, siempre son bienvenidas semillas criollas, herramientas de jardín, madera reutilizable o simplemente tu entusiasmo.'
      },
      {
        q: '¿Cómo me integro al grupo oficial de colaboradores?',
        a: 'Es muy sencillo: haz clic en cualquiera de los botones de WhatsApp de esta página (número 8117164618) y envíanos el mensaje inicial. Con gusto te compartiremos la organización de los grupos y las próximas actividades en Nuevo León.'
      }
    ]
  },

  footer: {
    brand: 'ECO ALDEA JUÁREZ NL',
    tagline: 'Cultivando comunidad, conciencia y conexión con la naturaleza.',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Nuestro proyecto', href: '#filosofia' },
      { label: 'Actividades', href: '#actividades' },
      { label: 'Galería', href: '#galeria' },
      { label: 'Participa', href: '#unete' },
      { label: 'WhatsApp', href: 'https://wa.me/528117164618?text=Hola%2C%20conoc%C3%AD%20Eco%20Aldea%20Ju%C3%A1rez%20NL%20a%20trav%C3%A9s%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20el%20proyecto%20y%20c%C3%B3mo%20puedo%20participar.', external: true }
    ],
    socialPlaceholderNote:
      'Canales comunitarios en actualización · Contáctanos vía WhatsApp para sumarte al grupo oficial.',
    socialLinks: [
      // Preparados para activar cuando se proporcionen las URLs definitivas:
      { id: 'facebook', label: 'Comunidad en Facebook', url: '', active: false },
      { id: 'instagram', label: 'Instagram', url: '', active: false }
    ],
    credits: 'Iniciativa de apoyo digital por ARCANO SOLUTIONS.'
  }
};
