import React, { useState } from 'react'
import { supabase } from '../../supabase/supabaseClient'

const CriarAtividade = () => {
  const [ nome_atividade, setNome_atividade] = useState('')
  const [ conteudo_atividade, setConteudo_atividade ] = useState('')

  const adicionar_atividade = async () => {
    if (!nome_atividade){
      alert('Preencha o nome da atividade')
    }

    const {data: atividade, error: erroAtividade} = await supabase
    .from('atividade')
    .select('nome_atividade')
    .eq('nome_atividade', nome_atividade)

    if (erroAtividade){
      console.log(erroAtividade)
    }

    if (atividade.length > 0){
      alert("Já existe uma atividade com este nome.")
      return
    }

    const {data: conteudo, error: erroConteudo} = await supabase
    .from('atividade')
    .select('conteudo_atividade')

    if ( erroConteudo ){
      console.log( erroConteudo )
    }

    if ( conteudo_atividade.length === 0 ){
      alert("Escreva o conteúdo da atividade, por favor.")
      return
    }

    const { error } = await supabase
    .from('atividade')
    .insert([
      {nome_atividade: nome_atividade, conteudo_atividade: conteudo_atividade}
    ])

    if ( error ) {
            console.log(error.message)
        }
    else{
        alert('Atividade criada com sucesso.')
    }
  }

  return (
    <div className='criar-atividade'>
        <div className='criar-atividade__name'>
            <label htmlFor="criar-atividade__name">
                Nome da Atividade:
                <input type="text" name="name" id="criar-atividade__name" value={nome_atividade} onChange={e => setNome_atividade(e.target.value)} />
            </label>
        </div>

        <div className='criar-atividade__content'>
            <label htmlFor="criar-atividade__content">
                Conteúdo da atividade:
                <input type="text" name="content" id="criar-atividade__content" value={conteudo_atividade} onChange={e => setConteudo_atividade(e.target.value)}/>
            </label>
        </div>
        <div className='criar-arividade__btn'>
          <button className='btn-criar' onClick={adicionar_atividade}>Criar atividade</button>
        </div>
    </div>
  )
}

export default CriarAtividade