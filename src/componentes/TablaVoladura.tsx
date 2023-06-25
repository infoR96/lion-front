import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { FiEye } from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { ModalEdicionGeneral } from './ModalEditVoladura';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';

export type TableData = {
  nrovoladura: number;
  fecha: Date;
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


export const TableVoladura: React.FC = React.memo (() => {

  const [datos, setData]= useState({
    total: 0, voladuras: []
  });

  const {total,voladuras}=datos;
  useEffect(() => {
    axios.get('http://localhost:8081/api/voladuras')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  

  }, [total])
  

  const [show, setShow] = useState(false);
  const [initstate, setInitstate] = useState({
    nrovoladura: 0,
    fecha: new Date(),
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
  const getVid = (data: TableData) => setInitstate(data);

  const keys = voladuras.length > 0 ? Object.keys(voladuras[0]) : [];
  keys.pop();

  useEffect(() => {
    
    console.log('NRO DE VOLADURA',voladuras)
  }, [])
  
//ESTA FUNCION SIRVE PARA EDITAR LOS DATOS Y ENVIAR UN ID EXISTENTE
  const editData = (voladuraSelect: TableData) => {
    handleShow();
    getVid(voladuraSelect)
    console.log('DATA RECIBIDA',voladuraSelect)
  }

  const selectData = (vid:string)=>{
    setId(vid);
    openSelect();

  }

  
  return (
    <div className=' bg-white rounded mt-5'>
      <ModalEdicionGeneral data={initstate} show={show} handleClose={handleClose} />
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
          {voladuras.map(({ nrovoladura, fecha, fase, nivel, malla, vid }) => (
            <tr key={vid} >
              <td className="data-cell " >{nrovoladura}</td>
              <td className="data-cell " >{`${fecha}`}</td>
              <td className="data-cell " >{fase}</td>
              <td className="data-cell " >{nivel}</td>
              <td className="data-cell " >{malla}</td>
              <td className="data-cell " >
                <div className='horizontal-container  '>
                  <Button className='button-options' key={vid}
                    onClick={() => editData({
                      nrovoladura, fecha, fase,
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
});

export default TableVoladura;
