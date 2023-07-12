import React from "react";
import searchImg from "../img/1.svg"
function Header (){
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>SQ R3</h1>
                    <div className="header-nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Service</a>
                        <a href="#">Furniture</a>
                        <button className="header-btn">Order Now</button>
                        <img src={searchImg} alt=""/>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default Header
