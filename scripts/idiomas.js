function cambiar_idioma(idioma) {
    document.body.setAttribute('lang', idioma.value);
}

// function cambiar_idioma(idioma) {

//     var idioma_principal;
//     var idioma_oculto;

//     switch (idioma) {
//         case "en":
//             idioma_principal = Array.from(document.getElementsByClassName("idioma_ingles"));
//             idioma_oculto = Array.from(document.getElementsByClassName("idioma_espanol"));
//             console.log(Array.from(document.getElementsByClassName("idioma_espanol")));
//             break;

//         case "es":
//             idioma_principal = Array.from(document.getElementsByClassName("idioma_espanol"));
//             idioma_oculto = Array.from(document.getElementsByClassName("idioma_ingles"));
//             console.log("pipo es un buen perro pero en español");
//             break;

//         default:

//             idioma_principal = Array.from(document.getElementsByClassName("idioma_espanol"));
//             idioma_oculto = Array.from(document.getElementsByClassName("idioma_ingles"));
//             console.log("pipo es un buen perro pero en default");

//             break;
//     }

//     idioma_principal.forEach(tag_principal => tag_principal.style.visibility = "visible" );

//     idioma_oculto.forEach(tag_ocultar => tag_ocultar.style.visibility = "hidden" );
// }