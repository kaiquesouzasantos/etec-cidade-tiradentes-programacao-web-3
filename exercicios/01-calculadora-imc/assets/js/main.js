import { LISTA_PESSOAS } from './pessoa.list.js'

function apresentaInformacoes({nome, imc, estadoCorporal}){
    document
        .getElementById("container")
        .innerHTML += '<div class="card mb-3"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+estadoCorporal+'</p></div></div>'
}

(function(){
    LISTA_PESSOAS.forEach(
        pessoa => apresentaInformacoes(pessoa)
    )
})()
