// Funcion para mostrar y ocultar el header
document.addEventListener('DOMContentLoaded', function () {
    const cajaHeader = document.getElementById('cajaHeader');
    const contenedorContenidoPrincipal = document.getElementById(
        'contenedorContenidoPrincipal'
    );
    const contenedorOrganizar = document.getElementById('contenedorOrganizar');

    // Tamaño del contenedor Caja Header
    const cajaHeaderHeight = cajaHeader.offsetHeight;

    contenedorContenidoPrincipal.addEventListener('scroll', function () {
        let distanciaAlTop = contenedorOrganizar.getBoundingClientRect().top;

        if (distanciaAlTop <= cajaHeaderHeight + 1) {
            cajaHeader.classList.add('oculto'); // Mueve el header hacia arriba
        } else {
            cajaHeader.classList.remove('oculto'); // Lo vuelve a bajar
        }
    });
});
