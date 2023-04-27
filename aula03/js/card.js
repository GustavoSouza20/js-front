'use strict'

class card extends HTMLElement {
    constructor() {
        super()
            
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Produto'
        this.price = '0,00'
        this.foto = null
        this.cor = 'white'
        this.descricao = 'descicao do produto'
       

    }

    static get observedAttributes(){
        return['nome','price' , 'foto', 'cor', 'descricao' ]
    }
    
    attributeChangedCallback(nomeAttr, aldValue , newValue){
        this[nomeAttr]= newValue
    }
    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        
        css.textContent = `
            
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .card {
        background-color: ${this.cor};
        width: 300px;
        height: 50vh;
        display: grid;
        grid-template-rows: 20% 40% 20% 20%;
        place-items: center;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .card:hover{
        box-shadow: 0px 0px 8px #00F6;
    }
    .card__text {
        color: black;
        font-size: 1.5rem;
        font-weight: 600;
        transition: 0.3s linear;
    }
    .card_text_description {
        font-size: 1rem;
    }
    .card_image{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            background-color: blueviolet;
            background-image: url(${this.foto});
            background-size: cover;
    }
        `
        return css
    }
    component() {
        //Criando Card
        const card = document.createElement('div')
        card.classList.add('card')
        
        //Nome do Produto
        const nomeProduto = document.createElement('h1')
        nomeProduto.classList.add('card__text')
        nomeProduto.textContent = this.nome

        //Descrição do Produto
        const descicaoProduto = document.createElement('span')
        descicaoProduto.classList.add('card_text_description')
        descicaoProduto.textContent=this.descricao

        //imagem do produto
        const imagemProduto = document.createElement('img')
        imagemProduto.classList.add('card_image')

       //preço
        const pirceProduto = document.createElement('div')
        pirceProduto.textContent = this.price
        pirceProduto.classList.add('card_price')

        card.append(nomeProduto,descicaoProduto, imagemProduto, pirceProduto )

        return card
    }
}

customElements.define('card-produtos', card)