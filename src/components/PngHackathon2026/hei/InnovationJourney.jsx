const PHASE1_ITEMS = [
  {
    text: <>Application submission for Higher Education Institute track on DTS portal:{" "}
      <a href="https://hackathon.dts.gov.pg/login" target="_blank" rel="noopener noreferrer" className="hei-ij-link">
        https://hackathon.dts.gov.pg/login
      </a>
    </>,
  },
  {
    text: <>Weekly expert webinars on SevisPass and use case design. Join us on the 12th of June for the {" "}
      <a href="https://microsave-net.zoom.us/j/86307562087" target="_blank" rel="noopener noreferrer" className="hei-ij-link">
       introductory webinar
      </a>
      .
    </>,
  },
  { text: "The top six submissions from the student teams will be shortlisted and advance to the prototyping phase." },
];

const PHASE2_LEFT = [
  "Mentorship on SevisPass use-case design and prototype development",
  "Development of presentations to be given at Digital Transformation Summit 2026",
];

const PHASE2_RIGHT = [
  "Access to the SevisPass staging platform to develop the SevisPass use cases prototypes",
  "Active community support and engagement",
];

const FINALE_ACTIVITIES = [
  "Finals presentation to the judges",
  "Open house and networking",
  "Award ceremony",
];

function PresentationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/>
      <path d="m7 21 5-5 5 5"/>
    </svg>
  );
}

function NetworkingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4" fill="rgba(255,255,255,0.25)"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
      <path d="M4 22h16"/>
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

const ACTIVITY_ICONS = [<PresentationIcon key="p" />, <NetworkingIcon key="n" />, <TrophyIcon key="t" />];

function ItemBullet() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
      <circle cx="6" cy="6" r="5" stroke="#DF7D50" strokeWidth="1.5" />
      <circle cx="6" cy="6" r="2.5" fill="#DF7D50" />
    </svg>
  );
}

function PhaseCard({ title, date, children }) {
  return (
    <div className="hei-ij-card">
      <div className="hei-ij-card-header">
        <span className="hei-ij-card-title">{title}</span>
        <span className="hei-ij-date-badge">{date}</span>
      </div>
      {children}
    </div>
  );
}

export default function HeiInnovationJourney() {
  return (
    <>
      <style>{`
        .hei-ij {
          width: 100%;
          background: #FDEEE3;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
        }

        /* ── Header ── */
        .hei-ij-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(2rem, 2.5vw, 3rem);
          text-align: center;
        }

        .hei-ij-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #221A17;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        }

        .hei-ij-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 10px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        .hei-ij-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.667;
          color: #000000;
          margin: 0;
          max-width: 56rem;
        }

        /* ── Timeline track — centered ── */
        .hei-ij-track {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: clamp(40rem, 80%, 95rem);
          margin: 0 auto;
        }

        /* Each phase row: [label+dot] [card] */
        .hei-ij-row {
          display: flex;
          align-items: flex-start;
          gap: clamp(1rem, 1.667vw, 2rem);
          margin-bottom: clamp(1.25rem, 1.667vw, 2rem);
        }

        /* Left: phase label + dot + connecting line */
        .hei-ij-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: clamp(4rem, 5.208vw, 6.25rem);
          gap: 0;
          padding-top: clamp(1.25rem, 1.667vw, 2rem);
        }

        .hei-ij-label-dot {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          align-self: flex-start;
        }

        /* Figma: Phase N — Albert Sans 700, 27px, #DF7D50 */
        .hei-ij-phase-name {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.406vw, 1.6875rem);
          line-height: 1.037;
          color: #DF7D50;
          white-space: nowrap;
        }

        /* Figma dot: 12×12, #DF7D50, radius 9999 */
        .hei-ij-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: #DF7D50;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        /* Right: the phase card */
        .hei-ij-right {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        /* Figma card: #FFF, border #F5D1BC, radius 16, padding 32, shadow 0 1 2 #000 5% */
        .hei-ij-card {
          background: #ffffff;
          border: 1px solid #F5D1BC;
          border-radius: 1rem;
          padding: clamp(1.25rem, 1.667vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 1.927vw, 2.3125rem);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .hei-ij-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        /* Figma card title: Albert Sans 800, 30px, #DF7D50 */
        .hei-ij-card-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.125rem, 1.5625vw, 1.875rem);
          line-height: 1.067;
          color: #DF7D50;
        }

        /* Figma date badge: #F5D1BC bg, radius 9999, padding 4/16, Albert Sans 600, 19.5px, ls 0.7px, #494641 */
        .hei-ij-date-badge {
          background: #F5D1BC;
          border-radius: 9999px;
          padding: 0.25rem 1rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.75rem, 1.016vw, 1.21875rem);
          letter-spacing: 0.036em;
          color: #494641;
          white-space: nowrap;
        }

        /* Phase item rows */
        .hei-ij-items {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .hei-ij-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 1.016vw, 1.21875rem);
          line-height: 1.231;
          color: #494641;
        }

        .hei-ij-link {
          color: #DF7D50;
          text-decoration: underline;
          word-break: break-all;
        }
        .hei-ij-link:hover { opacity: 0.8; }

        /* Phase 2 two-column items */
        .hei-ij-items-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: repeat(2, auto);
          grid-auto-flow: column;
          gap: 0.625rem clamp(1rem, 2vw, 2.5rem);
          overflow: hidden;
        }
        .hei-ij-items-2col .hei-ij-item { min-width: 0; }

        /* ── Grand Final card — gradient ── */
        .hei-ij-finale-card {
          background: linear-gradient(135deg, #DF7D50, #D95748);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: clamp(1.25rem, 1.667vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .hei-ij-finale-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .hei-ij-finale-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.125rem, 1.5625vw, 1.875rem);
          color: #ffffff;
          margin: 0;
        }

        .hei-ij-finale-date {
          background: rgba(245, 209, 188, 0.25);
          border-radius: 9999px;
          padding: 0.25rem 1rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.75rem, 0.729vw, 0.875rem);
          letter-spacing: 0.05em;
          color: #ffffff;
          white-space: nowrap;
        }

        .hei-ij-finale-venue {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.8125rem, 1.016vw, 1.21875rem);
          line-height: 1.436;
          color: #ffffff;
          margin: 0;
        }

        /* Figma: "GRAND FINALE ACTIVITIES:" Albert Sans 700, 19.5px, ls 0.7px, Uppercase, white */
        .hei-ij-finale-activities-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.016vw, 1.21875rem);
          letter-spacing: 0.036em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        /* Activity buttons — always 3 in a row, never wrap */
        .hei-ij-activities {
          display: flex;
          gap: 0.75rem;
          flex-wrap: nowrap;
        }

        /* Figma: radius 12, border 1px #FFF 10%, padding 16, gap 8, bg #FFF 10% */
        .hei-ij-activity-btn {
          flex: 1;
          min-width: 0;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: clamp(0.75rem, 0.833vw, 1rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          text-align: center;
        }

        .hei-ij-activity-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        /* Figma: Albert Sans 700, 19.5px, ls 0.96px, Center, white */
        .hei-ij-activity-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.625rem, 1.016vw, 1.21875rem);
          letter-spacing: 0.049em;
          color: #ffffff;
          line-height: 1.2;
        }

        @media (max-width: 48rem) {
          .hei-ij-items-2col { grid-template-columns: 1fr; }
          .hei-ij-activities { flex-direction: column; }
          .hei-ij-activity-btn { min-width: 100%; }
        }

        @media (max-width: 37.5rem) {
          .hei-ij { padding: 2rem 5%; }
          .hei-ij-left { width: 4rem; }
        }
      `}</style>

      <section className="hei-ij">
        {/* Header */}
        <div className="hei-ij-header">
          <h2 className="hei-ij-title">The Innovation Journey</h2>
          <div className="hei-ij-line" />
          <p className="hei-ij-subtitle">
            The HEI track of PNG National Digital ID Hackathon 2026 follows a comprehensive,
            three-phase program designed to maximize innovation, learning, and impact
          </p>
        </div>

        {/* Timeline */}
        <div className="hei-ij-track">

          {/* Phase 1 */}
          <div className="hei-ij-row">
            <div className="hei-ij-left">
              <div className="hei-ij-label-dot">
                <div className="hei-ij-dot" />
                <span className="hei-ij-phase-name">Phase 1</span>
              </div>
            </div>
            <div className="hei-ij-right">
              <PhaseCard title="Upskilling and ideation" date="June 4, 2026 – June 23, 2026">
                <div className="hei-ij-items">
                  {PHASE1_ITEMS.map((item, i) => (
                    <div key={i} className="hei-ij-item">
                      <ItemBullet />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </PhaseCard>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="hei-ij-row">
            <div className="hei-ij-left">
              <div className="hei-ij-label-dot">
                <div className="hei-ij-dot" />
                <span className="hei-ij-phase-name">Phase 2</span>
              </div>
            </div>
            <div className="hei-ij-right">
              <PhaseCard title="Prototyping and development" date="June 26, 2026 – July 15, 2026">
                <div className="hei-ij-items-2col">
                  {[...PHASE2_LEFT, ...PHASE2_RIGHT].map((text, i) => (
                    <div key={i} className="hei-ij-item">
                      <ItemBullet />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </PhaseCard>
            </div>
          </div>

          {/* Phase 3 — Grand Final */}
          <div className="hei-ij-row">
            <div className="hei-ij-left">
              <div className="hei-ij-label-dot">
                <div className="hei-ij-dot" />
                <span className="hei-ij-phase-name">Phase 3</span>
              </div>
            </div>
            <div className="hei-ij-right">
              <div className="hei-ij-finale-card">
                <div className="hei-ij-finale-header">
                  <p className="hei-ij-finale-title">Grand final</p>
                  <span className="hei-ij-finale-date">20th – 23rd July 2026</span>
                </div>
                <p className="hei-ij-finale-venue">
                  Digital Transformation Summit 2026 at Port Moresby
                </p>
                <p className="hei-ij-finale-activities-label">Grand Finale Activities:</p>
                <div className="hei-ij-activities">
                  {FINALE_ACTIVITIES.map((label, i) => (
                    <div key={i} className="hei-ij-activity-btn">
                      <span className="hei-ij-activity-icon">{ACTIVITY_ICONS[i]}</span>
                      <span className="hei-ij-activity-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
