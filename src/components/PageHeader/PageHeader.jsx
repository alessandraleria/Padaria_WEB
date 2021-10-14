import React from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { TiPencil } from "react-icons/ti";
import IconButton from "../IconButton/IconButton";
import { Heading1 } from "../styled";

export default function PageHeader({ handleEdit, handleAdd, title }) {
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
}
