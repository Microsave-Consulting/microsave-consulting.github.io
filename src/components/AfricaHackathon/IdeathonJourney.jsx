import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

export default function AfricaIdeathonJourney() {
  const stages = [
    {
      icon: `${bp}/img/stage1.svg`,
      stage: "Phase 1",
      duration: "2 months",
      title: "Phase 1: Upskilling and ideation",
      date: "December 2025–February 2026",
      content: (
        <ul className="ij-list">
          <li>Bi-weekly expert webinars that span technology, policy, and use-case design (in English/French)</li>
          <li>Rolling idea submissions through the Devpost platform</li>
          <li>Virtual office hours on Discord for guided support and mentorship</li>
          <li>Country outreach held both virtually and on-site</li>
        </ul>
      ),
    },
    {
      icon: `${bp}/img/stage2.svg`,
      stage: "Phase 2",
      duration: "2 months",
      title: "Phase 2: Prototyping and development",
      date: "February 2026 – March 2026",
      content: (
        <ul className="ij-list">
          <li>24 shortlisted teams will receive dedicated use-case mentors (non-technical) and technical mentors (from MOSIP and technology partners).</li>
          <li>Weekly mentor-led prototyping sessions with regular check-ins (access to the MOSIP Innovation Sandbox will be provided).</li>
          <li>Mid-cycle presentations and pre-judging reviews will ensure teams are on track and their ideas are technically feasible.</li>
          <li>Regional semi-finals will be hosted at partner institutions across Africa.</li>
          <li>Community support will be available through Discord and WhatsApp platforms.</li>
        </ul>
      ),
    },
    {
      icon: `${bp}/img/vector-8.svg`,
      stage: "Phase 3",
      duration: "2 months",
      title: "Phase 3: Regional semi-finals",
      date: "April 2026",
      content: (
        <ul className="ij-list">
          <li>The semi-finals will be conducted at four different locations. Details of this will be announced soon.</li>
          <li>The semi-finals will include live demonstrations of prototypes and presentations.</li>
          <li>The top two teams per region will advance to the continental finals at ID4Africa 2026.</li>
        </ul>
      ),
    },
    {
      icon: `${bp}/img/stage4.svg`,
      stage: "Phase 4",
      duration: "4 days",
      title: "Phase 4: Continental finals at ID4Africa 2026 Annual General Meeting at Abidjan, Côte d'Ivoire",
      date: "12th–15th May 2026",
      content: (
        <ul className="ij-list">
          <li>Day 1: Panel discussions and short presentations by finalist students</li>
          <li>Day 2: Finals competition and judging</li>
          <li>Day 3: Open house and networking—meet the innovators</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <style>{`
        .ij-section {
          width: 100%;
          background-color: #ffffff;
          padding: 3rem 0 3.5rem;
        }

        .ij-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .ij-heading {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          text-align: left;
          margin: 0 0 2rem;
        }

        .ij-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-left: 4.5rem;
        }

        .ij-timeline::before {
          content: "";
          position: absolute;
          left: 1.625rem;
          top: 1.625rem;
          bottom: 1.625rem;
          width: 1.5px;
          background-color: #e0d5c4;
          transform: translateX(-50%);
        }

        .ij-row {
          position: relative;
          display: flex;
          align-items: flex-start;
        }

        .ij-icon {
          position: absolute;
          left: -4.5rem;
          top: 1rem;
          width: 3.25rem;
          height: 3.25rem;
          background-color: #eab05c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 1;
          box-sizing: border-box;
        }

        .ij-icon img {
          width: 1.625rem;
          height: 1.625rem;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .ij-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 1rem;
          border: 1px solid #f4f4f4;
          box-shadow: 0 0.0625rem 0.5rem rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
        }

        .ij-badges {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          flex-wrap: wrap;
        }

        .ij-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.375rem 0.875rem;
          background-color: #ffeacd;
          border-radius: 2rem;
          font-family: "Roboto-Medium", Helvetica, sans-serif;
          font-weight: 500;
          color: #000000;
          font-size: 0.875rem;
          white-space: nowrap;
        }

        .ij-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .ij-card-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.125rem;
          line-height: 1.4;
          margin: 0;
          white-space: normal;
        }

        .ij-card-date {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 0.9375rem;
          line-height: 1.5;
          margin: 0;
        }

        .ij-list {
          list-style-type: disc;
          list-style-position: outside;
          margin: 0.25rem 0 0 1.25rem;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .ij-list li {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #484f53;
          font-size: 0.9375rem;
          line-height: 1.65;
        }

        @media (max-width: 48rem) {
          .ij-heading { font-size: 1.375rem; }
          .ij-timeline { padding-left: 3.75rem; }
          .ij-timeline::before { left: 1.25rem; }
          .ij-icon { left: -3.75rem; width: 2.75rem; height: 2.75rem; }
          .ij-icon img { width: 1.375rem; height: 1.375rem; }
        }

        @media (max-width: 37.5rem) {
          .ij-section { padding: 2rem 0 2.5rem; }
          .ij-heading { font-size: 1.25rem; margin-bottom: 1.5rem; }
          .ij-timeline { padding-left: 3.25rem; gap: 1.125rem; }
          .ij-timeline::before { left: 1rem; }
          .ij-icon { left: -3.25rem; width: 2.25rem; height: 2.25rem; top: 0.875rem; }
          .ij-icon img { width: 1.125rem; height: 1.125rem; }
          .ij-card { padding: 1rem; }
          .ij-card-title { font-size: 0.9375rem; }
        }
      `}</style>

      <div className="ij-section" id="ideathon-journey">
        <div className="ij-inner">
          <p className="ij-heading">Stages of the Africa Digital ID Hackathon</p>

          <div className="ij-timeline">
            {stages.map((s, i) => (
              <div className="ij-row" key={i}>
                <div className="ij-icon">
                  <img src={s.icon} alt={`Phase ${i + 1}`} />
                </div>
                <div className="ij-card">
                  <div className="ij-badges">
                    <span className="ij-badge">{s.stage}</span>
                    <span className="ij-badge">{s.duration}</span>
                  </div>
                  <div className="ij-card-body">
                    <p className="ij-card-title">{s.title}</p>
                    <p className="ij-card-date">{s.date}</p>
                    {s.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
