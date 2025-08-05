import React from "react";
import { supabase } from "../../supabase/supabaseClient";

const Login = () => {

    const supabase_function = async () => {
        const {data, error} = await supabase
            .from()
            .select()
    }
    return (
        <div className="login">
            <div className="login__email">
                <label htmlFor="login__email">Digite seu email:
                    <input type="text" email="email" id="login__email" />
                </label>
            </div>

            <div className="login__password">
                <label htmlFor="login__password">Digite sua senha:
                    <input type="password" name="password" id="login__password" />
                </label>
            </div>
        </div>
    )
}

export default Login