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
    alignItems={"center"}
    width={"60%"}
    height={"100vh"}
    gap={'5rem'}

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
    <label htmlFor="car_name" className="form-label">car name and Mark</label>
    <input 
      type="text" 
      className={`form-control ${ errors.car_name ? "is-invalid" : "is-valid"}`} 
      id="car_name" 
      placeholder="enter the brand  and name of your car (TOYOTA COROLLA)" 
      required 
      {...register("car_name", {
        required: "Car name is required",
        minLength: {
          value: 6,
          message: "Enter more than 6 characters",
        },
      })}
    />
    <div className="invalid-feedback">
      {errors.car_name?.message}
    </div>
    <div className="valid-feedback">
      Looks good!!
    </div>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="Car_color" className="form-label">Car color</label>
    <input 
      type="text" 
      className={`form-control ${errors.car_color ? "is-invalid" : "is-valid"}`}
      id="Car_color" 
      placeholder="enter car color (BLUE, RED...)" 
      required 
      {...register("car_color", {required:"enter car color (BLUE, RED...)", message:"entrer une couleur valide"})}
    />
    <div className="invalid-feedback">
      {errors.car_color?.message}
    </div>
    <div className="valid-feedback">
      Looks good!!!
    </div>
  </div>
  
  <div className="col-md-12">
          <label htmlFor="car_registration" className="form-label">
            Vehicle Registration
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.car_registration ? "is-invalid" : "is-valid"
            }`}
            id="car_registration"
            placeholder="Enter vehicle registration (LT 4568 A)"
            {...register("car_registration", {
              required: "Vehicle registration is required",
              minLength: {
                value: 7,
                message: "Registration must be at least 7 characters",
              },
            })}
          />
          <div className="invalid-feedback">
            {errors.car_registration?.message}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>
  
        <div className="col-md-6">
          <label htmlFor="car_type" className="form-label">
            Type of Vehicle
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.car_type ? "is-invalid" : "is-valid"
            }`}
            id="car_type"
            placeholder="Enter type of vehicle (e.g., Berline, SUV)"
            {...register("car_type", {
              required: "Vehicle type is required",
            })}
          />
          <div className="invalid-feedback">{errors.car_type?.message}</div>
          <div className="valid-feedback">Looks good!</div>
        </div>
  
        <div className="col-md-6">
          <label htmlFor="nbr_place" className="form-label">
            Number of Places
          </label>
          <select
            className={`form-select ${
              errors.nbr_place ? "is-invalid" : "is-valid"
            }`}
            id="nbr_place"
            {...register("nbr_place", {
              required: "Please select the number of places",
            })}
          >
            <option value="" disabled selected>
              Choose...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <div className="invalid-feedback">{errors.nbr_place?.message}</div>
          <div className="valid-feedback">Looks good!</div>
        </div>
  

  <div className="col-md-12">
          <label htmlFor="car_chassis_number" className="form-label">
          Chassis number
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.car_chassis_number ? "is-invalid" : "is-valid"
            }`}
            id="car_chassis_number"
            placeholder="enter Numéro de châssis ( 1HGCM82633A123456 )"
            {...register("car_chassis_number", {
              required: "enter Numéro de châssis ( 1HGCM82633A123456 )",
              minLength: {
                value: 7,
                message: "car_chassis_number must be at least 7 characters",
              },
              maxLength:{
                value:7,
                message:"car_chassis_number must not contain more than 7 characters"
              },
            })}
          />
          <div className="invalid-feedback">
            {errors.car_chassis_number?.message}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>
  
 
  <center>
    <h2>2. Informations sur le propriétaire</h2>
  </center>

  <div className="col-md-6" >
          <label htmlFor="drivers_license" className="form-label">
            Driving License Number
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.drivers_license ? "is-invalid" : "is-valid"
            }`}
            id="drivers_license"
            placeholder="Enter driving license number"
            {...register("drivers_license", {
              required: "Driving license number is required",
            })}
          />
          <div className="invalid-feedback">
            {errors.drivers_license?.message}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>

        {/* Identity Card */}
        <div className="col-md-6">
          <label htmlFor="card_identity" className="form-label">
            Identity Card Number
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.card_identity ? "is-invalid" : "is-valid"
            }`}
            id="card_identity"
            placeholder="Enter identity card number"
            {...register("card_identity", {
              required: "Identity card number is required",
            })}
          />
          <div className="invalid-feedback">
            {errors.card_identity?.message}
          </div>
          <div className="valid-feedback">Looks good!</div>
        </div>

  <center>
    <h2>3. Informations administratives</h2>
  </center>

  <div className="col-md-3" >
          <label htmlFor="car_status" className="form-label">
            Vehicle Status
          </label>
          <select
            className={`form-select ${
              errors.car_status ? "is-invalid" : "is-valid"
            }`}
            id="car_status"
            {...register("car_status", {
              required: "Please select the vehicle status",
            })}
          >
            <option value="" disabled selected>
              Choose...
            </option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
          <div className="invalid-feedback">{errors.car_status?.message}</div>
          <div className="valid-feedback">Looks good!</div>
        </div>


        <div className="col-md-3">
          <label htmlFor="gray_card" className="form-label">
            Gray Card
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.gray_card ? "is-invalid" : "is-valid"
            }`}
            id="gray_card"
            placeholder="Enter gray card number"
            {...register("gray_card", {
              required: "Gray card is required",
            })}
          />
          <div className="invalid-feedback">{errors.gray_card?.message}</div>
          <div className="valid-feedback">Looks good!</div>
        </div>

  <div className="col-md-6">
    <label htmlFor={`${errors.assurance_company ? 
                    "assurance_company" : errors.assurance_policy_number ? "assurance_policy_number" : "assurance_date_expiration"}`} 
    className="form-label">Assurance</label>
    <input 
      type="text" 
      className={`form-control ${errors.assurance_company ? "is-invalid" : "is-valid"}`} 
      id="assurance_company" 
      placeholder="Enter the name of the insurance company" 
      aria-describedby="validationServer03Feedback" 
      required 
      {...register("assurance_company", {required:"Enter the name of the insurance company", minLength:{ value:1, message:"Enter the name of the insurance company"}})}
    />
    <input 
      type="text" 
      className={`form-control ${errors.assurance_policy_number ? "is-invalid" : "is-valid"}`} 
      id="assurance_policy_number" 
      placeholder="Enter Insurance policy number" 
      aria-describedby="validationServer03Feedback" 
      required 
      {...register("assurance_policy_number", {required:"Enter Insurance policy number", minLength:{ value:1, message:"Enter Insurance policy number"}})}
    />
    <i>Insurance expiration date</i>
      <input 
      type="date" 
      className={`form-control ${errors.assurance_company ? "is-invalid" : "is-valid"}`} 
      id="assurance_date_expiration" 
      alt="Enter Insurance expiration date" 
      aria-describedby="validationServer03Feedback" 
      required 
      {...register("assurance_date_expiration", {required:"Enter Insurance expiration date", minLength:{ value:1, message:"Enter Insurance expiration date"}})}


    />
    <div id="validationServer03Feedback" className="invalid-feedback">
      {errors.assurance_company?.message}. &nbsp;&nbsp;&nbsp;
      {errors.assurance_policy_number?.message}&nbsp;&nbsp;
      {errors.assurance_date_expiration?.message}
    </div>
    <div id="validationServer03Feedback" className="valid-feedback">
      Looks good !
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
        className="form-control is-valid" 
        id="validationServerUsername" 
        placeholder="enter Numéro de châssis ( 1HGCM82633A123456 )" 
        aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" 
        {...register("car_photo")}
      />
      <div id="validationServerUsernameFeedback" className="valid-feedback">
        good
      </div>
    </div>
  </div>



  <div className="col-md-3">
    <label htmlFor="use_category" className="form-label">Use category</label>
    <select 
      className={`form-select ${
        errors.use_category ? "is-invalid" : "is-valid"
      }`}
      id="use_category" 
      aria-describedby="validationServer04Feedback" 
      required
      {...register("use_category", {
        required: "Please select the vehicle use category",
      })}
    >
      <option selected disabled value="">Choose...</option>
      <option value="Private"><strong>Private or professional use.</strong></option>
      <option value="Taxi"><strong>Taxi, delivery, etc.</strong></option>
    </select>
    <div className="invalid-feedback">{errors.use_category?.message}</div>
    <div className="valid-feedback">Looks good!</div>
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
        {...register("have_gps")}
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
        {...register("have_clim")}
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
        {...register("have_heated_seats")}

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
        {...register("agree")}
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
