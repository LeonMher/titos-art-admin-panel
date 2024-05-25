import { Input } from "../components/shared/input/Input"
import { Button } from "../components/shared/button/Button"
import { useFormik } from "formik"
import * as Yup from 'yup'
import '../App.css'


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
})
const Projects = () =>{

    const formik = useFormik({
        initialValues: {
            name: '',
            description: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: validationSchema
    })
    return(
        <form>
            <div className="project-page-form-wrapper">
            <Input name='name' id='name' placeholder='Name' onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.name}/>
            {formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null}
            <Input name='description' id='description' placeholder='Description' onChange={formik.handleChange}  onBlur={formik.handleBlur} value={formik.values.description}/>
            {formik.touched.description && formik.errors.description ? <p className='text-red-500'>{formik.errors.description}</p> : null}
            <Button type='primary' size='large' onClick={formik.handleSubmit}>Submit</Button>
        </div>
        </form>
    )
}

export default Projects