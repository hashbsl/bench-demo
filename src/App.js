import React from "react";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./login/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";
import { authorizeUser } from "./api/services";
import "./App.css";

function App() {
  const defaultPath = authorizeUser() ? "/dashboard" : '/';
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute component={DashBoard} isAuthenticated={authorizeUser()} />
          }
        />
        <Route path="*" element={<Navigate to={defaultPath} replace/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
