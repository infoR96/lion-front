import axios from 'axios';
import { format } from 'date-fns';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';


interface FormValues {
    nrovoladura: number;
    fecha: Date
    fase: string;
    nivel: number;
    malla: string;
}

export const FormularioVoladura = (data:FormValues) => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data  || {
            nrovoladura: 0,
            fecha:new Date(),
            fase: '',
            nivel: 0,
            malla: ''
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

            fecha: Yup.string().
                        required('Requerido'),
            fase: Yup.string().
                        required('Requerido'),
            nivel: Yup.number().
                        required('Requerido'),
            malla: Yup.string()
                      .required('Requerido')  
                    
        })
    });

    const fecha1= new Date(values.fecha).toISOString().split('T')[0]
    

    return (
        <div className='col my-4'>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="nroVoladura">nroVoladura</label>
                <input
                    type="number"
                    {... getFieldProps('nrovoladura')}/>

                {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}
                <label htmlFor="fecha">Fecha</label>
                <input
                    type="Date"
                    {... getFieldProps('fecha')}
                    value={fecha1}/>
                
                {touched.fecha && errors.fecha && <span>{`${errors.fecha}`}</span>}
                <label htmlFor="fase">fase</label>
                <input
                    type="text"
                    {... getFieldProps('fase')}/>

                <label htmlFor="nivel">Nivel</label>
                <input
                    type="number"
                    {... getFieldProps('nivel')}/>
                    {touched.fase && errors.fase && <span>{errors.fase}</span>}
                <label htmlFor="malla">Malla</label>
                <input
                    type="text"
                    {... getFieldProps('malla')}/>
                {touched.malla && errors.malla && <span>{errors.malla}</span>}
                <button type="submit">Submit</button>

            </form>

        </div>
    )

}


