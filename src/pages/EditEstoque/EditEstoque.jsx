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

export default function EditEstoque() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [minimumQuantity, setMinimumQuantity] = useState(null);

  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/estoque");
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleDelete = (e) => {};

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("products/edit", {
        id: productId,
        name: productName,
        current_quantity: currentQuantity,
        minimum_quantity: minimumQuantity,
      });

      if (response.data) {
        alert(response.message);
        if (response.success) {
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

  return (
    <CenterSection>
      <Container style={{ padding: "3rem", maxWidth: "700px" }}>
        <Heading1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "4rem",
          }}
        >
          Alterar dados de produto:
        </Heading1>
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            alignItems: "end",
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <div>
            <DetailText>Insira o ID do produto:</DetailText>
            <Input
              style={{ marginBottom: "0", marginRight: "20px", width: "95%" }}
              type="text"
              value={productId}
              autoFocus
              onChange={(e) => setProductId(e.target.value)}
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
          }}
        >
          {/* <div style={{ width: "100%" }}>
            <DetailText>ID do produto:</DetailText>
            <Input
              type="text"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div> */}
          <div style={{ width: "100%" }}>
            <DetailText>Nome do produto:</DetailText>
            <Input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <DetailText>Quantidade Atual:</DetailText>
            <Input
              type="number"
              value={currentQuantity}
              onChange={(e) => setCurrentQuantity(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <DetailText>Quantidade Mínima:</DetailText>
            <Input
              type="number"
              value={minimumQuantity}
              onChange={(e) => setMinimumQuantity(e.target.value)}
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
