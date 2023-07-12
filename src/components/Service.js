import React from "react";
import ServiceImg1 from "../img/16.png"
import ServiceImg2 from "../img/17.png"
import ServiceImg3 from "../img/18.png"
import ServiceImg4 from "../img/19.png"
import ServiceImg5 from "../img/20.png"
import ServiceImg6 from "../img/21.png"
import ServiceImg7 from "../img/22.png"
import ServiceImg8 from "../img/23.png"

function Service() {
    return (
        <div className="container">
            <div id="service">
                <div className="about" style={{}}>
                    <div className="container">
                        <h1>Learn about us</h1>
                        <p className="p-img">
                            <img src={ServiceImg1} alt=""/> It’s short title here
                        </p>
                    </div>

                    <div className="about-nav" style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <div>
                            <img src={ServiceImg2} alt=""/>
                        </div>
                        <div className="" style={{
                            margin: "0 0 0 0 ",
                        }}>
                            <p style={{
                                width: 662,

                            }}>Lorem Ipsum has been the industry's standard dummy text ever to since the 1500s, type and
                                scrambled it to make a type specimen book. It has survived not only five centuries, but
                                also
                                the leap into electronic typesetting. type and scrambled it to make a type specimen
                                book. It
                                has survived not only five centuries, but also the leap into electronic typesetting</p>
                            <button className="header-btn" style={{
                                margin: "30px 0  0 0 ",
                            }}>More about us
                            </button>
                            <div className="" style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: 662,

                            }}>
                                <img src={ServiceImg3} alt=""/>
                                <img src={ServiceImg4} alt=""/>
                                <img src={ServiceImg5} alt=""/>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="service">
                    <h1>We provide that service</h1>
                    <div style={{
                        display: "flex",
                        // justifyContent : "center",
                        alignItems: "center",
                        margin: "30px 0 0 0"
                    }}>
                        <img src={ServiceImg1} alt=""/>
                        <div style={{
                            width: 358,
                        }}>
                            <p>
                                It is a long established fact that a reader will be distracted by the service.
                            </p>
                        </div>
                    </div>
                    <div className="" style={{
                        display : "flex",
                        justifyContent : "space-between",
                        margin : " 40px 0",
                    }}>
                        <div className="service-nav">
                            <div className="service-nav1">
                                <img src={ServiceImg6} alt=""/>
                                <h3>Free Delevary</h3>
                                <div className="" style={{width:297,}}>
                                    <p>It is a long established fact that a reader will be the service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-nav">
                            <div className="service-nav1">
                                <img src={ServiceImg7} alt=""/>
                                <h3>100% Guarnatee</h3>
                                <div className="" style={{width:297,}}>
                                    <p>It is a long established fact that a reader will be the service.</p>
                                </div>
                            </div>
                        </div>
                        <div className="service-nav">
                            <div className="service-nav1">
                                <img src={ServiceImg8} alt=""/>
                                <h3>Best Quality</h3>
                                <div className="" style={{width:297,}}>
                                    <p>It is a long established fact that a reader will be the service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Service