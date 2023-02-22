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
            return "Abaixo do Peso"
        } else if (this.imc >= 18.5 && this.imc < 25) {
            return "Peso Normal";
        } else if (this.imc >= 25 && this.imc < 30) {
            return "Sobrepeso"
        } else if (this.imc >= 30 && this.imc < 35) {
            return "Obesidade Grau I"
        } else if (this.imc >= 35 && this.imc < 40) {
            return "Obesidade Grau II"
        } else {
            return "Obesidade Grau III"
        }
    }
}

const LISTA_PESSOAS = [
    new Pessoa('Andre', 29, 50, 1.80),
    new Pessoa('Miguel', 15, 60, 1.65),
    new Pessoa('Lucas', 32, 110, 1.95),
    new Pessoa('Gabriel', 15, 90, 1.65),
    new Pessoa('Juliano', 29, 120, 1.80),
    new Pessoa('Roberto', 17, 150, 1.72)
]

function apresentaInformacoes({nome, imc, estadoCorporal}){
    document
        .getElementById("container")
        .innerHTML += '<div class="card mb-3"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+estadoCorporal+'</p></div></div>'
}

function main(){
    LISTA_PESSOAS.forEach(
        pessoa => apresentaInformacoes(pessoa)
    )
}
