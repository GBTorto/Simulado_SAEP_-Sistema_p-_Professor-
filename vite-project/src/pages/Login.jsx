import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const Logar = async () => {
        const {data, error} = await supabase
            .from("professor")
            .select("*")
            .eq("email", email)
            .eq("senha", password)

            if (error || !data){
                alert("email invalido ou senha invalidos")
            }
            else{
                console.log("tudo certo")
            }
    }

    

    return (
        <div className="login">
            <div className="login__email">
                <label htmlFor="login__email">Digite seu email:
                    <input type="text" email="email" id="login__email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
            </div>

            <div className="login__password">
                <label htmlFor="login__password">Digite sua senha:
                    <input type="password" name="password" id="login__password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
            </div>

            <div className="login__btn">
                <button className="login__btn--style" onClick={Logar}>
                    <p>Logar</p>
                </button>
            </div>
        </div>
    )
}

export default Login