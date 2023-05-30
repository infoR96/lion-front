import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { DisenoVol } from '../interfaces.tsx/interfaces';
import { ModalEdicionDisenoVol } from './ModalEditDisenoVol';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { FiEye } from 'react-icons/fi';


type TableProps = {
  total: number;
  voladuras:DisenoVol[];
};


export const TableDiesenoVol: React.FC<TableProps> = ({total,voladuras}) => {
  const [show, setShow] = useState(false);
  const [vid, setVid] = useState({
    registrado:false,
    tipoExplosivo: 'ANFO',
    kgExplosivo: '273_300',
    nroVoladura:0,
    vid:''
  });
  const [id, setId] = useState('')

  const [showSelect, setShowSelect] = useState(false)

  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const editData = (voladuraSelect: DisenoVol) => {
    handleShow();

  }
  const selectData = (vid:string)=>{
    openSelect();
    console.log('SELECCIONADO',vid)

  }
  const keys =Object.keys(voladuras[0]);
  keys.shift();
  keys.pop();

 
  console.log('jaja',total);
  // const {voladuras, total}=datos;
  return (
    <div className=' bg-white rounded mt-5'>
       <ModalEdicionDisenoVol data={vid} show={show} handleClose={handleClose} />
       <VoladuraSeleccionada id={id} show={showSelect} closeSelect={closeSelect} />
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
          {voladuras.map(({ nroVoladura, tipoExplosivo,kgExplosivo,registrado,vid}: DisenoVol) => (
            <tr key={nroVoladura} >
              <td className="data-cell ">{nroVoladura}</td>
              <td className="data-cell ">{tipoExplosivo}</td>
              <td className="data-cell ">{kgExplosivo}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'
                  onClick={()=>editData({
                    nroVoladura,tipoExplosivo,kgExplosivo,registrado,vid
                  })}
                  ><HiPencil/></Button>
                  <Button className='btn btn-danger' ><MdDelete/></Button>
                  <Button className=' btn btn-warning button-options mx-3' 
                    onClick={() => selectData(vid)} 
                  ><FiEye /></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};


