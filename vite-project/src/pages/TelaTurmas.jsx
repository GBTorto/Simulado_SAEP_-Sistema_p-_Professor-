import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import CardTurmas from "../components/CardTurmas";

const TelaTurmas = () => {
    const navigate = useNavigate()

    const [ turmas, setTumas ] = useState([])

    useEffect(() => {
        const fetchTurmas = async () => {
            const { data, error } = await supabase
            .from('turma')
            .select('*')

            if ( error ){
                console.error(error)
            }
            else {
                setTumas(data)
            }
        }

        fetchTurmas()
    }, [])
    

    const acessar__criar_turmas = () => {
        navigate('/CriarTurmas')
    }
    return (
        <div className="tela-turmas">
            <div className="tela-turmas__lista">
                {turmas.map((turma) => (
                    <CardTurmas
                        key={turma.id_turma}
                        nome={turma.nome_turma}
                        // descricao={turma.descricao}
                    />
                ))}
            </div>

            <div className="tela-turmas__btn--criar_turmas">
                <button
                    className="criar_turmas"
                    onClick={acessar__criar_turmas}
                >
                    Criar Turmas
                </button>
            </div>
        </div>
    );
};

export default TelaTurmas