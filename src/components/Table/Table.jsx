import React from "react";
import Status from "./Status";
import { StyledTable } from "./TableElements";

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
  <div
    style={{
      maxHeight: "70vh",
      overflow: "hidden",
      borderRadius: "15px",
    }}
  >
    <div style={{ maxHeight: "69vh", overflowY: "scroll" }}>
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
  </div>
);
