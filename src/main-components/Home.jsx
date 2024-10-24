// import React from 'react';
import MyGraphic from "../../public/assets/images/logo.png"

export default function home_page() {
  return (
    <>
      <section className="home" id="home">
        <div className="logo" id="home" style={{display: "block"}}>
          <img className="logo" src={MyGraphic} alt="My brand logo" />
        </div>

        <article>
          <p className="intro"> 
            Welcome to Stellar Digital Experience Guider
          </p>
          <p className="intro-line">
            Where we craft dependable user-friendly designs that spark unforgettable digital journeys.
          </p>
          <p className="intro-line">
            Let&apos;s transform your vision into an extraordinary experience!
          </p>
        </article>  
      </section>
    </>
  );
};