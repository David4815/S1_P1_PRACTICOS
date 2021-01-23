// CLASE PELICULA

class Pelicula {
    constructor(unNombre, unAnio, unPoster, unGenero, cantidadVotantes, puntajeTotal) {
        this.nombre = unNombre;
        this.anio = unAnio;

        this.poster = unPoster;

        this.genero = unGenero;
        this.votantes = cantidadVotantes;
        this.puntaje = puntajeTotal;
    }
}

// AGREGO PELICULAS A LISTA
let listaPeliculas = new Array();
$("#btnAgregarPelicula").click(agregarPelicula);

function agregarPelicula() {
    let nombre = $("#txtNombre").val();
    let anio = Number($("#txtAnio").val());
    
    let foto = $("#filePoster").val();//"C:/fakepath/incredibles_two.jpg"
    let nombreFoto = foto.substr(foto.lastIndexOf("\\") + 1);
    
    
    
    let genero = $("#slcGenero").val();
    let votantes = Number($("#txtVotantes").val());
    let puntos = Number($("#txtPuntos").val());

    let unaPelicula = new Pelicula(nombre, anio, genero, votantes, puntos);
    if (isNaN(anio)) {
        alert("Valor Ingresado incorrecto, igrese un numero en el año")
    } else {
        // listaPeliculas.push(unaPelicula);
        agregarDatoSinRepetidos(nombre, listaPeliculas, "nombre", unaPelicula);
    }

    listarPeliculas();
}

function listarPeliculas() {
    $("#tblPeliculas").empty();
    for (let i = 0; i < listaPeliculas.length; i++) {
        $("#tblPeliculas").append(`<tr>
        <td>${listaPeliculas[i].nombre}</td>
        <td>${listaPeliculas[i].anio}</td>
        <td>${listaPeliculas[i].genero}</td>
        <td>${listaPeliculas[i].votantes}</td>
        <td>${listaPeliculas[i].puntaje}</td>
        </tr>`)
    }
}

$("#btnListarPromedioMayor").click(listarPeliculasPromedioMayor);

function listarPeliculasPromedioMayor() {
    $("#tblPeliculasPromedio").empty();
    for (let i = 0; i < listaPeliculas.length; i++) {
        let promedio = listaPeliculas[i].puntaje / listaPeliculas[i].votantes;
        if (promedio > 4) {
            $("#tblPeliculasPromedio").append(`<tr>
        <td>${listaPeliculas[i].nombre}</td>
        <td>${listaPeliculas[i].anio}</td>
        <td>${listaPeliculas[i].genero}</td>
        <td>${listaPeliculas[i].votantes}</td>
        <td>${listaPeliculas[i].puntaje}</td>
        </tr>`)
        }
    }
}

$("#btnBuscarPelicula").click(buscarPelicula);
function buscarPelicula() {
    nombre = $("#txtNombreBuscado").val();
    let resultado = "No hay peliculas con ese nombre";

    for (let i = 0; i < listaPeliculas.length; i++) {
        if (listaPeliculas[i].nombre === nombre) {
            resultado = `${listaPeliculas[i].nombre},
            ${listaPeliculas[i].anio}, 
            ${listaPeliculas[i].genero}, 
            ${listaPeliculas[i].votantes}, 
            ${listaPeliculas[i].puntaje}`
        }
    }
    $("#pResultado").html(resultado);
}