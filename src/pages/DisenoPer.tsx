import React from 'react'
import { 
  FormularioDisenoPer,
  FormularioVoladura,
  TableDisenoPer,
  TableVoladura } from '../componentes';


export const DisenoPer = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISEÑO DE MALLA DE PERFORACIÓN</h1>
      <TableDisenoPer  total={3}  voladuras={[{
      registrado:false,
      nroVoladura:0, 
      burden:0,
      espaciamiento:0,
      dureza:"MEDIO",
      vid:''
    }]}/>
    </div>
    </div>
  );
}
