import React, { useEffect, useState } from "react";
import photo from "../Dashboard1/images/profile-2.jpg";
import logo from "../Dashboard1/images/logoTraveling.png";
import { useNavigate } from "react-router-dom";


export default function RightSection({ toggleSidebar }) {

  const navigate = useNavigate()
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
    const y = label
    // Séparer le texte sur les espaces
    const x = label.split(" ");
    
    // Vérifie si le tableau résultant a au moins un élément
    if (x.length > 0) {
      if (x[0] == "Ajouter") {
        window.setTimeout(()=>{
          navigate("/add_vehicule")
        },300)        
      }
      if (x[0]=="Modifier") {
        window.setTimeout(()=>{
          navigate("/edit_travel")
        },300) 
      } 
      if (x[0]=="Consulter" && x[2]=="voyages") {
        window.setTimeout(()=>{
          navigate("/consult_travel")
        },300) 
      }
      if (x[0]=="Consulter" && x[2]=="trajets") {
        window.setTimeout(()=>{
          navigate("/mes_trajets")
        },300) 
      }
      if (y == "intTravel") {
        window.setTimeout(()=>{
          navigate("/init_voyage")
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
            { label: "Ajouter un vehicule",  icon: "local_taxi", deactive: true  },
            { label: "Modifier un voyage",  icon: "edit", deactive: true },
            { label: "Consulter les voyages", icon: "visibility", deactive: true },
            { label: "Consulter mes trajets",  icon: "add_road", deactive: true },
            
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

          <div className="notification add-reminder"
              onClick={()=>mainFonction("intTravel")} 

          >
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
