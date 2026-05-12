"use client";

import { useState, useEffect, useCallback } from "react";
import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/africa-hackathon`;

const semiImages = [
  { src: `${bp}/semi_results/southern.jpg`, label: "Southern Africa" },
  { src: `${bp}/semi_results/western.jpg`, label: "Western Africa" },
  { src: `${bp}/semi_results/northern_and_central.jpg`, label: "Northern & Central Africa" },
  { src: `${bp}/semi_results/eastern.jpg`, label: "Eastern Africa" },
];

export default function AfricaResults() {
  const [semiModalOpen, setSemiModalOpen] = useState(false);
  const [finalModalOpen, setFinalModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = useCallback(
    () => setCurrentSlide((s) => (s - 1 + semiImages.length) % semiImages.length),
    []
  );
  const next = useCallback(
    () => setCurrentSlide((s) => (s + 1) % semiImages.length),
    []
  );

  useEffect(() => {
    if (semiModalOpen) setCurrentSlide(0);
  }, [semiModalOpen]);

  useEffect(() => {
    if (!semiModalOpen) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [semiModalOpen, next]);

  useEffect(() => {
    if (!semiModalOpen) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setSemiModalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [semiModalOpen, prev, next]);

  return (
    <>
      <style>{`
        .results-section {
          width: 100%;
          background-color: #f7f9fb;
          padding: 3rem 0;
        }

        .results-inner {
          width: 100%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .results-heading {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .results-title {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.75rem;
          line-height: 1.2;
          margin: 0;
        }

        .results-subtitle {
          font-family: "Roboto-Regular", Helvetica, sans-serif;
          font-weight: 400;
          color: #000000;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        .results-card {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
          background-color: #ffffff;
          border-radius: 0.75rem;
          border: 1px solid #e8e8e8;
          box-sizing: border-box;
          margin-bottom: 1.5rem;
        }

        .results-card-subheading {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.25rem;
          line-height: 1.3;
          margin: 0;
        }

        .results-btn-wrap { display: flex; }

        .results-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background-color: #2d488d;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .results-btn:hover { background-color: #1e3266; }

        .results-btn-text {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #ffffff;
          font-size: 1rem;
          white-space: nowrap;
        }

        .results-btn-arrow {
          width: 1.125rem;
          height: 1.125rem;
          stroke: #ffffff;
          stroke-width: 2.4;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        .results-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1.25rem;
          box-sizing: border-box;
        }

        .results-modal {
          position: relative;
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          width: 100%;
          max-width: min(36rem, calc(100vw - 2.5rem));
          max-height: calc(100vh - 2.5rem);
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .results-modal-body {
          padding: 2.5rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        .results-modal-icon { width: 3rem; height: 3rem; color: #2d488d; }

        .results-modal-text {
          font-family: "Roboto-SemiBold", Helvetica, sans-serif;
          font-weight: 600;
          color: #000000;
          font-size: 1.125rem;
          line-height: 1.5;
          margin: 0;
        }

        .results-modal-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .results-modal-close:hover { background: rgba(0, 0, 0, 0.75); }
        .results-modal-close svg {
          width: 1rem;
          height: 1rem;
          stroke: #ffffff;
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
        }

        .carousel-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          box-sizing: border-box;
        }

        .carousel-modal {
          position: relative;
          width: 100%;
          max-width: min(960px, calc(100vw - 2rem));
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55);
          background: #0d1b3e;
        }

        .carousel-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
        }

        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        .carousel-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          transition: background 0.2s;
        }
        .carousel-close:hover { background: rgba(0, 0, 0, 0.82); }
        .carousel-close svg {
          width: 1rem;
          height: 1rem;
          stroke: #fff;
          stroke-width: 2.5;
          fill: none;
          stroke-linecap: round;
        }

        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 2.75rem;
          height: 2.75rem;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.45);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          transition: background 0.2s, transform 0.15s;
        }
        .carousel-arrow:hover { background: rgba(0, 0, 0, 0.78); transform: translateY(-50%) scale(1.08); }
        .carousel-arrow-left  { left: 0.75rem; }
        .carousel-arrow-right { right: 0.75rem; }
        .carousel-arrow svg {
          width: 1.25rem;
          height: 1.25rem;
          stroke: #fff;
          stroke-width: 2.2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 0;
          background: #0d1b3e;
        }

        .carousel-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          padding: 0;
          background: rgba(255, 255, 255, 0.32);
          transition: background 0.25s, transform 0.25s;
        }
        .carousel-dot.active { background: #f79421; transform: scale(1.35); }

        @media (max-width: 48rem) {
          .results-title { font-size: 1.375rem; }
        }
        @media (max-width: 37.5rem) {
          .results-section { padding: 2rem 0; }
          .results-title { font-size: 1.25rem; }
          .results-card { padding: 1.25rem; }
          .results-overlay { padding: 0.75rem; }
          .results-modal {
            max-width: calc(100vw - 1.5rem);
            max-height: calc(100vh - 1.5rem);
            border-radius: 0.75rem;
          }
          .carousel-arrow { width: 2.25rem; height: 2.25rem; }
          .carousel-arrow svg { width: 1rem; height: 1rem; }
        }
      `}</style>

      <div className="results-section">
        <div className="results-inner">
          <div className="results-heading">
            <p className="results-title">Results</p>
          </div>

          <div className="results-card">
            <p className="results-card-subheading">Semi-Finals</p>
            <p className="results-subtitle">
              Six teams from each of the four regions — Northern and Central,
              Eastern, Western, and Southern Africa — were shortlisted for the
              prototyping phase. Based on innovation, novelty, and potential
              impact, two teams from each region were selected for the finals.
            </p>
            <div className="results-btn-wrap">
              <button className="results-btn" onClick={() => setSemiModalOpen(true)}>
                <span className="results-btn-text">See Result</span>
                <svg className="results-btn-arrow" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="results-card">
            <p className="results-card-subheading">Finals</p>
            <p className="results-subtitle">
              Eight semi-final winners will present their final ideas to an
              esteemed panel at ID4Africa AGM in Cote D&apos;Ivoire.
            </p>
            <div className="results-btn-wrap">
              <button className="results-btn" onClick={() => setFinalModalOpen(true)}>
                <span className="results-btn-text">See Result</span>
                <svg className="results-btn-arrow" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {semiModalOpen && (
        <div
          className="carousel-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setSemiModalOpen(false); }}
        >
          <div className="carousel-modal">
            <div className="carousel-img-wrap">
              <img
                src={semiImages[currentSlide].src}
                alt={semiImages[currentSlide].label}
                className="carousel-img"
              />
              <button className="carousel-close" onClick={() => setSemiModalOpen(false)} aria-label="Close">
                <svg viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous slide">
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next slide">
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
            <div className="carousel-dots">
              {semiImages.map((img, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === currentSlide ? " active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to ${img.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {finalModalOpen && (
        <div
          className="results-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) setFinalModalOpen(false); }}
        >
          <div className="results-modal">
            <button className="results-modal-close" onClick={() => setFinalModalOpen(false)} aria-label="Close">
              <svg viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="results-modal-body">
              <svg
                className="results-modal-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="results-modal-text">Final results to be announced soon.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
