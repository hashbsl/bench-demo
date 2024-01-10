import './App.css';
import DashBoard from './components/dashboard/DashBoard';
import Login from './login/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Login />} />
       <Route path="/dashboard" exact element={<DashBoard />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
