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
  total: number;
  voladuras:TableData[];
};


export const TableVoladura: React.FC<TableProps> = ({total,voladuras}) => {

  const keys =Object.keys(voladuras[0]);
  keys.pop();
  console.log('jaja',total);
  // const {voladuras, total}=datos;
  return (
    <div className=' bg-white rounded mt-5'>
      <table className="table ">
        <thead>
          <tr>
            {
              keys.map((key,index)=>{
                return(
                    <th className="header-cell " key={index}>{key}</th>)
              })
            }
             <th className="header-cell " >Opciones</th>
          </tr>
        </thead>
        <tbody>
          {voladuras.map(({ nroVoladura, fecha, fase, nivel, malla }: TableData) => (
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

export default TableVoladura;
