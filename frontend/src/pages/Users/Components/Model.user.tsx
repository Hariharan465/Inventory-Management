/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { ErrorMessage, Field, Formik } from 'formik';
import {toast} from 'sonner'
import * as yup from 'yup';

const Model = ({ visible, setVisible }: any) => {

   
   const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email:yup.string().email("email must be valid").required("*email is required"),
    mobile: yup.string().required("Mobile is required"),
    address: yup.string().required("Address is required")
   })

   const initialValues = {
    name:'',
    email:'',
    mobile:'',
    address:'',
   }

   const OnSubmitHandler = async(e:any,{resetForm}:any)=>{
                 try {
                  console.log(e)
                  toast.success("Sight Added Successfully")
                  resetForm()
                  setVisible(false)
                 } catch (e:any) {
      toast.error(e.message)
                 }

   }

  return (
    <>
            <Dialog header="Add User" position='top' visible={visible} className='w-full md:w-[70%] lg:w-[1/2]' onHide={() => {if (!visible) return; setVisible(false); }}>
                
                <Formik onSubmit={OnSubmitHandler} initialValues={initialValues} validationSchema={validationSchema}>
                  {({values , setFieldValue , handleSubmit})=>(
                    <>
                       <form onSubmit={handleSubmit} className='w-full'>

                          <div className="mb-3">
                          <label htmlFor="name">Name <span className="text-red-500 text-sm">*</span></label>

                          <Field name="name" id="name" type="text" placeholder='Enter Sight Name' className="w-full my-2 border outline-none py-3 px-4" />
                          <ErrorMessage name='name' className='text-red-500 capitalize' component={'p'}/>
                         </div>

                         <div className="mb-3">
                          <label htmlFor="email">Email <span className="text-red-500 text-sm">*</span></label>

                          <Field name="email" id="email" type="text" placeholder='Enter Sight Email' className="w-full my-2 border outline-none py-3 px-4" />
                          <ErrorMessage name='email' className='text-red-500 capitalize' component={'p'}/>
                         </div>
                        
                           <div className="mb-3">
                          <label htmlFor="mobile">Mobile Number <span className="text-red-500 text-sm">*</span></label>

                          <Field name="mobile" id="mobile" type="text" placeholder='Enter Mobile Number' className="w-full my-2 border outline-none py-3 px-4" />
                          <ErrorMessage name='mobile' className='text-red-500 capitalize' component={'p'}/>

                           <div className="mb-3">
                          <label htmlFor="address">Address <span className="text-red-500 text-sm">*</span></label>

                          <Field as="textarea" rows={3} name="address" id="address" type="text" placeholder='Enter Sight Address' className="w-full my-2 border outline-none py-3 px-4" />
                          <ErrorMessage name='address' className='text-red-500 capitalize' component={'p'}/>
                         </div>
                         </div>

                         <div className="flex justify-end">
                          <button className='text-white px-5 rounded-sm bg-black py-2 text-center'>Add Sight</button>
                         </div>


                       </form>
                     
                    </>
                  )}
                  
                </Formik> 
          
            </Dialog>
    </>
  )
}

export default Model
