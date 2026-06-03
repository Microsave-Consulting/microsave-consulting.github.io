import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026`;

export default function FsHero() {
  return (
    <>
      <style>{`
        .fs-hero {
          width: 100%;
          background: linear-gradient(to right, #D85447, #DE794F, #E7A159);
          padding: clamp(2.5rem, 3.333vw, 4rem) 5% clamp(4rem, 6.667vw, 8rem);
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 2rem;
          overflow: hidden;
        }

        .fs-hero-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
        }

        .fs-hero-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 3.125vw, 3.75rem);
          line-height: 1;
          letter-spacing: -0.016em;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        .fs-hero-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(1rem, 1.5625vw, 1.875rem);
          line-height: 1.167;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .fs-hero-right {
          flex-shrink: 0;
          width: clamp(18rem, 38.07vw, 45.6875rem);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }

        .fs-hero-right img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 56rem) {
          .fs-hero { flex-direction: column; }
          .fs-hero-right { width: 100%; max-width: 28rem; }
        }
      `}</style>

      <section className="fs-hero">
        <div className="fs-hero-left">
          <h1 className="fs-hero-title">Financial Services (FS) Track</h1>
          <p className="fs-hero-subtitle">
            The Financial Services (FS) track of the PNG National Digital ID Hackathon 2026 aims to enhance financial inclusion in Papua New Guinea.
          </p>
        </div>

        <div className="fs-hero-right">
          <img
            src={`${bp}/hei/hei banner.svg`}
            alt="Financial Services Track illustration"
          />
        </div>
      </section>
    </>
  );
}
