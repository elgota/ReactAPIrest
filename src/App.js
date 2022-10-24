import logo from './logo.svg';
import './App.css';
import Navbar from './components/public/Navbar';
import { Main } from './components/public/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EmpleadoForm } from './components/public/EmpleadoForm';
import { HOME, FORM, LIST } from './constants/App.constants';
import { EmpleadoTable } from './components/public/EmpleadosTable';


function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter>
      
      <Routes>
        <Route path={HOME} element={<Main/>}/>
        <Route path={FORM} element={<EmpleadoForm/>}/>
        <Route path={LIST} element={<EmpleadoTable/>}/>

      </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
