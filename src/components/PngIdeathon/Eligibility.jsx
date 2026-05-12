import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-ideathon`;

export default function PngEligibility() {
  return (
    <>
      <style>{`
        .png-el-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0;
        }

        .png-el-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .png-el-frame {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .png-el-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .png-el-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .png-el-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .png-el-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
        }

        .png-el-card-header {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .png-el-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .png-el-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          line-height: 1.3;
        }

        .png-el-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .png-el-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        .png-el-check {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .png-el-item-text {
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

        @media (max-width: 48rem) {
          .png-el-cards-grid { grid-template-columns: 1fr; }
          .png-el-title { font-size: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .png-el-section { padding: 2rem 0; }
          .png-el-title { font-size: 1.25rem; }
          .png-el-card { padding: 1.25rem; }
        }
      `}</style>

      <div className="png-el-section">
        <div className="png-el-inner">
          <div className="png-el-frame">
            <p className="png-el-title">Eligibility Criteria</p>
            <p className="png-el-subtitle">
              University students, startups, and private sector innovators who
              live in Papua New Guinea are invited to participate in the
              national digital ID
            </p>
          </div>

          <div className="png-el-cards-grid">
            <div className="png-el-card">
              <div className="png-el-card-header">
                <img className="png-el-icon" src={`${bp}/img/vector-9.svg`} alt="" />
                <div className="png-el-card-title">Team Composition</div>
              </div>
              <div className="png-el-items">
                <div className="png-el-item">
                  <img className="png-el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="png-el-item-text">Teams must consist of 3–4 members.</p>
                </div>
                <div className="png-el-item">
                  <img className="png-el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="png-el-item-text">Participation of female team members is encouraged.</p>
                </div>
              </div>
            </div>

            <div className="png-el-card">
              <div className="png-el-card-header">
                <img className="png-el-icon" src={`${bp}/img/eligible-part.svg`} alt="" />
                <div className="png-el-card-title">Eligible Participants</div>
              </div>
              <div className="png-el-items">
                <div className="png-el-item">
                  <img className="png-el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="png-el-item-text">Startups</p>
                </div>
                <div className="png-el-item">
                  <img className="png-el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="png-el-item-text">University students</p>
                </div>
                <div className="png-el-item">
                  <img className="png-el-check" src={`${bp}/img/check-circle.svg`} alt="check" />
                  <p className="png-el-item-text">Private sector innovators residing in PNG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
