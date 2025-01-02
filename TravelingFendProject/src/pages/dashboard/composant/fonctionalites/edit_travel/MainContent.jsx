import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios, { Axios } from "axios";
import { toast } from "react-hot-toast";
import { set, useForm } from "react-hook-form";
import "../style.css";
import AllYourTravel from "./optimisation/AllYourTravel";

export default function MainContent() {
  const utilisateur_id = JSON.parse(localStorage.getItem("utilisateur")).id;
  const [newVoyages, setnewVoyages] = useState([]); // État pour stocker les voyages
  const [index, setIndex] = useState(0);
  const [element, setElement] = useState(0)


  useEffect(() => {
    // Récupération des données via Axios
    axios
      .get(`http://localhost:3000/voyages?utilisateur_id=${utilisateur_id}`)
      .then((resp) => {
        const data = resp.data; // Les données JSON
        console.log(data);
        setnewVoyages(data); // Mise à jour de l'état
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, [newVoyages]); // Le tableau vide [] signifie que cet effet s'exécute une seule fois, après le montage

  // creation des fonctions de modification et de suppression

  const ModifTravel = (data) => {
    alert(data.destination);
  };

  const deleteTravel = (data) => {
    const travelId = data.id; // Récupération immédiate de l'ID
    if (!travelId) {
      toast.error("ID du voyage manquant !");
      return;
    }
  
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce voyage ?")) {
      axios
        .delete(`http://localhost:3000/voyages/${travelId}`)
        .then((response) => {
          toast.success("Voyage supprimé avec succès");
          // Mettre à jour le tableau local ici si nécessaire
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression :", error);
          toast.error(
            "Erreur lors de la suppression du voyage. Veuillez réessayer."
          );
        });
    }
  };
  
  return (
    <Stack alignItems={"center"} width={"60%"} height={"100vh"} gap={"1rem"}>
      <Typography variant="h1">Modifier vos voyages</Typography>

      <div className=" ContainerForm">
        <div className="fitrs-col">
          <span className="borderLine"></span>
          <form className="row g-3 bg-light p-4 rounded shadow-sm p-1 m-1 cc-form">
            {newVoyages.map((voya) => (
              <AllYourTravel
                Data={voya}
                key={voya.id}
                ModifTravel={ModifTravel}
                DeletTravel={deleteTravel}
              /> // Assurez-vous de retourner l'élément ici
            ))}
          </form>
        </div>
      </div>
    </Stack>
  );
}
