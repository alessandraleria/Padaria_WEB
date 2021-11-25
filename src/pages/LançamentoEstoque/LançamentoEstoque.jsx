import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useHistory } from "react-router";
import {
  ButtonDanger,
  ButtonPrimary,
  CenterSection,
  Container,
  DetailText,
  Heading1,
  Input,
} from "../../components/styled";
import api from "../../services/api";

export default function LançamentoEstoque() {
  const [productId, setProductId] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState(null);
  const [minimumQuantity, setMinimumQuantity] = useState(null);

  const history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push("/estoque");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(productCode);
    try {
      const response = await api.post("/products/find", {
        code: productCode,
      });

      if (response.data) {
        setProductId(response.data.id);
        setProductCode(response.data.code);
        setProductName(response.data.name);
        setCurrentQuantity(response.data.current_quantity);
        setMinimumQuantity(response.data.minimum_quantity);
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha carregando dados de estoque, tente novamente.");
    }
  };

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
        alert("Produto atualizado com sucesso!");
      } else {
        alert(
          "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
        );
      }
    } catch (err) {
      console.log("Erro: " + err);
      alert("Falha na edição de produto, tente novamente.");
    }
  }

  return (
    <CenterSection>
      <Container style={{ padding: "3rem", maxWidth: "600px" }}>
        <Heading1
          style={{
            textAlign: "center",
            textDecoration: "underline",
            marginBottom: "4rem",
          }}
        >
          Lançamento de estoque
        </Heading1>
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            alignItems: "end",
            marginBottom: "20px",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <div style={{ width: "100%", marginRight: "15px" }}>
            <DetailText>Insira o Código do produto:</DetailText>
            <Input
              style={{ marginBottom: "0", marginRight: "20px", width: "100%" }}
              type="text"
              value={productCode}
              autoFocus
              onChange={(e) => setProductCode(e.target.value)}
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
            type="submit"
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
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <DetailText>Nome do produto:</DetailText>
            <Input disabled type="text" value={productName} />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div style={{ marginRight: "25px" }}>
              <DetailText>Quantidade Atual:</DetailText>
              <Input disabled type="number" value={currentQuantity} />
            </div>
            <div>
              <DetailText>Quantidade Mínima:</DetailText>
              <Input disabled type="number" value={minimumQuantity} />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <DetailText>Insira nova quantidade:</DetailText>
            <Input
              type="number"
              value={minimumQuantity}
              onChange={setCurrentQuantity}
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
          </div>
        </form>
      </Container>
    </CenterSection>
  );
}
