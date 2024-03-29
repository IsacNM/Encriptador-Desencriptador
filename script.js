// Selección de elementos del DOM
const btnEncriptar = document.querySelector(".encriptarBtn");
const btnDesencriptar = document.querySelector(".desencriptarBtn");
const imagen = document.querySelector(".contenedorPersonaje");
const contenedorParrafo = document.querySelector(".parrafo");
const resultadoTexto = document.querySelector(".resultado-texto");

//eventos de los botones.
btnEncriptar.addEventListener("click", encriptarTexto);
btnDesencriptar.addEventListener("click", desencriptarTexto);


//encriptar el texto
function encriptarTexto() {
    ocultarElementos();
    const textoEntrada = obtenerTexto().toLowerCase();;
    resultadoTexto.textContent =encriptar(textoEntrada);
}

//desencriptar el texto
function desencriptarTexto() {
    ocultarElementos();
    const textoEntrada = obtenerTexto().toLowerCase();;
    resultadoTexto.textContent = desencriptar(textoEntrada);
}

//obtener el texto ingresado
function obtenerTexto() {
    const cajaTexto = document.querySelector(".cajaTexto");
    return cajaTexto.value;
}

//ocultar elementos
function ocultarElementos() {
    imagen.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

//encriptar el texto
function encriptar(texto) {
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += texto[i];
        }
    }

    return textoFinal;
}

//desencriptar el texto
function desencriptar(texto) {
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                textoFinal += "a";
                i++;
                break;
            case "e":
                textoFinal += "e";
                i += 4;
                break;
            case "i":
                textoFinal += "i";
                i += 3;
                break;
            case "o":
                textoFinal += "o";
                i += 3;
                break;
            case "u":
                textoFinal += "u";
                i += 3;
                break;
            default:
                textoFinal += texto[i];
        }
    }

    return textoFinal;
}

//copiar el resultado al portapapeles
const btnCopiar = document.querySelector(".copiarBtn"); 
btnCopiar.addEventListener("click", () => {
    const contenido = resultadoTexto.textContent;
    navigator.clipboard.writeText(contenido);
});