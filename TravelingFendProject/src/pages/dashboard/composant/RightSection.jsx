import React, { useEffect, useState } from 'react'

export default function RightSection({toggleSidebar}) {


    const [isDarkMode, setDarkMode] = useState(false)

    const toggleDarkMode = ()=>{
      setDarkMode(!isDarkMode)
    }
    useEffect(()=>{
      if (isDarkMode) {
        document.body.classList.add('dark-mode-variables')
      }else{
        document.body.classList.remove('dark-mode-variables')
      }
    })
  return ( 
    <div>
      <div className="right-section">
    <div className="nav">
      <button id="menu-btn" onClick={toggleSidebar}>
        <span className="material-icons-sharp">menu</span>
      </button>
      <div className="dark-mode" onClick={toggleDarkMode}>
          <span className={`material-icons-sharp ${!isDarkMode ? 'active' : ''}`}>light_mode</span>
          <span className={`material-icons-sharp ${isDarkMode ? 'active' : ''}`}>dark_mode</span>
        </div>
      <div className="profile">
        <div className="info">
          <p>Hey, <b>Reza</b></p>
          <small className="text-muted">Admin</small>
        </div>
        <div className="profile-photo">
          <img src="images/profile-1.jpg" alt="Profile" />
        </div>
      </div>
    </div>

    <div className="user-profile">
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
        <h2>AsmrProg</h2>
        <p>Fullstack Web Developer</p>
      </div>
    </div>

    <div className="reminders">
      <div className="header">
        <h2>Reminders</h2>
        <span className="material-icons-sharp">notifications_none</span>
      </div>

      {[
        { label: "Workshop", time: "08:00 AM - 12:00 PM", icon: "volume_up" },
        { label: "Workshop", time: "08:00 AM - 12:00 PM", icon: "edit", deactive: true },
      ].map((reminder, index) => (
        <div className={`notification ${reminder.deactive ? "deactive" : ""}`} key={index}>
          <div className="icon">
            <span className="material-icons-sharp">{reminder.icon}</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>{reminder.label}</h3>
              <small className="text-muted">{reminder.time}</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>
      ))}

      <div className="notification add-reminder">
        <div>
          <span className="material-icons-sharp">add</span>
          <h3>Add Reminder</h3>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
