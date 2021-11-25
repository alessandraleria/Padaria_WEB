import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Input,
  ButtonPrimary,
  Heading1,
  CenterSection,
  DetailText,
  LinkText,
} from "../../components/styled";

import api from "../../services/api";
import RedefinirSenha from "../RedefinirSenha/RedefinirSenha";

const Login = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleFormSwitch = () => {
    if (activeForm === "login") {
      setActiveForm("senha");
    } else if (activeForm === "senha") {
      setActiveForm("login");
    }
  };

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("users/login", {
        email,
        password,
      });

      if (response.data) {
        if (response.data.status !== 1) {
          alert(response.data.message);
        } else {
          localStorage.setItem("isAuthenticated", true);
          //////////////////////////////////////////////
          console.log(response.data);
          localStorage.setItem("accessLevel", response.data.data.access_level);
          history.push("/estoque");
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

  if (activeForm === "login") {
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
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <DetailText>Senha:</DetailText>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <ButtonPrimary type="submit">Entrar</ButtonPrimary>
          </form>
          <LinkText
            style={{ margin: "10px 0" }}
            onClick={() => handleFormSwitch()}
          >
            Redefinir senha
          </LinkText>
        </Container>
      </CenterSection>
    );
  } else {
    return <RedefinirSenha handleCancel={handleFormSwitch} />;
  }
};

export default Login;
