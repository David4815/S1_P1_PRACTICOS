function armarCombo(){
    $("#slcOrigen").html(`<option value="-1"> Seleccione origen..</option>`);
    for(let i =0;i<origen.length;i++){
        $("#slcOrigen").append(`<option value="${origenes[i]}">${origenes[i]}</option>`);
    }
}


// CLASE ZAPATO

class zapato {
    constructor(unaMarca, unTalle, unColor, unOrignen) {
        this.marca = unaMarca;
        this.talle = unTalle;
        this.color = unColor;
        this.origen = unOrignen;
    }
}

let listaZapatos = new Array();

$("#btnGuardar").click(guardarDatos);

function guardarDatos() {

    let marca = $("#txtMarca").val();
    let talle = Number($("#txtTalle").val());
    let color = $("#txtColor").val();
    let origen = $("#slcOrigen").val();
    if (estaVacio(marca)) {
        alert("Ingrese una marca");
    }
    if (!estaEntre(talle, 30, 46)) {
        alert("Ingrese un talle entre 30 y 46");
    }
    if (!estaVacio(marca) && estaEntre(talle, 30, 46)) {
        let unZapato = new zapato(marca, talle, color, origen);
        listaZapatos.push(unZapato);
    }
    console.log(listaZapatos);
}
// Listar cantidad de zapatos de un origen especificado
//  de talla 38 
$("#btnContar").click(mostrarCuenta);
function mostrarCuenta(){
   let importados = contar(listaZapatos,"Importado");
    let nacionales = contar(listaZapatos,"Nacional");
    let resultado="";
    if(importados>nacionales){
        resultado="HAY MAS IMPORTADOS TALLA 38";
    }else if(importados<nacionales){
        resultado="HAY MAS NACIONALES TALLA 38";
    }else{
        resultado="HAY LA MISMA CANTIDAD";
    }
    $("#pResultado").html(resultado);
}
function contar(listaZap,origenDeseado){
    let contador = 0;
    
    for(let i =0;i<listaZap.length;i++){
        let origen = listaZap[i].origen;
        let talle = listaZap[i].talle;
        if(talle===38 && origen===origenDeseado){
            contador++;
        }
    }
    console.log(contador);
return contador;
}