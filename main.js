const app = document.getElementById('typewrite');

const typewrite = new typewrite(app, {
    loop: true,
    delay: 75
})

typewrite
    .typeString('Parque Lambramani - Arequipa')
    .pauseFor(200)
    .start();
