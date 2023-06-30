import { FormularioDisenoPer, TableDisenoPer } from '../componentes';

export const DisenoPerforacion = () => {
 
  
  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DISEÑO DE MALLA DE PERFORACIÓN</h1>
     <h2>Nuevo Diseno de Perforacion</h2>
     <FormularioDisenoPer nrovoladura={0} burden={0} espaciamiento={0} dureza={''} vid={''}/>
      <TableDisenoPer />
    </div>
    </div>
  );
}
