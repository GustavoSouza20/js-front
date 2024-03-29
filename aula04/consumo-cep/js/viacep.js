'use strict'

export const pesquisarCep = async (cepParaPesquisar) =>{
    const url =`https://viacep.com.br/ws/${cepParaPesquisar}/json/`
    
    const response = await fetch(url)
        
    const data = await response.json()

    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.localidade,
        estado: data.uf
    }
    
}
