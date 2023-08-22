import { Partida } from "../model/partida.model.js"
import { Time } from "../model/time.model.js"

export class Tratamento {
    static factoryTime(nome, imagem, pseudonimos) {
        return new Time(nome, imagem, pseudonimos)
    }

    static factoryPartida(time_casa, time_visitante, data) {
        return new Partida(time_casa, time_visitante, data)
    }

    static factoryListPartida(lista) {
        let listaPartida = []

        lista.data.forEach(
            (jogo) => {
                listaPartida.push(
                    this.factoryPartida(
                        jogo.home_team.full_name,
                        jogo.visitor_team.full_name,
                        jogo.date
                ))
            }
        )

        return listaPartida
    }
}