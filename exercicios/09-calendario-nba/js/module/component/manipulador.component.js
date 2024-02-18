import { Requester } from './resquest.component.js'
import { Tratamento } from './tratamento.component.js'

let PARTIDAS = await Requester.getGames()

export class Manipulator {
    static loadGames() {
        const div = document.getElementById("card-container")
        const lista = this.tratamento()

        lista.forEach(
            partida => {
                try{
                    div.innerHTML += this.getPartida(partida)
                } catch (ignored) {}
            }
        )
    }

    static tratamento() {
        return Tratamento.factoryListPartida(PARTIDAS)
    }

    static getPartida(partida) {
        const time_casa = partida.time_casa[0]
        const time_visitante = partida.time_visitante[0]

        return `
        <div class="game-card">
            <div class="teams">
                <div class="time">
                    <img src="${time_casa.imagem}" alt="">
                    <h2 class="nome-time">${time_casa.pseudonimos[0]}</h2> 
                </div>
                <div class="score">
                    <p class="pont">${partida.pontuacao_casa} - ${partida.pontuacao_visitante}</p>
                    <h3>VS</h3>
                </div>
                <div class="time">
                    <img src="${time_visitante.imagem}" alt="">
                    <h2 class="nome-time">${time_visitante.pseudonimos[0]}</h2> 
                </div> 
            </div>
            <div class="game-info">
                <h3>${partida.season}</h3>
                <h3>${partida.data}</h3>
                <h3>${partida.status}</h3>
            </div>
         </div>
        `
    }
}
