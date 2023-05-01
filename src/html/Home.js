import React, { useState, useEffect } from "react";
import '../index.css';
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import Sidebar from "./Componentes/Sidebar";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/switch.jpeg";
import PacmanLoader from "react-spinners/PacmanLoader";

const Home = () => {

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])


    return (
        <>
            {/* <PacmanLoader color="#015A06" /> */}

            <Header />

            {loading ? (
                <div className=" d-flex justify-content-center mt-5 pt-5 align-items-center">
                    <PacmanLoader
                        className='loading '
                        color={'#015A06'}
                        loading={loading}
                        size={60}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>) : (

                <div className="container-fluid" >
                    <div className="container py-5 mb-5">
                        <div className="d-flex card shadow-lg mb-5 ">
                            <h1 className=" card-header bg-success bg-gradient text-white fw-bolder text-center py-4"> Nosotros somos PcTaste <br></br> Servicio Técnico de Computación </h1>
                            <div className="card-body justify-content-center d-grid  py-5  home">
                                <section className=" col-12  ">
                                    <h1 className="text-decoration-underline fst-italic">Hacemos mantenciones y mejoras a Notebook y Computadores </h1>
                                    <ul className=" fs-3">
                                        <li> Limpieza de ventiladores. </li>
                                        <li> Limpieza de teclado. </li>
                                        <li> Limpieza completa. </li>
                                        <li> Cambio de pasta termica. </li>
                                        <li> Formateo con/sin respaldo de información. </li>
                                        <li> Actualización de Sistemas Operativos. </li>
                                        <li> Clonación de Disco Duro. </li>
                                        <li> Instalación de piezas (RAM, Disco Duro HDD y SSD). </li>
                                    </ul>
                                </section>
                                <section className="col-12 ">
                                    <h1 className=" text-decoration-underline fst-italic">Hacemos mantenciones a PlayStation 4</h1>
                                    <ul className=" fs-3">
                                        <li> Cambio de puertos de carga en controles. </li>
                                        <li> Limpieza a controles. </li>
                                    </ul>
                                </section>
                                <section className="col-12 ">
                                    <h1 className="text-decoration-underline fst-italic">Hacemos mantenciones a Nintendo Switch</h1>
                                    <ul className=" fs-3 ">
                                        <li> Cambio de mica. </li>
                                        <li> Cambio de piezas en los controles. </li>
                                        <li> Limpieza completa. </li>
                                    </ul>
                                </section>
                                <section className=" col-12 ">
                                    <h1 className="fst-italic text-decoration-underline ">  También... </h1>
                                    <ul className=" fs-3">
                                        <li> Te asesoramos para buscar piezas de Computadora o Notebook. </li>
                                        <li> Te armamos un computador con tu presupuesto. </li>
                                        <li> Hacemos presupuestos. </li>
                                        <li> Vendemos productos, puedes revisar el catálogo
                                            ➡ <Link to={"/Venta"} className=" text-white text-decoration-none" >
                                                <span className=" text-decoration-none"> aquí. </span>
                                            </Link> </li>
                                    </ul>
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

export default Home

