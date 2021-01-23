
function estaVacio(campo){
  let esVacio=false;
if(campo.length===0){
  esVacio=true;
}
return esVacio;
}




// PRACTICO 7 ARRAYS --------------------------------------------

function agregarDatoSinRepetidos(datoDeObjeto,listaObjetos,nombreDato, objeto){
  
  let contador=0;
  for(let i=0;i<listaObjetos.length;i++){
      if(listaObjetos[i].nombre===datoDeObjeto){
          contador++;
      }
  }
  if(contador!==0){
      alert(`El ${nombreDato} dato seleccionado ya esta en uso.`);
  }else{
      listaObjetos.push(objeto);
  }

}



















// PRACTICO 6 STRING-------------------------------------------------------

function eliminarCaracteres(texto, cEliminar) {
    let textoNuevo = "";
    for (let i = 0; i < texto.length; i++) {
      if (texto.charAt(i) !== cEliminar) {
        textoNuevo += texto.charAt(i);
      }
    }
    return textoNuevo;
  }

  function estaEntre(numero, menor, mayor) {
    let resultado = false;
    if (numero >= menor && numero <= mayor) {
        resultado = true;
    }
    return resultado;
}

function invertirTexto(texto) {
  let nuevoTexto = "";
  for (let i = texto.length -1; i >= 0; i--) {
      nuevoTexto += texto.charAt(i);
  }
  return nuevoTexto;
}

function eliminarCaracteres(texto, cEliminar) {
  let textoNuevo = "";
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) !== cEliminar) {
      textoNuevo += texto.charAt(i);
    }
  }
  return textoNuevo;
}

function cambiarLetra(texto,letra){
  let nuevoTexto="";
  for(let i = 0; i <texto.length;i++){
      if(texto.charAt(i)===letra){
          nuevoTexto +="*";
      }else{
    nuevoTexto+=texto.charAt(i);  
  }
}
return nuevoTexto;
}