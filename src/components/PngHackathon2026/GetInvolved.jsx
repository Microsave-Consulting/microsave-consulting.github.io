const CARDS = [
  { text: "Provide mentorship and technical training.",         border: "#D85447" },
  { text: "Support pre-incubation program for top teams.",     border: "#DE794F" },
  { text: "Deliver expert sessions to the participants",       border: "#E7A159" },
  { text: "Provide internships to finalists from the HEI track.", border: "#DE794F" },
];

export default function PngHackathon2026GetInvolved() {
  return (
    <>
      <style>{`
        .phk-gi {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.438vw, 4.125rem) clamp(1rem, 1.25vw, 1.5rem) clamp(2rem, 3.229vw, 3.875rem);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.25rem, 1.667vw, 2rem);
        }

        /* ── Header ── */
        .phk-gi-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }

        /* Figma: Albert Sans 800, 39px, shadow 0 4 4 #000 25% */
        .phk-gi-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #000000;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        /* Gradient line 144×4px */
        .phk-gi-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #E7A159, #DE794F, #D85447);
        }

        /* Body text — Albert Sans 400, 21px, 30px lh, centered */
        .phk-gi-body {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.429;
          color: #000000;
          margin: 0;
          text-align: center;
          max-width: 60rem;
        }

        /* ── Partnership cards ── */
        .phk-gi-cards {
          display: flex;
          gap: clamp(0.75rem, 1.25vw, 1.5rem);
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 0.5rem;
        }

        /* Figma: 288×204, radius 20, border-bottom 8px #D85447,
           padding 29/40/63/40, gap 15, bg #FFF5EC */
        .phk-gi-card {
          background: #FFF5EC;
          border-radius: 1.25rem;
          border-bottom: 8px solid #D85447;
          border-top: none;
          border-left: none;
          border-right: none;
          padding: clamp(1.125rem, 1.51vw, 1.8125rem)
                   clamp(1.25rem, 2.083vw, 2.5rem)
                   clamp(2rem, 3.268vw, 3.921875rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.9375rem;
          flex: 1;
          min-width: 11rem;
          max-width: 18rem;
          box-sizing: border-box;
          text-align: center;
        }

        /* Figma: Albert Sans 600, 27px, 28px lh, #000000 75% */
        .phk-gi-card-text {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(1rem, 1.406vw, 1.6875rem);
          line-height: 1.037;
          color: rgba(0, 0, 0, 0.75);
          margin: 0;
        }

        @media (max-width: 56rem) {
          .phk-gi-cards { gap: 1rem; }
          .phk-gi-card { min-width: 10rem; }
        }

        @media (max-width: 37.5rem) {
          .phk-gi { padding: 2rem 1rem; }
          .phk-gi-card { max-width: 100%; min-width: 100%; }
        }
      `}</style>

      <section id="get-involved" className="phk-gi">

        {/* Header */}
        <div className="phk-gi-header">
          <h2 className="phk-gi-title">Get Involved</h2>
          <div className="phk-gi-line" />
        </div>

        {/* Body paragraphs */}
        <p className="phk-gi-body">
          We welcome public and private sector entities and multilateral organizations that want to support Papua New Guinea's digital transformation journey to partner with us.
        </p>
        <p className="phk-gi-body">
          If your organization wishes to leverage this platform to explore SevisPass use cases for secure
          authentication, KYC, and digital service delivery, you can engage through the following partnership
          opportunities
        </p>

        {/* Cards */}
        <div className="phk-gi-cards">
          {CARDS.map((card, i) => (
            <div key={i} className="phk-gi-card" style={{ borderBottomColor: card.border }}>
              <p className="phk-gi-card-text">{card.text}</p>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
