import React from "react";
import clientsImg1 from "../img/16.png"
import clientsImg2 from "../img/cl1.png"
import clientsImg3 from "../img/cl2.png"
import clientsImg4 from "../img/cl2.svg"
import clientsImg5 from "../img/cl1.svg"
import clientsImg6 from "../img/cl3.svg"

function Clients (){
    return (<div id="clients">
            <div className="container">
                <div className="clients">
                    <h1>What say clients about us</h1>
                    <div className="" style={{display:"flex",alignItems:"center", margin:"30px 0 50px 0"}}>
                        <img src={clientsImg1} alt="" style={{margin:"0 10px 0 0 "}}/>
                        <h2>It is a long established fact that a reader will be distracted by the service.</h2>
                    </div>
                 <div className="" style={{
                     display:"flex",
                     justifyContent:"space-around",
                     alignItems: "center",
                 }}>
                     <div className="clients-nav1" style={{
                         display:"flex",
                         justifyContent:"space-between",
                         alignItems:"center",
                         width:"564px"
                     }}>
                         <img src={clientsImg2} alt="" style={{borderRadius:"10px"}}/>
                         <div className="" style={{margin:"0 0 0 20px"}}>
                             <h3>Mr. Jone Ambrose</h3>
                             <p style={{margin: "10px 0"}}>20 - 07 - 21</p>
                             <p> <span>“</span> Lorem Ipsum has been the industry by standard
                                 dummy text ever to since the 1500s, it’s  type and scrambled it to make a type
                                 specimen book. It’s has survived not only five.<span>”</span></p>
                             <img src={clientsImg6} alt="" style={{margin:"10px 0 0 0"}}/>
                         </div>
                     </div>
                     <div className="clients-nav1" style={{
                         display:"flex",
                         justifyContent:"space-between",
                         alignItems:"center",
                         width:"564px"
                     }}>
                         <img src={clientsImg3} alt="" style={{borderRadius:"10px"}}/>
                         <div className="" style={{margin:"0 0 0 20px"}}>
                             <h3>Mr. Jone Ambrose</h3>
                             <p style={{margin: "10px 0"}}>20 - 07 - 21</p>
                             <p> <span>“</span> Lorem Ipsum has been the industry by standard
                                 dummy text ever to since the 1500s, it’s  type and scrambled it to make a type
                                 specimen book. It’s has survived not only five.<span>”</span></p>
                             <img src={clientsImg6} alt="" style={{margin:"10px 0 0 0"}}/>
                         </div>
                     </div>
                 </div>
                    <div className="clients-aos" >
                        <img src={clientsImg4} alt=""/>
                        <img src={clientsImg5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clients