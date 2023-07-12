import React from "react";
import furnitureImg from "../img/7.svg"
import fr1 from "../img/fr1.png"
import fr2 from "../img/fr2.png"
import fr3 from "../img/fr3.png"
import fr4 from "../img/fr4.png"
import fr5 from "../img/fr5.png"
import fr6 from "../img/fr6.png"
import fr7 from "../img/fr7.png"
import fr8 from "../img/fr8.png"


function Furniture() {
    return (
        <div className="container">
            <div className="furniture">
                <center>
                    <h1>Our Furniture</h1>
                    <p>It is a long established fact that a reader will be distracted by the service.</p>
                </center>
                <div className="" style={{display:"flex",justifyContent:"space-between",alignItems:"center,",margin:"40px 0"}}>
                   <div className="" style={{display:"flex",alignItems:"center"}}>
                       <input type="text" placeholder="Search a furniture  " className="furniture-inp"/>
                       <img src={furnitureImg} alt="" />
                   </div>
                    <div className="">
                        <a href="#" style={{color:"#000"}}>All</a>
                        <a href="#">Chair</a>
                        <a href="#">Table</a>
                        <a href="#">Bed</a>
                        <a href="#">Sofa</a>
                        <a href="#">Wardrobe</a>
                        <a href="#">Almirah</a>
                        <a href="#">Dimple</a>
                        <a href="#">Rack</a>
                        <a href="#">Stand</a>
                    </div>
                </div>
          <div className="furniture-nav">
              <div className="fr-img" style={{
                  display:"flex",
                  justifyContent : "space-between",
                  flexWrap: "wrap",
              }}>
                  <div className="fr-nav-img">
                      <img src={fr1} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr2} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr3} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr4} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr5} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr6} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr7} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
                  <div className="fr-nav-img">
                      <img src={fr8} alt=""/>
                      <div style={{
                          display:"flex",justifyContent:"space-between",alignItems:"center"
                      }}><h2>Furniture Name</h2><h2>$ 250</h2></div>
                      <div className="fr-p"><p >It is a long estiabs lished fact that a reader will be the service.</p></div>
                      <button className="furniture-btn">Order Now</button>
                  </div>
              </div>
          </div>
            </div>
        <center>
            <button className="furniture-btn" style={{margin:"50px 0"}}>View All</button>
        </center>
        </div>

    )
}

export default Furniture