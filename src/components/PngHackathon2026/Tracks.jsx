import { BASE_PATH } from "@/lib/siteConfig";
const bp = `${BASE_PATH}/png-2026`;

const HEI_REQUIREMENTS = [
  "2-4 members per team",
  "Minimum 1 female participant",
  "Undergraduate, graduate, or doctoral students",
];

const FS_REQUIREMENTS = [
  "2-4 members per team",
  "Financial sector players",
  "Entities legally registered in Papua New Guinea",
];

function CheckIcon() {

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke="#DE794F" strokeWidth="1.5" />
      <polyline points="8 12 11 15 16 9" stroke="#DE794F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


export default function PngHackathon2026Tracks() {
  return (
    <>
      <style>{`
        .phk-tracks {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) clamp(1rem, 1.25vw, 1.5rem);
          box-sizing: border-box;
        }

        /* ── Header ── */
        .phk-tracks-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(2rem, 2.604vw, 3.125rem);
        }

        /* Figma: Montserrat 800, 39px, shadow 0 4 4 #000 25% */
        .phk-tracks-title {
          font-family: "Montserrat", "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #000000;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          text-align: center;
        }

        /* Figma: 144×4px, radius 9999px, gradient #E7A159→#DE794F→#D85447 */
        .phk-tracks-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #E7A159, #DE794F, #D85447);
        }

        /* Figma: Inter 400, 21px, 28px lh, #000000, center */
        .phk-tracks-subtitle {
          font-family: "Inter", "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.333;
          color: #000000;
          margin: 0;
          text-align: center;
        }

        /* ── Cards grid ── */
        .phk-tracks-cards {
          display: flex;
          gap: clamp(2.5rem, 4vw, 5rem);
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        /* wrapper gives space for floating icon at top-right */
        .phk-track-wrapper {
          position: relative;
          padding-top: 2.5rem;
          flex: 1;
          min-width: 18rem;
          max-width: clamp(20rem, 35vw, 42rem);
        }

        /* icon pinned to top-right corner of the card */
        .phk-track-icon {
          position: absolute;
          top: 0;
          right: -1.25rem;
          width: 3.75rem;
          height: 3.75rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          overflow: hidden;
        }

        .phk-track-icon-hei {
          background: linear-gradient(135deg, #E7A159, #DE794F, #D85447);
        }

        .phk-track-icon-fs {
          background: #D85447;
          transform: rotate(12deg);
        }

        /* Figma: 672×635, radius 20, padding 48, gap 32,
           bg #FFF 40%, border 1px #DE794F 20%,
           shadow 0 8 32 0 #88520E 8%, backdrop blur 16 */
        .phk-track-card {
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(222, 121, 79, 0.2);
          border-radius: 1.25rem;
          padding: clamp(1.5rem, 2.5vw, 3rem);
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 1.667vw, 2rem);
          box-shadow: 0 8px 32px 0 rgba(136, 82, 14, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          height: 100%;
          box-sizing: border-box;
        }

        /* Figma: Albert Sans 800, 27px, 35px lh */
        .phk-track-name {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.125rem, 1.406vw, 1.6875rem);
          line-height: 1.296;
          color: #000000;
          margin: 0;
        }

        /* Figma: Albert Sans 400, 19.5px, 25px lh */
        .phk-track-desc {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.016vw, 1.21875rem);
          line-height: 1.282;
          color: #000000;
          margin: 0;
        }

        /* Figma: radius 32, padding 27/32/32/32, gap 16,
           bg #FFF5EC 50%, border 1px #DE794F 20% */
        .phk-track-req {
          background: rgba(255, 245, 236, 0.5);
          border: 1px solid rgba(222, 121, 79, 0.2);
          border-radius: 2rem;
          padding: clamp(1rem, 1.406vw, 1.6875rem) clamp(1rem, 1.667vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        /* Figma: Albert Sans 600, 21px, ls 1.4px, Uppercase */
        .phk-track-req-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.75rem, 1.094vw, 1.3125rem);
          letter-spacing: 0.067em;
          text-transform: uppercase;
          color: #000000;
          margin: 0;
          line-height: 1;
        }

        .phk-track-req-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        /* Figma: Albert Sans 400, 19.5px, 24px lh */
        .phk-track-req-item {
          display: flex;
          align-items: flex-start;
          gap: 0.625rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 1.016vw, 1.21875rem);
          line-height: 1.231;
          color: #000000;
        }

        /* Figma: 193×41, radius 20, gradient #E59A58→#DA644B,
           Hanken Grotesk 700 20px, white */
        .phk-track-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.5rem;
          background: linear-gradient(to right, #E59A58, #DA644B);
          border-radius: 1.25rem;
          font-family: "Hanken Grotesk", "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.875rem, 1.042vw, 1.25rem);
          line-height: 1.5rem;
          color: #ffffff;
          text-decoration: none;
          align-self: flex-start;
          transition: opacity 0.2s;
        }
        .phk-track-btn:hover { opacity: 0.9; }

        @media (max-width: 56rem) {
          .phk-tracks-cards { flex-direction: column; align-items: center; }
          .phk-track-wrapper { max-width: 36rem; width: 100%; }
        }

        @media (max-width: 37.5rem) {
          .phk-tracks { padding: 2rem 1rem; }
        }
      `}</style>

      <section id="tracks" className="phk-tracks">
        {/* Header */}
        <div className="phk-tracks-header">
          <h2 className="phk-tracks-title">Two key tracks</h2>
          <div className="phk-tracks-line" />
          <p className="phk-tracks-subtitle">
            Select the track that best fits your team's profile and impact goals.
          </p>
        </div>

        {/* Cards */}
        <div className="phk-tracks-cards">

          {/* HEI Track */}
          <div className="phk-track-wrapper">
            <div className="phk-track-icon phk-track-icon-hei">
              <img src={`${bp}/edu_logo.svg`} alt="Education" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
            </div>
            <div className="phk-track-card">
              <h3 className="phk-track-name">Higher Education Institution Track</h3>
              <p className="phk-track-desc">
                The HEI track of PNG National Digital ID Hackathon 2026 follows a comprehensive,
                three-phase program designed to maximize innovation, learning, and impact.
              </p>
              <div className="phk-track-req">
                <p className="phk-track-req-label">Entry Requirements</p>
                <ul className="phk-track-req-list">
                  {HEI_REQUIREMENTS.map((item, i) => (
                    <li key={i} className="phk-track-req-item">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="phk-track-btn" href="/png-hackathon-2026/hei-track">
                Learn More →
              </a>
            </div>
          </div>

          {/* FS Track */}
          <div className="phk-track-wrapper">
            <div className="phk-track-icon phk-track-icon-fs">
              <img src={`${bp}/rocket%20logo.svg`} alt="Rocket" style={{ width: "60%", height: "60%", objectFit: "contain" }} />
            </div>
            <div className="phk-track-card">
              <h3 className="phk-track-name">Financial Services Track</h3>
              <p className="phk-track-desc">
                The Financial Services (FS) Track of the PNG National Digital ID Hackathon 2026
                aims to enhance financial inclusion in Papua New Guinea.
              </p>
              <div className="phk-track-req">
                <p className="phk-track-req-label">Entry Requirements</p>
                <ul className="phk-track-req-list">
                  {FS_REQUIREMENTS.map((item, i) => (
                    <li key={i} className="phk-track-req-item">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a className="phk-track-btn" href="/png-hackathon-2026/fs-track">
                Learn More →
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
