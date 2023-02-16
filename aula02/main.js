'user strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard=()=> {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class = "item"> SENAI</div>'
// }

const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class= "aluno_nome"> ${aluno.nome}</h2>
                        <span class="aluno_nota">${aluno.nota}</span>`
    if (aluno.nota < 5) {
        novaDiv.classList.add('reprovado')
    } else if (aluno.nota > 5) {
        novaDiv.classList.add('aprovado')
    }else if (aluno.nota >= 10) {
            alert('Coloque um numero menor ou igual a 10')
    } else if(aluno.nota <= 0) {
        alert('Coloque um numero maior ou igual a 0')
    }

    container.appendChild(novaDiv)

    //Strings 
    //""
    //''
    //``

}

const handleClick = () => {
    const aluno= {
         nome: prompt("Digite o nome do aluno"),
         nota: prompt("Digite a nota do aluno")

    }
    
    
    
    

    // if (name == " " || nota == " ") {
    //     alert('ERRO, preencha todos os compos')
    // } else if (isNaN(nota)) {
    //     alert('ERRO: só mente insira numeros')
    // }
    adicionarCard(aluno)
}




adicionar.addEventListener('click', handleClick)


