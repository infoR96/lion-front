import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Densidad, GeneralData, Voladura } from '../interfaces.tsx/interfaces';
import { voladuraReducer } from './VoladuraReducer';

interface VoladuraProps {
    state:Voladura,
    // getDensidad:(nro:number)=>void
    getDataGeneral:(nro:number)=>void

}

const voladuranicialState: Voladura = {
    densidad: {
        registrado: false,
        horaInicio: '',
        horaFin: '',
        tipoMezcla: '',
        densidadIninicial:0,
        densidadFinal:0 ,
        camion: ''

 },
 generalData:{
     registrado:false,
    nroVoladura: 0,
    fecha: '',
    fase: '',
    nivel: 0,
    malla: ''
 },
 vod:{
    registrado:false,
    nroTaladro: 124,
    profundidadTaladro: 10,
    densidad: 1.33,
    sobrePerforacion: 0.5,
    agua: true,
    taco: 5.8,
    tipoTaco: 'Detritus',
    longitudCarga: 4.7,
    booster: 900,
    tipoDetonador: 'NO ELECTRICO',
    tipoExplosivo: 'RIOFLEX 7000',
    vodPromedio: 6754,
    probecable: 1,
    cableCoaxial: 30,
    diametro: 9
},
 sismografia:{
    nroVoladura:0,
    registrado:false,
    ptoMoni: 'P42',
    distancia: 299,
    cargaOperante:300,
    vppDiseno:6.67,
    vppReal:9.3,
    k:1500,
    alpha:1.9,
    vid:''
},
 medTaladros:{
    registrado:false,
    perforados: 229,
    tapados: 0,
    reperf: 0,
    adicional: 0,
    aguaMenor: 29,
    aguaMayor: 142,
    metrosPerforados: 2389,
    Obeservaciones: 'Precorte'
 },
 disenoVol:{
    registrado:false,
    tipoExplosivo: 'ANFO',
    kgExplosivo: '273_300',
    nroVoladura:0,
    vid:''
 },
 disenoPer:{
    nrovoladura:0,
    burden: 4,
    espaciamiento: 4,
    dureza: 'DURO',
    vid:''
 }
 
}

export const VoladuraContext  = createContext({} as VoladuraProps);

export const VoladuraProvider = ({ children }: any) => {

    const [state, dispathc] = useReducer(voladuraReducer, voladuranicialState)
   
    const getDataGeneral = async (nro:Number) => {

        console.log('General data Funcional')
    
        try {
           
            const resp:GeneralData ={
                registrado:true,
                nroVoladura: 12,
                fecha: '08/05/2023',
                fase: '8DC',
                nivel: 4,
                malla: 'TRIANGULAR'
            }
            
            
            dispathc({
                type:'DataGeneral',
                payload:resp

            });

        } catch (error: any) {
            console.log('error en la peticion');
    
        }   
    }
    const getDesnsidad = async (nro:Number) => {
        try {
            const resp:Densidad ={
                registrado: false,
                horaInicio: '8:45',
                horaFin: '9:00',
                tipoMezcla: 'ANFO',
                densidadIninicial: 0.771,
                densidadFinal: 1.06,
                camion: 'MACK'
            }
            
            dispathc({
                type:'Densidad',
                payload:resp
            });
            // await localStorage.setItem('token',resp.data.token)


        } catch (error: any) {
            console.log('error en la peticion', error.response.data);
            // dispathc({type:'addError',payload:error.response.data.msg || 'Informacion Incorrecta'})
        }

     }
    return (
        <VoladuraContext.Provider  value={{
            state,
            getDataGeneral,
            }
        } >
            {children}
        </VoladuraContext.Provider>
    )


}