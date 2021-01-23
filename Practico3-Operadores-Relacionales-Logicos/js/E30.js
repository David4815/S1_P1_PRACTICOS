let turno = 0;
let fichaSeleccionada = false;
let ficha1 ;
let ficha2 ;


// FICHAS A SELECCIONAR
// F1 F2 F3 F4 F5

// FICHA J1 FICHA J2

// TABLERO
// A1 A2 A3
// B1 B2 B3
// C1 C2 C3

// CAMBIAR IMAGNES DE FIHAS


// CAMBIAR IMAGEN A1-----------------------------------------
$("#imgA1").click(cambiarA1);
//  PRIMER FILA VERIFICAR SI GANO ALGUIEN
$("#imgA1").click(verificarA1A3);
// PRIMER COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgA1").click(verificarA1C1);
//  PRIMER DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgA1").click(verificarA1C3);
// CAMBIAR IMAGEN A2--------------------------------------------
$("#imgA2").click(cambiarA2);
// PRIMER FILA VERIFICAR SI GANO ALGUIEN
$("#imgA2").click(verificarA1A3);
// SEGUNDA COLUMNA VERIFICAR SI GANO ALGUIEN
$("#imgA2").click(verificarA2C2);
// CAMBIAR IMAGEN A3-----------------------------------------------
$("#imgA3").click(cambiarA3);
// PRIMER FILA VERIFICAR SI GANO ALGUIEN 
$("#imgA3").click(verificarA1A3);
// TERCERA COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgA3").click(verificarA3C3);
//  SEGUNDA DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgA3").click(verificarA3C1);
// CAMBIAR IMAGEN B1--------------------------------------------------
$("#imgB1").click(cambiarB1)
// SEGUNDA FILA VERIFICAR SI GANO ALGUIEN 
$("#imgB1").click(verificarB1B3);
// PRIMER COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgB1").click(verificarA1C1);
// CAMBIAR IMAGEN B2--------------------------------------------------
$("#imgB2").click(cambiarB2);
// SEGUNDA FILA VERIFICAR SI GANO ALGUIEN 
$("#imgB2").click(verificarB1B3);
// SEGUNDA COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgB2").click(verificarA2C2);
//  PRIMER DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgB2").click(verificarA1C3);
//  SEGUNDA DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgB2").click(verificarA3C1);
// CAMBIAR IMAGEN B3--------------------------------------------------
$("#imgB3").click(cambiarB3);
// SEGUNDA FILA VERIFICAR SI GANO ALGUIEN
$("#imgB3").click(verificarB1B3);
// TERCERA COLUMNA VERIFICAR SI GANO ALGUIEN
$("#imgB3").click(verificarA3C3);
// CAMBIAR IMAGEN C1--------------------------------------------------
$("#imgC1").click(cambiarC1);
// TERCERA FILA VERIFICAR SI GANO ALGUIEN 
$("#imgC1").click(verificarC1C3);
// PRIMERA COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgC1").click(verificarA1C1);
//  SEGUNDA DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgC1").click(verificarA3C1);
// CAMBIAR IMAGEN C2--------------------------------------------------
$("#imgC2").click(cambiarC2);
// TERCERA FILA VERIFICAR SI GANO ALGUIEN 
$("#imgC2").click(verificarC1C3);
// SEGUNDA COLUMNA VERIFICAR SI GANO ALGUIEN 
$("#imgC2").click(verificarA2C2);
// CAMBIAR IMAGEN C3--------------------------------------------------
$("#imgC3").click(cambiarC3);
// TERCERA FILA VERIFICAR SI GANO ALGUIEN 
$("#imgC3").click(verificarC1C3);
// TERCERA COLUMNA VERIFICAR SI GANO ALGUIEN
$("#imgC3").click(verificarA3C3);
//  PRIMER DIAGONAL VERIFICAR SI GANO ALGUIEN
$("#imgC3").click(verificarA1C3);

// Opciones de fichas---------------------------------------------------------------

// cambiar por circulo
$("#imgCirculo").click(cambiarPorCirculo);
// cambiar por cruz
$("#imgCruz").click(cambiarPorCruz);
// cambiar por mickey
$("#imgMickey").click(cambiarPorMickey);
// cambiar por pluto
$("#imgPluto").click(cambiarPorPluto);
// cambiar por pluto
$("#imgTribilin").click(cambiarPorTribilin);

// FUNCIONES PARA SELECCIONAR FICHAS------------------------------------------------------

function cambiarPorCirculo() {

    if ($("#imgFicha1").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha1").attr("src", "img/TaTeTi/circulo.png");
        $("#pResultado").html("Turno jugador 2 - SELECCIONE UNA FICHA.");
    } else if ($("#imgFicha2").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha2").attr("src", "img/TaTeTi/circulo.png");
        $("#pResultado").html("Turno jugador 1");
    } else {
        fichaSeleccionada = true;
    }
}

function cambiarPorCruz() {

    if ($("#imgFicha1").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha1").attr("src", "img/TaTeTi/cruz.png");
        $("#pResultado").html("Turno jugador 2 - SELECCIONE UNA FICHA.");
    } else if ($("#imgFicha2").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha2").attr("src", "img/TaTeTi/cruz.png");
        $("#pResultado").html("Turno jugador 1");
    } else {
        fichaSeleccionada = true;
    }
}

function cambiarPorMickey() {

    if ($("#imgFicha1").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha1").attr("src", "img/TaTeTi/mickey.jpg");
        $("#pResultado").html("Turno jugador 2 - SELECCIONE UNA FICHA.");
    } else if ($("#imgFicha2").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha2").attr("src", "img/TaTeTi/mickey.jpg");
        $("#pResultado").html("Turno jugador 1");
    } else {
        fichaSeleccionada = true;
    }
}

function cambiarPorPluto() {

    if ($("#imgFicha1").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha1").attr("src", "img/TaTeTi/pluto.jpg");
        $("#pResultado").html("Turno jugador 2 - SELECCIONE UNA FICHA.");
    } else if ($("#imgFicha2").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha2").attr("src", "img/TaTeTi/pluto.jpg");
        $("#pResultado").html("Turno jugador 1");
    } else {
        fichaSeleccionada = true;
    }
}

function cambiarPorTribilin() {

    if ($("#imgFicha1").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha1").attr("src", "img/TaTeTi/tribilin.jpg");
        $("#pResultado").html("Turno jugador 2 - SELECCIONE UNA FICHA.");
    } else if ($("#imgFicha2").attr("src") === "img/TaTeTi/blanco.png") {
        $("#imgFicha2").attr("src", "img/TaTeTi/tribilin.jpg");
        $("#pResultado").html("Turno jugador 1");
    } else {
        fichaSeleccionada = true;
    }
}








// FUNCIONES PARA AGREGAR IMAGENES E IDENTIFICAR TURNO---------------------------------------

function cambiarA1() {
    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if(`"${ficha1}"` ===  `"img/TaTeTi/tribilin.jpg"`){
        alert(`"${ficha1}"`);
        alert("es lo mismo");
    }
    

    if ($("#imgA1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA1").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgA1").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarA2() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgA2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA2").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgA2").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarA3() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgA3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA3").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgA3").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarB1() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgB1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB1").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgB1").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarB2() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgB2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB2").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgB2").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarB3() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgB3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB3").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgB3").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarC1() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgC1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC1").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgC1").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarC2() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgC2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC2").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgC2").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

function cambiarC3() {

    ficha1 = $("#imgFicha1").attr("src");
    ficha2 = $("#imgFicha2").attr("src");

    if ($("#imgC3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC3").attr("src", ficha2);
            $("#pResultado").html("Turno jugador 1");
        } else {
            $("#imgC3").attr("src", ficha1);
            $("#pResultado").html("Turno jugador 2");
        }
    }
}

// FUNCIONES PARA VERIFICAR SI GANO ALGUN JUGADOR -----------------------------

// VERIFICAR FILA 1
function verificarA1A3() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgA2").attr("src") && $("#imgA2").attr("src") === $("#imgA3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR FILA 2
function verificarB1B3() {

    if ($("#imgB1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgB1").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgB3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR FILA 3
function verificarC1C3() {

    if ($("#imgC1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgC1").attr("src") === $("#imgC2").attr("src") && $("#imgC2").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR COLUMNA 1
function verificarA1C1() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgB1").attr("src") && $("#imgB1").attr("src") === $("#imgC1").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR COLUMNA 2
function verificarA2C2() {

    if ($("#imgA2").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA2").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC2").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR COLUMNA 3
function verificarA3C3() {

    if ($("#imgA3").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA3").attr("src") === $("#imgB3").attr("src") && $("#imgB3").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR PRIMER DIAGONAL
function verificarA1C3() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}
// VERIFICAR SEGUNDA DIAGONAL
function verificarA3C1() {

    if ($("#imgA3").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA3").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC1").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("GANO JUGADOR 1")
            } else {
                $("#pResultado").html("GANO JUGADOR 2");
            }
        }
    }
}