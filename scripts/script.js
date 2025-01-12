let miBoton = document.querySelector('#changeUser');
let miEncabezado = document.querySelector('h1 span');
let miImagen = document.querySelector('#mainImage');
let userText = document.querySelector('#userText');
let movingBox = document.querySelector('#movingBox');

function establecerNombre() {
    let miNombre = prompt('Por favor, ingresa tu nombre:');
    if (!miNombre || miNombre === null) {
        miNombre = 'Amante de Mascotas';
    }
    localStorage.setItem('nombre', miNombre);
    miEncabezado.textContent = miNombre;
}

if (!localStorage.getItem('nombre')) {
    establecerNombre();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miEncabezado.textContent = nombreAlmacenado;
}

miBoton.onclick = function () {
    establecerNombre();
};

// Intercambio de imágenes al hacer clic
miImagen.onclick = function () {
    if (miImagen.src.includes('Foxteri%C3%A9r_a_koc%C3%BAr.jpg')) {
        miImagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Golden_Retriever_2013.jpg/1024px-Golden_Retriever_2013.jpg';
    } else {
        miImagen.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foxteri%C3%A9r_a_koc%C3%BAr.jpg/1024px-Foxteri%C3%A9r_a_koc%C3%BAr.jpg';
    }
};

// Campo de texto para cambiar texto
userText.addEventListener('input', function () {
    miEncabezado.textContent = userText.value || 'Amante de Mascotas';
});

// Objeto en movimiento
let boxPosition = { x: 10, y: 10 };
document.addEventListener('keydown', function (event) {
    const step = 10;
    if (event.key === 'ArrowUp') boxPosition.y -= step;
    if (event.key === 'ArrowDown') boxPosition.y += step;
    if (event.key === 'ArrowLeft') boxPosition.x -= step;
    if (event.key === 'ArrowRight') boxPosition.x += step;

    movingBox.style.top = boxPosition.y + 'px';
    movingBox.style.left = boxPosition.x + 'px';
});

