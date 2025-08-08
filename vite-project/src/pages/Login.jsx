import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const logar = async () => {
        if (!email || !password){
            alert("Preencha todos os campos.");
            return;
        }

        const { data, error } = await supabase
            .from("professor")
            .select("*")
            .eq("email", email)
            .eq("senha", password);

        if (error) {
            alert("Erro na consulta: " + error.message);
            return;
        }

        if (!data || data.length === 0) {
            alert("Email ou senha inválidos");
            return;
        }

        // Login bem-sucedido
        console.log("Usuário encontrado:", data[0]);
        navigate("/TelaTurmas");
            }

    

    return (
        <div className="login">
            <div className="login__email">
                <label htmlFor="login__email">Digite seu email:
                    <input type="email" name="email" id="login__email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
            </div>

            <div className="login__password">
                <label htmlFor="login__password">Digite sua senha:
                    <input type="password" name="password" id="login__password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>

            <div className="login__btn">
                <button className="login__btn--style" onClick={logar}>
                    <p>Logar</p>
                </button>
            </div>
        </div>
    )
}

export default Login