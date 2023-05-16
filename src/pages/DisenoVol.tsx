import React from 'react'
import { 
  FormularioDisenoVol,
  TableDiesenoVol,
} from '../componentes';


export const DisenoVol = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <FormularioDisenoVol />
      <TableDiesenoVol  total={3}  voladuras={[{
      nroVoladura:0, 
      tipoExplosivo:'ANFO',
      kgExplosivo:'90_220'
    }]}/>
    </div>
    </div>
  );
}
