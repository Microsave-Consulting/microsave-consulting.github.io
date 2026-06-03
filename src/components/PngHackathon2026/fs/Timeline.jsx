export default function FsTimeline() {
  const items = [
    {
      label: "Application open",
      detail: (
        <>
          June 4, 2026: <a href="https://hackathon.dts.gov.pg/login" target="_blank" rel="noreferrer" className="fs-tl-link">https://hackathon.dts.gov.pg/login</a>
        </>
      ),
    },
    {
      label: "Registration deadline",
      detail: "June 21, 2026",
    },
    {
      label: "Shortlisted teams announced",
      detail: "June 23, 2026",
    },
    {
      label: "Onboarding",
      detail: "June 24, 2026",
    },
    {
      label: "Prototype development",
      detail: "June 25, 2026 – July 15, 2026",
    },
    {
      label: "Prototype submission",
      detail: "16th July 2026",
    },
    {
      label: "Grand finale",
      detail: "20th – 23rd July 2026 at Digital Transformation Summit, Port Moresby",
    },
  ];

  return (
    <>
      <style>{`
        .fs-tl {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
        }

        .fs-tl-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(1.5rem, 2vw, 2.5rem);
          text-align: center;
        }

        .fs-tl-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          color: #221A17;
          margin: 0;
        }

        .fs-tl-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        .fs-tl-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.667;
          color: #494641;
          margin: 0;
          max-width: 56rem;
        }

        .fs-tl-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .fs-tl-item {
          background: #FFF5EC;
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid rgba(216, 84, 71, 0.12);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }

        .fs-tl-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.95rem, 1.094vw, 1.125rem);
          margin: 0 0 0.5rem 0;
          color: #221A17;
        }

        .fs-tl-detail {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.85rem, 1.016vw, 1.0625rem);
          line-height: 1.6;
          color: #494641;
          margin: 0;
        }

        .fs-tl-link {
          color: #DF7D50;
          text-decoration: underline;
        }

        @media (max-width: 56rem) {
          .fs-tl-list { grid-template-columns: 1fr; }
        }

        @media (max-width: 37.5rem) {
          .fs-tl { padding: 2rem 5%; }
        }
      `}</style>

      <section className="fs-tl">
        <div className="fs-tl-header">
          <h2 className="fs-tl-title">Timeline</h2>
          <div className="fs-tl-line" />
          <p className="fs-tl-subtitle">
            Timeline of the PNG National Digital ID Hackathon 2026 for the Financial Services track.
          </p>
        </div>

        <div className="fs-tl-list">
          {items.map((item) => (
            <div key={item.label} className="fs-tl-item">
              <p className="fs-tl-label">{item.label}</p>
              <p className="fs-tl-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
