document.addEventListener('DOMContentLoaded', function() {
    // Manejo del menú de navegación móvil
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Lógica para el cambio de imagen dinámico
    const mainImage = document.getElementById('main-image');
    const menuButtons = document.querySelectorAll('.menu-btn');
    
    // Obtener la imagen inicial
    const initialImageSrc = mainImage.src;

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImageSrc = button.getAttribute('data-image');

            // Si la imagen actual ya es la que se va a cargar, no hacemos nada
            if (mainImage.src.includes(newImageSrc)) {
                return;
            }

            // Desvanece la imagen actual
            mainImage.style.opacity = '0';

            // Después de la transición, cambia la fuente de la imagen y vuelve a mostrarla
            setTimeout(() => {
                mainImage.src = newImageSrc;
                mainImage.style.opacity = '1';
            }, 500); // El tiempo debe coincidir con la transición CSS
        });
    });

    // Lógica para la reproducción automática del video en dispositivos móviles
    const video = document.getElementById('background-video');

    if (video) {
        video.muted = true; // Asegura que esté silenciado para autoplay
        
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.error("Autoplay falló:", error);
                // Si la reproducción automática falla, se intentará de nuevo en el primer clic.
                document.body.addEventListener('click', () => {
                    video.play().catch(e => console.error("No se pudo reproducir el video con el clic del usuario", e));
                }, { once: true });
            });
        }
    }
});
