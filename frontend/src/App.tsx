import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import MainLayout from './Layout/MainLayout'

function App() {

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
