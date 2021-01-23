let diaInicio;
let diasMes;
let idDia;
let contador = 0;

$("#btnGenerar").click(generar);

function generar() {

    for (let i = 1; i <= 42; i++) {
        idDia = "#" + i

        $(idDia).html("");
    }

    diasMes = Number($("#slcMes").val());
    diaInicio = Number($("#slcDiaInicio").val());

    
    for (let i = diaInicio; i <= (diasMes + diaInicio - 1); i++) {
        idDia = "#" + i
        contador++;
        $(idDia).html(contador);
    }

    contador = 0;

}