
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
