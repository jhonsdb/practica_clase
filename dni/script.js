const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

          const caja=document.getElementById("inpt1");
          const boton=document.getElementById("btn1");
          boton.addEventListener("click", obtenerDni)

          function obtenerDni(){
       //El script tiene varios if

           let valor=caja.value;
           alert(valor)

           let letra=valor.charAt(valor.length - 1).toUpperCase();
               
           if(isNaN(letra)!=true){
                 alert(`El ultimo caracter ${letra} no es una letra`);

           } else {

           alert(letra);

           let numero=valor.slice(0, valor.length - 1);        
           alert (numero);
                 if(numero>99999999 || numero<0){ 
                    alert("El número proporcionado no es válido");
                    }

          else  {
            var letraCalculada = letras[numero % 23];
            if(letraCalculada != letra) {
              alert("La letra o el número proporcionados no son correctos");
              alert("la letra correcta del dni para esa numeracion es "+letraCalculada)
            }
            else {
              alert("El número de DNI y su letra son correctos");
            }
          } // cierre validacion numero
        }  // cierre validacion letra
      }  // cierre evento