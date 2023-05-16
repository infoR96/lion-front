import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';

type TableData = {
  nroVoladura: number;
  medido:true,
perforados:number,
tapados:number,
reperf:number,
adicional:number,
aguaMenor:number,
aguaMayor:number,
metrosPerforados:number,
Obeservaciones:string
};

type TableProps = {
  total: number;
  voladuras:TableData[];
};


export const TableMedTaladros: React.FC<TableProps> = ({total,voladuras}) => {

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
          {voladuras.map(({ nroVoladura,medido,perforados,tapados,reperf,adicional,aguaMenor,aguaMayor,metrosPerforados,Obeservaciones}: TableData) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{medido}</td>
              <td className="data-cell ">{perforados}</td>
              <td className="data-cell ">{tapados}</td>
              <td className="data-cell ">{reperf}</td>
              <td className="data-cell ">{adicional}</td>
              <td className="data-cell ">{aguaMenor}</td>
              <td className="data-cell ">{aguaMayor}</td>
              <td className="data-cell ">{metrosPerforados}</td>
              <td className="data-cell ">{Obeservaciones}</td>
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


