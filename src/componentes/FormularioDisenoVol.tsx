import axios from 'axios';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { DisenoVol } from '../interfaces.tsx/interfaces';


export const FormularioDisenoVol = (data:DisenoVol) => {

    const {  values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data||{
            nrovoladura: 0,
            tipoexplosivo: '',
            kgexplosivo: '',
        },
        onSubmit: (data) => {
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/disenoVoladura`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                    window.location.reload();
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/disenoVoladura/${data.vid}`, data)
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

            tipoexplosivo: Yup.string().
                        required('Requerido'),
            kgexplosivo: Yup.string().
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
                <label htmlFor="tipoexplosivo">Tipo de Explosivo</label>
                <input
                    type="text"
                    {... getFieldProps('tipoexplosivo')}/>
                
                {touched.tipoexplosivo && errors.tipoexplosivo && <span>{errors.tipoexplosivo}</span>}
                <label htmlFor="kgexplosivo">Total Kg de Explosivo</label>
                <input
                    type="text"
                    {... getFieldProps('kgexplosivo')}/>
                    {touched.kgexplosivo && errors.kgexplosivo && <span>{errors.kgexplosivo}</span>}
    
    {
                    data.vid?
                    <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit">Guardar</button>
                }

            </form>

        </div>
    )

}


