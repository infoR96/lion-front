import React from 'react'
import { 
  FormularioVod,
  TableSismografia,
  TableVod,
} from '../componentes';


export const Vod = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <FormularioVod />
      <TableVod  total={3}  voladuras={[{
      nroVoladura:7140,
      nroTaladro:124,
profundidadTaladro:10,
densidad:1.33 ,
sobrePerforacion:0.5,
agua:true,
taco:5.8,
tipoTaco:'Detritus',
longitudCarga:4.7,
booster:900,
tipoDetonador:'NO ELECTRICO',
tipoExplosivo:'RIOFLEX 700',
vodPromedio:6754,
probecable:1,
cableCoaxial:30,
diametro:40

    }]}/>
    </div>
    </div>
  );
}
