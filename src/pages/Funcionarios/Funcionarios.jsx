import React, { useEffect, useState } from "react";

import { CenterSection } from "../../components/styled";
import NavBar from "../../components/NavBar/NavBar";
import Table from "../../components/Table/Table";
import { dados } from "./data";
import api from "../../services/api";
import { useHistory } from "react-router";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function Funcionarios() {
  function formatData({
    access_level,
    name,
    last_name,
    password,
    cpf,
    ...item
  }) {
    let newObj = { cpf: cpf, name: `${name} ${last_name}`, ...item };

    return newObj;
  }

  const [data, setData] = useState(dados.map((obj) => formatData(obj)));

  const history = useHistory();

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

  const handleEdit = () => {};

  const handleAdd = () => {};

  const handleEstoquesPage = () => {
    history.push("/estoque");
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
            handleEstoqueClick={handleEstoquesPage}
            activePage={"Funcionarios"}
          />
        </div>
        <div style={{ gridColumn: "2 / auto", gridRow: "1/2" }}>
          <PageHeader
            handleEdit={handleEdit}
            handleAdd={handleAdd}
            title={"Funcionários"}
          />
        </div>
        <div style={{ gridColumn: "2 / auto", gridRow: "2/auto" }}>
          <Table
            data={data}
            columnNames={["CPF", "Nome", "Email", "Telefone", "Endereço"]}
          />
        </div>
      </div>
    </CenterSection>
  );
}
