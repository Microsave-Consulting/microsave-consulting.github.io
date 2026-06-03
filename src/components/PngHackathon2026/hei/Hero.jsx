import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026/hei`;

export default function HeiHero() {
  return (
    <>
      <style>{`
        /* Breadcrumb label */
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

        /* Hero banner — Figma: 1920×540, gradient #D85447→#DE794F→#E7A159,
           padding 64/24/128/24 */
        .hei-hero {
          width: 100%;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
          padding: clamp(2.5rem, 3.333vw, 4rem) 5% clamp(4rem, 6.667vw, 8rem);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 2rem;
          overflow: hidden;
        }

        /* Left column */
        .hei-hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
        }

        /* Figma: Albert Sans 900 Black, 60px, ls -0.96px, #FFFFFF, shadow 0 4 4 #000 25% */
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

        /* Figma: Albert Sans 600, 30px, 35px lh, #FFFFFF 90% */
        .hei-hero-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1.167;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* Right column — image 731×474 */
        .hei-hero-right {
          flex-shrink: 0;
          width: clamp(18rem, 38.07vw, 45.6875rem);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .hei-hero-right img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 56rem) {
          .hei-hero { flex-direction: column; }
          .hei-hero-right { width: 100%; max-width: 28rem; }
        }
      `}</style>

      {/* Hero banner */}
      <section className="hei-hero">
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
      </section>
    </>
  );
}
