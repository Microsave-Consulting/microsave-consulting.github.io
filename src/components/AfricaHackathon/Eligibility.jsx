import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

export default function AfricaEligibility() {
  return (
    <>
      <style>{`
        .eligibility-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .eligibility-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .el-frame-24 {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .el-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .el-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .el-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .el-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .el-card-header {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .el-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .el-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .el-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .el-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        .el-check {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .el-item-text {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.5;
          white-space: normal;
          word-break: break-word;
          flex: 1;
          min-width: 0;
          margin: 0;
        }

        .el-details-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 2.5rem 0 1.5rem;
        }

        .el-deadlines-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .el-deadline-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #f8fafc;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .el-deadline-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          background-color: #eab05c;
          border-radius: 100px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .el-deadline-icon svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: #ffffff;
        }

        .el-deadline-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
          min-width: 0;
        }

        .el-deadline-label {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #5f5f5f;
          font-size: 1.125rem;
          white-space: normal;
          overflow-wrap: break-word;
          margin: 0;
        }

        .el-deadline-date {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #484f53;
          font-size: 1rem;
          line-height: 1.4;
          white-space: normal;
          word-break: break-word;
          overflow-wrap: anywhere;
          margin: 0;
        }

        .el-deadline-date a {
          color: #2d488d;
          text-decoration: underline;
        }

        @media (max-width: 64rem) {
          .el-deadlines-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 48rem) {
          .el-cards-grid { grid-template-columns: 1fr; }
          .el-title, .el-details-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .eligibility-section { padding: 2rem 0; }
          .el-title, .el-details-title { font-size: 1.25rem; }
          .el-card { padding: 1.25rem; }
          .el-deadline-card { padding: 1.25rem; }
        }
      `}</style>

      <div className="eligibility-section">
        <div className="eligibility-inner">
          <div className="el-frame-24">
            <p className="el-title">Get involved</p>
            <p className="el-subtitle">
              We welcome partnerships with government agencies, technology
              companies, universities and research institutions, and innovators
              and accelerators
            </p>
          </div>

          <div className="el-cards-grid">
            <div className="el-card">
              <div className="el-card-header">
                <img className="el-icon" src={`${bp}/img/vector-9.svg`} alt="" />
                <div className="el-card-title">Collaboration</div>
              </div>
              <div className="el-items">
                <div className="el-item">
                  <img className="el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="el-item-text">Provide mentorship and technical expertise</p>
                </div>
                <div className="el-item">
                  <img className="el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="el-item-text">Deliver expert sessions to the participants</p>
                </div>
              </div>
            </div>

            <div className="el-card">
              <div className="el-card-header">
                <img className="el-icon" src={`${bp}/img/eligible-part.svg`} alt="" />
                <div className="el-card-title">Support</div>
              </div>
              <div className="el-items">
                <div className="el-item">
                  <img className="el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="el-item-text">Sponsor a thematic track aligned to your organizational priorities</p>
                </div>
                <div className="el-item">
                  <img className="el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="el-item-text">Sponsor prizes (cloud credits, equipment, funding)</p>
                </div>
                <div className="el-item">
                  <img className="el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="el-item-text">Host regional semi-finals at your institution</p>
                </div>
              </div>
            </div>
          </div>

          <p className="el-details-title">The details</p>

          <div className="el-deadlines-grid">
            <div className="el-deadline-card">
              <div className="el-deadline-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3 3.9 3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>
              <div className="el-deadline-body">
                <p className="el-deadline-label">Application Closes</p>
                <p className="el-deadline-date">February 22, 2026, 11:59 PM (UTC+1)</p>
              </div>
            </div>

            <div className="el-deadline-card">
              <div className="el-deadline-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 3 3 3.9 3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
              </div>
              <p className="el-deadline-label">Application is now closed</p>
            </div>

            <div className="el-deadline-card">
              <div className="el-deadline-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                </svg>
              </div>
              <div className="el-deadline-body">
                <p className="el-deadline-label">Prototype Submission</p>
                <p className="el-deadline-date">To be announced soon</p>
              </div>
            </div>

            <div className="el-deadline-card">
              <div className="el-deadline-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
              </div>
              <div className="el-deadline-body">
                <p className="el-deadline-label">Webinars: December 2025–February 2026</p>
                <p className="el-deadline-date">
                  Please follow us on social media and join us on{" "}
                  <a href="https://discord.gg/dH8vKfsWQH" target="_blank" rel="noopener noreferrer">
                    Discord
                  </a>{" "}
                  to get timely updates on webinar schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
