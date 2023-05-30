import {   TableDiesenoVol} from '../componentes';

export const DisenoVol = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISENO DE CONEXION DE VOLADURA</h1>
      <TableDiesenoVol  total={3}  voladuras={[{
      registrado:false,
      nroVoladura:0, 
      tipoExplosivo:'ANFO',
      kgExplosivo:'90_220',
      vid:''
    }]}/>
    </div>
    </div>
  );
}
