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
    let retorno;

    if (imc < 18.5) {
        retorno = "Abaixo do Peso"
        CATEGORIAS.abaixoDoPeso++
    } else if (imc >= 18.5 && imc < 25) {
        retorno = "Peso Normal"
        CATEGORIAS.pesoNormal++
    } else if (imc >= 25 && imc < 30) {
        retorno = "Sobrepeso";
        CATEGORIAS.sobrepeso++
    } else if (imc >= 30 && imc < 35) {
        retorno = "Obesidade Grau I"
        CATEGORIAS.obesidade1++
    } else if (imc >= 35 && imc < 40) {
        retorno = "Obesidade Grau II"
        CATEGORIAS.obesidade2++
    } else {
        retorno = "Obesidade Grau III"
        CATEGORIAS.obesidade3++
    }

    return retorno
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
