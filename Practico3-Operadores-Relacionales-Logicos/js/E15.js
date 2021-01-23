// variables
let codigo;
let departemento;

// boton
$("#btnEvaluar").click(consulta);

// funcion para evaluar dos numeros y saber si son multiplos
function consulta() {

    codigo = $("#slcCodigo").val();

    switch (codigo) {
        case "A":
            departemento = "Canelones";
            break;
        case "B":
            departemento = "Maldonado";
            break;
        case "C":
            departemento = "Rocha";
            break;
        case "D":
            departemento = "Treinta y Tres";
            break;
        case "E":
            departemento = "Cerro Largo";
            break;
        case "F":
            departemento = "Rivera";
            break;
        case "G":
            departemento = "Artigas";
            break;
        case "H":
            departemento = "Salto";
            break;
        case "I":
            departemento = "Paysandu";
            break;
        case "J":
            departemento = "Rio Negro";
            break;
        case "K":
            departemento = "Soriano";
            break;
        case "L":
            departemento = "Colonia";
            break;
        case "M":
            departemento = "San Jose";
            break;
        case "N":
            departemento = "Flores";
            break;
        case "O":
            departemento = "Florida";
            break;
        case "P":
            departemento = "Lavlleja";
            break;
        case "Q":
            departemento = "Durazno";
            break;
        case "R":
            departemento = "Tacuarembo";
            break;
        case "S":
            departemento = "Montevideo";
            break;
    } /* Esta llave cierra el switch */

    $("#pResultado").html("El codigo " + codigo + " corresponde al departamento de: " + departemento);

}

// RESUELTO CON IF

// if (codigo === "A") {
//     departemento = "Canelones";
// } else if (codigo === "B") {
//     departemento = "Maldonado";
// }
// else if (codigo === "C") {
//     departemento = "Rocha";
// }
// else if (codigo === "D") {
//     departemento = "Treinta y Tres";
// }
// else if (codigo === "E") {
//     departemento = "Cerro Largo";
// }
// else if (codigo === "F") {
//     departemento = "Rivera";
// }
// else if (codigo === "G") {
//     departemento = "Artigas";
// }
// else if (codigo === "H") {
//     departemento = "Salto";
// }
// else if (codigo === "I") {
//     departemento = "Paysandu";
// }
// else if (codigo === "J") {
//     departemento = "Rio Negro";
// }
// else if (codigo === "K") {
//     departemento = "Soriano";
// }
// else if (codigo === "L") {
//     departemento = "Colonia";
// }
// else if (codigo === "M") {
//     departemento = "San Jose";
// }
// else if (codigo === "N") {
//     departemento = "Flores";
// }
// else if (codigo === "O") {
//     departemento = "Florida";
// }
// else if (codigo === "P") {
//     departemento = "Lavlleja";
// }
// else if (codigo === "Q") {
//     departemento = "Durazno";
// }
// else if (codigo === "R") {
//     departemento = "Tacuarembo";
// }
// else if (codigo === "S") {
//     departemento = "Montevideo";
// } else {
//     departamento = "Codigo incorrecto";
// }
