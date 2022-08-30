const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")
const segMensaje = document.querySelector(".texto")
const imagen = document.querySelector(".img")

function bEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    output.value = textoEncriptado;
    mensaje.style.display = "none";
    segMensaje.style.display = "none";
    imagen.style.display = "none";
}



function encriptar(stringEncriptado){ //funcion//
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]] //muchos array es una matriz//
    stringEncriptado = stringEncriptado.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++) { 
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    } 
    return stringEncriptado;
}

function bDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value)
    output.value = textoEncriptado
    mensaje.style.display = "none";
    segMensaje.style.display = "none";
    imagen.style.display = "none";
    
}


function desencriptar(stringDesencriptado) { //funcion//
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]]; //muchos array es una matriz//
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) { 
        if(stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    } 
    return stringDesencriptado;
}
function copiar (){
    output.select()
    navigator.clipboard.writeText(output.value)
}

