class Pessoa {
    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.calculaIMC()
    }

    calculaIMC(){
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }
}

const LISTA_PESSOAS = [
    new Pessoa('Miguel', 15, 60, 1.65),
    new Pessoa('Paulo', 17, 70, 1.72),
    new Pessoa('Joao', 29, 60, 1.80),
    new Pessoa('Marcos', 17, 70, 1.69),
    new Pessoa('Lucas', 32, 110, 1.95)
]

function retornaEstadoIMC(imc){
    if (imc < 18.5) {
        return "Abaixo do   Peso!";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso Normal!";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso!";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade Grau I !";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade Grau II !";
    } else {
        return "Obesidade Grau III !";
    }
}

function apresentaInformacoes({nome, imc}){
    document
        .getElementById("container")
        .innerHTML += '<div class="card mb-3"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+retornaEstadoIMC(imc)+'</p></div></div>'
}

function main(){
    for(pessoa of LISTA_PESSOAS){
        apresentaInformacoes(pessoa)
    }
}
