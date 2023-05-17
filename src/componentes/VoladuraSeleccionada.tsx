import React from 'react'

export const VoladuraSeleccionada = () => {
    return (
        <div className='bg-white rounded mt-5 col-6'>
            <h2 className='text-dark'> Voladura Seleccionada</h2>
            
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " key='key'>Nro</th>
                        <th className="header-cell " >Fecha</th>
                        <th className="header-cell " >Fase</th>
                        <th className="header-cell " >Nivel</th>
                        <th className="header-cell " >Malla</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'> Diseno de Perforacion</h4>
            
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Burden</th>
                        <th className="header-cell " >Espaciamiento</th>
                        <th className="header-cell " >Dureza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'> Diseno de Voladura</h4>
            
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Tipo de Explosivo</th>
                        <th className="header-cell " >Total kg de Explosivo</th>
                        <th className="header-cell " >Dureza</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'>Sismografia</h4>
            
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Punto Monitoreado</th>
                        <th className="header-cell " >Distancia</th>
                        <th className="header-cell " >Carga Operante</th>
                        <th className="header-cell " >VPP Diseno</th>
                        <th className="header-cell " >VPP Real</th>
                        <th className="header-cell " >K</th>
                        <th className="header-cell " >Alpha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'>VOD</h4>
            
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Profundidad de Taladro</th>
                        <th className="header-cell " >Densidad</th>
                        <th className="header-cell " >Sobre Perforacion</th>
                        <th className="header-cell " >Agua</th>
                        <th className="header-cell " >Taco</th>
                        <th className="header-cell " >Tipo de Taco</th>
                        <th className="header-cell " >Longitud de Carga</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Booster</th>
                        <th className="header-cell " >Tipo de Detonador</th>
                        <th className="header-cell " >Tipo de Explosivo</th>
                        <th className="header-cell " >VOD Promedio</th>
                        <th className="header-cell " >ProbeCable</th>
                        <th className="header-cell " >Cable Coaxial</th>
                        <th className="header-cell " >Diametro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'>Densidad</h4>
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Hora de Inicio</th>
                        <th className="header-cell " >Hora de Fin</th>
                        <th className="header-cell " >Tipo de Mezcla</th>
                        <th className="header-cell " >Densidad Inicial</th>
                        <th className="header-cell " >Densidad Final</th>
                        <th className="header-cell " >Camion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        

                    </tr>

                </tbody>
            </table>
            <h4 className='text-dark'>Medicion de Taladros</h4>
            <table className="table " >
                <thead>
                    <tr>
                        <th className="header-cell " >Perforados</th>
                        <th className="header-cell " >Tapados</th>
                        <th className="header-cell " >Reperforacion</th>
                        <th className="header-cell " >Adicional</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                    </tr>

                </tbody>
            </table>
            <table className="table " >
                <thead>
                    <tr>
                       
                        <th className="header-cell " >{`Agua < 1m`}</th>
                        <th className="header-cell " >{`Agua > 1m`}</th>
                        <th className="header-cell " >Metros Perforados</th>
                        <th className="header-cell " >Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                        <td className="data-cell "></td>
                     
                        

                    </tr>

                </tbody>
            </table>
        </div>
    )
}
