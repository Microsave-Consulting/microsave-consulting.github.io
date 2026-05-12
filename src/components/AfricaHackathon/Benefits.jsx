import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

export default function AfricaBenefits() {
  return (
    <>
      <style>{`
        .rectangle-3 {
          width: 100%;
          background-color: #f7f9fb;
          padding: 3rem 0;
        }

        .benefits-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .ben-frame-23 {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .ben-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .ben-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .ben-grid-all {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .ben-card-4 { grid-column: 1; }
        .ben-card-5 { grid-column: 2; }

        .ben-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .ben-card-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .ben-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1rem;
          margin: 0;
        }

        .ben-card-desc {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .ben-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          padding: 0.75rem;
          background-color: #eab05c;
          border-radius: 100px;
          overflow: hidden;
          flex-shrink: 0;
          box-sizing: border-box;
        }

        .ben-icon img {
          width: 1.75rem;
          height: 1.75rem;
          object-fit: contain;
        }

        .ben-banner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #fff6e9;
          border-radius: 0.75rem;
          border: 1px solid #eab05c;
          box-sizing: border-box;
        }

        .ben-banner-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .ben-banner-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.125rem;
          margin: 0;
        }

        .ben-banner-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ben-banner-row {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .ben-dot {
          width: 0.5rem;
          height: 0.5rem;
          min-width: 0.5rem;
          background-color: #eab05c;
          border-radius: 50%;
          margin-top: 0.4rem;
          flex-shrink: 0;
        }

        .ben-banner-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          white-space: normal;
          margin: 0;
        }

        @media (max-width: 64rem) {
          .ben-grid-all { grid-template-columns: repeat(2, 1fr); }
          .ben-card-4 { grid-column: auto; }
          .ben-card-5 { grid-column: auto; }
          .ben-grid-all > .ben-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        }

        @media (max-width: 48rem) {
          .ben-grid-all { grid-template-columns: 1fr; }
          .ben-grid-all > .ben-card:last-child:nth-child(odd) { grid-column: auto; }
          .ben-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .rectangle-3 { padding: 2rem 0; }
          .ben-title { font-size: 1.25rem; }
          .ben-card { padding: 1.25rem; }
          .ben-banner { padding: 1.25rem; }
        }
      `}</style>

      <div className="rectangle-3">
        <div className="benefits-inner">
          <div className="ben-frame-23">
            <p className="ben-title">Discover the benefits of this Hackathon</p>
            <p className="ben-subtitle">
              Contribution to Africa&apos;s digital transformation will help you gain
            </p>
          </div>

          <div className="ben-grid-all">
            <div className="ben-card">
              <div className="ben-icon">
                <img src={`${bp}/img/valuable-experience.svg`} alt="Valuable Experience" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Valuable Experience</p>
                <p className="ben-card-desc">Develop skills in digital ID technology and application development</p>
              </div>
            </div>

            <div className="ben-card">
              <div className="ben-icon">
                <img src={`${bp}/img/mentor2.svg`} alt="Expert Mentorship" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Expert Mentorship</p>
                <p className="ben-card-desc">
                  Receive guidance from use-case mentors (non-technical) and technical mentors (from MOSIP and technology partners)
                </p>
              </div>
            </div>

            <div className="ben-card">
              <div className="ben-icon">
                <img src={`${bp}/img/vector-19.svg`} alt="Networking" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Networking</p>
                <p className="ben-card-desc">
                  Connect with Africa&apos;s digital ecosystem and potential future employers or partners
                </p>
              </div>
            </div>

            <div className="ben-card ben-card-4">
              <div className="ben-icon">
                <img src={`${bp}/img/recognition.svg`} alt="Recognition" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Recognition</p>
                <p className="ben-card-desc">Certificate of achievement, Internship opportunities with Upanzi Network</p>
              </div>
            </div>

            <div className="ben-card ben-card-5">
              <div className="ben-icon">
                <img src={`${bp}/img/vector-17.svg`} alt="Skills Development" />
              </div>
              <div className="ben-card-text">
                <p className="ben-card-title">Skills Development</p>
                <p className="ben-card-desc">Technical training in digital identity systems and public service innovation</p>
              </div>
            </div>
          </div>

          <div className="ben-banner">
            <div className="ben-banner-header">
              <div className="ben-icon">
                <img src={`${bp}/img/recognition-2.svg`} alt="For the winners" />
              </div>
              <p className="ben-banner-title">For the winners</p>
            </div>
            <div className="ben-banner-rows">
              <div className="ben-banner-row">
                <div className="ben-dot"></div>
                <p className="ben-banner-text">All-expenses-paid trip to ID4Africa 2026 in Abidjan, Côte d&apos;Ivoire</p>
              </div>
              <div className="ben-banner-row">
                <div className="ben-dot"></div>
                <p className="ben-banner-text">Support from CMU Africa Innovation Lab business incubation program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
