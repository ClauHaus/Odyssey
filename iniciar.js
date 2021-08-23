function iniciar() {
  errores = niveles[nivelActual].errores; //Revisar de quitar
  contadorAcierto = niveles[nivelActual].contadorAcierto;
  contadorErrores = niveles[nivelActual].contadorErrores; //Revisar
  contrincante.innerHTML = niveles[nivelActual].enemigo + "'s HP"; // otro exito!
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#errores").innerText = /*"0" +*/ parseInt(
    niveles[nivelActual].contadorErrores
  ); //aca estaba el asunto - EXITO ROTUNDO!
  erroresMaxContador();
  document.querySelector("#aciertos").innerText = /*"0" +*/ +parseInt(
    niveles[nivelActual].contadorAcierto
  );
  aciertosMaxContador();
  document.querySelector("#minutos").innerText = niveles[nivelActual].minutos;
  document.querySelector("#segundos").innerText = niveles[nivelActual].segundos;
  //document.querySelector("#mesa").style.marginTop = "-70px"
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector(".heroes").classList.remove("cambiocolor");
  document.querySelector("#stage2").classList.remove("cambiocolor");
  document.querySelector("#stage3").classList.remove("cambiocolor");
  document.querySelector("#stage4").classList.remove("cambiocolor");
  document.querySelector("#stage5").classList.remove("cambiocolor");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("#wrong1").classList.remove("visible");
  document.querySelector("#wrong2").classList.remove("visible");
  document.querySelector("#wrong4").classList.remove("visible");
  document.querySelector("#wrong5").classList.remove("visible");
  document.querySelector("#wrong6").classList.remove("visible");
  document.querySelector("#wrong7").classList.remove("visible");
  document.querySelector("#wrong8").classList.remove("visible");
  document.querySelector("#wrong9").classList.remove("visible");
  document.querySelector("#wrong1").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong2").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong4").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong5").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong6").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong7").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong8").classList.remove("wrongmovimiento2");
  document.querySelector("#wrong9").classList.remove("wrongmovimiento2");
  document.querySelector("#okey1").classList.remove("visible");
  document.querySelector("#okey2").classList.remove("visible");
  document.querySelector("#okey4").classList.remove("visible");
  document.querySelector("#okey6").classList.remove("visible");
  document.querySelector("#okey7").classList.remove("visible");
  document.querySelector("#okey8").classList.remove("visible");
  document.querySelector("#okeyfinal1").classList.remove("visible");
  document.querySelector("#okeyfinal2").classList.remove("visible");
  document.querySelector("#okeyfinal3").classList.remove("visible");
  document.querySelector("#okeyfinal4").classList.remove("visible");
  document.querySelector("#okeyfinal5").classList.remove("visible");
  document.querySelector("#okeyfinal6").classList.remove("visible");
  document.querySelector("#okeyfinal7").classList.remove("visible");
  document.querySelector("#okeyfinal8").classList.remove("visible");
  document.querySelector("#okeyfinal9").classList.remove("visible");
  document.querySelector("#okeyfinal10").classList.remove("visible");
  document.querySelector("#okeyfinal11").classList.remove("visible");
  document.querySelector("#monstruo1final").classList.remove("visible");
  document.querySelector("#monstruo2final").classList.remove("visible");
  document.querySelector("#monstruo3final").classList.remove("visible");
  document.querySelector("#personajegatob").classList.remove("animaciongolpe");
  document.querySelector("#personajegatob").classList.remove("animaciongolpe1");
  document.querySelector("#personajeperrob").classList.remove("animaciongolpe");
  document
    .querySelector("#personajeperrob")
    .classList.remove("animaciongolpe1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe4");
  document.querySelector("#stg2gato").classList.remove("animaciongolpe");
  document.querySelector("#stg2gato").classList.remove("animaciongolpe1");
  document.querySelector("#stg2perro").classList.remove("animaciongolpe");
  document.querySelector("#stg2perro").classList.remove("animaciongolpe1");
  document.querySelector("#stg3gato").classList.remove("animaciongolpe");
  document.querySelector("#stg3perro").classList.remove("animaciongolpe");
  document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
  document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
  document.querySelector("#stg4gato").classList.remove("animaciongolpe");
  document.querySelector("#stg4perro").classList.remove("animaciongolpe");
  document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
  document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
  document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
  document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
  document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
  document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");
  document.querySelector("#lvlgatofinalbr").classList.remove("animaciongolpe");
  document.querySelector("#lvlperrofinalbr").classList.remove("animaciongolpe");
  document.querySelector("#lvlgatofinalbr").classList.remove("animaciongolpe1");
  document
    .querySelector("#lvlperrofinalbr")
    .classList.remove("animaciongolpe1");
  document.querySelector("#lvlgatofinalbr").classList.remove("visible");
  document.querySelector("#lvlperrofinalbr").classList.remove("visible");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#enemigo").classList.remove("vibrate");
  document.querySelector("#campeon").classList.remove("vibrate");
  document.querySelector("#timer").classList.remove("brillo");
  document.querySelector("#monstruo1r").classList.remove("visible");
  document.querySelector("#monstruo2r").classList.remove("visible");
  document.querySelector("#monstruo3r").classList.remove("visible");
  document.querySelector("#monstruo4gr").classList.remove("visible");
  document.querySelector("#monstruo4pr").classList.remove("visible");
  document.querySelector("#personajegatobr").classList.remove("visible");
  document.querySelector("#personajeperrobr").classList.remove("visible");
  document.querySelector("#monstruo1").classList.add("visible");
  document.querySelector("#monstruo2").classList.add("visible");
  document.querySelector("#monstruo3").classList.add("visible");
  document.querySelector("#stg2gator").classList.remove("visible");
  document.querySelector("#stg2perror").classList.remove("visible");
  document.querySelector("#stg3gator").classList.remove("visible");
  document.querySelector("#stg3perror").classList.remove("visible");
  document.querySelector("#stg4gator").classList.remove("visible");
  document.querySelector("#stg4perror").classList.remove("visible");
  document.querySelector("#monstruoformafinalg").classList.remove("visible");
  document.querySelector("#monstruoformafinalgr").classList.remove("visible");
  document.querySelector("#monstruoformafinalp").classList.remove("visible");
  document.querySelector("#monstruoformafinalpr").classList.remove("visible");
  document.querySelector("#monstruo1final").classList.remove("visible");
  document.querySelector("#monstruo2final").classList.remove("visible");
  document.querySelector("#monstruo3final").classList.remove("visible");
  document.querySelector("#monstruo1final").classList.remove("jefesout");
  document.querySelector("#monstruo2final").classList.remove("jefesout");
  document.querySelector("#monstruo3final").classList.remove("jefesout");
  document.querySelector("#monstruogfinalr").classList.remove("visible");
  document.querySelector("#monstruopfinalr").classList.remove("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#personajegatob").classList.add("visible");
    document.querySelector("#stg2gato").classList.add("visible");
    document.querySelector("#stg3gato").classList.add("visible");
    document.querySelector("#stg4gato").classList.add("visible");
    document.querySelector("#monstruo4g").classList.add("visible");
    document.querySelector("#lvlgatofinalb").classList.add("visible");
    document.querySelector("#monstruogfinal").classList.add("visible");
  }

  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#personajeperrob").classList.add("visible");
    document.querySelector("#stg2perro").classList.add("visible");
    document.querySelector("#stg3perro").classList.add("visible");
    document.querySelector("#stg4perro").classList.add("visible");
    document.querySelector("#monstruo4p").classList.add("visible");
    document.querySelector("#lvlperrofinalb").classList.add("visible");
    document.querySelector("#monstruopfinal").classList.add("visible");
  }

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  nivelActual;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoRelax() {
  //comienzo modo arcade barajando
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar(); //hay que armar un iniciar solo con las cartas y retirando todos los demas elementos
  //actualizaNivel();
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
  document.querySelector("#okey1").classList.add("wrongmovimiento2");
  document.querySelector("#okey2").classList.add("wrongmovimiento2");
  document.querySelector("#okey4").classList.add("wrongmovimiento2");
  document.querySelector("#okey5").classList.add("wrongmovimiento2");
  document.querySelector("#okey6").classList.add("wrongmovimiento2");
  document.querySelector("#okey7").classList.add("wrongmovimiento2");
  document.querySelector("#okey8").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal1").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal2").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal3").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal4").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal5").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal6").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal7").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal8").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal9").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal10").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal11").classList.add("wrongmovimiento2");
  document.querySelector("#contrincante").classList.add("relax1");
  document.querySelector(".titulorelax").classList.add("visible");
  document.querySelector(".titulorrelax").classList.add("visible");
  //document.querySelector("#situacion").style.fontSize = "35px";
  //document.querySelector("#mesa").style.width = "40%";
  document.querySelector("#exito").classList.add("relax1");
  document.querySelector("#medal").classList.add("visible");
  document.querySelector("#exitorelax").classList.add("visible");
  document.querySelector("#salida").classList.add("relax1");
  document.querySelector("#salidarelax").classList.add("relax1");
  document.querySelector("#gameOver").classList.add("relax2");
  document.querySelector("#timeOver").classList.add("relax2");
  document.querySelector("#endGame").classList.add("relax2");
  document.querySelector("#subeNivel").classList.add("relax2");
  document.querySelector("#creditosrelax").classList.add("visible");
  document.querySelector("#next1relax").classList.add("visible");
}

next1relax.addEventListener("click", function () {
  iniciar();
  subeNivel();
  actualizaNivel();
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
  document.querySelector("#okey1").classList.add("wrongmovimiento2");
  document.querySelector("#okey2").classList.add("wrongmovimiento2");
  document.querySelector("#okey4").classList.add("wrongmovimiento2");
  document.querySelector("#okey5").classList.add("wrongmovimiento2");
  document.querySelector("#okey6").classList.add("wrongmovimiento2");
  document.querySelector("#okey7").classList.add("wrongmovimiento2");
  document.querySelector("#okey8").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal1").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal2").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal3").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal4").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal5").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal6").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal7").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal8").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal9").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal10").classList.add("wrongmovimiento2");
  document.querySelector("#okeyfinal11").classList.add("wrongmovimiento2");
  document.querySelector("#contrincante").classList.add("relax1");
  document.querySelector(".titulorelax").classList.add("visible");
  document.querySelector(".titulorrelax").classList.add("visible");
  //document.querySelector("#situacion").style.fontSize = "35px";
  //document.querySelector("#mesa").style.width = "40%";
  document.querySelector("#exito").classList.add("relax1");
  document.querySelector("#salida").classList.add("relax1");
  document.querySelector("#next1relax").classList.add("visible");
});

creditosrelax.addEventListener("click", function () {
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#stage6").classList.add("visible");
  document.querySelector("#clauhaus").classList.add("visible");
  document.querySelector("#mensaje-creditos").classList.add("visible");
  document.querySelector("#endGame").classList.remove("visible");
  var mensajeCreditos = document.querySelector("#mensaje-creditos");
  mensajeCreditos.innerHTML =
    "<p> Director, writer, producer, developer, storyboard, backgrounds, tester, characters and battle design: <b>Claudio Aime</b></p>" +
    "<p> Special thanks : <b>To you! Thank you very much for playing! </b> </p>";
  //+ "<p> Coded by <b>ClauHaus</b></p>";
  document.querySelector("#miweb").classList.add("visible");
  document.querySelector("#replayrelax").classList.add("visible");
  document.querySelector("#clauhaus").style.marginTop = "-140px";
  document.body.style.backgroundColor = "white";
});

replayrelax.addEventListener("click", function () {
  location.reload();
});
/*--------------------------------HOW TO PLAY-------------------------*/
settings.addEventListener("click", function () {
  document.querySelector("#bienvenida").classList.remove("visible");
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector(".pantalla-settings").classList.add("visible");
});

back3.addEventListener("click", function () {
  document.querySelector("#bienvenida").classList.add("visible");
  document.querySelector(".pantalla-settings").classList.remove("visible");
  document.querySelector(".cabecera").style.display = "flex";
});

/*--------------------------------MODO STORY-------------------------*/
function iniciaJuegoStory() {
  //comienzo modo historia sin barajar cartas ni nada
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#pantalla-uno").classList.add("visible");
  document.querySelector("#datos").classList.add("visible");
  document.getElementById("formulario").style.display = "flex";
}

function datos(evento) {
  evento.preventDefault(evento);
  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var mensajeDatos = document.querySelector("#mensaje-datos");
  var mensajeEdad;
  var mensaje;

  if (edad >= 100) {
    mensajeEdad = "how come you are still aliv...playing?!";
  } else if (edad >= 75) {
    mensajeEdad = "over 75? still playing? great!";
  } else if (edad >= 65) {
    mensajeEdad = " i hope you are ready for this adventure";
  } else if (edad >= 30) {
    mensajeEdad = "i hope you are prepared for this journey";
  } else if (edad >= 18) {
    mensajeEdad = "i hope you are up for this quest";
  } else if (edad >= 10) {
    mensajeEdad = "dont' worry i'll help you along the way";
  } else {
    mensajeEdad = "i don't think you should be playing this";
  }

  mensaje =
    "<p>'Hello " +
    nombre +
    ", it's nice to meet you, i'm going to guide you through this journey out of the cave... who am i? it's irrelevant at the moment. I see you are " +
    edad +
    " years old" +
    " (" +
    mensajeEdad +
    ")" +
    ", anyways, we don't have much time, you must hurry if you plan surviving, i can hear not far from here your first challenge," +
    " so first of all you need to choose your avatar'</p> ";

  mensajeDatos.innerHTML = mensaje;
}

var miFormulario = document.querySelector("#formulario");
miFormulario.addEventListener("submit", datos);

miFormulario.addEventListener("submit", function () {
  document.querySelector("#pantalla-uno").classList.remove("visible");
  document.querySelector("#datos").classList.remove("visible");
  document.getElementById("formulario").style.display = "none";
  document.querySelector("#heroes").classList.add("visible");
  document.querySelector("#personaje1").classList.add("visible");
  document.querySelector("#personajegato").classList.add("visible");
  document.querySelector("#personaje2").classList.add("visible");
  document.querySelector("#personajeperro").classList.add("visible");
  document.querySelector("#personaje1").classList.add("animacioncomienzo");
  document.querySelector("#personaje2").classList.add("animacioncomienzo");
  document.querySelector("#mensaje-datos").classList.add("animacion0");
  document.getElementById("personaje1").disabled = false; //desactiva la "funcion" de boton
  document.getElementById("personaje2").disabled = false;
});

///aca hay que poner los botones de los avatares

personaje1.addEventListener("click", function () {
  if (window.innerWidth <= 425) {
    document.querySelector("#heroes").classList.add("cambioFlex");
  }
  var caracteristicasgato = document.querySelector("#caracteristicasgato");
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var nombre = document.querySelector("#nombre").value;
  document.getElementById("mensaje-datos").style.display = "none";
  document.querySelector("#personaje2").classList.remove("visible");
  document.querySelector("#personajeperro").classList.remove("visible");
  document.querySelector("#botonera").classList.add("visible");
  document.querySelector("#back1").classList.add("visible");
  document.querySelector("#next1").classList.add("visible");
  document.querySelector("#avatar").classList.remove("visible");
  document.querySelector("#caracteristicasgato").classList.add("visible");
  document.querySelector("#personaje1").classList.remove("animacioncomienzo");
  document.querySelector("#personaje2").classList.remove("animacioncomienzo");
  cuadro1.style.display = "block";
  cuadro2.style.display = "none";
  document.querySelector("#caracteristicasgato").classList.add("animaciontext");
  document.querySelector("#personaje1").classList.add("animacionavatar1");
  caracteristicasgato.innerHTML =
    "<h2>" +
    nombre +
    "</h2>" +
    "<h3><em>'Piercing eyed cat'</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Neurophysiologist </p>" +
    "<p><strong><u>Age:</u></strong> " +
    edad +
    " human years</p>" +
    "<p><strong><u>HP:</u></strong> 5/21</p>" +
    "<p><strong><u>MP:</u></strong> 4/12</p>" +
    "<p><strong><u>Special skills:</u></strong> Being cute,</p>" +
    "<p>sleep for 18 hours uninterrupted,</p>" +
    "<p>deep understanding of the complex human mind.</p>";
});

personaje2.addEventListener("click", function () {
  if (window.innerWidth <= 425) {
    document.querySelector("#heroes").classList.add("cambioFlex");
  }
  var caracteristicasperro = document.querySelector("#caracteristicasperro");
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var nombre = document.querySelector("#nombre").value;
  document.getElementById("mensaje-datos").style.display = "none";
  document.querySelector("#personaje1").classList.remove("visible");
  document.querySelector("#personajegato").classList.remove("visible");
  document.querySelector("#botonera").classList.add("visible");
  document.querySelector("#back1").classList.add("visible");
  document.querySelector("#next1").classList.add("visible");
  document.querySelector("#avatar").classList.remove("visible");
  document.querySelector("#personaje1").classList.remove("animacioncomienzo");
  document.querySelector("#personaje2").classList.remove("animacioncomienzo");
  document.querySelector("#caracteristicasperro").classList.add("visible");
  cuadro1.style.display = "none";
  cuadro2.style.display = "block";
  document
    .querySelector("#caracteristicasperro")
    .classList.add("animaciontext");
  document.querySelector("#personaje2").classList.add("animacionavatar1");
  caracteristicasperro.innerHTML =
    "<h2>" +
    nombre +
    "</h2>" +
    "<h3><em>'Dexterous thinking dog'</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Aerospace engineer </p>" +
    "<p><strong><u>Age:</u></strong> " +
    edad +
    " human years</p>" +
    "<p><strong><u>HP:</u></strong> 5/21</p>" +
    "<p><strong><u>MP:</u></strong> 4/12</p>" +
    "<p><strong><u>Special skills:</u></strong> Being a good boy,</p>" +
    "<p>ball discovery more than a kilometer away,</p>" +
    "<p>great knowledge of exponential variable functions.</p>";
});

var volver1 = document.querySelector("#back1");
volver1.addEventListener("click", function () {
  document.querySelector("#personaje1").classList.add("visible");
  document.querySelector("#personajegato").classList.add("visible");
  document.querySelector("#personaje2").classList.add("visible");
  document.querySelector("#personajeperro").classList.add("visible");
  document.querySelector("#personaje1").classList.remove("animacionavatar1");
  document.querySelector("#personaje2").classList.remove("animacionavatar1");
  document.querySelector("#avatar").classList.add("visible");
  document.querySelector("#caracteristicasperro").classList.remove("visible");
  document.querySelector("#caracteristicasgato").classList.remove("visible");
  document.querySelector("#botonera").classList.remove("visible");
  document.querySelector("#back1").classList.remove("visible");
  document.querySelector("#next1").classList.remove("visible");
  cuadro1.style.display = "none";
  cuadro2.style.display = "none";
  if (window.innerWidth <= 425) {
    document.querySelector("#heroes").classList.remove("cambioFlex");
  }
});

var continuar1 = document.querySelector("#next1");
continuar1.addEventListener("click", function () {
  if (window.innerWidth <= 425) {
    document.querySelector("#heroes").classList.remove("cambioFlex");
  }
  if (window.innerWidth <= 425) {
    document.querySelector("#opciones1").classList.add("cambioFlex");
  }
  var nombre = document.querySelector("#nombre").value; //para captar datos de otras funciones hay que poner la variable donde me interesa obtenerlo
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var opcionA = document.querySelector("#opcion-a"); //opcion que vuelve al comienzo de la cueva - location.reload()
  var opcionB = document.querySelector("#opcion-b");
  var opcionC = document.querySelector("#opcion-c");
  var opcionPelear = document.querySelector("#opcion-pelear");
  var opcionDormir = document.querySelector("#opcion-dormir");
  document.querySelector("#monstruo1").classList.add("visible");
  document.querySelector("#monstruo1").classList.add("animacion1");
  document.querySelector("#personaje1").classList.remove("animacionavatar1");
  document.querySelector("#personaje2").classList.remove("animacionavatar1");
  document.querySelector("#personaje1").classList.add("remover");
  document.getElementById("personaje1").disabled = true; //desactiva la "funcion" de boton
  document.getElementById("personaje2").disabled = true;
  document.querySelector("#personaje2").classList.add("remover");
  document.getElementById("mensaje-datos").style.display = "none";
  document.querySelector("#next1").classList.remove("visible");
  document.querySelector("#mensaje1").classList.add("visible");
  document.querySelector("#mensaje1").classList.add("animacion0");
  mensaje1.innerHTML =
    "<p>Oh no its terrible! " +
    nombre +
    ", we are completely doomed, it's 'Failure'! " +
    "This 'monster' represents everything that you hoped to achieve in your " +
    edad +
    " years of life and could not... that bastard!" +
    " So, your options right now are, 'FLEE' 'FIGHT' or 'GIVE UP', think carefully " +
    nombre +
    ", what are you going to do?</p>";
  document.querySelector("#opciones1").classList.add("visible");
  document.querySelector("#opciones1").classList.add("animacion0");
  document.querySelector("#avatar").classList.remove("visible");
  document.querySelector("#caracteristicasperro").classList.remove("visible");
  document.querySelector("#caracteristicasgato").classList.remove("visible");
  document.querySelector("#botonera").classList.remove("visible");
  document.querySelector("#back1").classList.remove("visible");
  document.querySelector("#next1").classList.remove("visible");

  opcionA.addEventListener("click", function () {
    document.querySelector("#monstruo1").classList.remove("visible");
    document.querySelector("#mensaje1").classList.remove("visible");
    document.querySelector("#mensaje2").classList.remove("visible");
    document.querySelector("#avatar").classList.remove("visible");
    document.querySelector("#opciones1").classList.remove("visible");
    document.querySelector("#bienvenida").classList.add("visible");
    document.querySelector("#personaje1").classList.remove("visible");
    document.querySelector("#personajegato").classList.remove("visible");
    document.querySelector("#personaje2").classList.remove("visible");
    document.querySelector("#personajeperro").classList.remove("visible");
  });

  opcionC.addEventListener("click", function () {
    if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
      document.querySelector("#monstruo1").classList.remove("visible");
      document.querySelector("#mensaje1").classList.remove("visible");
      document.querySelector("#mensaje2").classList.remove("visible");
      document.querySelector("#opciones1").classList.remove("visible");
      document.querySelector("#dormir").classList.add("visible");
      document.querySelector("#dormir").classList.add("escribir");
      document.querySelector("#opciones2").classList.add("visible");
      document.querySelector("#opciones2").classList.add("animacion0");
      document.querySelector("#heroes").classList.remove("visible");
      document.querySelector("#personaje1").classList.remove("visible");
      document.querySelector("#personajegato").classList.remove("visible");
      document.querySelector("#monstruo1").classList.remove("animacion1");
      if (window.innerWidth <= 425) {
        document.querySelector("#opciones2").classList.add("cambioFlex");
      }
    }

    if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
      document.querySelector("#monstruo1").classList.remove("visible");
      document.querySelector("#mensaje1").classList.remove("visible");
      document.querySelector("#mensaje2").classList.remove("visible");
      document.querySelector("#opciones1").classList.remove("visible");
      document.querySelector("#dormir").classList.remove("visible");
      document.querySelector("#dormir3").classList.add("visible");
      document.querySelector("#dormir3").classList.add("escribir");
      document.querySelector("#opciones2").classList.add("visible");
      document.querySelector("#opciones2").classList.add("animacion0");
      document.querySelector("#heroes").classList.remove("visible");
      document.querySelector("#personaje1").classList.remove("visible");
      document.querySelector("#personajegato").classList.remove("visible");
      document.querySelector("#personaje2").classList.remove("visible");
      document.querySelector("#personajeperro").classList.remove("visible");
      document.querySelector("#monstruo1").classList.remove("animacion1");
      if (window.innerWidth <= 425) {
        document.querySelector("#opciones2").classList.add("cambioFlex");
      }
    }
  });

  opcionDormir.addEventListener("click", function () {
    if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
      //CLAVE PARA LA SELECCION DE PERSONAJES DE AHORA EN MAS
      document.querySelector("#dormir").classList.remove("visible");
      document.querySelector("#dormir2").classList.add("visible");
      document.querySelector("#dormir2").classList.add("escribir");
    }
    if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
      //CLAVE PARA LA SELECCION DE PERSONAJES DE AHORA EN MAS
      document.querySelector("#dormir3").classList.remove("visible");
      document.querySelector("#dormir4").classList.add("visible");
      document.querySelector("#dormir4").classList.add("escribir");
    }
  });

  opcionPelear.addEventListener("click", function () {
    var caracteristicasmonstruo1 = document.querySelector(
      "#caracteristicasmonstruo1"
    );
    document.querySelector("#dormir").classList.remove("visible");
    document.querySelector("#dormir2").classList.remove("visible");
    document.querySelector("#dormir3").classList.remove("visible");
    document.querySelector("#dormir4").classList.remove("visible");
    document.querySelector("#opciones2").classList.remove("visible");
    document.querySelector("#monstruo1").classList.add("visible");
    document.querySelector("#monstruo1").classList.add("animacion3");
    document.querySelector("#heroes").classList.add("visible");
    document.querySelector("#personaje1").classList.remove("visible");
    document.querySelector("#personajegato").classList.remove("visible");
    document.querySelector("#personaje2").classList.remove("visible");
    document.querySelector("#personajeperro").classList.remove("visible");
    document.querySelector("#opcion-decision").classList.add("visible");
    document.querySelector("#opcion-decision").classList.add("animacion0");
    document
      .querySelector("#caracteristicasmonstruo1")
      .classList.add("visible");
    caracteristicasmonstruo1.innerHTML =
      "<h3><em>'Failure'</em></h3>" +
      "<p><strong><u>Occupation:</u></strong> " +
      "Life coach </p>" +
      "<p><strong><u>HP:</u></strong> 4/4</p>" +
      "<p><strong><u>MP:</u></strong> 5/5</p>" +
      "<p><strong><u>Special skills:</u></strong> 10+ years origami expert,</p>" +
      "<p>prejudiced counselor,</p>" +
      "<p>can get you into a cult in less than 3 weeks.</p>";
    if (window.innerWidth <= 425) {
      document.querySelector("#heroes").classList.add("cambioFlex");
    }
  });

  opcionB.addEventListener("click", function () {
    var caracteristicasmonstruo1 = document.querySelector(
      "#caracteristicasmonstruo1"
    );
    document.querySelector("#opciones1").classList.remove("visible");
    document.querySelector("#mensaje1").classList.remove("visible");
    document.querySelector("#mensaje2").classList.remove("visible");
    document.querySelector("#monstruo1").classList.add("visible");
    document.querySelector("#monstruo1").classList.add("animacion3");
    document.querySelector("#opcion-decision").classList.add("visible");
    document.querySelector("#opcion-decision").classList.add("animacion0");
    document.querySelector("#personaje1").classList.remove("visible");
    document.querySelector("#personajegato").classList.remove("visible");
    document.querySelector("#personaje2").classList.remove("visible");
    document.querySelector("#personajeperro").classList.remove("visible");
    document
      .querySelector("#caracteristicasmonstruo1")
      .classList.add("visible");
    caracteristicasmonstruo1.innerHTML =
      "<h3><em>'Failure'</em></h3>" +
      "<p><strong><u>Occupation:</u></strong> " +
      "Life coach </p>" +
      "<p><strong><u>HP:</u></strong> 4/4</p>" +
      "<p><strong><u>MP:</u></strong> 5/5</p>" +
      "<p><strong><u>Special skills:</u></strong> 10+ years origami expert,</p>" +
      "<p>prejudiced counselor,</p>" +
      "<p>can get you into a cult in less than 3 weeks.</p>";
    if (window.innerWidth <= 425) {
      document.querySelector("#heroes").classList.add("cambioFlex");
    }
  });
});

var decision = document.querySelector("#opcion-decision");
decision.addEventListener("click", function () {
  modoRelax = false;
  if (window.innerWidth <= 425) {
    document.querySelector("#heroes").classList.remove("cambioFlex");
  }
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
  var movimientos = document.querySelector("#movimientos");
  var enemigo = document.querySelector("#enemigo");
  var nombre = document.querySelector("#nombre").value;
  document.querySelector("#opcion-decision").classList.remove("visible");
  document
    .querySelector("#caracteristicasmonstruo1")
    .classList.remove("visible");
  document.querySelector(".cabecera").style.display = "flex";
  document.getElementById("control-nivel").style.display = "none";
  document.querySelector("#heroes").classList.add("visible2");
  document.querySelector("#versus").classList.add("visible");
  document.querySelector("#next2").classList.add("visible");
  document.querySelector("#monstruo1").classList.remove("animacion1");
  document.querySelector("#monstruo1").classList.remove("animacion3");
  document.querySelector("#monstruo1").classList.add("animacionderecha");
  document.querySelector("#monstruo1").style.width = "320px";
  document.querySelector("#monstruo1").style.height = "320px";
  document.querySelector("#monstruo1r").style.width = "320px";
  document.querySelector("#monstruo1r").style.height = "320px";
  if (window.innerWidth <= 768) {
    document.querySelector("#monstruo1").style.width = "250px";
    document.querySelector("#monstruo1").style.height = "250px";
    document.querySelector("#monstruo1r").style.width = "250px";
    document.querySelector("#monstruo1r").style.height = "250px";
  }
  if (window.innerWidth <= 425) {
    document.querySelector("#monstruo1").style.width = "180px";
    document.querySelector("#monstruo1").style.height = "180px";
    document.querySelector("#monstruo1r").style.width = "180px";
    document.querySelector("#monstruo1r").style.height = "180px";
  }
  if (window.innerWidth <= 350) {
    document.querySelector("#monstruo1").style.width = "160px";
    document.querySelector("#monstruo1").style.height = "160px";
    document.querySelector("#monstruo1r").style.width = "160px";
    document.querySelector("#monstruo1r").style.height = "160px";
  }

  movimientos.innerHTML = nombre + "'s HP";

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#personajegatob").classList.add("visible");
    document
      .querySelector("#personajegatob")
      .classList.add("animacionizquierda");
  }

  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#personajeperrob").classList.add("visible");
    document
      .querySelector("#personajeperrob")
      .classList.add("animacionizquierda");
  }
});

next2.addEventListener("click", function () {
  //ARRANCAR DESDE ACA CON EL CAPITULO 2(PRIMERO EL LEVEL UP)
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#heroes").classList.remove("visible");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector(".heroes").classList.remove("cambiocolor");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#stg2gator").classList.remove("visible"); //quitarlo antes de que aparezcan los "reds"
  document.querySelector("#stg2perror").classList.remove("visible");
  document.querySelector("#monstruo2r").classList.remove("visible");
  document.querySelector("#leveling").classList.add("visible");
  document.querySelector("#levelup").classList.add("visible");
  document.querySelector("#info1").classList.add("visible");
  document.querySelector("#info1").classList.add("show1");
  document.querySelector("#info2").classList.add("visible");
  document.querySelector("#info2").classList.add("show2");
  document.querySelector("#arrow").classList.add("visible");
  document.querySelector("#next3").classList.add("visible");
  document.querySelector("#okey1").classList.remove("visible");
  document.querySelector("#okey2").classList.remove("visible");
  document.querySelector("#okey4").classList.remove("visible");
  document.querySelector("#okey5").classList.remove("visible");
  document.querySelector("#okey6").classList.remove("visible");
  document.querySelector("#wrong1").classList.remove("visible");
  document.querySelector("#wrong2").classList.remove("visible");
  document.querySelector("#wrong4").classList.remove("visible");
  document.querySelector("#wrong5").classList.remove("visible");
  document.querySelector("#wrong6").classList.remove("visible");
  document.querySelector("#wrong7").classList.remove("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgato1").classList.add("visible");
    document.querySelector("#lvlgato2").classList.add("visible");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperro1").classList.add("visible");
    document.querySelector("#lvlperro2").classList.add("visible");
  }
});

next3.addEventListener("click", function () {
  document.querySelector("#leveling").classList.remove("visible");
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#info1").classList.remove("visible");
  document.querySelector("#info2").classList.remove("visible");
  document.querySelector("#arrow").classList.remove("visible");
  document.querySelector("#next3").classList.remove("visible");
  document.querySelector("#arrow").classList.remove("visible");
  document.querySelector("#info1").classList.remove("visible");
  document.querySelector("#info2").classList.remove("visible");
  document.querySelector("#lvlgato1").classList.remove("visible");
  document.querySelector("#lvlgato2").classList.remove("visible");
  document.querySelector("#lvlperro1").classList.remove("visible");
  document.querySelector("#lvlperro2").classList.remove("visible");
  document.querySelector("#stage2").classList.add("visible");
  document.querySelector("#stage2").classList.remove("cambiocolor");
  document.querySelector("#monstruo2").classList.add("visible");
  document.querySelector("#monstruo2").classList.add("animacion1");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg2gato").classList.add("visible");
    document.querySelector("#stg2gato").classList.remove("animacionentrada");
    document.querySelector("#stg2gato").classList.add("animacionizquierda");
    document.querySelector("#stg2gato").classList.remove("animaciongolpe");
    document.querySelector("#stg2gato").classList.remove("animaciongolpe1");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg2perro").classList.add("visible");
    document.querySelector("#stg2perro").classList.remove("animacionentrada");
    document.querySelector("#stg2perro").classList.add("animacionizquierda");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe1");
  }

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var mensajeDatos2 = document.querySelector("#mensaje-datos2");
  document.querySelector("#mensaje-datos2").classList.add("visible");
  document.querySelector("#mensaje-datos2").classList.add("animacion0");

  mensajeDatos2.innerHTML =
    "<p>Oh i can't believe it! This is bad... " +
    nombre +
    ", this guy here is 'Bureaucrat'." +
    "This terrible 'monster' is going to go through all your financial records, migration papers and every single document you have signed in your " +
    edad +
    " years. I think he is prepared to attack, be ready.</p> ";

  document.querySelector("#opciones3").classList.add("visible");
  document.querySelector("#opciones3").classList.add("animacion0");
  document.querySelector("#opcion-pelear2").classList.add("visible");
});

var opcionpelear2 = document.querySelector("#opcion-pelear2");
opcionpelear2.addEventListener("click", function () {
  document.querySelector("#stg2gato").classList.remove("visible");
  document.querySelector("#stg2perro").classList.remove("visible");
  document.querySelector("#mensaje-datos2").classList.remove("visible");
  document.querySelector("#mensaje-datos2").classList.remove("animacion0");
  document.querySelector("#opcion-pelear2").classList.remove("visible");
  document.querySelector("#opcion-pelear3").classList.add("visible");
});

var opcionpelear3 = document.querySelector("#opcion-pelear3");
opcionpelear3.addEventListener("click", function () {
  document.querySelector("#opcion-pelear3").classList.remove("visible");
  document.querySelector("#opcion-pelear4").classList.add("visible");
  document.querySelector("#hablar1").classList.add("visible");
});

var opcionpelear4 = document.querySelector("#opcion-pelear4");
opcionpelear4.addEventListener("click", function () {
  document.querySelector("#opcion-pelear4").classList.remove("visible");
  document.querySelector("#opcion-pelear5").classList.add("visible");
  document.querySelector("#hablar1").classList.remove("visible");
  document.querySelector("#hablar2").classList.add("visible");
});

var opcionpelear5 = document.querySelector("#opcion-pelear5");
opcionpelear5.addEventListener("click", function () {
  document.querySelector("#opcion-pelear5").classList.remove("visible");
  document.querySelector("#opcion-pelear6").classList.add("visible");
  document.querySelector("#hablar2").classList.remove("visible");
  document.querySelector("#hablar3").classList.add("visible");
});

var opcionpelear6 = document.querySelector("#opcion-pelear6");
opcionpelear6.addEventListener("click", function () {
  document.querySelector("#opcion-pelear6").classList.remove("visible");
  document.querySelector("#opcion-pelear7").classList.add("visible");
  document.querySelector("#hablar3").classList.remove("visible");
  document.querySelector("#hablar4").classList.add("visible");
  if (window.innerWidth <= 425) {
    document.querySelector("#opcion-pelear7mob").classList.add("visible");
    document.querySelector("#opcion-pelear7").classList.remove("visible");
    document.querySelector("#hablar4").classList.remove("visible");
    document.querySelector("#hablar4mob").classList.add("visible");
  }
});

if (window.innerWidth >= 426) {
  window.addEventListener("resize", function () {
    document.querySelector("#opcion-pelear7").classList.remove("visible");
    document.querySelector("#opcion-pelear8").classList.add("visible");
    document.querySelector("#hablar4").classList.remove("visible");
    document.querySelector("#hablar5").classList.add("visible");
  });
}

if (window.innerWidth <= 425) {
  window.addEventListener("orientationchange", function () {
    document.querySelector("#opcion-pelear7mob").classList.remove("visible");
    document.querySelector("#opcion-pelear8").classList.add("visible");
    document.querySelector("#hablar4mob").classList.remove("visible");
    document.querySelector("#hablar5mob").classList.add("visible");
  });
}

var opcionpelear8 = document.querySelector("#opcion-pelear8");
opcionpelear8.addEventListener("click", function () {
  document.querySelector("#hablar5mob").classList.remove("visible");
  document.querySelector("#opcion-pelear8").classList.remove("visible");
  var caracteristicasmonstruo2 = document.querySelector(
    "#caracteristicasmonstruo2"
  );
  document.querySelector("#caracteristicasmonstruo2").classList.add("visible");
  document.querySelector("#monstruo2").classList.remove("visible");
  document.querySelector("#monstruo2b").classList.add("visible");
  document.querySelector("#monstruo2b").classList.add("animacion3");
  document.querySelector("#subir2").classList.add("visible");
  caracteristicasmonstruo2.innerHTML =
    "<h3><em>'Bureaucrat'</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Public administrator </p>" +
    "<p><strong><u>HP:</u></strong> 6/6</p>" +
    "<p><strong><u>MP:</u></strong> 8/8</p>" +
    "<p><strong><u>Special skills:</u></strong> Oriental Tea connoisseur,</p>" +
    "<p>number crunching rate speed x0.01,</p>" +
    "<p>can deport you and get your house without losing his smile.</p>";
  window.addEventListener("resize", function () {
    document.querySelector("#opcion-pelear8").classList.remove("visible");
  });
  window.addEventListener("orientationchange", function () {
    document.querySelector("#opcion-pelear8").classList.remove("visible");
  });
  if (window.innerWidth <= 425) {
    document.querySelector("#opciones3").classList.add("cambioFlex");
  }
});

subir2.addEventListener("click", function () {
  if (window.innerWidth <= 425) {
    document.querySelector("#opciones3").classList.remove("cambioFlex");
  }
  document.querySelector("#opciones3").classList.remove("visible");
  document.querySelector("#monstruo2b").classList.remove("visible");
  document.querySelector("#monstruo2").style.width = "300px";
  document.querySelector("#monstruo2").style.height = "300px";
  document.querySelector("#monstruo2r").style.width = "300px";
  document.querySelector("#monstruo2r").style.height = "300px";
  document
    .querySelector("#caracteristicasmonstruo2")
    .classList.remove("visible");
  document.querySelector("#subir2").classList.remove("visible");
  subeNivel();
  actualizaNivel();
  iniciar();
  document.querySelector(".cabecera").style.display = "flex";
  document.querySelector("#monstruo2").classList.add("visible");
  document.querySelector("#monstruo2").classList.add("animacionderecha");
  document.querySelector("#next2").classList.remove("visible");
  document.querySelector("#next4").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    //EXITO! MIRAR PARA FUTURAS REFERENCIAS
    elemento.classList.add("nivel2");
  });

  if (window.innerWidth <= 425) {
    document.querySelector("#monstruo2").style.width = "180px";
    document.querySelector("#monstruo2").style.height = "180px";
    document.querySelector("#monstruo2r").style.width = "180px";
    document.querySelector("#monstruo2r").style.height = "180px";
    document.querySelector("#mesa").style.marginTop = "-150px";
  }

  if (window.innerWidth <= 350) {
    document.querySelector("#monstruo2").style.width = "160px";
    document.querySelector("#monstruo2").style.height = "160px";
    document.querySelector("#monstruo2r").style.width = "160px";
    document.querySelector("#monstruo2r").style.height = "160px";
    document.querySelector("#mesa").style.marginTop = "-150px";
  }

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg2gato").classList.add("visible");
    document.querySelector("#stg2gato").classList.add("animacionizquierda");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg2perro").classList.add("visible");
    document.querySelector("#stg2perro").classList.add("animacionizquierda");
  }
});

next4.addEventListener("click", function () {
  //ARRANCAR DESDE ACA CON EL CAPITULO 3(PRIMERO EL LEVEL UP)
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#stage2").classList.remove("visible");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector("#stg3gator").classList.remove("visible"); //quitarlo antes de que aparezcan los "reds"
  document.querySelector("#stg3perror").classList.remove("visible");
  document.querySelector("#monstruo3r").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#leveling").classList.add("visible");
  document.querySelector("#levelup").classList.add("visible");
  document.querySelector("#info2").classList.add("visible");
  document.querySelector("#info2").classList.remove("show2");
  document.querySelector("#info2").classList.add("show1");
  document.querySelector("#info3").classList.add("visible");
  document.querySelector("#info3").classList.add("show2");
  document.querySelector("#arrow2").classList.add("visible");
  document.querySelector("#okey1").classList.remove("visible");
  document.querySelector("#okey2").classList.remove("visible");
  document.querySelector("#okey4").classList.remove("visible");
  document.querySelector("#okey5").classList.remove("visible");
  document.querySelector("#okey6").classList.remove("visible");
  document.querySelector("#wrong1").classList.remove("visible");
  document.querySelector("#wrong2").classList.remove("visible");
  document.querySelector("#wrong4").classList.remove("visible");
  document.querySelector("#wrong5").classList.remove("visible");
  document.querySelector("#wrong6").classList.remove("visible");
  document.querySelector("#wrong7").classList.remove("visible");
  document.querySelector("#next5").classList.add("visible"); //PROXIMO BOTON PARA STAGE3

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgato2").classList.add("visible");
    document.querySelector("#lvlgato3").classList.add("visible");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperro2").classList.add("visible");
    document.querySelector("#lvlperro3").classList.add("visible");
  }
});

next5.addEventListener("click", function () {
  document.querySelector("#leveling").classList.remove("visible");
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#next5").classList.remove("visible");
  document.querySelector("#info2").classList.remove("visible");
  document.querySelector("#info3").classList.remove("visible");
  document.querySelector("#arrow2").classList.remove("visible");
  document.querySelector("#lvlgato2").classList.remove("visible");
  document.querySelector("#lvlgato3").classList.remove("visible");
  document.querySelector("#lvlperro2").classList.remove("visible");
  document.querySelector("#lvlperro3").classList.remove("visible");
  document.querySelector("#stage3").classList.add("visible");
  document.querySelector("#stage3").classList.remove("cambiocolor");
  document.querySelector("#monstruo3").classList.add("visible");
  document.querySelector("#monstruo3").classList.add("animacion1");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#next6").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg3gato").classList.add("visible");
    document.querySelector("#stg3gato").classList.add("animacionentrada");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg3perro").classList.add("visible");
    document.querySelector("#stg3perro").classList.add("animacionentrada");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
  }

  var nombre = document.querySelector("#nombre").value;
  var mensajeDatos3 = document.querySelector("#mensaje-datos3");
  document.querySelector("#mensaje-datos3").classList.add("visible");
  document.querySelector("#mensaje-datos3").classList.add("animacion0");

  mensajeDatos3.innerHTML =
    "<p>This is just getting ugly! Here, on front of you " +
    nombre +
    ", stands 'Influencer'." +
    " One of the most dangerous and vicious 'monsters' we could find inside this cave. She is just too sweet and cute and friends with everyone, and obviously that's just not normal,  who would it guess that behind that smile there are so many diabolical plots developing ?" +
    " Be prepared my friend as we go deeper in this journey this is going to get a lot harder if  we hope to survive...</p> ";
});

next6.addEventListener("click", function () {
  document.querySelector("#stg3gato").classList.remove("visible");
  document.querySelector("#stg3gato").classList.remove("animacionentrada");
  document.querySelector("#stg3perro").classList.remove("visible");
  document.querySelector("#stg3perro").classList.remove("animacionentrada");
  document.querySelector("#mensaje-datos3").classList.remove("visible");
  document.querySelector("#next6").classList.remove("visible");
  document.querySelector("#phone").classList.add("visible");
  document.querySelector("#trash").classList.add("visible");
  document.querySelector("#telefono").classList.add("visible");
  document.querySelector("#telefono").classList.add("animacion0");
  document.querySelector("#hablar6").classList.add("visible");
  document.querySelector("#hablar7").classList.add("visible");
  document.querySelector("#hablar8").classList.add("visible");
  document.querySelector("#hablar9").classList.add("visible");

  if (window.innerWidth <= 425) {
    document.querySelector("#telefono").classList.remove("visible");
    document.querySelector("#telefono").classList.remove("animacion0");
    document.querySelector("#telefonomob").classList.add("visible");
    document.querySelector("#telefonomob").classList.add("animacion0");
  }
});

function dragStart(event) {
  //COMIENZO; TOMAMOS EL OBJETO
  event.dataTransfer.setData("Text", event.target.id); //event.dataTransfer UTILIZADO PARA DRAGGING DE ELEMENTOS
  //SETDATA ES PARA INDICAR QUE COMENZAMOS A MOVERLO Y EL FINAL ES PORQUE LO VAMOS A LLEVAR A UN ID DISTINTO
}

function allowDrop(event) {
  //SOLTAMOS EL OBJETO SOBRE OTRO OBJETO QUE LO PERMITE
  event.preventDefault(); //EVITAMOS QUE SE GENEREN FUNCIONES HASTA QUE NO ACTUEMOS
  //ACA DEBAJO LO QUE QUEREMOS QUE SUCEDA AL SOLTARLO
  document.querySelector("#next7").classList.add("visible");
  document.querySelector("#hablar6").classList.remove("visible");
  document.querySelector("#hablar7").classList.remove("visible");
  document.querySelector("#hablar8").classList.remove("visible");
  document.querySelector("#hablar9").classList.remove("visible");
  document.querySelector("#telefono").classList.remove("visible");
}

function drop(event) {
  //CIERRE DE LA FUNCION
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

if (window.innerWidth <= 425) {
  phone.addEventListener("click", function () {
    document.querySelector("#next7").classList.add("visible");
    document.querySelector("#telefonomob").classList.remove("visible");
  });
}

next7.addEventListener("click", function () {
  document.querySelector("#next7").classList.remove("visible");
  document.querySelector("#phone").classList.remove("visible");
  document.querySelector("#trash").classList.remove("visible");
  document.querySelector("#telefono").classList.remove("visible");
  document.querySelector("#monstruo3").classList.remove("visible");
  document.querySelector("#monstruo3b").classList.add("visible");
  document.querySelector("#monstruo3b").classList.add("animacion3b");
  document.querySelector("#opciones4").classList.add("visible");
  if (window.innerWidth <= 425) {
    document.querySelector("#opciones4").classList.add("cambioFlex");
  }
  var caracteristicasmonstruo3 = document.querySelector(
    "#caracteristicasmonstruo3"
  );
  document.querySelector("#caracteristicasmonstruo3").classList.add("visible");
  document.querySelector("#subir3").classList.add("visible");
  caracteristicasmonstruo3.innerHTML =
    "<h3><em>'Influencer'</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Freelance Gurú </p>" +
    "<p><strong><u>HP:</u></strong> 8/8</p>" +
    "<p><strong><u>MP:</u></strong> 12/12</p>" +
    "<p><strong><u>Special skills:</u></strong> 5th dan Pa Kua Chang,</p>" +
    "<p>promoter of self-love,</p>" +
    "<p>can make 3 thousand pictures in an hour without changing the expression while earning more money than you make in a month.</p>";
});

subir3.addEventListener("click", function () {
  document.querySelector("#opciones4").classList.remove("visible");
  document.querySelector("#monstruo3b").classList.remove("visible");
  document
    .querySelector("#caracteristicasmonstruo3")
    .classList.remove("visible");
  document.querySelector("#subir3").classList.remove("visible");
  subeNivel();
  actualizaNivel();
  iniciar();
  document.querySelector(".cabecera").style.display = "flex";
  document.querySelector("#stage3").classList.add("visible");
  document.querySelector("#monstruo3").classList.add("visible");
  document.querySelector("#monstruo3").classList.add("animacionderecha");
  document.querySelector("#next3").classList.remove("visible");
  document.querySelector("#next4").classList.remove("visible");
  document.querySelector("#next8").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    //EXITO! MIRAR PARA FUTURAS REFERENCIAS
    elemento.classList.add("nivel3");
  });

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg3gato").classList.add("visible");
    document.querySelector("#stg3gato").classList.add("animacionizquierda");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg3perro").classList.add("visible");
    document.querySelector("#stg3perro").classList.add("animacionizquierda");
  }

  if (window.innerWidth <= 425) {
    document.querySelector("#opciones4").classList.remove("cambioFlex");
    document.querySelector("#monstruo3").style.width = "180px";
    document.querySelector("#monstruo3").style.height = "180px";
    document.querySelector("#monstruo3r").style.width = "180px";
    document.querySelector("#monstruo3r").style.height = "180px";
  }
  if (window.innerWidth <= 350) {
    document.querySelector("#opciones4").classList.remove("cambioFlex");
    document.querySelector("#monstruo3").style.width = "160px";
    document.querySelector("#monstruo3").style.height = "160px";
    document.querySelector("#monstruo3r").style.width = "160px";
    document.querySelector("#monstruo3r").style.height = "160px";
  }
});

next8.addEventListener("click", function () {
  //ARRANCAR DESDE ACA CON EL CAPITULO 4(PRIMERO EL LEVEL UP)
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#stage3").classList.remove("visible");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector("#stg3gato").classList.remove("cambiocolor");
  document.querySelector("#stg3perro").classList.remove("cambiocolor");
  document.querySelector("#stg3gato").classList.remove("visible");
  document.querySelector("#stg3perro").classList.remove("visible");
  document.querySelector("#stg4gator").classList.remove("visible"); //quitarlo antes de que aparezcan los "reds"
  document.querySelector("#stg4perror").classList.remove("visible");
  document.querySelector("#monstruo4gr").classList.remove("visible");
  document.querySelector("#monstruo4pr").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#leveling").classList.add("visible");
  document.querySelector("#levelup").classList.add("visible");
  document.querySelector("#info3").classList.add("visible");
  document.querySelector("#info3").classList.remove("show2");
  document.querySelector("#info3").classList.add("show1");
  document.querySelector("#info4").classList.add("visible");
  document.querySelector("#info4").classList.add("show2");
  document.querySelector("#arrow3").classList.add("visible");
  document.querySelector("#okey1").classList.remove("visible");
  document.querySelector("#okey2").classList.remove("visible");
  document.querySelector("#okey4").classList.remove("visible");
  document.querySelector("#okey5").classList.remove("visible");
  document.querySelector("#okey6").classList.remove("visible");
  document.querySelector("#wrong1").classList.remove("visible");
  document.querySelector("#wrong2").classList.remove("visible");
  document.querySelector("#wrong4").classList.remove("visible");
  document.querySelector("#wrong5").classList.remove("visible");
  document.querySelector("#wrong6").classList.remove("visible");
  document.querySelector("#wrong7").classList.remove("visible");
  document.querySelector("#next9").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgato3").classList.add("visible");
    document.querySelector("#lvlgato4").classList.add("visible");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperro3").classList.add("visible");
    document.querySelector("#lvlperro4").classList.add("visible");
  }
});

next9.addEventListener("click", function () {
  document.querySelector("#leveling").classList.remove("visible");
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#next9").classList.remove("visible");
  document.querySelector("#info3").classList.remove("visible");
  document.querySelector("#info4").classList.remove("visible");
  document.querySelector("#arrow3").classList.remove("visible");
  document.querySelector("#lvlgato3").classList.remove("visible");
  document.querySelector("#lvlgato4").classList.remove("visible");
  document.querySelector("#lvlperro3").classList.remove("visible");
  document.querySelector("#lvlperro4").classList.remove("visible");
  document.querySelector("#stage4").classList.add("visible");
  document.querySelector("#stage4").classList.remove("cambiocolor");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#next10").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg4gato").classList.add("visible");
    document.querySelector("#stg4gato").classList.add("animacionentrada");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#monstruo4g").classList.add("visible");
    document.querySelector("#monstruo4g").classList.add("animacion1");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg4perro").classList.add("visible");
    document.querySelector("#stg4perro").classList.add("animacionentrada");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("#monstruo4p").classList.add("visible");
    document.querySelector("#monstruo4p").classList.add("animacion1");
  }

  var nombre = document.querySelector("#nombre").value;
  var mensajeDatos4 = document.querySelector("#mensaje-datos4");
  document.querySelector("#mensaje-datos4").classList.add("visible");
  document.querySelector("#mensaje-datos4").classList.add("animacion0");

  mensajeDatos4.innerHTML =
    "<p>I'm a little bit confused here " +
    nombre +
    ", i really can't see clearly who is there." +
    " Anyways don't lower your guard, i think the exit from this cave is not far away. we just need to push forward a little bit more and it doesn't matter who stand before us!" +
    " So now we only have an option...</p> ";
});

next10.addEventListener("click", function () {
  document.querySelector("#stg4gato").classList.remove("visible");
  document.querySelector("#stg4gato").classList.remove("animacionentrada");
  document.querySelector("#stg4perro").classList.remove("visible");
  document.querySelector("#stg4perro").classList.remove("animacionentrada");
  document.querySelector("#next10").classList.remove("visible");
  document.querySelector("#mensaje-datos4").classList.remove("visible");
  document.querySelector("#mensaje-datos6").classList.add("visible");
  document.querySelector("#hablar10").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#monstruo4g").classList.add("visible");
    document.querySelector("#monstruo4g").classList.remove("animacion1");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#monstruo4p").classList.add("visible");
    document.querySelector("#monstruo4p").classList.remove("animacion1");
  }

  var nombre = document.querySelector("#nombre").value;
  var mensajeDatos5 = document.querySelector("#mensaje-datos5");
  document.querySelector("#mensaje-datos5").classList.add("visible");

  mensajeDatos5.innerHTML =
    "<p>Oh c'mon " +
    nombre +
    ", you know me very well, we have been together since you woke up in this cave." +
    "Not only that you have been hearing everything that i told you from the very beginning haha." +
    "It's so clear you don't wanna fight me, just go back and stay in this cave forever." +
    " If you dare to face me just pick one of this options, the right one.</p> ";

  document
    .getElementById("incorrecto1")
    .addEventListener("select", function () {
      alert("'Me'? As in you are choosing yourself? Doesn't make much sense ");
    });

  document
    .getElementById("incorrecto2")
    .addEventListener("select", function () {
      alert("You? As in 'you' you or 'you' me?? I'm confused");
    });

  document
    .getElementById("incorrecto3")
    .addEventListener("select", function () {
      alert("You mean the other dude? Nah");
    });

  document
    .getElementById("incorrecto4")
    .addEventListener("select", function () {
      alert("Bureaucrat? Nop, he is crunching numbers somewhere");
    });

  document.getElementById("correcto1").addEventListener("select", function () {
    document.getElementById("incorrecto1").style.display = "none";
    document.getElementById("incorrecto2").style.display = "none";
    document.getElementById("incorrecto3").style.display = "none";
    document.getElementById("incorrecto4").style.display = "none";
    document.querySelector("#correcto2").classList.add("visible");
    document.querySelector("#correcto2b").classList.add("visible");
  });

  document.getElementById("correcto2").addEventListener("paste", function () {
    document.querySelector("#mensaje-datos6").classList.remove("visible");
    document.querySelector("#correcto2").classList.remove("visible");
    document.querySelector("#correcto2b").classList.remove("visible");
    document.querySelector("#mensaje-datos7").classList.add("visible");
    document.querySelector("#next11").classList.add("visible");
  });
});

document.getElementById("next11").addEventListener("click", function () {
  document.querySelector("#mensaje-datos7").classList.remove("visible");
  document.querySelector("#next11").classList.remove("visible");
  document.querySelector("#monstruo4g").classList.remove("visible");
  document.querySelector("#monstruo4p").classList.remove("visible");
  document.querySelector("#mensaje-datos5").classList.remove("visible");
  document.querySelector("#opciones5").classList.add("visible");
  document.querySelector("#monstruo4gb").classList.add("animacion3");
  document.querySelector("#monstruo4pb").classList.add("animacion3");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#monstruo4gb").classList.add("visible");
    document.querySelector("#monstruo4gb").classList.remove("animacion1");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#monstruo4pb").classList.add("visible");
    document.querySelector("#monstruo4pb").classList.remove("animacion1");
  }

  var caracteristicasmonstruo4 = document.querySelector(
    "#caracteristicasmonstruo4"
  );
  document.querySelector("#caracteristicasmonstruo4").classList.add("visible");
  document.querySelector("#subir4").classList.add("visible");
  caracteristicasmonstruo4.innerHTML =
    "<h3><em>'????'</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Full-Time Hater </p>" +
    "<p><strong><u>HP:</u></strong> 10/10</p>" +
    "<p><strong><u>MP:</u></strong> 18/18</p>" +
    "<p><strong><u>Special skills:</u></strong> Hits you where it hurts,</p>" +
    "<p>spreader of hate,</p>" +
    "<p>gets you triggered in less than 2 comments.</p>";

  if (window.innerWidth <= 425) {
    document.querySelector("#opciones5").classList.add("cambioFlex");
  }
});

subir4.addEventListener("click", function () {
  document.querySelector("#opciones5").classList.remove("visible");
  document.querySelector("#monstruo4gb").classList.remove("visible");
  document.querySelector("#monstruo4pb").classList.remove("visible");
  document
    .querySelector("#caracteristicasmonstruo4")
    .classList.remove("visible");
  document.querySelector("#subir4").classList.remove("visible");
  subeNivel();
  actualizaNivel();
  iniciar();
  document.querySelector(".cabecera").style.display = "flex";
  document.querySelector("#stage4").classList.add("visible");
  document.querySelector("#next3").classList.remove("visible");
  document.querySelector("#next4").classList.remove("visible");
  document.querySelector("#next8").classList.remove("visible");
  document.querySelector("#next12").classList.add("visible");
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.remove("nivel2");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.remove("nivel3");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    //EXITO! MIRAR PARA FUTURAS REFERENCIAS
    elemento.classList.add("nivel4");
  });

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stg4gato").classList.add("visible");
    document.querySelector("#stg4gato").classList.add("animacionizquierda");
    document.querySelector("#monstruo4g").classList.add("visible");
    document.querySelector("#monstruo4g").classList.add("animacionderecha");

    if (window.innerWidth <= 425) {
      document.querySelector("#opciones5").classList.remove("cambioFlex");
    }
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stg4perro").classList.add("visible");
    document.querySelector("#stg4perro").classList.add("animacionizquierda");
    document.querySelector("#monstruo4p").classList.add("visible");
    document.querySelector("#monstruo4p").classList.add("animacionderecha");

    if (window.innerWidth <= 425) {
      document.querySelector("#opciones5").classList.remove("cambioFlex");
    }
  }
});

next12.addEventListener("click", function () {
  //ARRANCAR DESDE ACA CON EL CAPITULO 4(PRIMERO EL LEVEL UP)
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#stage4").classList.remove("visible");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector("#stg4gato").classList.remove("cambiocolor");
  document.querySelector("#stg4perro").classList.remove("cambiocolor");
  document.querySelector("#stage5").classList.remove("cambiocolor");
  document.querySelector("#stg4gato").classList.remove("visible");
  document.querySelector("#stg4perro").classList.remove("visible");
  document.querySelector("#lvlgatofinalbr").classList.remove("visible"); //quitarlo antes de que aparezcan los "reds"
  document.querySelector("#lvlperrofinalbr").classList.remove("visible");
  document.querySelector("#monstruogfinalr").classList.remove("visible");
  document.querySelector("#monstruopfinalr").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#leveling").classList.add("visible");
  document.querySelector("#levelup").classList.add("visible");
  document.querySelector("#info4").classList.add("visible");
  document.querySelector("#info4").classList.remove("show2");
  document.querySelector("#info4").classList.add("show1");
  document.querySelector("#info5").classList.add("visible"); /*sacar esto*/
  document.querySelector("#info5").classList.add("show2"); /*sacar esto*/
  document.querySelector("#arrow4").classList.add("visible");
  document.querySelector("#next9").classList.remove("visible");
  document.querySelector("#next13").classList.add("visible");
  document.querySelector("#monstruo4p").classList.remove("visible");
  document.querySelector("#monstruo4g").classList.remove("visible");
  document.querySelector("#leveling").classList.add("animaciontiraizq");
  document.querySelector("#arrow4").classList.add("animaciontiraizq");
  document.querySelector("#info4").classList.add("animaciontiraizq");
  document.querySelector("#next13").classList.add("animaciontiraizq");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgato4").classList.add("visible");
    document.querySelector("#monstruo4g2").classList.add("visible");
    document.querySelector("#lvlgato4").classList.add("animaciontiraizq");
    document.querySelector("#monstruo4g2").classList.add("acomodacentro");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperro4").classList.add("visible");
    document.querySelector("#monstruo4p2").classList.add("visible");
    document.querySelector("#lvlperro4").classList.add("animaciontiraizq");
    document.querySelector("#monstruo4p2").classList.add("acomodacentro");
  }

  document.querySelector("#mensajesemifinal").classList.add("visible");
  document.querySelector("#next14").classList.add("visible");
  document.querySelector("#next14").classList.add("delay");
});

next14.addEventListener("click", function () {
  document.querySelector("#next14").classList.remove("visible");
  document.querySelector("#leveling").classList.remove("visible");
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#info4").classList.remove("visible");
  document.querySelector("#info4").classList.remove("show1");
  document.querySelector("#info5").classList.remove("visible"); /*sacar esto*/
  document.querySelector("#info5").classList.remove("show2"); /*sacar esto*/
  document.querySelector("#arrow4").classList.remove("visible");
  document.querySelector("#next13").classList.remove("visible");
  document.querySelector("#mensajesemifinal").classList.remove("visible");
  document.querySelector("#stage5").classList.add("visible");
  var nombre = document.querySelector("#nombre").value;
  var mensajeDatos8 = document.querySelector("#mensaje-datos8");
  document.querySelector("#mensaje-datos8").classList.add("visible");
  mensajeDatos8.innerHTML =
    "<p>Now, you know " +
    nombre +
    ", i'm your 'dark side', i have been always with you and being here stuck together in this cave gave me a lot of power." +
    "I tried to use some of your fears or as you may call them 'monsters' to destroy you, but it seems it's all up to me, that is of course if you can even get up now, or if you want just stay down there...IT'S TIME FOR ME TO TAKE THE CONTROL HAHAHA!<p>";

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgato4").classList.remove("visible");
    document.querySelector("#monstruo4g2").classList.remove("visible");
    document.querySelector("#lvlgato4").classList.remove("animaciontiraizq");
    document.querySelector("#monstruo4g2").classList.remove("acomodacentro");
    document.querySelector("#monstruogfinal").classList.add("visible");
    document.querySelector("#monstruogfinal").classList.add("delay2");
    document
      .querySelector("#monstruogfinal")
      .classList.remove("animaciongolpe3");
    document
      .querySelector("#monstruogfinal")
      .classList.remove("animaciongolpe4");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperro4").classList.remove("visible");
    document.querySelector("#monstruo4p2").classList.remove("visible");
    document.querySelector("#lvlperro4").classList.remove("animaciontiraizq");
    document.querySelector("#monstruo4p2").classList.remove("acomodacentro");
    document.querySelector("#monstruopfinal").classList.add("visible");
    document.querySelector("#monstruopfinal").classList.add("delay2");
    document
      .querySelector("#monstruopfinal")
      .classList.remove("animaciongolpe3");
    document
      .querySelector("#monstruopfinal")
      .classList.remove("animaciongolpe4");
  }
  document.querySelector("#lvlgatofinalb").classList.remove("visible");
  document.querySelector("#lvlperrofinalb").classList.remove("visible");
  document.querySelector("#next15").classList.add("visible");
});

next15.addEventListener("click", function () {
  document.querySelector("#next15").classList.remove("visible");
  document.querySelector("#mensaje-datos8").classList.remove("visible");
  document.querySelector("#monstruogfinal").classList.remove("visible");
  document.querySelector("#monstruogfinal").classList.remove("delay2");
  document.querySelector("#monstruopfinal").classList.remove("visible");
  document.querySelector("#monstruopfinal").classList.remove("delay2");
  document.querySelector("#mensaje-datos9").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#stggatocaido").classList.add("visible");
    document.querySelector("#stggatocaido").classList.add("delay3");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#stgperrocaido").classList.add("visible");
    document.querySelector("#stgperrocaido  ").classList.add("delay3");
  }

  var mensajeDatos9 = document.querySelector("#mensaje-datos9");
  document.querySelector("#mensaje-datos9").classList.add("visible");
  var nombre = document.querySelector("#nombre").value;
  mensajeDatos9.innerHTML =
    "<p> C'mon " +
    nombre +
    ", we need to get up and finish this once and for all." +
    " Press and hold the 'Enter key' for a moment so i can RISE again, remember to hold it and not release it until i tell you. <p>";

  document.querySelector("#rise").classList.add("visible");
});

document.querySelector("#rise").addEventListener("keydown", function (event) {
  //QUE LINDO ESTO!
  if (event.keyCode === 13) {
    document.getElementById("rise").style.backgroundColor = "green";
    document
      .querySelector("#mensaje-datos9")
      .classList.add("animaciondesaparecer");
    document.querySelector("#hablar11").classList.add("visible");
    document.querySelector("#hablar12").classList.add("visible");
    document.querySelector("#hablar13").classList.add("visible");
    document.querySelector("#hablar14").classList.add("visible");
    var mensajeDatos10 = document.querySelector("#mensaje-datos10");
    document.querySelector("#mensaje-datos10").classList.add("visible");
    document.querySelector("#mensaje-datos10").classList.add("reaparecer2");
    mensajeDatos10.innerHTML = "RELEASE!";
    document.querySelector("#rise").classList.add("vanish");
    document.querySelector("#next16").classList.add("visible");

    if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
      document.querySelector("#stggatocaido").classList.remove("delay3");
      document
        .querySelector("#stggatocaido")
        .classList.add("animacionreaparecer");
      document.querySelector("#stggatocaido").classList.add("vanish");
      document.querySelector("#lookg").classList.add("visible");
      document.querySelector("#lookgato").classList.add("visible");
    }
    if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
      document.querySelector("#stgperrocaido").classList.remove("delay3");
      document
        .querySelector("#stgperrocaido")
        .classList.add("animacionreaparecer");
      document.querySelector("#stgperrocaido").classList.add("vanish");
      document.querySelector("#lookp").classList.add("visible");
      document.querySelector("#lookperro").classList.add("visible");
    }
  }
});

document.querySelector("#rise").addEventListener("keyup", function (event) {
  if (event.keyCode !== 13) {
    document.getElementById("rise").style.backgroundColor = "red";
    alert("That's not the 'Enter key'");
  }
});

next16.addEventListener("click", function () {
  document.querySelector("#next16").classList.remove("visible");
  document.querySelector("#lookp").classList.remove("visible");
  document.querySelector("#lookg").classList.remove("visible");
  document.querySelector("#stage5").classList.remove("visible");
  document.querySelector("#stggatocaido").classList.remove("visible");
  document.querySelector("#stgperrocaido").classList.remove("visible");
  document.querySelector("#mensaje-datos9").classList.remove("visible");
  document.querySelector("#mensaje-datos10").classList.remove("visible");
  document.querySelector("#hablar10").classList.remove("visible");
  document.querySelector("#hablar11").classList.remove("visible");
  document.querySelector("#hablar12").classList.remove("visible");
  document.querySelector("#hablar13").classList.remove("visible");
  document.querySelector("#hablar14").classList.remove("visible");
  document.querySelector("#rise").classList.remove("visible");
  document.querySelector("#leveling").classList.remove("animaciontiraizq");
  document.querySelector("#leveling").classList.add("visible");
  document.querySelector("#levelup").classList.add("visible");
  document.querySelector("#info6").classList.add("visible");
  document.querySelector("#info6").classList.add("show1");
  document.querySelector("#next17").classList.add("visible");

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgatofinal").classList.add("visible");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperrofinal").classList.add("visible");
  }
});

next17.addEventListener("click", function () {
  document.querySelector("#next17").classList.remove("visible");
  document.querySelector("#leveling").classList.remove("visible");
  document.querySelector("#levelup").classList.remove("visible");
  document.querySelector("#info6").classList.remove("visible");
  document.querySelector("#stage5").classList.add("visible");
  var mensajeDatos11 = document.querySelector("#mensaje-datos11");
  document.querySelector("#mensaje-datos11").classList.add("visible");
  var nombre = document.querySelector("#nombre").value;
  mensajeDatos11.innerHTML =
    "<p> I'm impressed " +
    nombre +
    ", you rised and achieved your maximum level and also it seems you are ready to face me and your fate." +
    " We don't have more time to waste, let's fight and see who finally is going to be in control!. <p>";

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgatofinalb").classList.add("visible");
    document.querySelector("#lvlgatofinalbr").classList.remove("visible");
    document
      .querySelector("#lvlgatofinalb")
      .classList.add("animacionizquierda");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document
      .querySelector("#lvlgatofinalb")
      .classList.remove("animaciongolpe1");
    document.querySelector("#monstruogfinal").classList.add("visible");
    document.querySelector("#monstruogfinal").classList.add("animacionderecha");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperrofinalb").classList.add("visible");
    document.querySelector("#lvlperrofinalbr").classList.remove("visible");
    document
      .querySelector("#lvlperrofinalb")
      .classList.add("animacionizquierda");
    document
      .querySelector("#lvlperrofinalb")
      .classList.remove("animaciongolpe");
    document
      .querySelector("#lvlperrofinalb")
      .classList.remove("animaciongolpe1");
    document.querySelector("#monstruopfinal").classList.add("visible");
    document.querySelector("#monstruopfinal").classList.add("animacionderecha");
  }
  document.querySelector("#next18").classList.add("visible");
});

next18.addEventListener("click", function () {
  document.querySelector("#next18").classList.remove("visible");
  document.querySelector("#mensaje-datos11").classList.remove("visible");
  document.querySelector("#stage5").classList.remove("visible");
  document.querySelector("#lvlgatofinalb").classList.remove("visible");
  document.querySelector("#monstruogfinal").classList.remove("visible");
  document.querySelector("#lvlperrofinalb").classList.remove("visible");
  document.querySelector("#monstruopfinal").classList.remove("visible");
  document.querySelector("#opciones6").classList.add("visible");
  document.querySelector("#monstruogfinalb").classList.add("animacion3");
  document.querySelector("#monstruopfinalb").classList.add("animacion3");
  var caracteristicasmonstruo5 = document.querySelector(
    "#caracteristicasmonstruo5"
  );
  document.querySelector("#caracteristicasmonstruo5").classList.add("visible");
  document.querySelector("#subir5").classList.add("visible");
  var nombre = document.querySelector("#nombre").value;
  caracteristicasmonstruo5.innerHTML =
    "<h3><em>" +
    nombre +
    "'s dark side</em></h3>" +
    "<p><strong><u>Occupation:</u></strong> " +
    "Mental Bully </p>" +
    "<p><strong><u>HP:</u></strong> 12/12</p>" +
    "<p><strong><u>MP:</u></strong> 21/21</p>" +
    "<p><strong><u>Special skills:</u></strong> Gaslighting enthusiast,</p>" +
    "<p>breaker of confidence,</p>" +
    "<p>can make you doubt yourself all the time.</p>";

  if (window.innerWidth <= 425) {
    document.querySelector("#opciones6").classList.add("cambioFlex");
  }

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#monstruogfinalb").classList.add("visible");
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#monstruopfinalb").classList.add("visible");
  }
});

subir5.addEventListener("click", function () {
  document.querySelector("#opciones6").classList.remove("visible");
  document.querySelector("#monstruogfinalb").classList.remove("visible");
  document.querySelector("#monstruopfinalb").classList.remove("visible");
  document
    .querySelector("#caracteristicasmonstruo5")
    .classList.remove("visible");
  document.querySelector("#subir5").classList.remove("visible");
  subeNivel(); //REVISAR ESTE TAL VEZ reemplazarlo por endgame
  finalizar();
  actualizaNivel();
  iniciar();
  document.querySelector(".cabecera").style.display = "flex";
  document.querySelector("#stage5").classList.add("visible");
  document.querySelector("#next3").classList.remove("visible");
  document.querySelector("#next4").classList.remove("visible");
  document.querySelector("#next8").classList.remove("visible");
  document.querySelector("#next12").classList.remove("visible");
  document.querySelector("#next19").classList.add("visible");
  document.querySelector("#endGame").style.top = "-400px";
  var nombre = document.querySelector("#nombre").value;
  contrincante.innerHTML = nombre + "'s dark side";
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.remove("nivel2");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.remove("nivel3");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    //EXITO! MIRAR PARA FUTURAS REFERENCIAS
    elemento.classList.remove("nivel4");
  });
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.classList.add("nivel5");
  });

  if (cuadro1.style.display == "block" && cuadro2.style.display == "none") {
    document.querySelector("#lvlgatofinalb").classList.add("visible");
    document
      .querySelector("#lvlgatofinalb")
      .classList.add("animacionizquierda");
    document.querySelector("#monstruogfinal").classList.add("visible");
    document.querySelector("#monstruogfinal").classList.add("animacionderecha");

    if (window.innerWidth <= 425) {
      document.querySelector("#lvlgatofinalb").style.width = "120px";
      document.querySelector("#lvlgatofinalb").style.height = "120px";
      document.querySelector("#lvlgatofinalb").style.marginLeft = "1px";
      document.querySelector("#lvlgatofinalbr").style.width = "120px";
      document.querySelector("#lvlgatofinalbr").style.height = "120px";
      document.querySelector("#lvlgatofinalbr").style.marginLeft = "1px";
      document.querySelector("#monstruogfinal").style.width = "130px";
      document.querySelector("#monstruogfinal").style.height = "130px";
      document.querySelector("#monstruogfinal").style.marginRight = "10px";
      document.querySelector("#monstruogfinalr").style.width = "130px";
      document.querySelector("#monstruogfinalr").style.height = "130px";
      document.querySelector("#monstruogfinalr").style.marginRight = "10px";
      document.querySelector("#mesa").style.marginTop = "-50px";
    }

    if (window.innerWidth <= 350) {
      document.querySelector("#lvlgatofinalb").style.width = "110px";
      document.querySelector("#lvlgatofinalb").style.height = "110px";
      document.querySelector("#lvlgatofinalb").style.marginLeft = "1px";
      document.querySelector("#lvlgatofinalbr").style.width = "110px";
      document.querySelector("#lvlgatofinalbr").style.height = "110px";
      document.querySelector("#lvlgatofinalbr").style.marginLeft = "1px";
      document.querySelector("#monstruogfinal").style.width = "120px";
      document.querySelector("#monstruogfinal").style.height = "120px";
      document.querySelector("#monstruogfinal").style.marginRight = "10px";
      document.querySelector("#monstruogfinalr").style.width = "120px";
      document.querySelector("#monstruogfinalr").style.height = "120px";
      document.querySelector("#monstruogfinalr").style.marginRight = "10px";
      document.querySelector("#mesa").style.marginTop = "-50px";
    }
  }
  if (cuadro2.style.display == "block" && cuadro1.style.display == "none") {
    document.querySelector("#lvlperrofinalb").classList.add("visible");
    document
      .querySelector("#lvlperrofinalb")
      .classList.add("animacionizquierda");
    document.querySelector("#monstruopfinal").classList.add("visible");
    document.querySelector("#monstruopfinal").classList.add("animacionderecha");

    if (window.innerWidth <= 425) {
      document.querySelector("#lvlperrofinalb").style.width = "120px";
      document.querySelector("#lvlperrofinalb").style.height = "120px";
      document.querySelector("#lvlperrofinalb").style.marginLeft = "1px";
      document.querySelector("#lvlperrofinalbr").style.width = "120px";
      document.querySelector("#lvlperrofinalbr").style.height = "120px";
      document.querySelector("#lvlperrofinalbr").style.marginLeft = "1px";
      document.querySelector("#monstruopfinal").style.width = "130px";
      document.querySelector("#monstruopfinal").style.height = "130px";
      document.querySelector("#monstruopfinal").style.marginRight = "10px";
      document.querySelector("#monstruopfinalr").style.width = "130px";
      document.querySelector("#monstruopfinalr").style.height = "130px";
      document.querySelector("#monstruopfinalr").style.marginRight = "10px";
      document.querySelector("#mesa").style.marginTop = "-50px";
    }

    if (window.innerWidth <= 425) {
      document.querySelector("#lvlperrofinalb").style.width = "110px";
      document.querySelector("#lvlperrofinalb").style.height = "110px";
      document.querySelector("#lvlperrofinalb").style.marginLeft = "1px";
      document.querySelector("#lvlperrofinalbr").style.width = "110px";
      document.querySelector("#lvlperrofinalbr").style.height = "110px";
      document.querySelector("#lvlperrofinalbr").style.marginLeft = "1px";
      document.querySelector("#monstruopfinal").style.width = "120px";
      document.querySelector("#monstruopfinal").style.height = "120px";
      document.querySelector("#monstruopfinal").style.marginRight = "10px";
      document.querySelector("#monstruopfinalr").style.width = "120px";
      document.querySelector("#monstruopfinalr").style.height = "120px";
      document.querySelector("#monstruopfinalr").style.marginRight = "10px";
      document.querySelector("#mesa").style.marginTop = "-50px";
    }
  }

  if (window.innerWidth <= 425) {
    document.querySelector("#opciones6").classList.remove("cambioFlex");
  }
});

next19.addEventListener("click", function () {
  document.querySelector("#mesa").style.marginTop = "0px";
  document.querySelector(".cabecera").style.display = "none";
  document.querySelector("#stage5").classList.remove("visible");
  document.querySelector("#peligro").classList.remove("visible");
  document.querySelector("main").classList.remove("cambiocolor");
  document.querySelector(".cabecera").classList.remove("cambiocolor");
  document.querySelector("#lvlgatofinalb").classList.remove("cambiocolor");
  document.querySelector("#lvlperrofinalb").classList.remove("cambiocolor");
  document.querySelector("#lvlgatofinalb").classList.remove("visible");
  document.querySelector("#lvlperrofinalb").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");
  document.querySelector("#info4").classList.remove("show2");
  document.querySelector("#credits").classList.add("visible"); //armar boton para los creditos
  document.querySelector("#monstruopfinal").classList.remove("visible");
  document.querySelector("#monstruogfinal").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.body.style.backgroundColor = "white";
  document.querySelector("#stage6").classList.add("visible");
  document.querySelector("#gatocierre").classList.add("visible");
  document.querySelector("#perrocierre").classList.add("visible");
  document.querySelector("#clauhaus").classList.add("visible");
  var mensajeDatosfinal = document.querySelector("#mensaje-datosfinal");
  document.querySelector("#mensaje-datosfinal").classList.add("visible");
  var nombre = document.querySelector("#nombre").value;
  mensajeDatosfinal.innerHTML =
    "<p> You finally did it " +
    nombre +
    ", you left all your 'monsters' back in the cave." +
    " It was a long journey, almost an odyssey, but you were all the time focussed in your goal." +
    " Now you can continue, knowing that you faced your fears and conquered them, congratulations! <p>";
});

credits.addEventListener("click", function () {
  document.querySelector("#clauhaus").style.marginTop = "-80px";
  if (window.innerWidth <= 425) {
    document.querySelector("#clauhaus").style.marginTop = "-40px";
    document.querySelector("#clauhaus").style.width = "300px";
    document.querySelector("#clauhaus").style.height = "300px";
  }
  document.querySelector("#credits").classList.remove("visible");
  document.querySelector("#gatocierre").classList.remove("visible");
  document.querySelector("#perrocierre").classList.remove("visible");
  document.querySelector("#mensaje-datosfinal").classList.remove("visible");
  document.querySelector("#mensaje-creditos").classList.add("visible");
  var mensajeCreditos = document.querySelector("#mensaje-creditos");
  mensajeCreditos.innerHTML =
    "<p> Director, writer, producer, developer, storyboard, backgrounds, tester, characters and battle design: <b>Claudio Aime</b></p>" +
    "<p> Special thanks : <b>To you! Thank you very much for playing! </b> </p>";
  document.querySelector("#miweb").classList.add("visible");
  document.querySelector("#replay").classList.add("visible");
});

var replay = document.querySelector("#replay");
replay.addEventListener("click", function () {
  location.reload();
});
