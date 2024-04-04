import React from "react";
import Badge from "react-bootstrap/Badge";

const TableData = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  const columns = Object.keys(data[0]);
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr className="table-header-row">
            {columns.map((col) => (
              <th key={col} className="table-header-cell">
                {col === "acc_no"
                  ? "ACCOUNT NUMBER"
                  : col === "acc_type"
                  ? "ACCOUNT TYPE"
                  : col.toLocaleUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="table-row">
              {columns.map((column) => (
                <td key={column} className="table-cell">
                  {column === "Ifsc_code" ? (
                    <div className="d-flex align-content-center justify-start">
                      <i className="fa-solid table-icon fa-building-columns p-1"></i>
                      <span>{row[column]}</span>
                    </div>
                  ) : column === "balance" ? (
                    <div>
                      <span>&#8377;{row[column]}/-</span>
                    </div>
                  ) : column === "status" ? (
                    row[column] === "Active" ? (
                      <div>
                        <Badge className="bdg" bg="success">
                          Active
                        </Badge>
                      </div>
                    ) : (
                      <div>
                        <Badge className="bdg" bg="danger">
                          Inactive
                        </Badge>
                      </div>
                    )
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
