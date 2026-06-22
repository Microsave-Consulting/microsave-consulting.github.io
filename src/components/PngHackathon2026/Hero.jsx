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

        /* Student photo — Figma: 834×616 at left 1091/1920, bottom-anchored to the hero floor */
        .phk-hero-student {
          position: absolute;
          z-index: 1;
          left: 56.823%;
          bottom: -2%;
          width: 43.4375%;
          height: auto;
          display: block;
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

        @keyframes phk-btn-glow {
          0%, 100% { box-shadow: 0 0 1.25rem 0 rgba(231, 161, 89, 0.5), 0 0 0 0 rgba(231, 161, 89, 0); }
          50%       { box-shadow: 0 0 2rem 0 rgba(231, 161, 89, 0.75), 0 0 2.5rem 0.5rem rgba(216, 84, 71, 0.25); }
        }

        /* Apply button — Figma: 280×42, radius 9999, padding ~9/48/9/48, 600 21px #000 */
        .phk-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
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
          animation: phk-btn-glow 2.8s ease-in-out infinite;
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s, letter-spacing 0.25s;
        }
        .phk-hero-btn:hover {
          background: #ffffff;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 2rem rgba(216, 84, 71, 0.35), 0 0 2.5rem rgba(231, 161, 89, 0.4);
          letter-spacing: 0.01em;
          animation: none;
        }
        .phk-hero-btn:active {
          transform: translateY(-1px) scale(1.01);
        }

        /* Organized by / Supported by — aligned with the column's left edge, extending right into the illustration */
        .phk-hero-orgs {
          width: 68vw;
          margin-left: -7.2vw;
          padding-top: clamp(1.5rem, 2.083vw, 2.5rem);
          padding-left: 7.2vw;
          margin-top: clamp(2rem, 3.698vw, 4.4375rem);
          box-sizing: border-box;
        }

        /* Two groups side by side: Organized By (3 logos) | Supported By (1 logo) */
        .phk-hero-orgs-groups {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: clamp(1.25rem, 2vw, 2rem);
          flex-wrap: nowrap;
          width: 100%;
        }

        .phk-hero-orgs-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(0.875rem, 1.25vw, 1.5rem);
        }

        .phk-hero-orgs-divider {
          align-self: stretch;
          width: 1px;
          background: rgba(255, 255, 255, 0.3);
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
          white-space: nowrap;
        }

        .phk-hero-orgs-logos {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(1.25rem, 1.8vw, 2.25rem);
          flex-wrap: wrap;
        }

        .phk-hero-orgs-logos img,
        .phk-hero-supported-logo {
          height: clamp(3.5rem, 5vw, 6rem) !important;
          max-height: none !important;
          width: auto !important;
          display: block;
        }

        /* Responsive */

        /* Tablet and below — the photo overlay's left% and the orgs row's rem-floored
           sizing stop scaling at the same rate, so below this width they start to
           collide. Drop the overlay (the base banner already bakes in the same
           illustration, cropped via object-fit) and let the orgs row wrap freely. */
        @media (max-width: 64rem) {
          .phk-hero-student {
            display: none;
          }

          .phk-hero-orgs {
            width: 100%;
            margin-left: 0;
            padding-left: 0;
            padding-right: 0;
          }

          .phk-hero-orgs-groups {
            flex-wrap: wrap;
          }

          .phk-hero-orgs-divider {
            display: none;
          }
        }

        @media (max-width: 48rem) {
          .phk-hero-left {
            width: 100%;
            padding: 2rem 5% 2rem;
          }

          /* Shrunk so all 3 logos stay on one line instead of wrapping */
          .phk-hero-orgs-logos {
            gap: 0.875rem;
          }

          .phk-hero-orgs-logos img,
          .phk-hero-supported-logo {
            height: 2.5rem !important;
          }
        }

        @media (max-width: 30rem) {
          .phk-hero-badge { font-size: 0.75rem; padding: 0.375rem 0.75rem; }
          .phk-hero-pill { font-size: 0.6rem; }

          .phk-hero-orgs-logos {
            justify-content: flex-start;
            gap: 0.625rem;
          }

          .phk-hero-orgs-logos img,
          .phk-hero-supported-logo {
            height: 2.125rem !important;
          }
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

          <p className="phk-hero-regclose">REGISTRATION CLOSES JUNE 23, 2026</p>

          <a className="phk-hero-btn" href="https://hackathon.dts.gov.pg/register" target="_blank" rel="noopener noreferrer">Apply for Hackathon</a>

          <div className="phk-hero-orgs">
            <div className="phk-hero-orgs-groups">
              <div className="phk-hero-orgs-group">
                <p className="phk-hero-orgs-label">ORGANIZED BY</p>
                <div className="phk-hero-orgs-logos">
                  <a href="https://www.ict.gov.pg/" target="_blank" rel="noopener noreferrer">
                    <img src={`${bp}/PNG.svg`} alt="Department of ICT, Papua New Guinea" />
                  </a>
                  <a href="https://dts.gov.pg/" target="_blank" rel="noopener noreferrer">
                    <img src={`${bp}/dts_logo.svg`} alt="DTS26" />
                  </a>
                  <a href="https://www.microsave.net/" target="_blank" rel="noopener noreferrer">
                    <img src={`${bp}/MSC_White_logo.svg`} alt="MicroSave Consulting" />
                  </a>
                </div>
              </div>
              <div className="phk-hero-orgs-divider" />
              <div className="phk-hero-orgs-group">
                <p className="phk-hero-orgs-label">SUPPORTED BY</p>
                <a href="https://www.dfat.gov.au/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="phk-hero-supported-logo"
                    src={`${bp}/ag_logo.svg`}
                    alt="Australian Government"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Banner — absolutely anchored to bottom-right of full-height section */}
        <img
          className="phk-hero-banner"
          src={`${bp}/banner_png_2026.svg`}
          alt="PNG National Digital ID Hackathon 2026"
        />

        {/* Student photo — overlaid at its Figma position, bottom-anchored to the hero floor */}
        <img
          className="phk-hero-student"
          src={`${BASE_PATH}/banner_student.svg`}
          alt="Students collaborating on the PNG Digital ID hackathon"
        />
      </section>
    </>
  );
}