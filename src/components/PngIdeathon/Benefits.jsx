import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-ideathon`;

export default function PngBenefits() {
  return (
    <>
      <style>{`
        .png-ben-section {
          width: 100%;
          background-color: #f7f9fb;
          padding: 3rem 0;
        }

        .png-ben-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .png-ben-frame {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .png-ben-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .png-ben-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .png-ben-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .png-ben-card-4 { grid-column: 1; }
        .png-ben-card-5 { grid-column: 2; }

        .png-ben-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .png-ben-card-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .png-ben-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1rem;
          margin: 0;
        }

        .png-ben-card-desc {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        .png-ben-icon {
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

        .png-ben-icon img {
          width: 1.75rem;
          height: 1.75rem;
          object-fit: contain;
        }

        .png-ben-banner {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #fff6e9;
          border-radius: 0.75rem;
          border: 1px solid #eab05c;
          box-sizing: border-box;
        }

        .png-ben-banner-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .png-ben-banner-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.125rem;
          margin: 0;
        }

        .png-ben-banner-row {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .png-ben-dot {
          width: 0.5rem;
          height: 0.5rem;
          min-width: 0.5rem;
          background-color: #eab05c;
          border-radius: 50%;
          margin-top: 0.4rem;
          flex-shrink: 0;
        }

        .png-ben-banner-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          white-space: normal;
          margin: 0;
        }

        @media (max-width: 64rem) {
          .png-ben-grid { grid-template-columns: repeat(2, 1fr); }
          .png-ben-card-4 { grid-column: auto; }
          .png-ben-card-5 { grid-column: auto; }
          .png-ben-grid > .png-ben-card:last-child:nth-child(odd) { grid-column: 1 / -1; }
        }

        @media (max-width: 48rem) {
          .png-ben-grid { grid-template-columns: 1fr; }
          .png-ben-grid > .png-ben-card:last-child:nth-child(odd) { grid-column: auto; }
          .png-ben-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .png-ben-section { padding: 2rem 0; }
          .png-ben-title { font-size: 1.25rem; }
          .png-ben-card { padding: 1.25rem; }
          .png-ben-banner { padding: 1.25rem; }
        }
      `}</style>

      <div className="png-ben-section">
        <div className="png-ben-inner">
          <div className="png-ben-frame">
            <p className="png-ben-title">Discover the benefits of this Ideathon</p>
            <p className="png-ben-subtitle">
              Contribution to Papua New Guinea&apos;s digital transformation will help you gain
            </p>
          </div>

          <div className="png-ben-grid">
            <div className="png-ben-card">
              <div className="png-ben-icon">
                <img src={`${bp}/img/valuable-experience.svg`} alt="Valuable Experience" />
              </div>
              <div className="png-ben-card-text">
                <p className="png-ben-card-title">Valuable Experience</p>
                <p className="png-ben-card-desc">Develop skills in digital ID technology and application development</p>
              </div>
            </div>

            <div className="png-ben-card">
              <div className="png-ben-icon">
                <img src={`${bp}/img/mentor2.svg`} alt="Expert Mentorship" />
              </div>
              <div className="png-ben-card-text">
                <p className="png-ben-card-title">Expert Mentorship</p>
                <p className="png-ben-card-desc">Receive guidance from DICT officials, MSC consultants, and industry leaders</p>
              </div>
            </div>

            <div className="png-ben-card">
              <div className="png-ben-icon">
                <img src={`${bp}/img/vector-19.svg`} alt="Networking" />
              </div>
              <div className="png-ben-card-text">
                <p className="png-ben-card-title">Networking</p>
                <p className="png-ben-card-desc">Connect with the country&apos;s digital ecosystem and potential future employers or partners</p>
              </div>
            </div>

            <div className="png-ben-card png-ben-card-4">
              <div className="png-ben-icon">
                <img src={`${bp}/img/recognition.svg`} alt="Recognition" />
              </div>
              <div className="png-ben-card-text">
                <p className="png-ben-card-title">Recognition</p>
                <p className="png-ben-card-desc">National visibility during DTS25 and potential government pilot opportunities</p>
              </div>
            </div>

            <div className="png-ben-card png-ben-card-5">
              <div className="png-ben-icon">
                <img src={`${bp}/img/vector-17.svg`} alt="Skills Development" />
              </div>
              <div className="png-ben-card-text">
                <p className="png-ben-card-title">Skills Development</p>
                <p className="png-ben-card-desc">Technical training in digital identity systems and public service innovation</p>
              </div>
            </div>
          </div>

          <div className="png-ben-banner">
            <div className="png-ben-banner-header">
              <div className="png-ben-icon">
                <img src={`${bp}/img/recognition-2.svg`} alt="Recognition" />
              </div>
              <p className="png-ben-banner-title">Recognition</p>
            </div>
            <div className="png-ben-banner-row">
              <div className="png-ben-dot"></div>
              <p className="png-ben-banner-text">
                All the participants who reach the final stage will receive
                certificates of participation and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
