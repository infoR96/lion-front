import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEye } from 'react-icons/fi';
import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { ModalEdicionDisenoPer } from './ModalEditDisenoPer';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { DisenoPer } from '../interfaces.tsx/interfaces';


export const TableDisenoPer: React.FC = () => {

  const [show, setShow] = useState(false);
  const [datos, setData] = useState({
    total: 1, disenoPerforaciones: []
  });
  const { total, disenoPerforaciones } = datos;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/disenoPerforacion`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });


  }, [])

  const [initstate, setInitstate] = useState({
    nrovoladura: 0,
    burden: 0,
    espaciamiento: 0,
    dureza: '',
    vid: ''
  });
  const [id, setId] = useState('')

  const [showSelect, setShowSelect] = useState(false)

  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: DisenoPer) => setInitstate(data);

  const keys = disenoPerforaciones.length > 0 ? Object.keys(disenoPerforaciones[0]) : [];
  keys.pop();

  const editData = (disenoperSelect: DisenoPer) => {
    handleShow();
    getVid(disenoperSelect)

  }

  const selectData = (vid: string) => {
    openSelect();
    axios.get(`http://localhost:8081/api/disenoPerforacion?id=${vid}`)

  }
  const deletData = (vid:string)=>{
    setId(vid);
    axios.delete(`${process.env.REACT_APP_API_URL}/disenoPerforacion/${vid}`)
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
      <ModalEdicionDisenoPer data={initstate} show={show} handleClose={handleClose} />
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
          {disenoPerforaciones.map(({ nrovoladura, burden, espaciamiento, dureza, vid }: DisenoPer) => (
            <tr key={vid} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{burden}</td>
              <td className="data-cell ">{espaciamiento}</td>
              <td className="data-cell ">{dureza}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'
                    onClick={() => editData({
                      nrovoladura, burden, espaciamiento, dureza, vid
                    })}>
                    <HiPencil /></Button>

                  <Button className='btn btn-danger' onClick={() => deletData(vid)} ><MdDelete /></Button>
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

export default TableDisenoPer;
