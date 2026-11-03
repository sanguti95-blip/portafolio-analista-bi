/**
 * portfolioData.js
 * Datos ejecutivos destilados para el Portafolio Bento & CV de Milton Sánchez Gutiérrez
 */

window.PORTFOLIO_DATA = {
    defaultContact: {
        fullName: "Milton Sánchez Gutiérrez",
        roleTitle: "Analista Comercial & Pricing · Administrador de Operaciones Retail",
        location: "Heredia, Costa Rica",
        email: "sanguti95@gmail.com",
        phone: "+506 6375834",
        github: "https://github.com/sanguti95-blip",
        githubLabel: "github.com/sanguti95-blip",
        linkedin: "https://www.linkedin.com/in/milton-s%C3%A1nchez-guti%C3%A9rrez-606863186/",
        linkedinLabel: "linkedin.com/in/milton-sánchez-gutiérrez-606863186",
        portfolioUrl: "https://sanguti95-blip.github.io/portafolio-analista-bi/"
    },

    summary: {
        headline: "+8 años transformando operaciones retail y perecederos mediante Pricing, Category Management y Business Intelligence.",
        fullProfile: "Profesional con más de 8 años de trayectoria en el sector retail y consumo masivo, combinando experiencia directa en administración de puntos de venta y ruta mayorista con el desarrollo e implementación de soluciones de Business Intelligence, analítica de datos y modelado financiero. Especializado en análisis de precios, elasticidad y márgenes brutos, control y reducción sistemática de mermas (metodologías 5S y 4DX), racionalización de inventarios (ABC / Min-Max / GMROI) y automatización de reportería operativa mediante SQL, Python, Power BI y arquitecturas web ligeras."
    },

    domains: [
        { id: "all", label: "Vista Global" },
        { id: "turnaround", label: "Turnaround & Comercial" },
        { id: "mermas", label: "Mermas & Rentabilidad" },
        { id: "gmroi", label: "Inventario & GMROI" },
        { id: "bi", label: "BI, SQL & Pricing" }
    ],

    kpis: [
        {
            id: "kpi-turnaround",
            domain: "turnaround",
            metric: "+12.5%",
            unit: "YoY Q3",
            label: "Turnaround de Ventas",
            delta: "De -14% (Q1) a picos +30%",
            deltaTone: "positive",
            popover: "Reversión de contracción inicial de -14% en Q1 hasta estabilizar en Q2, logrando +12.5% en Q3 (picos mensuales de +30%) y +7.7% al inicio de Q4 junto a la Gerencia Comercial.",
            bars: [18, 48, 82, 100, 74]
        },
        {
            id: "kpi-merma",
            domain: "mermas",
            metric: "-50.6%",
            unit: "Merma",
            label: "Índice 4.75% → 2.32%",
            delta: "+9.3% Utilidad Neta",
            deltaTone: "positive",
            popover: "Reducción de merma operativa de 4.75% a 2.32% sobre ventas e incremento de +9.3% en utilidad neta post-merma, ampliando de 3 a 4 recepciones matutinas con la Gerencia Comercial.",
            bars: [100, 84, 68, 55, 49]
        },
        {
            id: "kpi-gmroi",
            domain: "gmroi",
            metric: "2.02x",
            unit: "GMROI Neto",
            label: "Rotación 4.3x / mes",
            delta: "-12% Capital Inmovilizado",
            deltaTone: "positive",
            popover: "Ejecución de Category Management y depuración de catálogo con la Gerencia Comercial: -12% capital inmovilizado, 4.3 vueltas/mes y GMROI Neto de 2.02x.",
            bars: [58, 70, 82, 92, 100]
        },
        {
            id: "kpi-bi-layout",
            domain: "bi",
            metric: "+35%",
            unit: "Rotación Clave",
            label: "BI & Señalización Piso",
            delta: "Dashboard Real-Time",
            deltaTone: "positive",
            popover: "Implementación de dashboard gerencial automatizado en tiempo real (ventas, márgenes, mermas y GMROI) y modernización de layout/precios en piso.",
            bars: [50, 62, 75, 88, 100]
        },
        {
            id: "kpi-trafico",
            domain: "turnaround",
            metric: "+6.4%",
            unit: "Tráfico",
            label: "Esquema 2 Turnos",
            delta: "100% Cobertura Apertura",
            deltaTone: "positive",
            popover: "Diseño de nuevo esquema de 2 turnos rotativos que consolidó al equipo operativo, mejoró el clima laboral y elevó el tráfico de clientes en +6.4%.",
            bars: [65, 74, 83, 91, 100]
        }
    ],

    charts: {
        turnaroundSeries: {
            labels: ["Q1 (Base)", "Q2 (Estabilización)", "Q3 (Crecimiento)", "Pico Mensual Q3", "Inicio Q4"],
            values: [-14.0, 0.5, 12.5, 30.0, 7.7]
        },
        shrinkageSeries: {
            labels: ["Índice Base", "Mes 2 (Recepción 4x)", "Mes 3 (Control Piso)", "Mes 4 (5S / 4DX)", "Índice Actual"],
            shrinkage: [4.75, 3.90, 3.10, 2.55, 2.32],
            netProfitLift: [0.0, 2.8, 5.4, 7.8, 9.3]
        }
    },

    experience: [
        {
            id: "exp-countryhouse",
            role: "Administrador de Operaciones y Gestión Comercial",
            company: "Country House Santo Domingo · Corporación Interfrutd",
            location: "Santo Domingo, Heredia",
            period: "Enero 2026 – Presente",
            isCurrent: true,
            domains: ["turnaround", "mermas", "gmroi", "bi"],
            brief: "Gestión integral de unidad retail y ruta mayorista liderando la operación en piso, el equipo de trabajo y el control de inventarios en alineación estratégica con la Gerencia Comercial.",
            pills: [
                { label: "Ventas Q3", value: "+12.5% (Pico +30%)" },
                { label: "Merma", value: "-50.6% (4.75%→2.32%)" },
                { label: "GMROI Neto", value: "2.02x · Rot 4.3x" },
                { label: "Líneas Clave", value: "+35% Rotación" }
            ],
            bullets: [
                {
                    title: "Recuperación y Crecimiento Comercial (Turnaround)",
                    text: "En conjunto con la Gerencia Comercial, revertimos una contracción inicial de -14% en ventas (Q1) hasta estabilizar la operación en el Q2 y lograr un crecimiento interanual de +12.5% en el Q3 (con picos mensuales de +30%) y +7.7% al inicio del Q4."
                },
                {
                    title: "Control de Mermas y Rentabilidad Operativa",
                    text: "Reduje la merma operativa un -50.6% (bajando el índice de 4.75% a 2.32% sobre las ventas) e incrementé la utilidad neta post-merma en +9.3%, combinando la supervisión de calidades en piso con la optimización de abastecimiento (de 3 a 4 recepciones matutinas coordinadas con la Gerencia Comercial)."
                },
                {
                    title: "Optimización de Inventario y GMROI",
                    text: "En coordinación con la Gerencia Comercial, ejecutamos la gestión por categorías (Category Management) y depuración de catálogo, reduciendo el capital inmovilizado en -12%, manteniendo una rotación de 4.3 veces al mes y elevando el GMROI Neto a 2.02x."
                },
                {
                    title: "Business Intelligence y Ejecución en Piso",
                    text: "Desarrollé e implementé un dashboard gerencial automatizado para el control en tiempo real de KPIs (ventas, márgenes, mermas y GMROI) y modernicé la señalización de precios y layout de tienda, impulsando en +35% la rotación de líneas clave."
                },
                {
                    title: "Reestructuración de Turnos y Liderazgo de Equipo",
                    text: "Diseñé e implementé un nuevo esquema de 2 turnos rotativos y consolidé al equipo operativo, mejorando la calidad de vida del personal, asegurando la cobertura total de tienda desde la apertura y elevando el tráfico de clientes en +6.4%."
                }
            ]
        },
        {
            id: "exp-automercado",
            role: "Jefe de Departamento",
            company: "AutoMercado",
            location: "Costa Rica",
            period: "Noviembre 2021 – Diciembre 2025",
            isCurrent: false,
            domains: ["mermas", "gmroi", "turnaround"],
            brief: "Coordinación y gestión operativa de departamento en cadena de supermercados premium, garantizando estándares de calidad, frescura y servicio al cliente.",
            pills: [
                { label: "Trayectoria", value: "4 Años 2 Meses" },
                { label: "Formato", value: "Retail Premium" },
                { label: "Foco", value: "Rotación & Layouts" }
            ],
            bullets: [
                {
                    title: "Operación en Supermercado Premium",
                    text: "Coordinación y gestión operativa de departamento en cadena de supermercados premium, garantizando estándares de calidad, frescura y servicio al cliente."
                },
                {
                    title: "Control de Rotación e Inventarios Cíclicos",
                    text: "Control de rotación de producto, ejecución de inventarios cíclicos, supervisión de layouts en góndola y cumplimiento estricto de normativas de manipulación de alimentos."
                },
                {
                    title: "Productividad y Abastecimiento",
                    text: "Manejo de indicadores de productividad, control de quiebres de stock y optimización de flujos de reposición."
                }
            ]
        },
        {
            id: "exp-freshmarket",
            role: "Asistente Administrativo",
            company: "Fresh Market",
            location: "Costa Rica",
            period: "2018 – Noviembre 2021",
            isCurrent: false,
            domains: ["gmroi", "bi"],
            brief: "Soporte en control administrativo de tienda, cuadratura de cajas, recepción y verificación de órdenes de compra frente a facturas de proveedores.",
            pills: [
                { label: "Trayectoria", value: "+3.5 Años" },
                { label: "Control", value: "OC vs Facturas" },
                { label: "Finanzas", value: "Ventas & Márgenes" }
            ],
            bullets: [
                {
                    title: "Control Administrativo y Proveedores",
                    text: "Soporte en control administrativo de tienda, cuadratura de cajas, recepción y verificación de órdenes de compra frente a facturas de proveedores."
                },
                {
                    title: "Conciliación de Inventarios y Márgenes",
                    text: "Seguimiento a inventarios, conciliación de diferencias y soporte en reportería básica de ventas y márgenes."
                }
            ]
        }
    ],

    projects: [
        {
            id: "proj-interfrutd-pricing",
            tag: "PRICING B2B & OTIF",
            title: "Suite Comercial, Pricing B2B, COGS & Monitor OTIF",
            org: "Corporación Interfrutd",
            domain: "bi",
            liveUrl: "https://sanguti95-blip.github.io/analista-pricing-interfrutd/",
            repoUrl: "https://github.com/sanguti95-blip/analista-pricing-interfrutd",
            kpis: [
                { label: "Catálogo", value: "211 SKUs" },
                { label: "Canales", value: "4 Listas B2B" },
                { label: "Benchmark", value: "PIMA CENADA" },
                { label: "Logística", value: "SLA OTIF ≥98%" }
            ],
            summary: "Simulador en vivo de márgenes por tipo de cadena (Supermercados, HORECA, Mayoristas, Detalle), cálculo de COGS, cotizador B2B y auditoría de Fill Rate contra pedido.",
            details: [
                "Política interactiva de márgenes por cadena con recálculo instantáneo sobre 211 frutas y verduras.",
                "Benchmark competitivo frente a precios mayoristas de PIMA CENADA y supermercados nacionales.",
                "Cotizador B2B con exportación multipestaña a Excel (.xlsx) y conversión directa a Orden de Compra.",
                "Monitor de nivel de servicio OTIF / Fill Rate para pedidos contra entrega sin inventario ocioso."
            ],
            stack: ["Pricing & COGS", "Benchmark CENADA", "JavaScript ES6", "SheetJS", "Chart.js"]
        },
        {
            id: "proj-countryhouse-bi",
            tag: "FULL-STACK RETAIL BI",
            title: "BI & Analytics Dashboard (Country House)",
            org: "Country House Santo Domingo",
            domain: "bi",
            liveUrl: "https://github.com/sanguti95-blip/retail-analytics-dashboard",
            repoUrl: "https://github.com/sanguti95-blip/retail-analytics-dashboard",
            kpis: [
                { label: "Merma", value: "-50.6%" },
                { label: "GMROI Neto", value: "2.02x" },
                { label: "Rotación", value: "4.3x / mes" },
                { label: "Motor DB", value: "PostgreSQL" }
            ],
            summary: "Dashboard gerencial en tiempo real para control de ventas, márgenes, mermas y GMROI conectado a Supabase PostgreSQL y Google Sheets.",
            details: [
                "Centralización automatizada de registros dispersos de venta, costo de compra y existencias.",
                "Clasificación ABC de inventario, alertas de cobertura Min-Max y matriz estratégica GMROI.",
                "Soporte directo para lograr el turnaround de ventas (+12.5% Q3) y reducir la merma de 4.75% a 2.32%."
            ],
            stack: ["Node.js", "Supabase PostgreSQL", "SQL", "Chart.js", "Apps Script"]
        },
        {
            id: "proj-codisa-401",
            tag: "CATEGORY MANAGEMENT",
            title: "Racionalización SKU & Depuración (CODISA 401)",
            org: "Bodega Central CODISA 401",
            domain: "gmroi",
            liveUrl: "https://github.com/sanguti95-blip/retail-analytics-dashboard",
            repoUrl: "https://github.com/sanguti95-blip/retail-analytics-dashboard",
            kpis: [
                { label: "Auditados", value: "69 SKUs" },
                { label: "Capital", value: "-12% Inmovilizado" },
                { label: "Bodega", value: "CODISA 401" },
                { label: "Modelo", value: "ABC & Cobertura" }
            ],
            summary: "Estudio técnico sobre rotación y costos de almacenamiento de 69 SKUs lentos para liquidación estratégica y liberación de capital.",
            details: [
                "Evaluación financiera de días de cobertura, velocidad de salida y margen de contribución por SKU.",
                "Dictamen ejecutivo entregado a la Gerencia Comercial para descontinuación y liberación de espacio en bodega."
            ],
            stack: ["Excel Avanzado", "SQL", "Category Management", "GMROI", "Pareto ABC"]
        },
        {
            id: "proj-audit-automation",
            tag: "OPERACIONES & 5S / 4DX",
            title: "Automatización de Auditorías & Control en Piso",
            org: "Operaciones Retail",
            domain: "mermas",
            liveUrl: "https://github.com/sanguti95-blip",
            repoUrl: "https://github.com/sanguti95-blip",
            kpis: [
                { label: "Formato", value: "100% Digital" },
                { label: "Recepciones", value: "3 → 4 Matutinas" },
                { label: "Utilidad Neta", value: "+9.3% Post-Merma" },
                { label: "Método", value: "5S + 4DX" }
            ],
            summary: "Digitalización de controles de calidades, mermas e inventarios cíclicos en piso, eliminando formularios en papel.",
            details: [
                "Captura móvil estandarizada en recepción matutina y auditoría diaria de perecederos.",
                "Trazabilidad inmediata de causas de merma y cumplimiento de estándares operativos por turno."
            ],
            stack: ["Google Apps Script", "JavaScript", "Google Forms", "5S", "4DX"]
        }
    ],

    skills: [
        { name: "Pricing, Elasticidad, COGS & GMROI", category: "Comercial", score: 96, domain: "bi" },
        { name: "Control de Mermas & Ejecución (5S / 4DX)", category: "Operaciones", score: 96, domain: "mermas" },
        { name: "Category Management & Racionalización ABC", category: "Inventario", score: 95, domain: "gmroi" },
        { name: "Excel Avanzado (Power Query & Modelado)", category: "Analítica", score: 95, domain: "bi" },
        { name: "Liderazgo de Piso, Ruta Mayorista & Turnos", category: "Gestión", score: 95, domain: "turnaround" },
        { name: "Power BI & Dashboards Ejecutivos", category: "BI", score: 92, domain: "bi" },
        { name: "SQL (PostgreSQL / Supabase)", category: "Datos", score: 90, domain: "bi" },
        { name: "Python (Pandas / OpenPyXL) & JS Automation", category: "Código", score: 88, domain: "bi" }
    ],

    credentials: [
        { title: "Data Analytics Essentials", org: "Cisco Academy & MICITT", badge: "2026" },
        { title: "Inglés Intermedio (B2)", org: "NetAcad & MICITT", badge: "En curso" },
        { title: "Manipulación de Alimentos", org: "Habilitado Vigente", badge: "Activo" },
        { title: "Bachillerato Educación Media", org: "Liceo Colorado de Abangares", badge: "2017" },
        { title: "Licencias B1 (Auto) y A2 (Moto)", org: "COSEVI Costa Rica", badge: "Al día" }
    ]
};
