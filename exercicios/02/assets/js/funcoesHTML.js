import { CATEGORIAS } from "./categorias.js"
import { LISTA_PESSOAS } from "./listaPessoas.js"

let contadorExecucao = 0

function escreveHTML(id, conteudo){
    document.getElementById(id).innerHTML = conteudo
}

function excluiHTML(id){
    try{
        document.getElementById(id).remove()
    } catch(erro){}
}

function removeInformacoes({nome, imc, estadoCorporal}){
    excluiHTML(nome+imc+estadoCorporal)
}

export function apresentaInformacoes({nome, imc, estadoCorporal}){
    document
        .getElementById("lista")
        .innerHTML += '<li class="card mb-3" id="'+nome+imc+estadoCorporal+'"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+estadoCorporal+'</p></div></li>'
}

export function apresentaInformacoesSumarizadas(){
    if(contadorExecucao > 0) {
        return
    } else {
        escreveHTML("abaixoDoPeso", CATEGORIAS.abaixoDoPeso)
        escreveHTML("pesoNormal", CATEGORIAS.pesoNormal)
        escreveHTML("sobrepeso", CATEGORIAS.sobrepeso)
        escreveHTML("obesidade1", CATEGORIAS.obesidade1)
        escreveHTML("obesidade2", CATEGORIAS.obesidade2)
        escreveHTML("obesidade3", CATEGORIAS.obesidade3)

        contadorExecucao++
    }
}

export function apresentaTodasInformacoesFiltradas(categoria){
    LISTA_PESSOAS
        .filter(pessoa => pessoa.estadoIMC() == categoria)
        .forEach(pessoa => apresentaInformacoes(pessoa))
}

export function removeTodasInformacoes(){
    LISTA_PESSOAS
        .forEach(pessoa => removeInformacoes(pessoa))
}