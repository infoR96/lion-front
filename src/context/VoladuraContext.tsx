import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { Voladura } from '../interfaces.tsx/interfaces';
import {
  LoginData,
  LoginResponse,
  RegisterData,
  UpdateContent,
  User
} from '../interfaces/interfaces';

type AuthContexProps = {
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData:RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}
const authInicialState: Voladura = {
    densidad: {
        nroVoladura: 34,
        registrado: true,
        horaInicio: '8:45',
        horaFin: '9:00',
        tipoMezcla: 'ANFO',
        densidadIninicial: 0.771,
        densidadFinal: 1.06,
        camion: 'MACK'

 },
 generalData:{
    nroVoladura: 0,
    fecha: '',
    fase: '',
    nivel: 0,
    malla: ''
 },
 vod:{
    nroVoladura: 0,
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
    nroVoladura: 0,
    ptoMoni: 'P42',
    distancia: 299,
    cargaOperante:300,
    vppDiseno:6.67,
    vppReal:9.3,
    k:1500,
    alpha:1.9 
},
 medTaladros:{
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
 },
 disenoVol:{
    nroVoladura: 0,
    tipoExplosivo: 'ANFO',
    kgExplosivo: '273_300',
 }
 disenoPer:'' ,
    user: null,
    errorMessage: ''
 
}
export const AuthContext  = createContext({} as AuthContexProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispathc] = useReducer(authReducer, authInicialState)

    useEffect(() => {
        checkToken();
        console.log('a verrrr')
    }, []);
       
    const checkToken = async()=>{
        const token = await localStorage.getItem('token'); // la peticion AsyncStorage requiere de un await antes
        
        if(!token) {
      
            return dispathc({type:'notAuthenticated'})}

        const {data,status} = await pushuApi.get('/auth') //desestructuracion de respuesta

        if(status!== 200){return dispathc({type:'notAuthenticated'}

        )}

        dispathc({
            type:'signUp',
            payload:{
                token:data.token,
                user:data.usuario
            }
        })
    }

    const signUp = async ({nombre,correo,password,rol,telefono} : RegisterData) => {
        try {
            const resp = await pushuApi.post<LoginResponse>('/usuarios', { correo, password,nombre,rol,telefono });
            dispathc({
                type:'signUp',
                payload:{
                    token:resp.data.token,
                    user: resp.data.usuario
                }

            });
            await localStorage.setItem('token',resp.data.token)


        } catch (error: any) {
            console.log('error en la peticion', error.response.data);
            dispathc({type:'addError',payload:error.response.data.msg || 'Informacion Incorrecta'})
        }

     }
    const signIn = async ({ correo, password }: LoginData) => {

    
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
        <AuthContext.Provider value={{
            ... state,
            
            signUp,
            signIn,
            logOut,
            removeError,

        }} >
            {children}
        </AuthContext.Provider>
    )


}