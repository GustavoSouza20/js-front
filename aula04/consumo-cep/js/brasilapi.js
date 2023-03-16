'use strict'

export const pesquisarCep = async (cepParaPesquisar) =>{
    const url =`https://brasilapi.com.br/api/cep/v1/${cepParaPesquisar}`
    
    const response = await fetch(url)
        
    const data = await response.json()

    return {
        state:data.state,
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        

    }
    
}