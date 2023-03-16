'use strict'

export const pesquisarCep = async (cepParaPesquisar) =>{
    const url =`https://api.postmon.com.br/v1/cep/${cepParaPesquisar}`
    
    const response = await fetch(url)
        
    const data = await response.json()

    return {
        bairro:data.bairro,
        cidade: data.cidade,
        logradouro: data.logradouro,
        estado:data.estado

    }
    
}