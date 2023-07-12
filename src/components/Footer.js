import React from "react";
import ft1 from "../img/ft1.png"
import ft2 from "../img/ft2.png"
import ft3 from "../img/ft3.png"
import ft4 from "../img/ft4.png"
import ft5 from "../img/ft5.png"
import ft6 from "../img/ft6.png"
function Footer (){
    return(
        <div id={"footer"}>
            <div className="container">
            <div className="footer">
                <div className="foot-block1">
                    <h1>SQ R3</h1> <br/>
                    <p>
                        <img src={ft1} alt=""/>
                        +8801760-007083
                    </p>
                    <p>
                        <img src={ft2} alt=""/>
                        uiuxmdomith@gmail.com
                    </p>
                    <p className={"ft-img "}>
                        <img src={ft3} alt=""/>
                        <img src={ft4} alt=""/>
                        <img src={ft5} alt=""/>
                        <img src={ft6} alt=""/>
                    </p>
                </div>
                <div className="foot-block1">
                    <h2>Usefull Links</h2> <br/>
                   <p>Home</p>
                   <p>About Us</p>
                   <p>Service</p>
                   <p>Furniture</p>
                </div>
                <div className="foot-block1">
                    <h2>FAQ</h2> <br/>
                   <p>Lorem Ipsum Dolar</p>
                   <p>Lorem Ipsum Dolar</p>
                   <p>Lorem Ipsum Dolar</p>
                   <p>Lorem Ipsum Dolar</p>
                </div>
                <div className="foot-block1">
                    <h2>Newsletter</h2>
                    <input style={{margin:"0 20px 0 0"}} className={"foot-inp"} type="text" placeholder="Enter your mail"/>
                    <button className="foot-inp">Send</button> <br/>
                    <button className="foot-inp2">Download App</button>

                </div>
            </div>

            </div>
        </div>
    )
}
export default Footer