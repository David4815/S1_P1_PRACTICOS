// CLASE PERSONA
class Persona{
    constructor(unNombre, unaEdad, unaNacionalidad){
        this.nombre = unNombre;
        this.edad = unaEdad;
        this.nacionalidad = unaNacionalidad;
    }
}

// Agregar Personas a UNA lista
$("#btnAgregar").click(agregarPersona);
let listaPersonas = [];

function agregarPersona(){
    let nombre = $("#txtNombre").val();
    let edad = Number($("#txtEdad").val());
    let nacionalidad = $("#txtNacionalidad").val();
    
    let unaPersona = new Persona(nombre,edad,nacionalidad);
    listaPersonas.push(unaPersona);
    listarPersonas();
}

function listarPersonas(){
$("#tblDatos").empty();
for(let i=0; i<listaPersonas.length;i++){
    $("#tblDatos").append(`<tr>
    <td>${listaPersonas[i].nombre}</td>
    <td>${listaPersonas[i].edad}</td>
    <td>${listaPersonas[i].nacionalidad}</td>
    </tr>`)
}
}

// Agregar Personas mayores de edad a OTRA lista
$("#btnAgregarMayores").click(agregarPMayores);
let listaPersonasM = [];

function agregarPMayores(){
    let nombre = $("#txtNombre").val();
    let edad = Number($("#txtEdad").val());
    let nacionalidad = $("#txtNacionalidad").val();
    
    let unaPersona = new Persona(nombre,edad,nacionalidad);
    if(unaPersona.edad>18)
   { listaPersonasM.push(unaPersona);}
    listarPersonasMayores();
}

function listarPersonasMayores(){
    $("#tblDatosM").empty();
    for(let i=0; i<listaPersonasM.length;i++){
        $("#tblDatosM").append(`<tr>
        <td>${listaPersonasM[i].nombre}</td>
        <td>${listaPersonasM[i].edad}</td>
        <td>${listaPersonasM[i].nacionalidad}</td>
        </tr>`)
    }
    }