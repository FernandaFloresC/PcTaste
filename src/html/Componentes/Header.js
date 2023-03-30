import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logobn.png";


const NavBar = () => {

    return (
        <>
            <nav className='position-relative top-0 d-flex justify-around w-screen box-border bg-[#FFF2F2]/50 shadow-lg backdrop-filter backdrop-blur-lg z-40' id="NavBar">
                <div className=' d-flex '>
                    <img src={logo} className=" w-50 rounded-pill" />
                </div>
                <h1>

                </h1>
            </nav>
        </>
    );
}

export default NavBar