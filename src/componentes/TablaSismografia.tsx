import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Sismografia } from '../interfaces.tsx/interfaces';
import { ModalEditSismografia } from './ModalEditSismografia';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { FiEye } from 'react-icons/fi';



type TableProps = {
  total: number;
  voladuras: Sismografia[];
};


export const TableSismografia: React.FC<TableProps> = ({ total, voladuras }) => {

  const [show, setShow] = useState(false);
  const [vid, setVid] = useState({
    registrado: false,
    nroVoladura: 0,
    ptoMoni: 'P42',
    distancia: 299,
    cargaOperante: 300,
    vppDiseno: 6.67,
    vppReal: 9.3,
    k: 1500,
    alpha: 1.9,
    vid: ''
  });
  const [id, setId] = useState('')


  const [showSelect, setShowSelect] = useState(false)
  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  // para formulario
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editData = (voladuraSelect: Sismografia) => {
    handleShow();
  }

  const selectData = (vid: string) => {
    openSelect();
    console.log('SELECCIONADO', vid)}

    const keys = Object.keys(voladuras[0]);
    keys.shift();
    keys.pop();

    return (
      <div className=' bg-white rounded mt-5'>
        <ModalEditSismografia data={vid} show={show} handleClose={handleClose} />
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
            {voladuras.map(({ nroVoladura, registrado, ptoMoni, distancia, cargaOperante, vppDiseno, vppReal, k, alpha, vid }: Sismografia) => (
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
                    <Button className='button-options'
                      onClick={() => editData({
                        nroVoladura, ptoMoni, distancia, cargaOperante, vppDiseno,
                        vppReal, k, alpha, registrado, vid
                      })}
                    ><HiPencil /></Button>
                    <Button className='btn btn-danger'

                    ><MdDelete /></Button>
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


