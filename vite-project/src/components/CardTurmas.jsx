import React from "react";
import { supabase } from "../../supabase/supabaseClient";

const cardTurmas = () => {
    // const {data, error} = await supabase
    //     .from("turma")
    //     .select("*")

    return (
        <div className="tela-turmas__card">
            <div className="tela-turmas__card--header">
                <h1>Teste</h1>
            </div>
            <div className="tela-turmas__card--content">
                <p>teste</p>
                <p>teste2</p>
            </div>
        </div>
    )
}