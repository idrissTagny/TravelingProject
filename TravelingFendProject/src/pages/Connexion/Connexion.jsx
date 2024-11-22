import { Box, Button, ButtonBase, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import  axios  from "axios";
import { Link, useNavigate } from 'react-router-dom';



export default function Connexion() {
  const navigate = useNavigate()
  
  useEffect(()=>{
    if (localStorage.getItem("utilisateur")) {
      navigate("/")
    }
  })
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    axios.get(`http://localhost:3000/utilisateur?email=${data.email}`).then((resp1)=>{
      if (resp1.data.length > 0) {
        axios.get(`http://localhost:3000/utilisateur?motDepassword=${data.motDepassword}`).then((resp2)=>{
          if (resp2.data.length > 0) {
            axios.get(`http://localhost:3000/utilisateur?email=${data.email}&motDepassword=${data.motDepassword}` ).then((resp3)=>{
              if (resp3.data.length > 0) {
                localStorage.setItem("utilisateur", JSON.stringify(resp3.data[0]))
                toast.success("conexion reussie")
                setTimeout(()=>{
                  navigate("/")
                },2000)
              }else{
                  toast.error(" Cet utilisateur n'a pas de compte ")
              }
            }).catch((err)=>{
              console.log(err)
              toast.error("Une erreure est survenue")
            })  
            
          }else{
            toast.error(" Mot de passe incorrect ")
          }
        })
      }else{
        toast.error(" Addresse Email Introuvable ")
      }
    })
      
      
    }
  return (
    <div>
      <Stack 
        alignItems="center" 
        justifyContent="center" 
        width="100%" 
        height="100vh"
        bgcolor="#f5f5f5"
      >
        <div className='container'>
          <div className='row'>

            <div className='col-6' 
            style={
              { 
                width: '500px', 
                backgroundColor: '#fff', 
                padding:'3', 
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
              }}
            >
              Super de vous avoir avec nous, Idriss ! 
              Que vous conduisiez ou recherchiez un trajet : choisissez une meilleure façon de voyager.
              <br />
              Plus économique, plus humaine et meilleure pour l’environnement.
            </div>

            <div className='col-6' style={{ width: '500px', backgroundColor: '#fff', padding:'3' }}>
              <Stack>
                <Box>
                  <Typography variant='h2'>
                    Connexion
                  </Typography>

                  <form style={{
                    marginTop: 4,
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                  >
                    <Stack direction={"column"} gap={"3"}>

                      <TextField id="standard-basic" 
                      label="veillez confirmer  votre addresse Email"
                       type='email' 
                       variant="standard" 
                       fullWidth size='small'
                       {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                        
                       />

                      <TextField id="standard-basic" 
                       type='password' 
                       variant="standard" 
                      label="Veilez saisir votre mot de pass"

                       fullWidth 
                       size='small'
                       {...register('motDepassword', { required: 'Password is required',  })}
                        
                       />

                    </Stack>

                    <Button sx={{
                      marginTop:3.
                    }} variant="contained" type='submit'>Connecter Vous</Button>

                    <Box sx={{
                      marginTop: 5,
                    }}>
                      <p>
                        Voulez-vous vous inscrire ? <Link to={"/inscription"}> cliquer ici </Link>
                      </p>
                      
                    </Box>
                  </form>
                  
                </Box>
              </Stack>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
}
