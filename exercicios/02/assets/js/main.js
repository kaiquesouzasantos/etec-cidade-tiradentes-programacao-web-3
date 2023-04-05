import { ManipuladorHTML } from './component/manipulador.component.js'
import { LISTA_PESSOAS } from './list/pessoa.list.js'

let contador = false

document.addEventListener('mouseover', () => {
    if(contador)
        return
    else 
        LISTA_PESSOAS
            .forEach(pessoa => ManipuladorHTML.apresentaInformacoes(pessoa))
        ManipuladorHTML.apresentaInformacoesSumarizadas()
        contador = true
})
