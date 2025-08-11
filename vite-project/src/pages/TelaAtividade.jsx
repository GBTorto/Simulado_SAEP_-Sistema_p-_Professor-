import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CardAtividade from '../components/CardAtividade'
import { supabase } from '../../supabase/supabaseClient'

const TelaAtividade = () => {
  const navigate = useNavigate()

  const [ atividades, setAtividade ] = useState([])

  useEffect(() => {
    const fetchAtividade = async () => {
      const { data, error } = await supabase
      .from('atividade')
      .select("*")

      if ( error ) {
        console.error(error)
      }
      else {
        setAtividade(data)
      }
    }

    fetchAtividade()

  }, [])

  const acessar = () => {
    navigate('/CriarAtividade')
  }

  return (
    <div className='tela-atividade'>
        <div className='tela-atividade__lista'>
          {
            atividades.map((atividades) => (
              <CardAtividade
                key={atividades.id_atividade}
                nome={atividades.nome_atividade}
                conteudo={atividades.conteudo_atividade}
              />
            ))
          }
        </div>
         
        <button onClick={acessar}>botao</button>
    </div>
  )
}

export default TelaAtividade