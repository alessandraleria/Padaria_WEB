import styled from "styled-components";

export const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;
  font-size: 1.8rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  width: 60vw;

  td,
  th {
    padding: 1.8rem 1.5rem;
  }

  th {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${(props) => props.theme.topBar};
  }

  tbody tr {
    :hover {
      background-color: #f2f3ff;
    }
  }

  thead > tr {
    color: ${(props) => props.theme.black};
    text-align: center;
    text-decoration: underline;
  }

  td {
    width: auto;
  }

  td.min {
    width: 1%;
    white-space: nowrap;
  }

  tbody tr {
    background-color: ${(props) => props.theme.white};
    text-align: center;
    font-weight: 100;
  }

  tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }
`;
