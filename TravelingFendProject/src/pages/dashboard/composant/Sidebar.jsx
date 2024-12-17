import React, { useState } from 'react'
import toast from 'react-hot-toast';
import logo from "../Dashboard1/images/logoTraveling.png";


export default function Sidebar({toggleSidebar,isSidebarVisible}) {
const mainFonction = (label)=>{
    if (label == "Logout") {
        localStorage.removeItem("utilisateur")
        toast.success("deconnexion reussie")
        setTimeout(()=>{
            window.location.reload()
        }, 3000)
    }
    if (label == "Dashboard") {
        window.location.replace("/")
    }
}

  return (
    <div>
        <aside style={{ display: isSidebarVisible ? 'block' : 'none' }}>
            <div className="toggle">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h2>Trave<span className="danger">Ling</span></h2>
            </div>
            <div className="close" id="close-btn" onClick={toggleSidebar}>
                <span className="material-icons-sharp">close</span>
            </div>
            </div>

            <div className="sidebar">
            {[
                { icon: "dashboard", label: "Dashboard" },
                { icon: "person_outline", label: "Users" },
                { icon: "receipt_long", label: "History des voyages" },
                { icon: "insights", label: "Analytics", active: true },
                { icon: "mail_outline", label: "Tickets", count: 27 },
                { icon: "inventory", label: "Sale List" },
                { icon: "report_gmailerrorred", label: "Reports" },
                { icon: "settings", label: "Settings" },
                { icon: "add", label: "New Login" },
                { icon: "logout", label: "Logout" },
            ].map((item, index) => (
                <a href="#" className={item.active ? "active" : ""} key={index} onClick={()=>mainFonction(item.label)} >
                <span className="material-icons-sharp">{item.icon}</span>
                <h3>{item.label}</h3>
                {item.count && <span className="message-count">{item.count}</span>}
                </a>
                
            ))}
            </div>
        </aside>
    </div>
  )
}
