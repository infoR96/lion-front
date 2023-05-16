import { Formik,Field, Form, useField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const FormularioDensidad = () => {
  
    return (
        <div className='col my-4'>
            <Formik initialValues={{
                   nroVoladura: 34,
                   registrado: true,
                   horaInicio: '8:45',
                   horaFin: '9:00',
                   tipoMezcla: 'ANFO',
                   densidadIninicial: 0.771,
                   densidadFinal: 1.06,
                   camion: 'MACK'

            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={ Yup.object({
                nroVoladura: Yup.number()
                    .required(),
    
                registrado: Yup.boolean().
                    required('Requerido'),
                horaInicio: Yup.number().
                    required('Requerido'),
                horaFin: Yup.string().
                    required('Requerido'),
                tipoMezcla: Yup.string().
                    required('Requerido'),
                densidadIninicial: Yup.number().
                    required('Requerido'),
                densidadFinal: Yup.number().
                    required('Requerido'),
                camion: Yup.string().
                    required('Requerido'),
            })}>

            {
                formik=>(
                    <Form>
                    <label htmlFor="nroVoladura">nroVoladura</label>
                    <Field name="nroVoladura" type='number'/>
                    <ErrorMessage name="nroVoladura" component='span'/>

                    <label htmlFor="burden">Registrado</label>
                    <Field name='registrado' type="boolean"/>
                    <ErrorMessage name='registrado'/>
                    
                    <label htmlFor="horaInicio">Hora de Inicio</label>
                    <Field name='horaInicio' type="text"/>
                    <ErrorMessage name='horaInicio'/>

                    <label htmlFor="horaFin">Hora de Fin</label>
                    <Field name='horaFin' type="text"/>
                    <ErrorMessage name='horaFin'/>
                
                    <label htmlFor="tipoMezcla">Tipo de Mezcla</label>
                    <Field name='tipoMezcla' type="text"/>
                    <ErrorMessage name='tipoMezcla'/>
                  
                    <label htmlFor="densidadInicial">Densidad Inicial</label>
                    <Field name='densidadInicial' type="number"/>
                    <ErrorMessage name='densidadInicial'/>

                    <label htmlFor="densidadFinal">Densidad Final</label>
                    <Field name='densidadFinal' type="number"/>
                    <ErrorMessage name='densidadFinal'/>

                    <label htmlFor="camion">Camion</label>
                    <Field name='camion' type="number"/>
                    <ErrorMessage name='camion'/>
                    
    
    
            
    
                    <button type="submit">Submit</button>
    
                </Form>
                )

                
            }
            

            </Formik>

        </div>
    
  )
}
