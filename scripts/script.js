// Cambiar imagen al poner el ratón encima
const imagen = document.getElementById("imagen");
const imagenOriginal = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foxteri%C3%A9r_a_koc%C3%BAr.jpg/1024px-Foxteri%C3%A9r_a_koc%C3%BAr.jpg";
const imagenCambio = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Perro_y_gato_durmiendo_en_el_sill%C3%B3n.jpg";

imagen.addEventListener("mouseenter", function() {
    imagen.src = imagenCambio;
});

imagen.addEventListener("mouseleave", function() {
    imagen.src = imagenOriginal;
});

// Campo de texto para cambiar el contenido del párrafo
const campoTexto = document.getElementById("campoTexto");
const parrafo = document.getElementById("parrafo");

campoTexto.addEventListener("input", function() {
    parrafo.textContent = campoTexto.value;
});

// Movimiento de la pata de perro
let pata = document.getElementById("pata");

let posX = 50;
let posY = 50;

setInterval(function() {
    posX += 5;
    if (posX > window.innerWidth) {
        posX = 0;
    }
    pata.style.transform = `translate(${posX}px, ${posY}px)`;
}, 100);

// Cambiar el nombre del usuario
let miBoton = document.querySelector('#changeUser');
let miEncabezado = document.querySelector('h1 span');

function establecerNombre() {
    let miNombre = prompt('Por favor, ingresa tu nombre:');
    if (!miNombre || miNombre === null) {
        miNombre = 'Amante de Mascotas';
    }
    localStorage.setItem('nombre', miNombre);
    miEncabezado.textContent = miNombre;
    document.body.style.fontFamily = "'Open Sans', sans-serif";
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

