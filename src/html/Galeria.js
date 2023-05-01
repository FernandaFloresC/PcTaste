import React, { useState, useEffect } from "react";
import '../index.css';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

import uno from "../assets/1.jpg"
import dos from "../assets/2.jpg"
import tres from "../assets/3.jpg"
import cuatro from "../assets/4.jpg"
import cinco from "../assets/5.jpg"
import seis from "../assets/6.jpg"

import PacmanLoader from "react-spinners/PacmanLoader";

const Galeria = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <>

      <Header />

      {loading ? (
        <div className="d-flex justify-content-center pt-5 mt-5 align-items-center">
          <PacmanLoader
            className='loading'
            color={'#015A06'}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />  </div>) : (

        <div className="container-fluid" >
          <div className="py-5 mb-5">
            <div className="d-grid shadow-lg mb-5 ">
              <h1 className=" card-header text-black shadow fw-bolder text-center py-4"> Galeria </h1>
              <div className="card-body justify-content-center p-5">
                <section className="justify-content-center align-content-center m-5">
                  {/* <img src='./assets/fondo.jpg' alt="fondo" className="w-100"/> */}
                  <h1 className=" fst-italic justify-content-center align-items-center d-flex"> Estos son algunos de los servicios que ofrecemos </h1>
                  <section className="row  justify-content-center align-middle text-center ">
                    <div className="my-5 col-lg-4 col-md-5 align-items-center"> <img src={uno} className="rounded w-75" /> <h2 className=" fst-italic justify-content-center align-items-center d-flex"> Con este cambio de disco duro se realiza una mejora en cuanto a la velocidad. </h2>
                    </div>
                    <div className="my-5 col-lg-4 col-md-5 align-items-center "> <img src={dos} className="rounded-3 w-75" /><h2 className=" fst-italic justify-content-center align-items-center d-flex"> Con este cambio de puertos se realiza una mejora en su uso. </h2>
                    </div>
                    <div className="my-5 col-lg-4 col-md-5 align-items-center "> <img src={tres} className="rounded-3 w-75" /><h2 className=" fst-italic justify-content-center align-items-center d-flex"> Con el cambio de Joy-Con logramos un mejor manejo del mismo control. </h2>
                    </div>
                    <div className="my-5 col-lg-4 col-sm-5 align-items-center"> <img src={cuatro} className="rounded-3 w-75" /><h2 className=" fst-italic justify-content-center align-items-center d-flex">Con cambio de mica se logra la mejora visual de la Nintendo Switch y una protección extra para cuidarla.</h2>
                    </div>
                    <div className="my-5 col-lg-4 align-items-center"> <img src={cinco} className="rounded-3 w-75" /><h2 className=" fst-italic justify-content-center align-items-center d-flex"> Armamos el PC a domicilio, a tu gusto y con tu presupuesto. </h2>
                    </div>
                    <div className="my-5 col-lg-4 align-items-center"> <img src={seis} className="rounded-3 w-75" /><h2 className=" fst-italic justify-content-center align-items-center d-flex">Te ayudamos a encontrar las piezas que necesitas</h2>
                    </div>
                  </section>

                </section>

              </div>
            </div>
            {/* <div className="col-6 justify-content-center ">
                                <img src={logo} className="w-25 rounded-circle" /></div> */}
          </div>
          <div className="p-5">
            <Footer />
          </div>

        </div>
      )}
    </>
  )
}

export default Galeria

