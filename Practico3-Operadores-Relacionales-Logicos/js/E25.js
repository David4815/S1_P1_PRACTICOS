let nombre;
let compra;
let stock;
let contadorPedidos = 0;
let maximoComp = Number.MIN_VALUE;
let nombreMaxComp;


$("#btnIngresar").click(ingresarStock);
$("#btnCalcular").click(calcular);

function ingresarStock() {
    stock = Number($("#txtStock").val())
    $("#btnIngresar").attr("disabled", true);
}


function calcular() {

    nombre = $("#txtNombre").val();
    compra = Number($("#txtCompra").val());
    stock = stock - compra

 if( stock >= 0){
        contadorPedidos++;
        if (compra > maximoComp) {
            maximoComp = compra;
            nombreMaxComp = nombre;
        }
        if(stock === 0){
            $("#btnCalcular").attr("disabled", true);
        }
        $("#pResultado").html("Stock disponible: " + stock + ". Cliente con mas compras: " + nombreMaxComp +
    ". Cantidad de pedidos: " + contadorPedidos)  
    }else{
        stock = stock + compra;
        $("#pResultado").html("No se puede procesar el pedido. Stock disponible: " + stock);
        
    }      
}

