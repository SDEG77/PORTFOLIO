import python from "../../public/assets/images/python-logo.png";
import php from "../../public/assets/images/PHP-logo.png";
import java from "../../public/assets/images/java-logo.png";
import html from "../../public/assets/images/html-logo.png";
import css from "../../public/assets/images/css-logo.png";
import mysql from "../../public/assets/images/MySQL-Logo.png";
import medibang from "../../public/assets/images/medibang-logo.png";
import javascript from "../../public/assets/images/Javascript-Logo.png";
import android from "../../public/assets/images/android-studio-logo.png";

import mongo from "../../public/assets/images/mongo-logo.png";
import node from "../../public/assets/images/node-logo.png";
import react from "../../public/assets/images/react-logo.png";
import react_native from "../../public/assets/images/react-native-logo.png";
import laravel from "../../public/assets/images/laravel-logo.png";


export default function Skills () {
  return (
    <section className="skills" id="skills">
      {/* <!--header--> */}
      <div className="logo-images">
        <div className="responsive-pics">
          <img className="python-logo" src={python} alt="python-logo" />
          <img className="php-logo" src={php} alt="PHP-logo" />
          <img className="java-logo" src={java} alt="java-logo" />
          <img className="html-logo" src={html} alt="html-logo" />
        </div>

        <div className="responsive-pics">
          <img className="css-logo" src={css} alt="css-logo" />
          <img className="mysql-logo" src={mysql} alt="MySQL-logo" />
          <img className="medibang-logo" src={medibang} alt="medibang medibang-logo" />
          <img className="javascript-logo" src={javascript} alt="images/javascript-logo" />
          <img className="android-studio-logo" src={android} alt="android-studio-logo" />
        </div>

        <div className="responsive-pics" style={{display: "flex", gap: "40px", marginLeft: "40px",}}>
          <img className="android-studio-logo" src={laravel} alt="css-logo" />
          <img className="android-studio-logo" src={react} alt="MySQL-logo" />
          <img className="android-studio-logo" src={react_native} alt="MySQL-logo" />          
          <img className="mysql-logo" src={node} alt="medibang medibang-logo" />
          <img className="mysql-logo" src={mongo} alt="images/javascript-logo" />
        </div>
      </div>
      <h2 className="header-h2">
        My Skills
      </h2>
      <div className="main-horizontal-line"></div>
      {/* <!--header--> */}

      <article className="skills-article">
        <h2 className="hard-h2">HARD SKILLS</h2>

        <div className="lists-div">
          <ul>
            <li>Object Oriented Programming</li>
            <li>Full Stack Web Development</li>
            <li>Database Management</li>
            <li>Application Development</li>
            <li>Traditional Art</li>
            <li>Digital Art</li>
          </ul>

          <div className="main-vertical-line">

          </div>

          <h2 className="soft-h2">SOFT SKILLS</h2>
          <ul>
            <li>Problem-Solving</li>
            <li>Research</li>
            <li>Collaboration</li>
            <li>Adaptability</li>
            <li>Excellent Under Pressure</li>
            <li>Creativity</li>
            <li>Time Management</li>
          </ul>
        </div>

        <h2 className="soft-h2">SOFT SKILLS</h2>
      </article>
    </section>
  );
}