const caja1=document.getElementById("inpt1");
const caja2=document.getElementById("inpt2");
const boton=document.getElementById("btn1");

const mensaje=document.getElementById("mensaje");

boton.addEventListener("click", () => {
      
    let valor1=caja1.value;
    let valor2=caja2.value;

    valor1=parseInt(valor1);
    valor2=parseInt(valor2);
    


    //console.log(valor1+" "+valor2);

    let resultado="<ul>";

      for(let i=valor1;i<=valor2; i++){

             let resto=i%2;

         if(resto!=0){  

        resultado+="<li>"+i+" el resto es "+resto+"</li>"; }




      }

      resultado+="</ul>";

      mensaje.innerHTML=resultado;

});
