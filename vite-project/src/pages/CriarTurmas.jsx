import React, { useState } from 'react'
import { supabase } from '../../supabase/supabaseClient'

const CriarTurmas = () => {
    const [ nome_turma, setNome_turma ] = useState('')

    const adicionar_turma = async () => {
        if (!nome_turma){
            alert("Preencha o nome da turma.")
        }

        const {data: turma, error: erroBusca} = await supabase
        .from('turma')
        .select('*')
        .eq('nome_turma', nome_turma)

        if (erroBusca){
            console.log(erroBusca.message)
            return
        }

        if (turma.length > 0){
            alert("Já existe uma turma com este nome.")
            return
        }

        const { error } = await supabase
        .from('turma')
        .insert([
            {nome_turma: nome_turma, id_professor: 1}
        ])

        if ( error ) {
            console.log(error.message)
            return
        }
        else{
            alert('Turma registrada com sucesso.')
        }
    }


    return (
        <div className='criar-turmas'>
            <div className='criar-turmas__name'>
                <label htmlFor="criar-turmas__name">
                    Nome da turma:
                    <input type="text" name="name" id="criar-turmas__name" value={nome_turma} onChange={e => setNome_turma(e.target.value)}/>
                </label>
            </div>
            <div className='criar-turmas__btn'>
                <button className='btn' onClick={adicionar_turma}>Criar</button>
            </div>
        </div>
    )
}

export default CriarTurmas