import React from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useNavigate } from "react-router-dom";

const CardTurmas = ({nome}) => {
    // const {data, error} = await supabase
    //     .from("turma")
    //     .select("*")

    const navigate = useNavigate()

    const acessar_atividades = () => {
        navigate('/TelaAtividade')
    }

    return (
        <div className="tela-turmas">
            <div className="tela-turmas__card">
                <div className="tela-turmas__card--header">
                    <h1>{nome}</h1>
                </div>
                {/* <div className="tela-turmas__card--content">
                    <p>{descricao}</p>
                </div> */}
                <div className="tela-turmas__card--btn">
                    <button className="card-btn" onClick={acessar_atividades}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default CardTurmas