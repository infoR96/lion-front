
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
    nrovoladura:number;
    burden: number;
    espaciamiento: number;
    dureza: string;
    vid:string;
}
export interface DisenoVol{
    nrovoladura:number;
    tipoexplosivo:string;
    kgexplosivo:string;
    vid:string;
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
    nrovoladura:number;
    ptomoni: string;
    distancia: number;
    cargaoperante: number;
    vppdiseno: number;
    vppreal: number;
    k: number;
    alpha: number;
    vid:string;

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
    nrovoladura: number;
    fecha: Date;
    fase: string;
    nivel: number;
    malla: string;
    vid:string;
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

