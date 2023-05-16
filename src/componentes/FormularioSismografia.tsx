import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';


export const FormularioSismografia = () => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: {
            nroVoladura: 0,
            ptoMoni: 'P42',
            distancia: 299,
            cargaOperante:300,
            vppDiseno:6.67,
            vppReal:9.3,
            k:1500,
            alpha:1.9 
        },
        onSubmit: (values) => {
            axios.post('http://localhost:8081/api/voladuras', values)
                .then(response => {
                    console.log('Se envió la información correctamente', response.data);
                })
                .catch(error => {
                    console.log('Error al enviar la información', error);
                });
        },
        validationSchema: Yup.object({
            nroVoladura: Yup.number()
                            .required(),

            ptoMoni: Yup.number().
                        required('Requerido'),
            distancia: Yup.number().
                        required('Requerido'),
            cargaOperante: Yup.number().
                        required('Requerido'),
          
            vppDiseno: Yup.number().
                        required('Requerido'),
          
            vppReal: Yup.number().
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
                <label htmlFor="nroVoladura">nroVoladura</label>
                <input
                    type="number"
                    {... getFieldProps('nroVoladura')}/>

                {touched.nroVoladura && errors.nroVoladura && <span>{errors.nroVoladura}</span>}
                <label htmlFor="ptoMoni">Punto Monitoreado</label>
                <input
                    type="string"
                    {... getFieldProps('ptoMoni')}/>
                
                {touched.ptoMoni && errors.ptoMoni && <span>{errors.ptoMoni}</span>}
                <label htmlFor="distancia">Distancia</label>
                <input
                    type="number"
                    {... getFieldProps('distancia')}/>
                    {touched.distancia && errors.distancia && <span>{errors.distancia}</span>}

                <label htmlFor="cargaOperante">Carga Operante</label>
                <input
                    type="text"
                    {... getFieldProps('cargaOperante')}/>
                    {touched.cargaOperante && errors.cargaOperante && <span>{errors.cargaOperante}</span>}
                
                <label htmlFor="vppDiseno">VPP Diseno mm/s</label>
                <input
                    type="text"
                    {... getFieldProps('vppDiseno')}/>
                    {touched.vppDiseno && errors.vppDiseno && <span>{errors.vppDiseno}</span>}
               
                <label htmlFor="vppDiseno">VPP Real mm/s</label>
                <input
                    type="text"
                    {... getFieldProps('vppReal')}/>
                    {touched.vppReal && errors.vppReal && <span>{errors.vppReal}</span>}
                
                <label htmlFor="k">k</label>
                <input
                    type="text"
                    {... getFieldProps('k')}/>
                    {touched.k && errors.k && <span>{errors.k}</span>}
        
                <label htmlFor="alpha">alpha</label>
                <input
                    type="text"
                    {... getFieldProps('alpha')}/>
                    {touched.alpha && errors.alpha && <span>{errors.alpha}</span>}
        

                <button type="submit">Submit</button>

            </form>

        </div>
    )

}


