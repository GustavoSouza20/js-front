'use strict'

class card extends HTMLElement {
    constructor() {

        //Usar a nossa criação da classe, e não a criação do elemento mãe
        super()

        //permite que o itens sejam alterados em tempo real e não na construção dele
        this.shadow = this.attachShadow({ mode: 'open' })
        this.nome = 'Nome do Aluno'
        this.turma = 'Turma'
        this.foto = null
        // //Criando elemento
        // const titulo = document.createElement('div')
        // titulo.textContent = "Senai - Jandira"        
        // const css = document.createElement('style')
        // css.textContent = `
        //     div{
        //         display: grid;
        //         place-items: center;
        //         width: 400px;
        //         height: 400px;
        //         background-color: black;
        //         color: white;
        //     }

        // `
        // //Adiciona itens no elemento
        // shadow.append(
        //     titulo,
        //     css
        // )

    }

    static get observedAttributes(){
        return['nome','foto' , 'turma']
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
        
        const nomeAluno = document.createElement('div')
        nomeAluno.classList.add('card__text')
        nomeAluno.textContent = this.nome
        
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
       
        const turma = document.createElement('div')
        turma.textContent = this.turma
        turma.classList.add('card__turma')

        card.append(nomeAluno, imagem, turma)

        return card
    }
}

// O customElements é um elemento que voce mesmo custumizou
//O perimeiro parametro é o nome da class e o segundo é o nome do elemento
customElements.define('card-gustavo', card)