import React from "react";
import logo from "../../assets/Logo.png";
import "../../index.css"
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <div className=" " id="footer">


        <div className='row align-items-center justify-items-around m-2' id="">
          {/* <div className="col-12 row m-4"> */}
          <div className="col-6 justify-content-center d-grid">
          <Link to={ "/"} className=" text-black mt-3">
          <img src={logo} className="rounded-pill logof" />
                        </Link> 
            
             </div>
          
          <div className="col-6 justify-content-center d-grid p-2">
            <h3 className=" font-semibold text-white ">Búscanos en nuestras redes</h3>
            <ul className="fs-4 m-2 list-unstyled text-center ">
              <li className=" text-white "><i class="fa-brands fa-facebook"><a href="https://www.facebook.com/PcTaste-103564074866807" className="text-white text-decoration-none" target="_blank" rel="noreferrer"><span> Facebook</span> </a></i> </li>
              <li className="text-white"><i class="fa-brands fa-instagram"><a href="https://www.instagram.com/pctaste/" target="_blank" className="text-white text-decoration-none" rel="noreferrer"> <span> Instagram</span></a></i> </li>
              <li className="text-white"> <i class="fa-brands fa-whatsapp text-white fs-3"><a href="https://api.whatsapp.com/send?phone=56961092981&text=hola,%20¿qué%20tal%20estás?" className=" text-white fs-4 text-decoration-none"> <span> Whatsapp</span></a></i> </li>
            </ul>
          </div>
         
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Footer