import React from 'react'
import { FormularioFragmentacion } from '../componentes'

export const Fragmentacion = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>FRAGMENTACION</h1>
      <FormularioFragmentacion />
      {/* <TableDiesenoVol  total={3}  voladuras={[{
      nroVoladura:0, 
      tipoExplosivo:'ANFO',
      kgExplosivo:'90_220'
    }]}/> */}
    </div>
    </div>
  )
}
