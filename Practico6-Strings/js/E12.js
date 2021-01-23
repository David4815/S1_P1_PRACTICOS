$("#btnContar").click(tomarDatos);

function tomarDatos(){
let texto = $("#txtTexto").val();
let textoNuevo = contar(texto);
$("#pResultado").html(textoNuevo);
}

function contar(texto){
    let textoSinE;
    let mayusculas=0;
    let minusculas=0;
    let resultado="";
    textoSinE = eliminarCaracteres(texto," ");
   
    for(let i = 0;i<textoSinE.length;i++){
        if(textoSinE.charCodeAt(i) >=65 && textoSinE.charCodeAt(i)<=90){
            mayusculas++;
        }else{
            if(textoSinE.charCodeAt(i) >=97 && textoSinE.charCodeAt(i)<=122){
                minusculas++;
            }
        }
    }
    resultado = "Mayusculas " + mayusculas + ", Minusculas " + minusculas
    return resultado
}

// OTRA FORMA

// let cantidadMay = 0;
// let cantidadMin =0;
//  let cadena = "CaDena con MayUsCulAs";
//  let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i < mayusculas.length; i++) {
//  for (let j = 0; j < cadena.length; j++) {
//  if(cadena[j]===mayusculas[i]){
//  cantidadMay++;
//      }else{
//          cantidadMin++;
//      }
//    }
//  }


