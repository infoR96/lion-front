import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableDisenoPer } from '../componentes';
import { DisenoPer } from '../interfaces.tsx/interfaces';

export const DisenoPerforacion = () => {
  const [datos, setData]= useState({
    total: 1, disenoPerforaciones: [{
      nrovoladura:55, 
      burden:5,
      espaciamiento:5,
      dureza:"",
      vid:"",
    }]
  });




  useEffect(() => {
    axios.get('http://localhost:8081/api/disenoPerforacion')
    .then(response => {
      setData(response.data)
    }).
    catch(error =>{
      console.log(error);
    })
  }, [])
  
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISEÑO DE MALLA DE PERFORACIÓN</h1>

      <TableDisenoPer  total={3}  voladuras={datos.disenoPerforaciones}/>
    </div>
    </div>
  );
}
