import React from 'react'

const CardAtividade = ({ nome, conteudo }) => {
    return (
        <div className='tela-atividade__card'>
            <div className='tela-atividade__card--header'>
                <h2>{nome}</h2>
            </div>
            <div className='tela-atividade__card--content'>
                <p>{conteudo}</p>
            </div>
        </div>
    )
}

export default CardAtividade