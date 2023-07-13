import React from 'react'
import {
  FormularioVod,
  TableVod,
} from '../componentes';


export const Vod = () => {
  return (
    <div >
      <div className=" row justify-content-center">
        <h1>VELOCIDAD DE DETONACION</h1>
        <FormularioVod nrovoladura={0} nrotaladros={0} 
        profundidadtaladro={0} densidad={0} sobreperforacion={0}
         agua={false} taco={0} tipotaco={''} longitudcarga={0}
         booster={0} tipodetonador={''} tipoexplosivo={''} 
         vodpromedio={0} probecable={false} cablecoaxial={0} vid={''}/>
        <TableVod />
      </div>
    </div>
  );
}
