import { CATEGORIAS } from "./categorias.js"

export class Pessoa {
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