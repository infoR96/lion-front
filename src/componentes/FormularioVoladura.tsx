import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { GeneralData } from '../interfaces.tsx/interfaces';


export const FormularioVoladura = (data:GeneralData) => {
    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data  || {
            nrovoladura: 0,
            fecha:new Date(),
            fase: '',
            nivel: 0,
            malla: ''
        },
        onSubmit: (values) => {
            console.log('SE IMPRIME')
           if(!values.vid){
            axios.post(`${process.env.REACT_APP_API_URL}/voladuras`, values)
                .then(response => {
                    console.log('Se envió la información correctamente', response.data);
                })
                .catch(error => {
                    console.log('Error al enviar la información', error);
                });
                window.location.reload();
            }else{
                axios.put(`${process.env.REACT_APP_API_URL}/voladuras/${data.vid}`, values)
                .then(response => {
                    console.log('Se envió la información correctamente', response.data);
                })
                .catch(error => {
                    console.log('Error al enviar la información', error);
                });
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
                <label htmlFor="nrovoladura">nroVoladura</label>
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
                    data.vid?
                    <button style={{width:90}} className='btn btn-primary' type="submit">Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                }

            </form>

        </div>
    )

}


