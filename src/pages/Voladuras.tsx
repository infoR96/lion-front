import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import {FormularioVoladura, TableVoladura} from '../componentes';
import { VoladuraContext } from '../context/VoladuraContext';

export const Voladuras = () => {


  const {getDataGeneral,state}=useContext(VoladuraContext)
  useEffect(() => {
    getDataGeneral({nrovoladura:0, 
      fecha:new Date(),
      fase:"",
      nivel:0,
    malla:"",
    vid:""});

  }, []);

  return (
    <div className="container">
    <div  className=" row justify-content-center">
    <h1>DATOS GENERALES DE VOLADURA</h1>
      <h2>Nueva Voladura</h2>
      <FormularioVoladura nrovoladura={0} fecha={new Date()} fase={''} nivel={0} malla={''} id={''}/>
      <TableVoladura />
      
    </div>
    </div>
  );
}
