import React from 'react'
import { Formulario } from '../componentes/Formulario';
import Table from '../componentes/Tabla';

export const Voladuras = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <Formulario />
      <Table data={[{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },
      {
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },
      {
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      },{
        nroVoladura: 45,
        fecha: '10/05/2023',
        fase: 'la segunda',
        nivel: 4,
        malla: 'triagular'
      }]} />
    </div>
    </div>
  );
}
