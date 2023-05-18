import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {TableVoladura,FormularioVoladura} from '../componentes';
import { VoladuraSeleccionada } from '../componentes/VoladuraSeleccionada';
import { VoladuraContext } from '../context/VoladuraContext';

export const Voladuras = () => {
  const [datos, setData]= useState({
    total: 1, voladuras: [{
      nroVoladura:0, 
      fecha:"",
      fase:"",
      nivel:0,
    malla:"",
    }]
  });

  const {getDataGeneral,state}=useContext(VoladuraContext)
  console.log('HOLA GIAN', state)
  useEffect(() => {
    getDataGeneral(4);

    axios.get('http://localhost:8081/api/voladuras')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <FormularioVoladura />
      <VoladuraSeleccionada/>
      <TableVoladura total={datos.total} voladuras={datos.voladuras}/>
    </div>
    </div>
  );
}
