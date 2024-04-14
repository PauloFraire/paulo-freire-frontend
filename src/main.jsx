import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Layout from './Layout/Layout.jsx';

//pages
import Home from './pages/Home.jsx';
import Organization from './pages/Organization.jsx';
import EducationalOffer from './pages/EducationalOffer';
import AcademyActivities from './pages/AcademyActivities.jsx';
import CallsEducational from './pages/CallsEducational.jsx';
import NewMtroMarcelo from './pages/NewMtroMarcelo.jsx';
import NewMtroReynaldo from './pages/NewMtroReynaldo.jsx';
import NewMtroJuan from './pages/NewMtroJuan.jsx';
import NewReunion from './pages/NewReunion.jsx';
import Bibloteca from './pages/Bibloteca.jsx';
import Login from './auth/pages/Login.jsx';

import DashboardLayout from './admin/DashboardLayout.jsx';
import Dashboard from './admin/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/organization', element: <Organization /> },
      { path: '/educational-offer', element: <EducationalOffer /> },
      { path: '/calls', element: <CallsEducational /> },
      { path: '/academy-activities', element: <AcademyActivities /> },
      { path: '/noticia-mtro-marcelo', element: <NewMtroMarcelo /> },
      { path: '/noticia-mtro-reynaldo', element: <NewMtroReynaldo /> },
      { path: '/noticia-mtro-juan', element: <NewMtroJuan /> },
      { path: '/noticia-reunion', element: <NewReunion /> },
      { path: '/biblioteca', element: <Bibloteca /> },
      { path: '/login', element: <Login /> },
      { path: '*', element: <div>Not Found</div> }
    ]
  },

  {
    path: '/admin',
    element: <DashboardLayout />,
    children: [
      {
        path: '/admin',
        element: <Dashboard />
      },
      {
        path: '/admin/organization',
        element: <Organization />
      },
      {
        path: '*',
        element: <div>Not Found</div>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
