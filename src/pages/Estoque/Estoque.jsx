import React, { useEffect, useState } from "react";

import { CenterSection, Heading1 } from "../../components/styled";
import IconButton from "../../components/styled/IconButton";
import Table from "../../components/styled/Table";
import { dados } from "./data";
import { TiPencil } from "react-icons/ti";
import { BsPlusSquareDotted } from "react-icons/bs";
import api from "../../services/api";

export default function Estoque() {
  const [data, setData] = useState(dados);
  useEffect(() => {
    /* async function fetchEstoque() {
      try {
        const response = await api.get("/products");

        if (response.data) {
          setData(response);
        } else {
          alert(
            "\nServidor indisponível!\nPor favor, tente novamente mais tarde"
          );
        }
      } catch (err) {
        console.log("Erro: " + err);
        alert("Falha carregando dados de estoque, tente novamente.");
      }
    }
    fetchEstoque(); */
    setData(data.map(({ id, createdAt, updatedAt, ...item }) => item));
  }, []);

  return (
    <CenterSection>
      <div
        style={{
          maxHeight: "70vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Heading1
            style={{
              textDecoration: "underline",
              marginBottom: "4rem",
            }}
          >
            Estoque
          </Heading1>
          <div>
            <div
              style={{
                display: "inline-block",
                marginRight: "40px",
              }}
            >
              <IconButton icon={<TiPencil size={20} />} text={"Editar"} />
            </div>
            <div style={{ display: "inline-block" }}>
              <IconButton
                icon={<BsPlusSquareDotted size={20} />}
                text={"Cadastrar"}
              />
            </div>
          </div>
        </div>
        <Table
          data={data}
          columnNames={[
            "Código",
            "Nome do Produto",
            "Qtd. Atual",
            "Qtd. Mínima",
            "Status",
          ]}
        />
      </div>
    </CenterSection>
  );
}
