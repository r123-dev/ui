import React, { useState, useEffect, useLayoutEffect } from "react";

import "../Css/home.css";

// import CSSTransitionGroup from "react-transition-group";
import { useSelector } from "react-redux";
import Product from "./Product";
import "aos/dist/aos.css";

function useWindowSize() {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  
  return size;
}
let i=0;
function Home() {
  const dsplay = useWindowSize();
  const [slide, setSlide] = useState("");
  useEffect(() => {
    if (dsplay < 430) {
      setSlide("fade-left");
    } else {
      setSlide("");
    }
  }, [dsplay]);
  
  const [products,cart]=useSelector((item)=>{return([item.Reducer.products,
  item.Reducer.cart])})
  

  return (
    <div className="home">
      <div className="homeContainer">
        <div className="home_container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg"
                  className=" home_img d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg"
                  className=" home_img d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/Family/16thJune/D20729242_IN_WLME_SamsungM_Family_DesktopTallHero_1500x600._CB666608686_.jpg"
                  className=" home_img d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="home-product" style={{ marginTop: "-180px" }}>
          
          {products?.map((item)=>
            
          <Product
              
            className={item.className}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            quantity={cart[item.id]?.quantity??0}
          />)}
          

                  </div>
      </div>
    </div>
  );
}

export default Home;
