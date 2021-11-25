import React from "react";
import styled from "styled-components";
import { BsBoxSeam } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";

const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 15px 0px;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  :hover {
    background-color: ${(props) => props.theme.topBar};
  }
  background-color: ${(props) => {
    return props.selected === true ? props.theme.topBar : props.theme.white;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NavBar({
  handleEstoqueClick,
  handleFuncionarioClick,
  activePage,
}) {
  let selected;
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear("isAuthenticated");
    localStorage.clear("accessLevel");
    history.push("/");
  };
  const accessLevel = localStorage.getItem("accessLevel");

  if (accessLevel == 1) {
    return (
      <Container>
        <Button onClick={handleEstoqueClick}>
          {activePage === "Estoque" ? (selected = true) : (selected = false)}
          <ButtonContainer selected={selected}>
            <BsBoxSeam style={{ padding: "10px 10px" }} size={30} />
          </ButtonContainer>
        </Button>
        {activePage === "Funcionarios" ? (selected = true) : (selected = false)}
        <ButtonContainer selected={selected}>
          <Button onClick={handleFuncionarioClick}>
            <ImUsers style={{ padding: "10px 10px" }} size={30} />
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button onClick={handleLogout}>
            <FiLogOut style={{ padding: "10px 10px" }} size={30} />
          </Button>
        </ButtonContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Button onClick={handleEstoqueClick}>
          {activePage === "Estoque" ? (selected = true) : (selected = false)}
          <ButtonContainer selected={selected}>
            <BsBoxSeam style={{ padding: "10px 10px" }} size={30} />
          </ButtonContainer>
        </Button>
        <ButtonContainer>
          <Button onClick={handleLogout}>
            <FiLogOut style={{ padding: "10px 10px" }} size={30} />
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}
