import { Partida } from "../model/partida.model.js"
import { TIMES } from "../data/time.list.js"

export class Tratamento {
    static factoryPartida(time_casa, time_visitante, data, temporada,status, pontuacao_casa, pontuacao_visitante) {
        return new Partida(time_casa, time_visitante, data, temporada,status, pontuacao_casa, pontuacao_visitante)
    }

    static getTime(nome) {
        return TIMES.filter(
            time => time.nome == nome || time.pseudonimos.indexOf(nome) > -1
        )
    }

    static factoryListPartida(lista) {
        let listaPartida = []

        lista.data.forEach(
            (jogo) => {
                listaPartida.push(
                    this.factoryPartida(
                        this.getTime(jogo.home_team.full_name),
                        this.getTime(jogo.visitor_team.full_name),
                        jogo.date,
                        jogo.status,
                        jogo.season,
                        jogo.home_team_score,
                        jogo.visitor_team_score
                ))
            }
        )

        return listaPartida
    }
}