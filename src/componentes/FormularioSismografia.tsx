import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';
import { Sismografia } from '../interfaces.tsx/interfaces';


export const FormularioSismografia = (data:Sismografia) => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data || {
            nrovoladura: 0,
            ptomoni: 'P42',
            distancia: 299,
            cargaoperante:300,
            vppdiseno:6.67,
            vppreal:9.3,
            k:1500,
            alpha:1.9 
        },
        onSubmit: (data) => {
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/sismografia`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/sismografia/${data.vid}`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }
        },
        validationSchema: Yup.object({
            nrovoladura: Yup.number()
                            .required(),

            ptomoni: Yup.string().
                        required('Requerido'),
            distancia: Yup.number().
                        required('Requerido'),
            cargaoperante: Yup.number().
                        required('Requerido'),
          
            vppdiseno: Yup.number().
                        required('Requerido'),
          
            vppreal: Yup.number().
                        required('Requerido'),
          
            k: Yup.number().
                        required('Requerido'),
          
            alpha: Yup.number().
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
                <label htmlFor="ptomoni">Punto Monitoreado</label>
                <input
                    type="string"
                    {... getFieldProps('ptomoni')}/>
                
                {touched.ptomoni && errors.ptomoni && <span>{errors.ptomoni}</span>}
                <label htmlFor="distancia">Distancia</label>
                <input
                    type="number"
                    {... getFieldProps('distancia')}/>
                    {touched.distancia && errors.distancia && <span>{errors.distancia}</span>}

                <label htmlFor="cargaoperante">Carga Operante</label>
                <input
                    type="number"
                    {... getFieldProps('cargaoperante')}/>
                    {touched.cargaoperante && errors.cargaoperante && <span>{errors.cargaoperante}</span>}
                
                <label htmlFor="vppdiseno">VPP Diseno mm/s</label>
                <input
                    type="number"
                    {... getFieldProps('vppdiseno')}/>
                    {touched.vppdiseno && errors.vppdiseno && <span>{errors.vppdiseno}</span>}
               
                <label htmlFor="vppdiseno">VPP Real mm/s</label>
                <input
                    type="number"
                    {... getFieldProps('vppreal')}/>
                    {touched.vppreal && errors.vppreal && <span>{errors.vppreal}</span>}
                
                <label htmlFor="k">k</label>
                <input
                    type="number"
                    {... getFieldProps('k')}/>
                    {touched.k && errors.k && <span>{errors.k}</span>}
        
                <label htmlFor="alpha">alpha</label>
                <input
                    type="number"
                    {... getFieldProps('alpha')}/>
                    {touched.alpha && errors.alpha && <span>{errors.alpha}</span>}
        

                    {
                    data.vid?
                    <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                }

            </form>

        </div>
    )

}


