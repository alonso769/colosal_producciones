// --- Global Event Data ---
// Define tus eventos aquí. Cada objeto debe tener un ID único y todos los detalles que quieres mostrar en la página de detalles.

const eventsData = [
    {
        id: 'band-event-1',
        title: '',
        image: 'images/band-event-1.jpg',
        dateTime: '',
        address: '',
        city: 'Miraflores, PE',
        fullAddress: 'C. 2 de Mayo 220, Miraflores 15074',
        description: `Prepárate para una noche épica: dos shows completos tributo a LINKIN PARK como nunca antes.

🎤El álbum "From Zero" por @hybridtheoryoficial.pe vs el álbum "Hybrid Theory" por @chazy.tributoalp — en las previas a la llegada de la banda a Lima.

Pero eso no es todo…
⚡ Tributo a System of a Down – @mtvnu.metal
⚡ Tributo a Limp Bizkit – @mtvnu.metal
⚡ Tributo a Bad Omens – @badomens.tributo
⚡ Banda invitada: @infragta

📅 Fecha: Sábado 13 de septiembre
📍 Lugar: Iwanna Rock – 3er piso, Jr. Mariscal Las Heras 219, Lince
🎟 Entradas: https://wa.link/sznw3i o al 📲 940 615 061
🎬 Produce: Colosal Producciones`,
        additionalInfo: `Las puertas abren a las 8:00 PM. Se recomienda llegar temprano. Consumo de alcohol solo para mayores de 18 años con DNI. No se permite el ingreso con bebidas ni alimentos.
        PRECIO EN PUERTA S/35.00`,
        
        // --- NUEVA ESTRUCTURA DE PREVENTAS (ADAPTADO CON HORAS PARA PRUEBA) ---
        // Aquí defines las etapas de preventa con su precio y fecha de finalización
        // La fecha debe ser un objeto Date para poder compararla
        presaleStages: [
            // PRUEBA 1: Esta preventa ya ha pasado (17:20:00). No debería mostrarse.
            { name: 'Preventa 1', price: 20.00, endDate: new Date('2025-08-24T11:59:00') },
            // PRUEBA 2: Esta preventa es la activa en este momento (hasta las 17:30:00).
            { name: 'Preventa 2', price: 100.00, endDate: new Date('2025-08-13T17:50:00') },
            // PRUEBA 3: Esta preventa se activará después de las 17:30:00.
            { name: 'Preventa 3', price: 114.00, endDate: new Date('2025-08-13T17:52:00') }
        ],
        regularPrice: { name: 'Entrada General', price: 25.00 }, // Precio que se activa después de las preventas
        
        organizer: 'Colosal Producciones',
        mapCoords: [-12.08615, -77.03424] // Coordenadas de Barranco Arena (ejemplo)
    },
    {
        id: 'band-event-3',
        title: '',
        image: 'images/band-event-3.png',
        dateTime: '',
        address: '',
        city: 'Lince, PE',
        fullAddress: 'Jr, Mariscal Las Heras 219, Lince',
        description: `🎤✨ ¡La nostalgia emo-punk se apodera de Miraflores! 🔥
        NOSTALGIK AS F**K Vol. I llega con una noche llena de recuerdos y un tributo extenso a PARAMORE a cargo de @thefirst.pe
        Pero eso no es todo… 👇 ❌ Twenty One Pilots x @helloclancytop ❌ Kudai x @revuelo_kudaioficial ❌ Emo Punk Hits 2000’s x @naf.emohits (P!ATD, FOB, PXNDX, All Time Low, The Veronicas, Avril Lavigne, Tokio Hotel, The Rasmus y más).
        📅 Sábado 11 de octubre 📍 McCarthy’s Irish Pub – Miraflores 🍻 Consumo mínimo: S/25
        `,
        additionalInfo: `Las puertas abren a las 8:00 PM. Se recomienda llegar temprano. Consumo de alcohol solo para mayores de 18 años con DNI. No se permite el ingreso con bebidas ni alimentos.
        PRECIO EN PUERTA S/35.00`,
         // --- NUEVA ESTRUCTURA DE PREVENTAS (ADAPTADO CON HORAS PARA PRUEBA) ---
        // Aquí defines las etapas de preventa con su precio y fecha de finalización
        // La fecha debe ser un objeto Date para poder compararla
        presaleStages: [
            // PRUEBA 1: Esta preventa ya ha pasado (17:20:00). No debería mostrarse.
            { name: 'Preventa 1', price: 20.00, endDate: new Date('2025-08-24T11:59:00') },
            // PRUEBA 2: Esta preventa es la activa en este momento (hasta las 17:30:00).
            { name: 'Preventa 2', price: 100.00, endDate: new Date('2025-08-13T17:50:00') },
            // PRUEBA 3: Esta preventa se activará después de las 17:30:00.
            { name: 'Preventa 3', price: 114.00, endDate: new Date('2025-08-13T17:52:00') }
        ],
        regularPrice: { name: 'Entrada General', price: 25.00 }, // Precio que se activa después de las preventas
        
        organizer: 'Colosal Producciones',
        mapCoords: [-12.11769, -77.03056] // Coordenadas de Barranco Arena (ejemplo)
    },
    {
        id: 'band-event-2',
        title: '',
        image: 'images/band-event-2.png',
        dateTime: '',
        address: '',
        city: 'Miraflores, PE',
        fullAddress: 'C. 2 de Mayo 220, Miraflores 15074',
        description: `En esta noche oscura, donde los recuerdos nunca mueren… 🔥
Prepárate para un ritual emo y oscuro, con un show extenso de PXNDX a cargo de @nxrcicistx.pe, que hará llorar hasta a los fantasmas de tu adolescencia.
Y la noche continúa con: 👇
❌ Alesana x @icarus.alesanatribute
❌ Marilyn Manson x @mechanichalanimals
❌ Emo Hits 2000’s x @naf.emohits (P!ATD, FOB, All Time Low, Avril Lavigne, Tokio Hotel y más)
❌ @wethemonster_

📅 Sábado 1 de noviembre
📍 Iwanna Rock – Jirón Mariscal Las Heras 219, Lince
🍻 Consumo mínimo S/30

🔥 Ven disfrazado y sé parte de esta fiesta donde Halloween se une al Día de Muertos… La noche emo más intensa del año te espera!
        `,
        additionalInfo: `Las puertas abren a las 8:00 PM. Se recomienda llegar temprano. Consumo de alcohol solo para mayores de 18 años con DNI. No se permite el ingreso con bebidas ni alimentos.
        PRECIO EN PUERTA S/35.00`,
         // --- NUEVA ESTRUCTURA DE PREVENTAS (ADAPTADO CON HORAS PARA PRUEBA) ---
        // Aquí defines las etapas de preventa con su precio y fecha de finalización
        // La fecha debe ser un objeto Date para poder compararla
        presaleStages: [
            // PRUEBA 1: Esta preventa ya ha pasado (17:20:00). No debería mostrarse.
            { name: 'Preventa 1', price: 20.00, endDate: new Date('2025-08-24T11:59:00') },
            // PRUEBA 2: Esta preventa es la activa en este momento (hasta las 17:30:00).
            { name: 'Preventa 2', price: 100.00, endDate: new Date('2025-08-13T17:50:00') },
            // PRUEBA 3: Esta preventa se activará después de las 17:30:00.
            { name: 'Preventa 3', price: 114.00, endDate: new Date('2025-08-13T17:52:00') }
        ],
        regularPrice: { name: 'Entrada General', price: 30.00 }, // Precio que se activa después de las preventas
        
        organizer: 'Colosal Producciones',
        mapCoords: [-12.08615, -77.03424] // Coordenadas de Barranco Arena (ejemplo)
    },
    {
        id: 'band-event-4',
        title: '',
        image: 'images/band-event-4.png',
        dateTime: '',
        address: '',
        city: 'Lince, PE',
        fullAddress: 'Jr, Mariscal Las Heras 219, Lince',
       description: `Proximamente`,
        additionalInfo: `Las puertas abren a las 8:00 PM. Se recomienda llegar temprano. Consumo de alcohol solo para mayores de 18 años con DNI. No se permite el ingreso con bebidas ni alimentos.
        PRECIO EN PUERTA S/35.00`,
         // --- NUEVA ESTRUCTURA DE PREVENTAS (ADAPTADO CON HORAS PARA PRUEBA) ---
        // Aquí defines las etapas de preventa con su precio y fecha de finalización
        // La fecha debe ser un objeto Date para poder compararla
        presaleStages: [
            // PRUEBA 1: Esta preventa ya ha pasado (17:20:00). No debería mostrarse.
            { name: 'Preventa 1', price: 20.00, endDate: new Date('2025-08-24T11:59:00') },
            // PRUEBA 2: Esta preventa es la activa en este momento (hasta las 17:30:00).
            { name: 'Preventa 2', price: 100.00, endDate: new Date('2025-08-13T17:50:00') },
            // PRUEBA 3: Esta preventa se activará después de las 17:30:00.
            { name: 'Preventa 3', price: 114.00, endDate: new Date('2025-08-13T17:52:00') }
        ],
        regularPrice: { name: 'Entrada General', price: 25.00 }, // Precio que se activa después de las preventas
        
        organizer: 'Colosal Producciones',
        mapCoords: [-12.11769, -77.03056] // Coordenadas de Barranco Arena (ejemplo)
    },
    {
        id: 'band-event-5',
        title: 'Noche de Punk en Chiclayo',
        image: 'images/band-event-5.jpg',
        dateTime: '05 OCT. 2025 - 08:00 PM',
        address: 'Estadio Elías Aguirre',
        city: 'Chiclayo, PE',
        fullAddress: 'Av. Sáenz Peña 700, Chiclayo',
        description: `Celebra el espíritu punk con bandas icónicas de la escena local y nacional. Una noche de rebeldía y buena música en Chiclayo.`,
        additionalInfo: `Se recomienda el uso de calzado cómodo. Edad mínima 18 años.`,
        tickets: [
            { name: 'General', price: 50.00 },
            { name: 'Palco (vista preferencial)', price: 90.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-6.7725, -79.8454] // Coordenadas del Estadio Elías Aguirre (ejemplo)
    },
    {
        id: 'featured-event-1',
        title: 'Festival de Verano Rock',
        image: 'images/featured-event-1.jpg',
        dateTime: '15 DIC. 2025 - 06:00 PM',
        address: 'Parque de la Exposición',
        city: 'Lima, PE',
        fullAddress: 'Av. 28 de Julio, Lima',
        description: `Una noche inolvidable con las mejores bandas de rock locales. Disfruta de un ambiente al aire libre con excelente música y gastronomía.`,
        additionalInfo: `Evento familiar. Niños menores de 10 años no pagan. Se prohíbe el ingreso de mascotas.`,
        tickets: [
            { name: 'Entrada General', price: 45.00 },
            { name: 'Pack Familiar (4 personas)', price: 150.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-12.0621, -77.0371] // Coordenadas del Parque de la Exposición (ejemplo)
    },
    {
        id: 'featured-event-2',
        title: 'Conferencia de Innovación Musical',
        image: 'images/featured-event-2.jpg',
        dateTime: '22 ENE. 2026 - 09:00 AM',
        address: 'Centro de Convenciones de Lima',
        city: 'Lima, PE',
        fullAddress: 'Av. de la Cultura 220, San Borja',
        description: `Explora las últimas tendencias y tecnologías en la industria musical. Charlas, talleres y networking con expertos del sector.`,
        additionalInfo: `Incluye coffee break y certificado de participación.`,
        tickets: [
            { name: 'Acceso General (1 día)', price: 120.00 },
            { name: 'Pase Completo (3 días)', price: 300.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-12.0917, -76.9930] // Coordenadas del Centro de Convenciones de Lima (ejemplo)
    },
    {
        id: 'featured-event-3',
        title: 'Noche de Jazz & Blues',
        image: 'images/featured-event-3.jpg',
        dateTime: '28 FEB. 2026 - 08:00 PM',
        address: 'Gran Teatro Nacional',
        city: 'Lima, PE',
        fullAddress: 'Av. Javier Prado Este 2225, San Borja',
        description: `Disfruta de una velada elegante con los clásicos del jazz y blues interpretados por artistas de talla nacional e internacional.`,
        additionalInfo: `Código de vestimenta formal. Consumo de bebidas disponible en el lobby.`,
        tickets: [
            { name: 'Zona Preferencial', price: 70.00 },
            { name: 'Zona VIP', price: 100.00 },
            { name: 'Palco (4 personas)', price: 250.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-12.0945, -76.9932] // Coordenadas del Gran Teatro Nacional (ejemplo)
    },
    {
        id: 'featured-event-4',
        title: 'Batalla de Bandas Emergentes',
        image: 'images/featured-event-4.jpg',
        dateTime: '05 MAR. 2026 - 07:30 PM',
        address: 'Sargento Pimienta',
        city: 'Barranco, PE',
        fullAddress: 'Av. Bolognesi 757, Barranco',
        description: `Descubre nuevos talentos y apoya la escena musical local en esta emocionante batalla de bandas. ¡Tú eliges al ganador!`,
        additionalInfo: `Solo mayores de 18 años. ID obligatoria.`,
        tickets: [
            { name: 'Entrada General', price: 25.00 },
            { name: 'Entrada con Bebida', price: 40.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-12.1480, -77.0255] // Coordenadas de Sargento Pimienta (ejemplo)
    },
    // El evento "BAR CRAWL LIMA" que me pasaste como imagen
    {
        id: 'bar-crawl-lima',
        title: 'BAR CRAWL LIMA: TOUR DE BARES POR BARRANCO',
        image: 'images/bar-crawl-lima.jpg', // Asegúrate de tener esta imagen en tu carpeta 'images'
        dateTime: '14, 15 y 16 de Julio - 08:30 PM',
        address: 'Puerta Principal de la Iglesia del Parque Municipal de Barranco',
        city: 'Lima, PE',
        fullAddress: 'Frente a la Parroquia La Santísima Cruz, Parque Municipal de Barranco',
        description: `¿Deseas experimentar la mejor fiesta de Lima mientras conoces gente nueva de Perú u otras partes del mundo? Ahora Bar Crawl Lima abre en Barranco, luego de más de 10 años en las noches miraflorinas y con salidas cada semana. Descubriremos el distrito más bohemio de Lima llevándote a los mejores lugares de fiesta. Te llevaremos a los 3 bares donde recibirás 1 shot de bienvenida, así como los mejores precios en bebidas y terminar la salida bailando hasta no más dar. También podrás conocer personas de todas partes del mundo y hacerte sentir como en casa con diferentes juegos y dinámicas a lo largo de la noche.`,
        additionalInfo: `Nuestro recorrido inicia a las 8:30 PM. Nos encontramos en la puerta de la Iglesia en el Parque Municipal de Barranco, donde nos pueden reconocer por los paraguas amarillos con el logo de Bar Crawl Lima. Esperaremos unos 15 minutos a las personas que demoraron o asisten al recorrido al momento. Cada salida de tour tiene una duración aproximada de 1 hora. En el primero, la idea es conocernos entre todos los asistentes y generar un buen vínculo. En el segundo comenzamos los juegos y nos iremos preparando para el tercer bar, que suele tener música bailable. Aproximadamente a la medianoche ingresaremos al último lugar, en la que pueden permanecer hasta la hora ustedes deseen. Cabe mencionar que se ofrece 1 shot gratis por bar, así como descuentos especiales exclusivos para el grupo de Bar Crawl Lima para que así solo te preocupes en pasarla muy bien. El código de vestimenta es: No sandalias, no shorts, no buzos, no ropa de baño ni ropa deportiva, ya que los lugares podrían reservarse su derecho de admisión por ello. Atención: por un itinerario a seguir con el fin del éxito del recorrido y por respeto a los demás clientes ya que algunos bares tienen aforo. Es obligatorio presentar el DNI físico para el ingreso a los bares y para el consumo de alcohol. La edad mínima es de 18 años.`,
        tickets: [
            { name: 'BAR CRAWL LIMA TICKETS', price: 80.00 },
            { name: 'BAR CRAWL LIMA TICKETS - Gratidays', price: 54.00 }
        ],
        organizer: 'Colosal Producciones',
        mapCoords: [-12.1466, -77.0229]
    }
];
// --- General DOM Elements (used across pages) ---
const carouselTrack = document.querySelector('.carousel-track');
let carouselSlides = carouselTrack ? Array.from(document.querySelectorAll('.carousel-slide')) : [];
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let slideWidth;
let currentIndex = 0;
let autoSlideInterval;
const AUTO_SLIDE_DELAY = 3000;

// --- Carousel Functions (primarily for index.html hero carousel) ---
function setupCarousel() {
    if (carouselSlides.length > 0) {
        slideWidth = carouselSlides[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${slideWidth}px)`;
    }
}

function cloneSlides() {
    // Only clone if they haven't been cloned already and we have slides
    if (carouselTrack && carouselSlides.length > 0 && carouselTrack.children.length === carouselSlides.length) { 
        const firstSlide = carouselSlides[0].cloneNode(true);
        const lastSlide = carouselSlides[carouselSlides.length - 1].cloneNode(true);

        firstSlide.classList.add('cloned-first');
        lastSlide.classList.add('cloned-last');

        carouselTrack.appendChild(firstSlide);
        carouselTrack.insertBefore(lastSlide, carouselSlides[0]);
        // Re-get all slides including clones
        carouselSlides = Array.from(document.querySelectorAll('.carousel-slide'));
        // Reset transition to instantly jump to the correct starting position
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = `translateX(-${slideWidth}px)`;
        
        // Re-enable transition after a small delay
        setTimeout(() => {
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
}

function moveToSlide(targetIndex) {
    if (carouselTrack) {
        carouselTrack.style.transform = `translateX(-${(targetIndex + 1) * slideWidth}px)`;
        updateDots(targetIndex);
        currentIndex = targetIndex;
    }
}

function updateDots(targetIndex) {
    if (dotsContainer && dotsContainer.children.length > 0) {
        Array.from(dotsContainer.children).forEach(dot => dot.classList.remove('active'));
        if (dotsContainer.children[targetIndex]) {
            dotsContainer.children[targetIndex].classList.add('active');
        }
    }
}

function createDots() {
    if (dotsContainer && carouselSlides.length > 2) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < carouselSlides.length - 2; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                moveToSlide(i);
                stopAutoSlide();
                startAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
        updateDots(currentIndex);
    }
}

function slideNext() {
    let newIndex = currentIndex + 1;
    if (newIndex >= carouselSlides.length - 2) {
        newIndex = 0;
    }
    moveToSlide(newIndex);
}

function slidePrev() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
        newIndex = carouselSlides.length - 3;
    }
    moveToSlide(newIndex);
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        slideNext();
    }, AUTO_SLIDE_DELAY);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

if (nextButton) {
    nextButton.addEventListener('click', () => {
        slideNext();
        stopAutoSlide();
        startAutoSlide();
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        slidePrev();
        stopAutoSlide();
        startAutoSlide();
    });
}

if (carouselTrack) {
    carouselTrack.addEventListener('transitionend', () => {
        const currentTransform = getComputedStyle(carouselTrack).transform;
        const matrix = new DOMMatrixReadOnly(currentTransform);
        const currentX = matrix.m41;
        const visibleClonedIndex = Math.round(Math.abs(currentX) / slideWidth);

        if (visibleClonedIndex === carouselSlides.length - 1) {
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${slideWidth}px)`;
            currentIndex = 0;
            updateDots(currentIndex);
        } 

        else if (visibleClonedIndex === 0) {
            carouselTrack.style.transition = 'none';
            carouselTrack.style.transform = `translateX(-${(carouselSlides.length - 2) * slideWidth}px)`;
            currentIndex = carouselSlides.length - 3;
            updateDots(currentIndex);
        }
        
        setTimeout(() => {
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    });
}

let galleryCarouselTrack = document.querySelector('.gallery-carousel-track');
let galleryCarouselSlides = galleryCarouselTrack ? Array.from(document.querySelectorAll('.gallery-carousel-slide')) : [];
let galleryCurrentIndex = 0;
let gallerySlideWidth;

function setupGalleryCarousel() {
    if (galleryCarouselSlides.length > 0) {
        gallerySlideWidth = galleryCarouselSlides[0].getBoundingClientRect().width;
        galleryCarouselTrack.style.transform = `translateX(-${galleryCurrentIndex * gallerySlideWidth}px)`;
    }
}

function moveGalleryToSlide(targetIndex) {
    if (galleryCarouselTrack) {
        galleryCarouselTrack.style.transform = `translateX(-${targetIndex * gallerySlideWidth}px)`;
        galleryCurrentIndex = targetIndex;
    }
}

function slideGalleryNext() {
    let newIndex = galleryCurrentIndex + 1;
    if (newIndex >= galleryCarouselSlides.length) {
        newIndex = 0;
    }
    moveGalleryToSlide(newIndex);
}

function slideGalleryPrev() {
    let newIndex = galleryCurrentIndex - 1;
    if (newIndex < 0) {
        newIndex = galleryCarouselSlides.length - 1;
    }
    moveGalleryToSlide(newIndex);
}

// Add event listeners for gallery carousel buttons
const galleryNextButton = document.querySelector('.gallery-carousel-button.next');
const galleryPrevButton = document.querySelector('.gallery-carousel-button.prev');
if (galleryNextButton) {
    galleryNextButton.addEventListener('click', slideGalleryNext);
}
if (galleryPrevButton) {
    galleryPrevButton.addEventListener('click', slideGalleryPrev);
}

let currentMap = null;
function setupEventDetailsPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');

    const selectedEvent = eventsData.find(event => event.id === eventId);
    if (!selectedEvent) {
        console.error('Evento no encontrado para el ID:', eventId);
        document.querySelector('.event-details-content .container').innerHTML = '<h2 style="text-align:center; color:var(--color-off-white);">Evento no encontrado.</h2>';
        return;
    }

    // --- LÓGICA PARA SELECCIONAR EL PRECIO CORRECTO (PREVENTA O REGULAR) ---
    const currentDate = new Date();
    let activeTicket = null;
    
    // Buscar la preventa activa
    if (selectedEvent.presaleStages) {
        for (const stage of selectedEvent.presaleStages) {
            // Se compara la fecha y la hora actual con la fecha de finalización de la preventa
            if (currentDate < stage.endDate) {
                activeTicket = stage;
                break; // Detenerse en la primera preventa activa que aún no ha expirado
            }
        }
    }
    
    // Si no hay preventas activas, usar el precio regular
    if (!activeTicket && selectedEvent.regularPrice) {
        activeTicket = selectedEvent.regularPrice;
    }

    // Si no hay ningún precio definido, usar el array de tickets normal
    if (!activeTicket && selectedEvent.tickets && selectedEvent.tickets.length > 0) {
        activeTicket = selectedEvent.tickets[0];
    }

    // Si aún no hay un precio, mostrar un mensaje
    if (!activeTicket) {
        console.error('No se encontraron precios para este evento.');
        const ticketTypesContainer = document.getElementById('ticket-types-container');
        if (ticketTypesContainer) {
             ticketTypesContainer.innerHTML = '<p class="text-center">No hay entradas disponibles en este momento.</p>';
        }
        const purchaseBtn = document.querySelector('.purchase-btn');
        if (purchaseBtn) {
            purchaseBtn.disabled = true;
        }
        const totalPriceSpan = document.getElementById('total-price');
        if (totalPriceSpan) {
            totalPriceSpan.textContent = 'S/ 0.00';
        }
        return;
    }

    // Rellenar el contenido de la página con los datos del evento
    document.title = `Detalles del Evento - ${selectedEvent.title}`;
    const pageTitleElement = document.getElementById('event-detail-title');
    if (pageTitleElement) {
        pageTitleElement.textContent = `Detalles del Evento - ${selectedEvent.title}`;
    }
    
    document.getElementById('event-banner-image').style.backgroundImage = `url(${selectedEvent.image})`;
    document.getElementById('event-detail-name').textContent = selectedEvent.title;
    document.getElementById('event-detail-date-time').textContent = selectedEvent.dateTime;
    document.getElementById('event-detail-address').textContent = selectedEvent.address;
    document.getElementById('event-detail-description').innerHTML = `<p>${selectedEvent.description.replace(/\n/g, '</p><p>')}</p>`;
    document.getElementById('event-detail-additional-info').innerHTML = `<p>${selectedEvent.additionalInfo.replace(/\n/g, '</p><p>')}</p>`;
    document.getElementById('organizer-name').textContent = selectedEvent.organizer;
    document.getElementById('event-detail-city').textContent = selectedEvent.city;
    document.getElementById('event-detail-full-address').textContent = selectedEvent.fullAddress;
    
    // Generar el tipo de ticket dinámicamente (solo el activo)
    const ticketTypesContainer = document.getElementById('ticket-types-container');
    if (ticketTypesContainer) {
        ticketTypesContainer.innerHTML = '';
    
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add('ticket-type');
        ticketDiv.innerHTML = `
            <span class="ticket-name">${activeTicket.name}</span>
            <span class="ticket-price">S/ ${activeTicket.price.toFixed(2)}</span>
            <div class="quantity-selector">
                <button class="quantity-btn minus-btn" data-type="ticket-0">-</button>
                <input type="number" value="0" min="0" class="ticket-quantity" id="ticket-quantity-ticket-0" data-price="${activeTicket.price}">
                <button class="quantity-btn plus-btn" data-type="ticket-0">+</button>
            </div>
        `;
        ticketTypesContainer.appendChild(ticketDiv);
    }
    // --- FIN DE LA LÓGICA PARA MOSTRAR EL PRECIO DINÁMICO ---
    
    const totalPriceSpan = document.getElementById('total-price');
    const purchaseBtn = document.querySelector('.purchase-btn');
    const discountToggle = document.querySelector('.discount-toggle');
    const discountInputArea = document.querySelector('.discount-input-area');
    const privacyConsent = document.getElementById('privacy-consent');
    const ageConsent = document.getElementById('age-consent');
    const viewMapLink = document.getElementById('view-map-link');

    let total = 0;
    function calculateTotal() {
        total = 0;
        document.querySelectorAll('.ticket-quantity').forEach(input => {
            const price = parseFloat(input.dataset.price);
            const quantity = parseInt(input.value);
            if (!isNaN(price) && !isNaN(quantity) && quantity > 0) {
                total += price * quantity;
            }
        });
        if (totalPriceSpan) {
            totalPriceSpan.textContent = `S/ ${total.toFixed(2)}`;
        }
    }

    // --- NUEVO CÓDIGO AÑADIDO: Formulario de datos personales ---
    const ticketPurchaseCard = document.querySelector('.ticket-purchase-card');
    const userDetailsContainer = document.createElement('div');
    userDetailsContainer.classList.add('user-details-form');
    userDetailsContainer.innerHTML = `
        <h3>Datos del comprador</h3>
        <div class="form-group">
            <label for="full-name">Nombre completo:</label>
            <input type="text" id="full-name" placeholder="Tu nombre completo" required>
        </div>
        <div class="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" placeholder="tu.correo@ejemplo.com" required>
        </div>
        <div class="form-group">
            <label for="phone">Número de teléfono:</label>
            <input type="tel" id="phone" placeholder="999-999-999" required>
        </div>
    `;
    // Insertar el formulario antes de los checkboxes (ajustamos el DOM)
    if (privacyConsent) {
        ticketPurchaseCard.insertBefore(userDetailsContainer, privacyConsent.closest('p'));
    } else {
        ticketPurchaseCard.insertBefore(userDetailsContainer, discountToggle);
    }
    // --- FIN DEL CÓDIGO AÑADIDO ---


    // Re-attach event listeners for newly created quantity selectors
    document.querySelectorAll('.quantity-selector').forEach(selector => {
        const minusBtn = selector.querySelector('.minus-btn');
        const plusBtn = selector.querySelector('.plus-btn');
        const quantityInput = selector.querySelector('.ticket-quantity');

        minusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 0) {
                quantityInput.value = currentValue - 1;
                calculateTotal();
            }
        });

        plusBtn.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
            calculateTotal();
        });

        quantityInput.addEventListener('change', () => {
            let value = parseInt(quantityInput.value);
            if (isNaN(value) || value < 0) {
                quantityInput.value = 0;
            }
            calculateTotal();
        });
    });

    if (purchaseBtn) {
        purchaseBtn.addEventListener('click', () => {
            // Validación de entradas seleccionadas
            if (total === 0) {
                alert('Por favor, selecciona al menos una entrada para comprar.');
                return;
            }

            // Obtener y validar datos del formulario
            const fullName = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (!fullName || !email || !phone) {
                alert('Por favor, completa todos los datos del comprador.');
                return;
            }
            
            // Validación de los consentimientos
            if (!privacyConsent || !privacyConsent.checked) {
                alert('Debes aceptar la política de privacidad para continuar.');
                return;
            }
            if (!ageConsent || !ageConsent.checked) {
                alert('Debes confirmar que eres mayor de 18 años para comprar entradas.');
                return;
            }
            
            // --- Generación del mensaje para WhatsApp ----
            
            // Número de teléfono de la empresa para WhatsApp
            const whatsappNumber = '51940615061'; 

            // Recopilar los detalles de la compra
            const orderDetails = [];
            document.querySelectorAll('.ticket-quantity').forEach((input, index) => {
                const quantity = parseInt(input.value);
                if (quantity > 0) {
                    const ticketName = activeTicket.name; // Usamos el nombre del ticket activo
                    const ticketPrice = activeTicket.price; // Usamos el precio del ticket activo
                    orderDetails.push(`${quantity}x ${ticketName} (S/ ${ticketPrice.toFixed(2)})`);
                }
            });

            // Crear el mensaje de la boleta
            const message = `
*SOLICITUD DE COMPRA - COLOSAL*

*Evento:* ${selectedEvent.title}
*Fecha:* ${selectedEvent.dateTime}
*Ubicación:* ${selectedEvent.address}

*Detalle del pedido:*
${orderDetails.join('\n')}

*Total a pagar:* S/ ${total.toFixed(2)}

*Datos del comprador:*
Nombre: ${fullName}
Correo: ${email}
Teléfono: ${phone}

Hola, estoy interesado en comprar entradas para este evento.
`;
            
            // Codificar el mensaje para la URL de WhatsApp
            const encodedMessage = encodeURIComponent(message.trim());
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

            // Abrir la ventana de WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }

    if (discountToggle) {
        discountToggle.addEventListener('click', () => {
            if (discountInputArea.style.display === 'flex') {
                discountInputArea.style.display = 'none';
            } else {
                discountInputArea.style.display = 'flex';
            }
            const arrowIcon = discountToggle.querySelector('.arrow-icon');
            if (arrowIcon) {
                arrowIcon.classList.toggle('rotated');
            }
        });
    }
    // Initial calculation
    calculateTotal();
    
    // Initialize map if it exists
    const mapElement = document.getElementById('map');
    if (mapElement && selectedEvent.mapCoords) {
        // Destruir mapa existente si lo hay para evitar duplicados al recargar dinámicamente
        if (currentMap) {
            currentMap.remove();
        }
        currentMap = L.map('map').setView(selectedEvent.mapCoords, 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(currentMap);

        L.marker(selectedEvent.mapCoords).addTo(currentMap)
            .bindPopup(selectedEvent.address)
            .openPopup();
        
        // Actualizar enlace de Google Maps
        if (viewMapLink) {
            // Se ha corregido la URL de Google Maps para que sea funcional
            viewMapLink.href = `http://maps.google.com/?q=${selectedEvent.mapCoords[0]},${selectedEvent.mapCoords[1]}`;
        }
    }
}

// --- General Interactions (apply to both pages) ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        const nav = document.querySelector('.nav');
        const authButtons = document.querySelector('.auth-buttons');
        // Only attempt to close if mobile menu is open
        if (nav && nav.classList.contains('mobile-nav-open')) {
            nav.classList.remove('mobile-nav-open');
            if (authButtons) {
                authButtons.classList.remove('mobile-nav-open');
            }
            // Update mobile menu button icon
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-label', 'Abrir menú móvil');
            }
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card, .upcoming-event-card').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('.gallery-carousel-slide, .collage-item').forEach(el => {
    observer.observe(el);
});

function createMobileMenu() {
    const nav = document.querySelector('.nav');
    const navWrapper = document.querySelector('.nav-wrapper');
    const authButtons = document.querySelector('.auth-buttons');
    
    let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (!mobileMenuBtn && navWrapper) { // Only create if navWrapper exists and button doesn't
        mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.setAttribute('aria-label', 'Abrir menú móvil');
        navWrapper.appendChild(mobileMenuBtn);
    }
    
    if (mobileMenuBtn && nav && authButtons) { // Ensure all elements exist before adding listener
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-nav-open');
            authButtons.classList.toggle('mobile-nav-open');
            if (nav.classList.contains('mobile-nav-open')) {
                mobileMenuBtn.innerHTML = '✕';
                mobileMenuBtn.setAttribute('aria-label', 'Cerrar menú móvil');
            } else {
                mobileMenuBtn.innerHTML = '☰';
                mobileMenuBtn.setAttribute('aria-label', 'Abrir menú móvil');
            }
        });
    } else {
        console.warn("Mobile menu elements not found (nav, auth-buttons, or mobile-menu-btn). Mobile menu functionality might not work.");
    }
    
    function checkScreenSize() {
        if (nav && authButtons && mobileMenuBtn) { // Ensure elements exist
            if (window.innerWidth > 768) { // Desktop view
                nav.classList.remove('mobile-nav-open');
                authButtons.classList.remove('mobile-nav-open');
                mobileMenuBtn.innerHTML = '☰'; // Reset icon in case it was '✕'
                mobileMenuBtn.setAttribute('aria-label', 'Abrir menú móvil');
            }
        }
    }
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Initial check on load
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('Joinnus Clone cargado exitosamente!');
    
    // Check if on index.html or event_details.html
    if (document.querySelector('.hero-carousel-section')) {
        // Logic for index.html
        if (carouselTrack && carouselSlides.length > 0) {
            setupCarousel();
            cloneSlides(); // Call cloneSlides after setupCarousel to get initial width
            createDots();
            updateDots(currentIndex); // Ensure the first dot is active on load
            startAutoSlide();
        } else {
            console.warn("Hero carousel elements not found. Hero carousel functionality will not work.");
        }

        if (galleryCarouselTrack && galleryCarouselSlides.length > 0) {
            setupGalleryCarousel();
        } else {
            console.warn("Gallery carousel elements not found. Gallery carousel functionality might not work.");
        }
    } else if (document.querySelector('.event-details-content')) {
        // Logic for event_details.html
        setupEventDetailsPage();
    }

    createMobileMenu();
    
    // Add a slight delay for body class to ensure CSS transitions apply smoothly
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

window.addEventListener('resize', () => {
    // Recalculate slide width and adjust transform on resize for hero carousel
    if (document.querySelector('.hero-carousel-section') && carouselTrack && carouselSlides.length > 0) {
        slideWidth = carouselSlides[0].getBoundingClientRect().width;
        carouselTrack.style.transition = 'none'; // Temporarily disable transition
        carouselTrack.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
        // Re-enable transition after a very small delay
        setTimeout(() => {
            carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
    // Recalculate slide width and adjust transform on resize for gallery carousel
    if (document.querySelector('.gallery-carousel-container') && galleryCarouselTrack && galleryCarouselSlides.length > 0) {
        setupGalleryCarousel(); // This already handles resize logic for gallery
    }
});

// Función para obtener el valor de un parámetro específico de la URL (ej. el 'id')
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Función principal para cargar los detalles del evento
function loadEventDetails() {
    // 1. Obtener el ID del evento de la URL
    var eventId = getUrlParameter('id'); 
    
    // 2. Definir los nombres de los eventos según el ID
    var eventNames = {
        "band-event-1": "Chester vs Emili",
        "band-event-2": "Emo Party Vol 3",
        "band-event-3": "Nostalgik As F*k Vol 1",
        // Puedes agregar más eventos aquí:
        // "band-event-4": "Concierto Banda Trujillo" 
    };

    // 3. Buscar el nombre del evento
    var eventTitle = eventNames[eventId];

    // 4. Mostrar el nombre si el ID es válido
    if (eventTitle) {
        // Encontrar el elemento <h3> por su ID
        var titleElement = document.getElementById('event-title-display');
        
        // Si el elemento existe en la página
        if (titleElement) {
            // Reemplazar el texto de "Descripción del Evento" por el nombre real
            titleElement.textContent = eventTitle; 
        }
    }
}

// Asegúrate de que esta función se ejecute cuando la página cargue
// Si tu archivo JS se incluye al final del body, esto funcionará:
loadEventDetails();