import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';        
import { ErrorMessage, Formik } from 'formik'
import * as yup from 'yup'

const Login = () => {

  type User = {
    email:string,
    password:string
  }

  const initialValues : User={
    email : '',
    password : ''
  }

  const validationSchema = yup.object({
    email:yup.string().email("email must be valid").required("email is required"),
    password:yup.string().min(5,"Passwor must be greater than 5 characters").required("password is required")
  })

  const OnSubmitHandler = async()=>{

  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[#eee]'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>

      {({values , setFieldValue , handleSubmit}) => (
        <>
        <form onSubmit={handleSubmit} className="w-1/3 shadow-md rounded-md py-10 px-4 bg-white">
      <div className="mb-3 py-1">
        <label htmlFor="email">Email</label>
        <InputText id="email" name="email" value={values.email} onChange={(e) => setFieldValue('email',e.target.value)} unstyled className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded' placeholder="Enter Email Address"/>
        </div>

        <ErrorMessage component={'p'} className="text-red-500 text-sm" name="email"/>

        <div className="mb-3 py-1">
        <label htmlFor="password">Password</label>
        <InputText id="password" name="password" value={values.password} onChange={(e) => setFieldValue('password',e.target.value)} unstyled className='w-full outline-none py-3 px-2 border-[.1px] border-zinc-400 rounded' placeholder="******"/>
        </div>

        <div className="mb-3 py-1">
        <Button className="w-full bg-red-500 text-white py-3 px-2 flex item-center justify-center">Submit</Button>
        </div>
        </form>
        </>
      )}

      </Formik>
    </div>
  )
}
export default Login
