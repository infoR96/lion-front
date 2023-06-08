import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { ModalEdicionGeneral } from './ModalEditVoladura';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';

export type TableData = {
  nroVoladura: number;
  fecha: string;
  fase: string;
  nivel: number;
  malla: string;
  vid: string;
};

type TableProps = {
  total: number;
  voladuras: TableData[];
};

const voladuraUpdate = (vid: string) => {
  console.log(vid)
}


export const TableVoladura: React.FC<TableProps> = ({ total, voladuras }) => {

  const [show, setShow] = useState(false);
  const [vid, setVid] = useState({
    nroVoladura: 0,
    fecha: '',
    fase: '',
    nivel: 0,
    malla: '',
    vid: ''
  });
  const [id, setId] = useState('')


  const [showSelect, setShowSelect] = useState(false)
  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  // para formulario
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: TableData) => setVid(data);

  const keys = Object.keys(voladuras[0]);
  keys.pop();

  const editData = (voladuraSelect: TableData) => {
    handleShow();
    getVid(voladuraSelect)
  }

  const selectData = (vid:string)=>{
    setId(vid);
    openSelect();

  }


  return (
    <div className=' bg-white rounded mt-5'>
      <ModalEdicionGeneral data={vid} show={show} handleClose={handleClose} />
      <VoladuraSeleccionada id={id} show={showSelect} closeSelect={closeSelect} />
      <table className="table ">
        <thead>
          <tr>
            {
              keys.map((key, index) => {
                return (
                  <th className="header-cell " key={index}>{key}</th>)
              })
            }
            <th className="header-cell " >Opciones</th>
          </tr>
        </thead>
        <tbody>
          {voladuras.map(({ nroVoladura, fecha, fase, nivel, malla, vid }) => (
            <tr key={vid} >
              <td className="data-cell " >{nroVoladura}</td>
              <td className="data-cell " >{fecha}</td>
              <td className="data-cell " >{fase}</td>
              <td className="data-cell " >{nivel}</td>
              <td className="data-cell " >{malla}</td>
              <td className="data-cell " >
                <div className='horizontal-container  '>
                  <Button className='button-options' key={vid}
                    onClick={() => editData({
                      nroVoladura, fecha, fase,
                      nivel, malla, vid
                    })}><HiPencil /></Button>
                  <Button className='btn btn-danger' ><MdDelete /></Button>
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

export default TableVoladura;
