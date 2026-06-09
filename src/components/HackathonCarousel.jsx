"use client";
// src/components/HackathonCarousel.jsx

import { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_PATH } from "@/lib/siteConfig";
import { normalizeInternalHackathonPath } from "@/lib/hackathonRoutes";

const FONT =
  '"Albert Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

function getPartnerLogoSrc(partnerName) {
  if (!partnerName) return null;
  const filename = partnerName.replace(/\s+/g, "_").toLowerCase();
  return `${BASE_PATH}/home/partner/${filename}.svg`;
}

const STATUS_CONFIG = {
  Live: { label: "LIVE", isLive: true },
  Completed: { label: "COMPLETED", isLive: false },
};

export default function HackathonCarousel({ items }) {
  const data = items || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = data.length;
  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  useEffect(() => {
    if (total < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4200);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <>
      <style>{`
        /* ── Section ── */
        .hc-section {
          position: relative;
          width: 100vw;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          background: #eef1fb;
          padding: 20px 0 24px;
          box-sizing: border-box;
          font-family: ${FONT};
        }

        /* ── Inner wrapper ── */
        .hc-inner {
          width: 100%;
          margin: 0;
          padding: 0 clamp(24px, 6.30vw, 121px);
          box-sizing: border-box;
        }

        /* ── Heading ── */
        .hc-header {
          margin-bottom: 16px;
          width: 100%;
        }
        .hc-heading {
          font-family: ${FONT};
          font-weight: 700;
          font-size: clamp(18px, 1.875vw, 36px);
          line-height: 1;
          letter-spacing: -0.015em;
          color: #1b66d1;
       margin: 0 0 32px 0;
          padding: 0;
          text-align: center;
          display: block;
        }

        /* ── Carousel ── */
        .hc-carousel {
          position: relative;
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .hc-carousel-viewport {
          overflow: visible;
          width: 100%;
          height: 350px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hc-track {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hc-grid-item {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 320ms ease, opacity 320ms ease, filter 320ms ease;
          z-index: 1;
          box-sizing: border-box;
        }

        .hc-grid-item.active {
          z-index: 3;
          opacity: 1;
          transform: translateY(0) scale(1.12);
          filter: none;
        }

        .hc-grid-item.prev,
        .hc-grid-item.next {
          z-index: 2;
          opacity: 0.55;
          transform: translateY(24px) scale(0.8);
          filter: blur(3px) saturate(0.9);
          pointer-events: none;
        }

        .hc-grid-item.prev { transform: translate(-45%, 24px) scale(0.8); }
        .hc-grid-item.next { transform: translate(45%, 24px) scale(0.8); }

        .hc-grid-item.hidden {
          opacity: 0;
          pointer-events: none;
          transform: translateY(35px) scale(0.88);
        }

        .hc-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 16px;
        }

        .hc-dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: rgba(31, 58, 109, 0.25);
          border: 1px solid rgba(31, 58, 109, 0.15);
          cursor: pointer;
        }

        .hc-dot.active {
          background: #1f3a6d;
        }

        .hc-nav {
          width: 3rem;
          height: 3rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          border: 1px solid rgba(31, 58, 109, 0.16);
          background: #ffffff;
          color: #1f3a6d;
          cursor: pointer;
          font-size: 1.65rem;
          line-height: 1;
          transition: transform 160ms ease, background 160ms ease;
          box-shadow: 0 12px 24px rgba(31, 58, 109, 0.08);
        }

        .hc-nav:hover {
          transform: translateY(-1px);
          background: #f8fafc;
        }

        .hc-nav:disabled {
          opacity: 0.35;
          cursor: not-allowed;
          transform: none;
        }


        /* ── Card ── */
        .hc-card {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 20px;
          padding: 28px 24px 24px;
          min-height: auto;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
        }

        /* Per-child spacing */
        .hc-card .hc-badge   { margin-bottom: 12px; }
        .hc-card .hc-title   { margin-bottom: 8px; }
        .hc-card .hc-desc    { margin-bottom: 16px; flex: 1; }
        .hc-card .hc-meta    { margin-bottom: 12px; }
        .hc-card .hc-partner { margin-bottom: 16px; }

        /* COMPLETED */
        .hc-card.hc-completed {
          background: #ffffff;
          border: 1.5px solid #c7c7f0;
          border-radius: 20px;
        }

        /* LIVE */
        .hc-card.hc-live {
          background-image: url('${BASE_PATH}/home/hackathon_background.svg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid transparent;
          background-clip: padding-box;
          border-radius: 20px;
        }
        .hc-live-wrap {
          border-radius: 20px;
          padding: 2px;
          background: linear-gradient(135deg, #6FA8FF 0%, #C77CFF 100%);
          box-sizing: border-box;
          width: 100%;
        }
        .hc-live-wrap .hc-card.hc-live {
          border: none;
          background-clip: border-box;
          border-radius: 18px;
        }

        .hc-completed-wrap {
          border-radius: 20px;
          box-sizing: border-box;
          width: 100%;
        }

        /* ── Badge ── */
        .hc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 20px;
          padding: 5px 16px;
          font-size: clamp(10px, 0.625vw, 12px);
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          width: fit-content;
        }
        .hc-badge-live { background: #8A6CFF; color: #fff; }
        .hc-badge-live::before {
          content: "";
          display: inline-block;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #fff;
          animation: hc-blink 1.2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes hc-blink {
          0%, 100% { opacity: 1;   }
          50%       { opacity: 0.2; }
        }
        .hc-badge-completed {
          background: transparent;
          color: #475569;
          border: 0.5px solid #1F3A6D;
          font-weight: 500;
        }

        /* ── Title ── */
        .hc-title {
          font-family: ${FONT};
          font-weight: 700;
          font-size: clamp(16px, 1.77vw, 34px);
          color: #1B66D1;
          line-height: 1.2;
          margin: 0;
        }

        /* ── Desc ── */
        .hc-desc {
          font-size: clamp(12px, 0.9375vw, 18px);
          color: #2F3A45;
          line-height: 1.65;
          margin: 0;
          font-weight: 500;
        }

        /* ── Meta ── */
        .hc-meta { display: flex; gap: clamp(16px, 2.08vw, 40px); }
        .hc-meta-item { display: flex; flex-direction: column; gap: 3px; }
        .hc-meta-label {
          font-size: clamp(11px, 0.9375vw, 18px);
          font-weight: 600;
          color: #1F3A6D;
          letter-spacing: 0.04em;
        }
        .hc-meta-value {
          font-size: clamp(11px, 0.9375vw, 18px);
          font-weight: 600;
          color: #2F3A45;
        }

        /* ── Divider ── */
        .hc-divider { border: none; border-top: 1px solid #e2e8f0; }

        /* ── Partner ── */
        .hc-partner { display: flex; align-items: center; gap: 12px; }
        .hc-partner-label {
          font-size: clamp(11px, 0.9375vw, 18px);
          font-weight: 600;
          color: #1F3A6D;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .hc-partner-logo {
          height: clamp(28px, 2.92vw, 56px);
          max-width: clamp(100px, 11vw, 210px);
          object-fit: contain;
        }
        .hc-partner-name { font-size: clamp(11px, 0.68vw, 13px); color: #2F3A45; font-weight: 500; }

        /* ── Button ── */
        .hc-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: clamp(8px, 0.57vw, 11px) clamp(16px, 1.35vw, 26px);
          border-radius: 999px;
          background: #1F3A6D;
          color: #fff;
          font-size: clamp(12px, 0.73vw, 14px);
          font-weight: 600;
          font-family: ${FONT};
          text-decoration: none;
          border: none;
          cursor: pointer;
          width: fit-content;
          margin-top: auto;
          position: relative;
          z-index: 10;
          transition: background 240ms ease-out, transform 240ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hc-btn:hover { background: #1B66D1; transform: translateY(-2px); }
        .hc-btn:active { transform: translateY(0); transition-duration: 80ms; }
        .hc-btn:disabled { opacity: 0.5; cursor: default; transform: none; }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .hc-btn { transition-duration: 0ms !important; }
        }

        /* ── Mobile (≤ 600px) ── */
        @media (max-width: 600px) {
          .hc-section {
            padding: clamp(16px, 4vw, 24px) 0 clamp(16px, 4vw, 22px);
            overflow-x: hidden;
          }
          .hc-inner {
            padding: 0 clamp(16px, 5vw, 24px);
          }
          .hc-carousel { gap: 0.5rem; }
          .hc-nav { width: 2.25rem; height: 2.25rem; font-size: 1.2rem; }
          .hc-carousel-viewport { overflow: hidden; }
          .hc-grid-item.active { transform: scale(1); }
          .hc-grid-item.prev,
          .hc-grid-item.next { opacity: 0; transform: scale(0.95); }
          .hc-grid-item { flex: 1 1 100%; }
          .hc-heading { font-size: clamp(15px, 5vw, 18px); }
          .hc-header  { margin-bottom: clamp(10px, 2.5vw, 14px); }
          .hc-card {
            padding: 0.875rem 0.875rem 0.75rem;
            min-height: 0;
          }
          .hc-card .hc-badge   { margin-bottom: 0.375rem; }
          .hc-card .hc-title   { margin-bottom: 0.25rem; }
          .hc-card .hc-desc    { margin-bottom: 0.5rem; }
          .hc-card .hc-meta    { margin-bottom: 0.375rem; }
          .hc-card .hc-partner { margin-bottom: 0.375rem; }
          .hc-title       { font-size: clamp(14px, 4vw, 17px); }
          .hc-desc        { font-size: 12px; line-height: 1.55; }
          .hc-meta        { gap: 14px; }
          .hc-meta-label,
          .hc-meta-value,
          .hc-partner-label { font-size: 12px; }
          .hc-badge       { font-size: 10px; padding: 3px 9px; }
          .hc-partner-logo  { height: 24px; max-width: 100px; }
          .hc-btn           { font-size: 12px; padding: 7px 14px; }
        }
      `}</style>

      <section id="hackathon-carousel" className="hc-section">
        <div className="hc-inner">
          <div className="hc-header">
            <h2 className="hc-heading">
              Explore current and past digital ID hackathons
            </h2>
          </div>

          <div className="hc-carousel">
            <button
              className="hc-nav"
              onClick={goPrev}
              disabled={total < 2}
              aria-label="Previous hackathon"
            >
              ‹
            </button>

            <div className="hc-carousel-viewport">
              <div className="hc-track">
                {data.map((item, i) => {
                  const itemState =
                    i === activeIndex ? "active" : i === prevIndex ? "prev" : i === nextIndex ? "next" : "hidden";
                  return (
                    <div key={item.ID ?? i} className={`hc-grid-item ${itemState}`}>
                      <CardInner item={item} />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="hc-nav"
              onClick={goNext}
              disabled={total < 2}
              aria-label="Next hackathon"
            >
              ›
            </button>
          </div>

          <div className="hc-carousel-dots">
            {data.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`hc-dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`View hackathon ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── CardInner ─────────────────────────────────────────────── */
function CardInner({ item }) {
  const [logoError, setLogoError] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!item) return null;

  const status = item.Status || "Completed";
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG["Completed"];
  const isLive = cfg.isLive;
  const logoSrc = getPartnerLogoSrc(item.Partner);
  const normalizedUrl = normalizeInternalHackathonPath(item.URL);

  const cardContent = (
    <div className={`hc-card ${isLive ? "hc-live" : "hc-completed"}`}>
      <span className={`hc-badge ${isLive ? "hc-badge-live" : "hc-badge-completed"}`}>
        {cfg.label}
      </span>

      <h3 className="hc-title">{item.Title}</h3>
      <p className="hc-desc">{item.Description}</p>

      <div className="hc-meta">
        {item.Region && (
          <div className="hc-meta-item">
            <span className="hc-meta-label">Region</span>
            <span className="hc-meta-value">{item.Region}</span>
          </div>
        )}
        {item.Timeline && (
          <div className="hc-meta-item">
            <span className="hc-meta-label">Timeline</span>
            <span className="hc-meta-value">{item.Timeline}</span>
          </div>
        )}
      </div>

      {item.Partner && (
        <div className="hc-partner">
          <span className="hc-partner-label">Partner</span>
          {!logoError ? (
            <img
              src={logoSrc}
              alt={item.Partner}
              className="hc-partner-logo"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="hc-partner-name">{item.Partner}</span>
          )}
        </div>
      )}

      {normalizedUrl ? (
        normalizedUrl.startsWith("/") ? (
          <Link
            href={normalizedUrl}
            className="hc-btn"
            {...(mounted && normalizedUrl === "/png-hackathon-2026" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            Learn more →
          </Link>
        ) : (
          <a href={normalizedUrl} className="hc-btn" target="_blank" rel="noopener noreferrer">
            Learn more →
          </a>
        )
      ) : (
        <button className="hc-btn" disabled>
          Learn more →
        </button>
      )}
    </div>
  );

  if (isLive) {
    return <div className="hc-live-wrap">{cardContent}</div>;
  }

  return <div className="hc-completed-wrap">{cardContent}</div>;
}