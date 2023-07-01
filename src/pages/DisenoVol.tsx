import {   FormularioDisenoVol, TableDiesenoVol} from '../componentes';

export const DisenoVol = () => {
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISENO DE CONEXION DE VOLADURA</h1>
    <h2>Nuevo Diseno de Voladura</h2>
    <FormularioDisenoVol nrovoladura={0} tipoexplosivo={''} kgexplosivo={''} vid={''}/>
      <TableDiesenoVol />
    </div>
    </div>
  );
}
