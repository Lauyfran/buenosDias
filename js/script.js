document.addEventListener('DOMContentLoaded', () => {
    const sun = document.querySelector('.sun');
    const cloud = document.querySelector('.cloud');
    const cloudRight = document.querySelector('.cloud-right');
    const message = document.querySelector('.message');
    const subMessage = document.querySelector('.sub-message');

    // Animar el sol
    sun.animate([
        { top: '-20vw' },
        { top: '10%' }
    ], {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease-in-out'
    });

    // Animar la nube izquierda
    cloud.animate([
        { left: '-20%' },
        { left: '120%' }
    ], {
        duration: 10000,
        iterations: Infinity,
        easing: 'linear'
    });

    // Animar la nube derecha
    cloudRight.animate([
        { right: '-20%' },
        { right: '120%' }
    ], {
        duration: 10000,
        iterations: Infinity,
        easing: 'linear'
    });

    // Mostrar los mensajes
    setTimeout(() => {
        message.style.opacity = 1;
        message.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 3000,
            fill: 'forwards'
        });
    }, 5000);

    setTimeout(() => {
        subMessage.style.opacity = 1;
        subMessage.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 3000,
            fill: 'forwards'
        });
    }, 7000);
});
