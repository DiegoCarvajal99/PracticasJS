let edad = prompt("Ingrese su edad");

if (!isNaN(edad) && edad != null && edad != "") {
    if (edad>18) {
        alert("Usted es mayor de edad")
    } else {
    alert("Usted es menor de edad")
        
    }
} else {
    alert("El dato "+edad+" ingresado no es un numero")
    
}