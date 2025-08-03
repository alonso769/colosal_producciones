document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const menuButtons = document.querySelectorAll('.menu-btn');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImageSrc = button.getAttribute('data-image');
            
            // Si la imagen actual es la misma, no hacemos nada
            if (mainImage.src.includes(newImageSrc)) {
                return;
            }

            // Paso 1: Desvanece la imagen actual
            mainImage.style.opacity = '0';

            // Paso 2: Espera a que la transición de desvanecimiento termine
            setTimeout(() => {
                // Crea una nueva imagen temporal para precargar la nueva fuente
                const tempImage = new Image();
                tempImage.src = newImageSrc;

                // Cuando la nueva imagen se cargue, la asignamos y la mostramos
                tempImage.onload = () => {
                    mainImage.src = newImageSrc;
                    mainImage.style.opacity = '1';
                };
            }, 500); // 500ms debe coincidir con la duración de la transición en CSS
        });
    });
});