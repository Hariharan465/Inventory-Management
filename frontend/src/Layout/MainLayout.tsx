import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {  useDispatch, useSelector } from "react-redux";
import { SidebarSlicePath, toggleSidebar } from "../provider/slice/Sidebar.slice";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaRegBuilding } from "react-icons/fa";
import { IoIosArrowDropright , IoIosArrowDropleft } from "react-icons/io";
import { Link } from 'react-router-dom';


const MainLayout = ({ children } : {children:React.ReactNode}) => {
    
    const selector = useSelector(SidebarSlicePath)
    const dispatch = useDispatch()
    

  return (
    <>
    <div className="flex items-start lg:gap-x-2">
    <Sidebar  collapsed={selector.collapsed} breakPoint='lg'className='bg-transparent backdrop-blur-md' toggled={selector.toggle}>
  <Menu>
    {/* <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu> */}
    <MenuItem className='lg:hidden'  onClick={()=> dispatch(toggleSidebar()) }>{selector.toggle ? <IoIosArrowDropleft className='text-2xl'/>:<IoIosArrowDropright className='text-2xl'/>}</MenuItem>
    <MenuItem component={<Link to={"/"}/>} icon={<MdOutlineSpaceDashboard className='text-2xl'/>}> Dashboard </MenuItem>
    <MenuItem component={<Link to={"/orders"}/>} icon={<FiBox className='text-2xl'/>}> Material </MenuItem>
    <MenuItem component={<Link to={"/user"}/>} icon={<FaRegBuilding className='text-2xl'/>}> Sight </MenuItem>

  </Menu>
</Sidebar>
                <div className='w-full'>
                    {children}
                </div>
    </div>
    </>
  )
}

export default MainLayout
