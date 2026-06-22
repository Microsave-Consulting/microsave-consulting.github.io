const PHASE1_ITEMS = [
  {
    text: (
      <>
        Application submission for Financial Services track on DTS portal: <a href="https://hackathon.dts.gov.pg/login" target="_blank" rel="noopener noreferrer" className="fs-ij-link">https://hackathon.dts.gov.pg/login</a>
      </>
    ),
  },{
    text: <>Weekly expert webinars on SevisPass and use case design. Join us on the 12th of June for the {" "}
      <a href="https://microsave-net.zoom.us/j/86307562087" target="_blank" rel="noopener noreferrer" className="fs-ij-link">
       introductory webinar
      </a>
      .
    </>,
  },
];

const PHASE2_ITEMS = [
  "Mentorship on SevisPass use-case design and prototype development",
  "Access to the SevisPass staging platform to develop the SevisPass use case prototypes.",
];

const FINALE_ACTIVITIES = [
  "Finals presentation to the judges",
  "Open house and networking",
  "Award ceremony",
];

function PresentationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  );
}

function NetworkingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" fill="rgba(255,255,255,0.25)" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" fill="rgba(255,255,255,0.2)" />
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
    <div className="fs-ij-card">
      <div className="fs-ij-card-header">
        <span className="fs-ij-card-title">{title}</span>
        <span className="fs-ij-date-badge">{date}</span>
      </div>
      {children}
    </div>
  );
}

export default function FsInnovationJourney() {
  return (
    <>
      <style>{`
        .fs-ij {
          width: 100%;
          background: #FDEEE3;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
        }

        .fs-ij-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(2rem, 2.5vw, 3rem);
          text-align: center;
        }

        .fs-ij-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #221A17;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        }

        .fs-ij-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 10px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        .fs-ij-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.667;
          color: #000000;
          margin: 0;
          max-width: 56rem;
        }

        .fs-ij-track {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: clamp(40rem, 80%, 95rem);
          margin: 0 auto;
        }

        .fs-ij-row {
          display: flex;
          align-items: flex-start;
          gap: clamp(1rem, 1.667vw, 2rem);
          margin-bottom: clamp(1.25rem, 1.667vw, 2rem);
        }

        .fs-ij-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: clamp(4rem, 5.208vw, 6.25rem);
          gap: 0;
        padding-top: clamp(1.25rem, 1.667vw, 2rem);
        }

        .fs-ij-label-dot {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          align-self: flex-start;
        }

        .fs-ij-phase-name {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.406vw, 1.6875rem);
          line-height: 1.037;
          color: #DF7D50;
          white-space: nowrap;
        }

        .fs-ij-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          background: #DF7D50;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .fs-ij-right {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .fs-ij-card {
          background: #ffffff;
          border: 1px solid #F5D1BC;
          border-radius: 1rem;
          padding: clamp(1.25rem, 1.667vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 1.927vw, 2.3125rem);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .fs-ij-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .fs-ij-card-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.125rem, 1.5625vw, 1.875rem);
          line-height: 1.067;
          color: #DF7D50;
        }

        .fs-ij-date-badge {
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

        .fs-ij-items {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .fs-ij-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 1.016vw, 1.21875rem);
          line-height: 1.231;
          color: #494641;
        }

        .fs-ij-phase-note {
          margin: 0;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.9rem, 1.016vw, 1.15rem);
          line-height: 1.6;
          color: #494641;
        }

        .fs-ij-link {
          color: #DF7D50;
          text-decoration: underline;
          word-break: break-all;
        }
        .fs-ij-link:hover { opacity: 0.8; }

        .fs-ij-items-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .fs-ij-finale-card {
          background: linear-gradient(135deg, #D85447, #DE794F, #E7A159);
          border-radius: 1.25rem;
          padding: clamp(1.5rem, 2.083vw, 2.5rem);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #ffffff;
          box-shadow: 0 18px 42px rgba(216, 84, 71, 0.16);
          border: none;
        }

        .fs-ij-finale-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .fs-ij-finale-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 1.667vw, 2rem);
          margin: 0;
        }

        .fs-ij-finale-date {
          background: rgba(255, 255, 255, 0.18);
          border-radius: 9999px;
          padding: 0.4rem 1rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.75rem, 1.016vw, 1.21875rem);
          color: #ffffff;
        }

        .fs-ij-finale-venue {
          margin: 0;
          font-family: "Albert Sans", sans-serif;
          font-weight: 500;
          font-size: clamp(0.9rem, 1.094vw, 1.125rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.92);
        }

        .fs-ij-finale-activities-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.75rem, 1.016vw, 1.21875rem);
          letter-spacing: 0.036em;
          text-transform: uppercase;
          margin: 0;
          color: #ffffff;
        }

        .fs-ij-activities {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .fs-ij-activity-btn {
          flex: 1;
          min-width: 12rem;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 0.75rem;
          padding: clamp(0.75rem, 0.833vw, 1rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
        }

        .fs-ij-activity-icon {
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.18);
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .fs-ij-activity-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.625rem, 1.016vw, 1.21875rem);
          letter-spacing: 0.049em;
          color: #ffffff;
          line-height: 1.2;
        }

        @media (max-width: 56rem) {
          .fs-ij-row { flex-direction: column; }
          .fs-ij-items-2col { grid-template-columns: 1fr; }
          .fs-ij-activities { flex-direction: column; }
          .fs-ij-activity-btn { min-width: 100%; }
        }

        @media (max-width: 37.5rem) {
          .fs-ij { padding: 2rem 5%; }
        }
      `}</style>

      <section className="fs-ij">
        <div className="fs-ij-header">
          <h2 className="fs-ij-title">Stages of the PNG National Digital ID Hackathon (Financial Services track)</h2>
          <div className="fs-ij-line" />
          <p className="fs-ij-subtitle">
            Participant teams will engage in a comprehensive three-phase program designed to foster innovation in the financial sector and increase uptake of SevisPass-enabled service delivery.
          </p>
        </div>

        <div className="fs-ij-track">
          <div className="fs-ij-row">
            <div className="fs-ij-left">
              <div className="fs-ij-label-dot">
                <span className="fs-ij-dot" />
                <span className="fs-ij-phase-name">Phase 1</span>
                
              </div>
            </div>
            <div className="fs-ij-right">
              <PhaseCard title="Ideation phase" date="June 4, 2026 – June 23, 2026">
                <div className="fs-ij-items">
                  {PHASE1_ITEMS.map((item, idx) => (
                    <div key={idx} className="fs-ij-item">
                      <ItemBullet />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="fs-ij-phase-note">
                  The top six teams will be shortlisted and advance to Phase 2 for prototype development.
                </p>
              </PhaseCard>
            </div>
          </div>

          <div className="fs-ij-row">
            <div className="fs-ij-left">
              <div className="fs-ij-label-dot">
                <span className="fs-ij-dot" />
                <span className="fs-ij-phase-name">Phase 2</span>
                
              </div>
            </div>
            <div className="fs-ij-right">
              <PhaseCard title="Prototyping and development" date="June 26, 2026 – July 15, 2026">
                <div className="fs-ij-items-2col">
                  {PHASE2_ITEMS.map((text, idx) => (
                    <div key={idx} className="fs-ij-item">
                      <ItemBullet />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </PhaseCard>
            </div>
          </div>

          <div className="fs-ij-row">
            <div className="fs-ij-left">
              <div className="fs-ij-label-dot">
                <span className="fs-ij-dot" />
                <span className="fs-ij-phase-name">Phase 3</span>
                
              </div>
            </div>
            <div className="fs-ij-right">
              <div className="fs-ij-finale-card">
                <div className="fs-ij-finale-header">
                  <p className="fs-ij-finale-title">Grand final</p>
                  <span className="fs-ij-finale-date">20th – 23rd July 2026</span>
                </div>
                <p className="fs-ij-finale-venue">Digital Transformation Summit 2026 at Port Moresby</p>
                <p className="fs-ij-finale-activities-label">Grand Finale Activities:</p>
                <div className="fs-ij-activities">
                  {FINALE_ACTIVITIES.map((label, i) => (
                    <div key={i} className="fs-ij-activity-btn">
                      <span className="fs-ij-activity-icon">{ACTIVITY_ICONS[i]}</span>
                      <span className="fs-ij-activity-label">{label}</span>
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
