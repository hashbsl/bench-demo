import "./App.css";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoutes";
import { authorizeUser } from "./login/services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute component={DashBoard} isAuthenticated={authorizeUser()} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
