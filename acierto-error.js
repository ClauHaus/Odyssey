function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  var aciertos = document.getElementById("aciertos");
  contadorAcierto--;
  aciertos.innerHTML = contadorAcierto;
  //document.querySelector("#sonido-acierto").play();
  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;

 if (contadorAcierto == 11) {
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#okeyfinal11").classList.add("visible");
  okeyfinal11.innerHTML = "You just can't win!";
 } if (contadorAcierto == 10 && nivelActual < niveles.length - 1) {                               //LIMITE MONSTRUO4
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okey8").classList.add("visible");
  okey8.innerHTML = "ARGHH";
 } else if (contadorAcierto == 10 && nivelActual < niveles.length) {                            //LIMITE MONSTRUO4
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal10").classList.add("visible");
  okeyfinal10.innerHTML = "I'll need backup";
  document.querySelector("#monstruo1final").classList.add("visible");
  document.querySelector("#monstruo2final").classList.add("visible");
  document.querySelector("#monstruo3final").classList.add("visible");
 } if (contadorAcierto == 9 && nivelActual < niveles.length - 1) {
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#okey7").classList.add("visible");
  okey7.innerHTML = "You are going down!";
} else if (contadorAcierto == 9 && nivelActual < niveles.length) {
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#okeyfinal9").classList.add("visible");
  okeyfinal9.innerHTML = "Move now and help me!";
} if (contadorAcierto == 8 && nivelActual < niveles.length - 1) {                                         //LIMITE MONSTRUO3
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
 } else if (contadorAcierto == 8 && nivelActual < niveles.length) {                                         //LIMITE MONSTRUO3
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4")
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal8").classList.add("visible");
  document.querySelector("#monstruo1final").classList.add("jefesout");
  okeyfinal8.innerHTML = "You are doomed";
}if (contadorAcierto == 7 && nivelActual < niveles.length - 1) {
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4"); 
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4"); 
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#okey6").classList.add("visible");
  okey6.innerHTML = "Ah c'mon!";
 } else if (contadorAcierto == 7 && nivelActual < niveles.length) {
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4"); 
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2final").classList.add("jefesout");
  document.querySelector("#okeyfinal7").classList.add("visible");
  okeyfinal7.innerHTML = "Ah c'mon!";
} if (contadorAcierto == 6 && nivelActual < niveles.length -1) {                                               //LIMITE MONSTRUO2
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
 } else if (contadorAcierto == 6 && nivelActual < niveles.length) {                                           //LIMITE MONSTRUO2
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3final").classList.add("jefesout");
  document.querySelector("#okeyfinal6").classList.add("visible");
  okeyfinal6.innerHTML = "You are all useless!"
} if (contadorAcierto == 5 && nivelActual < niveles.length - 1) {
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#okey5").classList.add("visible");
  okey5.innerHTML = "OH NO!";
 } else if (contadorAcierto == 5 && nivelActual < niveles.length) {
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4")
  document.querySelector("#okeyfinal5").classList.add("visible");
  okeyfinal5.innerHTML = "Prepare for my real power"
} if (contadorAcierto == 4 && nivelActual < niveles.length - 1) {                                          //LIMITE MONSTRUO1
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okey4").classList.add("visible");
  okey4.innerHTML = "AARGH!!";
 } else if (contadorAcierto == 4 && contadorErrores <= 3 &&  cuadro1.style.display == "block" && cuadro2.style.display == "none" && nivelActual < niveles.length) {                                                //LIMITE MONSTRUO1
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal4").classList.add("visible");
  okeyfinal4.innerHTML = "You should be scared!" 
  document.querySelector("#monstruogfinal").classList.remove("visible"); //revisar
  document.querySelector("#monstruogfinalr").classList.remove("visible");
  document.querySelector("#lvlgatofinalb").classList.remove("visible");
  document.querySelector("#lvlgatofinalbr").classList.remove("visible");
  document.querySelector("#monstruoformafinalgr").classList.add("visible");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe4");
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
 }
 else if (contadorAcierto == 4 && contadorErrores > 3 &&  cuadro1.style.display == "block" && cuadro2.style.display == "none" && nivelActual < niveles.length) {                                                //LIMITE MONSTRUO1
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruogfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruogfinalr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal4").classList.add("visible");
  okeyfinal4.innerHTML = "You should be scared!" 
  document.querySelector("#monstruogfinal").classList.remove("visible"); //revisar
  document.querySelector("#monstruogfinalr").classList.remove("visible");
  document.querySelector("#lvlgatofinalb").classList.remove("visible");
  document.querySelector("#lvlgatofinalbr").classList.remove("visible");
  document.querySelector("#monstruoformafinalg").classList.add("visible");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe4");
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
 }
  else if (contadorAcierto == 4 &&  contadorErrores <= 3 && cuadro2.style.display == "block" && cuadro1.style.display == "none" && nivelActual < niveles.length) {                                                //LIMITE MONSTRUO1
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal4").classList.add("visible");
  okeyfinal4.innerHTML = "You should be scared!"   //aparecer monstruo forma final! y desaparecer los otros dos
  document.querySelector("#monstruopfinal").classList.remove("visible");
  document.querySelector("#monstruopfinalr").classList.remove("visible");
  document.querySelector("#lvlperrofinalb").classList.remove("visible");
  document.querySelector("#lvlperrofinalbr").classList.remove("visible");
  document.querySelector("#monstruoformafinalpr").classList.add("visible");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe4");
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
}
else if (contadorAcierto == 4 &&  contadorErrores > 3 && cuadro2.style.display == "block" && cuadro1.style.display == "none" && nivelActual < niveles.length) {                                                //LIMITE MONSTRUO1
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal4").classList.add("visible");
  okeyfinal4.innerHTML = "You should be scared!"   //aparecer monstruo forma final! y desaparecer los otros dos
  document.querySelector("#monstruopfinal").classList.remove("visible");
  document.querySelector("#monstruopfinalr").classList.remove("visible");
  document.querySelector("#monstruoformafinalp").classList.add("visible");
  document.querySelector("#lvlperrofinalb").classList.remove("visible");
  document.querySelector("#lvlperrofinalbr").classList.remove("visible");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe4");
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
}
if (contadorAcierto == 3 && nivelActual < niveles.length - 1) {
  document.querySelector("#monstruo1").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinal").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinal").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruopfinalr").classList.add("animaciongolpe3");
  document.querySelector("#monstruopfinalr").classList.remove("animaciongolpe4");
  document.querySelector("#aciertos").classList.remove("animacionrojo1");
  document.querySelector("#aciertos").classList.add("animacionrojo");
 } else if (contadorAcierto == 3 && nivelActual < niveles.length ) {
  document.querySelector("#monstruo1").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe4");
  document.querySelector("#aciertos").classList.remove("animacionrojo1");
  document.querySelector("#aciertos").classList.add("animacionrojo");
  document.querySelector("#okeyfinal3").classList.add("visible");
  okeyfinal3.innerHTML = "You can't win!"
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
} if (contadorAcierto == 2 && nivelActual < niveles.length - 1) {
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe4");
  document.querySelector("#okey2").classList.add("visible");
  okey2.innerHTML = "You are going to lose!";
  document.querySelector("#enemigo").classList.add("vibrate");
 } else if (contadorAcierto == 2 && nivelActual < niveles.length) {
  document.querySelector("#aciertos").classList.remove("animacionrojo");
  document.querySelector("#aciertos").classList.add("animacionrojo1");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1").classList.add("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2").classList.add("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3").classList.add("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe4");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe4");
  document.querySelector("#okeyfinal2").classList.add("visible");
  okeyfinal2.innerHTML = "Stop it " + nombre + "!";
  document.querySelector("#enemigo").classList.add("vibrate");
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
} if (contadorAcierto == 1 && nivelActual < niveles.length - 1) {
  document.querySelector("#aciertos").classList.remove("animacionrojo1");
  document.querySelector("#aciertos").classList.add("animacionrojo");
  document.querySelector("#monstruo1").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe4");
  document.querySelector("#okey1").classList.add("visible");
  okey1.innerHTML = "Damn you " + nombre + "!";
 } else if (contadorAcierto == 1 && nivelActual < niveles.length) {
  document.querySelector("#aciertos").classList.remove("animacionrojo1");
  document.querySelector("#aciertos").classList.add("animacionrojo");
  document.querySelector("#monstruo1").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo1r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo2r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo3r").classList.add("animaciongolpe3");
  document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4g").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4g").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4p").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4p").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4gr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruo4pr").classList.add("animaciongolpe3");
  document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalg").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalg").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalp").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalp").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalgr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4");
  document.querySelector("#monstruoformafinalpr").classList.add("animaciongolpe3");
  document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe4");
  document.querySelector("#okeyfinal1").classList.add("visible");
  okeyfinal1.innerHTML = "Don't you dare!";
  document.querySelector("#wrong1").classList.add("wrongmovimiento2");
  document.querySelector("#wrong2").classList.add("wrongmovimiento2");
  document.querySelector("#wrong4").classList.add("wrongmovimiento2");
  document.querySelector("#wrong5").classList.add("wrongmovimiento2");
  document.querySelector("#wrong6").classList.add("wrongmovimiento2");
  document.querySelector("#wrong7").classList.add("wrongmovimiento2");
  document.querySelector("#wrong8").classList.add("wrongmovimiento2");
  document.querySelector("#wrong9").classList.add("wrongmovimiento2");
}

if (contadorAcierto <= 0 && nivelActual < niveles.length - 1) {   
    document.querySelector("#subeNivel").classList.add("visible");
    //subeNivel(); al no haber mas cartas y el timer ser superior a -1 da el nivel como superado, habilitar esta opcion aca es dar dos argumentos distintos la misma funcion, es uno u el otro
    clearInterval(cronometro);
    return; 
  }

 else if (contadorAcierto <= 0 && nivelActual < niveles.length ) {   
    clearInterval(cronometro);
    document.querySelector("#endGame").classList.add("visible");
  }

  if (contadorAcierto <= 0 && nivelActual < niveles.length - 1 && modoRelax == true) {   
    document.querySelector("#subeNivel").classList.add("visible");
    return;
  }

   if (contadorAcierto <= 0 && nivelActual < niveles.length && modoRelax == true ) {   
    clearInterval(cronometro);
    document.querySelector("#endGame").classList.add("visible");
  }

// Al poner dos opciones similares siempre el sistema elegira la primera (siempre y cuando respete las "reglas")
// En este caso el "niveles.lenght" es en realidad un numero, el total de niveles del juego por eso lo que hacemos es
// Restarle 1 para indicar que el "subenivel" va a seguir hasta la penultima stage, luego saldra el endgame. 
}

function actualizaAciertos(){
  var contadorAcierto = niveles[nivelActual].aciertos;
  contadorAcierto = aciertos;

 /* if (aciertos < 10) {
    contadorAcierto = 0 + aciertos;
  }

  else if ( aciertos > 10) {
    contadorAcierto =  aciertos; ////mirar si va sin la S
  }*/
  aciertos--; //revisar
  document.querySelector("#aciertos").innerText = aciertos;
}

function aciertosMaxContador() {
  var aciertosMaxTexto = niveles[nivelActual].aciertosMax;
document.querySelector("#aciertos-total").innerText = aciertosMaxTexto;
}

/*-----------ERRORES---------------*/

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });
  var errores = document.getElementById("errores");
  contadorErrores--;
  errores.innerHTML = contadorErrores;
  //document.querySelector("#sonido-error").play();
  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento){
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);

   if (contadorErrores == 20) {                                                     //LIMITE STAGE5
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
 }
   if (contadorErrores == 19) {                                                     //LIMITE STAGE5
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1"); 
 }
   if (contadorErrores == 18) {                                                     //LIMITE STAGE4
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
 }
 if (contadorErrores == 17) {                                                     
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");  
    document.querySelector("#wrong9").classList.add("visible");
    wrong9.innerHTML = "Oh no!";

  } if (contadorErrores == 16) {                                                  
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
  } if (contadorErrores == 15) {                                                  
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1"); 
  } if (contadorErrores == 14) {                                                  
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
    document.querySelector("#wrong8").classList.add("visible");
    wrong8.innerHTML = "Oh no!";
  } if (contadorErrores == 13) {                                                  
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1"); 
  } if (contadorErrores == 12) {                                                  //LIMITE STAGE3
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.add("animaciongolpe1");
    document.querySelector("#stg3perro").classList.add("animaciongolpe1");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
  } if (contadorErrores == 11) {                                                  
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");   
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");  
    document.querySelector("#wrong7").classList.add("visible");
    wrong7.innerHTML = "AUCH!";
  } if (contadorErrores == 10) {                                                  
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.add("animaciongolpe1");
    document.querySelector("#stg3perro").classList.add("animaciongolpe1");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");      
  } if (contadorErrores == 9) {                                                   
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1"); 
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");   
    document.querySelector("#wrong6").classList.add("visible"); 
    wrong6.innerHTML = "We're still okay!"; 
  } if (contadorErrores == 8) {                                                   //LIMITE STAGE2
    document.querySelector("#stg2gato").classList.remove("animaciongolpe");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe");
    document.querySelector("#stg2gato").classList.add("animaciongolpe1");
    document.querySelector("#stg2perro").classList.add("animaciongolpe1");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.add("animaciongolpe1");
    document.querySelector("#stg3perro").classList.add("animaciongolpe1");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");          
  } if (contadorErrores == 7) {                                                   
    document.querySelector("#stg2gato").classList.add("animaciongolpe");
    document.querySelector("#stg2perro").classList.add("animaciongolpe");
    document.querySelector("#stg2gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1"); 
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");  
  } if (contadorErrores == 6) {                                                   
    document.querySelector("#stg2gato").classList.remove("animaciongolpe");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe");
    document.querySelector("#stg2gato").classList.add("animaciongolpe1");
    document.querySelector("#stg2perro").classList.add("animaciongolpe1");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.add("animaciongolpe1");
    document.querySelector("#stg3perro").classList.add("animaciongolpe1"); 
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");   
    document.querySelector("#wrong5").classList.add("visible");
    wrong5.innerHTML = "AUCH!";
  } if (contadorErrores == 5) {                                                   
    document.querySelector("#personajegatob").classList.add("animaciongolpe");
    document.querySelector("#personajeperrob").classList.add("animaciongolpe");
    document.querySelector("#personajegatob").classList.remove("animaciongolpe1");
    document.querySelector("#personajeperrob").classList.remove("animaciongolpe1");
    document.querySelector("#stg2gato").classList.add("animaciongolpe");
    document.querySelector("#stg2perro").classList.add("animaciongolpe");
    document.querySelector("#stg2gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe1");
  } if (contadorErrores == 4) {                                                   
    document.querySelector("#errores").classList.remove("animacionrojo");
    document.querySelector("#errores").classList.add("animacionrojo1");
    document.querySelector("#personajegatob").classList.remove("animaciongolpe");
    document.querySelector("#personajeperrob").classList.remove("animaciongolpe");
    document.querySelector("#personajegatob").classList.add("animaciongolpe1");
    document.querySelector("#personajeperrob").classList.add("animaciongolpe1");
    document.querySelector("#stg2gato").classList.remove("animaciongolpe");
    document.querySelector("#stg2perro").classList.remove("animaciongolpe");
    document.querySelector("#stg2gato").classList.add("animaciongolpe1");
    document.querySelector("#stg2perro").classList.add("animaciongolpe1");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe");
    document.querySelector("#stg3gato").classList.add("animaciongolpe1");
    document.querySelector("#stg3perro").classList.add("animaciongolpe1");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe");
    document.querySelector("#stg4gato").classList.add("animaciongolpe1");
    document.querySelector("#stg4perro").classList.add("animaciongolpe1");
    document.querySelector("#lvlgatofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalb").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalb").classList.add("animaciongolpe1");
 
  } if (contadorErrores == 3 && cuadro1.style.display == "block" && cuadro2.style.display == "none" && contadorAcierto <= 4) {  
      // mantener los "subjefes finales" como .PNGs ya que si no se deberia hacer muchas suposiciones, de si "estan" o no                                               
    document.querySelector("#errores").classList.remove("animacionrojo1");
    document.querySelector("#errores").classList.add("animacionrojo");
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("main").classList.add("cambiocolor");
    document.querySelector(".cabecera").classList.add("cambiocolor");
    document.querySelector(".heroes").classList.add("cambiocolor");
    document.querySelector("#stage2").classList.add("cambiocolor");
    document.querySelector("#stage3").classList.add("cambiocolor");
    document.querySelector("#stage4").classList.add("cambiocolor");
    document.querySelector("#stage5").classList.add("cambiocolor");
    document.querySelector("#peligro").classList.add("visible");
    document.querySelector("#wrong4").classList.add("visible");
    wrong4.innerHTML = "OUCH!";
    document.querySelector("#lvlgatofinalb").classList.remove("visible");
    document.querySelector("#lvlgatofinalbr").classList.add("visible");
    document.querySelector("#lvlgatofinalbr").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalb").classList.remove("visible");
    document.querySelector("#lvlgatofinalbr").classList.add("visible");
    document.querySelector("#lvlgatofinalbr").classList.add("animaciongolpe");
    document.querySelector("#personajegatob").classList.remove("visible");
    document.querySelector("#personajegatobr").classList.add("visible");
    document.querySelector("#personajegatobr").classList.add("animaciongolpe");
    document.querySelector("#monstruo1").classList.remove("visible");
    document.querySelector("#monstruo1r").classList.add("visible");
    document.querySelector("#monstruo1r").classList.remove("animaciongolpe3")
    document.querySelector("#monstruo1r").classList.remove("animaciongolpe4")
    document.querySelector("#monstruo2").classList.remove("visible");
    document.querySelector("#monstruo2r").classList.add("visible");
    document.querySelector("#monstruo2r").classList.remove("animaciongolpe3")
    document.querySelector("#monstruo2r").classList.remove("animaciongolpe4")
    document.querySelector("#monstruo3").classList.remove("visible");
    document.querySelector("#monstruo3r").classList.add("visible");
    document.querySelector("#monstruo3r").classList.remove("animaciongolpe3")
    document.querySelector("#monstruo3r").classList.remove("animaciongolpe4")
    document.querySelector("#monstruo4g").classList.remove("visible");
    document.querySelector("#monstruo4gr").classList.add("visible");
    document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3")
    document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4")
    document.querySelector("#monstruoformafinalg").classList.remove("visible");
    document.querySelector("#monstruoformafinalgr").classList.add("visible");
    document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3")
    document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4")
    document.querySelector("#stg2gato").classList.remove("visible");
    document.querySelector("#stg2gator").classList.add("visible");
    document.querySelector("#stg2gator").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("visible");
    document.querySelector("#stg3gator").classList.add("visible");
    document.querySelector("#stg3gator").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("visible");
    document.querySelector("#stg4gator").classList.add("visible");
    document.querySelector("#stg4gator").classList.add("animaciongolpe");
    document.querySelector("#monstruoformafinalp").classList.remove("visible");
    document.querySelector("#monstruoformafinalpr").classList.remove("visible"); 
  }
  else if (contadorErrores == 3 && cuadro1.style.display == "block" && cuadro2.style.display == "none" && contadorAcierto > 4) {  
    // mantener los "subjefes finales" como .PNGs ya que si no se deberia hacer muchas suposiciones, de si "estan" o no                                               
   document.querySelector("#errores").classList.remove("animacionrojo1");
   document.querySelector("#errores").classList.add("animacionrojo");
   document.querySelector("#stg3gato").classList.add("animaciongolpe");
   document.querySelector("#stg3perro").classList.add("animaciongolpe");
   document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
   document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
   document.querySelector("#stg4gato").classList.add("animaciongolpe");
   document.querySelector("#stg4perro").classList.add("animaciongolpe");
   document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
   document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
   document.querySelector("main").classList.add("cambiocolor");
   document.querySelector(".cabecera").classList.add("cambiocolor");
   document.querySelector(".heroes").classList.add("cambiocolor");
   document.querySelector("#stage2").classList.add("cambiocolor");
   document.querySelector("#stage3").classList.add("cambiocolor");
   document.querySelector("#stage4").classList.add("cambiocolor");
   document.querySelector("#stage5").classList.add("cambiocolor");
   document.querySelector("#peligro").classList.add("visible");
   document.querySelector("#wrong4").classList.add("visible");
   wrong4.innerHTML = "OUCH!";
   document.querySelector("#lvlgatofinalb").classList.remove("visible");
   document.querySelector("#lvlgatofinalbr").classList.add("visible");
   document.querySelector("#lvlgatofinalbr").classList.add("animaciongolpe");
   document.querySelector("#personajegatob").classList.remove("visible");
   document.querySelector("#personajegatobr").classList.add("visible");
   document.querySelector("#personajegatobr").classList.add("animaciongolpe");
   document.querySelector("#monstruo1").classList.remove("visible");
   document.querySelector("#monstruo1r").classList.add("visible");
   document.querySelector("#monstruo1r").classList.remove("animaciongolpe3")
   document.querySelector("#monstruo1r").classList.remove("animaciongolpe4")
   document.querySelector("#monstruo2").classList.remove("visible");
   document.querySelector("#monstruo2r").classList.add("visible");
   document.querySelector("#monstruo2r").classList.remove("animaciongolpe3")
   document.querySelector("#monstruo2r").classList.remove("animaciongolpe4")
   document.querySelector("#monstruo3").classList.remove("visible");
   document.querySelector("#monstruo3r").classList.add("visible");
   document.querySelector("#monstruo3r").classList.remove("animaciongolpe3")
   document.querySelector("#monstruo3r").classList.remove("animaciongolpe4")
   document.querySelector("#monstruo4g").classList.remove("visible");
   document.querySelector("#monstruo4gr").classList.add("visible");
   document.querySelector("#monstruo4gr").classList.remove("animaciongolpe3")
   document.querySelector("#monstruo4gr").classList.remove("animaciongolpe4")
  // document.querySelector("#monstruoformafinalg").classList.remove("visible");
  // document.querySelector("#monstruoformafinalgr").classList.add("visible");
  // document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe3")
  // document.querySelector("#monstruoformafinalgr").classList.remove("animaciongolpe4")
   document.querySelector("#stg2gato").classList.remove("visible");
   document.querySelector("#stg2gator").classList.add("visible");
   document.querySelector("#stg2gator").classList.add("animaciongolpe");
   document.querySelector("#stg3gato").classList.remove("visible");
   document.querySelector("#stg3gator").classList.add("visible");
   document.querySelector("#stg3gator").classList.add("animaciongolpe");
   document.querySelector("#stg4gato").classList.remove("visible");
   document.querySelector("#stg4gator").classList.add("visible");
   document.querySelector("#stg4gator").classList.add("animaciongolpe");
   document.querySelector("#monstruoformafinalp").classList.remove("visible");
   document.querySelector("#monstruoformafinalpr").classList.remove("visible");
   document.querySelector("#monstruogfinal").classList.remove("visible"); //revisar
   document.querySelector("#monstruogfinalr").classList.add("visible");
 }
 else if (contadorErrores == 3 && cuadro2.style.display == "block" && cuadro1.style.display == "none" && contadorAcierto <= 4) {                                                   
   document.querySelector("#errores").classList.remove("animacionrojo1");
   document.querySelector("#errores").classList.add("animacionrojo");
   document.querySelector("#personajegatob").classList.add("animaciongolpe");
   document.querySelector("#personajeperrob").classList.add("animaciongolpe");
   document.querySelector("#personajegatob").classList.remove("animaciongolpe1");
   document.querySelector("#personajeperrob").classList.remove("animaciongolpe1");
   document.querySelector("#stg3gato").classList.add("animaciongolpe");
   document.querySelector("#stg3perro").classList.add("animaciongolpe");
   document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
   document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
   document.querySelector("#stg4gato").classList.add("animaciongolpe");
   document.querySelector("#stg4perro").classList.add("animaciongolpe");
   document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
   document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
   document.querySelector("main").classList.add("cambiocolor");
   document.querySelector(".cabecera").classList.add("cambiocolor");
   document.querySelector(".heroes").classList.add("cambiocolor");
   document.querySelector("#personaje1").classList.add("cambiocolor");
   document.querySelector("#personaje2").classList.add("cambiocolor");
   document.querySelector("#stage2").classList.add("cambiocolor");
   document.querySelector("#stage3").classList.add("cambiocolor");
   document.querySelector("#stage4").classList.add("cambiocolor");
   document.querySelector("#stage5").classList.add("cambiocolor");
   document.querySelector("#peligro").classList.add("visible");
   document.querySelector("#wrong4").classList.add("visible");
   wrong4.innerHTML = "OUCH!";
   document.querySelector("#lvlperrofinalb").classList.remove("visible");
   document.querySelector("#lvlperrofinalbr").classList.add("visible");
   document.querySelector("#lvlperrofinalbr").classList.add("animaciongolpe");
   document.querySelector("#personajeperrob").classList.remove("visible");
   document.querySelector("#personajeperrobr").classList.add("visible");
   document.querySelector("#personajeperrobr").classList.add("animaciongolpe");
   document.querySelector("#monstruo1").classList.remove("visible");
   document.querySelector("#monstruo1r").classList.add("visible");
   document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
   document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
   document.querySelector("#monstruo2").classList.remove("visible");
   document.querySelector("#monstruo2r").classList.add("visible");
   document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
   document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
   document.querySelector("#monstruo3").classList.remove("visible");
   document.querySelector("#monstruo3r").classList.add("visible");
   document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
   document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
   document.querySelector("#monstruo4p").classList.remove("visible");
   document.querySelector("#monstruo4pr").classList.add("visible");
   document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
   document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
   document.querySelector("#monstruoformafinalg").classList.remove("visible");
   document.querySelector("#monstruoformafinalgr").classList.remove("visible");
   document.querySelector("#monstruoformafinalp").classList.remove("visible");
   document.querySelector("#monstruoformafinalpr").classList.add("visible");
   document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe3")
   document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe4")
   document.querySelector("#stg2perro").classList.remove("visible");
   document.querySelector("#stg2perror").classList.add("visible");
   document.querySelector("#stg2perror").classList.add("animaciongolpe");
   document.querySelector("#stg3perro").classList.remove("visible");
   document.querySelector("#stg3perror").classList.add("visible");
   document.querySelector("#stg3perror").classList.add("animaciongolpe");
   document.querySelector("#stg4perro").classList.remove("visible");
   document.querySelector("#stg4perror").classList.add("visible");
   document.querySelector("#stg4perror").classList.add("animaciongolpe");  
  } 
  else if (contadorErrores == 3 && cuadro2.style.display == "block" && cuadro1.style.display == "none" && contadorAcierto > 4) {                                                   
    document.querySelector("#errores").classList.remove("animacionrojo1");
    document.querySelector("#errores").classList.add("animacionrojo");
    document.querySelector("#personajegatob").classList.add("animaciongolpe");
    document.querySelector("#personajeperrob").classList.add("animaciongolpe");
    document.querySelector("#personajegatob").classList.remove("animaciongolpe1");
    document.querySelector("#personajeperrob").classList.remove("animaciongolpe1");
    document.querySelector("#stg3gato").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.add("animaciongolpe");
    document.querySelector("#stg3gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perro").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gato").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.add("animaciongolpe");
    document.querySelector("#stg4gato").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perro").classList.remove("animaciongolpe1");
    document.querySelector("main").classList.add("cambiocolor");
    document.querySelector(".cabecera").classList.add("cambiocolor");
    document.querySelector(".heroes").classList.add("cambiocolor");
    document.querySelector("#personaje1").classList.add("cambiocolor");
    document.querySelector("#personaje2").classList.add("cambiocolor");
    document.querySelector("#stage2").classList.add("cambiocolor");
    document.querySelector("#stage3").classList.add("cambiocolor");
    document.querySelector("#stage4").classList.add("cambiocolor");
    document.querySelector("#stage5").classList.add("cambiocolor");
    document.querySelector("#peligro").classList.add("visible");
    document.querySelector("#wrong4").classList.add("visible");
    wrong4.innerHTML = "OUCH!";
    document.querySelector("#lvlperrofinalb").classList.remove("visible");
    document.querySelector("#lvlperrofinalbr").classList.add("visible");
    document.querySelector("#lvlperrofinalbr").classList.add("animaciongolpe");
    document.querySelector("#personajeperrob").classList.remove("visible");
    document.querySelector("#personajeperrobr").classList.add("visible");
    document.querySelector("#personajeperrobr").classList.add("animaciongolpe");
    document.querySelector("#monstruo1").classList.remove("visible");
    document.querySelector("#monstruo1r").classList.add("visible");
    document.querySelector("#monstruo1r").classList.remove("animaciongolpe3");
    document.querySelector("#monstruo1r").classList.remove("animaciongolpe4");
    document.querySelector("#monstruo2").classList.remove("visible");
    document.querySelector("#monstruo2r").classList.add("visible");
    document.querySelector("#monstruo2r").classList.remove("animaciongolpe3");
    document.querySelector("#monstruo2r").classList.remove("animaciongolpe4");
    document.querySelector("#monstruo3").classList.remove("visible");
    document.querySelector("#monstruo3r").classList.add("visible");
    document.querySelector("#monstruo3r").classList.remove("animaciongolpe3");
    document.querySelector("#monstruo3r").classList.remove("animaciongolpe4");
    document.querySelector("#monstruo4p").classList.remove("visible");
    document.querySelector("#monstruo4pr").classList.add("visible");
    document.querySelector("#monstruo4pr").classList.remove("animaciongolpe3");
    document.querySelector("#monstruo4pr").classList.remove("animaciongolpe4");
    // document.querySelector("#monstruoformafinalp").classList.remove("visible");
    // document.querySelector("#monstruoformafinalpr").classList.add("visible");
    // document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe3")
    // document.querySelector("#monstruoformafinalpr").classList.remove("animaciongolpe4")
    document.querySelector("#stg2perro").classList.remove("visible");
    document.querySelector("#stg2perror").classList.add("visible");
    document.querySelector("#stg2perror").classList.add("animaciongolpe");
    document.querySelector("#stg3perro").classList.remove("visible");
    document.querySelector("#stg3perror").classList.add("visible");
    document.querySelector("#stg3perror").classList.add("animaciongolpe");
    document.querySelector("#stg4perro").classList.remove("visible");
    document.querySelector("#stg4perror").classList.add("visible");
    document.querySelector("#stg4perror").classList.add("animaciongolpe");
    document.querySelector("#monstruoformafinalg").classList.remove("visible");
    document.querySelector("#monstruoformafinalgr").classList.remove("visible");
    document.querySelector("#monstruopfinal").classList.remove("visible"); //revisar
    document.querySelector("#monstruopfinalr").classList.add("visible");
}
  if (contadorErrores == 2) {                                                   
    document.querySelector("#errores").classList.remove("animacionrojo");
    document.querySelector("#errores").classList.add("animacionrojo1");
    document.querySelector("#personajegatobr").classList.remove("animaciongolpe");
    document.querySelector("#personajeperrobr").classList.remove("animaciongolpe");
    document.querySelector("#personajegatobr").classList.add("animaciongolpe1");
    document.querySelector("#personajeperrobr").classList.add("animaciongolpe1");
    document.querySelector("#stg2gator").classList.remove("animaciongolpe");
    document.querySelector("#stg2perror").classList.remove("animaciongolpe");
    document.querySelector("#stg2gator").classList.add("animaciongolpe1");
    document.querySelector("#stg2perror").classList.add("animaciongolpe1");
    document.querySelector("#stg3gator").classList.remove("animaciongolpe");
    document.querySelector("#stg3perror").classList.remove("animaciongolpe");
    document.querySelector("#stg3gator").classList.add("animaciongolpe1");
    document.querySelector("#stg3perror").classList.add("animaciongolpe1");
    document.querySelector("#stg4gator").classList.remove("animaciongolpe");
    document.querySelector("#stg4perror").classList.remove("animaciongolpe");
    document.querySelector("#stg4gator").classList.add("animaciongolpe1");
    document.querySelector("#stg4perror").classList.add("animaciongolpe1");
    document.querySelector("#lvlgatofinalbr").classList.remove("animaciongolpe");
    document.querySelector("#lvlperrofinalbr").classList.remove("animaciongolpe");
    document.querySelector("#lvlgatofinalbr").classList.add("animaciongolpe1");
    document.querySelector("#lvlperrofinalbr").classList.add("animaciongolpe1");
    document.querySelector("#wrong2").classList.add("visible");
    wrong2.innerHTML = "C'mon " 
    + nombre + "!";
    document.querySelector("#campeon").classList.add("vibrate");
  } if (contadorErrores == 1) {                                                   
    document.querySelector("#errores").classList.remove("animacionrojo1");
    document.querySelector("#errores").classList.add("animacionrojo");
    document.querySelector("#personajegatobr").classList.add("animaciongolpe");
    document.querySelector("#personajeperrobr").classList.add("animaciongolpe");
    document.querySelector("#personajegatobr").classList.remove("animaciongolpe1");
    document.querySelector("#personajeperrobr").classList.remove("animaciongolpe1");
    document.querySelector("#stg2gator").classList.add("animaciongolpe");
    document.querySelector("#stg2perror").classList.add("animaciongolpe");
    document.querySelector("#stg2gator").classList.remove("animaciongolpe1");
    document.querySelector("#stg2perror").classList.remove("animaciongolpe1");
    document.querySelector("#stg3gator").classList.add("animaciongolpe");
    document.querySelector("#stg3perror").classList.add("animaciongolpe");
    document.querySelector("#stg3gator").classList.remove("animaciongolpe1");
    document.querySelector("#stg3perror").classList.remove("animaciongolpe1");
    document.querySelector("#stg4gator").classList.add("animaciongolpe");
    document.querySelector("#stg4perror").classList.add("animaciongolpe");
    document.querySelector("#stg4gator").classList.remove("animaciongolpe1");
    document.querySelector("#stg4perror").classList.remove("animaciongolpe1");
    document.querySelector("#lvlgatofinalbr").classList.add("animaciongolpe");
    document.querySelector("#lvlperrofinalbr").classList.add("animaciongolpe");
    document.querySelector("#lvlgatofinalbr").classList.remove("animaciongolpe1");
    document.querySelector("#lvlperrofinalbr").classList.remove("animaciongolpe1");
    document.querySelector("#wrong1").classList.add("visible");
    wrong1.innerHTML = "Don't give up!";
  }
   if (contadorErrores <= 0 ) {   
    gameOver();
    return;
   }
 }

function actualizaErrores() { //se va a convertir en errores
  var contadorErrores = niveles[nivelActual].errores;
  contadorErrores = errores;

 /* if (contadorErrores <= 0 ) { (iba en la funcion "principal" de errores)
    gameOver();
    return;
  }*/

  /*if (errores < 10) {
    contadorErrores = "0" + errores;
  }

  else if ( errores > 10) {
    contadorErrores = errores;
  }*/

  errores--;
  document.querySelector("#errores").innerText = errores;
}

function erroresMaxContador() {
  var erroresMaxTexto = niveles[nivelActual].erroresMax;
   document.querySelector("#errores-total").innerText = erroresMaxTexto;
}