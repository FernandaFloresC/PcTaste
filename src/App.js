import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./html/Home";



function App() {

  const rutaservidor = "/"; //Produccion

  return (
    <Router>
        <Routes>
        {/* <Route index path={rutaservidor} element={<Login />} /> */}
        <Route path={rutaservidor } element={<Home />} />
        </Routes>
    </Router>  
  );
}

export default App;