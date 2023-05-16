import React from 'react'
import { 
  FormularioSismografia,
  TableSismografia,
} from '../componentes';


export const Sismografia = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>SISMOGRAFIA</h1>
      <FormularioSismografia />
      <TableSismografia  total={3}  voladuras={[{
      nroVoladura:0, 
      ptoMoni:'P42',
      distancia:299,
      cargaOperante:300,
      vppDiseno:6.67,
      vppReal:9.3,
      k:1500,
      alpha:1.9
    }]}/>
    </div>
    </div>
  );
}
