import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-ideathon`;

export default function PngRegistration() {
  return (
    <>
      <style>{`
        .png-reg-section {
          width: 100%;
          background-color: #fff6eb;
          padding: 3rem 0;
        }

        .png-reg-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .png-reg-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e4e4e4;
          box-sizing: border-box;
        }

        .png-reg-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .png-reg-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .png-reg-label-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .png-reg-label-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          margin: 0;
        }

        .png-reg-label-sub {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          margin: 0;
        }

        .png-reg-email-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .png-reg-link {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1.125rem;
          text-decoration: underline;
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        .png-reg-stay-connected {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #f9f9f9;
          border-radius: 1rem;
          border: 1px solid #ececec;
          box-sizing: border-box;
        }

        .png-reg-stay-title {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 1.125rem;
          margin: 0;
        }

        .png-reg-social-list {
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }

        .png-reg-social-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .png-reg-social-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .png-reg-social-link {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 1rem;
          text-decoration: underline;
          white-space: nowrap;
        }

        .png-reg-social-text {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          word-break: break-all;
          overflow-wrap: anywhere;
          flex: 1;
          min-width: 0;
          margin: 0;
        }

        .png-reg-social-text a { color: #000000; text-decoration: underline; }

        .png-reg-hashtags {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          overflow-wrap: anywhere;
          flex: 1;
          min-width: 0;
          margin: 0;
        }

        .png-reg-hashtags a { color: #000000; text-decoration: underline; }

        @media (max-width: 48rem) {
          .png-reg-card { padding: 1.25rem; }
          .png-reg-stay-connected { padding: 1.25rem; }
          .png-reg-label-title { font-size: 1.125rem; }
        }

        @media (max-width: 37.5rem) { .png-reg-section { padding: 2rem 0; } }
      `}</style>

      <div className="png-reg-section">
        <div className="png-reg-inner">
          <div className="png-reg-card">
            <div className="png-reg-row">
              <img className="png-reg-icon" src={`${bp}/img/help.svg`} alt="Help" />
              <div className="png-reg-label-group">
                <p className="png-reg-label-title">Questions?</p>
                <p className="png-reg-label-sub">Contact our support team</p>
              </div>
            </div>

            <div className="png-reg-email-list">
              <div className="png-reg-row">
                <img className="png-reg-icon" src={`${bp}/img/email.svg`} alt="email" />
                <a className="png-reg-link" href="mailto:png.digital.ideathon@microsave.net" target="_blank" rel="noopener noreferrer">
                  png.digital.ideathon@microsave.net
                </a>
              </div>
              <div className="png-reg-row">
                <img className="png-reg-icon" src={`${bp}/img/email.svg`} alt="email" />
                <a className="png-reg-link" href="mailto:ideathon.dts25@ict.gov.pg" target="_blank" rel="noopener noreferrer">
                  ideathon.dts25@ict.gov.pg
                </a>
              </div>
            </div>

            <div className="png-reg-stay-connected">
              <p className="png-reg-stay-title">Stay Connected:</p>
              <div className="png-reg-social-list">
                <div className="png-reg-social-row">
                  <img className="png-reg-social-icon" src={`${bp}/img/twitter.svg`} alt="Twitter" />
                  <a className="png-reg-social-link" href="https://twitter.com/ictpng" target="_blank" rel="noopener noreferrer">
                    @ictpng
                  </a>
                </div>

                <div className="png-reg-social-row">
                  <img className="png-reg-social-icon" src={`${bp}/img/linkedin.svg`} alt="LinkedIn" />
                  <p className="png-reg-social-text">
                    <a href="https://www.linkedin.com/company/microsave/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/company/microsave/
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/company/p-n-g-department-of-communication-information-technology-and-energy/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/company/p-n-g-department-of-communication-information-technology-and-energy/
                    </a>
                  </p>
                </div>

                <div className="png-reg-social-row">
                  <img className="png-reg-social-icon" src={`${bp}/img/hashtag.svg`} alt="hashtag" />
                  <p className="png-reg-hashtags">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23pngdigitalid&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#PNGDigitalID</a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23sevispass&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#SevisPass</a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23ideathon&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#Ideathon</a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23innovation&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#Innovation</a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23dts25&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#DTS25</a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23digitalinclusion&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">#DigitalInclusion</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
