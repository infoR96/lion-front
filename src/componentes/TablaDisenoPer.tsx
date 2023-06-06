import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEye } from 'react-icons/fi';
import { HiPencil } from 'react-icons/hi';
import { MdDelete} from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { ModalEdicionDisenoPer } from './ModalEditDisenoPer';
import { VoladuraSeleccionada } from './VoladuraSeleccionada';
import { DisenoPer } from '../interfaces.tsx/interfaces';


type TableProps = {
  total: number;
  voladuras:DisenoPer[];
};


export const TableDisenoPer: React.FC<TableProps> = ({total,voladuras}) => {

  const [show, setShow] = useState(false);
  const [vid, setVid] = useState({
    nrovoladura: 0,
    registrado:false,
    burden: 0,
    espaciamiento: 0,
    dureza:'ALTA',
    vid:''
  });
  const [id, setId] = useState('')

  const [showSelect, setShowSelect] = useState(false)

  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const editData = (voladuraSelect: DisenoPer) => {
    handleShow();

  }
  const selectData = (vid:string)=>{
    openSelect();
    axios.get(`http://localhost:8081/api/disenoPerforacion?id=${vid}`)

  }


  const keys =Object.keys(voladuras[0]);
  keys.pop();

  // const {voladuras, total}=datos;
  return (
    <div className=' bg-white rounded mt-5'>
       <ModalEdicionDisenoPer data={vid} show={show} handleClose={handleClose} />
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
          {voladuras.map(({ nrovoladura, burden,espaciamiento,dureza,vid}: DisenoPer) => (
            <tr key={nrovoladura} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{burden}</td>
              <td className="data-cell ">{espaciamiento}</td>
              <td className="data-cell ">{dureza}</td>
              <td className="data-cell ">
                <div className='horizontal-container '>
                  <Button className='button-options'
                    onClick={()=>editData({
                      nrovoladura,burden,espaciamiento,dureza,vid
                    })}>
                  <HiPencil/></Button>
                  
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

export default TableDisenoPer;
