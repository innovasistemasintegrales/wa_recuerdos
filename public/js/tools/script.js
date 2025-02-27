$(document).ready(main);

var cont = 1;
function main(){
    let boton = document.querySelector("#menuBtn");
    let menu = document.querySelector("#sideMenu");

    boton.addEventListener('click', e=>{
        menu.classList.toggle("menu-expandido");
        menu.classList.toggle("menu-colapsado");

        document.querySelector('body').classList.toggle('body-expandido');
    });
}