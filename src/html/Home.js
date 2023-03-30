import React from "react";
import '../index.css';
import NavBar from "./Componentes/Header";
import Footer from "./Componentes/Footer";

import c240 from "../assets/c240.png"
import c240gb from "../assets/c240gb.png"
import c480 from "../assets/c480.png"
import c480gb from "../assets/c480gb.png"
import wd240 from "../assets/wd-240gb.png"
import wd480 from "../assets/wd-480gb.png"



const Home = () => {

    return (
        <>
            <NavBar />
            <div className="container-fluid ">

                <section className=" justify-content-center align-content-center home">
                    {/* <img src='./assets/fondo.jpg' alt="fondo" className="w-100"/> */}
                    <section className="card-header row gap-2 justify-content-center align-middle text-center ">
                        <div className="card col-5 align-items-center">
                        <p> Disco Duro Crucial 240GB</p>
                            <img src={c240} className="rounded w-50" />
                            <img src={c240gb} className="rounded-3 w-50" />
                           
                        </div>
                        <div className="card col-5 align-items-center">
                        <p> Disco Duro Crucial 480GB</p>

                            <img src={c480} className="rounded-3 w-50" />
                            <img src={c480gb} className="rounded-3 w-50" />
                        </div>
                        <div className="card col-5 align-items-center">
                        <p> Disco Duro Western Green 240GB</p>
                            <img src={wd240} className="rounded-3 w-50" />
                            
                            </div>
                            <div className="card col-5 align-items-center">
                            <p> Disco Duro Western Green 480GB</p>
                            <img src={wd480} className="rounded-3 w-50" />
                          
                        </div>

                    </section>

                </section>


            </div>
            <Footer />
        </>
    )
}

export default Home

