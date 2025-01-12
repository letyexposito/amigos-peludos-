// Intercambio de imágenes al hacer clic
const imagen = document.getElementById("imagen");
imagen.addEventListener("click", function() {
    if (imagen.src === "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foxteri%C3%A9r_a_koc%C3%BAr.jpg/1024px-Foxteri%C3%A9r_a_koc%C3%BAr.jpg") {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/6/64/Cat_and_dog_standoff_%283926784260%29.jpg";
    } else {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foxteri%C3%A9r_a_koc%C3%BAr.jpg/1024px-Foxteri%C3%A9r_a_koc%C3%BAr.jpg";
    }
});

// Función para cambiar el texto al escribir en el campo
const campoTexto = document.getElementById("campoTexto");
const parrafo = document.getElementById("parrafo");

campoTexto.addEventListener("input", function() {
    parrafo.textContent = campoTexto.value;
});

// Movimiento de la pata de perro
const pata = document.getElementById("pata");
let posX = 50;
let posY = 50;

function moverPata() {
    posX += 5;
    posY += 5;

    if (posX > window.innerWidth - 100) {
        posX = 50;
    }

    if (posY > window.innerHeight - 100) {
        posY = 50;
    }

    pata.style.transform = `translate(${posX}px, ${posY}px)`;
}

setInterval(moverPata, 100);

// Función para cambiar el nombre del usuario
let miBoton = document.querySelector('#changeUser');
let miEncabezado = document.querySelector('h1 span');

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

