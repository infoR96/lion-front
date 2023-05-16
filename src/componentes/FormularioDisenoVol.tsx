import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';


export const FormularioDisenoVol = () => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: {
            nroVoladura: 0,
            tipoExplosivo: 'ANFO',
            kgExplosivo: '273_300',
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

            tipoExplosivo: Yup.string().
                        required('Requerido'),
            kgExplosivo: Yup.string().
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
                <label htmlFor="tipoExplosivo">Tipo de Explosivo</label>
                <input
                    type="text"
                    {... getFieldProps('tipoExplosivo')}/>
                
                {touched.tipoExplosivo && errors.tipoExplosivo && <span>{errors.tipoExplosivo}</span>}
                <label htmlFor="kgExplosivo">Total Kg de Explosivo</label>
                <input
                    type="text"
                    {... getFieldProps('kgExplosivo')}/>
    
                <button type="submit">Submit</button>

            </form>

        </div>
    )

}


