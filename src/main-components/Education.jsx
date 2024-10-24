import logo from "../../public/assets/images//AU-logo2.png"


export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Educational Attainment</h2>
      <div className="main-horizontal-line"></div>

      <div className="araullo-info">
        <img className="araullo-university" src={logo} alt="Logo of Araullo University" />

        <article>
          <p className="course">
            Bachelor of Science in Information Technology
          </p>
          <p className="au-address">
            Araullo University, Cabanatuan city, Nueva Ecija
          </p>
          <p className="date">
            2022 - 2026 (Ongoing)
          </p>
        </article>
      </div>
    </section>
  );
}