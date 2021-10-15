import React, { useEffect, useState } from "react";

import { CenterSection } from "../../components/styled";
import NavBar from "../../components/NavBar/NavBar";
import Table from "../../components/Table/Table";
import { dados } from "./data";
import api from "../../services/api";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useHistory } from "react-router";

export default function Estoque() {
  const [data, setData] = useState(
    dados.map(({ id, createdAt, updatedAt, ...item }) => item)
  );

  const history = useHistory();

  useEffect(() => {
     async function fetchEstoque() {
      try {
        const response = await api.get("/products");

        if (response.data) {
          setData(response.data);
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
    fetchEstoque(); 
  }, []);

  const handleEdit = () => {
    history.push("/editEstoque");
  };

  const handleAdd = () => {
    history.push("/addEstoque");
  };

  const handleFuncionariosPage = () => {
    history.push("/funcionarios");
  };

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
          <NavBar
            handleFuncionarioClick={handleFuncionariosPage}
            activePage={"Estoque"}
          />
        </div>
        <div style={{ gridColumn: "2 / auto", gridRow: "1/2" }}>
          <PageHeader
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            title={"Estoque"}
          />
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
    </CenterSection>
  );
}
