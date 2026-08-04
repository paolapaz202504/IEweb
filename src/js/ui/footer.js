/* Componente Reutilizable de Pie de Página (Footer) - Clean Architecture */

export function renderFooter() {
    const footerContainer = document.getElementById('site-footer') || document.querySelector('.site-footer');
    if (!footerContainer) return;

    footerContainer.className = 'site-footer';
    footerContainer.innerHTML = `
        <div class="footer-container">
            <div class="footer-col-brand">
                <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
                    <img src="assets/images/logo_tse.png" alt="Logo TSE" style="height: 44px; filter: brightness(0) invert(1);">
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
                    <li><a href="https://tse.org.gt/comunicacion/politica-de-la-juventud" target="_blank" class="footer-link"><i class="fa-solid fa-users"></i> Voluntariado Cívico</a></li>
                    <li><a href="https://portalweb.tse.org.gt" target="_blank" class="footer-link"><i class="fa-solid fa-globe"></i> Portal TSE Principal</a></li>
                    <li><a href="https://tse.org.gt" target="_blank" class="footer-link"><i class="fa-solid fa-building-columns"></i> Sitio Web Institucional</a></li>
                    <li><a href="https://migrante.tse.org.gt/" target="_blank" class="footer-link"><i class="fa-solid fa-passport"></i> Ciudadanos en el Extranjero</a></li>
                </ul>
            </div>

            <div>
                <h4 class="footer-col-title">Contacto</h4>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-location-dot" style="margin-top:3px; color: var(--color-cyan);"></i>
                    <span>6a. Avenida 0-32 Zona 2, Ciudad de Guatemala, Guatemala</span>
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
            <span>© 2026 Instituto Electoral - Tribunal Supremo Electoral. Todos los derechos reservados.</span>
            <span>Normas y Procedimientos conforme al Acuerdo No. 79-2026.</span>
        </div>
    `;
}
