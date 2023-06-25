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
    id:string
}

export const FormularioVoladura = (data:FormValues) => {
    console.log('DATA', data)
    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data  || {
            nrovoladura: 0,
            fecha:new Date(),
            fase: '',
            nivel: 0,
            malla: ''
        },
        onSubmit: (values) => {
           if(!values.id){
            axios.post('http://localhost:8081/api/voladuras', values)
                .then(response => {
                    console.log('Se envió la información correctamente', response.data);
                })
                .catch(error => {
                    console.log('Error al enviar la información', error);
                });
            }else{
                console.log('mira',values.id)
            }

        },
        validationSchema: Yup.object({
            nrovoladura: Yup.number()
                            .required('Requerido'),

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
                 {touched.fase && errors.fase && <span>{errors.fase}</span>}
                <label htmlFor="nivel">Nivel</label>
                <input
                    type="number"
                    {... getFieldProps('nivel')}/>
                    {touched.nivel && errors.nivel && <span>{errors.nivel}</span>}
                <label htmlFor="malla">Malla</label>
                <input
                    type="text"
                    {... getFieldProps('malla')}/>
                {touched.malla && errors.malla && <span>{errors.malla}</span>}

                {
                    data.id?
                    <button style={{width:90}} className='btn btn-primary' type="submit">Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                }

            </form>

        </div>
    )

}


