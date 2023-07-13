import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Densidad, GeneralData, Voladura } from '../interfaces.tsx/interfaces';
import { voladuraReducer } from './VoladuraReducer';

interface VoladuraProps {
    state:Voladura,
    // getDensidad:(nro:number)=>void
    getDataGeneral:(dataGeneral:GeneralData)=>void

}

const voladuranicialState: Voladura = {
    densidad: {
        nrovoladura:0 ,
        horainicio: '',
        horafin: '',
        tipomezcla: '',
        densidadinicial:0,
        densidadfinal:0 ,
        camion: '',
        vid:''

 },
 generalData:{
    nrovoladura: 0,
    fecha: new Date(),
    fase: '',
    nivel: 0,
    malla: '',
    vid:''
 },
 vod:{
     nrovoladura:3,
    nrotaladros: 124,
    profundidadtaladro: 10,
    densidad: 1.33,
    sobreperforacion: 0.5,
    agua: true,
    taco: 5.8,
    tipotaco: 'Detritus',
    longitudcarga: 4.7,
    booster: 900,
    tipodetonador: 'NO ELECTRICO',
    tipoexplosivo: 'RIOFLEX 7000',
    vodpromedio: 6754,
    probecable: true,
    cablecoaxial: 30,
    vid:''
},
 sismografia:{
    nrovoladura:0,
    ptomoni: 'P42',
    distancia: 299,
    cargaoperante:300,
    vppdiseno:6.67,
    vppreal:9.3,
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
    tipoexplosivo: 'ANFO',
    kgexplosivo: '273_300',
    nrovoladura:0,
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
   
    const getDataGeneral = (dataGeneral:GeneralData) => {

        try {
            
            dispathc({
                type:'DataGeneral',
                payload:dataGeneral

            });

        } catch (error: any) {
            console.log('error en la peticion');
    
        }   
    }
    const getDesnsidad = async (nro:Number) => {
        try {
            const resp:Densidad ={
                nrovoladura:0,
                horainicio: '8:45',
                horafin: '9:00',
                tipomezcla: 'ANFO',
                densidadinicial: 0.771,
                densidadfinal: 1.06,
                camion: 'MACK',
                vid:''
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