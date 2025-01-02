import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import "../style.css";

export default function MainContent() {
  const utilisateur_id = JSON.parse(localStorage.getItem("utilisateur")).id;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/voyages", data)
      .then((resp) => {
        console.log(resp);
        toast.success("voyage ajoutE");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Stack alignItems={"center"} width={"60%"} height={"100vh"} gap={"1rem"}>
      <Typography variant="h1">Initier un voyage</Typography>

      <div className=" ContainerForm">
        <div className="fitrs-col">
          <span className="borderLine"></span>
          <form
            className="row g-3 bg-light p-4 rounded shadow-sm p-1 m-1 cc-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-center mb-4 text-primary">Add a Trip</h3>

            {/* Date de départ */}
            <div className="col-md-6">
              <label htmlFor="date_depart" className="form-label">
                Date de Départ
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  event
                </span>
                <input
                  type="date"
                  className={`form-control ${
                    errors.date_depart ? "is-invalid" : "is-valid"
                  }`}
                  id="date_depart"
                  {...register("date_depart", {
                    required: "Date de départ requise",
                    validate: {
                      range: (value) =>
                        (value >= "2024-12-31" && value <= "2050-12-31") ||
                        "La date doit être entre le 31/12/2024 et le 31/12/2050",
                    },
                  })}
                />
              </div>
              <div className="invalid-feedback">
                {errors.date && <p>{errors.date.message}</p>}
              </div>
            </div>

            {/* Destination */}
            <div className="col-md-6">
              <label htmlFor="destination" className="form-label">
                Destination
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  place
                </span>
                <input
                  type="text"
                  className={`form-control ${
                    errors.destination ? "is-invalid" : "is-valid"
                  }`}
                  id="destination"
                  placeholder="Entrez la destination"
                  {...register("destination", {
                    required: "Destination requise",
                  })}
                />
              </div>
              <div className="invalid-feedback">
                {errors.destination?.message}
              </div>
            </div>

            {/* Prix par passager */}
            <div className="col-md-6">
              <label htmlFor="prix_par_passager" className="form-label">
                Prix par Passager
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  attach_money
                </span>
                <input
                  type="number"
                  className={`form-control ${
                    errors.prix_par_passager ? "is-invalid" : "is-valid"
                  }`}
                  id="prix_par_passager"
                  placeholder="Entrez le prix"
                  {...register("prix_par_passager", {
                    required: "Prix requis",
                  })}
                />
              </div>
              <div className="invalid-feedback">
                {errors.prix_par_passager?.message}
              </div>
            </div>

            {/* Nombre de places */}
            <div className="col-md-6">
              <label htmlFor="nbr_places" className="form-label">
                Nombre de Places
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  airline_seat_recline_extra
                </span>
                <select
                  className={`form-select ${
                    errors.nbr_places ? "is-invalid" : "is-valid"
                  }`}
                  id="nbr_places"
                  {...register("nbr_places", {
                    required: "Nombre de places requis",
                  })}
                >
                  <option value="" disabled selected>
                    Choisissez un nombre...
                  </option>
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              <div className="invalid-feedback">
                {errors.nbr_places?.message}
              </div>
            </div>

            {/* Heure de départ */}
            <div className="col-md-6">
              <label htmlFor="heure_depart" className="form-label">
                Heure de Départ
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  schedule
                </span>
                <input
                  type="time"
                  className={`form-control ${
                    errors.heure_depart ? "is-invalid" : "is-valid"
                  }`}
                  id="heure_depart"
                  {...register("heure_depart", {
                    required: "Heure de départ requise",
                  })}
                />
              </div>
              <div className="invalid-feedback">
                {errors.heure_depart?.message}
              </div>
            </div>

            {/* Plus d'info */}
            <div className="col-md-12">
              <label htmlFor="plus_info" className="form-label">
                Plus d'Informations
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  info
                </span>
                <textarea
                  className={`form-control ${
                    errors.plus_info ? "is-invalid" : "is-valid"
                  }`}
                  id="plus_info"
                  rows="3"
                  placeholder="Silence, pas de cigarette, etc."
                  {...register("plus_info", {
                    required: "Informations supplémentaires requises",
                  })}
                ></textarea>
              </div>
              <div className="invalid-feedback">
                {errors.plus_info?.message}
              </div>
            </div>

            {/* Sélection de la voiture */}
            <div className="col-md-12">
              <label htmlFor="voiture" className="form-label">
                Choix de la Voiture
              </label>
              <div className="input-group">
                <span className="input-group-text material-icons-sharp">
                  directions_car
                </span>
                <select
                  className={`form-select ${
                    errors.voiture ? "is-invalid" : "is-valid"
                  }`}
                  id="voiture"
                  {...register("voiture", {
                    required: "Veuillez choisir une voiture",
                  })}
                >
                  <option value="" disabled selected>
                    Choisissez une voiture...
                  </option>
                  <option value="Toyota">Toyota</option>
                  <option value="Mercedes">Mercedes</option>
                  <option value="BMW">BMW</option>
                  <option value="Audi">Audi</option>
                </select>
              </div>
              <div className="invalid-feedback">{errors.voiture?.message}</div>
            </div>
            <input
              type="text"
              disabled
              value={`${utilisateur_id}`}
              {...register("utilisateur_id")}
            />
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-lg px-5" type="submit">
                Submit
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </Stack>
  );
}
