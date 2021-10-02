




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




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CALCULADORA

const chapaPrecio = 3200;
const poliChapa = 7000;
const escondidoTecho = 6500;
const decktablas = 8500;

function Chapa() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    let producto = numero1 * numero2;

    var precioTotal1 = producto * chapaPrecio;

    document.getElementById('resultado').innerText = "EN CHAPA: $"+precioTotal1;
}

function Policarbonato() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    let producto = numero1 * numero2;

    var precioTotal2 = producto * poliChapa;

    document.getElementById('resultado').innerText = "EN POLICARBONATO: $"+ precioTotal2;
}

function Escondido() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    let producto = numero1 * numero2;

    var precioTotal3 = producto * escondidoTecho;

    document.getElementById('resultado').innerText = "ESCONDIDO: $"+precioTotal3;
}

function Deck() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    let producto = numero1 * numero2;

    var precioTotal4 = producto * decktablas;

    document.getElementById('resultado').innerText = "CON TABLAS DECK: $"+ precioTotal4;
}

function CanaletaL() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2a = numero1 * 1500;

    document.getElementById('resultado2').innerText = producto2a;
    
}

function CanaletaA() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2b = numero2 * 1500;

    document.getElementById('resultado3').innerText = producto2b;
    
}

function BabetaL() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2c = numero1 * 1300;

    document.getElementById('resultado4').innerText = producto2c;
    
}

function BabetaA() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2d = numero2 * 1300;

    document.getElementById('resultado5').innerText = producto2d;
    
}

function CanaletaYbabetaL() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2f = numero1 * 2800;

    document.getElementById('resultado6').innerText = producto2f;
    
}

function CanaletaYbabetaA() {
    let numero1 = document.getElementById('primerNumero').value;
    let numero2 = document.getElementById('segundoNumero').value;

    var producto2g = numero2 * 2800;

    document.getElementById('resultado7').innerText = producto2g;
    
}

// function PrecioFinal() {
//     let precioTotal1 = document.getElementById('resultado').value;
//     let producto2a = document.getElementById('resultado2').value;

//     var FinalPrice = precioTotal1 + producto2a;

//     document.getElementById('resultado3').innerText = FinalPrice;
    
// }

