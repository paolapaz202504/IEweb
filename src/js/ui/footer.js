/* Componente Reutilizable de Pie de Página (Footer) - Clean Architecture */

export function renderFooter() {
    const footerContainer = document.getElementById('site-footer') || document.querySelector('.site-footer');
    if (!footerContainer) return;

    // Detectar si estamos en un archivo que no sea el index de la raíz (para ajustar rutas si es necesario)
    const isSubFolder = window.location.pathname.includes('/src/');
    const basePath = isSubFolder ? '' : ''; // Actualmente tanto index.html como voluntariado.html están bajo /src/ en el repo.

    footerContainer.className = 'site-footer';
    footerContainer.innerHTML = `
        <div class="footer-container">
            <div class="footer-col-brand">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                    <img src="${basePath}assets/images/logo_tse.png" alt="Logo TSE" style="height: 44px; filter: brightness(0) invert(1);">
                    <h3 class="footer-brand-title" style="margin:0;">Instituto Electoral</h3>
                </div>
                <p class="footer-brand-desc">Órgano de docencia, investigación y formación del Tribunal Supremo Electoral de Guatemala, dedicado a fortalecer la cultura cívica y democrática.</p>
                <div class="social-links">
                    <a href="https://facebook.com/tseguatemala" target="_blank" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitter.com/tseguatemala" target="_blank" class="social-icon" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com/tseguatemala" target="_blank" class="social-icon" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://youtube.com/tseguatemala" target="_blank" class="social-icon" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

            <div>
                <h4 class="footer-col-title">Navegación</h4>
                <ul class="footer-menu">
                    <li><a href="index.html" class="footer-link"><i class="fa-solid fa-chevron-right fa-xs"></i> Inicio</a></li>
                    <li><a href="instituto.html" class="footer-link"><i class="fa-solid fa-chevron-right fa-xs"></i> Quiénes Somos</a></li>
                    <li><a href="organigrama.html" class="footer-link"><i class="fa-solid fa-chevron-right fa-xs"></i> Organigrama</a></li>
                    <li><a href="coordinaciones.html" class="footer-link"><i class="fa-solid fa-chevron-right fa-xs"></i> Coordinaciones</a></li>
                    <li><a href="contacto.html" class="footer-link"><i class="fa-solid fa-chevron-right fa-xs"></i> Contacto</a></li>
                </ul>
            </div>

            <div>
                <h4 class="footer-col-title">Herramientas</h4>
                <ul class="footer-menu">
                    <li><a href="https://aulavirtual.tse.org.gt/" target="_blank" class="footer-link"><i class="fa-solid fa-graduation-cap"></i> Aula Virtual</a></li>
                    <li><a href="https://bibliotecavirtual.tse.org.gt/" target="_blank" class="footer-link"><i class="fa-solid fa-book"></i> Biblioteca Virtual</a></li>
                    <li><a href="voluntariado-civico-electoral.html" class="footer-link"><i class="fa-solid fa-users"></i> Voluntariado Cívico</a></li>
                    <li><a href="https://portalweb.tse.org.gt" target="_blank" class="footer-link"><i class="fa-solid fa-globe"></i> Portal TSE Principal</a></li>
                    <li><a href="https://tse.org.gt" target="_blank" class="footer-link"><i class="fa-solid fa-building-columns"></i> Sitio Web Institucional</a></li>
                    <li><a href="https://migrante.tse.org.gt/" target="_blank" class="footer-link"><i class="fa-solid fa-passport"></i> Ciudadanos en el Extranjero</a></li>
                </ul>
            </div>

            <div>
                <h4 class="footer-col-title">Contacto</h4>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-location-dot" style="margin-top:3px; color: var(--color-cyan);"></i>
                    <span>6a. Avenida 1-35 Zona 2, Ciudad de Guatemala, Guatemala</span>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone" style="color: var(--color-cyan);"></i>
                    <span>+502 2378-3900</span>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-envelope" style="color: var(--color-cyan);"></i>
                    <span>info@tse.org.gt</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} Instituto Electoral - Tribunal Supremo Electoral. Todos los derechos reservados.</span>
            <span>Normas y Procedimientos conforme al Acuerdo No. 79-2026.</span>
        </div>
    `;

    // LÓGICA DEL CONTADOR DE VISITAS PERSISTENTE (LOCALSTORAGE)
    // LÓGICA DEL CONTADOR DE VISITAS GLOBAL Y REAL (COUNTAPI)
    // Usamos el namespace del dominio del Instituto Electoral de Guatemala para garantizar unicidad en la API pública.
    const namespace = "tse_instituto_electoral_guatemala";
    const key = "visitas_totales";
    
    // Función auxiliar para actualizar los elementos en el DOM
    const updateCountersDOM = (val) => {
        const topCounters = document.querySelectorAll('.site-visitor-counter-value');
        topCounters.forEach(el => {
            el.textContent = parseInt(val, 10).toLocaleString('es-GT');
        });
    };

    // Para evitar inflar las estadísticas en recargas rápidas del mismo usuario
    const isNewSession = !sessionStorage.getItem('tse_visit_counted');
    const apiUrl = isNewSession 
        ? `https://api.countapi.xyz/hit/${namespace}/${key}`
        : `https://api.countapi.xyz/get/${namespace}/${key}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                // Si el contador no ha sido creado en el servidor, intentamos inicializarlo con un valor inicial de 1
                if (response.status === 404 && isNewSession) {
                    return fetch(`https://api.countapi.xyz/create?namespace=${namespace}&key=${key}&value=1`)
                        .then(res => res.json());
                }
                throw new Error("Error en la respuesta de CountAPI");
            }
            return response.json();
        })
        .then(data => {
            if (isNewSession) {
                sessionStorage.setItem('tse_visit_counted', 'true');
            }
            updateCountersDOM(data.value);
        })
        .catch(err => {
            console.warn("CountAPI temporalmente no disponible, usando fallback local:", err);
            // Fallback en localStorage local si el servicio externo falla o está offline
            try {
                let visits = parseInt(localStorage.getItem('tse_inst_electoral_visits') || "1", 10);
                if (isNewSession) {
                    visits += 1;
                    localStorage.setItem('tse_inst_electoral_visits', visits);
                    sessionStorage.setItem('tse_visit_counted', 'true');
                }
                updateCountersDOM(visits);
            } catch (e) {
                updateCountersDOM("1");
            }
        });
}
