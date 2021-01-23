// CLASE VENTAS

class Ventas {
    constructor(unaMarca, unModelo, unPrecio, cantidadUnidades){
        this.marca = unaMarca;
        this.modelo = unModelo;
        this.precio = unPrecio;
        this.cantidad = cantidadUnidades;
    }
}

let listaVentas = new Array();

function agregarVenta(){
    let marca = $("#slcMarca").val();
    let modelo = $("#txtModelo").val();
    let precio = Number($("#txtPrecio").val());
    let cantidad = Number($("#txtCantUnidades").val());

    let unaVenta = new Ventas(marca, modelo, precio, cantidad);

    if(!isNaN(unaVenta.precio) && unaVenta.modelo.length !== 0){
        listaVentas.push(unaVenta);
    }else{
        alert("ingrese un modelo");
    }
    console.log(listaVentas);
}

$("#btnComprar").click(agregarVenta);

// LISTAR VENTAS QUE SUPEREN LOS 2000 PESOS
$("#btnVerVentas").click(listarVentasMayoresA2000);
function listarVentasMayoresA2000(){
    $("#tblVentas").empty();

    for(let i =0;i<listaVentas.length;i++){
        let totalVentas = listaVentas[i].cantidad * listaVentas[i].precio;
        if(totalVentas>2000){
            $("#tblVentas").append(`<tr>
            <td>${listaVentas[i].marca}</td>
            <td>${listaVentas[i].modelo}</td>
            <td>${listaVentas[i].precio}</td>
            <td>${listaVentas[i].cantidad}</td>
            <td>${totalVentas}</td>
            </tr>`)
        }
    }
}

// VENTAS PARA UN MODELO BUSCADO

$("#btnVerVentasModelo").click(verVentasModelo);

function verVentasModelo(){
    let modeloBuscado = $("#txtModeloBuscado").val(); 
    $("#pResultado").empty();
    for(let i =0;listaVentas.length;i++){
        if(listaVentas[i].modelo === modeloBuscado){
            $("#pResultado").append(`${listaVentas[i].cantidad}`)
        }
    }
}