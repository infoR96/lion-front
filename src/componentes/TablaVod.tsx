import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiPencil } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Vod } from '../interfaces.tsx/interfaces';
import { FiEye } from 'react-icons/fi';
import { ModalEditVod } from './ModalEditVod';


export const TableVod: React.FC = () => {


  const [show, setShow] = useState(false);
  const [datos, setData] = useState({
    total: 0, vods: []
  });
  const { total, vods } = datos ;
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/vod`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [])
  const [initstate, setInitstate] = useState({
    nrovoladura:3,
    nrotaladros: 12,
    profundidadtaladro: 34,
    densidad: 3,
    sobreperforacion: 2,
    agua: true,
    taco: 3,
    tipotaco: 'DETRITUS',
    longitudcarga: 4,
    booster: 900,
    tipodetonador: "NO ELECTRICO",
    tipoexplosivo: "ANFO",
    vodpromedio: 4275,
    probecable: true,
    cablecoaxial: 20,
    vid: ''
  });

  const [id, setId] = useState('')
  const [showSelect, setShowSelect] = useState(false)
  const closeSelect = () => setShowSelect(false)
  const openSelect = () => setShowSelect(true)
  // para formulario
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getVid = (data: Vod) => setInitstate(data);

  const keys = vods.length > 0 ? Object.keys(vods[0]) : [];
  keys.pop();

  const editData = (vodSelect: Vod) => {
    handleShow();
    getVid(vodSelect)   
  }
  const deletData = (vid:string)=>{
    setId(vid);
    axios.delete(`${process.env.REACT_APP_API_URL}/vod/${vid}`)
    .then(response => {
        console.log('Se elimino la informacion correctamente', response.data);
        window.location.reload();
    })
    .catch(error => {
        console.log('Error al enviar la información', error);
    });
  
  }
  
  const selectData = (vid: string) => {
    openSelect();
    console.log('SELECCIONADO', vid)}
  return (
    <div className='  rounded mt-5 bg-white'>
      <ModalEditVod data={initstate} show={show} handleClose={handleClose}/>
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
          {vods.map(({ nrovoladura, nrotaladros, profundidadtaladro,
            densidad, sobreperforacion, agua, taco, tipotaco, longitudcarga,
            booster, tipodetonador, tipoexplosivo, vodpromedio, probecable,
            cablecoaxial,vid }: Vod) => (
            <tr key={vid} >
              <td className="data-cell ">{nrovoladura}</td>
              <td className="data-cell ">{nrotaladros}</td>
              <td className="data-cell ">{profundidadtaladro}</td>
              <td className="data-cell ">{densidad}</td>
              <td className="data-cell ">{sobreperforacion}</td>
              <td className="data-cell ">{agua?'SI':'NO'}</td>
              <td className="data-cell ">{taco}</td>
              <td className="data-cell ">{tipotaco}</td>
              <td className="data-cell ">{longitudcarga}</td>
              <td className="data-cell ">{booster}</td>
              <td className="data-cell ">{tipodetonador}</td>
              <td className="data-cell ">{tipoexplosivo}</td>
              <td className="data-cell ">{vodpromedio}</td>
              <td className="data-cell ">{probecable?'SI':'NO'}</td>
              <td className="data-cell ">{cablecoaxial}</td>
              <td className="data-cell ">
              <div className='horizontal-container '>
                    <Button className='button-options'
                      onClick={() => editData({
                        nrovoladura,nrotaladros,profundidadtaladro,densidad,sobreperforacion,agua,taco,
                        tipotaco,longitudcarga,booster,tipodetonador,tipoexplosivo,vodpromedio,probecable,cablecoaxial, vid
                      })}
                    ><HiPencil /></Button>
                    <Button className='btn btn-danger'
                    onClick={() => deletData(vid)}

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


