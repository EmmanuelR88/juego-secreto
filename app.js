let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);


    //console.log(intentos);

    if (intentos <= 3) {
        if (numeroUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el numero, en ${intentos} ${(intentos == 1) ? "intento" : "intentos"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero es MENOR');
            }
            else {
                asignarTextoElemento('p', 'El numero es MAYOR');
            }
            intentos++;
            limpiarCaja();
        }
        return;
    }
    else {
        asignarTextoElemento('p', 'Se alcanzo el numero total de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled'); //222222222222222222222
        condicionesIniciales(); //2222222222222222222222222222
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado;
    numeroGenerado = Math.floor(Math.random() * 10 + 1);
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);

    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', "Se han sorteado todos los numeros");

    } else {
        //Si el numeroGenerado ya esta en lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            //console.log(listaNumerosSorteados);
        } else {
            listaNumerosSorteados.push(numeroGenerado);

            return numeroGenerado;
        }
    }



}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego de los numeros secretos");
    asignarTextoElemento('p', `Coloca un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(numeroSecreto);
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Mostrar mensaje de intervalo de numeros
    //generar el numero aleatorio nuevo
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();