import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026`;

export default function PngHackathon2026Hero() {
  return (
    <>
      <style>{`
        .phk-hero {
          position: relative;
          width: 100%;
          /* Figma hero: 965px at 1920px → 50.26vw, floor at 30rem */
          min-height: clamp(30rem, 50.26vw, 60.3125rem);
          background-color: #D35535;
          overflow: hidden;
          box-sizing: border-box;
          display: flex;
        }

        /* Left content — Figma: left 138px (~7.2%), width 1228px (~64%) */
        .phk-hero-left {
          position: relative;
          z-index: 1;
          width: 64%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
          padding: clamp(2.5rem, 4.0625vw, 4.875rem) 2% 2.5rem 7.2%;
          box-sizing: border-box;
          justify-content: flex-start;
          flex-shrink: 0;
        }

        /* Banner fills the entire hero as background */
        .phk-hero-banner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          z-index: 0;
          pointer-events: none;
        }

        /* Pill badge — Figma: 503×37, padding 8/16/8/16, Albert Sans 700 18px ls 1.2px */
        .phk-hero-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 0.9375vw, 1.125rem);
          letter-spacing: 0.067em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
        }

        /* Main title — Figma: Albert Sans 800, 60px, ls -0.96px, shadow 0 4 4 #000 25% */
        .phk-hero-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(2.25rem, 3.125vw, 3.75rem);
          line-height: 1;
          letter-spacing: -0.016em;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        /* Subtitle — Figma: Albert Sans 500, 30px, 951px wide, #FFFFFF 80% */
        .phk-hero-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1.2;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          max-width: 100%;
        }

        /* Info badges row */
        .phk-hero-badges {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        /* Figma: height 35px, radius 24px, border 1px, padding 8/24/8/24, blur 12 */
        .phk-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4375rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.875rem, 1.09375vw, 1.3125rem);
          color: #ffffff;
          white-space: nowrap;
        }

        .phk-hero-badge svg {
          width: 1em;
          height: 1em;
          flex-shrink: 0;
          stroke: #ffffff;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Reg closes — Figma: Albert Sans 700, 22.5px, ls 0.7px, Uppercase, #FFFFFF */
        .phk-hero-regclose {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.875rem, 1.171875vw, 1.40625rem);
          letter-spacing: 0.031em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        /* Apply button — Figma: 280×42, radius 9999, padding ~9/48/9/48, 600 21px #000 */
        .phk-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5625rem 3rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 9999px;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.875rem, 1.09375vw, 1.3125rem);
          line-height: 1.5rem;
          color: #000000;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s, transform 0.2s;
        }
        .phk-hero-btn:hover {
          background: #ffffff;
          transform: translateY(-1px);
        }

        /* Organized by — line starts from left column edge and extends into illustration */
        .phk-hero-orgs {
          width: 50vw;
          margin-left: -7.2vw;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: clamp(1.5rem, 2.083vw, 2.5rem);
          padding-left: 7.2vw;
          padding-right: 4vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.875rem, 1.25vw, 1.5rem);
          margin-top: clamp(2rem, 3.698vw, 4.4375rem);
          box-sizing: border-box;
        }

        /* Figma: Albert Sans 700, 19.5px, ls 3.6px, Uppercase, #FFFFFF, Center */
        .phk-hero-orgs-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.015625vw, 1.21875rem);
          letter-spacing: 0.185em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          text-align: center;
        }

        .phk-hero-orgs-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1.5rem, 2.083vw, 2.5rem);
          flex-wrap: wrap;
          width: 100%;
        }

        .phk-hero-orgs-logos img {
          height: clamp(4rem, 5.5vw, 6.5rem) !important;
          max-height: none !important;
          width: auto !important;
          display: block;
        }

        /* Responsive */
        @media (max-width: 48rem) {
          .phk-hero-left {
            width: 100%;
            padding: 2rem 5% 2rem;
          }
        }

        @media (max-width: 30rem) {
          .phk-hero-badge { font-size: 0.75rem; padding: 0.375rem 0.75rem; }
          .phk-hero-pill { font-size: 0.6rem; }
        }
      `}</style>

      <section className="phk-hero">
        {/* Left column — text content */}
        <div className="phk-hero-left">
          <span className="phk-hero-pill">PAPUA NEW GUINEA · 2ND EDITION · 2026</span>

          <h1 className="phk-hero-title">
            PNG National Digital ID<br />
            <span style={{ color: "#000000" }}>Hackathon 2026</span>
          </h1>

          <p className="phk-hero-subtitle">
            The next generation of PNG innovators starts here. Build Digital ID
            solutions that matter for real people, real communities, real impact.
          </p>

          <div className="phk-hero-badges">
            <span className="phk-hero-badge">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              2 Tracks
            </span>
            <span className="phk-hero-badge">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Port Moresby
            </span>
            <span className="phk-hero-badge">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Jul 20–23, 2026
            </span>
          </div>

          <p className="phk-hero-regclose">REGISTRATION CLOSES JUNE 21, 2026</p>

          <a className="phk-hero-btn" href="https://hackathon.dts.gov.pg/register" target="_blank" rel="noopener noreferrer">Apply for Hackathon</a>

          <div className="phk-hero-orgs">
            <p className="phk-hero-orgs-label">ORGANIZED BY</p>
            <div className="phk-hero-orgs-logos">
              <img src={`${bp}/PNG.svg`} alt="Department of ICT, Papua New Guinea" />
              <img src={`${bp}/dts_logo.svg`} alt="DTS26" />
              <img src={`${bp}/MSC_White_logo.svg`} alt="MicroSave Consulting" />
            </div>
          </div>
        </div>

        {/* Banner — absolutely anchored to bottom-right of full-height section */}
        <img
          className="phk-hero-banner"
          src={`${bp}/banner_png_2026.svg`}
          alt="PNG National Digital ID Hackathon 2026"
        />
      </section>
    </>
  );
}
