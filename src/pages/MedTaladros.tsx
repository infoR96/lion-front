
import { FormularioMedTaladros, TableMedTaladros } from '../componentes'
export const MedTaladros = () => {
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <h1>MEDICION DE TALADROS</h1>
        <FormularioMedTaladros />
        <TableMedTaladros total={3} voladuras={[{
          nroVoladura: 34,
          medido: true,
          perforados: 229,
          tapados: 0,
          reperf: 0,
          adicional: 0,
          aguaMenor: 29,
          aguaMayor: 142,
          metrosPerforados: 2389,
          Obeservaciones: 'Precorte'

        }]} />
      </div>
    </div>
  )
}
