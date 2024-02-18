const express = require('express');
const app = express();
const port = 3000; 

const listaProdutos = [
    {
        "nome": "newstars699",
        "titulo": "New Star S",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro1.png",
        "descricao": ""
    },
    {
        "nome": "incline799",
        "titulo": "Incline",
        "categoria": "Masculino",
        "preco": "R$799,00",
        "imagem": "pro2.png",
        "descricao": ""
    },
    {
        "nome": "newstars699",
        "titulo": "New Star S",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro3.png",
        "descricao": ""
    },
    {
        "nome": "odyssey1699",
        "titulo": "Odyssey",
        "categoria": "Masculino",
        "preco": "R$1699,00",
        "imagem": "pro4.png",
        "descricao": ""
    },
    {
        "nome": "odyssey1699",
        "titulo": "Odyssey",
        "categoria": "Masculino",
        "preco": "R$1699,00",
        "imagem": "pro5.png",
        "descricao": ""
    },
    {
        "nome": "odyssey1699",
        "titulo": "Odyssey",
        "categoria": "Masculino",
        "preco": "R$1699,00",
        "imagem": "pro6.png",
        "descricao": ""
    },
    {
        "nome": "odyssey1699",
        "titulo": "Odyssey",
        "categoria": "Masculino",
        "preco": "R$1699,00",
        "imagem": "pro7.png",
        "descricao": ""
    },
    {
        "nome": "bolda2699",
        "titulo": "Bold A",
        "categoria": "Masculino",
        "preco": "R$2699,00",
        "imagem": "pro8.png",
        "descricao": ""
    },
    {
        "nome": "bolda2699",
        "titulo": "Bold A",
        "categoria": "Masculino",
        "preco": "R$2699,00",
        "imagem": "pro9.png",
        "descricao": ""
    },
    {
        "nome": "airmax97",
        "titulo": "Air Max 97",
        "categoria": "Masculino",
        "preco": "R$899,00",
        "imagem": "pro10.png",
        "descricao": ""
    },
    {
        "nome": "lightc399",
        "titulo": "Light C",
        "categoria": "Masculino",
        "preco": "R$399,00",
        "imagem": "pro11.png",
        "descricao": ""
    },
    {
        "nome": "runnerf599",
        "titulo": "Runner F",
        "categoria": "Masculino",
        "preco": "R$599,00",
        "imagem": "pro12.png",
        "descricao": ""
    },
    {
        "nome": "lightd499",
        "titulo": "Light D",
        "categoria": "Masculino",
        "preco": "R$499,00",
        "imagem": "pro13.png",
        "descricao": ""
    },
    {
        "nome": "runnerc699",
        "titulo": "Runner C",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro14.png",
        "descricao": ""
    },
    {
        "nome": "runneredition799",
        "titulo": "Runner Edition",
        "categoria": "Masculino",
        "preco": "R$799,00",
        "imagem": "pro15.png",
        "descricao": ""
    },
    {
        "nome": "airmax80",
        "titulo": "Air Max 80",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro16.png",
        "descricao": ""
    },
    {
        "nome": "#",
        "titulo": "New Star S1",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro17.png",
        "descricao": ""
    },
    {
        "nome": "insider699",
        "titulo": "Insider",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro18.png",
        "descricao": ""
    },
    {
        "nome": "airmax80",
        "titulo": "Air Max 80",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro19.png",
        "descricao": ""
    },
    {
        "nome": "lightc399",
        "titulo": "Light C",
        "categoria": "Masculino",
        "preco": "R$399,00",
        "imagem": "pro20.png",
        "descricao": ""
    },
    {
        "nome": "soldierb799",
        "titulo": "Soldier B",
        "categoria": "Masculino",
        "preco": "R$799,00",
        "imagem": "pro21.png",
        "descricao": ""
    },
    {
        "nome": "ilusion699",
        "titulo": "Ilusion",
        "categoria": "Masculino",
        "preco": "R$699,00",
        "imagem": "pro22.png",
        "descricao": ""
    },
    {
        "nome": "bladea499",
        "titulo": "Blade A",
        "categoria": "Masculino",
        "preco": "R$499,00",
        "imagem": "pro23.png",
        "descricao": ""
    },
    {
        "nome": "insidero999",
        "titulo": "insider O",
        "categoria": "Masculino",
        "preco": "R$999,00",
        "imagem": "pro24.png",
        "descricao": ""
    },
    {
        "nome": "lebrons1399",
        "titulo": "Lebron S",
        "categoria": "Masculino",
        "preco": "R$1399,00",
        "imagem": "pro25.png",
        "descricao": ""
    },
    {
        "nome": "lebronz1599",
        "titulo": "Lebron Z",
        "categoria": "Masculino",
        "preco": "R$1599,00",
        "imagem": "pro26.png",
        "descricao": ""
    },
    {
        "nome": "insidero999",
        "titulo": "Insider O",
        "categoria": "Masculino",
        "preco": "R$999,00",
        "imagem": "pro27.png",
        "descricao": ""
    },
    {
        "nome": "stard299",
        "titulo": "Star D",
        "categoria": "Masculino",
        "preco": "R$299,00",
        "imagem": "pro28.png",
        "descricao": ""
    },
    {
        "nome": "soldiermax999",
        "titulo": "Soldier Max",
        "categoria": "Masculino",
        "preco": "R$999,00",
        "imagem": "pro29.png",
        "descricao": ""
    },
    {
        "nome": "lightd499",
        "titulo": "Light D",
        "categoria": "Masculino",
        "preco": "R$499,00",
        "imagem": "pro30.png",
        "descricao": ""
    },
    {
        "nome": "soldiermax999",
        "titulo": "Soldier Max",
        "categoria": "Masculino",
        "preco": "R$999,00",
        "imagem": "pro31.png",
        "descricao": ""
    },
    {
        "nome": "soldierb799",
        "titulo": "Soldier B",
        "categoria": "Masculino",
        "preco": "R$799,00",
        "imagem": "pro32.png",
        "descricao": ""
    },
    {
        "nome": "starblade1999",
        "titulo": "Star Blade",
        "categoria": "Masculino",
        "preco": "R$1999,00",
        "imagem": "pro33.png",
        "descricao": ""
    },
    {
        "nome": "hardnew1199",
        "titulo": "Hard New",
        "categoria": "Masculino",
        "preco": "R$1199,00",
        "imagem": "pro34.png",
        "descricao": ""
    },
    {
        "nome": "lightedition799",
        "titulo": "Light Edition",
        "categoria": "Masculino",
        "preco": "R$799,00",
        "imagem": "pro35.png",
        "descricao": ""
    },
    {
        "nome": "colorexit299",
        "titulo": "Color Exit",
        "categoria": "Masculino",
        "preco": "R$299,00",
        "imagem": "pro36.png",
        "descricao": ""
    }
]

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/produtos', (req, res) => {
  res.json(listaProdutos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
