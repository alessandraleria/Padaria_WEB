import React, { useState } from "react";
import { useHistory } from "react-router";
import { BiSearchAlt, BiTrash } from "react-icons/bi";

import {
  CenterSection,
  Container,
  Heading1,
  DetailText,
  Input,
  ButtonPrimary,
  ButtonDanger,
  ButtonBlack,
} from "../../components/styled";
import api from "../../services/api";

export default function EditFuncionario() {
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

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/find", {
        cpf: cpf
      });

      console.log(response);

      if (response.data) {
        setName(response.data.name);
        setLastName(response.data.last_name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        //set Endereço
        const array = response.data.address.split(',');
        setRua(array[0]);
        setNumero(array[1]);
        setCidade(array[2]);
        
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha carregando dados de funcionários, tente novamente.");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("users/delete", {
        cpf: cpf,
      });
      
      if (response.data) {
        if (response.data.success) {
          alert("Usuário excluído com sucesso!");
          history.push("/funcionarios");
        }
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha na exclusão, tente novamente.");
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("users/edit", {
        name: name,
        last_name: lastName,
        email: email,
        cpf: cpf,
        phone: phone,
        address: `${rua}, ${numero}, ${cidade}`,
      });

      if (response.data) {
        if (response.data.success) {
          alert("Funcionário atualizado com sucesso!");
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
    } 
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
          Edição de funcionário:
        </Heading1>
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            alignItems: "end",
            marginBottom: "20px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div>
            <DetailText>Insira o CPF do funcionário:</DetailText>
            <Input
              style={{ marginBottom: "0", marginRight: "20px", width: "100%" }}
              type="text"
              value={cpf}
              name="cpf"
              autoFocus
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <ButtonPrimary
            style={{
              width: "50px",
              height: "60%",
              margin: "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <BiSearchAlt size={30} />
            </div>
          </ButtonPrimary>
        </form>
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
                <DetailText>Telefone:</DetailText>
                <Input
                  required
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
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

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ButtonDanger
              style={{ width: "170px", padding: "15px 25px" }}
              onClick={(e) => handleCancel(e)}
            >
              Cancelar
            </ButtonDanger>
            <ButtonPrimary
              style={{ width: "170px", padding: "15px 25px" }}
              type="submit"
            >
              Concluir
            </ButtonPrimary>
            <ButtonBlack
              style={{ width: "170px", padding: "15px 25px" }}
              onClick={(e) => handleDelete(e)}
            >
              <BiTrash
                size={20}
                style={{ display: "inline-block", marginRight: "10px" }}
              />
              <span>Apagar</span>
            </ButtonBlack>
          </div>
        </form>
      </Container>
    </CenterSection>
  );
}
