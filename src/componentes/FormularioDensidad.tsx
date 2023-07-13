import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Densidad } from '../interfaces.tsx/interfaces';

export const FormularioDensidad = (data:Densidad) => {
    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data || {
            nrovoladura: 34,
            horainicio: '8:45',
            horafin: '9:00',
            tipomezcla: 'ANFO',
            densidadinicial: 0.771,
            densidadfinal: 1.06,
            camion: 'MACK' 
        },   
        onSubmit: (data) => {
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/densidad`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/densidad/${data.vid}`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }
        },
            validationSchema:Yup.object({
                nrovoladura: Yup.number()
                    .required(),
                horainicio: Yup.string().
                    required('Requerido'),
                horafin: Yup.string().
                    required('Requerido'),
                tipomezcla: Yup.string().
                    required('Requerido'),
                densidadinicial: Yup.number().
                    required('Requerido'),
                densidadfinal: Yup.number().
                    required('Requerido'),
                camion: Yup.string().
                    required('Requerido'),
            
                })
            });


            return (
                <div className='col my-4'>
                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="nrovoladura">nroVoladura</label>
                        <input
                            type="number"
                            {... getFieldProps('nrovoladura')}/>
        
                        {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}

                        <label htmlFor="horainicio">Hora de Inicio</label>
                        <input
                            type="string"
                            {... getFieldProps('horainicio')}/>
                        
                        {touched.horainicio && errors.horainicio && <span>{errors.horainicio}</span>}
                        <label htmlFor="horafin">Hora de Fin</label>
                        <input
                            type="string"
                            {... getFieldProps('horafin')}/>
                            {touched.horafin && errors.horafin && <span>{errors.horafin}</span>}
        
                        <label htmlFor="tipomezcla">Tipo de Mezcla</label>
                        <input
                            type="string"
                            {... getFieldProps('tipomezcla')}/>
                            {touched.tipomezcla && errors.tipomezcla && <span>{errors.tipomezcla}</span>}
                        
                        <label htmlFor="densidadinicial">Densidad Inicial</label>
                        <input
                            type="number"
                            {... getFieldProps('densidadinicial')}/>
                            {touched.densidadinicial && errors.densidadinicial && <span>{errors.densidadinicial}</span>}
                       
                        <label htmlFor="densidadfinal">Densidad Final</label>
                        <input
                            type="number"
                            {... getFieldProps('densidadfinal')}/>
                            {touched.densidadfinal && errors.densidadfinal && <span>{errors.densidadfinal}</span>}
                        
                        <label htmlFor="camion">Camion</label>
                        <input
                            type="sting"
                            {... getFieldProps('camion')}/>
                            {touched.camion && errors.camion && <span>{errors.camion}</span>}
               
        
                            {
                            data.vid?
                            <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                            <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                        }
        
                    </form>
        
                </div>
            )
}
