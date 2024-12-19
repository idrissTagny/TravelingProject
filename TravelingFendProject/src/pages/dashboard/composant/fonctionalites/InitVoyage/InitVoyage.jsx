
import '../../../Dashboard1/style.css'


import React, { useEffect, useState } from 'react'
import Sidebar from '../../Sidebar'
import RightSection from '../../RightSection'
import MainContent from './MainContent'
import { useNavigate } from 'react-router-dom'

  
export default function InitVoyage() {

    const navigate = useNavigate()
    useEffect(()=>{
      if (!localStorage.getItem("utilisateur")) {
        navigate("/connexion")
      }
    })
  
    const [isSidebarVisible, setSidebarVisible] = useState(true);
  
    const toggleSidebar = ()=>{
      setSidebarVisible(!isSidebarVisible);
    }
  return (
    <div className='container-fluid' style={
        
        {
            display:'flex',
            justifyContent:'space-between'
        }
    }>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
      <MainContent/>
      <RightSection toggleSidebar={toggleSidebar}/>
      
    </div>
  )
}
