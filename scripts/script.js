// Cambiar imagen al poner el ratón encima
const imagen = document.getElementById("mainImage");
const imagenOriginal = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Foxteri%C3%A9r_a_koc%C3%BAr.jpg/1024px-Foxteri%C3%A9r_a_koc%C3%BAr.jpg";
const imagenCambio = "https://upload.wikimedia.org/wikipedia/commons/2/2c/Gato_9-_Con_perro_durmiendo.jpg";

imagen.addEventListener("mouseenter", function () {
    imagen.src = imagenCambio;
});

imagen.addEventListener("mouseleave", function () {
    imagen.src = imagenOriginal;
});

// Cambiar el nombre del usuario
let miBoton = document.getElementById('changeUser');
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

