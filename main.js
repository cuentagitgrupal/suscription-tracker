const botoniniciopausa = document.getElementById("boton-inicio-pausa");
const botonreiniciar = document.getElementById("boton-reiniciar");
const cronometro = document.getElementById("cronometro");

let [horas, minutos, segundos] = [0, 0, 0];
let intervalodetiempo;
let estadoCronometro = "pausado";
function actualizarcronometro() {
  segundos++;
  if (segundos / 60 === 1) {
    segundos = 0;
    minutos++;
    if (minutos / 60 === 1) {
      minutos = 0;
      horas++;
    }
  }
  const segundosconformato = asignarformato(segundos);
  const minutosconformato = asignarformato(minutos);
  const horasconformato = asignarformato(horas);
  cronometro.innerText =
    horasconformato + ":" + minutosconformato + ":" + segundosconformato;
}
function asignarformato(unidaddetiempo) {
  return unidaddetiempo < 10 ? "0" + unidaddetiempo : unidaddetiempo;
}
botoniniciopausa.addEventListener("click", function () {
  if (estadoCronometro === "pausado") {
    intervalodetiempo = window.setInterval(actualizarcronometro, 1000);
    botoniniciopausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botoniniciopausa.classList.remove("iniciar");
    botoniniciopausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervalodetiempo);
    botoniniciopausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    botoniniciopausa.classList.remove("pausar");
    botoniniciopausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});
botonreiniciar.addEventListener("click", function () {
  window.clearInterval(intervalodetiempo);
  segundos = 0;
  minutos = 0;
  horas = 0;
  cronometro.innerText = "00:00:00";
  botoniniciopausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  botoniniciopausa.classList.add("iniciar");
  botoniniciopausa.classList.remove("pausar");
  estadoCronometro = "pausado";
});
