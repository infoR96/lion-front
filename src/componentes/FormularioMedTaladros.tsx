import { Formik,Field, Form, useField, ErrorMessage } from 'formik';
import { string } from 'yargs';
import * as Yup from 'yup';

export const FormularioMedTaladros = () => {
  
    return (
        <div className='col my-4'>
            <Formik initialValues={{
                   nroVoladura: 34,
                   medido:true,
perforados:229,
tapados:0,
reperf:0,
 adicional:0,
aguaMenor:29,
 aguaMayor:142,
metrosPerforados:2389,
Obeservaciones:'Precorte'

            }}
            onSubmit={(values)=>{
                console.log(values)
            }}
            validationSchema={ Yup.object({
                nroVoladura: Yup.number()
                    .required(),
    
                medido: Yup.boolean().
                    required('Requerido'),
                perforados: Yup.number().
                    required('Requerido'),
                tapados: Yup.number().
                    required('Requerido'),
                reperf: Yup.number().
                    required('Requerido'),
                adicional: Yup.number().
                    required('Requerido'),
                aguaMenor: Yup.number().
                    required('Requerido'),
                aguaMayor: Yup.string().
                    required('Requerido'),
                metrosPerforados:Yup.number().
                    required('Requerido'),
                Obeservaciones:Yup.string().
                required('Requerido')
            })}>

            {
                formik=>(
                    <Form>
                    <label htmlFor="nroVoladura">nroVoladura</label>
                    <Field name="nroVoladura" type='number'/>
                    <ErrorMessage name="nroVoladura" component='span'/>

                    <label htmlFor="medido">medido</label>
                    <Field name='medido' type="boolean"/>
                    <ErrorMessage name='medido'/>
                    
                    <label htmlFor="perforados">Perforados</label>
                    <Field name='perforados' type="number"/>
                    <ErrorMessage name='perforados'/>

                    <label htmlFor="tapados">Tapados</label>
                    <Field name='tapados' type="text"/>
                    <ErrorMessage name='tapados'/>
                
                    <label htmlFor="tipoMezcla">Tipo de Mezcla</label>
                    <Field name='tipoMezcla' type="text"/>
                    <ErrorMessage name='tipoMezcla'/>
                  
                    <label htmlFor="reperforacion">Reperforacion</label>
                    <Field name='reperforacion' type="number"/>
                    <ErrorMessage name='reperforacion'/>

                    <label htmlFor="adicional">Adicional</label>
                    <Field name='adicional' type="number"/>
                    <ErrorMessage name='adicional'/>

                    <label htmlFor="aguaMenor">Agua menor a 1m</label>
                    <Field name='aguaMenor' type="number"/>
                    <ErrorMessage name='aguaMenor'/>
                    
                    <label htmlFor="aguaMayor">Agua mayor a 1m</label>
                    <Field name='aguaMayor' type="number"/>
                    <ErrorMessage name='aguaMayor'/>
                    
                    <label htmlFor="metrosPerforados">Metros Perforados</label>
                    <Field name='metrosPerforados' type="number"/>
                    <ErrorMessage name='metrosPerforados'/>

                    <label htmlFor="observaciones">Observaciones</label>
                    <Field name='observaciones' type="text"/>
                    <ErrorMessage name='observaciones'/>
    
    
            
    
                    <button type="submit">Submit</button>
    
                </Form>
                )

                
            }
            

            </Formik>

        </div>
    
  )
}
