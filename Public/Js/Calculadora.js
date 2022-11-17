'use strict' //colocar no modo restrito - dando menos erros para código
const display = document.getElementById('display'); //PUXANDO O ELEMENTO DIV COM ID DISPLAY
const numeros = document.querySelectorAll('[id*=tecla]') //Puxando todos os elementos que tiverem \
const operadores = document.querySelectorAll('[id*=operador]') //Puxando todos os elementos que tiverem 'tecla' no nome

let novoNumero = true; 

const atualizarDisplay = (texto) => {
    if (novoNumero)
    {
        display.textContent = texto
        novoNumero = false;
    }else{
        display.textContent += texto;
    }

}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click', inserirNumero)); 

const selecionarOperador = (evento) => {
    novoNumero = true;
}
operadores.forEach (operador => operador.addEventListener('click', selecionarOperador)); 
