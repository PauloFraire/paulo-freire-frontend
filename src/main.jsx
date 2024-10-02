import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Layout from './Layout/Layout.jsx';
import AuthProvider from './context/AuthProvider.jsx';

//pages
import Home from './pages/Home.jsx';
import Organization from './pages/Organization.jsx';
import EducationalOffer from './pages/EducationalOffer';
import AcademyActivities from './pages/AcademyActivities.jsx';
import CallsEducational from './pages/CallsEducational.jsx';
import NewsDetail from './pages/NewsDetail.jsx';
import Bibloteca from './pages/Bibloteca.jsx';
import Login from './auth/pages/Login.jsx';
import NewItemPage from './admin/pages/news/NewItemPage.jsx';
import HistoryDetail from './pages/HistoryDetail.jsx';

//admin
import PrivateRoute from './pages/PrivateRoute.jsx';
import DashboardLayout from './admin/DashboardLayout.jsx';
import Dashboard from './admin/pages/Dashboard.jsx';
import AcademyActivitiesAdmin from './admin/pages/academy/AcademyActivitiesAdmin.jsx';
import AdminNews from './admin/pages/news/AdminNews.jsx';
import AddNews from './admin/pages/news/AddNews.jsx';
import EditNews from './admin/pages/news/EditNews.jsx';
import AdminUsers from './admin/pages/users/AdminUsers.jsx';
import AddUser from './admin/pages/users/AddUser.jsx';


import ContextContemporaneo from './contexto-comtemporaneo/ContextContemporaneo.jsx';




//Dummy authentication functions
const router = createBrowserRouter([
  {
    path: '/',
    element:
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ,
    children: [
      { index: true, element: <Home /> },
      { path: '/organization', element: <Organization /> },
      { path: '/educational-offer', element: <EducationalOffer /> },
      { path: '/calls', element: <CallsEducational /> },
      { path: '/academy-activities', element: <AcademyActivities /> },
      { path: '/biblioteca', element: <Bibloteca /> },
      { path: '/login', element: <Login /> },
      { path: '/new-item/:id', element: <NewItemPage /> },
      { path: '/contexto-educativo', element: <ContextContemporaneo /> },
      { path: '*', element: <div>Not Found</div> },
      { path: '/historia', element: <HistoryDetail /> },
    ]
  },

  {
    path: '/admin',
    element:
      <AuthProvider >
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      </AuthProvider>
    ,
    children: [
      {
        path: '/admin/home',
        element: <Dashboard />
      },
      {
        path: '/admin/academy-activities',
        element: <AcademyActivitiesAdmin />
      },
      {
        path: '/admin/news',
        element: <AdminNews />
      },
      {
        path: '/admin/add-news',
        element: <AddNews />
      },
      {
        path: '/admin/edit-news/:id',
        element: <EditNews />
      },
      {
        path: '/admin/users',
        element: <AdminUsers />
      },
      {
        path: '/admin/add-user',
        element: <AddUser />
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
