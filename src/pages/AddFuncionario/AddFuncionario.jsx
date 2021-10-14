import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  CenterSection,
  Container,
  Heading1,
  DetailText,
  Input,
  ButtonPrimary,
  ButtonDanger,
} from "../../components/styled";
import api from "../../services/api";

export default function AddFuncionario() {
  const [accessLevel, setAccessLevel] = useState();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");

  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/funcionarios");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newObj = {
      access_level: accessLevel,
      name: name,
      last_name: lastName,
      email: email,
      cpf: cpf,
      phone: phone,
      address: `${rua}, ${numero}, ${cidade}`,
    };

    console.log(newObj);
    /* try {
      const response = await api.post("users/create", {
        access_level: accessLevel,
        name: name,
        last_name: lastName,
        email: email,
        cpf: cpf,
        phone: phone,
        address: `${rua}, ${numero}, ${cidade}`,
      });

      if (response.data) {
        alert(response.message);
        if (response.success) {
          history.push("/funcionarios");
        }
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha no login, tente novamente.");
    } */
  }

  return (
    <CenterSection>
      <Container style={{ padding: "3rem", maxWidth: "70vh" }}>
        <Heading1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "4rem",
          }}
        >
          Cadastro de novo funcionário:
        </Heading1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "start",
            }}
          >
            <div style={{ marginRight: "30px" }}>
              <div>
                <DetailText>Nome:</DetailText>
                <Input
                  required
                  type="text"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <DetailText>Sobrenome:</DetailText>
                <Input
                  required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <DetailText>Email:</DetailText>
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <DetailText>CPF:</DetailText>
                <Input
                  required
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <DetailText>Telefone:</DetailText>
                <Input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <DetailText>Rua:</DetailText>
                <Input
                  type="text"
                  value={rua}
                  required
                  onChange={(e) => setRua(e.target.value, "rua")}
                />
              </div>
              <div>
                <DetailText>Número:</DetailText>
                <Input
                  type="text"
                  value={numero}
                  required
                  onChange={(e) => setNumero(e.target.value, "numero")}
                />
              </div>
              <div>
                <DetailText>Cidade:</DetailText>
                <Input
                  type="text"
                  value={cidade}
                  required
                  onChange={(e) => setCidade(e.target.value, "cidade")}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "40px 0" }}>
            <div style={{ display: "inline-block", marginRight: "20px" }}>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={1}
                required
                onClick={(e) => setAccessLevel(e.target.value)}
              />
              <DetailText>Admin</DetailText>
            </div>
            <div style={{ display: "inline-block" }}>
              <input
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={2}
                required
                onClick={(e) => setAccessLevel(e.target.value)}
              />
              <DetailText>Funcionario</DetailText>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonDanger onClick={(e) => handleCancel(e)}>
              Cancelar
            </ButtonDanger>
            <ButtonPrimary type="submit">Concluir</ButtonPrimary>
          </div>
        </form>
      </Container>
    </CenterSection>
  );
}
