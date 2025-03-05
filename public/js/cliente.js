/* Scrip para frontend */
/*const socket = io('/cliente');*/ 

const fragmento = document.createDocumentFragment();

/* Invocamos a los botones */
let btnMenuGaleria = document.querySelector('#btnMenuGaleria');
let btnMenuAlbum = document.querySelector('#btnMenuAlbum');
let btnMenuNotificacion = document.querySelector('#btnMenuNotificacion');
let btnMenuConfiguracion = document.querySelector('#btnMenuConfiguracion');
let btnMenuCerrar = document.querySelector('#btnMenuCerrar');


let contenedorReactivo = document.querySelector('#contenedorReactivo');

/* Invocamos las clases o ids de los templates */
const templateGaleria = document.querySelector('#templateGaleria').content;
const templateAlbum = document.querySelector('#templateAlbum').content;
const templateNotificacion = document.querySelector('#templateNotificacion').content;
const templateConfiguracion = document.querySelector('#templateConfiguracion').content;


/* Variables globales */
let listadoGeneralGaleria = {};



/* Sockets de escucha */
/* socket.on('/index/listarUsuarios', (data)=>{
    listadoGeneralContactos = data;  
    console.log(listadoGeneralContactos);
    
}) */

/* Funciones de los botones para reenderizar elDOM */
// Funcion para el boton de galeria
btnMenuGaleria.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateGaleria.querySelector('.mi-galeria').textContent = "Soy parte de Mi galeria";

    const clone = templateGaleria.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});
// Funcion para el boton de album
btnMenuAlbum.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateAlbum.querySelector('.mi-album').textContent = "Soy parte de Mi Album";

    const clone = templateAlbum.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});
// Funcion para el boton de notificacion
btnMenuNotificacion.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateNotificacion.querySelector('.notificaciones').textContent = "Soy parte de Notificaciones";

    const clone = templateNotificacion.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});
// Funcion para el boton de configuracion
btnMenuConfiguracion.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateConfiguracion.querySelector('.configuracion').textContent = "Mis Configuraciones";

    const clone = templateConfiguracion.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});
  // Modal paara cerrar sesion con sweetalert
btnMenuCerrar.addEventListener('click', function(){
    Swal.fire({ 
        title: '¿Estás seguro?', 
        text: 'Esta seguro que deseas cerrar la sesion?', 
        icon: 'warning', 
        showCancelButton: true, 
        confirmButtonColor: '#3085d6', 
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Si, cerrar sesion' 
    }).then((result) => {
        if (result.value) {
            Swal.fire({ 
                title: 'Cerrando sesion', 
                text: 'Espera un momento...', 
                icon: 'success', 
                showCancelButton: false, 
                confirmButtonColor: '#3085d6', 
                confirmButtonText: 'Aceptar' 
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/logout';
                }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({ 
                title: 'Cancelar', 
                text: 'No has cerrado la sesion', 
                icon: 'error', 
                showCancelButton: false, 
                confirmButtonColor: '#3085d6', 
                confirmButtonText: 'Aceptar' 
            });
        }
    });
});