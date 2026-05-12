import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

export default function AfricaRegistration() {
  return (
    <>
      <style>{`
        .reg-section {
          width: 100%;
          background-color: #fff6eb;
          padding: 3rem 0;
        }

        .reg-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .reg-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 1rem;
          border: 1px solid #e4e4e4;
          box-sizing: border-box;
        }

        .reg-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .reg-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .reg-label-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .reg-label-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          margin: 0;
        }

        .reg-label-sub {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 1rem;
          margin: 0;
        }

        .reg-email-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .reg-link {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #1a0dab;
          font-size: 1.125rem;
          text-decoration: underline;
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        .reg-stay-connected {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #f9f9f9;
          border-radius: 1rem;
          border: 1px solid #ececec;
          box-sizing: border-box;
        }

        .reg-stay-title {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 1.125rem;
          margin: 0;
        }

        .reg-social-list {
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }

        .reg-social-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .reg-social-icon {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        .reg-social-link {
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #1a0dab;
          font-size: 1rem;
          text-decoration: underline;
          white-space: nowrap;
        }

        .reg-social-text {
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

        .reg-social-text a {
          color: #1a0dab;
          text-decoration: underline;
        }

        .reg-hashtags {
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

        .reg-hashtags a {
          color: #1a0dab;
          text-decoration: underline;
        }

        @media (max-width: 48rem) {
          .reg-card { padding: 1.25rem; }
          .reg-stay-connected { padding: 1.25rem; }
          .reg-label-title { font-size: 1.125rem; }
        }

        @media (max-width: 37.5rem) {
          .reg-section { padding: 2rem 0; }
        }
      `}</style>

      <div className="reg-section">
        <div className="reg-inner">
          <div className="reg-card">
            <div className="reg-row">
              <img className="reg-icon" src={`${bp}/img/help.svg`} alt="Help" />
              <div className="reg-label-group">
                <p className="reg-label-title">Questions?</p>
                <p className="reg-label-sub">Contact our support team</p>
              </div>
            </div>

            <div className="reg-email-list">
              <div className="reg-row">
                <img className="reg-icon" src={`${bp}/img/email.svg`} alt="email" />
                <a className="reg-link" href="mailto:upanzi@andrew.cmu.edu" target="_blank" rel="noopener noreferrer">
                  upanzi@andrew.cmu.edu
                </a>
              </div>
              <div className="reg-row">
                <img className="reg-icon" src={`${bp}/img/email.svg`} alt="email" />
                <a className="reg-link" href="mailto:pavanesh.dwivedi@microsave.net" target="_blank" rel="noopener noreferrer">
                  pavanesh.dwivedi@microsave.net
                </a>
              </div>
              <div className="reg-row">
                <img className="reg-icon" src={`${bp}/img/email.svg`} alt="email" />
                <a className="reg-link" href="mailto:arnav.nigam@microsave.net" target="_blank" rel="noopener noreferrer">
                  arnav.nigam@microsave.net
                </a>
              </div>
            </div>

            <div className="reg-stay-connected">
              <p className="reg-stay-title">Stay Connected:</p>
              <div className="reg-social-list">
                <div className="reg-social-row">
                  <img className="reg-social-icon" src={`${bp}/img/twitter.svg`} alt="Twitter" />
                  <a className="reg-social-link" href="https://x.com/MicroSave" target="_blank" rel="noopener noreferrer">
                    @MSC(MicroSave Consulting)
                  </a>
                </div>

                <div className="reg-social-row">
                  <img className="reg-social-icon" src={`${bp}/img/linkedin.svg`} alt="LinkedIn" />
                  <p className="reg-social-text">
                    <a href="https://www.linkedin.com/company/microsave/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/company/microsave/
                    </a>
                    <br />
                    <a href="https://www.linkedin.com/company/upanzinetwork/" target="_blank" rel="noopener noreferrer">
                      https://www.linkedin.com/company/upanzinetwork/
                    </a>
                  </p>
                </div>

                <div className="reg-social-row">
                  <img className="reg-social-icon" src={`${bp}/img/hashtag.svg`} alt="hashtag" />
                  <p className="reg-hashtags">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23africadigitalidhackathon&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">
                      #AfricaDigitalIDHackathon
                    </a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23digitalid&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">
                      #DigitalID
                    </a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23id4africa&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">
                      #ID4Africa
                    </a>{" "}
                    <a href="https://www.linkedin.com/search/results/all/?keywords=%23digitalidentity&origin=HASH_TAG_FROM_FEED" target="_blank" rel="noopener noreferrer">
                      #DigitalIdentity
                    </a>
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
