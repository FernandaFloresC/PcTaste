import React from "react";
import logo from "../../assets/logobn.png";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    // const rutaservidor = "/";

    return (
        <>
            <nav className='position-relative top-0 d-flex align-items-center justify-content-around z-40' id="NavBar">
                <div className=' align-items-center align-middle '>
                <Link to={ "/"} className=" text-black mt-3">
                <img src={logo} className="logoh rounded-pill" />
                        </Link> 
                </div>
                <ul className="nav list-unstyled text-decoration-none pb-3">
                    <li className="">
                        {/* <Link to={rutaservidor + "/Dashboard"}  */}
                        <Link to={ "/"} className="dropdown-item text-black mt-3">
                            <i className="fa fa-home fa-2x"></i>{" "}
                            <span className=""> Inicio</span>
                        </Link>
                    </li>
                   
                    <li className="">
                        {/* <Link to={rutaservidor +"/Historial"}  */}
                        <Link to={ "/Galeria"} className="dropdown-item text-black mt-3">
                        <i class="fa-solid fa-camera fa-2x"></i>
                            <span className=""> Galeria</span>
                        </Link>
                    </li>
                    <li className="">
                        {/* <Link to={rutaservidor +"/Historial"}  */}
                        <Link to={ "/Venta"} className="dropdown-item text-black mt-3">
                        <i class="fa-solid fa-cart-shopping fa-2x"></i>
                            <span className=""> Productos en venta</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header