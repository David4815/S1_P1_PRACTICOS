let turno = 0;
// TABLERO
// A1 A2 A3
// B1 B2 B3
// C1 C2 C3

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

// FUNCIONES PARA AGREGAR IMAGENES E IDENTIFICAR TURNO---------------------------------------

function cambiarA1() {

    if ($("#imgA1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA1").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgA1").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarA2() {

    if ($("#imgA2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA2").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgA2").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarA3() {

    if ($("#imgA3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgA3").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgA3").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarB1() {

    if ($("#imgB1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB1").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgB1").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarB2() {

    if ($("#imgB2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB2").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgB2").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarB3() {

    if ($("#imgB3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgB3").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgB3").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarC1() {

    if ($("#imgC1").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC1").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgC1").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarC2() {

    if ($("#imgC2").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC2").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgC2").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

function cambiarC3() {

    if ($("#imgC3").attr("src") === "img/TaTeTi/blanco.png") {
        turno++;
        if (turno % 2 === 0) {
            $("#imgC3").attr("src", "img/TaTeTi/cruz.png");
            $("#pResultado").html("Turno jugador 1 - circulo");
        } else {
            $("#imgC3").attr("src", "img/TaTeTi/circulo.png");
            $("#pResultado").html("Turno jugador 2 - cruz");
        }
    }
}

// FUNCIONES PARA VERIFICAR SI GANO ALGUN JUGADOR -----------------------------

// VERIFICAR FILA 1
function verificarA1A3() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgA2").attr("src") && $("#imgA2").attr("src") === $("#imgA3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR FILA 2
function verificarB1B3() {

    if ($("#imgB1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgB1").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgB3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR FILA 3
function verificarC1C3() {

    if ($("#imgC1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgC1").attr("src") === $("#imgC2").attr("src") && $("#imgC2").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR COLUMNA 1
function verificarA1C1() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgB1").attr("src") && $("#imgB1").attr("src") === $("#imgC1").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR COLUMNA 2
function verificarA2C2() {

    if ($("#imgA2").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA2").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC2").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR COLUMNA 3
function verificarA3C3() {

    if ($("#imgA3").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA3").attr("src") === $("#imgB3").attr("src") && $("#imgB3").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR PRIMER DIAGONAL
function verificarA1C3() {

    if ($("#imgA1").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA1").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC3").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}
// VERIFICAR SEGUNDA DIAGONAL
function verificarA3C1() {

    if ($("#imgA3").attr("src") != "img/TaTeTi/blanco.png") {
        if ($("#imgA3").attr("src") === $("#imgB2").attr("src") && $("#imgB2").attr("src") === $("#imgC1").attr("src")) {
            if (turno % 2) {
                $("#pResultado").html("Gano Jugador 1 - circulo")
            } else {
                $("#pResultado").html("Gano jugador 2 - cruz");
            }
        }
    }
}