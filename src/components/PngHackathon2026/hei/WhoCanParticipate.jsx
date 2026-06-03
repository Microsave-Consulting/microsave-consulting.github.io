import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026/hei`;

export default function HeiWhoCanParticipate() {
  return (
    <>
      <style>{`
        .hei-wcp {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
        }

        /* ── Header ── */
        .hei-wcp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(1.5rem, 2vw, 2.5rem);
          text-align: center;
        }

        /* Figma: Albert Sans 800, 39px, #221A17, shadow 0 4 4 #000 25% */
        .hei-wcp-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #221A17;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        .hei-wcp-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        /* Figma: Albert Sans 400, 21px, 30px lh */
        .hei-wcp-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.429;
          color: #000000;
          margin: 0;
        }

        /* ── Grid — 4 cols, gap 24px ── */
        .hei-wcp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(1rem, 1.25vw, 1.5rem);
        }

        /* Figma: radius 16, border 1px #ECAF8B, padding 32/32/89/32,
           bg #FFF, shadow 0 1 2 0 #000 5% */
        .hei-wcp-card {
          background: #ffffff;
          border: 1px solid #ECAF8B;
          border-radius: 1rem;
          padding: clamp(1.25rem, 1.667vw, 2rem) clamp(1.25rem, 1.667vw, 2rem) clamp(3rem, 4.635vw, 5.5625rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.625rem, 0.781vw, 0.9375rem);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }

        /* Academic Level spans 2 columns */
        .hei-wcp-card--wide {
          grid-column: span 2;
        }

        /* Icon — Figma: 33×27, color #DF7D50 */
        .hei-wcp-icon {
          width: clamp(1.5rem, 1.719vw, 2.0625rem) !important;
          height: auto !important;
          display: block;
        }

        /* Figma: Albert Sans 800, 32px */
        .hei-wcp-card-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 1.667vw, 2rem);
          line-height: 1;
          color: #000000;
          margin: 0;
        }

        /* Figma: Albert Sans 600, 22px, 24px lh, #494641 */
        .hei-wcp-card-desc {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.875rem, 1.146vw, 1.375rem);
          line-height: 1.091;
          color: #494641;
          margin: 0;
        }

        /* Highlighted span — #DF7D50 */
        .hei-wcp-highlight {
          color: #DF7D50;
        }

        /* Tags row */
        .hei-wcp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        /* Figma: bg #FDEEE3, padding 4/12, radius 9999, Albert Sans 800, 16px, #DF7D50 */
        .hei-wcp-tag {
          background: #FDEEE3;
          border-radius: 9999px;
          padding: 0.25rem 0.75rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(0.75rem, 0.833vw, 1rem);
          color: #DF7D50;
          white-space: nowrap;
        }

        @media (max-width: 56rem) {
          .hei-wcp-grid { grid-template-columns: repeat(2, 1fr); }
          .hei-wcp-card--wide { grid-column: span 2; }
        }

        @media (max-width: 37.5rem) {
          .hei-wcp-grid { grid-template-columns: 1fr; }
          .hei-wcp-card--wide { grid-column: span 1; }
          .hei-wcp { padding: 2rem 5%; }
        }
      `}</style>

      <section className="hei-wcp">
        {/* Header */}
        <div className="hei-wcp-header">
          <h2 className="hei-wcp-title">Who Can Participate?</h2>
          <div className="hei-wcp-line" />
          <p className="hei-wcp-subtitle">
            Students from various universities and higher education institutions in PNG
          </p>
        </div>

        {/* 4-column grid */}
        <div className="hei-wcp-grid">

          {/* Academic Level — spans 2 cols */}
          <div className="hei-wcp-card hei-wcp-card--wide">
            <img className="hei-wcp-icon" src={`${bp}/academic.svg`} alt="Academic Level" />
            <p className="hei-wcp-card-title">Academic Level</p>
            <p className="hei-wcp-card-desc">
              Open to all currently enrolled Undergraduate, graduate, or doctoral students across PNG.
            </p>
            <div className="hei-wcp-tags">
              <span className="hei-wcp-tag">Undergraduate</span>
              <span className="hei-wcp-tag">Graduate</span>
              <span className="hei-wcp-tag">Doctoral / PhD Scholar</span>
            </div>
          </div>

          {/* Team Size */}
          <div className="hei-wcp-card">
            <img className="hei-wcp-icon" src={`${bp}/team.svg`} alt="Team Size" />
            <p className="hei-wcp-card-title">Team Size</p>
            <p className="hei-wcp-card-desc">
              Form a core group of{" "}
              <span className="hei-wcp-highlight">2–4 members</span>{" "}
              to collaborate on your solution.
            </p>
          </div>

          {/* Gender Inclusion */}
          <div className="hei-wcp-card">
            <img className="hei-wcp-icon" src={`${bp}/gender.svg`} alt="Gender Inclusion" />
            <p className="hei-wcp-card-title">Gender Inclusion</p>
            <p className="hei-wcp-card-desc">
              At least{" "}
              <span className="hei-wcp-highlight">one female participant</span>{" "}
              per team is mandatory.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
