var modoRelax = false;
var aciertos = 0;
var errores = 0;
var contadorAcierto = 0;
var contadorErrores = 0;
var cronometro;
var segundos = 0;
var minutos = 0;
var enemigo;
var grupoTarjetas = [
  ["🦄", "🐶", "🐲", "👻"],
  ["👹", "👽"],
  ["👾", "🤖"],
  ["🦊", "🙊"],
  ["☠️", "🙀"],
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0], ///nivel1
    contadorErrores: 5,
    errores: 5,
    erroresMax: 5,
    contadorAcierto: 4, //4
    aciertos: 4, //4
    aciertosMax: 4, //4
    segundos: 30,
    minutos: 0,
    enemigo: "Failure",
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]), //nivel2
    contadorErrores: 8,
    errores: 8,
    erroresMax: 8,
    contadorAcierto: 6, //6
    aciertos: 6, //6
    aciertosMax: 6, //6
    segundos: 45,
    minutos: 0,
    enemigo: "Bureaucrat",
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]), //nivel3
    contadorErrores: 12,
    errores: 12,
    erroresMax: 12,
    contadorAcierto: 8, //8
    aciertos: 8, //8
    aciertosMax: 8, //8
    segundos: 0,
    minutos: 1,
    enemigo: "Influencer",
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      //nivel4
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    contadorErrores: 18,
    errores: 18,
    erroresMax: 18,
    contadorAcierto: 10, //10
    aciertos: 10, //10
    aciertosMax: 10, //10
    segundos: 15,
    minutos: 1,
    enemigo: "????",
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      //nivel5
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    contadorErrores: 21,
    errores: 21,
    erroresMax: 21,
    contadorAcierto: 12, //12
    aciertos: 12, //12
    aciertosMax: 12, //12
    segundos: 30,
    minutos: 1,
    enemigo: "",
  },
];
