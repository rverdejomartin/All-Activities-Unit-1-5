let imagen;
let moviendo = false;
let coor = { x: 0, y: 0 };

window.onload = function() {
    imagen = document.getElementById('imagen');
    if (!imagen) {
        console.error("Elemento no encontrado.");
        return;
    }

    imagen.addEventListener('mousedown', iniciarArrastre);
    document.addEventListener('mouseup', finalizarArrastre);
};


function iniciarArrastre(e) {
    moviendo = true;
    e.preventDefault();
    document.addEventListener('mousemove', moverElemento);

    coor.x = e.clientX - imagen.offsetLeft;
    coor.y = e.clientY - imagen.offsetTop;
}

function moverElemento(e) {
    let newX = e.clientX - coor.x;
    let newY = e.clientY - coor.y;

    imagen.style.left = newX + 'px';
    imagen.style.top = newY + 'px';
}

function finalizarArrastre() {
    if (moviendo) {
        document.removeEventListener('mousemove', moverElemento);
        moviendo = false;
        imagen.style.cursor = 'grab';
    }
}