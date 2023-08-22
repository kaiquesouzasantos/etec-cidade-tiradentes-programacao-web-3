let URL = "https://www.balldontlie.io/api/v1/games"

export class Requester {
    static async getGames() {
        return (await fetch(URL)).json()
    }
}