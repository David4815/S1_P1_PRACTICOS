let listaProgramas = new Array();

class Programa {
    constructor(unNombre, unCanal, unGenero, unaHoraInicio, unaDuracion, unaImagen) {
        this.nombre = unNombre;
        this.canal = unCanal;
        this.genero = unGenero;
        this.horaInicio = unaHoraInicio;
        this.duracion = unaDuracion;
        this.imagen = unaImagen;
    }
}

function tomarDatosCanal() {
    let nombre = $("#txtNombre").val();
    let canal = Number($("#txtCanal").val());
    let genero = Number($("#slcGenero").val());
    let horaInicio = $("#txtHoraInicio").val();
    let duracion = $("#txtDuracion").val();

    let foto = $("#fileFoto").val(); // "C:\fakepath\Pastel_Limon.jpg"
    let nombreFoto = foto.substr(foto.lastIndexOf("\\") + 1);

    let nuevoPrograma = new Programa(nombre,canal, genero, horaInicio, duracion, nombreFoto);
    listaProgramas.push(nuevoPrograma);
    console.log(listaProgramas);
}

$("#btnGuardar").click(tomarDatosCanal);

// PARTE A

$("#btnContar").click(cantidadProgramasPorCanal);

function cantidadProgramasPorCanal(){
let canal = Number($("#txtCanalBuscado").val());
let cantidadProgramas = contarProgramasPorCanal(canal);
$("#pResultado").html(`Cantidad de programas en el canal ${canal}: ${cantidadProgramas}.`)
}

function contarProgramasPorCanal(numeroCanal) {
    let contador = 0;
    for (let i = 0; i < listaProgramas.length; i++){
        if(listaProgramas[i].canal===numeroCanal){
            contador++;
        }
    }
    return contador;
}

// PARTE B
$("#btnMostrar").click(mostrarProgramasComedia);

function mostrarProgramasComedia(){

$("#mostrarPeliculas").html(`<table>
<thead>
    <tr>
        <th>Nombre</th>
        <th>Canal</th>
        <th>Logo</th>
    </tr>
</thead>
<tbody>
    
</tbody>
</table>`)

for(let i=0;i<listaProgramas.length;i++){
    if(listaProgramas[i].genero===3){
        let nombre = listaProgramas[i].nombre;
        let canal = listaProgramas[i].canal;
        let foto = listaProgramas[i].imagen; // "C:\fakepath\Pastel_Limon.jpg"
        alert(foto);
        let nombreFoto = foto.substr(foto.lastIndexOf("\\") + 1);


    $("tbody").append(`
    <tr>
    <td>${nombre}</td>
    <td>${canal}</td>
    <td><img src="imgE1/${nombreFoto}"</td>
    `)
    }
}

}