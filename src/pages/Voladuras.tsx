import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {TableVoladura,FormularioVoladura} from '../componentes';
import { VoladuraSeleccionada } from '../componentes/VoladuraSeleccionada';

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
  useEffect(() => {
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
