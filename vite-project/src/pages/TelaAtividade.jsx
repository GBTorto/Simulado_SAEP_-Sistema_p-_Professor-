import React from 'react'
import { useNavigate } from 'react-router-dom'

const TelaAtividade = () => {
  const navigate = useNavigate()

  const acessar = () => {
    navigate('/CriarAtividade')
  }

  return (
    <div className='tela-atividade'>
        a
        <button onClick={acessar}>botao</button>
    </div>
  )
}

export default TelaAtividade