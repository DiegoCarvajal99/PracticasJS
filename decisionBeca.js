let nombre = prompt("Ingrese su nombre");
if (nombre === null || nombre === "" || !isNaN(nombre)) {
  alert("debe ingresar un nombre valido");
} else {
  let edad = prompt("Ingrese su edad");
  if (isNaN(edad) || edad === null || edad === "") {
    alert("Debe ingresar una edad valida");
  } else {
    let pais = prompt("Ingrese su pais");
    if (pais === null || pais === "" || !isNaN(pais)) {
      alert("Debe ingresar un pais valido");
    } else {
      let departamento = prompt("Ingrese su departamento");
      if (
        departamento === null ||
        departamento === "" ||
        !isNaN(departamento)
      ) {
        alert("Debe ingresar un departamento valido");
      } else {
        pais = pais.toLowerCase();
        departamento = departamento.toLowerCase();
        if (edad > 18 && departamento === "toronto" && pais === "canada") {
          alert("¡Felicitaciones usted ha obtenido su beca! :D");
        } else {
          alert("Lo sentimos usted no aplica para la beca :(");
        }
      }
    }
  }
}
