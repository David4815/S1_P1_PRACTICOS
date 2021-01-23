let tabla = "";
let diaActualMes = 1;
let casillerosLibres;
let cantidadDiasMes;

$("#btnGenerar").click(armarCalendario)

function armarCalendario() {

    casillerosLibres = Number($("#slcDiaInicio").val());
    cantidadDiasMes = Number($("#slcMes").val());
    tabla = "";
    diaActualMes = 1;
   
    while (diaActualMes <= cantidadDiasMes) {
        tabla += `<tr>1`
       
        for (let i = 1; i <= 7; i++) {
            if (casillerosLibres > 0 || diaActualMes > cantidadDiasMes) {
                tabla += `<td></td>`
                casillerosLibres--;

            } else {
                tabla += `<td>${diaActualMes}</td>`
                diaActualMes++;
            }

        }
        tabla += `<tr>2`

    }
    $("#tblDias").html(tabla);
}

