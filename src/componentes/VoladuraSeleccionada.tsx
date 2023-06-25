import React, { useContext, useEffect } from 'react'
import { VoladuraContext } from '../context/VoladuraContext'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


type SelectProps = {
    show:boolean;
    id:string;
    closeSelect:()=>void; 
  }
export const VoladuraSeleccionada = ({closeSelect,show,id='64797186af2d1352cd822db5'}:SelectProps) => {
    const {state, getDataGeneral} = useContext(VoladuraContext)
    useEffect(() => {
        console.log('enserio',id)
    axios.get(`http://localhost:8081/api/disenoPerforacion/${id}`)
    .then(response => {
        console.log('respuesta rapida',response.data)

    })
    .catch(error => {
      console.log(error);
    });
    }, [])
    const {generalData,disenoPer,disenoVol,sismografia,vod,densidad,medTaladros}=state
    
    return (
<>
      <Modal
        className=''
        show={show}
        onHide={closeSelect}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton className='bg-dark modal-select'> 
          <Modal.Title >Editar datos</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
        <div className='bg-white rounded '>
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
                        <td className="data-cell ">{generalData.nrovoladura}</td>
                        <td className="data-cell ">{`${generalData.fecha}`}</td>
                        <td className="data-cell ">{generalData.fase}</td>
                        <td className="data-cell ">{generalData.nivel}</td>
                        <td className="data-cell ">{generalData.malla}</td>

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
                        <td className="data-cell ">{disenoPer.burden}</td>
                        <td className="data-cell ">{disenoPer.espaciamiento}</td>
                        <td className="data-cell ">{disenoPer.dureza}</td>

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
                        <td className="data-cell ">{disenoVol.tipoExplosivo}</td>
                        <td className="data-cell ">{disenoVol.kgExplosivo}</td>
                        <td className="data-cell ">{disenoPer.dureza}</td> 
                        {/* VER LA POSIBILIDAD DE CAMBIO EN LA DUREZA DE VOLADURA */}

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
                        <td className="data-cell ">{sismografia.ptoMoni}</td>
                        <td className="data-cell ">{sismografia.distancia}</td>
                        <td className="data-cell ">{sismografia.cargaOperante}</td>
                        <td className="data-cell ">{sismografia.vppDiseno}</td>
                        <td className="data-cell ">{sismografia.vppReal}</td>
                        <td className="data-cell ">{sismografia.k}</td>
                        <td className="data-cell ">{sismografia.alpha}</td>

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
                        <td className="data-cell ">{vod.profundidadTaladro}</td>
                        <td className="data-cell ">{vod.densidad}</td>
                        <td className="data-cell ">{vod.sobrePerforacion}</td>
                        <td className="data-cell ">{vod.agua}</td>
                        <td className="data-cell ">{vod.taco}</td>
                        <td className="data-cell ">{vod.tipoTaco}</td>
                        <td className="data-cell ">{vod.longitudCarga}</td>

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
                        <td className="data-cell ">{vod.booster}</td>
                        <td className="data-cell ">{vod.tipoDetonador}</td>
                        <td className="data-cell ">{vod.tipoExplosivo}</td>
                        <td className="data-cell ">{vod.vodPromedio}</td>
                        <td className="data-cell ">{vod.probecable}</td>
                        <td className="data-cell ">{vod.cableCoaxial}</td>
                        <td className="data-cell ">{vod.diametro}</td>

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
                        <td className="data-cell ">{densidad.horaInicio}</td>
                        <td className="data-cell ">{densidad.horaFin}</td>
                        <td className="data-cell ">{densidad.tipoMezcla}</td>
                        <td className="data-cell ">{densidad.densidadIninicial}</td>
                        <td className="data-cell ">{densidad.densidadFinal}</td>
                        <td className="data-cell ">{densidad.camion}</td>
                        

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
                        <td className="data-cell ">{medTaladros.perforados}</td>
                        <td className="data-cell ">{medTaladros.tapados}</td>
                        <td className="data-cell ">{medTaladros.perforados}</td>
                        <td className="data-cell ">{medTaladros.adicional}</td>
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
                        <td className="data-cell ">{medTaladros.aguaMenor}</td>
                        <td className="data-cell ">{medTaladros.aguaMayor}</td>
                        <td className="data-cell ">{medTaladros.metrosPerforados}</td>
                        <td className="data-cell ">{medTaladros.Obeservaciones}</td>
                    </tr>

                </tbody>
            </table>
        </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={closeSelect}>
            Close
          </Button>
          <Button variant="primary" >Understood</Button>
        </Modal.Footer>
      </Modal>
    </>

        
    )
}
