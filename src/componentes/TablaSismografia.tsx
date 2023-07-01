import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Sismografia } from '../interfaces.tsx/interfaces';
import { ModalEditSismografia } from './ModalEditSismografia';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { FiEye } from 'react-icons/fi';




export const TableSismografia: React.FC = () => {

  const [show, setShow] = useState(false);
  const [datos, setData] = useState({
    total: 0, sismografias: []
  });
  const { total, sismografias } = datos;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sismografia`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  const [initstate, setInitstate] = useState({
    nrovoladura: 0,
    ptomoni: 'P42',
    distancia: 299,
    cargaoperante: 300,
    vppdiseno: 6.67,
    vppreal: 9.3,
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
  const getVid = (data: Sismografia) => setInitstate(data);

  const keys = sismografias.length > 0 ? Object.keys(sismografias[0]) : [];
  keys.pop();

  const editData = (sismografialSelect: Sismografia) => {
    handleShow();
    getVid(sismografialSelect)
    console.log('DATOSSSS', sismografialSelect)
    console.log('DATOSSSS', initstate)

  }

  const selectData = (vid: string) => {
    openSelect();
    console.log('SELECCIONADO', vid)}

    const deletData = (vid:string)=>{
      setId(vid);
      axios.delete(`${process.env.REACT_APP_API_URL}/sismografia/${vid}`)
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
        <ModalEditSismografia data={initstate} show={show} handleClose={handleClose} />
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
            {sismografias.map(({ nrovoladura, ptomoni, distancia, cargaoperante, vppdiseno, vppreal, k, alpha, vid }: Sismografia) => (
              <tr key={nrovoladura} >
                <td className="data-cell ">{nrovoladura}</td>
                <td className="data-cell ">{ptomoni}</td>
                <td className="data-cell ">{distancia}</td>
                <td className="data-cell ">{cargaoperante}</td>
                <td className="data-cell ">{vppdiseno}</td>
                <td className="data-cell ">{vppreal}</td>
                <td className="data-cell ">{k}</td>
                <td className="data-cell ">{alpha}</td>
                <td className="data-cell ">
                  <div className='horizontal-container '>
                    <Button className='button-options'
                      onClick={() => editData({
                        nrovoladura,ptomoni,distancia,cargaoperante,vppdiseno,vppreal,k,alpha, vid
                      })}
                    ><HiPencil /></Button>
                    <Button className='btn btn-danger'onClick={() => deletData(vid)}

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


