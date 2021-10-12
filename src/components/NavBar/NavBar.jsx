import React from "react";
import styled from "styled-components";
import { BsBoxSeam } from "react-icons/bs";
import { ImUsers } from "react-icons/im";

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export default function NavBar() {
  return (
    <Container>
      <Button>
        <BsBoxSeam style={{ padding: "20px 10px" }} size={30} />
      </Button>
      <Button>
        <ImUsers style={{ padding: "20px 10px" }} size={30} />
      </Button>
    </Container>
  );
}
