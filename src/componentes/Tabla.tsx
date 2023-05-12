import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';


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

type DataResponse = {
  total: number;
  voladuras: TableData[];
}


export const Table: React.FC<TableProps> = ({ data }) => {

  const [datos, setData]= useState({
    total: 1, voladuras: [{
      nroVoladura:0, 
      fecha:"d",
      fase:"d",
      nivel:0,
    malla:"d",
    }]
  });

  useEffect(() => {
    axios.get('http://localhost:8081/api/voladuras')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const {voladuras, total}=datos;
  return (
    <div className='col bg-white rounded mt-5'>
      <table className="table ">
        <thead>
          <tr>
            <th className="header-cell ">nroVoladura</th>
            <th className="header-cell ">fecha</th>
            <th className="header-cell ">fase</th>
            <th className="header-cell ">nivel</th>
            <th className="header-cell ">malla</th>
            <th className="header-cell ">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.voladuras.map(({ nroVoladura, fecha, fase, nivel, malla }: TableData) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{fecha}</td>
              <td className="data-cell ">{fase}</td>
              <td className="data-cell ">{nivel}</td>
              <td className="data-cell ">{malla}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'><HiPencil/></Button><Button className='btn btn-danger' ><MdDelete/></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default Table;
