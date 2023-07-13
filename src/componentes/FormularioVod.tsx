import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';
import { Vod } from '../interfaces.tsx/interfaces';


export const FormularioVod = (data:Vod) => {

    const { values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: data||{
            nrovoladura: 0,
            nrotaladros: 124,
            profundidadtaladro: 10,
            densidad: 1.33,
            sobreperforacion: 0.5,
            agua: true,
            taco: 5.8,
            tipotaco: 'Detritus',
            longitudcarga: 4.7,
            booster: 900,
            tipodetonador: 'NO ELECTRICO',
            tipoexplosivo: 'RIOFLEX 7000',
            vodpromedio: 6754,
            probecable: true,
            cablecoaxial: 30,
        },
        onSubmit: (data) => {
            console.log('AQUINB')
            if(!data.vid){
                axios.post(`${process.env.REACT_APP_API_URL}/vod`, data)
                    .then(response => {
                        console.log('Se envió la información correctamente', response.data);
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log('Error al enviar la información', error);
                    });
                }else{
                    axios.put(`${process.env.REACT_APP_API_URL}/vod/${data.vid}`, data)
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

            profundidadtaladro: Yup.number().
                required('Requerido'),
            densidad: Yup.number().
                required('Requerido'),
            sobreperforacion: Yup.number().
                required('Requerido'),
            agua: Yup.boolean().
                required('Requerido'),

            taco: Yup.number().
                required('Requerido'),

            tipotaco: Yup.string().
                required('Requerido'),

            longitudcarga: Yup.string().
                required('Requerido'),
            booster: Yup.number().
                required('Requerido'),
            tipodetonador: Yup.string().
                required('Requerido'),
            tipoexplosivo: Yup.string().
                required('Requerido'),
            vodpromedio: Yup.number().
                required('Requerido'),
            probecable: Yup.boolean().
                required('Requerido'),
            cablecoaxial: Yup.number().
                required('Requerido'),


        })
    });

    return (
        <div className='col my-4'>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="nrovoladura">nroVoladura</label>
                <input
                    type="number"
                    {...getFieldProps('nrovoladura')} />

                {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}
                <label htmlFor="nrotaladros">nro de Taladros</label>
                <input
                    type="number"
                    {...getFieldProps('nrotaladros')} />

                {touched.nrovoladura && errors.nrovoladura && <span>{errors.nrovoladura}</span>}
                <label htmlFor="profundidadtaladro">Profundidad de Taladro</label>
                <input
                    type="number"
                    {...getFieldProps('profundidadtaladro')} />

                {touched.profundidadtaladro && errors.profundidadtaladro && <span>{errors.profundidadtaladro}</span>}
                
                <label htmlFor="densidad">Densidad</label>
                <input
                    type="number"
                    {...getFieldProps('densidad')} />
                {touched.densidad && errors.densidad && <span>{errors.densidad}</span>}

                <label htmlFor="sobreperforacion">Sobre Perforacion</label>
                <input
                    type="number"
                    {...getFieldProps('sobreperforacion')} />
                {touched.sobreperforacion && errors.sobreperforacion && <span>{errors.sobreperforacion}</span>}

                <label htmlFor="agua">Agua</label>
                <input
                    type="boolean"
                    {...getFieldProps('agua')} />
                {touched.agua && errors.agua && <span>{errors.agua}</span>}

                <label htmlFor="taco">Taco</label>
                <input
                    type="number"
                    {...getFieldProps('taco')} />
                {touched.taco && errors.taco && <span>{errors.taco}</span>}

                <label htmlFor="tipotaco">Tipo de Taco</label>
                <input
                    type="text"
                    {...getFieldProps('tipotaco')} />
                {touched.tipotaco && errors.tipotaco && <span>{errors.tipotaco}</span>}

                <label htmlFor="longitudcarga">Longitud de Carga</label>
                <input
                    type="number"
                    {...getFieldProps('longitudcarga')} />
                {touched.longitudcarga && errors.longitudcarga && <span>{errors.longitudcarga}</span>}
                
                <label htmlFor="booster">Booster</label>
                <input
                    type="number"
                    {...getFieldProps('booster')} />
                {touched.booster && errors.booster && <span>{errors.booster}</span>}
                
                <label htmlFor="tipodetonador">Tipo de Detonador</label>
                <input
                    type="text"
                    {...getFieldProps('tipodetonador')} />
                {touched.tipodetonador && errors.tipodetonador && <span>{errors.tipodetonador}</span>}
                
                <label htmlFor="tipoexplosivo">Tipo de Explosivo</label>
                <input
                    type="text"
                    {...getFieldProps('tipoexplosivo')} />
                {touched.tipoexplosivo && errors.tipoexplosivo && <span>{errors.tipoexplosivo}</span>}
                
                <label htmlFor="vodpromedio">VOD Promedio (m/s)</label>
                <input
                    type="number"
                    {...getFieldProps('vodpromedio')} />
                {touched.vodpromedio && errors.vodpromedio && <span>{errors.vodpromedio}</span>}
                
                <label htmlFor="probecable ">ProbeCable</label>
                <input
                    type="boolean"
                    {...getFieldProps('probecable')} />
                {touched.probecable  && errors.probecable  && <span>{errors.probecable }</span>}

                <label htmlFor="cablecoaxial">Cable Coaxial(m)</label>
                <input
                    type="number"
                    {...getFieldProps('cablecoaxial')} />
                {touched.cablecoaxial  && errors.cablecoaxial  && <span>{errors.cablecoaxial }</span>}
     

                {
                    data.vid?
                    <button style={{width:90}} className='btn btn-primary' type="submit" >Actualizar</button>:
                    <button style={{width:90}} className='btn btn-primary' type="submit" >Guardar</button>
                }

            </form>

        </div>
    )

}


