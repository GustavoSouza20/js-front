'use strict'

class card extends HTMLElement {
    constructor() {
        super()
            
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Produto'
        this.price = '0,00'
        this.foto = null
        this.cor = 'red'
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
            
            *{
                margin: 0%;
                padding: 0%;
                box-sizing: border-box;
            }
            .card{
                height: 300px;
                width: 200px;
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
                background-color: greenyellow;
            }
            .card__text{
                color: #fff;
                font-size: 1.5rem;
                font-weight: 600;
            }
            .card__image{
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
        const card = document.createElement('div')
        card.classList.add('card')
        
        const nomeAluno = document.createElement('h1')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome
        
        const imagem = document.createElement('img')
        imagem.classList.add('card__image')

       
        const turma = document.createElement('div')
        turma.textContent = this.price
        turma.classList.add('card__turma')

        card.append(nomeAluno, imagem, turma)

        return card
    }
}

customElements.define('card-gustavo', card)