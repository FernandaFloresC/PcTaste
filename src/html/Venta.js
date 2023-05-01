import React, { useState, useEffect } from "react";
import '../index.css';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";

import c240 from "../assets/c240.png"
import c240gb from "../assets/c240gb.png"
import c480 from "../assets/c480.png"
import c480gb from "../assets/c480gb.png"
import wd240 from "../assets/wd-240gb.png"
import wd480 from "../assets/wd-480gb.png"
import ram4 from "../assets/ram-4gb.png"
import ram8 from "../assets/ram-8gb.png"
import cas from "../assets/case.png"
import cases from "../assets/cases.png"

import PacmanLoader from "react-spinners/PacmanLoader";

const Venta = () => {

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
          <div className=" py-5 mb-5">
            <div className="d-grid shadow-lg mb-5 ">
              <h1 className=" card-header text-black shadow fw-bolder text-center py-4"> Productos a la Venta </h1>
              <div className="card-body justify-content-center p-5">
                <section className="justify-content-center align-content-center ">
                  {/* <img src='./assets/fondo.jpg' alt="fondo" className="w-100"/> */}

                  <section className="row  justify-content-center align-middle text-center ">
                    <div className=" card col-lg-4 col-md-5 align-items-center">
                      <h2> Disco Duro Crucial 240GB</h2>

                      <img src={c240} className="rounded w-50" />
                      <img src={c240gb} className="rounded-3 w-50" />
                    </div>
                    <div className="card btn btn-outline-dark col-lg-4 col-md-5 align-items-center disabled">
                      <h2> Disco Duro Crucial 480GB</h2>
                      <img src={c480} className="rounded-3 w-50" />
                      <img src={c480gb} className="rounded-3 w-50" />
                    </div>
                    <div className="card  col-lg-4 col-md-5 align-items-center ">
                      <h2> Disco Duro Crucial 480GB</h2>
                      <img src={cases} className="rounded-3 w-75" />
                      <img src={cas} className="rounded-3 w-50" />
                    </div>
                    <div className="card  col-lg-4 col-sm-5 align-items-center">
                      <h2> Disco Duro Western Green 240GB</h2>
                      <img src={wd240} className="rounded-3 w-50" />
                    </div>
                    <div className="card  col-lg-4 align-items-center">
                      <h2> Disco Duro Western Green 480GB</h2>
                      <img src={wd480} className="rounded-3 w-50" />
                    </div>
                    <div className="card col-lg-4 align-items-center">
                      <h2> RAM 4GB</h2>
                      <img src={ram4} className="rounded-3 w-50" />
                    </div>
                    <div className="card col-lg-4 align-items-center">
                      <h2> RAM 8GB</h2>
                      <img src={ram8} className="rounded-3 w-50" />
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

export default Venta

