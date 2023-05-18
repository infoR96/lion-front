import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Densidad, GeneralData, Voladura } from '../interfaces.tsx/interfaces';
import { voladuraReducer } from './VoladuraReducer';

interface VoladuraProps extends Voladura{
    getDensidad:(nro:number)=>void

}


const voladuraInicialState: Voladura = {
    densidad: {
        registrado: false,
        horaInicio: '8:45',
        horaFin: '9:00',
        tipoMezcla: 'ANFO',
        densidadIninicial: 0.771,
        densidadFinal: 1.06,
        camion: 'MACK'

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
    registrado:false,
    ptoMoni: 'P42',
    distancia: 299,
    cargaOperante:300,
    vppDiseno:6.67,
    vppReal:9.3,
    k:1500,
    alpha:1.9 
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
 },
 disenoPer:{
    registrado:false,
    burden: 4,
    espaciamiento: 4,
    dureza: 'DURO'
 }
 
}
export const VoladuraContext  = createContext({} as VoladuraProps);

export const VoladuraProvider = ({ children }: any) => {

    const [state, dispathc] = useReducer(voladuraReducer, voladuraInicialState)

    useEffect(() => {

        console.log('a verrrr')
    }, []);
       

    const getDesnsidad = async ({ registrado,horaInicio,horaFin,tipoMezcla,densidadIninicial,densidadFinal,camion} : Densidad) => {
        try {
            
            dispathc({
                type:'Densidad',
                payload:{
                    registrado,horaInicio,horaFin,tipoMezcla,densidadIninicial,densidadFinal,camion
                }

            });
            // await localStorage.setItem('token',resp.data.token)


        } catch (error: any) {
            console.log('error en la peticion', error.response.data);
            // dispathc({type:'addError',payload:error.response.data.msg || 'Informacion Incorrecta'})
        }

     }
    const getDataGeneral = async ({ correo, password }: GeneralData) => {

    
        try {
           
            const resp = await pushuApi.post<LoginResponse>('/auth/login', { correo, password });
            dispathc({
                type:'signUp',
                payload:{
                    token:resp.data.token,
                    user: resp.data.usuario
                }

            });
            await localStorage.setItem('token',resp.data.token)


        } catch (error: any) {
            console.log('error en la peticion', error.response.data.msg);
            dispathc({type:'addError',payload:error.response.data.msg || 'Informacion Incorrecta'})
        }
         
    };
    const logOut = async() => {
        await localStorage.removeItem('token');
        dispathc({type:'logout'})


     };
    const removeError = () => { 
        dispathc({type:'removeError'})
    };




    return (
        <VoladuraContext.Provider value={{
            ... state,
            
            getDensidad,

        }} >
            {children}
        </VoladuraContext.Provider>
    )


}