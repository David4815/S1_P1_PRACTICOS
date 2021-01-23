

// MOSTRAR MENSAJE EN CAMPO SIGUIENTE
function mostrarMensajeEnCampoSiguiete(mensaje,tipoMensaje,campo){

    $(`#${campo}`).next().html(`${mensaje}`);
    $(`.${tipoMensaje}`).show();
}
// CAMPO VACIO
function esVacio(campo){
    let vacio = false;

    if(campo===""){
        vacio = true;
    }
 return vacio;
}

// MOSTRAR MENSAJE EXITOSO
function mostrarMensajeExitosoEnCampoSiguiente(mensaje,campo){
    $(`#${campo}`).next().html(`${mensaje}`);
    $(".exito").show();
}



// MOSTRAR MENSAJE EN CAMPO SIGUIENTE AUTOMATICO
function mostrarMensajeEnCampoSiguieteAutomatico(mensaje,tipoMensaje,campo){

    $(`#${campo}`).after(`<span class="${tipoMensaje}">${mensaje}</span>`);
    $(`.${tipoMensaje}`).show();
}