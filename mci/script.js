const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const caja1 = document.getElementById("inpt1");
const caja2 = document.getElementById("inpt2");
const caja3 = document.getElementById("inpt3");

const mensaje = document.getElementById("mensaje");

boton2.addEventListener("click", calcular);

function calcular() {

 var nombre =caja1.value;
  var peso = parseFloat(caja2.value);
  var altura = parseFloat(caja3.value);

  var imc = peso / (altura * altura);

  var imc2 = imc.toFixed(2);
 let resultado="";

  if (imc2 < 18.5) {
    resultado = "Tu imc es " + imc2 + ". Tu peso es inferior al normal";
    mensaje.style.backgroundColor="lightblue";
    mensaje.style.color="#000";
  } else if (imc2 < 25) {
    resultado = "Tu imc es " + imc2 + ". Tu peso es normal";
    mensaje.style.backgroundColor="green"
  } else {
    resultado = "Tu imc es " + imc2 + ". Tu peso es superior al normal";
    mensaje.style.backgroundColor="orange"
  }

  mensaje.innerHTML = resultado;

}