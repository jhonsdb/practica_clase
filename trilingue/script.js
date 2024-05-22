const lista=document.getElementById("selector");
const resultado=document.getElementById("weekDay");    


 lista.addEventListener("change", calcularDiaSemana);

 function calcularDiaSemana(){    

let diaSemana = new Date().getDay();
//alert(diaSemana);

const castellano = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const euskera = ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"];  
const ingles = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  

var idioma = lista.value;


var mensaje="";

   switch (idioma){

   case "castellano": 

  mensaje=castellano[diaSemana];
   break;

   case "euskera":
   mensaje=euskera[diaSemana];

   break;
   case "ingles":
   mensaje=ingles[diaSemana];

   break;
   default: alert("Hay que elegir un valor")
              
}
  
resultado.textContent=mensaje
      
}