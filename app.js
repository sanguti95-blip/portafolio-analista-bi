/**
 * app.js
 * Motor interactivo del Portafolio Bento Ejecutivo & CV de Milton Sánchez Gutiérrez
 */

(function () {
    "use strict";

    const DATA = window.PORTFOLIO_DATA;
    const STORAGE_CONTACT_KEY = "milton_portfolio_contact_v2";
    const STORAGE_THEME_KEY = "milton_portfolio_theme_v2";

    const state = {
        activeView: "dashboard",
        activeDomain: "all",
        theme: localStorage.getItem(STORAGE_THEME_KEY) || "dark",
        allExpanded: false,
        contact: loadContact()
    };

    let chartTurnaroundInstance = null;
    let chartShrinkageInstance = null;

    function loadContact() {
        try {
            const raw = localStorage.getItem(STORAGE_CONTACT_KEY);
            if (raw) {
                return Object.assign({}, DATA.defaultContact, JSON.parse(raw));
            }
        } catch (err) {
            // fallback
        }
        return Object.assign({}, DATA.defaultContact);
    }

    function saveContact(newContact) {
        state.contact = Object.assign({}, DATA.defaultContact, newContact);
        try {
            localStorage.setItem(STORAGE_CONTACT_KEY, JSON.stringify(state.contact));
        } catch (err) {
            // ignore
        }
        renderIdentityHeader();
        renderCvSheet();
    }

    function escapeHtml(str) {
        return String(str ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    // ========================================================================
    // RENDER: IDENTITY & THEME
    // ========================================================================
    function applyTheme(theme) {
        state.theme = theme === "light" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", state.theme);
        try {
            localStorage.setItem(STORAGE_THEME_KEY, state.theme);
        } catch (e) {}
        const icon = document.getElementById("themeIcon");
        if (icon) {
            icon.className = state.theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        }
        renderCharts();
    }

    function renderIdentityHeader() {
        const nameEl = document.getElementById("headerFullName");
        const roleEl = document.getElementById("headerRoleTitle");
        if (nameEl) nameEl.textContent = state.contact.fullName;
        if (roleEl) roleEl.textContent = state.contact.roleTitle;
    }

    // ========================================================================
    // RENDER: SLICERS & BENTO KPI STRIP
    // ========================================================================
    function renderSlicers() {
        const cont = document.getElementById("domainSlicerContainer");
        if (!cont) return;
        cont.innerHTML = DATA.domains.map(d => {
            const active = state.activeDomain === d.id ? "active" : "";
            return `<button type="button" class="slicer-chip ${active}" data-domain="${escapeHtml(d.id)}">${escapeHtml(d.label)}</button>`;
        }).join("");
    }

    function renderKpiStrip() {
        const cont = document.getElementById("kpiBentoStrip");
        if (!cont) return;
        cont.innerHTML = DATA.kpis.map(k => {
            const matches = state.activeDomain === "all" || k.domain === state.activeDomain;
            const dimClass = matches ? "" : "dimmed";
            const barsHtml = k.bars.map(h => `<span class="mini-bar" style="height:${Math.round((h / 100) * 24)}px"></span>`).join("");
            return `
                <article class="kpi-cell ${dimClass}" tabindex="0" data-domain="${escapeHtml(k.domain)}">
                    <div class="kpi-top">
                        <span class="kpi-metric">${escapeHtml(k.metric)}</span>
                        <span class="kpi-unit">${escapeHtml(k.unit)}</span>
                    </div>
                    <div class="kpi-mid">
                        <div>
                            <div class="kpi-label">${escapeHtml(k.label)}</div>
                            <div class="kpi-delta">${escapeHtml(k.delta)}</div>
                        </div>
                        <div class="mini-bars" aria-hidden="true">${barsHtml}</div>
                    </div>
                    <div class="kpi-popover" role="tooltip">${escapeHtml(k.popover)}</div>
                </article>
            `;
        }).join("");
    }

    // ========================================================================
    // RENDER: CHARTS (Chart.js)
    // ========================================================================
    function getChartPalette() {
        const isLight = state.theme === "light";
        return {
            text: isLight ? "#334155" : "#cbd5e1",
            muted: isLight ? "#64748b" : "#94a3b8",
            grid: isLight ? "rgba(15, 23, 42, 0.08)" : "rgba(148, 163, 184, 0.12)",
            green: isLight ? "#15803d" : "#22c55e",
            greenFill: isLight ? "rgba(21, 128, 61, 0.16)" : "rgba(34, 197, 94, 0.18)",
            red: isLight ? "#dc2626" : "#ef4444",
            indigo: isLight ? "#4f46e5" : "#6366f1"
        };
    }

    function renderCharts() {
        if (typeof Chart === "undefined") return;
        const pal = getChartPalette();

        const ctxTurn = document.getElementById("chartTurnaround");
        if (ctxTurn) {
            if (chartTurnaroundInstance) chartTurnaroundInstance.destroy();
            const vals = DATA.charts.turnaroundSeries.values;
            const barColors = vals.map(v => (v < 0 ? pal.red : pal.green));

            chartTurnaroundInstance = new Chart(ctxTurn, {
                type: "bar",
                data: {
                    labels: DATA.charts.turnaroundSeries.labels,
                    datasets: [
                        {
                            label: "Variación Ventas YoY (%)",
                            data: vals,
                            backgroundColor: barColors,
                            borderRadius: 5,
                            maxBarThickness: 42
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: ctx => ` ${ctx.parsed.y > 0 ? "+" : ""}${ctx.parsed.y}% YoY`
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: pal.muted, font: { family: "Geist", size: 11 } }
                        },
                        y: {
                            grid: { color: pal.grid },
                            ticks: {
                                color: pal.muted,
                                font: { family: "Geist Mono", size: 11 },
                                callback: v => `${v > 0 ? "+" : ""}${v}%`
                            }
                        }
                    }
                }
            });
        }

        const ctxShrink = document.getElementById("chartShrinkage");
        if (ctxShrink) {
            if (chartShrinkageInstance) chartShrinkageInstance.destroy();
            chartShrinkageInstance = new Chart(ctxShrink, {
                type: "line",
                data: {
                    labels: DATA.charts.shrinkageSeries.labels,
                    datasets: [
                        {
                            label: "Índice de Merma (%)",
                            data: DATA.charts.shrinkageSeries.shrinkage,
                            borderColor: pal.green,
                            backgroundColor: pal.greenFill,
                            fill: true,
                            tension: 0.3,
                            pointRadius: 4,
                            pointBackgroundColor: pal.green
                        },
                        {
                            label: "Mejora Utilidad Neta (+%)",
                            data: DATA.charts.shrinkageSeries.netProfitLift,
                            borderColor: pal.indigo,
                            borderDash: [4, 4],
                            fill: false,
                            tension: 0.3,
                            pointRadius: 4,
                            pointBackgroundColor: pal.indigo
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            align: "end",
                            labels: { color: pal.text, boxWidth: 10, font: { family: "Geist", size: 11 } }
                        }
                    },
                    scales: {
                        x: {
                            grid: { display: false },
                            ticks: { color: pal.muted, font: { family: "Geist", size: 11 } }
                        },
                        y: {
                            grid: { color: pal.grid },
                            ticks: {
                                color: pal.muted,
                                font: { family: "Geist Mono", size: 11 },
                                callback: v => `${v}%`
                            }
                        }
                    }
                }
            });
        }
    }

    // ========================================================================
    // RENDER: EXPERIENCE ACCORDION DISCLOSURE + SKILLS METERS + CREDENTIALS
    // ========================================================================
    function renderExperienceDisclosure() {
        const cont = document.getElementById("experienceDisclosureList");
        if (!cont) return;

        cont.innerHTML = DATA.experience.map((exp) => {
            const isOpen = state.allExpanded ? "open" : "";
            const pillsHtml = exp.pills.map(p => `
                <span class="stat-pill">
                    <span class="pill-lbl">${escapeHtml(p.label)}:</span>
                    <span class="pill-val">${escapeHtml(p.value)}</span>
                </span>
            `).join("");

            const bulletsHtml = exp.bullets.map(b => `
                <div class="exp-bullet-item">
                    <strong>${escapeHtml(b.title)}:</strong> ${escapeHtml(b.text)}
                </div>
            `).join("");

            return `
                <details class="exp-disclosure" ${isOpen}>
                    <summary class="exp-summary">
                        <div class="exp-summary-top">
                            <div class="exp-role-group">
                                <i class="fa-solid fa-chevron-right exp-chevron" aria-hidden="true"></i>
                                <span class="exp-role">${escapeHtml(exp.role)}</span>
                                <span class="exp-company">· ${escapeHtml(exp.company)}</span>
                            </div>
                            <span class="exp-period">${escapeHtml(exp.period)}</span>
                        </div>
                        <div class="exp-pills-row">${pillsHtml}</div>
                    </summary>
                    <div class="exp-body">
                        <p class="exp-brief">${escapeHtml(exp.brief)}</p>
                        <div class="exp-bullet-grid">${bulletsHtml}</div>
                    </div>
                </details>
            `;
        }).join("");
    }

    function renderSkillsMeters() {
        const cont = document.getElementById("skillsMeterList");
        if (!cont) return;

        cont.innerHTML = DATA.skills.map(s => {
            const matches = state.activeDomain === "all" || s.domain === state.activeDomain;
            const dimClass = matches ? "" : "dimmed";
            return `
                <div class="meter-row ${dimClass}">
                    <div class="meter-top">
                        <span class="meter-name">${escapeHtml(s.name)}</span>
                        <span class="meter-meta">
                            <span class="meter-cat">${escapeHtml(s.category)}</span>
                            <span class="meter-score">${s.score}%</span>
                        </span>
                    </div>
                    <div class="meter-track" role="progressbar" aria-valuenow="${s.score}" aria-valuemin="0" aria-valuemax="100" aria-label="${escapeHtml(s.name)}">
                        <div class="meter-fill" style="width:${s.score}%"></div>
                    </div>
                </div>
            `;
        }).join("");
    }

    function renderCredentials() {
        const cont = document.getElementById("credentialsChipGrid");
        if (!cont) return;
        cont.innerHTML = DATA.credentials.map(c => `
            <div class="cred-chip">
                <div>
                    <div class="cred-title">${escapeHtml(c.title)}</div>
                    <div class="cred-org">${escapeHtml(c.org)}</div>
                </div>
                <span class="cred-badge">${escapeHtml(c.badge)}</span>
            </div>
        `).join("");
    }

    // ========================================================================
    // RENDER: PROJECTS BENTO + SLIDE-OVER SHEET DRAWER
    // ========================================================================
    function renderProjectsGrid() {
        const cont = document.getElementById("projectsBentoGrid");
        if (!cont) return;

        cont.innerHTML = DATA.projects.map(p => {
            const kpisHtml = p.kpis.map(k => `
                <div class="proj-kpi-box">
                    <span class="proj-kpi-lbl">${escapeHtml(k.label)}</span>
                    <span class="proj-kpi-val">${escapeHtml(k.value)}</span>
                </div>
            `).join("");

            const stackHtml = p.stack.map(st => `<span class="stack-tag">${escapeHtml(st)}</span>`).join("");

            return `
                <article class="project-card">
                    <div>
                        <div class="proj-top">
                            <span class="proj-tag">${escapeHtml(p.tag)}</span>
                            <span class="proj-org">${escapeHtml(p.org)}</span>
                        </div>
                        <h2 class="proj-title">${escapeHtml(p.title)}</h2>
                        <p class="proj-summary">${escapeHtml(p.summary)}</p>
                    </div>
                    <div class="proj-kpi-grid">${kpisHtml}</div>
                    <div class="proj-footer">
                        <div class="proj-stack">${stackHtml}</div>
                        <div class="proj-actions">
                            <button type="button" class="btn-ghost btn-open-drawer" data-proj="${escapeHtml(p.id)}">
                                <i class="fa-solid fa-sidebar-flip"></i>
                                <span>Ficha Técnica</span>
                            </button>
                            <a href="${escapeHtml(p.liveUrl)}" target="_blank" rel="noopener" class="btn-primary">
                                <span>Abrir Demo</span>
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    }

    function openProjectDrawer(projId) {
        const proj = DATA.projects.find(p => p.id === projId);
        if (!proj) return;
        const backdrop = document.getElementById("projectDrawerBackdrop");
        const tagEl = document.getElementById("drawerTag");
        const titleEl = document.getElementById("drawerTitle");
        const bodyEl = document.getElementById("drawerBodyContent");
        if (!backdrop || !bodyEl) return;

        if (tagEl) tagEl.textContent = `${proj.tag} · ${proj.org}`;
        if (titleEl) titleEl.textContent = proj.title;

        bodyEl.innerHTML = `
            <div class="proj-kpi-grid">
                ${proj.kpis.map(k => `
                    <div class="proj-kpi-box">
                        <span class="proj-kpi-lbl">${escapeHtml(k.label)}</span>
                        <span class="proj-kpi-val">${escapeHtml(k.value)}</span>
                    </div>
                `).join("")}
            </div>
            <div>
                <h4 style="font-size:13px; font-weight:600; margin-bottom:6px;">Resumen Ejecutivo</h4>
                <p style="font-size:13px; color:var(--ink-secondary);">${escapeHtml(proj.summary)}</p>
            </div>
            <div>
                <h4 style="font-size:13px; font-weight:600; margin-bottom:6px;">Arquitectura & Entregables Clave</h4>
                <ul class="drawer-list">
                    ${proj.details.map(d => `<li>${escapeHtml(d)}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4 style="font-size:13px; font-weight:600; margin-bottom:6px;">Stack & Metodologías</h4>
                <div class="proj-stack">
                    ${proj.stack.map(s => `<span class="stack-tag">${escapeHtml(s)}</span>`).join("")}
                </div>
            </div>
            <div style="display:flex; gap:10px; margin-top:8px;">
                <a href="${escapeHtml(proj.liveUrl)}" target="_blank" rel="noopener" class="btn-primary">
                    <span>Abrir Demo Interactiva</span>
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a href="${escapeHtml(proj.repoUrl)}" target="_blank" rel="noopener" class="btn-ghost">
                    <i class="fa-brands fa-github"></i>
                    <span>Repositorio GitHub</span>
                </a>
            </div>
        `;

        backdrop.classList.add("open");
        backdrop.setAttribute("aria-hidden", "false");
    }

    function closeProjectDrawer() {
        const backdrop = document.getElementById("projectDrawerBackdrop");
        if (backdrop) {
            backdrop.classList.remove("open");
            backdrop.setAttribute("aria-hidden", "true");
        }
    }

    // ========================================================================
    // RENDER: PRINTABLE 1-PAGE EXECUTIVE CV SHEET
    // ========================================================================
    function renderCvSheet() {
        const cont = document.getElementById("cvPrintableSheet");
        if (!cont) return;
        const c = state.contact;

        const expHtml = DATA.experience.map(e => `
            <div class="cv-exp-block">
                <div class="cv-exp-head">
                    <span>${escapeHtml(e.role)} — ${escapeHtml(e.company)}</span>
                    <span>${escapeHtml(e.period)}</span>
                </div>
                <div class="cv-exp-sub">${escapeHtml(e.brief)}</div>
                <ul class="cv-ul">
                    ${e.bullets.map(b => `<li><strong>${escapeHtml(b.title)}:</strong> ${escapeHtml(b.text)}</li>`).join("")}
                </ul>
            </div>
        `).join("");

        const projHtml = DATA.projects.map(p => `
            <li><strong>${escapeHtml(p.title)} (${escapeHtml(p.org)}):</strong> ${escapeHtml(p.summary)}</li>
        `).join("");

        cont.innerHTML = `
            <header class="cv-head">
                <div class="cv-name">${escapeHtml(c.fullName)}</div>
                <div class="cv-role">${escapeHtml(c.roleTitle)}</div>
                <div class="cv-contact-line">
                    <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(c.location)}</span>
                    <span><i class="fa-solid fa-envelope"></i> ${escapeHtml(c.email)}</span>
                    <span><i class="fa-solid fa-phone"></i> ${escapeHtml(c.phone)}</span>
                    <span><i class="fa-brands fa-github"></i> ${escapeHtml(c.githubLabel)}</span>
                    <span><i class="fa-brands fa-linkedin"></i> ${escapeHtml(c.linkedinLabel)}</span>
                </div>
            </header>

            <section class="cv-sec">
                <h3 class="cv-sec-title">Perfil Profesional</h3>
                <p class="cv-p">${escapeHtml(DATA.summary.fullProfile)}</p>
            </section>

            <section class="cv-sec">
                <h3 class="cv-sec-title">Experiencia Profesional</h3>
                ${expHtml}
            </section>

            <section class="cv-sec">
                <h3 class="cv-sec-title">Proyectos Clave & Casos de Estudio BI</h3>
                <ul class="cv-ul">${projHtml}</ul>
            </section>

            <div class="cv-grid-2">
                <section class="cv-sec">
                    <h3 class="cv-sec-title">Competencias & Stack Técnico</h3>
                    <ul class="cv-ul">
                        <li><strong>Analítica & Bases de Datos:</strong> SQL (PostgreSQL, Supabase), Excel Avanzado (Power Query, modelado financiero), Python (Pandas, OpenPyXL), Power BI, Google Apps Script.</li>
                        <li><strong>Estrategia Comercial & Retail:</strong> Pricing, sensibilidad de precios, COGS, Category Management, GMROI (2.02x), control de mermas y negociación con proveedores.</li>
                        <li><strong>Metodologías Operativas:</strong> 5S, 4DX, racionalización ABC / Min-Max y estandarización de turnos.</li>
                    </ul>
                </section>

                <section class="cv-sec">
                    <h3 class="cv-sec-title">Educación, Certificaciones & Licencias</h3>
                    <ul class="cv-ul">
                        ${DATA.credentials.map(cr => `<li><strong>${escapeHtml(cr.title)}:</strong> ${escapeHtml(cr.org)} (${escapeHtml(cr.badge)})</li>`).join("")}
                    </ul>
                </section>
            </div>
        `;
    }

    // ========================================================================
    // VIEW NAVIGATION & COMMAND PALETTE (Ctrl+K)
    // ========================================================================
    function switchView(viewId) {
        state.activeView = viewId;
        document.querySelectorAll(".seg-btn").forEach(btn => {
            const isMatch = btn.getAttribute("data-view") === viewId;
            btn.classList.toggle("active", isMatch);
            btn.setAttribute("aria-selected", isMatch ? "true" : "false");
        });
        document.querySelectorAll(".view-panel").forEach(panel => {
            panel.classList.toggle("active", panel.id === `view-${viewId}`);
        });
        if (viewId === "dashboard") {
            renderCharts();
        }
    }

    const COMMANDS = [
        { label: "Ir a Impacto & BI (Dashboard Principal)", sub: "Vista Bento", action: () => switchView("dashboard") },
        { label: "Ver Demos & Casos de Estudio (4 Proyectos)", sub: "Vista Proyectos", action: () => switchView("projects") },
        { label: "Ver Hoja de Vida Formal (1 Página PDF)", sub: "Vista CV ATS", action: () => switchView("cv") },
        { label: "Abrir Demo en Vivo: Suite Pricing B2B & OTIF Interfrutd", sub: "211 SKUs · GitHub Pages", action: () => window.open("https://sanguti95-blip.github.io/analista-pricing-interfrutd/", "_blank") },
        { label: "Filtrar: Turnaround & Crecimiento Comercial (+12.5%)", sub: "Slicer", action: () => { switchView("dashboard"); setDomainFilter("turnaround"); } },
        { label: "Filtrar: Reducción de Merma Operativa (-50.6%)", sub: "Slicer", action: () => { switchView("dashboard"); setDomainFilter("mermas"); } },
        { label: "Filtrar: Inventario, Category Mgmt & GMROI (2.02x)", sub: "Slicer", action: () => { switchView("dashboard"); setDomainFilter("gmroi"); } },
        { label: "Alternar Tema Claro / Oscuro", sub: "Apariencia", action: () => applyTheme(state.theme === "dark" ? "light" : "dark") },
        { label: "Imprimir / Descargar CV en PDF", sub: "Exportación Carta/A4", action: () => triggerPrintCv() }
    ];

    function renderCommandResults(query = "") {
        const listEl = document.getElementById("cmdResultsList");
        if (!listEl) return;
        const q = query.trim().toLowerCase();
        const filtered = COMMANDS.filter(c => !q || c.label.toLowerCase().includes(q) || c.sub.toLowerCase().includes(q));
        listEl.innerHTML = filtered.map((c, i) => `
            <button type="button" class="cmd-item" data-cmd-idx="${COMMANDS.indexOf(c)}">
                <span>${escapeHtml(c.label)}</span>
                <span class="cmd-item-sub">${escapeHtml(c.sub)}</span>
            </button>
        `).join("");
    }

    function openCmdPalette() {
        const bd = document.getElementById("cmdBackdrop");
        const input = document.getElementById("cmdSearchInput");
        if (!bd) return;
        bd.classList.add("open");
        bd.setAttribute("aria-hidden", "false");
        renderCommandResults("");
        if (input) {
            input.value = "";
            setTimeout(() => input.focus(), 30);
        }
    }

    function closeCmdPalette() {
        const bd = document.getElementById("cmdBackdrop");
        if (bd) {
            bd.classList.remove("open");
            bd.setAttribute("aria-hidden", "true");
        }
    }

    function setDomainFilter(domainId) {
        state.activeDomain = domainId;
        renderSlicers();
        renderKpiStrip();
        renderSkillsMeters();
    }

    function triggerPrintCv() {
        switchView("cv");
        setTimeout(() => window.print(), 120);
    }

    // ========================================================================
    // EVENT BINDINGS
    // ========================================================================
    function setupEvents() {
        // Segmented Control
        document.querySelectorAll(".seg-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                switchView(btn.getAttribute("data-view"));
            });
        });

        // Domain Slicers
        const slicerCont = document.getElementById("domainSlicerContainer");
        if (slicerCont) {
            slicerCont.addEventListener("click", e => {
                const chip = e.target.closest(".slicer-chip");
                if (chip) {
                    setDomainFilter(chip.getAttribute("data-domain"));
                }
            });
        }

        // Expand/Collapse All Experience
        const btnToggleExp = document.getElementById("btnToggleAllExp");
        if (btnToggleExp) {
            btnToggleExp.addEventListener("click", () => {
                state.allExpanded = !state.allExpanded;
                btnToggleExp.textContent = state.allExpanded ? "Contraer todo" : "Expandir todo";
                document.querySelectorAll(".exp-disclosure").forEach((d) => {
                    d.open = state.allExpanded;
                });
            });
        }

        // Projects Drawer
        const projGrid = document.getElementById("projectsBentoGrid");
        if (projGrid) {
            projGrid.addEventListener("click", e => {
                const btn = e.target.closest(".btn-open-drawer");
                if (btn) {
                    openProjectDrawer(btn.getAttribute("data-proj"));
                }
            });
        }

        const btnCloseDrawer = document.getElementById("btnCloseDrawer");
        const drawerBd = document.getElementById("projectDrawerBackdrop");
        if (btnCloseDrawer) btnCloseDrawer.addEventListener("click", closeProjectDrawer);
        if (drawerBd) {
            drawerBd.addEventListener("click", e => {
                if (e.target === drawerBd) closeProjectDrawer();
            });
        }

        // Theme Toggle
        const btnTheme = document.getElementById("btnToggleTheme");
        if (btnTheme) {
            btnTheme.addEventListener("click", () => {
                applyTheme(state.theme === "dark" ? "light" : "dark");
            });
        }

        // Print PDF
        const btnPdf = document.getElementById("btnExportPdf");
        const btnPrintNow = document.getElementById("btnPrintCvNow");
        if (btnPdf) btnPdf.addEventListener("click", triggerPrintCv);
        if (btnPrintNow) btnPrintNow.addEventListener("click", () => window.print());

        // Command Palette
        const btnOpenCmd = document.getElementById("btnOpenCmd");
        const cmdBd = document.getElementById("cmdBackdrop");
        const cmdInput = document.getElementById("cmdSearchInput");
        const cmdResults = document.getElementById("cmdResultsList");

        if (btnOpenCmd) btnOpenCmd.addEventListener("click", openCmdPalette);
        if (cmdBd) {
            cmdBd.addEventListener("click", e => {
                if (e.target === cmdBd) closeCmdPalette();
            });
        }
        if (cmdInput) {
            cmdInput.addEventListener("input", () => renderCommandResults(cmdInput.value));
        }
        if (cmdResults) {
            cmdResults.addEventListener("click", e => {
                const item = e.target.closest(".cmd-item");
                if (item) {
                    const idx = Number(item.getAttribute("data-cmd-idx"));
                    if (COMMANDS[idx]) COMMANDS[idx].action();
                    closeCmdPalette();
                }
            });
        }

        // Contact Modal
        const contactBd = document.getElementById("contactModalBackdrop");
        const openContactBtns = [
            document.getElementById("btnOpenContactModal"),
            document.getElementById("btnEditContactFromCv")
        ];
        const btnCloseContact = document.getElementById("btnCloseContactModal");
        const contactForm = document.getElementById("contactForm");
        const btnResetContact = document.getElementById("btnResetContact");

        function openContactModal() {
            if (!contactBd) return;
            document.getElementById("inputFullName").value = state.contact.fullName;
            document.getElementById("inputRoleTitle").value = state.contact.roleTitle;
            document.getElementById("inputEmail").value = state.contact.email;
            document.getElementById("inputPhone").value = state.contact.phone;
            document.getElementById("inputLocation").value = state.contact.location;
            document.getElementById("inputLinkedin").value = state.contact.linkedinLabel;
            contactBd.classList.add("open");
            contactBd.setAttribute("aria-hidden", "false");
        }

        function closeContactModal() {
            if (contactBd) {
                contactBd.classList.remove("open");
                contactBd.setAttribute("aria-hidden", "true");
            }
        }

        openContactBtns.forEach(b => {
            if (b) b.addEventListener("click", openContactModal);
        });
        if (btnCloseContact) btnCloseContact.addEventListener("click", closeContactModal);
        if (contactBd) {
            contactBd.addEventListener("click", e => {
                if (e.target === contactBd) closeContactModal();
            });
        }
        if (contactForm) {
            contactForm.addEventListener("submit", e => {
                e.preventDefault();
                saveContact({
                    fullName: document.getElementById("inputFullName").value.trim(),
                    roleTitle: document.getElementById("inputRoleTitle").value.trim(),
                    email: document.getElementById("inputEmail").value.trim(),
                    phone: document.getElementById("inputPhone").value.trim(),
                    location: document.getElementById("inputLocation").value.trim(),
                    linkedinLabel: document.getElementById("inputLinkedin").value.trim()
                });
                closeContactModal();
            });
        }
        if (btnResetContact) {
            btnResetContact.addEventListener("click", () => {
                saveContact(DATA.defaultContact);
                closeContactModal();
            });
        }

        // Global Keyboard Shortcuts (Ctrl+K & Escape)
        window.addEventListener("keydown", e => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                openCmdPalette();
            } else if (e.key === "Escape") {
                closeCmdPalette();
                closeProjectDrawer();
                closeContactModal();
            }
        });
    }

    // ========================================================================
    // INIT
    // ========================================================================
    document.addEventListener("DOMContentLoaded", () => {
        renderIdentityHeader();
        renderSlicers();
        renderKpiStrip();
        renderExperienceDisclosure();
        renderSkillsMeters();
        renderCredentials();
        renderProjectsGrid();
        renderCvSheet();
        applyTheme(state.theme);
        setupEvents();
    });
})();
