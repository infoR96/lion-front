import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';

type TableData = {
  nroVoladura: number;
  ptoMoni: string;
  distancia: number;
  cargaOperante: number;
  vppDiseno: number;
  vppReal: number;
  k: number;
  alpha: number;
};

type TableProps = {
  total: number;
  voladuras:TableData[];
};


export const TableSismografia: React.FC<TableProps> = ({total,voladuras}) => {

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
          {voladuras.map(({ nroVoladura, ptoMoni,distancia,cargaOperante,vppDiseno,vppReal,k,alpha }: TableData) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{ptoMoni}</td>
              <td className="data-cell ">{distancia}</td>
              <td className="data-cell ">{cargaOperante}</td>
              <td className="data-cell ">{vppDiseno}</td>
              <td className="data-cell ">{vppReal}</td>
              <td className="data-cell ">{k}</td>
              <td className="data-cell ">{alpha}</td>
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


