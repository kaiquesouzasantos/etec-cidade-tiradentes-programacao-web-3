import { apresentaInformacoesSumarizadas, apresentaInformacoes, apresentaTodasInformacoesFiltradas, removeTodasInformacoes } from './funcoesHTML.js'
import { LISTA_PESSOAS } from './listaPessoas.js'

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

document.addEventListener('click', main())
