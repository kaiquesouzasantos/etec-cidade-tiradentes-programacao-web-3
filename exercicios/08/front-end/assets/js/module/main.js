import { Notification } from "./component/notification.component.js"
import { Manipulator } from './component/manipulator.component.js'
import { Get } from "./component/get.component.js"

window.addEventListener("load", () => {
    if(!document.getElementById("index"))
        return

    let carregamento = false

    if (!carregamento) {
        setTimeout(() => {
            Manipulator.loadProducts();
        }, 20);
        carregamento = true;
    }
});

window.addEventListener("load", () => {
    if(!document.getElementById("product"))
        return

    Manipulator.showProduct(Get.getProduct())
});
