let ubicacionPrincipal = window.pageYOffset;


var precio = "#nombre"

window.addEventListener("scroll", function(){
     let desplazamientoActual = window.pageYOffset;
     if(ubicacionPrincipal>=desplazamientoActual){
         document.getElementsByTagName("nav")[0].style.top = "0px"
     }else{
         document.getElementsByTagName("nav")[0].style.top  = "-100px"
     }
     ubicacionPrincipal = desplazamientoActual;
})

//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburger")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburger")[0].style.color = "#000";
        semaforo = true;
    }
    enlacesHeader.classList.toggle("menudos")
});


//CONTACTO
function validarFormulario(){
    //declaracion de variables

    var nombre=$('#nombre').validarFormulario();
        correo=$('#nombre').validarFormulario();
        numero=$('#numero').validarFormulario();
        asunto=$('#asunto').validarFormulario();  
        mensaje=$('#mensaje').validarFormulario();  

        //vvalidacion de campo nombre

        if(nombre=="" || nombre==null){
            console.log('nombre');
            return false;
        }
}

//funcion cambiar colorlos bordes

function cambiarColor(dato){
    $('#' + dato).css({
        border: " 2px solid #dd5144"
    });
}


//loader

window.addEventListener('load', () => {
    const contenedor_loader = document.querySelector('.contenedorlo')
    contenedor_loader.style.opacity = 0
    contenedor_loader.style.visibility = 'hidden'
})
