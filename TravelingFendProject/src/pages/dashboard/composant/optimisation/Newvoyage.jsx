import React from 'react'

export default function Newvoyage({ Data, Index }) {
  return (
    <div className="container mt-4">
    <table className="table table-striped table-hover">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Destination</th>
          <th>Prix par Passager (FCFA )</th>
          <th>Date de Départ</th>
          <th>Heure de Départ</th>
          <th>Nombre de Places</th>
          <th>Voiture</th>
          <th>Informations Supplémentaires</th>
          
        </tr>
      </thead>
      <tbody>
          <tr key={Data.id}>
            <td>#</td>
            <td>{Data.destination}</td>
            <td>{Data.prix_par_passager}</td>
            <td>{Data.date_depart}</td>
            <td>{Data.heure_depart}</td>
            <td>{Data.nbr_places}</td>
            <td>{Data.voiture}</td>
            <td>{Data.plus_info}</td>
          </tr>
      </tbody>
    </table>
  </div>
  )
}
