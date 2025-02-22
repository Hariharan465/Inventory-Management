import { ErrorMessage, Field, Formik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'


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
    email:yup.string().email("email must be valid").required("*email is required"),
    password:yup.string().min(5,"Passwor must be greater than 5 characters").required("*password is required")
  })

  const OnSubmitHandler = async(e:User , {resetForm}:any)=>{

  }

  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[#eee]'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={OnSubmitHandler}>

      {({values , setFieldValue , handleSubmit}) => (
        <>
        <form onSubmit={handleSubmit} className="w-[96%] md:-[70%] lg:w-1/3 shadow-2xl rounded-md pt-10 pb-3 px-4 bg-white">
      <div className="mb-3 py-1">
        <label htmlFor="email">Email</label>
        <Field id="email" name="email"  className='w-full outline-none py-3 px-2 border-[.1px]
         border-zinc-400 rounded-md' placeholder="Enter Your Email Address"/>
        </div>

        <ErrorMessage component={'p'} className="text-red-500 text-sm" name="email"/>

        <div className="mb-3 py-1">
        <label htmlFor="password">Password</label>
        <Field id="password" name="password"  className='w-full outline-none py-3 px-2 border-[.1px] 
        border-zinc-400 rounded-md' placeholder="******"/>

        <ErrorMessage component={'p'} className="text-red-500 text-sm" name="password"/>
        </div>

        <div className="mb-3 py-1">
        <button type='submit'  className="w-full bg-red-500 text-white py-3 px-2 flex item-center justify-center rounded-md">Submit</button>
        </div>

        <div className="mb-3 py-1 flex items-center justify-end">
          <p className="inline-flex item-center gap-x-1">Don't have an Account?<Link className='font-semibold text-blue-500  hover:underline' to = {'/register'}>Register</Link></p>
        </div>

        <div className="mb-3 py-1 flex items-center justify-end">
          <p className="inline-flex items-center gap-x-1">Forget<Link className='font-semibold text-blue-500  hover:underline' to = {'#'}>Password?</Link></p>
        </div>
        </form>
        </>
      )}

      </Formik>
    </div>
  )
}
export default Login
