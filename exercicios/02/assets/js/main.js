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
    new Pessoa('Artur', 32, 110, 1.95)
]

const CATEGORIAS = {
    abaixoDoPeso:0,
    pesoNormal:0,
    sobrepeso:0,
    obesidade1:0,
    obesidade2:0,
    obesidade3:0
}

function retornaEstadoIMC(imc){
    if (imc < 18.5) {
        CATEGORIAS.abaixoDoPeso++
        return "Abaixo do Peso"
    } else if (imc >= 18.5 && imc < 25) {
        CATEGORIAS.pesoNormal++
        return "Peso Normal"
    } else if (imc >= 25 && imc < 30) {
        CATEGORIAS.sobrepeso++
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        CATEGORIAS.obesidade1++
        return "Obesidade Grau I"
    } else if (imc >= 35 && imc < 40) {
        CATEGORIAS.obesidade2++
        return "Obesidade Grau II"
    } else {
        CATEGORIAS.obesidade3++
        return "Obesidade Grau III"
    }
}

function apresentaInformacoesPessoa({nome, imc}){
    document
        .getElementById("container")
        .innerHTML += '<div class="card mb-3"><div class="card-header"><strong>'+nome+'</strong></div><div class="card-body"><p class="card-text">Possui um IMC de '+imc+', sendo considerado '+retornaEstadoIMC(imc)+'!</p></div></div>'
}

function apresentaInformacoesSumarizadas(){
    document.getElementById("abaixoDoPeso").innerHTML = CATEGORIAS.abaixoDoPeso
    document.getElementById("pesoNormal").innerHTML = CATEGORIAS.pesoNormal
    document.getElementById("sobrepeso").innerHTML = CATEGORIAS.sobrepeso
    document.getElementById("obesidade1").innerHTML = CATEGORIAS.obesidade1
    document.getElementById("obesidade2").innerHTML = CATEGORIAS.obesidade2
    document.getElementById("obesidade3").innerHTML = CATEGORIAS.obesidade3
}

function main(){
    for(pessoa of LISTA_PESSOAS){
        apresentaInformacoesPessoa(pessoa)
    }

    apresentaInformacoesSumarizadas()
}
