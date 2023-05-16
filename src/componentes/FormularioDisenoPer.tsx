import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';


export const FormularioDisenoPer = () => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: {
            nroVoladura: 0,
            burden: '4',
            espaciamiento: '4',
            dureza: 'DURO'
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

            burden: Yup.number().
                        required('Requerido'),
            espaciamiento: Yup.number().
                        required('Requerido'),
            dureza: Yup.string().
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
                <label htmlFor="burden">Burden</label>
                <input
                    type="number"
                    {... getFieldProps('burden')}/>
                
                {touched.burden && errors.burden && <span>{errors.burden}</span>}
                <label htmlFor="espaciamiento">Espaciamiento</label>
                <input
                    type="number"
                    {... getFieldProps('espaciamiento')}/>

                <label htmlFor="Dureza">Dureza</label>
                <input
                    type="text"
                    {... getFieldProps('Dureza')}/>
                    {touched.dureza && errors.dureza && <span>{errors.dureza}</span>}
        

                <button type="submit">Submit</button>

            </form>

        </div>
    )

}


