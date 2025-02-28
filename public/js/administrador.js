/* Scrip para frontend */
const socket = io('/administrador');

const fragmento = document.createDocumentFragment();

/* Invocamos a los botones */
let btnMenuContactos = document.querySelector('#btnMenuContactos');
let btnMenuGaleria = document.querySelector('#btnMenuGaleria');
let btnMenuAlbum = document.querySelector('#btnMenuAlbum');
let btnMenuNotificacion = document.querySelector('#btnMenuNotificacion');
let btnMenuConfiguracion = document.querySelector('#btnMenuConfiguracion');
let btnMenuCerrar = document.querySelector('#btnMenuCerrar');


let contenedorReactivo = document.querySelector('#contenedorReactivo');

/* Invocamos las clases o ids de los templates */
const templateContactos = document.querySelector('#templateContactos').content;
const templateGaleria = document.querySelector('#templateGaleria').content;
const templateAlbum = document.querySelector('#templateAlbum').content;
const templateNotificacion = document.querySelector('#templateNotificacion').content;
const templateConfiguracion = document.querySelector('#templateConfiguracion').content;


/* Variables globales */
let listadoGeneralContactos = {};



/* Sockets de escucha */
/* socket.on('/index/listarUsuarios', (data)=>{
    listadoGeneralContactos = data;  
    console.log(listadoGeneralContactos);
    
}) */

/* Funciones de los botones para reenderizar elDOM */


btnMenuContactos.addEventListener('click', function(){
    
    contenedorReactivo.innerHTML = "";

    templateContactos.querySelector('.mis-contactos').textContent = "Soy parte de contactos";

    const clone = templateContactos.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});

btnMenuGaleria.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateGaleria.querySelector('.mi-galeria').textContent = "Soy parte de Mi galeria";

    const clone = templateGaleria.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});
btnMenuGaleria.addEventListener('click', function(){
    contenedorReactivo.innerHTML = "";

    templateGaleria.querySelector('.mi-galeria').textContent = "Soy parte de Mi galeria";

    const clone = templateGaleria.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorReactivo.appendChild(fragmento);
});