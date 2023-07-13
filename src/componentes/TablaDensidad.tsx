import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Densidad } from '../interfaces.tsx/interfaces';
import { FiEye } from 'react-icons/fi';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { ModalEditDensidad } from './ModalEditDensidad';



export const TableDensidad: React.FC = () => {


  const [show, setShow] = useState(false);
  const [datos, setData] = useState({
    total: 0, densidades: []
  });
  const { total, densidades } = datos;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/densidad`)
      .then(response => {
        setData(response.data);
        console.log('LLEGANDO:', response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  const [initstate, setInitstate] = useState({
    nrovoladura: 0,
    horainicio: "08:30",
    horafin: "09:00",
    tipomezcla: "ANFO",
    densidadinicial: 1.40,
    densidadfinal: 2,
    camion: '',
    vid: ''
  });
  const [id, setId] = useState('')


  const [showSelect, setShowSelect] = useState(false)
  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  // para formulario
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: Densidad) => setInitstate(data);

  const keys = densidades.length > 0 ? Object.keys(densidades[0]) : [];
  keys.pop();

  const editData = (sismografialSelect: Densidad) => {
    handleShow();
    getVid(sismografialSelect)

  }

  const selectData = (vid: string) => {
    openSelect();
    console.log('SELECCIONADO', vid)
  }

  const deletData = (vid: string) => {
    setId(vid);
    axios.delete(`${process.env.REACT_APP_API_URL}/densidad/${vid}`)
      .then(response => {
        console.log('Se elimino la informacion correctamente', response.data);
        window.location.reload();
      })
      .catch(error => {
        console.log('Error al enviar la información', error);
      });

  }

  return (
    <div className=' bg-white rounded mt-5'>
      <ModalEditDensidad data={initstate} show={show} handleClose={handleClose} />
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
          {densidades.map(({ nrovoladura, horainicio, horafin,
            tipomezcla, densidadinicial, densidadfinal, camion, vid }: Densidad) => (
            <tr key={vid} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{horainicio}</td>
              <td className="data-cell ">{horafin}</td>
              <td className="data-cell ">{tipomezcla}</td>
              <td className="data-cell ">{densidadinicial}</td>
              <td className="data-cell ">{densidadfinal}</td>
              <td className="data-cell ">{camion}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'
                    onClick={() => editData({
                      nrovoladura, horainicio, horafin, tipomezcla,
                      densidadinicial, densidadfinal, camion, vid
                    })}
                  ><HiPencil /></Button>
                  <Button className='btn btn-danger' onClick={() => deletData(vid)}

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
