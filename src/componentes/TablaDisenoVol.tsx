import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { DisenoVol } from '../interfaces.tsx/interfaces';
import { ModalEdicionDisenoVol } from './ModalEditDisenoVol';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { FiEye } from 'react-icons/fi';


export const TableDiesenoVol: React.FC = () => {
  const [show, setShow] = useState(false);

  const [datos, setData] = useState({
    total: 0, disenoVoladuras: []
  });
  const { total, disenoVoladuras } = datos;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/disenoVoladura`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });


  }, [])

  const [initstate, setInitstate] = useState({
    tipoexplosivo: '',
    kgexplosivo: '',
    nrovoladura:0,
    vid:''
  });
  const [id, setId] = useState('')

  const [showSelect, setShowSelect] = useState(false)

  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: DisenoVol) => setInitstate(data);
  
  const keys = disenoVoladuras.length > 0 ? Object.keys(disenoVoladuras[0]) : [];
  
  // keys.shift();
  keys.pop();

  const editData = (disenovolSelect: DisenoVol) => {
    handleShow();
    getVid(disenovolSelect)

  }
  const selectData = (vid:string)=>{
    openSelect();
    console.log('SELECCIONADO',vid)

  }

  const deletData = (vid:string)=>{
    setId(vid);
    axios.delete(`${process.env.REACT_APP_API_URL}/disenoVoladura/${vid}`)
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
       <ModalEdicionDisenoVol data={initstate} show={show} handleClose={handleClose} />
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
          {disenoVoladuras.map(({ nrovoladura, tipoexplosivo,kgexplosivo,vid}: DisenoVol) => (
            <tr key={nrovoladura} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{tipoexplosivo}</td>
              <td className="data-cell ">{kgexplosivo}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'
                  onClick={()=>editData({
                    nrovoladura,tipoexplosivo,kgexplosivo,vid
                  })}
                  ><HiPencil/></Button>
                  <Button className='btn btn-danger' onClick={() => deletData(vid)}><MdDelete/></Button>
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


