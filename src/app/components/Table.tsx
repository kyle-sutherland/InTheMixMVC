import React from 'react';

type Props = {
  data: Record<string, any>[];
};

export default function DataTable({ data }: Props) {
  // If data is empty, return early
  // if (!data.length) return <p>No data available</p>;

  // Extract keys from the first item for table headers
  const headers = Object.keys(data[0]);

  return (
    <div>
      <h1>Data Table</h1>
      <table border="1">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

