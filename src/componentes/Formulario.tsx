import { FormikErrors, useFormik } from 'formik';



interface FormValues {
    nroVoladura: number;
    fecha: string;
    fase: string;
    nivel: number;
    malla: string;
}

export const Formulario = () => {

    const validate = ({ nroVoladura, fase, fecha,nivel, malla, }: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if (!nroVoladura) {
            errors.nroVoladura = 'Required';

            if (!malla) {
                errors.malla = 'Required';
            } else if (malla.length >= 15) {
                errors.malla = 'Must be 10 nroVoladurars or less';
            }
            if (!fase) {
                errors.fase = 'Required';
            }
            if (!nivel) {
                errors.nivel = 'Required';
            }
            if (!fecha) {
                errors.nivel = 'Required';
            }

            return errors;
        }
    }

    const { handleChange, values, errors, handleSubmit, touched, handleBlur } = useFormik({
        initialValues: {
            nroVoladura: 0,
            fecha: '',
            fase: '',
            nivel: 0,
            malla: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate
    });

    return (
        <div className='col'>
            <h1>DATOS GENERALES DE VOLADURA</h1>

            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="nroVoladura">nroVoladura</label>
                <input
                    type="text"
                    name="nroVoladura"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nroVoladura}
                />
                {touched.nroVoladura && errors.nroVoladura && <span>{errors.nroVoladura}</span>}
                <label htmlFor="fecha">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fecha}
                />
                {touched.fecha && errors.fecha && <span>{errors.fecha}</span>}
                <label htmlFor="fase">fase</label>
                <input
                    type="text"
                    name="fase"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fase}
                />
                <label htmlFor="nivel">Nivel</label>
                {touched.fase && errors.fase && <span>{errors.fase}</span>}
                <input
                    type="text"
                    name="nivel"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.nivel}
                />
                <label htmlFor="malla">Malla</label>
                <input
                    type="text"
                    name="malla"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.malla}
                />
                {touched.malla && errors.malla && <span>{errors.malla}</span>}


                <button type="submit">Submit</button>

            </form>

        </div>
    )


}


