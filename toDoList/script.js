const tarea=document.getElementById("tarea");
const botonTarea=document.getElementById("btn1");

const listaTareas=document.querySelector("ul");

const mensajeVacio=document.querySelector(".vacio");

const items=document.querySelectorAll("li");
 //alert(items.length);

if(items.length==0) {
 
       mensajeVacio.style.display="block"
      } else {
       mensajeVacio.style.display="none"

      }

//tarea.value="";



botonTarea.addEventListener("click", anadirTarea);

function anadirTarea(e){
e.preventDefault();// evitamos que el evento se propague y recargue la pagina

let textTarea= tarea.value;
//alert (textTarea);

if(textTarea==""){alert("Hay que poner una texto a la tarea");}
else {   
// Crear el 'li' de la tarea y pasarle el valor del input
const step=document.createElement("li");
const contenido=document.createTextNode(textTarea);
step.appendChild(contenido);


//Boton Borrar

const botonBorrar=document.createElement("button");
const equisBorrar=document.createTextNode("X");

botonBorrar.appendChild(equisBorrar);
botonBorrar.className="boton_borrar";

botonBorrar.addEventListener("click", (ev)=> {

         const elemento=ev.target.parentElement;
         listaTareas.removeChild(elemento);
         const items=document.querySelectorAll("li");
 //alert(items.length);

if(items.length==0) {
 
       mensajeVacio.style.display="block"
      } else {
       mensajeVacio.style.display="none"

      }

})

step.appendChild(botonBorrar)


// Adjuntar a la lista tareas el li con la tarea
listaTareas.appendChild(step);


// Tareas añadidas
const items=document.querySelectorAll("li"); 
if(items.length==0) { 
       mensajeVacio.style.display="block"
      } else {
       mensajeVacio.style.display="none"
      }

// Poner sin mensaje el input de anadir tares
tarea.value="";

} 
}