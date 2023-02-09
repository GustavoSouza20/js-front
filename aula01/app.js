'use strict'
const nota1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const calcular = document.getElementById('calcular')
const resultado= document.getElementById('resultado')
const formulario= document.getElementById('formulario')

function somar() {
    resultado.value = (Number(numero1.value) + Number(numero2.value))/2
    if(numero1.value > 10 || numero2 > 10 || numero1< 0 || numero2< 0){
        resultado.value = 'digite um nota valida'
        formulario.classList.add('sombra-laranja')
        formulario.classList.remove('sombra-red')
        formulario.classList.remove('sombra-gree')
    }else{
        if (resultado.value > 5 ) {
            resultado.value = 'aprovado'
            formulario.classList.add('sombra-gree')
            formulario.classList.remove('sombra-red')
            formulario.classList.remove('sombra-laranja')
        }else{
            resultado.value = 'reprovado'
            formulario.classList.add('sombra-red')
            formulario.classList.remove('sombra-gree')
            formulario.classList.remove('sombra-laranja')
        }
    }
}










    //     if (resultado.value > 7) {
//         resultado.value = 'aprovado'
//         formulario.classList.add("sombra-gree")

//     }else if(resultado.value < 7)
//         resultado.value = 'reprovado'
//         formulario.classList.add("sombra-red")
    
// }

calcular.addEventListener('click', somar)