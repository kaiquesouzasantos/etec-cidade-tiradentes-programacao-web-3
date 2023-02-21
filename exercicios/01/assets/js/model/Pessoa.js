export class Pessoa {
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