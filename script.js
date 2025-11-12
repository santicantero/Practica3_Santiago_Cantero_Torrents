// Galería de producto: sincroniza thumbs -> imagen principal
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main-img img');
    const thumbs = document.querySelectorAll('.thumbs img');
    if (!main || !thumbs.length) return;

    // Si por lo que sea no hay src inicial, usa la primera miniatura
    if (!main.getAttribute('src')) {
        main.src = thumbs[0].dataset.full || thumbs[0].src;
        thumbs[0].classList.add('active');
    }

    thumbs.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const url = img.dataset.full || img.src;

            // Evita parpadeos: solo cambia si es distinta
            if (main.src !== url) {
                main.classList.add('loading');
                main.onload = () => main.classList.remove('loading');
                main.onerror = () => {
                    // fallback si falla la ruta
                    main.src = img.src;
                    main.classList.remove('loading');
                };
                main.src = url;
            }

            thumbs.forEach(t => t.classList.remove('active'));
            img.classList.add('active');
        });
    });
});
