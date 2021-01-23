$("#btnIngresarN").click(tomarDatos);
$("#btnMostrar").click(mostrarmayoresA20);

let listaNumeros = new Array();
function tomarDatos(){
    let numero = Number($("#txtNumero").val());
    listaNumeros.push(numero);
}

function mostrarmayoresA20(){
    let listaMayoresA20 = new Array();
    for(let i=0; i<listaNumeros.length;i++){
      if(listaNumeros[i]>20){
          listaMayoresA20.push(listaNumeros[i]);
          listaMayoresA20.push(" ");
      }
    }
    $("#pResultado").html(listaMayoresA20);
    listaNumeros = [];
}