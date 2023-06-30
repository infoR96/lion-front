import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DisenoPer } from '../interfaces.tsx/interfaces';


export const FormularioDisenoPer = (data:DisenoPer) => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data||{
            nrovoladura: 0,
            burden: '4',
            espaciamiento: '4',
            dureza: 'DURO',
        },
        onSubmit: (data) => {
            console.log('DATOOOOS',values)
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/disenoPerforacion`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                    window.location.reload();
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/disenoPerforacion/${data.vid}`, data)
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
                            .required('Requerido'),

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
                <label htmlFor="nrovoladura">nroVoladura</label>
                <input
                    type="number"
                    {... getFieldProps('nrovoladura')}/>
                {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}

                <label htmlFor="burden">Burden</label>
                <input
                    type="number"
                    {... getFieldProps('burden')}/>
                
                {touched.burden && errors.burden && <span>{errors.burden}</span>}

                <label htmlFor="espaciamiento">Espaciamiento</label>
                <input
                    type="number"
                    {... getFieldProps('espaciamiento')}/>
                  {touched.espaciamiento && errors.espaciamiento && <span>{errors.espaciamiento}</span>}
                <label htmlFor="Dureza">Dureza</label>
                <input
                    type="text"
                    {... getFieldProps('dureza')}/>
                    {touched.dureza && errors.dureza && <span>{errors.dureza}</span>}
        
                    {
                    data.vid?
                    <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                }

            </form>

        </div>
    )

}


