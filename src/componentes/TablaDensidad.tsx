import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';

type TableData = {
  nroVoladura: number;
  registrado:boolean;
  horaInicio:string,
  horaFin:string,
  tipoMezcla:string,
  densidadIninicial:number,
  densidadFinal:number,
  camion:string
};

type TableProps = {
  total: number;
  voladuras:TableData[];
};


export const TableDensidad: React.FC<TableProps> = ({total,voladuras}) => {

  const keys =Object.keys(voladuras[0]);
 
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
          {voladuras.map(({ nroVoladura, registrado,horaInicio,horaFin,tipoMezcla,densidadIninicial,densidadFinal,camion}: TableData) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{registrado}</td>
              <td className="data-cell ">{horaInicio}</td>
              <td className="data-cell ">{horaFin}</td>
              <td className="data-cell ">{tipoMezcla}</td>
              <td className="data-cell ">{densidadIninicial}</td>
              <td className="data-cell ">{densidadFinal}</td>
              <td className="data-cell ">{camion}</td>
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
