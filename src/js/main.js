/* Entry Point Principal (Vanilla JS Clean Architecture) */
import { initSlider } from './ui/slider.js';
import { initNavigation } from './ui/navigation.js';
import { renderFooter } from './ui/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSlider();
    renderFooter();
    console.log('🏛️ Instituto Electoral (IEweb) - Componentes e Interfaz Inicializada');
});
