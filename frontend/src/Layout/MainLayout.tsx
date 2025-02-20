import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {  useDispatch, useSelector } from "react-redux";
import { SidebarSlicePath, toggleSidebar } from "../provider/slice/Sidebar.slice";
import { MdSpaceDashboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoIosArrowDropright , IoIosArrowDropleft } from "react-icons/io";


const MainLayout = ({ children } : {children:React.ReactNode}) => {
    
    const selector = useSelector(SidebarSlicePath)
    const dispatch = useDispatch()

  return (
    <>
    <div className="">
    <Sidebar  collapsed={selector.collapsed} breakPoint='lg' toggled={selector.toggle}>
  <Menu>
    {/* <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu> */}
    <MenuItem className='lg:hidden' onClick={()=> dispatch(toggleSidebar()) }>{selector.toggle ? <IoIosArrowDropright className='text-2xl'/>:<IoIosArrowDropleft className='text-2xl'/>}</MenuItem>
    <MenuItem icon={<MdSpaceDashboard className='text-2xl'/>}> Dashboard </MenuItem>
    <MenuItem icon={<FaFileInvoiceDollar className='text-2xl'/>}> Orders </MenuItem>

  </Menu>
</Sidebar>
    </div>
    </>
  )
}

export default MainLayout
