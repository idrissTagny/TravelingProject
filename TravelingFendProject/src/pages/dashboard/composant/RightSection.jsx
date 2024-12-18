import React, { useEffect, useState } from "react";
import photo from "../Dashboard1/images/profile-2.jpg";
import logo from "../Dashboard1/images/logoTraveling.png";


export default function RightSection({ toggleSidebar }) {
  // Initialiser l'utilisateur avec une fonction pour lire le localStorage une seule fois
  const [utilisateur, setUtilisateur] = useState(() => {
    const utilisateurStocke = localStorage.getItem("utilisateur");
    return utilisateurStocke ? JSON.parse(utilisateurStocke) : { nomUtilisateur: "bye" };
  });

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode-variables");
    } else {
      document.body.classList.remove("dark-mode-variables");
    }
  }, [isDarkMode]); // Ajout de la dépendance pour ne mettre à jour qu'en cas de changement

  const mainFonction = (label) => {

    // Séparer le texte sur les espaces
    const x = label.split(" ");
    
    // Vérifie si le tableau résultant a au moins un élément
    if (x.length > 0) {
      if (x[0] == "Ajouter") {
        window.setTimeout(()=>{
          window.location.replace("/add_vehicule")
        },300)        
      }
      if (x[0]=="Modifier") {
        window.setTimeout(()=>{
          window.location.replace("/edit_travel")
        },300) 
      } 
      if (x[0]=="Consulter") {
        window.setTimeout(()=>{
          window.location.replace("/consult_travel")
        },300) 
      }
    } else {
      alert("Aucun mot trouvé dans la chaîne fournie.");
    }
  };

  return (
    <div>
      <div className="right-section">
        <div className="nav">
          <button id="menu-btn" onClick={toggleSidebar}>
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="dark-mode" onClick={toggleDarkMode}>
            <span className={`material-icons-sharp ${!isDarkMode ? "active" : ""}`}>
              light_mode
            </span>
            <span className={`material-icons-sharp ${isDarkMode ? "active" : ""}`}>
              dark_mode
            </span>
          </div>
          <div className="profile">
            <div className="info">
              <h2>
                <p>
                  Hey, <b>{utilisateur.nomUtilisateur}</b>
                </p>
              </h2>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src={photo} alt="Profile" />
            </div>
          </div>
        </div>

        <div className="user-profile">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h2>Traveling</h2>
            <p>Fullstack Web Developer</p>
          </div>
        </div>

        <div className="reminders">
          <div className="header">
            <h2>Fonctionnalites</h2>
            <span className="material-icons-sharp">notifications_none</span>
          </div>

          {[
            { label: "Ajouter un vehicule", time: "08:00 AM - 12:00 PM", icon: "local_taxi", deactive: true  },
            { label: "Modifier un voyage", time: "08:00 AM - 12:00 PM", icon: "edit", deactive: true },
            { label: "Consulter les voyages", time: "08:00 AM - 12:00 PM", icon: "visibility", deactive: true },
            { label: "Consulter mes voyages", time: "08:00 AM - 12:00 PM", icon: "add_road", deactive: true },
            
          ].map((reminder, index) => (
            <div
              className={`notification ${reminder.deactive ? "deactive" : ""}` }
              key={index}
              onClick={()=>mainFonction(reminder.label)} 
            >
              <div className="icon">
                <span className="material-icons-sharp">{reminder.icon}</span>
              </div>
              <div className="content">
                <div className="info">
                  <h3>{reminder.label}</h3>
                </div>
                <span className="material-icons-sharp">more_vert</span>
              </div>
            </div>
          ))}

          <div className="notification add-reminder">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Initier un voyage</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
