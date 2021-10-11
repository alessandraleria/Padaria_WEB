import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.white};
  border-width: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.7rem;
  cursor: pointer;
`;

export default function IconButton({ icon, text, ...props }) {
  return (
    <StyledButton>
      {icon}
      <div style={{ marginLeft: "1rem" }}>{text}</div>
    </StyledButton>
  );
}
