import { CATEGORIAS } from "../list/categoria.list.js"

export class ManipuladorHTML {
    static escreveHTML(id, conteudo){
        document.getElementById(id).innerHTML = conteudo
    }

    static apresentaInformacoes({nome, imc, estadoCorporal}){
        document
            .getElementById("lista")
            .innerHTML += '<li class="card mb-3" id="'+nome+imc+estadoCorporal+'"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+estadoCorporal+'</p></div></li>'
    }

    static apresentaInformacoesSumarizadas(){
        this.escreveHTML("abaixoDoPeso", CATEGORIAS.abaixoDoPeso)
        this.escreveHTML("pesoNormal", CATEGORIAS.pesoNormal)
        this.escreveHTML("sobrepeso", CATEGORIAS.sobrepeso)
        this.escreveHTML("obesidade1", CATEGORIAS.obesidade1)
        this.escreveHTML("obesidade2", CATEGORIAS.obesidade2)
        this.escreveHTML("obesidade3", CATEGORIAS.obesidade3)
    }
}