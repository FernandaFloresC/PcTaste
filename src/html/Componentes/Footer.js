import React from "react";
import logo from "../../assets/Logo.png";
import "../../index.css"

const Footer = () => {
  return (
    <>
      <div className=" container-fluid" id="footer">
        {/* <div style={{ overflow: 'hidden', bottom: "0" }}  >
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: '#015A06', width: '136%', height: 272, transform: 'rotate(180deg) scaleX(-1)' }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />

          </svg> */}
          <div className='row ' id="">
            <div className="col-10 m-4">
              <div className=" ">
                {/* <img src="Logo.png" className=" rounded-3" width={250}/> */}
                <img src={logo} className="rounded-pill w-25" />


                <div className=" m-2">
                  <h6 className=" font-semibold text-white">Búscanos en nuestras redes</h6>
                  <ul className=" m-2">
                    <li className=" text-white mr-2"><i class="fa-brands fa-facebook"><a href="https://www.facebook.com/PcTaste-103564074866807" className="text-white text-decoration-none" target="_blank" rel="noreferrer"> Facebook</a></i> </li>
                    <li className="text-white mr-2"><i class="fa-brands fa-instagram"><a href="https://www.instagram.com/pctaste/" target="_blank" className="text-white text-decoration-none" rel="noreferrer"> Instagram</a></i> </li>
                  </ul>
                </div>
              </div>
            </div>



          </div>
        {/* </div> */}
      </div>

    </>
  );
}

export default Footer