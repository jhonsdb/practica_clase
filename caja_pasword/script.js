const boton1=document.getElementById("btn1");
const caja1=document.getElementById("inpt1");
const caja2=document.getElementById("inpt2");

const seccion1=document.getElementById("uno");
const seccion3=document.getElementById("tres");
const seccion4=document.getElementById("cuatro");


const ojo=document.querySelector(".ojo");
const boton2=document.getElementById("btn2");

const boton3=document.getElementById("btn3");

// PRIMERA PARTE - Validacion de logueo

boton1.addEventListener("click", logueo);

function logueo(){

 let user = caja1.value;
 let clave = caja2.value;

  user = user.toLowerCase();

 if (user == "andres" && clave == 123) {
                      
     seccion1.classList.add("desaparece");
     seccion3.classList.remove("desaparece");
     seccion3.classList.add("aparece", "verde");


 } else {
    
     seccion1.classList.add("desaparece");
     seccion4.classList.remove("desaparece");
     seccion4.classList.add("aparece", "rojo");

 }
 
};




///  SEGUNDA PARTE- MOSTRAR EL CONTENIDO DEL PASSWORD
  ojo.addEventListener("click", verClave);

  function verClave(){    

 let rutaImagen = ojo.getAttribute("src");
 let imagen1 = "imagenes/ojoAbierto1.jpg"
 let imagen2 = "imagenes/ojoCerrado1.jpg"
    
 if (rutaImagen == imagen1) {
     ojo.setAttribute("src", imagen2);
     caja2.setAttribute("type", "password");
 } else {

     ojo.setAttribute("src", imagen1);
     caja2.setAttribute("type", "text");
 }         


};


//  TERCERA PARTE  Boton deshabilitado por Check

const casilla=document.getElementById("check2");

casilla.addEventListener("change",habilitarBoton);

function habilitarBoton() {


boton1.disabled = true;

let aceptado = casilla.checked;

switch (aceptado) {
case true:
boton1.disabled = false;
break;
case false:
boton1.disabled = true;
break;
default:
break;
}
}




//Boton de accion
boton3.addEventListener("click", function(){ 
 
 window.location.assign("http://denisisland.com/")


});