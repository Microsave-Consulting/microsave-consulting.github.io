import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026/reward`;

const BORDER_COLORS = ["#E7A159", "#DE794F", "#D85447", "#E7A159", "#DE794F"];

const CARDS = [
  {
    icon: `${bp}/savis.svg`,
    title: "SevisPass Pre-Incubation",
    desc: "Access to SevisPass pre-incubation program from DPI CoE and MSC",
  },
  {
    icon: `${bp}/dict.svg`,
    title: "DICT Internships",
    desc: "Internship with DICT, Govt of PNG + opportunity to pilot your SevisPass use-case",
  },
  {
    icon: `${bp}/goodies.svg`,
    title: "Goodies & Prizes",
    desc: "Exciting goodies and prizes for winning teams",
  },
  {
    icon: `${bp}/certificate.svg`,
    title: "Certificate",
    desc: "Certificate of achievement for all finalists",
  },
  {
    icon: `${bp}/mentorship.svg`,
    title: "Mentorship",
    desc: "Access to mentorship and networking opportunities",
  },
];

export default function HeiPrizes() {
  return (
    <>
      <style>{`
        .hei-prizes {
          width: 100%;
          background: #ffffff;
          padding: clamp(2.5rem, 3.385vw, 4.0625rem) 5%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.25rem, 1.667vw, 2rem);
        }

        .hei-prizes-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }

        .hei-prizes-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #221A17;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        .hei-prizes-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
        }

        .hei-prizes-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.333;
          color: #000000;
          margin: 0;
          max-width: 50rem;
        }

        /* Cards row */
        .hei-prizes-cards {
          display: flex;
          gap: clamp(0.75rem, 1.25vw, 1.5rem);
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        /* Same card styling as main hackathon Prizes section */
        .hei-prize-card {
          background: #FFF5EC;
          border-radius: 1.25rem;
          border-top: 8px solid #E7A159;
          border-left: none;
          border-right: none;
          border-bottom: none;
          padding: clamp(1.5rem, 2.083vw, 2.5rem) clamp(1.5rem, 2.083vw, 2.5rem) clamp(2rem, 3.542vw, 4.25rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.925rem;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          flex: 1;
          min-width: 10rem;
          max-width: 15.9375rem;
          box-sizing: border-box;
          text-align: center;
        }

        .hei-prize-icon {
          width: 2.5rem !important;
          height: 2.5rem !important;
          object-fit: contain;
          display: block;
        }

        .hei-prize-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.406vw, 1.6875rem);
          line-height: 1.037;
          color: #000000;
          margin: 0;
        }

        .hei-prize-desc {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 1.094vw, 1.3125rem);
          line-height: 1.143;
          color: #000000;
          margin: 0;
        }

        @media (max-width: 56rem) {
          .hei-prizes-cards { gap: 1rem; }
          .hei-prize-card { min-width: 9rem; }
        }

        @media (max-width: 37.5rem) {
          .hei-prizes { padding: 2rem 5%; }
          .hei-prize-card { max-width: 100%; min-width: 100%; }
        }
      `}</style>

      <section className="hei-prizes">
        <div className="hei-prizes-header">
          <h2 className="hei-prizes-title">Prizes &amp; Recognition</h2>
          <div className="hei-prizes-line" />
          <p className="hei-prizes-subtitle">
            Beyond the competition, we offer tangible pathways for your growth and the scaling of your innovation.
          </p>
        </div>

        <div className="hei-prizes-cards">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="hei-prize-card"
              style={{ borderTopColor: BORDER_COLORS[i] }}
            >
              <img className="hei-prize-icon" src={card.icon} alt={card.title} />
              <p className="hei-prize-title">{card.title}</p>
              <p className="hei-prize-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
