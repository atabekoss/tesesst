import React from "react";
// import HeroBg from "../img/2.svg"
import HeroImg1 from "../img/3.png"
import HeroImg2 from "../img/4.png"
import HeroImg3 from "../img/10.png"
import HeroImg4 from "../img/11.png"
import HeroImg5 from "../img/12.png"
import HeroImg6 from "../img/13.png"
import HeroImg7 from "../img/14.png"
import HeroImg8 from "../img/15.png"

function Hero() {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <img className="HeroImg-1" src={HeroImg1} alt=""/>
                    <img className="HeroImg-2" src={HeroImg2} alt=""/>
                    <div className="hero-set">
                        <img src={HeroImg3} alt=""/>
                        <img src={HeroImg4} alt=""/>
                        <img src={HeroImg5} alt=""/>
                    </div>
                    <div className="Hero-nav ">
                        <h1>Enjoy your life in our
                            luxurious furniture</h1>
                        <p>If you are looking for a furniture then you have
                            come to the right place.</p>
                        <button className="header-btn">Order Now</button>

                    </div>
                </div>
                <div className="hero-by">
                    <img src={HeroImg6} alt=""/>
                    <img src={HeroImg7} alt=""/>
                    <img src={HeroImg8} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero