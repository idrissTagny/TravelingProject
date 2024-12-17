import { Box, Button, ButtonBase, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import  axios  from "axios";
import { Link, useNavigate } from 'react-router-dom';



export default function Inscription() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if(data.motDepassword !== data.ConfirmPassword){
      toast.error("les mots de passes ne correspondent pas.")
      
    }else{
      axios.get(`http://localhost:3000/utilisateur?email=${data.email}` ).then((resp)=>{
        if (resp.data.length > 0) {
          toast.error(" le compte existe deja ")
        }else{

          axios.post("http://localhost:3000/utilisateur",data).then((resp)=>{
            console.log(resp)
            toast.success("Inscription reussie")

            setTimeout(()=>{
              navigate("/connexion")
            },2000)
    
          }).catch((err)=>{
            console.log(err)
            toast.error("Une erreure est survenue")
          })
        }
      }).catch((err)=>{
        console.log(err)
        toast.error("Une erreure est survenue")
      })
      
    }
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
                    Inscription
                  </Typography>

                  <form style={{
                    marginTop: 4,
                  }}
                  onSubmit={handleSubmit(onSubmit)}
                  >
                    <Stack sx={{
                      direction:"column",
                      "gap":3
                    }}>
                    <TextField id="standard-basic" label="veillez saisir votre nom" 
                      variant="standard" 
                      fullWidth 
                      size='small'
                      {...register("nomUtilisateur", {required:"Veillew saisir un nom", minLength:{
                        value:2, message:"Veillew saisir un nom de plus de 2 caractere"
                      }})}
                      />
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
                       {...register('motDepassword', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                        
                       />
                      
                      <TextField id="standard-basic"                       
                       type='password' 
                       variant="standard" 
                      label="Veilez confirmer votre mot de pass"

                       fullWidth 
                       size='small'
                       {...register('ConfirmPassword', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
                        
                       />
                    </Stack>

                    <Button sx={{
                      marginTop:3.
                    }} variant="contained" type='submit'>Inscription</Button>
                    <Box sx={{
                      marginTop: 5,
                    }}>
                      <p>
                        Voulez-vous vous inscrire ? <Link to={"/connexion"}> cliquer ici </Link>
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
