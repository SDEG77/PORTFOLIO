export default function Seminar() {
  return (
    <section className="seminar" id="seminar">
      <h2>
        Seminars Attended
      </h2>
      <div className="main-horizontal-line"></div>
      
      <div className="seminar-divs">
        <div className="seminar-blocks">
          <div className="seminar-block" style={{marginRight: "40px"}}>
            <p className="seminar-title">
              ASSET CREATION
            </p>
            <p className="seminar-presentor">
              Presented by Araullo University
            </p>
            <p className="date-given">
              October 20, 2023
            </p>

            <div className="seminar-horizontal-line"></div>
          </div>

          <div className="seminar-block">
            <p className="seminar-title">
              DIGITAL PHOTOGRAPHY 101
            </p>
            <p className="seminar-presentor">
              Presented by Araullo University
            </p>
            <p className="date-given">
              October 20, 2023
            </p>

            <div className="seminar-horizontal-line"></div>
          </div>
        </div>

        <div className="seminar-block">
          <p className="seminar-title">
            YOUR JOURNEY TO DATA ANALYTICS
          </p>
          <p className="seminar-presentor">
            Presented by Araullo University
          </p>
          <p className="date-given">
            October 20, 2023
          </p>

          <div className="seminar-horizontal-line"></div>
        </div>
      </div>
    </section>
  );
} 

