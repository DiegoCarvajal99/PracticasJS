let nombre = ""

function mostrarMensaje(){
    nombre = prompt("Ingrese su nombre");

    if (nombre === null || nombre === "" || !isNaN(nombre)) {
        alert("Debe ingresar un nombre valido")
    } else {
        nombre = nombre.toLowerCase();
        
            alert("¡Hola, "+nombre+"! espero que estés disfruntando de Javascript.")            
        }
        
    }
    