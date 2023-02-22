let CATEGORIAS = {
    abaixoDoPeso:0,
    pesoNormal:0,
    sobrepeso:0,
    obesidade1:0,
    obesidade2:0,
    obesidade3:0
}

let contadorExecucao = 0

class Pessoa {
    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.calculaIMC()
        this.estadoCorporal = this.estadoIMC()
    }

    calculaIMC(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    estadoIMC(){
        if(this.imc <= 0) return "N/A"

        if (this.imc < 18.5) {
            CATEGORIAS.abaixoDoPeso++
            return "Abaixo do Peso"
        } else if (this.imc >= 18.5 && this.imc < 25) {
            CATEGORIAS.pesoNormal++
            return "Peso Normal";
        } else if (this.imc >= 25 && this.imc < 30) {
            CATEGORIAS.sobrepeso++
            return "Sobrepeso"
        } else if (this.imc >= 30 && this.imc < 35) {
            CATEGORIAS.obesidade1++
            return "Obesidade Grau I"
        } else if (this.imc >= 35 && this.imc < 40) {
            CATEGORIAS.obesidade2++
            return "Obesidade Grau II"
        } else {
            CATEGORIAS.obesidade3++
            return "Obesidade Grau III"
        }
    }
}

const LISTA_PESSOAS = [
    new Pessoa('Miguel', 15, 60, 1.65),
    new Pessoa('Paulo', 17, 70, 1.72),
    new Pessoa('Joao', 29, 60, 1.80),
    new Pessoa('Marcos', 17, 70, 1.69),
    new Pessoa('Lucas', 32, 110, 1.95),

    new Pessoa('Gabriel', 15, 90, 1.65),
    new Pessoa('Roberto', 17, 150, 1.72),
    new Pessoa('Andre', 29, 50, 1.80),
    new Pessoa('Pedro', 17, 80, 1.69),
    new Pessoa('Augusto', 32, 110, 2.04),

    new Pessoa('Giovani', 15, 60, 1.65),
    new Pessoa('Adriano', 17, 70, 1.72),
    new Pessoa('Juliano', 29, 120, 1.80),
    new Pessoa('Tony', 17, 70, 1.69),
    new Pessoa('Artur', 32, 110, 1.95),

    new Pessoa('Eduardo', 20, 90, 1.65),
    new Pessoa('Danadoni', 25, 75, 1.72),
    new Pessoa('Everson', 29, 70, 1.7),
    new Pessoa('Junior', 42, 80, 1.8),
    new Pessoa('Robson', 32, 80, 1.7)
]

function escreveHTML(id, conteudo){
    document.getElementById(id).innerHTML = conteudo
}

function excluiHTML(id){
    try{
        document.getElementById(id).remove()
    } catch(erro){}
}

function apresentaInformacoes({nome, imc, estadoCorporal}){
    document
        .getElementById("container")
        .innerHTML += '<div class="card mb-3" id="'+nome+imc+estadoCorporal+'"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+estadoCorporal+'</p></div></div>'
}

function removeInformacoes({nome, imc, estadoCorporal}){
    excluiHTML(nome+imc+estadoCorporal)
}

function apresentaInformacoesSumarizadas(){
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

function apresentaTodasInformacoesFiltradas(categoria){
    LISTA_PESSOAS
        .filter(pessoa => pessoa.estadoIMC() == categoria)
        .forEach(pessoa => apresentaInformacoes(pessoa))
}

function removeTodasInformacoes(){
    LISTA_PESSOAS
        .forEach(pessoa => removeInformacoes(pessoa))
}

function main(categoria = null){
    if(categoria == null){
        LISTA_PESSOAS
            .forEach(pessoa => apresentaInformacoes(pessoa))
    } else {
        removeTodasInformacoes()
        apresentaTodasInformacoesFiltradas(categoria)
    } 

    apresentaInformacoesSumarizadas()
}
