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
    <h2>Nueva Sismografia</h2>
    <FormularioSismografia nrovoladura={0} ptomoni={''} distancia={0} cargaoperante={0} vppdiseno={0} vppreal={0} k={0} alpha={0} vid={''}/>
      <TableSismografia  />
    </div>
    </div>
  );
}
