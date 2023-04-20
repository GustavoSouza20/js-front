'use strict'


import{produtos} from  "./produtos.js"

import './card'

const criaCard = (produto) => {
   const card = document.createElement ('card-produto')
   card.classList.add('card')
   card.nome = produto.nome
   card.pirce = produto.pirce
   card.foto = produto.image
    
   return card
}
const caregarProdutos = () =>{
    const container = document.getElementById('container')
    const cards = produtos.map( criaCard )
    
    container.replaceChildren(...cards)
}
caregarProdutos()