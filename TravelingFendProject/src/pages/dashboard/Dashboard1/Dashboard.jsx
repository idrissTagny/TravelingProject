import "./style.css";
import Sidebar from "../composant/Sidebar";
import MainContent from "../composant/MainContent";
import RightSection from "../composant/RightSection";

import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

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
    <div className="container-fluid">
      <Sidebar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible}/>
      <MainContent />
      <RightSection toggleSidebar={toggleSidebar}/>
  </div>
  )
}

