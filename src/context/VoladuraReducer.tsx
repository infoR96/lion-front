import { Densidad, DisenoPer, DisenoVol, GeneralData, MedTaladros, Sismografia, Vod, Voladura } from "../interfaces.tsx/interfaces";

type AuthAction = 
    | {type: 'Densidad', payload: Densidad}
    | {type: 'DisenoPer', payload:DisenoPer}
    | {type: 'DisenoVol', payload: DisenoVol}
    | {type: 'MedTaladros',payload:MedTaladros}
    | {type: 'Sismografia',payload:Sismografia}
    | {type: 'Vod',payload:Vod}
    | {type: 'DataGeneral',payload:GeneralData}


    //state de tipo AuthState y lo que retorne la funcion tambien debera ser de tipo AuthState
export const voladuraReducer = (state:Voladura, action:AuthAction): Voladura =>{

    switch (action.type) {

        case 'DataGeneral':
            return{
                ...state,
                generalData:action.payload
            };
        case 'Densidad':
            return{
                ...state,
                densidad:action.payload
            };
        case 'DisenoPer':
            return{
                ...state,
                disenoPer:action.payload
            };
        case 'DisenoVol':
            return{
                ...state,
                disenoVol:action.payload
            };
        case 'MedTaladros':
            return{
                ...state,
                medTaladros:action.payload
            };
        case 'Sismografia':
            return{
                ...state,
                sismografia:action.payload
            };
        case 'Vod':
            return{
                ...state,
                vod:action.payload
            };
        


        default:
            return state; // en caso de enviar una accion no definida
                        // debera retornar el mismo status.
    }

}