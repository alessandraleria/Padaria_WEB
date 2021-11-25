import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import { useHistory } from "react-router";
import IconButton from "../IconButton/IconButton";
import { Heading1 } from "../styled";

export default function PageHeader({ handleEdit, handleAdd, title }) {
  const history = useHistory();
  const accessLevel = localStorage.getItem("accessLevel");
  const handleLancamento = () => {
    history.push("/lancamento");
  };
  if (accessLevel == 1) {
    return (
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
          {title}
        </Heading1>
        <div>
          <div
            onClick={handleEdit}
            style={{
              display: "inline-block",
              marginRight: "40px",
            }}
          >
            <IconButton icon={<TiPencil size={20} />} text={"Editar"} />
          </div>
          <div onClick={handleAdd} style={{ display: "inline-block" }}>
            <IconButton
              icon={<BsPlusSquareDotted size={20} />}
              text={"Cadastrar"}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
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
          {title}
        </Heading1>
        <div
          onClick={handleLancamento}
          style={{
            display: "inline-block",
          }}
        >
          <IconButton icon={<TiPencil size={20} />} text={"Lançamento"} />
        </div>
      </div>
    );
  }
}
