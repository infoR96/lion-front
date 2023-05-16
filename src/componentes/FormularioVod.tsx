import axios from 'axios';
import { FormikErrors, useFormik } from 'formik';
import * as Yup from 'yup';


export const FormularioVod = () => {

    const { values, errors, handleSubmit, touched, getFieldProps } = useFormik({
        initialValues: {
            nroVoladura: 0,
            nroTaladro: 124,
            profundidadTaladro: 10,
            densidad: 1.33,
            sobrePerforacion: 0.5,
            agua: true,
            taco: 5.8,
            tipoTaco: 'Detritus',
            longitudCarga: 4.7,
            booster: 900,
            tipoDetonador: 'NO ELECTRICO',
            tipoExplosivo: 'RIOFLEX 7000',
            vodPromedio: 6754,
            probecable: 1,
            cableCoaxial: 30,
            diametro: 9
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

            profundidadTaladro: Yup.number().
                required('Requerido'),
            densidad: Yup.number().
                required('Requerido'),
            sobrePerforacion: Yup.number().
                required('Requerido'),

            agua: Yup.boolean().
                required('Requerido'),

            taco: Yup.number().
                required('Requerido'),

            tipoTaco: Yup.string().
                required('Requerido'),

            longitudCarga: Yup.string().
                required('Requerido'),
            booster: Yup.number().
                required('Requerido'),
            tipoDetonador: Yup.string().
                required('Requerido'),
            tipoExplosivo: Yup.string().
                required('Requerido'),
            vodPromedio: Yup.number().
                required('Requerido'),
            probecable: Yup.number().
                required('Requerido'),
            cableCoaxial: Yup.number().
                required('Requerido'),
            diametro: Yup.number().
                required('Requerido'),

        })
    });

    return (
        <div className='col my-4'>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="nroVoladura">nroVoladura</label>
                <input
                    type="number"
                    {...getFieldProps('nroVoladura')} />

                {touched.nroVoladura && errors.nroVoladura && <span>{errors.nroVoladura}</span>}
                <label htmlFor="profundidadTaladro">Profundidad de Taladro</label>
                <input
                    type="number"
                    {...getFieldProps('pprofundidadTaladro')} />

                {touched.profundidadTaladro && errors.profundidadTaladro && <span>{errors.profundidadTaladro}</span>}
                
                <label htmlFor="distancia">Densidad</label>
                <input
                    type="number"
                    {...getFieldProps('densidad')} />
                {touched.densidad && errors.densidad && <span>{errors.densidad}</span>}

                <label htmlFor="sobrePerforacion">Sobre Perforacion</label>
                <input
                    type="number"
                    {...getFieldProps('sobrePerforacion')} />
                {touched.sobrePerforacion && errors.sobrePerforacion && <span>{errors.sobrePerforacion}</span>}

                <label htmlFor="agua">Agua</label>
                <input
                    type="boolean"
                    {...getFieldProps('agua')} />
                {touched.agua && errors.agua && <span>{errors.agua}</span>}

                <label htmlFor="vppDiseno">Taco</label>
                <input
                    type="number"
                    {...getFieldProps('taco')} />
                {touched.taco && errors.taco && <span>{errors.taco}</span>}

                <label htmlFor="tipoTaco">Tipo de Taco</label>
                <input
                    type="text"
                    {...getFieldProps('k')} />
                {touched.tipoTaco && errors.tipoTaco && <span>{errors.tipoTaco}</span>}

                <label htmlFor="longitudCarga">Longitud de Carga</label>
                <input
                    type="number"
                    {...getFieldProps('longitudCarga')} />
                {touched.longitudCarga && errors.longitudCarga && <span>{errors.longitudCarga}</span>}
                
                <label htmlFor="booster">Booster</label>
                <input
                    type="numerico"
                    {...getFieldProps('booster')} />
                {touched.booster && errors.booster && <span>{errors.booster}</span>}
                
                <label htmlFor="tipoDetonador">Tipo de Detonador</label>
                <input
                    type="text"
                    {...getFieldProps('tipoDetonador')} />
                {touched.tipoDetonador && errors.tipoDetonador && <span>{errors.tipoDetonador}</span>}
                
                <label htmlFor="tipoExplosivo">Tipo de Explosivo</label>
                <input
                    type="text"
                    {...getFieldProps('tipoExplosivo')} />
                {touched.tipoExplosivo && errors.tipoExplosivo && <span>{errors.tipoExplosivo}</span>}
                
                <label htmlFor="vodPromedio">VOD Promedio (m/s)</label>
                <input
                    type="text"
                    {...getFieldProps('vodPromedio')} />
                {touched.vodPromedio && errors.vodPromedio && <span>{errors.vodPromedio}</span>}
                
                <label htmlFor="probecable ">ProbeCable</label>
                <input
                    type="text"
                    {...getFieldProps('probecable ')} />
                {touched.probecable  && errors.probecable  && <span>{errors.probecable }</span>}
                <label htmlFor="cableCoaxial ">Cable Coaxial(m)</label>
                <input
                    type="text"
                    {...getFieldProps('cableCoaxial ')} />
                {touched.cableCoaxial  && errors.cableCoaxial  && <span>{errors.cableCoaxial }</span>}
                <label htmlFor="diametro ">Diametro(mm)</label>
                <input
                    type="text"
                    {...getFieldProps('diametro ')} />
                {touched.diametro  && errors.diametro  && <span>{errors.diametro }</span>}


                <button type="submit">Submit</button>

            </form>

        </div>
    )

}


