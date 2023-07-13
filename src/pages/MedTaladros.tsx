
import { FormularioMedTaladros, TableMedTaladros } from '../componentes'
export const MedTaladros = () => {
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <h1>MEDICION DE TALADROS</h1>
        <FormularioMedTaladros nrovoladura={0} perforados={0} tapados={0} reperforados={0} adicional={0} aguamenorauno={0} aguamayorauno={0} metrosperforados={0} vid={''} />
        <TableMedTaladros  />
      </div>
    </div>
  )
}
