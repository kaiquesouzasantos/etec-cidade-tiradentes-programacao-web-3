import { apresentaInformacoesSumarizadas, apresentaInformacoes } from './funcoesHTML.js'
import { LISTA_PESSOAS } from './listaPessoas.js'

function main(){
    LISTA_PESSOAS
        .forEach(pessoa => apresentaInformacoes(pessoa))

    apresentaInformacoesSumarizadas()
}

document.addEventListener('click', main())
