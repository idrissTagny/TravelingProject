import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inscription from './pages/Inscription/Inscription.jsx'
import Connexion from './pages/Connexion/Connexion.jsx'
import { Toaster } from "react-hot-toast";
import { Box, Stack, TextField } from '@mui/material'
import Dashboard from './pages/dashboard/Dashboard1/Dashboard.jsx'
import Add_vehicule from './pages/dashboard/composant/fonctionalites/add_vehicule/Add_vehicule.jsx'
import Edit_travel from './pages/dashboard/composant/fonctionalites/edit_travel/Edit_travel.jsx'
import Consult_travel from './pages/dashboard/composant/fonctionalites/consult_travel/Consult_travel.jsx'
import InitVoyage from './pages/dashboard/composant/fonctionalites/InitVoyage/InitVoyage.jsx'
import Consult_route from './pages/dashboard/composant/fonctionalites/consult_route/Consult_route.jsx'


const route = createBrowserRouter([
  {
    path:"/",
    element: <body>
      <Dashboard/>
    </body>
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
  },
  {
    path:"/init_voyage",
    element:<InitVoyage/>
  },
  {
    path:"/add_vehicule",
    element: (
      <>
        <Add_vehicule/>
      </>
    ),
    // children:[
    //   {

    //   }
    // ]
  },
  {
    path:"/edit_travel",
    element:(<>
      <Edit_travel/>
    </>)
  },
  {
    path:"/consult_travel",
    element:(<>
      <Consult_travel/>
    </>)
  },
  {
    path:"/mes_trajets",
    element:(
      <>
        <Consult_route/>
      </>
    )
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={route}/>
  </StrictMode>,
)
