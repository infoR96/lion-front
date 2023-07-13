import React from 'react'
import { FormularioDensidad } from '../componentes'
import { TableDensidad } from '../componentes/TablaDensidad'

export const Densidad = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>CONTROL DE DENSIDAD</h1>
      <FormularioDensidad nrovoladura={0} horainicio={''} horafin={''} tipomezcla={''} densidadinicial={0} densidadfinal={0} camion={''} vid={''} />
      <TableDensidad />
    </div>
    </div>
  )
}
