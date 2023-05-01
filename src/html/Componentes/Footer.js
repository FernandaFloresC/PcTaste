import React from "react";
import logo from "../../assets/Logo.png";
import "../../index.css"

const Footer = () => {
  return (
    <>
      <div className=" " id="footer">


        <div className='row align-items-center justify-items-around m-2' id="">
          {/* <div className="col-12 row m-4"> */}
          <div className="col-6 justify-content-center d-grid">
            {/* <img src="Logo.png" className=" rounded-3" width={250}/> */}
            <img src={logo} className="rounded-pill logof" />
            {/* <h3 className=" text-white text-decoration-none text-center"><a href="https://www.google.com/maps/place/Parque+O%60higgins/@-33.4617853,-70.6580664,17.5z/data=!4m9!1m2!2m1!1ssan+ignacio+de+loyola+1228!3m5!1s0x9662c5108712fba3:0xa36b653937706bf2!8m2!3d-33.4609788!4d-70.6568466!16s%2Fm%2F0gkj4d2?authuser=0" target='_blank'  rel='noopener noreferrer' className=" text-white text-decoration-none"> Metro Parque O'Higgins</a></h3> */}
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