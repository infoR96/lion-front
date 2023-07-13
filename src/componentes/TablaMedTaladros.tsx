import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { MedTaladros } from '../interfaces.tsx/interfaces';
import { FiEye } from 'react-icons/fi';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { ModalEditMedTaladros } from './ModalEditMedTaladros';



export const TableMedTaladros: React.FC = () => {

  const [show, setShow] = useState(false);

  const [datos, setData] = useState({
    total: 0, medTaladros: []
  });
  const { total, medTaladros} = datos;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/medtaladros`)
      .then(response => {
        console.log(response.data)
        setData(response.data);

      })
      .catch(error => {
        console.log(error);
      });


  }, [])
  console.log('estado ',medTaladros)
  const [initstate, setInitstate] = useState({
    nrovoladura:45,
    perforados:69,
    tapados:20,
    reperforados:11,
    adicional:4,
    aguamenorauno:29,
    aguamayorauno:142,
    metrosperforados:2389,
    vid:''
  });
  const [id, setId] = useState('')

  const [showSelect, setShowSelect] = useState(false)

  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: MedTaladros) => setInitstate(data);
  
  const keys = medTaladros.length > 0 ? Object.keys(medTaladros[0]) : [];
  
  // keys.shift();
  keys.pop();
  const editData = (disenovolSelect: MedTaladros) => {
    handleShow();
    getVid(disenovolSelect)

  }
  const selectData = (vid:string)=>{
    openSelect();

  }

  const deletData = (vid:string)=>{
    setId(vid);
    axios.delete(`${process.env.REACT_APP_API_URL}/medtaladros/${vid}`)
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
             <ModalEditMedTaladros data={initstate} show={show} handleClose={handleClose} />
       <VoladuraSeleccionada id={id} show={showSelect} closeSelect={closeSelect} />
      <table className="table ">
        <thead>
          <tr>
            {
              keys.map((key,index)=>{
                return(
                    <th className="header-cell " key={key}>{key}</th>)
              })
            }
             <th className="header-cell " >Opciones</th>
          </tr>
        </thead>
        <tbody>
          {medTaladros.map(({ nrovoladura,perforados,tapados,reperforados,adicional,
          aguamenorauno,aguamayorauno,metrosperforados,vid}: MedTaladros) => (
            <tr key={vid} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{perforados}</td>
              <td className="data-cell ">{tapados}</td>
              <td className="data-cell ">{reperforados}</td>
              <td className="data-cell ">{adicional}</td>
              <td className="data-cell ">{aguamenorauno}</td>
              <td className="data-cell ">{aguamayorauno}</td>
              <td className="data-cell ">{metrosperforados}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                <Button className='button-options'
                  onClick={()=>editData({
                    nrovoladura,perforados,tapados,reperforados,adicional,aguamenorauno,
                    aguamayorauno,metrosperforados,vid
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


