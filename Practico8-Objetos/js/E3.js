let guitarras = new Array({ tipo: 1, nombre: "clasica", precio: 2000 },
    { tipo: 2, nombre: "electrica", precio: 2500 },
    { tipo: 3, nombre: "electroacustica", precio: 2300 })

    let listaVentas = [];

    // CLASE VENTA
    class Venta{
        constructor(unTipo,unaCantidad){
            this.tipo = unTipo;
            this.cantidad = unaCantidad;
        }
    }

    // FUNCION PARA REGISTRAR VENTAS
    $("#btnRegistrar").click(registrarVentas);
    function registrarVentas(){
        tipo = Number($("#slcTipo").val());
        cantidad = Number($("#txtCantidad").val());
        let unaVenta = new Venta(tipo,cantidad);
        listaVentas.push(unaVenta);
        console.log(listaVentas);

    }

    // VER VENTAS POR TIPO
$("#btnVentas").click(verVentasPorTipo);

    function ventasPorTipo(tipoBuscado){
        let totalVentas = 0;
        let precioGuitarra = guitarras[tipoBuscado -1].precio;
       
        for(let i =0;i<listaVentas.length;i++){
            if(listaVentas[i].tipo===tipoBuscado){
                totalVentas+= listaVentas[i].cantidad * precioGuitarra;
            }
        }
        return totalVentas
    }
    function verVentasPorTipo(){
        $("#tblVentas").empty();
        let totalVentasT1 = ventasPorTipo(1);
        let totalVentasT2 = ventasPorTipo(2);
        let totalVentasT3 = ventasPorTipo(3);
        $("#tblVentas").append(`<tr>
        <td> ${totalVentasT1}</td>
        <td> ${totalVentasT2}</td>
        <td> ${totalVentasT3}</td>
        </tr>`); 
    }