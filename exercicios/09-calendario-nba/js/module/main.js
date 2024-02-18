import { Manipulator } from "./component/manipulador.component.js";

let load = false

document.addEventListener("mouseover", () => {
    if(!load) {
        Manipulator.loadGames()
        load = true
    }
})