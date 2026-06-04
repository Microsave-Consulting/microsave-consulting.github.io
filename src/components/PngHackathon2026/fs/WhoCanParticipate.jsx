import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026`;

export default function FsWhoCanParticipate() {
  return (
    <>
      <style>{`
        .fs-wcp {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
        }

        .fs-wcp-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(1.5rem, 2vw, 2.5rem);
          text-align: center;
        }

        .fs-wcp-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #221A17;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        .fs-wcp-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        .fs-wcp-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.429;
          color: #000000;
          margin: 0;
        }

        .fs-wcp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 1.25vw, 1.5rem);
        }

        .fs-wcp-card {
          background: #ffffff;
          border: 1px solid #ECAF8B;
          border-radius: 1rem;
          padding: clamp(1.25rem, 1.667vw, 2rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.625rem, 0.781vw, 0.9375rem);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
        }

        .fs-wcp-icon {
          width: clamp(1.5rem, 1.719vw, 2.0625rem) !important;
          height: auto !important;
          display: block;
        }

        .fs-wcp-card-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 1.667vw, 2rem);
          line-height: 1;
          color: #000000;
          margin: 0;
        }

        .fs-wcp-card-desc {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.875rem, 1.146vw, 1.375rem);
          line-height: 1.091;
          color: #494641;
          margin: 0;
        }

        .fs-wcp-highlight {
          color: #DF7D50;
        }

        .fs-wcp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .fs-wcp-tag {
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
          .fs-wcp-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 37.5rem) {
          .fs-wcp-grid { grid-template-columns: 1fr; }
          .fs-wcp { padding: 2rem 5%; }
        }
      `}</style>

      <section className="fs-wcp">
        <div className="fs-wcp-header">
          <h2 className="fs-wcp-title">Who Can Participate?</h2>
          <div className="fs-wcp-line" />
          <p className="fs-wcp-subtitle">
            Private-sector entities operating in financial services and legally registered in Papua New Guinea.
          </p>
        </div>

        <div className="fs-wcp-grid">
          <div className="fs-wcp-card">
            <img className="fs-wcp-icon" src={`${bp}/hei/team.svg`} alt="Team Size" />
            <p className="fs-wcp-card-title">Team size</p>
            <p className="fs-wcp-card-desc">
              2–4 members.
            </p>
          </div>

          <div className="fs-wcp-card">
            <svg className="fs-wcp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
              <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zM11.5 1L2 6v2h19V6L11.5 1z"/>
            </svg>
            <p className="fs-wcp-card-title">Financial sector players</p>
            <p className="fs-wcp-card-desc">
              Private-sector entities operating in financial services.
            </p>
          </div>

          <div className="fs-wcp-card">
            <img className="fs-wcp-icon" src={`${bp}/reward/certificate.svg`} alt="Legal Registration" />
            <p className="fs-wcp-card-title">Legally registered in PNG</p>
            <p className="fs-wcp-card-desc">
              Entities legally registered in Papua New Guinea.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
