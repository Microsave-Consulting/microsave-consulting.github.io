const MILESTONES = [
  { date: "JUNE 4, 2026",           title: "Applications Open",                    side: "left"  },
  { date: "JUNE 21, 2026",          title: "Registration Deadline",                side: "right" },
  { date: "JUNE 21, 2026",          title: "Application Submission Deadline",      side: "left"  },
  { date: "JUNE 23, 2026",          title: "Shortlisted Teams Announced",          side: "right" },
  { date: "JUNE 24, 2026",          title: "Team Onboarding",                      side: "left"  },
  { date: "JUNE 25 – JULY 15, 2026",title: "Prototype Development & Mentorship",   side: "right" },
  { date: "JULY 16, 2026",          title: "Prototype Submission",                 side: "left"  },
];

function MilestoneCard({ date, title }) {
  return (
    <div className="phk-rm-card">
      <p className="phk-rm-card-date">{date}</p>
      <p className="phk-rm-card-title">{title}</p>
    </div>
  );
}

export default function PngHackathon2026Roadmap() {
  return (
    <>
      <style>{`
        .phk-rm {
          width: 100%;
          background: #ffffff;
          padding: 1rem clamp(1rem, 1.25vw, 1.5rem) clamp(2.5rem, 3.698vw, 4.4375rem);
          box-sizing: border-box;
        }

        /* Title — Albert Sans 800, 40px, shadow 0 4 4 #000 15% */
        .phk-rm-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.083vw, 2.5rem);
          line-height: 1;
          color: #000000;
          text-align: center;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
          margin: 0 0 clamp(2rem, 3.333vw, 4rem);
        }

        /* Track container — max-width 1280px, radius 45/10/10/20, gap 64px */
        .phk-rm-track {
          position: relative;
          max-width: 80rem;
          margin: 0 auto;
          border-radius: 2.8125rem 0.625rem 0.625rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 3.333vw, 4rem);
        }

        /* Center vertical line */
        .phk-rm-track::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(214, 195, 179, 0.4);
          transform: translateX(-50%);
          z-index: 0;
        }

        /* Each milestone row — 3-col grid: [left] [dot] [right] */
        .phk-rm-row {
          display: grid;
          grid-template-columns: 1fr 1.125rem 1fr;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .phk-rm-half-left  { display: flex; justify-content: flex-end; }
        .phk-rm-half-right { display: flex; justify-content: flex-start; }

        /* Gradient dot — 18×18, Figma: #E7A159→#DE794F→#D85447 */
        .phk-rm-dot {
          width: 1.125rem;
          height: 1.125rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #E7A159, #DE794F, #D85447);
          flex-shrink: 0;
        }

        /* Milestone card — #FDF8F4, border #D6C3B3 20%, radius 20, padding 24, gap 4 */
        .phk-rm-card {
          background: #FDF8F4;
          border: 1px solid rgba(214, 195, 179, 0.2);
          border-radius: 1.25rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          max-width: 22.5625rem;
          width: 100%;
          box-sizing: border-box;
        }

        /* Date — Albert Sans 600, 18px, ls 1.2px, Uppercase */
        .phk-rm-card-date {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.625rem, 0.9375vw, 1.125rem);
          letter-spacing: 0.067em;
          text-transform: uppercase;
          color: #000000;
          margin: 0;
          line-height: 1;
        }

        /* Title — Albert Sans 700, 30px */
        .phk-rm-card-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1;
          color: #000000;
          margin: 0;
        }

        /* Grand Finale dot — same gradient as regular dots */
        .phk-rm-finale-dot {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #E7A159, #DE794F, #D85447);
          flex-shrink: 0;
        }

        /* Grand Finale card — gradient, radius 20, padding 32, gap 4 */
        .phk-rm-finale-card {
          background: linear-gradient(135deg, #E7A159, #DE794F, #D85447);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.25rem;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          max-width: 25.0625rem;
          width: 100%;
          box-sizing: border-box;
        }

        .phk-rm-finale-date {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.625rem, 0.9375vw, 1.125rem);
          letter-spacing: 0.067em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          line-height: 1;
        }

        .phk-rm-finale-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1;
          color: #ffffff;
          margin: 0;
        }

        .phk-rm-finale-sub {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.75rem, 0.833vw, 1rem);
          line-height: 1.25;
          color: #ffffff;
          margin: 0;
        }

        /* Mobile — collapse to single column */
        @media (max-width: 48rem) {
          .phk-rm-track::before { left: 1rem; }
          .phk-rm-row {
            grid-template-columns: 1rem auto 1fr;
            gap: 0.75rem;
          }
          .phk-rm-half-left { display: none; }
          .phk-rm-half-right { justify-content: flex-start; }
          .phk-rm-card, .phk-rm-finale-card { max-width: 100%; }
        }
      `}</style>

      <section id="overview" className="phk-rm">
        <h2 className="phk-rm-title">Hackathon Journey</h2>

        <div className="phk-rm-track">
          {MILESTONES.map((m, i) => (
            <div key={i} className="phk-rm-row">
              <div className="phk-rm-half-left">
                {m.side === "left" && <MilestoneCard date={m.date} title={m.title} />}
              </div>
              <div className="phk-rm-dot" />
              <div className="phk-rm-half-right">
                {m.side === "right" && <MilestoneCard date={m.date} title={m.title} />}
              </div>
            </div>
          ))}

          {/* Grand Finale — right side, gradient card */}
          <div className="phk-rm-row">
            <div className="phk-rm-half-left" />
            <div className="phk-rm-finale-dot" />
            <div className="phk-rm-half-right">
              <div className="phk-rm-finale-card">
                <p className="phk-rm-finale-date">JULY 20–23, 2026</p>
                <p className="phk-rm-finale-title">Grand Finale</p>
                <p className="phk-rm-finale-sub">Digital Transformation Summit, Port Moresby</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
