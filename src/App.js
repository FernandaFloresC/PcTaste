import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./html/Home";
import Venta from "./html/Venta";
import Galeria from "./html/Galeria";


function App() {

  const rutaservidor = "/";
  
  return (
    <Router>
        <Routes>
        {/* <Route index path={rutaservidor} element={<Login />} /> */}
        <Route path={rutaservidor } element={<Home />} />
        <Route path={rutaservidor + "/Venta" } element={<Venta />} />
        <Route path={rutaservidor + "/Galeria" } element={<Galeria />} />

        {/* <Route path={rutaservidor } element={<Home />} /> */}
        </Routes>
    </Router>  
  );
}

export default App;