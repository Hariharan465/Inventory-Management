import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import MainLayout from './Layout/MainLayout'
import { useEffect, useState } from 'react'


function App() {
  // const [loading , setLoading] = useState(true)
  // const navigate = useNavigate()

  //   const fetchUser = (token:string) => {
  //     try {
  //       setLoading(false)
  //       return
  //     } catch (error) {
  //       navigate("/login")  
  //       return
  //     }
  //   }
  //   useEffect(() => {
  //     const token = localStorage.getItem("token") || ''

  //     if(!token){
  //       navigate("/login")
  //       return
  //     }else{
  //       (async()=>{
  //         await fetchUser(token)
  //       })()
  //     }
      
  //   },[])

  //   if(loading){
  //     return <div>Loading...</div>
  //   }

  return (
    <>
     <Header />
      <MainLayout>

      <Outlet/>

      </MainLayout>
    </>
  )
}

export default App
