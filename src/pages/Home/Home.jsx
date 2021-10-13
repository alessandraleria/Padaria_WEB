import React, { useState } from "react";
import Estoque from "../Estoque/Estoque";
import NavBar from "../../components/NavBar/NavBar";
import PageHeader from "../../components/PageHeader/PageHeader";
import { CenterSection } from "../../components/styled";

export default function Home() {
  const [activeTable, setActiveTable] = useState("Estoque");

  const handleFormsAtivo = () => {
    if (activeTable === "Estoque") {
      setActiveTable("Funcionarios");
    } else if (activeTable === "Funcionarios") {
      setActiveTable("Estoque");
    }
  };

  const handleEstoqueEdit = () => {};

  const handleEstoqueAdd = () => {};

  const handleFuncionarioEdit = () => {};

  const handleFuncionarioAdd = () => {};

  let Table, Header;

  if (activeTable === "Estoque") {
    Table = <Estoque />;
    Header = (
      <PageHeader
        handleEdit={handleEstoqueEdit}
        handleAdd={handleEstoqueAdd}
        title={"Estoque"}
      />
    );
  } else if (activeTable === "Funcionarios") {
    Header = (
      <PageHeader
        handleEdit={handleFuncionarioEdit}
        handleAdd={handleFuncionarioAdd}
        title={"Funcionários"}
      />
    );
  }

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
          <NavBar handleClick={handleFormsAtivo} />
        </div>
        <div style={{ gridColumn: "2 / auto", gridRow: "1/2" }}>{Header}</div>
        <div style={{ gridColumn: "2 / auto", gridRow: "2/auto" }}>{Table}</div>
      </div>
    </CenterSection>
  );
}
