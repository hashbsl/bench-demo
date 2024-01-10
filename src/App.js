import './App.css';
import Login from './login/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Login />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
