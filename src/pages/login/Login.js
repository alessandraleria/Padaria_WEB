import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./Login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post("users/login", {
                email,
                password
            });

            if(response.data){
                if(response.status == 0){
                    alert("\nE-mail incorreto!");
                } else if(response.status == 2){
                    alert("\nSenha incorreta!");
                } else {
                    history.push("/home");
                }
            } else {
                alert("\nServidor indisponível!\nPor favor, tente novamente mais tarde");
            }
        } catch (err){
            console.log("Erro: " + err);
            alert("Falha no login, tente novamente.");
        }
    }

    return (
        <div className="login-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Entrar
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Login;