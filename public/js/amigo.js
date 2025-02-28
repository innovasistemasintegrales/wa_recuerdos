// ===================== FUNCIONES GENERALES DEL USUARIO (AMIGO) ======================
// Funcion para mostrar y ocultar el header
document.addEventListener('DOMContentLoaded', function () {
    const cajaHeader = document.getElementById('cajaHeader');
    const seccionContenidoGeneral = document.getElementById('seccionContenidoGeneral');
    const contenedorOrganizar = document.getElementById('contenedorOrganizar');

    // Tamaño del contenedor Caja Header
    const cajaHeaderHeight = cajaHeader.offsetHeight;

    seccionContenidoGeneral.addEventListener('scroll', function () {
        let distanciaAlTop = contenedorOrganizar.getBoundingClientRect().top;

        if (distanciaAlTop <= cajaHeaderHeight + 1) {
            cajaHeader.classList.add('oculto'); // Mueve el header hacia arriba
        } else {
            cajaHeader.classList.remove('oculto'); // Lo vuelve a bajar
        }
    });
});

// Crear el fragmento
const fragmento = document.createDocumentFragment();

// Capturar botones
const btnMiPerfil = document.getElementById('btnMiPerfil');
const btnNotificacion = document.getElementById('btnNotificacion');
const btnMiGaleria = document.getElementById('btnMiGaleria');
const btnMisAlbumes = document.getElementById('btnMisAlbumes');
const btnCerrarSesion = document.getElementById('btnCerrarSesion');

// Lista de los botones del menu
const listBotones = [btnMiPerfil, btnNotificacion, btnMiGaleria, btnMisAlbumes, btnCerrarSesion];

// Capturamos seccion contenido reactivo
const seccionContenidoReactivo = document.getElementById('seccionContenidoReactivo');

// Capturamos los templates
const templateMiPerfil = document.querySelector('#templateMiPerfil').content;
const templateMisAlbumes = document.querySelector('#templateMisAlbumes').content;
const templateMiGaleria = document.getElementById('seccionMiGaleria');
const templateNotificaciones = document.getElementById('templateNotificaciones').content;

// Funcion para activar y limpiar items
function activarItem(idBoton) {
    listBotones.forEach((item) => {
        if (item.id === idBoton) {
            item.classList.add('activo');
        } else {
            item.classList.remove('activo');
        }
    });
}

// Escuchamos los inputs en el Seccion del contenido reactivo
seccionContenidoReactivo.addEventListener('input', (event) => {
    // Buscar Elementos
    if (event.target.id === 'cajaBuscarGaleria') {
        let elementoBuscar = event.target.value.toLowerCase();
        let contenedorElementos = document.querySelectorAll('.contenedor-archivo');
        const contadorGaleria = document.getElementById('contadorGaleria');
        let elementosEncontrados = 0;

        contenedorElementos.forEach((elemento) => {
            let nombreElemento = elemento.querySelector('#nombreElemento').textContent.toLowerCase();
            if (nombreElemento.includes(elementoBuscar)) {
                elemento.style.display = '';
                elementosEncontrados++;
            } else {
                elemento.style.display = 'none';
            }
        });
        contadorGaleria.textContent = `${elementosEncontrados} ${elementosEncontrados === 0 || elementosEncontrados >= 2 ? 'Elementos' : 'Elemento'}`;
    }

    // Buscar Albumes
    if (event.target.id === 'cajaBuscarAlbum') {
        let albumBuscar = event.target.value.toLowerCase();
        let contenedorAlbumes = document.querySelectorAll('.contenedor-album');
        const contadorAlbumes = document.getElementById('contadorAlbumes');
        let albumesEncontrados = 0;

        contenedorAlbumes.forEach((album) => {
            let nombreAlbum = album.querySelector('#nombreAlbum').textContent.toLowerCase();
            if (nombreAlbum.includes(albumBuscar)) {
                album.style.display = '';
                albumesEncontrados++;
            } else {
                album.style.display = 'none';
            }
        });

        contadorAlbumes.textContent = `${albumesEncontrados} ${albumesEncontrados === 0 || albumesEncontrados >= 2 ? 'Albumes' : 'Album'}`;
    }
});

// Fucion Click Boton Notificaciones
btnNotificacion.addEventListener('click', () => {
    seccionContenidoReactivo.innerHTML = '';
    const notificacionesClonado = templateNotificaciones.cloneNode(true);
    fragmento.appendChild(notificacionesClonado);
    seccionContenidoReactivo.appendChild(fragmento);
    activarItem(btnNotificacion.id);
});

// Funcion Click Boton Mi Perfil
btnMiPerfil.addEventListener('click', () => {
    seccionContenidoReactivo.innerHTML = '';

    const miPerfilClonado = templateMiPerfil.cloneNode(true);

    fragmento.appendChild(miPerfilClonado);

    seccionContenidoReactivo.appendChild(fragmento);

    activarItem(btnMiPerfil.id);
});

// Funcion Click Boton Mi Galeria
btnMiGaleria.addEventListener('click', () => {
    seccionContenidoReactivo.innerHTML = '';

    const miGaleriaClonado = templateMiGaleria.cloneNode(true);

    fragmento.appendChild(miGaleriaClonado);

    seccionContenidoReactivo.appendChild(fragmento);

    activarItem(btnMiGaleria.id);
});

// Funcion Click Boton Mis Albumes
btnMisAlbumes.addEventListener('click', () => {
    seccionContenidoReactivo.innerHTML = '';

    const misAlbumesClonado = templateMisAlbumes.cloneNode(true);

    fragmento.appendChild(misAlbumesClonado);

    seccionContenidoReactivo.appendChild(fragmento);

    activarItem(btnMisAlbumes.id);
});

// Funcion para cerrar sesion
btnCerrarSesion.addEventListener('click', () => {
    Swal.fire({
        title: '¿Deseas cerrar sesión?',
        text: 'Se cerrará tu cuenta en este dispositivo.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#40a748',
        cancelButtonColor: '#ed1515',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        backdrop: 'rgba(0, 0, 0, 0.91)',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('Sesión cerrada');
            // Aquí puedes agregar la lógica para cerrar sesión, como redirigir o eliminar tokens.
        }
    });
});
