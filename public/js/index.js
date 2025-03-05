/* Scrip para frontend */
const socket = io('/index');


const fragmento = document.createDocumentFragment();

let contenedorSlider = document.querySelector('#contenedorSlider');

const templateSlider = document.querySelector('#templateSlider').content;

let listadoGeneralSlider = {};

/* socket.on('/index/listarSliders', (data)=>{
    listadoGeneralSlider = data;  
    listarSlider() 
}) */

function listarSlider() {
    contenedorSlider.innerHTML = "";

    let slider = listadoGeneralSlider;

    let imagen1 = "https://i.pinimg.com/736x/c1/8c/f5/c18cf5ea96b5f0004dfb3e06253a659d.jpg"
    let imagen2 = "https://elements-resized.envatousercontent.com/elements-video-cover-images/files/319409258/Image-Photo-Memories-Ae-01.jpg?w=1600&cf_fit=cover&q=85&format=auto&s=39ef5c8f6b3a3da2361dd8fa023074c6e1192b9cf7c50d963df0b51f33e7c88a"
    let imagen3 = "https://lh5.googleusercontent.com/-9KqBk-sO35E/U0A3kOQE-0I/AAAAAAAAO10/ZaaJvnh7UpI/s1024/SLIDER%2520recuerdos%25202013.jpg"

    templateSlider.querySelector('.img-slider1').setAttribute("src", imagen1);
    templateSlider.querySelector('.img-slider2').setAttribute("src", imagen2);
    templateSlider.querySelector('.img-slider3').setAttribute("src", imagen3);

    const clone = templateSlider.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorSlider.appendChild(fragmento);
}

listarSlider()

