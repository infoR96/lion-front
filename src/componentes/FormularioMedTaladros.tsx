import axios from 'axios';
import { Formik, Field, Form, useField, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import { MedTaladros } from '../interfaces.tsx/interfaces';

export const FormularioMedTaladros = (data:MedTaladros) => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data || {
            nrovoladura: 34,
            perforados: 229,
            tapados: 0,
            reperforados: 0,
            adicional: 0,
            aguamenorauno: 29,
            aguamayorauno: 142,
            metrosperforados: 2389,
        },
        onSubmit: (data) => {
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/medtaladros`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/medtaladros/${data.vid}`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }
        },validationSchema:Yup.object({
                    nrovoladura: Yup.number()
                        .required(),
                    perforados: Yup.number().
                        required('Requerido'),
                    tapados: Yup.number().
                        required('Requerido'),
                    reperforados: Yup.number().
                        required('Requerido'),
                    adicional: Yup.number().
                        required('Requerido'),
                    aguamenorauno: Yup.number().
                        required('Requerido'),
                    aguamayorauno: Yup.number().
                        required('Requerido'),
                    metrosperforados: Yup.number().
                        required('Requerido'),
                   
                })
            });
            return (
                <div className='col my-4'>
                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="nrovoladura">nrovoladura</label>
                        <input
                            type="number"
                            {... getFieldProps('nrovoladura')}/>
        
                        {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}

                        <label htmlFor="perforados">Perforados</label>
                        <input
                            type="number"
                            {... getFieldProps('perforados')}/>
                        
                        {touched.perforados && errors.perforados && <span>{errors.perforados}</span>}
                        <label htmlFor="tapados">Tapados</label>
                        <input
                            type="number"
                            {... getFieldProps('tapados')}/>
                            {touched.tapados && errors.tapados && <span>{errors.tapados}</span>}
        
                        <label htmlFor="reperforados">Reperforados</label>
                        <input
                            type="number"
                            {... getFieldProps('reperforados')}/>
                            {touched.reperforados && errors.reperforados && <span>{errors.reperforados}</span>}
                        
                        <label htmlFor="adicional">Adicional</label>
                        <input
                            type="number"
                            {... getFieldProps('adicional')}/>
                            {touched.adicional && errors.adicional && <span>{errors.adicional}</span>}
                       
                        <label htmlFor="aguamenorauno">Agua menor a uno</label>
                        <input
                            type="number"
                            {... getFieldProps('aguamenorauno')}/>
                            {touched.aguamenorauno && errors.aguamenorauno && <span>{errors.aguamenorauno}</span>}
                        
                        <label htmlFor="agua mayor a uno">Agua mayor a uno</label>
                        <input
                            type="number"
                            {... getFieldProps('aguamayorauno')}/>
                            {touched.aguamayorauno && errors.aguamayorauno && <span>{errors.aguamayorauno}</span>}
                
                        <label htmlFor="metrosperforados">Metros perforados</label>
                        <input
                            type="number"
                            {... getFieldProps('metrosperforados')}/>
                            {touched.metrosperforados && errors.metrosperforados && <span>{errors.metrosperforados}</span>}
                
        
                            {
                            data.vid?
                            <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                            <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                        }
        
                    </form>
        
                </div>
            )
        
        }
