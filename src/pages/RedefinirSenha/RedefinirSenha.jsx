import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  Input,
  ButtonPrimary,
  Heading1,
  CenterSection,
  DetailText,
  ButtonDanger,
} from "../../components/styled";

import api from "../../services/api";

export default function RedefinirSenha({ handleCancel }) {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

     try {
      if(password == confPassword){
        const response = await api.post("users/redefinePassword", {
          email,
          cpf,
          password
        });
        if (response.data) {
          if (response.data.success !== true) {
            alert(response.data.message);
          } else {
            localStorage.setItem("isAuthenticated", true);
            history.push("/estoque");
          }
        } else {
          alert(
            "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
          );
        }
      } else {
        alert(
          "\nAs senhas não coincidem!\nPor favor, insira a mesma senha no campo Senha e Confirmação de Senha."
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha na redefinição de senha, tente novamente.");
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
          Insira as informações:
        </Heading1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
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

          <div style={{ width: "100%" }}>
            <DetailText>CPF:</DetailText>
            <Input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <DetailText>Nova Senha:</DetailText>
            <Input
              type="password"
              placeholder="Digite sua nova senha"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ width: "100%" }}>
            <DetailText>Confirmação de Senha:</DetailText>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              required
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ButtonDanger
              style={{ width: "170px", padding: "15px 25px" }}
              onClick={() => handleCancel()}
            >
              Cancelar
            </ButtonDanger>
            <ButtonPrimary type="submit">Confirmar</ButtonPrimary>
          </div>
        </form>
      </Container>
    </CenterSection>
  );
}
