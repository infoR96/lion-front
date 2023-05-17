import { Densidad, DisenoPer, DisenoVol, GeneralData, MedTaladros, Sismografia, Vod, Voladura } from "../interfaces.tsx/interfaces";

type AuthAction = 
    | {type: 'getDensidad', payload: Densidad}
    | {type: 'getDisenoPer', payload: { disenoPer:DisenoPer  }}
    | {type: 'getDisenoVol', payload: DisenoVol}
    | {type: 'getMedTaladros',payload:MedTaladros}
    | {type: 'getSismografia',payload:Sismografia}
    | {type: 'getVod',payload:Vod}
    | {type: 'getDataGeneral',payload:GeneralData}


    //state de tipo AuthState y lo que retorne la funcion tambien debera ser de tipo AuthState
export const authReducer = (state:Voladura, action:AuthAction): Voladura =>{

    switch (action.type) {
        case 'getDensidad':
            return{
                ...state,
                densidad:action.payload

            };
        case 'removeError':
            return{
                ...state,
                errorMessage:''
            };
        case 'signUp':
            return{
                ...state,
                errorMessage:'',
                status:'authenticated',
                token:action.payload.token,
                user: action.payload.user


            };
        case 'logout':     
        case 'notAuthenticated':
            return{
                ...state,
                status:'not-authenticated',
                token:null,
                user:null

            };


        default:
            return state; // en caso de enviar una accion no definida
                        // debera retornar el mismo status.
    }

}