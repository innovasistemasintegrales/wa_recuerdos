/* Scrip para frontend */
const socket = io('/index');


const fragmento = document.createDocumentFragment();

let contenedorSlider = document.querySelector('#contenedorSlider');

const templateSlider = document.querySelector('#templateSlider').content;

let listadoGeneralSlider = {};
let listadoGeneralUsuarios = {};

socket.on('/index/listarUsuarios', (data)=>{
    listadoGeneralUsuarios = data;  
    console.log(listadoGeneralUsuarios);
    
})

function listarSlider() {
    contenedorSlider.innerHTML = "";

    let slider = listadoGeneralSlider;

    let imagen1 = "https://i2.wp.com/factoriayuguero.com/wp-content/uploads/2019/07/slider-recuerdos-copia.jpg?resize=1024%2C358&ssl=1"
    let imagen2 = "https://i.ytimg.com/vi/dsq_4o3UKT8/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGFogSyhlMA8=&rs=AOn4CLAavhbst5VrtZSsGaJsTuouJ-Ii2A"
    let imagen3 = "https://lh5.googleusercontent.com/-9KqBk-sO35E/U0A3kOQE-0I/AAAAAAAAO10/ZaaJvnh7UpI/s1024/SLIDER%2520recuerdos%25202013.jpg"

    templateSlider.querySelector('.img-slider1').setAttribute("src", imagen1);
    templateSlider.querySelector('.img-slider2').setAttribute("src", imagen2);
    templateSlider.querySelector('.img-slider3').setAttribute("src", imagen3);

    const clone = templateSlider.cloneNode(true);
    fragmento.appendChild(clone);

    contenedorSlider.appendChild(fragmento);
}

listarSlider()

