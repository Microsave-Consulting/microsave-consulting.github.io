import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

export default function AfricaAbout() {
  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .about-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .about-heading {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .about-title {
           font-family: "Roboto-SemiBold", Helvetica, sans-serif;
           font-weight: 600;
           color: #000000;
           font-size: 1.75rem;
           line-height: 1.2;
           margin: 0;
         }

        .about-body {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }

        .about-body strong {
          font-family: "Roboto-Bold", Helvetica, sans-serif;
          font-weight: 700;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }

        .about-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #f2f2f2;
          box-sizing: border-box;
        }

        .about-card-header {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }

        .about-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.5625rem;
          background-color: #eab05c;
          border-radius: 32px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .about-icon img {
          width: 1.5rem;
          height: 1.5rem;
          object-fit: contain;
        }

        .about-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          margin: 0;
        }

        .about-list {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .about-list-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .about-list-item img {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .about-list-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.325;
          flex: 1;
          min-width: 0;
          word-break: break-word;
          margin: 0;
        }

        .about-list-text strong {
          font-family: "Roboto-Bold", Helvetica, sans-serif;
          font-weight: 700;
        }

        .about-org-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .about-org-desc {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .about-logos {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1.5rem;
          flex-wrap: nowrap;
          max-width: 100%;
          overflow: hidden;
        }

        .about-logo {
          height: 3.75rem;
          width: auto;
          max-height: 3.75rem;
          max-width: 33%;
          object-fit: contain;
        }

        .about-logo-msc {
          max-height: 3.25rem;
        }

        @media (max-width: 64rem) {
          .about-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 48rem) {
          .about-body { font-size: 0.9375rem; }
        }

        @media (max-width: 37.5rem) {
          .about-section { padding: 2rem 0; }
          .about-card { padding: 1.25rem; }
          .about-logos { flex-wrap: wrap; gap: 1rem; }
          .about-logo { max-width: 45%; }
        }
      `}</style>

      <div className="about-section">
        <div className="about-inner">
          <div className="about-heading">
            <p className="about-title">Overview</p>
          </div>

          <p className="about-body">
            The Africa Digital ID Hackathon returns in 2026! We are back after
            our successful first edition, which was concluded at the ID4Africa
            annual general meeting in Addis Ababa in May 2025.
            This second chapter of Africa Digital ID Hackathon is the result of
            a collaboration between{" "}
            <strong>
              Carnegie Mellon University Africa&apos;s Upanzi DPI Network
            </strong>{" "}
            and <strong>MSC (MicroSave Consulting).</strong>
            <br />
            <br />
            The pan-African Digital ID hackathon 2026 has a dual focus. It will
            build local capacity as well as identify and develop locally
            contextualized digital ID use cases across sectors, such as
            healthcare, education, agriculture, and public service delivery.
            The Africa Digital ID Hackathon 2026 follows a comprehensive,
            four-phase approach designed to maximize learning, innovation, and
            real-world impact.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-icon">
                  <img src={`${bp}/img/wcp.svg`} alt="participate icon" />
                </div>
                <p className="about-card-title">Who Can Participate</p>
              </div>
              <div className="about-list">
                {[
                  { label: null, text: "University students studying in Africa" },
                  { label: "Team size:", text: "2–5 members" },
                  { label: "Academic level:", text: "Undergraduate, graduate, or doctoral students" },
                  { label: "Gender inclusion requirement:", text: "At least one female participant per team" },
                  { label: "Refugee inclusion:", text: "Open to refugees and asylum-seekers enrolled at any accredited university in Africa" },
                ].map((item, i) => (
                  <div className="about-list-item" key={i}>
                    <img src={`${bp}/img/play-arrow.svg`} alt="arrow" />
                    <p className="about-list-text">
                      {item.label && <strong>{item.label} </strong>}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card">
              <div className="about-card-header">
                <div className="about-icon">
                  <img src={`${bp}/img/org.svg`} alt="partners icon" />
                </div>
                <p className="about-card-title">Partners and supporters</p>
              </div>
              <div className="about-org-body">
                <p className="about-org-desc">
                  MSC (MicroSave Consulting) and CMU Africa&apos;s Upanzi DPI
                  Network, are organizing the 2nd Africa Digital ID Hackathon
                </p>
                <div className="about-logos">
                  <img
                    src={`${bp}/img/1_MSC logo.svg`}
                    className="about-logo about-logo-msc"
                    alt="MicroSave Consulting logo"
                  />
                  <img
                    src={`${bp}/img/1_Upanzi logo.svg`}
                    className="about-logo"
                    alt="Upanzi DPI Network logo"
                  />
                  <img
                    src={`${bp}/img/1_ID4Africa logo.svg`}
                    className="about-logo"
                    alt="ID4Africa logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
