import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Inscription from './pages/Inscription/Inscription.jsx'
import Connexion from './pages/Connexion/Connexion.jsx'
import { Toaster } from "react-hot-toast";
import { Box, Stack, TextField } from '@mui/material'

const route = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>
  },
  {
    path:"/inscription",
    element:<Inscription/>
  },
  {
    path:"/connexion",
    element:<Connexion/>
  },
  {
    path:"*",
    element:<>
      <Stack sx={{
        height: "100vh",
        width:"100%",
        alignItems: "center",
        justifyContent:"center"
      }}>
        <p>
          ERREUR 404
        </p>
        <p>
          la page que vous cherchez est introuvable 
        </p>
      </Stack>
    </>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={route}/>
  </StrictMode>,
)
