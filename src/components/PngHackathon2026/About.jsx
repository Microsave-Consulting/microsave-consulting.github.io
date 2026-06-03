import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026`;

export default function PngHackathon2026About() {
  return (
    <>
      <style>{`
        .phk-about {
          width: 100%;
          background: #FFF5EC;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) clamp(1rem, 2.5%, 3rem);
          box-sizing: border-box;
        }

        .phk-about-inner {
          width: 100%;
          display: flex;
          align-items: center;
          gap: clamp(2rem, 4vw, 5rem);
        }

        /* ── Image column ── */
        .phk-about-img-col {
          flex-shrink: 0;
          width: 42%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        /* Outer tilted frame — Figma: rotate 1.96°, bg #E28C61 34%, radius 8px */
        .phk-about-img-outer {
          width: 100%;
          background: rgba(226, 140, 97, 0.34);
          border-radius: 8px;
          transform: rotate(1.96deg);
          padding: 1.25rem;
          box-sizing: border-box;
        }

        /* Inner frame — Figma: rotate -0.23°, bg #FCF9F8, radius 2px, padding 16px,
           shadows: 0 8 10 -6 #000 10% and 0 20 25 -5 #000 10% */
        .phk-about-img-inner {
          background: #FCF9F8;
          border-radius: 2px;
          transform: rotate(-0.23deg);
          padding: 1rem;
          box-shadow:
            0 8px 10px -6px rgba(0, 0, 0, 0.10),
            0 20px 25px -5px rgba(0, 0, 0, 0.10);
          overflow: hidden;
        }

        .phk-about-img-inner img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 2px;
        }

        /* ── Text column ── */
        .phk-about-text-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 1.5vw, 1.75rem);
          min-width: 0;
        }

        /* Heading — Figma: Albert Sans 800, 39px, border-left 8px #DE794F, padding-left 32px */
        .phk-about-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.375rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #000000;
          margin: 0;
          border-left: 8px solid #DE794F;
          padding-left: clamp(1rem, 1.667vw, 2rem);
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        /* Body — Figma: Albert Sans 500, 21px, line-height 26px, #4D4E4E */
        .phk-about-body {
          font-family: "Albert Sans", sans-serif;
          font-weight: 500;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.238;
          color: #4D4E4E;
          margin: 0;
        }

        /* Bold spans — para 1: weight 900, para 2: weight 800 */
        .phk-about-bold {
          font-weight: 900;
        }
        .phk-about-bold-eb {
          font-weight: 800;
        }

        @media (max-width: 56rem) {
          .phk-about-inner { flex-direction: column; }
          .phk-about-img-col { width: 100%; max-width: 32rem; }
        }

        @media (max-width: 37.5rem) {
          .phk-about { padding: 2rem 5%; }
        }
      `}</style>

      <section id="overview" className="phk-about">
        <div className="phk-about-inner">

          {/* Left — image with tilted frame */}
          <div className="phk-about-img-col">
            <div className="phk-about-img-outer">
              <div className="phk-about-img-inner">
                <img
                  src={`${bp}/about_image.svg`}
                  alt="PNG National Digital ID Hackathon 2026 participants"
                />
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div className="phk-about-text-col">
            <h2 className="phk-about-title">About the 2026 Edition</h2>

            <p className="phk-about-body">
              The PNG National Digital ID Hackathon returns in 2026! The second edition of the
              PNG National Digital ID Hackathon is organized by the{" "}
              <span className="phk-about-bold">Department of ICT, </span>
              <span className="phk-about-bold">Government of Papua New Guinea</span>, in partnership with{" "}
              <span className="phk-about-bold">MSC (MicroSave Consulting)</span>.
            </p>

            <p className="phk-about-body">
              The PNG National Digital ID Hackathon 2026 aims to identify and test new use cases
              of SevisPass across various sectors and strengthen local capacity in digital public
              infrastructure (DPI). This year, the National Digital ID Hackathon will feature
              two key tracks, which are the{" "}
              <span className="phk-about-bold-eb">Higher Education Institution track</span>{" "}and the{" "}
              <span className="phk-about-bold-eb">Financial Services track.</span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
