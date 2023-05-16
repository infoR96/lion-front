import React from 'react'
import { FormularioDensidad } from '../componentes'
import { TableDensidad } from '../componentes/TablaDensidad'

export const Densidad = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISEÑO DE MALLA DE PERFORACIÓN</h1>
      <FormularioDensidad />
      <TableDensidad  total={3}  voladuras={[{
      nroVoladura:45, 
      registrado: true,
      horaInicio: '8:45',
      horaFin: '9:00',
      tipoMezcla: 'ANFO',
      densidadIninicial: 0.771,
      densidadFinal: 1.06,
      camion: 'MACK'
    }]}/>
    </div>
    </div>
  )
}
