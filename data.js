// ===== BASE DE DATOS COMPLETA DE CONSEJOS =====

const adviceDatabase = {
    general: {
        title: "Análisis General de tu Ciudad",
        icon: "🏘️",
        priority: "high",
        tips: [
            "Mantén un balance entre zonas residenciales, comerciales e industriales (proporción 4:2:1)",
            "Asegúrate de que cada edificio esté cubierto por servicios básicos (agua, electricidad, alcantarillado)",
            "Deja espacios entre edificios para futuras expansiones y decoraciones",
            "Actualiza regularmente tus edificios residenciales para aumentar población",
            "Mantén la felicidad de los ciudadanos por encima del 90% para máxima eficiencia",
            "Revisa diariamente la barra de demanda para saber qué tipo de zona necesitas",
            "No construyas más edificios de los que puedas mantener con servicios",
            "Invierte en almacenamiento antes que en expansión territorial"
        ]
    },
    layout: {
        title: "Optimización de Distribución",
        icon: "🗺️",
        priority: "high",
        tips: [
            "Coloca las zonas industriales en las esquinas o bordes de la ciudad para minimizar contaminación",
            "Agrupa los edificios residenciales en bloques de 4x4 para mejor cobertura de servicios",
            "Crea 'distritos' temáticos: residencial, comercial, industrial, entretenimiento",
            "Usa carreteras principales (avenidas) para dividir zonas y carreteras secundarias dentro de ellas",
            "Deja espacio cerca de la costa o montañas para edificios especiales y épicos",
            "Planifica zonas de expansión antes de construir todo junto",
            "Crea un 'centro de ciudad' con edificios gubernamentales y especiales",
            "Usa el patrón de cuadrícula para maximizar espacio y facilitar expansión",
            "Deja corredores verdes con parques entre distritos para mejor estética"
        ]
    },
    services: {
        title: "Gestión de Servicios",
        icon: "🚒",
        priority: "high",
        tips: [
            "Coloca estaciones de policía y bomberos estratégicamente para cubrir toda la ciudad",
            "Los hospitales deben estar céntricos para mejor acceso desde todos los puntos",
            "Mejora los servicios antes de expandir demasiado la ciudad",
            "Usa parques y plazas para aumentar el valor del terreno (+10% impuestos)",
            "Los servicios de élite (departamento de bomberos) cubren un 50% más de área",
            "Activa servicios premium solo cuando realmente los necesites para ahorrar simoleones",
            "Cada edificio de servicios tiene un radio de cobertura específico - revísalo antes de construir",
            "Prioridad de construcción: 1.Agua/Electricidad 2.Alcantarillado 3.Basura 4.Emergencias",
            "Los edificios especializados (hospital universitario) dan bonos adicionales"
        ]
    },
    aesthetics: {
        title: "Mejora Estética",
        icon: "✨",
        priority: "medium",
        tips: [
            "Usa árboles y parques para crear áreas verdes entre edificios (mejora felicidad +5%)",
            "Coloca fuentes y estatuas en intersecciones principales como puntos focales",
            "Crea un paseo marítimo si tienes costa con edificios de playa",
            "Alterna edificios de diferentes alturas para variedad visual",
            "Usa edificios especiales como puntos focales en plazas centrales",
            "Mantén un tema de color consistente en cada distrito",
            "Las carreteras en patrón de cuadrícula se ven más organizadas",
            "Añade iluminación decorativa en calles principales (mejora valor +8%)",
            "Crea 'plazas' con edificios especiales rodeados de decoraciones",
            "Usa edificios de la misma era arquitectónica juntos para coherencia visual"
        ]
    },
    traffic: {
        title: "Optimización de Tráfico",
        icon: "🚗",
        priority: "medium",
        tips: [
            "Construye avenidas en las arterias principales de la ciudad (mayor capacidad)",
            "Añade servicios de transporte (buses, tranvías) en zonas congestionadas",
            "Evita callejones sin salida, crea circuitos cerrados para mejor flujo",
            "Coloca el departamento de transporte para desbloquear mejoras avanzadas",
            "Las rotondas distribuyen mejor el tráfico que intersecciones simples",
            "Separa el tráfico industrial del residencial con rutas alternas",
            "Construye helipuertos y muelles para reducir tráfico terrestre",
            "Actualiza a carreteras de 6 carriles en zonas de alto tráfico",
            "El transporte público reduce tráfico en un 30% en su área de cobertura",
            "Planifica rutas de evacuación para desastres con avenidas amplias"
        ]
    },
    economy: {
        title: "Gestión Económica",
        icon: "💰",
        priority: "low",
        tips: [
            "Produce artículos constantemente en fábricas para tener stock disponible",
            "Vende items de alta demanda en el mercado global por buen precio (revisa tendencias)",
            "Completa envíos de cargueros para obtener simoleones y objetos raros",
            "Participa en el Trade HQ para comprar items baratos y revenderlos",
            "No construyas más edificios de los que puedas mantener felices (pierdes impuestos)",
            "Invierte en ampliar almacenamiento antes que en expansión de terreno",
            "Guarda llaves de oro para comprar edificios épicos en ofertas especiales",
            "Los edificios comerciales generan items gratuitos - mantenlos activos",
            "Completa tareas del ayuntamiento para recompensas diarias",
            "Participa en Contest of Mayors para premios semanales grandes",
            "Vende materiales de construcción excedentes por buen dinero"
        ]
    },
    expansion: {
        title: "Estrategia de Expansión",
        icon: "🌍",
        priority: "medium",
        tips: [
            "Prioriza expandir hacia áreas con recursos naturales (agua, montañas)",
            "Completa misiones de expansión para obtener items gratis",
            "Guarda items de expansión específicos en lugar de venderlos",
            "Expande en dirección a regiones especializadas que planeas desbloquear",
            "No expandas demasiado rápido - es costoso mantener áreas grandes",
            "Usa explosiones estratégicas para remodelar terreno montañoso",
            "Las áreas cercanas al agua son perfectas para edificios épicos de playa",
            "Cada expansión aumenta el costo de la siguiente - planifica bien",
            "Participa en eventos para obtener tokens de expansión gratuitos",
            "Expande cuando tengas suficiente población para llenar el nuevo espacio"
        ]
    },
    specializations: {
        title: "Guía de Especializaciones",
        icon: "🏭",
        priority: "medium",
        tips: [
            "Desbloquea regiones cuando tengas recursos para mantenerlas activamente",
            "Las regiones montañosas generan materiales de construcción valiosos",
            "Las regiones de playa aumentan turismo y generan más simoleones",
            "Regiones verdes son ideales para producción sostenible y felicidad",
            "Cada región requiere su propia gestión de servicios y transporte",
            "Conecta regiones con autopistas para mejor acceso",
            "Especializa cada región en un tipo de producción específico",
            "Las regiones educativas aumentan la capacidad de edificios épicos",
            "Participa en desafíos de región para desbloquear edificios exclusivos",
            "Balancea tu tiempo entre ciudad principal y regiones - no descuides ninguna"
        ]
    }
};

// ===== CONSEJOS POR NIVEL DE JUGADOR =====

const levelAdvice = {
    beginner: {
        title: "Consejos para Principiantes (Nivel 1-17)",
        icon: "🌱",
        tips: [
            "🎯 ENFÓCATE EN LO BÁSICO: No te apresures a subir de nivel demasiado rápido",
            "🏭 Construye 2-3 fábricas básicas y mantenlas produciendo constantemente",
            "💾 PRIORIDAD #1: Expande tu almacenamiento a 80+ slots antes de nivel 15",
            "🏠 Mantén entre 15-25 edificios residenciales - calidad sobre cantidad",
            "💰 Vende materiales básicos (madera, metal, clavos) en el Trade HQ por buen dinero",
            "❌ NO gastes SimCash en acelerar producción - úsalo solo para slots permanentes",
            "🚫 Evita desbloquear demasiados edificios especiales temprano (cuestan mantener)",
            "📦 Completa todos los envíos de cargueros posibles - dan excelentes recompensas",
            "🎁 Guarda las llaves doradas para ofertas especiales o edificios épicos",
            "⏰ Juega en sesiones cortas varias veces al día en lugar de maratones largas"
        ]
    },
    intermediate: {
        title: "Consejos para Nivel Intermedio (18-30)",
        icon: "🏗️",
        tips: [
            "🏆 Participa en Contest of Mayors - elige tareas de edificios y comercio",
            "🏭 Desbloquea regiones especializadas pero mantenlas pequeñas al inicio",
            "💾 Tu almacenamiento debe estar en 120+ slots en este nivel",
            "🏛️ Comienza a planificar ubicaciones para edificios épicos",
            "💼 Únete a un club activo para participar en Club Wars",
            "🎯 Especializa tu producción: enfócate en items de alta demanda",
            "🚁 Desbloquea aeropuerto para envíos internacionales (mejores recompensas)",
            "⚡ Mejora servicios a versiones élite para mejor cobertura",
            "🗺️ Reorganiza tu ciudad si es necesario - invierte en un buen layout ahora",
            "💎 Guarda items de expansión raros en lugar de vender",
            "📊 Balancea población vs felicidad - no solo crezcas por crecer"
        ]
    },
    advanced: {
        title: "Consejos para Nivel Avanzado (30+)",
        icon: "🏆",
        tips: [
            "🏰 Enfócate en edificios épicos - transforman completamente tu economía",
            "💾 Objetivo: 200+ slots de almacenamiento para gestión eficiente",
            "🏆 Compite en ligas altas de Contest of Mayors para mejores premios",
            "🎖️ Participa activamente en Club Wars - coordina con tu equipo",
            "🏭 Maximiza producción en regiones especializadas",
            "💰 Domina el Trade HQ: compra barato en la madrugada, vende caro en horas pico",
            "🎯 Completa colecciones de edificios especiales para bonificaciones permanentes",
            "⚡ Optimiza tu ciudad para desastres - generan muchos puntos en competencias",
            "🌟 Crea 'zonas épicas' completas con múltiples edificios épicos juntos",
            "📈 Usa calculadoras para optimizar impuestos vs felicidad",
            "🎨 Enfócate en estética - una ciudad bonita aumenta tu motivación para jugar",
            "🔄 Reorganiza estratégicamente cada 2-3 meses para nuevas metas"
        ]
    }
};

// ===== DATOS PARA CALCULADORAS =====

const gameData = {
    buildings: {
        basic: { minPop: 10, maxPop: 20, avgTax: 150 },
        premium: { minPop: 20, maxPop: 40, avgTax: 300 },
        epic: { minPop: 50, maxPop: 100, avgTax: 800 }
    },
    services: {
        fire: { coverage: 4, cost: 1500 },
        police: { coverage: 4, cost: 1500 },
        health: { coverage: 5, cost: 2000 },
        park: { coverage: 2, cost: 500 }
    },
    factories: {
        basic: { slots: 2, itemsPerHour: 4 },
        expanded: { slots: 3, itemsPerHour: 6 },
        full: { slots: 5, itemsPerHour: 10 }
    },
    expansion: {
        baseCost: 3000,
        multiplier: 1.15
    }
};

// ===== TIPS RÁPIDOS ALEATORIOS =====

const quickTips = [
    "💡 Los edificios épicos de playa generan un 40% más de impuestos",
    "💡 Completa el carguero de vu items para desbloquear desastres",
    "💡 El mejor momento para comprar en Trade HQ es entre 3-6 AM",
    "💡 Los parques aumentan el valor del terreno en un radio de 2 casillas",
    "💡 Puedes tener hasta 5 regiones especializadas activas",
    "💡 Los edificios parisinos dan bonificación de población del 20%",
    "💡 Guarda SimCash para ofertas de Black Friday (descuentos 50%)",
    "💡 El alcalde del desafío semanal da 30 llaves doradas",
    "💡 Los edificios de educación aumentan efectividad de edificios épicos",
    "💡 Puedes almacenar hasta 999 unidades de cada item"
];