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

export default function AddEstoque() {
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState();
  const [minimumQuantity, setMinimumQuantity] = useState();

  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/estoque");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("products/create", {
        code: productCode,
        name: productName,
        current_quantity: currentQuantity,
        minimum_quantity: minimumQuantity,
      });

      if (response.data) {
        alert(response.data.message);
        if (response.data.success) {
          history.push("/estoque");
        }
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Código já cadastrado!");
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
          Cadastro de novo produto:
        </Heading1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <DetailText>Código do produto:</DetailText>
            <Input
              type="text"
              value={productCode}
              autoFocus
              required
              onChange={(e) => setProductCode(e.target.value)}
            />
          </div>
          <div>
            <DetailText>Nome do produto:</DetailText>
            <Input
              type="text"
              value={productName}
              autoFocus
              required
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div>
            <DetailText>Quantidade Atual:</DetailText>
            <Input
              required
              type="number"
              value={currentQuantity}
              onChange={(e) => setCurrentQuantity(e.target.value)}
            />
          </div>
          <div>
            <DetailText>Quantidade Mínima:</DetailText>
            <Input
              required
              type="number"
              value={minimumQuantity}
              onChange={(e) => setMinimumQuantity(e.target.value)}
            />
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
