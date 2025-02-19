import { InputText } from "primereact/InputText"

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-[#eee]'>
      <div className="w-1/3 shadow-md rounded-md border-[.2px] border-black">
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <InputText unstyled className='w-full outline-none py-3 px-2' placeholder="Enter Email Address"/>
        </div>
        </div>
    </div>
  )
}
export default Login
