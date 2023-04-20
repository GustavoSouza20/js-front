'use strict'

export const pesquisarCep = async (cepParaPesquisar) =>{
    const url =`https://brasilapi.com.br/api/cep/v1/${cepParaPesquisar}`
    
    const response = await fetch(url)
        
    const data = await response.json()

    return {
        logradouro: data.street,
        bairro: data.neighborhood,
        municipio: data.city,
        estado: data.state
        

    }
    
}