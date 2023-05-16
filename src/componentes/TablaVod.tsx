import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';

type TableData = {
    nroVoladura:number;
    nroTaladro:number;
    profundidadTaladro:number;
    densidad:number;
    sobrePerforacion:number;
    agua:boolean;
    taco:number;
    tipoTaco:string;
    longitudCarga:number;
    booster:number;
    tipoDetonador:string;
    tipoExplosivo:string;
    vodPromedio:number;
    probecable:number;
    cableCoaxial:number;
    diametro:number;
};

type TableProps = {
  total: number;
  voladuras:TableData[];
};


export const TableVod: React.FC<TableProps> = ({total,voladuras}) => {

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
          {voladuras.map(({ nroVoladura, nroTaladro,profundidadTaladro,
          densidad,sobrePerforacion,agua,taco,tipoTaco,longitudCarga,
          booster,tipoDetonador,tipoExplosivo,vodPromedio,probecable,
          cableCoaxial,diametro}: TableData) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{nroTaladro}</td>
              <td className="data-cell ">{profundidadTaladro}</td>
              <td className="data-cell ">{densidad}</td>
              <td className="data-cell ">{sobrePerforacion}</td>
              <td className="data-cell ">{agua}</td>
              <td className="data-cell ">{taco}</td>
              <td className="data-cell ">{tipoTaco}</td>
              <td className="data-cell ">{longitudCarga}</td>
              <td className="data-cell ">{booster}</td>
              <td className="data-cell ">{tipoDetonador}</td>
              <td className="data-cell ">{tipoExplosivo}</td>
              <td className="data-cell ">{vodPromedio}</td>
              <td className="data-cell ">{probecable}</td>
              <td className="data-cell ">{cableCoaxial}</td>
              <td className="data-cell ">{diametro}</td>
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


