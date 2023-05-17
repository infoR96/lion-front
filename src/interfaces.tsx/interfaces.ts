
export interface Densidad {
    registrado: boolean;
    horaInicio: string,
    horaFin: string,
    tipoMezcla: string,
    densidadIninicial: number,
    densidadFinal: number,
    camion: string
}

export interface DisenoPer {
    registrado: boolean;
    burden: number;
    espaciamiento: number;
    dureza: string
}
export interface DisenoVol{
    registrado: boolean;
    tipoExplosivo:string;
    kgExplosivo:string;
}
export interface MedTaladros{
    registrado: boolean;
  perforados:number,
  tapados:number,
  reperf:number,
  adicional:number,
  aguaMenor:number,
  aguaMayor:number,
  metrosPerforados:number,
  Obeservaciones:string
}
export interface Sismografia{
    registrado: boolean;
    ptoMoni: string;
    distancia: number;
    cargaOperante: number;
    vppDiseno: number;
    vppReal: number;
    k: number;
    alpha: number;

}
export interface Vod {
    registrado: boolean;
    nroTaladro:number;
    profundidadTaladro:number;
    densidad:number;
    sobrePerforacion:number;
    agua:boolean;
    taco:number;
    tipoTaco:string;
    longitudCarga:number;
    booster:number;
    tipoDetonador:string;
    tipoExplosivo:string;
    vodPromedio:number;
    probecable:number;
    cableCoaxial:number;
    diametro:number;
}
export interface GeneralData{
    nroVoladura: number;
    registrado: boolean;
    fecha: string;
    fase: string;
    nivel: number;
    malla: string;
}

export interface Voladura{
    generalData:GeneralData;
    vod:Vod;
    sismografia:Sismografia;
    medTaladros:MedTaladros;
    disenoVol:DisenoVol;
    disenoPer:DisenoPer;
    densidad:Densidad;
}

