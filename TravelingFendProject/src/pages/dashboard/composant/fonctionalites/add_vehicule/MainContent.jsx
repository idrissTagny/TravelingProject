import React from 'react'
import {Box, Stack, Typography} from "@mui/material"

import { useForm } from "react-hook-form";



export default function MainContent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)
  return (
    <Stack
    justifyContent={"center"}
    alignItems={"center"}
    width={"60%"}
    height={"100vh"}
    gap={'20rem'}

    >
      <Typography  variant='h1'>
        Ajouter un vehicule
      </Typography>


      <form className="row g-3 bg-light p-4 rounded shadow-sm" onSubmit={handleSubmit(onSubmit)}>
  <h3 className="text-center mb-4 text-primary">Add Your Car</h3>
  
  <center>
    <h2>1. Informations sur le véhicule</h2>
  </center>
  <div className="col-md-6">
    <label htmlFor="validationServer01" className="form-label">car name and Mark</label>
    <input 
      type="text" 
      className="form-control is-valid" 
      id="validationServer01" 
      placeholder="enter the brand  and name of your car (TOYOTA COROLLA)" 
      required 
      {...register("car_name")}
    />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="validationServer02" className="form-label">Car color</label>
    <input 
      type="text" 
      className="form-control is-valid" 
      id="validationServer02" 
      placeholder="enter car color (BLUE, RED...)" 
      required 
    />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="col-md-12">
    <label htmlFor="validationServerUsername" className="form-label">Vehicle registration</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input 
        type="text" 
        className="form-control is-invalid" 
        id="validationServerUsername" 
        placeholder="enter vehicle registration ( LT 4568 A )" 
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
        required 
      />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose Vehicle registration.
      </div>
    </div>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">type of vehicle</label>
    <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer03" 
      placeholder="Enter type of vehicle (ex : Berline, SUV, Camion)" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid type of vehicle.
    </div>
  </div>
  
  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">number of places available</label>
    <select 
      className="form-select is-valid" 
      id="validationServer04" 
      aria-describedby="validationServer04Feedback" 
      required
    >
      <option selected disabled value="">Choose...</option>
      <option><strong>1</strong></option>
      <option><strong>2</strong></option>
      <option><strong>3</strong></option>
      <option><strong>4</strong></option>
      <option><strong>5</strong></option>
      <option><strong>6</strong></option>
      <option><strong>7</strong></option>
      <option><strong>8</strong></option>
    </select>
    <div id="validationServer04Feedback" className="valid-feedback">
      Looks good.
    </div>
  </div>
  
  

  <div className="col-md-12">
    <label htmlFor="validationServerUsername" className="form-label">Chassis number</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input 
        type="text" 
        className="form-control is-invalid" 
        id="validationServerUsername" 
        placeholder="enter Numéro de châssis ( 1HGCM82633A123456 )" 
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
        required 
      />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose Vehicle registration.
      </div>
    </div>
  </div>
  
 
  <center>
    <h2>2. Informations sur le propriétaire</h2>
  </center>

  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">Driving license number</label>
    <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer03" 
      placeholder="Enter Driving license number" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a Driving license number.
    </div>
  </div>

  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">identity card number</label>
    <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer03" 
      placeholder="Enter Driving license number" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a identity card number.
    </div>
  </div>

  <center>
    <h2>3. Informations administratives</h2>
  </center>

  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">Vehicle Status</label>
    <select 
      className="form-select is-valid" 
      id="validationServer04" 
      aria-describedby="validationServer04Feedback" 
      required
    >
      <option selected disabled value="">Choose...</option>
      <option><strong>Neuf</strong></option>
      <option><strong>Pas neuf</strong></option>
    </select>
    <div id="validationServer04Feedback" className="valid-feedback">
      Looks good.
    </div>
  </div>

  <div className="col-md-3">
    <label htmlFor="validationServer05" className="form-label">Gray card</label>
    <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer05" 
      placeholder="Enter Card number or copy" 
      aria-describedby="validationServer05Feedback" 
      required 
    />
    <div id="validationServer05Feedback" className="invalid-feedback">
      Please provide a valid Card number or copy.
    </div>
  </div>

  <div className="col-md-6">
    <label htmlFor="validationServer03" className="form-label">Assurance</label>
    <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer03" 
      placeholder="Enter Name of insurance company" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
        <input 
      type="text" 
      className="form-control is-invalid" 
      id="validationServer03" 
      placeholder="Enter Insurance policy number" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
    <i>Insurance expiration date</i>
      <input 
      type="date" 
      className="form-control is-invalid" 
      id="validationServer03" 
      alt="Enter Insurance expiration date" 
      aria-describedby="validationServer03Feedback" 
      required 
    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a Assurance.
    </div>
  </div>


  <center>
    <h2>4. Informations spécifiques à l’application</h2>
  </center>

  <div className="col-md-12">
    <label htmlFor="validationServerUsername" className="form-label">Vehicle photo</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input 
        type="img" 
        className="form-control is-invalid" 
        id="validationServerUsername" 
        placeholder="enter Numéro de châssis ( 1HGCM82633A123456 )" 
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
        required 
      />
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose Vehicle photo
      </div>
    </div>
  </div>



  <div className="col-md-3">
    <label htmlFor="validationServer04" className="form-label">Use category</label>
    <select 
      className="form-select is-valid" 
      id="validationServer04" 
      aria-describedby="validationServer04Feedback" 
      required
    >
      <option selected disabled value="">Choose...</option>
      <option><strong>Private or professional use.</strong></option>
      <option><strong>Taxi, delivery, etc.</strong></option>
    </select>
    <div id="validationServer04Feedback" className="valid-feedback">
      Looks good.
    </div>
  </div>

  <div className="col-md-6">
  <label htmlFor="optionsSupp" className="form-label fs-5 mb-3">Options Supplémentaires</label>
  <div id="optionsSupp" className="p-3 border rounded shadow-sm bg-light">
    <div className="form-check mb-2">
      <input 
        className="form-check-input" 
        type="checkbox" 
        id="optionGPS" 
        value="GPS" 
      />
      <label className="form-check-label ms-2" htmlFor="optionGPS">
        GPS
      </label>
    </div>
    <div className="form-check mb-2">
      <input 
        className="form-check-input" 
        type="checkbox" 
        id="optionClimatisation" 
        value="Climatisation" 
      />
      <label className="form-check-label ms-2" htmlFor="optionClimatisation">
        Climatisation
      </label>
    </div>
    <div className="form-check mb-2">
      <input 
        className="form-check-input" 
        type="checkbox" 
        id="optionSiegesChauffants" 
        value="Sièges Chauffants" 
      />
      <label className="form-check-label ms-2" htmlFor="optionSiegesChauffants">
        Sièges Chauffants
      </label>
    </div>
  </div>
  <div id="validationServer04Feedback" className="valid-feedback mt-2">
    Looks good.
  </div>
</div>


   <div className="col-12">
    <div className="form-check">
      <input 
        className="form-check-input is-invalid" 
        type="checkbox" 
        value="" 
        id="invalidCheck3" 
        aria-describedby="invalidCheck3Feedback" 
        required 
      />
      <label className="form-check-label" htmlFor="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12 text-center">
    <button className="btn btn-primary btn-lg px-5" type="submit">Submit</button>
  </div>
</form>


    </Stack>
  )
}
