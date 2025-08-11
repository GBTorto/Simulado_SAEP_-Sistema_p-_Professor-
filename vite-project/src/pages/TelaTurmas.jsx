import React from "react";
import { useNavigate } from "react-router-dom";

const TelaTurmas = () => {
    const navigate = useNavigate()
    const acessar_atividades = () => {
        navigate('/TelaAtividade')
    }

    const acessar__criar_turmas = () => {
        navigate('/CriarTurmas')
    }
    return (
        <div className="tela-turmas">
            <div className="tela-turmas__card">
                <div className="tela-turmas__card--header">
                    <h1>Teste</h1>
                </div>
                <div className="tela-turmas__card--content">
                    <p>teste</p>
                    <p>teste2</p>
                </div>
                <div className="tela-turmas__card--btn">
                    <button className="card-btn" onClick={acessar_atividades}>Entrar</button>
                </div>
            </div>
            <div className="tela-turmas__btn--criar_turmas">
                <button className="criar_turmas" onClick={acessar__criar_turmas}>Criar Turmas</button>
            </div>
        </div>
    )
}

export default TelaTurmas