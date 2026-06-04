import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026/hei`;

export default function HeiHero() {
  return (
    <>
      <style>{`
        .hei-breadcrumb {
          width: 100%;
          padding: 0.625rem 5%;
          background: #ffffff;
          box-sizing: border-box;
        }

        .hei-breadcrumb-text {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888888;
          margin: 0;
        }

        .hei-hero {
          width: 100%;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
          padding: clamp(1rem, 1.25vw, 1.5rem) 5%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 1.5vw, 1.75rem);
          overflow: hidden;
        }

        .hei-hero-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(0.8125rem, 0.885vw, 1rem);
          color: #ffffff;
          text-decoration: none;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 0.5rem;
          padding: 0.45rem 1rem;
          align-self: flex-start;
          transition: background 0.2s, border-color 0.2s;
          backdrop-filter: blur(4px);
        }
        .hei-hero-back:hover {
          background: rgba(255, 255, 255, 0.28);
          border-color: rgba(255, 255, 255, 0.55);
        }
        .hei-hero-back svg { flex-shrink: 0; }

        .hei-hero-content {
          display: flex;
          align-items: stretch;
          gap: 2rem;
          flex: 1;
        }

        .hei-hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.25rem;
          min-width: 0;
        }

        .hei-hero-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 3.125vw, 3.75rem);
          line-height: 1;
          letter-spacing: -0.016em;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        .hei-hero-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1.167;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .hei-hero-right {
          flex-shrink: 0;
          width: clamp(14rem, 28.125vw, 33.75rem);
          overflow: hidden;
        }

        .hei-hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (max-width: 56rem) {
          .hei-hero { padding: clamp(2rem, 3vw, 3rem) 5%; }
          .hei-hero-content { flex-direction: column; }
          .hei-hero-right { width: 100%; max-width: 28rem; height: 14rem; }
        }
      `}</style>

      <section className="hei-hero">
        <a className="hei-hero-back" href="/png-hackathon-2026">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </a>

        <div className="hei-hero-content">
          <div className="hei-hero-left">
            <h1 className="hei-hero-title">
              Higher Education Institution (HEI) Track
            </h1>
            <p className="hei-hero-subtitle">
              The HEI track of PNG National Digital ID Hackathon 2026 follows a
              comprehensive, three-phase program designed to maximize innovation,
              learning, and impact.
            </p>
          </div>

          <div className="hei-hero-right">
            <img
              src={`${bp}/hei%20banner.svg`}
              alt="Higher Education Institution Track illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}
