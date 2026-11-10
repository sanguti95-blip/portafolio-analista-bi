/**
 * portfolioData.js
 * Datos ejecutivos destilados para el Portafolio Bento & CV de Milton Sánchez Gutiérrez
 */

window.PORTFOLIO_DATA = {
    defaultContact: {
        fullName: "Milton Sánchez Gutiérrez",
        roleTitle: "Analista Comercial & Pricing · Operaciones Retail · Heredia, CR",
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
            label: "BI & Ejecución en Piso",
            delta: "+6.4% Tráfico (2 Turnos)",
            deltaTone: "positive",
            popover: "Dashboard gerencial automatizado en tiempo real (ventas, márgenes, mermas y GMROI), señalización en piso (+35% rotación) y esquema de 2 turnos (+6.4% tráfico).",
            bars: [50, 62, 75, 88, 100]
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
            brief: "Gestión integral de unidad retail y ruta mayorista en alineación con la Gerencia Comercial.",
            pills: [
                { label: "Ventas Q3", value: "+12.5% (Pico +30%)" },
                { label: "Merma", value: "-50.6% (4.75%→2.32%)" },
                { label: "GMROI Neto", value: "2.02x · Rot 4.3x" }
            ],
            bullets: [
                {
                    title: "Turnaround Comercial & Tráfico (+12.5% Q3 / +6.4% Tráfico)",
                    text: "Revertimos una contracción inicial de -14% (Q1) a +12.5% en Q3 (picos +30%) y +7.7% en Q4 junto a la Gerencia Comercial, implementando 2 turnos rotativos con cobertura total."
                },
                {
                    title: "Control de Mermas (-50.6%) & Utilidad Neta (+9.3%)",
                    text: "Bajé el índice de merma de 4.75% a 2.32% sobre ventas y elevé la utilidad neta post-merma en +9.3% optimizando calidades en piso y pasando de 3 a 4 recepciones matutinas."
                },
                {
                    title: "GMROI Neto (2.02x) & BI en Tiempo Real (+35% Rotación)",
                    text: "Reduje el capital inmovilizado un -12% (rotación 4.3x/mes) mediante Category Management y desplegué un dashboard automatizado en tiempo real que impulsó +35% las líneas clave."
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
            brief: "Coordinación operativa de departamento en cadena de supermercados premium.",
            pills: [
                { label: "Trayectoria", value: "+4 Años" },
                { label: "Formato", value: "Retail Premium" }
            ],
            bullets: [
                {
                    title: "Calidad, Frescura y Rotación",
                    text: "Supervisión de layouts en góndola, inventarios cíclicos, frescura de perecederos y cumplimiento estricto de inocuidad alimentaria."
                },
                {
                    title: "Productividad y Abastecimiento",
                    text: "Control de indicadores de productividad, prevención de quiebres de stock y optimización de flujos de reposición."
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
            brief: "Control administrativo de punto de venta, recepción de proveedores y auditoría de márgenes.",
            pills: [
                { label: "Trayectoria", value: "+3.5 Años" },
                { label: "Control", value: "OC vs Facturas" }
            ],
            bullets: [
                {
                    title: "Auditoría de Compras e Inventarios",
                    text: "Cuadratura de cajas, verificación de órdenes de compra frente a facturas de proveedores, conciliación de inventarios y reportería de ventas y márgenes."
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
        { name: "Category Management & Pareto ABC", category: "Inventario", score: 95, domain: "gmroi" },
        { name: "Excel Avanzado, Power BI & SQL", category: "Analítica", score: 94, domain: "bi" }
    ],

    credentials: [
        { title: "Data Analytics Essentials", org: "Cisco Academy & MICITT", badge: "2026" },
        { title: "Inglés Intermedio (B2)", org: "NetAcad & MICITT", badge: "2026" },
        { title: "Manipulación de Alimentos & Licencias B1/A2", org: "Habilitado al día", badge: "Activo" }
    ]
};
