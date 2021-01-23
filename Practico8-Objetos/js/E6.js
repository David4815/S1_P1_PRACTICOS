
// CLASE PARTIDO

class Partido {
    constructor(unNombre, cantidadVotos, totalEscanios) {
        this.nombre = unNombre;
        this.votos = cantidadVotos;
        this.escanios = totalEscanios;
    }
}

let listaPartidos = new Array();

$("#btnMostrar").click(mostrarResultados);
function mostrarResultados() {
    // A
    let nombrePA = $("#txtNombrePA").val();
    let votosPA = Number($("#txtVotosPA").val());
    // B
    let nombrePB = $("#txtNombrePB").val();
    let votosPB = Number($("#txtVotosPB").val());
    // C
    let nombrePC = $("#txtNombrePC").val();
    let votosPC = Number($("#txtVotosPC").val());
    // D
    let nombrePD = $("#txtNombrePD").val();
    let votosPD = Number($("#txtVotosPD").val());

    // creo partidos
    let partidoA = new Partido(nombrePA, votosPA, 0);
    let partidoB = new Partido(nombrePB, votosPB, 0);
    let partidoC = new Partido(nombrePC, votosPC, 0);
    let partidoD = new Partido(nombrePD, votosPD, 0);

    // los agrego a una lista
    listaPartidos.push(partidoA);
    listaPartidos.push(partidoB);
    listaPartidos.push(partidoC);
    listaPartidos.push(partidoD);

    // calculo escanios por partido
    calcularEscanios(listaPartidos);

    // muestro tabla de resultados en html

    // encabezados con nombres de partidos
    $("#tblEncabezado").empty();
    $("#tblEncabezado").append(`<tr>
    <td>${partidoA.nombre}</td>
    <td>${partidoB.nombre}</td>
    <td>${partidoC.nombre}</td>
    <td>${partidoD.nombre}</td>
    </tr>`)

    // datos
    $("#tblDatos").empty();
    $("#tblDatos").append(`<tr>
    <td>${partidoA.escanios}</td>
    <td>${partidoB.escanios}</td>
    <td>${partidoC.escanios}</td>
    <td>${partidoD.escanios}</td>
    </tr>`)
}

// funcion para calcular escaños
function calcularEscanios(unaListaDePartidos) {

}