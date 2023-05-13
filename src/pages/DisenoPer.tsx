import React from 'react'
import { Formulario } from '../componentes/Formulario';
import Table from '../componentes/Tabla';

export const DisenoPer = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <Formulario />
      <Table  total={3}  voladuras={[{
      nroVoladura:0, 
      fecha:"",
      fase:"",
      nivel:0,
    malla:"",
    }]}/>
    </div>
    </div>
  );
}
