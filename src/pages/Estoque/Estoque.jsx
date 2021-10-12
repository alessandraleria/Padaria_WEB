import React, { useEffect, useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";

import { CenterSection, Heading1 } from "../../components/styled";
import NavBar from "../../components/NavBar/NavBar";
import IconButton from "../../components/IconButton/IconButton";
import Table from "../../components/Table/Table";
import { dados } from "./data";
import api from "../../services/api";

export default function Estoque() {
  const [data, setData] = useState(
    dados.map(({ id, createdAt, updatedAt, ...item }) => item)
  );
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
  }, [data]);

  return (
    <CenterSection>
      <div
        style={{
          height: "70vh",
          display: "grid",
          gridTemplateColumns: "120px auto",
          gridTemplateRows: "80px auto",
          alignItems: "start",
        }}
      >
        <div
          style={{
            gridColumn: "1 / 2",
            gridRow: "2/auto",
            paddingRight: "30px",
          }}
        >
          <NavBar />
        </div>
        <div style={{ gridColumn: "2 / auto", gridRow: "1/2" }}>
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
          <div style={{ gridColumn: "2 / auto", gridRow: "2/auto" }}>
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
        </div>
      </div>
    </CenterSection>
  );
}
