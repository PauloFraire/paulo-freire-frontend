import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout/Layout.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

//pages
import Home from "./pages/Home.jsx";
import Organization from "./pages/Organization.jsx";
import EducationalOffer from "./pages/EducationalOffer";
import AcademyActivities from "./pages/AcademyActivities.jsx";
import CallsEducational from "./pages/CallsEducational.jsx";
import Bibloteca from "./pages/Bibloteca.jsx";
import Login from "./auth/pages/Login.jsx";
import Registro from "./auth/pages/Registro.jsx";
import NewItemPage from "./admin/pages/news/NewItemPage.jsx";
import HistoryDetail from "./pages/HistoryDetail.jsx";
import Acercade from "./components/Acercade.jsx";

//admin
import PrivateRoute from "./pages/PrivateRoute.jsx";
import DashboardLayout from "./admin/DashboardLayout.jsx";
import Dashboard from "./admin/pages/Dashboard.jsx";
import AcademyActivitiesAdmin from "./admin/pages/academy/AcademyActivitiesAdmin.jsx";
import AdminNews from "./admin/pages/news/AdminNews.jsx";
import AddNews from "./admin/pages/news/AddNews.jsx";
import EditNews from "./admin/pages/news/EditNews.jsx";
import AdminUsers from "./admin/pages/users/AdminUsers.jsx";
import AddUser from "./admin/pages/users/AddUser.jsx";
import About from "./admin/pages/about/About.jsx";
import Terminos from "./admin/pages/about/Terminos.tsx";
import Politica from "../../PauloFraireBack/models/Politicas.js";
import Deslinde from "./admin/pages/about/Deslinde.tsx";

//ContextContemporaneo
import ContextContemporaneo from "./contexto-comtemporaneo/ContextContemporaneo.jsx";

//user
import UserLayout from "./user/pages/UserLayout.jsx";
import UserProfile from "./user/pages/UserProfile.jsx";
import Politicas from "./admin/pages/about/Politicas.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/organization", element: <Organization /> },
      { path: "/educational-offer", element: <EducationalOffer /> },
      { path: "/calls", element: <CallsEducational /> },
      { path: "/academy-activities", element: <AcademyActivities /> },
      { path: "/biblioteca", element: <Bibloteca /> },
      { path: "/login", element: <Login /> },
      { path: "/registro", element: <Registro /> },
      { path: "/new-item/:id", element: <NewItemPage /> },
      { path: "/contexto-educativo", element: <ContextContemporaneo /> },
      { path: "/historia", element: <HistoryDetail /> },
      { path: "/acercade", element: <Acercade /> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },

  {
    path: "/admin",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      </AuthProvider>
    ),
    children: [
      { path: "/admin/home", element: <Dashboard /> },
      {
        path: "/admin/academy-activities",
        element: <AcademyActivitiesAdmin />,
      },
      { path: "/admin/news", element: <AdminNews /> },
      { path: "/admin/add-news", element: <AddNews /> },
      { path: "/admin/edit-news/:id", element: <EditNews /> },
      { path: "/admin/users", element: <AdminUsers /> },
      { path: "/admin/add-user", element: <AddUser /> },
      { path: "/admin/about", element: <About /> },
      { path: "/admin/about/deslinde", element: <Deslinde /> },
      { path: "/admin/about/politicas", element: <Politicas /> },
      { path: "/admin/about/terminos", element: <Terminos /> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },

  {
    path: "/user",
    element: (
      <AuthProvider>
        <PrivateRoute>
          <UserLayout />
        </PrivateRoute>
      </AuthProvider>
    ),
    children: [
      { path: "/user/profile", element: <UserProfile /> },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
