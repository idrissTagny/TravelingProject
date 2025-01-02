import toast from 'react-hot-toast';

import  axios  from "axios";


export default function AllYourTravel({ Data, Index, ModifTravel, DeletTravel}) {

  const updateTravel = (data) => {
    const travelId = data.id; // ID du voyage à modifier
    const updatedTravel = {
      destination: document.getElementById("destination").value,
      prix_par_passager: document.getElementById("prix").value,
      date_depart: document.getElementById("date_depart").value,
      heure_depart: document.getElementById("heure_depart").value,
      nbr_places: document.getElementById("nbr_places").value,
      voiture: document.getElementById("voiture").value,
      plus_info: document.getElementById("plus_info").value,
    };
    
  };
  
  



    return (

      <div className="container my-5">
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white text-center">
            <h3>Détails du Voyage #{Index + 1}</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="destination" className="form-label">
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    className="form-control"
                    defaultValue={Data.destination}
                    
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="prix" className="form-label">
                    Prix par Passager (FCFA)
                  </label>
                  <input
                    type="text"
                    id="prix"
                    className="form-control"
                    defaultValue={Data.prix_par_passager}
                    
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="date_depart" className="form-label">
                    Date de Départ
                  </label>
                  <input
                    type="date"
                    id="date_depart"
                    className="form-control"
                    defaultValue={Data.date_depart}
                    
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="heure_depart" className="form-label">
                    Heure de Départ
                  </label>
                  <input
                    type="time"
                    id="heure_depart"
                    className="form-control"
                    defaultValue={Data.heure_depart}
                    
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="nbr_places" className="form-label">
                    Nombre de Places
                  </label>
                  <input
                    type="number"
                    id="nbr_places"
                    className="form-control"
                    defaultValue={Data.nbr_places}
                    
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="voiture" className="form-label">
                    Voiture
                  </label>
                  <input
                    type="text"
                    id="voiture"
                    className="form-control"
                    defaultValue={Data.voiture}
                    
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="plus_info" className="form-label">
                    Informations Supplémentaires
                  </label>
                  <textarea
                    id="plus_info"
                    className="form-control"
                    rows="1"
                    defaultValue={Data.plus_info}
                    
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer text-end">
            <input className="btn btn-primary mx-2" type="submit" value="Modifier" onClick={()=>updateTravel(Data)} />
            <input className="btn btn-danger"  type="submit" value="Supprimer" onClick={()=>DeletTravel(Data)} />

            {/* <button >Modifier</button>
            <button ></button> */}
          </div>
        </div>
      </div>
    );
  }
  