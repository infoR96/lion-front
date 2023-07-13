
export interface Densidad {
    nrovoladura:number,
    horainicio: string,
    horafin: string,
    tipomezcla: string,
    densidadinicial: number,
    densidadfinal: number,
    camion: string,
    vid:string
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
  nrovoladura:number,  
  perforados:number,
  tapados:number,
  reperforados:number,
  adicional:number,
  aguamenorauno:number,
  aguamayorauno:number,
  metrosperforados:number,
  vid:string,
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
    nrovoladura:number;
    nrotaladros:number;
    profundidadtaladro:number;
    densidad:number;
    sobreperforacion:number;
    agua:boolean;
    taco:number;
    tipotaco:string;
    longitudcarga:number;
    booster:number;
    tipodetonador:string;
    tipoexplosivo:string;
    vodpromedio:number;
    probecable:boolean;
    cablecoaxial:number;
    vid:string;
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

