import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Input,
  ButtonPrimary,
  Heading1,
  CenterSection,
  DetailText,
} from "../../components/common";

import api from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("users/login", {
        email,
        password,
      });

      if (response.data) {
        if (response.status !== 1) {
          alert(response.message);
        } else {
          localStorage.setItem("isAuthenticated", true);
          history.push("/home");
        }
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha no login, tente novamente.");
    }
  }

  return (
    <CenterSection>
      <Container style={{ padding: "3rem" }}>
        <Heading1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "4rem",
          }}
        >
          Login
        </Heading1>
        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <DetailText>Email:</DetailText>
            <Input
              type="email"
              placeholder="Digite seu email"
              value={email}
              autofocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <DetailText>Senha:</DetailText>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        </form>
      </Container>
    </CenterSection>
  );
};

export default Login;
