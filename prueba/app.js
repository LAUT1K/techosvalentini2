let m2 = prompt("Ingresa tus metros cuadrados");
if (m2 == "") {
    alert("No intrudiciste ningún nombre");
} else {
    alert("Hola " + nombre + ", Como andas?");
    alert("Porfavor ingresa la edad que tenes");
}
let edad = prompt("Ingresa tu edad");
edad = Number(edad); 
if (edad > 3 && edad < 10 ) {
    alert ("Todavia sos muy niño para el sitio");
} else if (edad >= 10 && edad < 18) {
    alert ("Aun sos menor de edad, no puedes continuar en el sitio");
} else if (edad >= 18 && edad < 90) {
    alert ("Ya sos mayor de edad, podes continuar");
    let zona = prompt("Igresa en que zona queres buscar tu propiedad (norte, sur, este u oeste");
    if (zona == "sur" || zona == "Sur") {
        alert ("Estos son los resultados para zona sur")
    }
    else if (zona == "norte" || zona == "Norte") {
        alert ("Estos son los resultados para zona norte")
    }
    else if (zona == "oeste" || zona == "Oeste") {
        alert ("Estos son los resultados para zona oeste")
    }
    else if (zona == "este" || zona == "Este"
    ) {
        alert ("Estos son los resultados para zona este")
    }
} else {
    alert ("No intrudiciste un valor validad de edad, volve a ingresarlo");
}


