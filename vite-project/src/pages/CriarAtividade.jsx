import React from 'react'

const CriarAtividade = () => {
  return (
    <div className='criar-atividade'>
        <div className='criar-atividade__name'>
            <label htmlFor="criar-atividade__name">
                Nome da Atividade:
                <input type="text" name="name" id="criar-atividade__name" />
            </label>
        </div>
    </div>
  )
}

export default CriarAtividade