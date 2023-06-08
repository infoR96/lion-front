import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {TableVoladura} from '../componentes';
import { VoladuraContext } from '../context/VoladuraContext';

export const Voladuras = () => {
  const [datos, setData]= useState({
    total: 1, voladuras: [{
      nroVoladura:0, 
      fecha:"",
      fase:"",
      nivel:0,
    malla:"",
    vid:""
    }]
  });

  const {getDataGeneral,state}=useContext(VoladuraContext)
  useEffect(() => {
    getDataGeneral({nrovoladura:0, 
      fecha:"",
      fase:"",
      nivel:0,
    malla:"",
    vid:""});

    axios.get('http://localhost:8081/api/voladuras')
      .then(response => {
        console.log('DATS:',response)
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
      <TableVoladura total={datos.total} voladuras={datos.voladuras}/>
    </div>
    </div>
  );
}
