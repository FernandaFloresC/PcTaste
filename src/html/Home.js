import React from "react";
import '../index.css';
import NavBar from "../Componentes/Header";
import Footer from "../Componentes/Footer";

import c240 from "../assets/c240.png"
import c240gb from "../assets/c240gb.png"
import c480 from "../assets/c480.png"
import c480gb from "../assets/c480gb.png"
import wd240 from "../assets/wd-240gb.png"
import wd480 from "../assets/wd-480gb.png"


const Home = () => {

    return (
<>
<NavBar/>
<div className=" d-flex justify-content-center align-content-center " id="home">
    <section className=" home">
    <img src={c240} className="rounded w-25" />
    <img src={c240gb} className="rounded-3 w-25" />
    <img src={c480} className="rounded-3 w-25" />
    <img src={c480gb} className="rounded-3 w-25" />
    <img src={wd240} className="rounded-3 w-25" />
    <img src={wd480} className="rounded-3 w-25" />
    </section>


</div>
<Footer/>
</>
    

    )
}
    

export default Home

