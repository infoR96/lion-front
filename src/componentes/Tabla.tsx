import React from 'react';

type TableData = {
  nroVoladura: number;
  fecha: string;
  fase: string;
  nivel: number;
  malla: string;
};

type TableProps = {
  data: TableData[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='col bg-primary'>
    <table className="table ">
      <thead>
        <tr>
          <th className="header-cell">nroVoladura</th>
          <th className="header-cell">fecha</th>
          <th className="header-cell">fase</th>
          <th className="header-cell">nivel</th>
          <th className="header-cell">malla</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ nroVoladura, fecha, fase, nivel, malla }) => (
          <tr key={nroVoladura} >
            <td className="data-cell">{nroVoladura}</td>
            <td className="data-cell">{fecha}</td>
            <td className="data-cell">{fase}</td>
            <td className="data-cell">{nivel}</td>
            <td className="data-cell">{malla}</td>
          </tr>
        ))}
      </tbody>
    </table>
    

    </div>
  );
};

export default Table;
