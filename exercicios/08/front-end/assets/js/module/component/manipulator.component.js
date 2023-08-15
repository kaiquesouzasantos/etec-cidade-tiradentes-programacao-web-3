import { Requester } from './resquest.component.js'

let PRODUTOS = await Requester.returnProducts()

export class Manipulator {
    static loadProducts() {
        let id = 0

        document.getElementById("progress").style.display = "none"

        PRODUTOS.forEach(
            product => {
                produtos.innerHTML += this.formatProduct(product, id)
                id += 1
            }
        )
    }

    static showProduct(id) { 
        let product = PRODUTOS[id]
    
        document.getElementById("imagem").innerHTML = `<img src="assets/img/${product.imagem}">`
        document.getElementById("info").innerHTML = this.formatProductExibition(product)
    }

    static formatProductExibition(product) {
        return `
        <h2 class="section-title-center">${product.titulo}</h2>
        <p class="prodDescription">${product.preco}</p>
        <p class="prodDescription">Projetado para jogadores que buscam explosão e agilidade em quadra, proporcionando o máximo de conforto e estabilidade durante os movimentos intensos do jogo.</p>
        <select class="prodOption">
            <option>35 - 36</option>
            <option>37 - 38</option>
            <option>39 - 40</option>
            <option>41 - 42</option>
            <option>43 - 44</option>
            <option>45 - 46</option>
        </select><br>
        <a class="prodBuy" id="prodBuy" onclick="Notification.alertaAtivacao('\\
            ${product.titulo} adquirido com sucesso em nivel de simulacao, muito obrigado!\\
        ')">Comprar</a>
    `
    }

    static formatProduct(product, id) {
        return `
        <li class="proContent" nome="${product.nome}">
        <img src="assets/img/${product.imagem}" class="proImg">
        <h3 class="proTitle">${product.titulo}</h3>
        <span class="proCategory">${product.categoria}</span>
        <span class="proPreço">${product.preco}</span>
        <a href="product.html?id=${id}" class="button proButton"><i class='bx bx-shopping-bag'></i></a>
        </li>
        `
    }
}
