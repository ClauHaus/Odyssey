function subeNivel() {
  nivelActual++;
}

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
  clearInterval(cronometro);
}

function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}