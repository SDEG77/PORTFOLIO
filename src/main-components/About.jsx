// import React from "react";
import myself from "/assets/images/self-portrait.png"
import logo from "/assets/images/AU-logo2.png"


export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-images">
          <img className="sigrae" src={myself} alt="A portrait of Sigrae Derf E. Gabriel" />
          <img className="araullo-logo" src={logo} alt="Araullo logo" />
        </div>

        <h2>About Me</h2>
        <div className="main-horizontal-line"></div>

        <p>
          In the dynamic and professional landscape of the IT industry, the qualities of familiarity, dependability, and stability underscore my professional ethos. 
          My name is Sigrae Derf E. Gabriel, and I am an individual dedicated to cultivating enduring relationships and fostering a sense of trust in every interaction. 
        </p>
        <p>
          Within the professional sphere, my commitment to reliability stands as a cornerstone, consistently delivering results and ensuring that expectations are always met.
        </p>
        <p>
          Stability is the linchpin of my approach, offering a steady hand amidst uncertainty and complexity. 
          I navigate challenges with a composed demeanor, providing a sense of assurance to colleagues and people alike.
        </p>
        <p>
          The essence of my ethos extends beyond the workplace; it&apos;s a philosophy that permeates every aspect of my life. 
          It&apos;s not merely about steadfastness; it&apos;s about being a reliable constant amidst the ever evolving landscape of this industry, offering support and strategic guidance.
        </p>
        <p>
          My identity is defined by a dedication to professionalism, marked by the unwavering attributes of reliability, familiarity, and stability. 
          These qualities not only encapsulate who I am, but also underscore the principles I bring to each professional endeavor, fostering an environment of trust, consistency, and success.
        </p>
      </section>
    </>
  );
}
