import { ManipuladorHTML } from './manipuladorHTML.js'
import { LISTA_PESSOAS } from './listaPessoas.js'

document.addEventListener('mouseover', () => {
    LISTA_PESSOAS
        .forEach(pessoa => ManipuladorHTML.apresentaInformacoes(pessoa))
        ManipuladorHTML.apresentaInformacoesSumarizadas()
})
