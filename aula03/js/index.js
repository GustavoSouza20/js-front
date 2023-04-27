'use strict'


import{produtos} from  "./produtos.js"

import './card.js'

const criaCard = (produto) => {
   const card = document.createElement('card-produtos')
   card.classList.add('card')
   card.nome = produto.name
   card.descricao= produto.description
   card.price=produto.price
   card.foto = `./img/${produto.image}`




        
   
   
   return card
}
const caregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map( criaCard )

    container.replaceChildren(...cards)
}
caregarProdutos()