$("#btnVerificar").click(tomarDatos);

function tomarDatos() {
    let matricula = $("#txtMatricula").val()
    let departamento = identificarMatricula(matricula);
    $("#pResultado").html(departamento);
}

function identificarMatricula(matricula) {
    
    let priemrLetra = matricula.charAt(0).toUpperCase();
    let dep;
    switch (priemrLetra) {
        case "A":
            dep = "Canelones";
            break;
        case "B":
            dep = "Maldonado";
            break;
        case "C":
            dep = "Rocha";
            break;
        case "D":
            dep = "Treinta y tres";
            break;
        case "E":
            dep = "Cerro Largo";
            break;
        case "F":
            dep = "Rivera";
            break;
        case "G":
            dep = "Artigas";
            break;
        case "H":
            dep = "Salto";
            break;
        case "I":
            dep = "Paysandu";
            break;
        case "J":
            dep = "Rio Negro";
            break;
        case "K":
            dep = "Soriano";
            break;
        case "L":
            dep = "Colonia";
            break;
        case "M":
            dep = "San Jose";
            break;
        case "N":
            dep = "Flores";
            break;
        case "O":
            dep = "Florida";
            break;
        case "P":
            dep = "Lavalleja";
            break;
        case "Q":
            dep = "Durazno";
            break;
        case "R":
            dep = "Tacuarembo";
            break;
        case "S":
            dep = "Montevideo";
            break;
        default:
            dep = "Matricula incorrecta";
            break;
    }
    if(matricula.length !== 8){
        dep="Matricula incorrecta."
    }
    return dep;

}