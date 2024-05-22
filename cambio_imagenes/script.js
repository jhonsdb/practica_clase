const imagen=document.getElementById("imagen");
const boton=document.querySelector("#btn1");


//PRIMERA SOLUCION
 //La imagen es una etiqueta img, accedemos a la ruta de src y la modificamos con un metodo que trabaja con atributos

/*
imagen.addEventListener("mouseover", function(){

     imagen.setAttribute("src","imagenes/ujue-navarra.jpg");

})

imagen.addEventListener("mouseout", () => imagen.setAttribute("src","imagenes/lekumberri-navarra.jpg")
 );


 boton.addEventListener("click", (event) => {
      alert(event.target.nodeName +"   " + event.type)
    let rutaInicial="imagenes/lekumberri-navarra.jpg";
    let rutaActual=imagen.getAttribute("src");
    //alert(rutaActual);

    if(rutaInicial==rutaActual){imagen.setAttribute("src","imagenes/ujue-navarra.jpg");}
    else {

        imagen.setAttribute("src","imagenes/lekumberri-navarra.jpg");
    }


 });

*/
 // SEGUNDA SOLUCION:::::::::::::. Por arreglar
 //La imagen es una etiqueta img, accedemos a la ruta de src y la modificamos con un atributo .src, que "conecta" directamente con el objeto imagen recogido del DOM

  //alert(imagen.src)


 imagen.addEventListener("mouseover", function(){

 imagen.src="../imagenes/ujue-navarra.jpg";

  })

 imagen.addEventListener("mouseout", () => imagen.src="../imagenes/lekumberri-navarra.jpg");


boton.addEventListener("click", (event) => {
 alert(event.target.nodeName +"   " + event.type)
let rutaInicial="../imagenes/lekumberri-navarra.jpg";
 rutaInicial=convertirRutas(rutaInicial);


let rutaActual=imagen.src; 
alert(rutaActual);
// Devuelve una ruta absoluta, por lo cual tengo que o volver la ruta actual a relativa o
// volver la ruta inicial a absoluta lo que realizo con la funcion de conversion localizada en STAKE OVER FLOW https://es.stackoverflow.com/questions/399316/c%C3%B3mo-puedo-verificar-si-el-src-de-una-img-coincide-con-una-ruta-relativa

if(rutaInicial==rutaActual){imagen.src="../imagenes/lekumberri-navarra.jpg";}
else {

   imagen.src="../imagenes/lekumberri-navarra.jpg"; }

  });

  function convertirRutas(rutaParcial){
  
    return rutaAbsoluta = new URL(rutaParcial, document.baseURI).href;

  }



 // TERCERA SOLUCION
 // En esta solucion, se entiende que la imagen forma parte del background-image de la etiqueta. Por lo tanto hay que modificar esa propiedad y valor css
 

const caja=document.getElementById("fondo");
const boton_fondo=document.querySelector("#btn2");

caja.addEventListener("mouseover", function(){    

    
    caja.style.backgroundImage='url("../imagenes/ujue-navarra.jpg")';  

});

caja.addEventListener("mouseout", function(){    
  
caja.style.backgroundImage='url("../imagenes/lekumberri-navarra.jpg")';  

});

boton_fondo.addEventListener("click", (event) => {
      alert(event.target.nodeName +"   " + event.type)

    let fondoInicial='url("../imagenes/lekumberri-navarra.jpg")';
    let fondoActual= caja.style.backgroundImage;
   // alert(fondoActual);

    if(fondoInicial==fondoActual){caja.style.backgroundImage='url("../imagenes/ujue-navarra.jpg")';  }
    else {

        caja.style.backgroundImage='url("../imagenes/lekumberri-navarra.jpg")';
    }


 });