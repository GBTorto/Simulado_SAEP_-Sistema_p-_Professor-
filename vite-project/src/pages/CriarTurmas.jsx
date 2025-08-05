import React from 'react'

const CriarTurmas = () => {
    return (
        <div className='criar-turmas'>
            <div className='criar-turmas__name'>
                <label htmlFor="criar-turmas__name">
                    Nome da turma:
                    <input type="text" name="name" id="criar-turmas__name" />
                </label>
            </div>
        </div>
    )
}

export default CriarTurmas