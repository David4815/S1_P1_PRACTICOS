$("#btnProbar").click(tomarDatos);

let listaNombres = ["dddA", "dddB", "dddC", "dddD", "dddE", "dddF", "dddG", "dddH", "dddI", "dddJ",
 "ddK", "ddL", "ddM", "dddN",
    "dddO", "ddP", "dddQ", "ddR", "dS", "dT", "ddU", "ddV", "ddW", "ddX", "ddY", "ddZ"];

function nombrarMascota(lista,letraFinal) {
    let nuevaLista = [];
    for (i = 0; i < lista.length; i++) {
        if (lista[i].charAt(lista[i].length - 1)===letraFinal) {
            nuevaLista.push(lista[i]);
        }
    }
    return nuevaLista;
}

function tomarDatos() {
    
    let letra = $("#txtLetra").val();
    
    $("#pResultado").html(nombrarMascota(listaNombres,letra));
}