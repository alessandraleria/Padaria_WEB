import React from "react";
import styled from "styled-components";
import Status from "./Status";

const StyledTable = styled.table`
  border: none;
  border-collapse: collapse;
  border-radius: 2rem;
  font-size: 1.8rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
  width: 70vw;

  td,
  th {
    padding: 1.8rem 1.5rem;
  }

  thead,
  th {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  tbody tr {
    :hover {
      background-color: #f2f3ff;
    }
  }

  thead > tr {
    background-color: ${(props) => props.theme.topBar};
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

export default function Table({ data, columnNames }) {
  return (
    <TableMarkup
      columnNames={columnNames}
      titles={Object.keys(data[0])}
      data={data}
    />
  );
}

const TableMarkup = ({ titles, data, columnNames }) => (
  <div style={{ height: "100%", overflow: "scroll" }}>
    <StyledTable>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {columnNames.map((columnNames, index) => (
            <th key={index}>{columnNames}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((title, index) => {
              if (title === "status") {
                return (
                  <td key={index} style={{ width: "100px" }}>
                    <Status
                      qtt={item.current_quantity - item.minimum_quantity}
                    />
                  </td>
                );
              } else {
                return <td key={index}>{item[title]}</td>;
              }
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </div>
);
