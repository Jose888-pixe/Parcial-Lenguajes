document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let apellido = document.getElementById("apellido").value;
  let nombre = document.getElementById("nombre").value;
  let dni = document.getElementById("dni").value;
  let fecha = document.getElementById("fecha").value;
  let email = document.getElementById("email").value;

  if (apellido === "" || nombre === "" || dni === "" || fecha === "" || email === "") {
    alert("Todos los campos son obligatorios");
    return;
  }
  if (!/^[a-zA-Z\s]+$/.test(apellido)) {
    alert("Apellido inválido");
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(nombre)) {
    alert("Nombre inválido");
    return;
  }

  if (dni.length !== 8) {
    alert("DNI inválido (debe tener 8 números)");
    return;
  }

  let año = new Date(fecha).getFullYear();
  if (año >= 2006) {
    alert("La fecha debe ser posterior al año 2006");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Email inválido");
    return;
  }

  alert("Formulario válido");
});

document.getElementById("preguntas").addEventListener("click", function() {
  let r1 = prompt("¿Cuál es tu nacionalidad?");
  let r2 = prompt("¿Cuál es tu color favorito?");
  let r3 = prompt("¿Cómo se llama tu mascota?");

  let div = document.getElementById("mostrarRespuestas");
  div.innerHTML = `
    <h3>Respuestas:</h3>
    <p>Nacionalidad: ${r1}</p>
    <p>Color favorito: ${r2}</p>
    <p>Mascota: ${r3}</p>
  `;
});
