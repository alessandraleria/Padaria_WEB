import React from "react";
import styled from "styled-components";

const Indicador = styled.div`
  display: inline-block;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme[props.backgroundColor]};
`;

export default function Status({ qtt }) {
  if (qtt < 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "1rem",
        }}
      >
        <Indicador backgroundColor={"red"} />
        <div style={{ display: "inline-block", marginLeft: "1.5rem" }}>
          Falta
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "1rem",
        }}
      >
        <Indicador backgroundColor={"green"} />
        <div style={{ display: "inline-block", marginLeft: "1.5rem" }}>OK</div>
      </div>
    );
  }
}
