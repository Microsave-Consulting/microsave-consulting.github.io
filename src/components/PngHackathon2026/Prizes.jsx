"use client";

import { useState } from "react";
import { BASE_PATH } from "@/lib/siteConfig";

const bp = `${BASE_PATH}/png-2026/reward`;

const BORDER_COLORS = ["#E7A159", "#DE794F", "#D85447", "#E7A159", "#DE794F"];

const HEI_CARDS = [
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

const STARTUP_CARDS = [
  {
    icon: `${bp}/media.svg`,
    title: "Media Recognition",
    desc: "Media exposure and recognition by DICT, Government of PNG",
  },
  {
    icon: `${bp}/pilot.svg`,
    title: "Pilot Support",
    desc: "DPI CoE support for the pilot and launch of your SevisPass use case",
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

export default function PngHackathon2026Prizes() {
  const [activeTab, setActiveTab] = useState("hei");
  const cards = activeTab === "hei" ? HEI_CARDS : STARTUP_CARDS;

  return (
    <>
      <style>{`
        .phk-prizes {
          width: 100%;
          background: #FFF5EC;
          padding: clamp(2.5rem, 3.49vw, 4.1875rem) clamp(1rem, 1.25vw, 1.5rem) clamp(2rem, 3.281vw, 3.9375rem);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(1.25rem, 1.667vw, 2rem);
        }

        /* ── Header ── */
        .phk-prizes-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          text-align: center;
        }

        /* Figma: Albert Sans 800, 39px, shadow 0 4 4 #000 25% */
        .phk-prizes-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 2.031vw, 2.4375rem);
          line-height: 1.05;
          color: #000000;
          margin: 0;
          text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }

        /* Gradient line 144×4px */
        .phk-prizes-line {
          width: clamp(6rem, 7.5vw, 9rem);
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(to right, #E7A159, #DE794F, #D85447);
        }

        /* Figma: Albert Sans 400, 21px, 24px lh */
        .phk-prizes-subtitle {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          line-height: 1.143;
          color: #000000;
          margin: 0;
        }

        /* ── Tab switcher — 399×54, radius 9999, padding 4, bg #FFF 50%, blur 12 ── */
        .phk-prizes-tabs {
          display: flex;
          align-items: center;
          padding: 4px;
          border-radius: 9999px;
          border: 1px solid rgba(214, 195, 179, 0.3);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          gap: 0;
        }

        .phk-prizes-tab {
          padding: 0.625rem 1.75rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.8125rem, 0.9375vw, 1.125rem);
          line-height: 1.5;
          transition: background 0.25s, color 0.25s;
          background: transparent;
          color: #000000;
          white-space: nowrap;
        }

        .phk-prizes-tab.active {
          background: linear-gradient(to right, #E7A159, #DE794F, #D85447);
          color: #ffffff;
        }

        /* ── Cards row ── */
        .phk-prizes-cards {
          display: flex;
          gap: clamp(0.75rem, 1.25vw, 1.5rem);
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
        }

        /* Figma: 255×320, radius 20, border-top 8px, padding 40/40/68/40, gap 14.8, bg #FFF 40%, blur 12 */
        .phk-prize-card {
          background: rgba(255, 255, 255, 0.4);
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
          min-width: 11rem;
          max-width: 15.9375rem;
          box-sizing: border-box;
          text-align: center;
        }

        /* Icon 40×40 */
        .phk-prize-icon {
          width: 2.5rem !important;
          height: 2.5rem !important;
          object-fit: contain;
          display: block;
        }

        /* Figma: Albert Sans 700, 27px, 28px lh, center */
        .phk-prize-title {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.406vw, 1.6875rem);
          line-height: 1.037;
          color: #000000;
          margin: 0;
        }

        /* Figma: Albert Sans 400, 21px, 22.75px lh, center */
        .phk-prize-desc {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 1.094vw, 1.3125rem);
          line-height: 1.083;
          color: #000000;
          margin: 0;
        }

        @media (max-width: 56rem) {
          .phk-prizes-cards { gap: 1rem; }
          .phk-prize-card { min-width: 9rem; }
        }

        @media (max-width: 37.5rem) {
          .phk-prizes { padding: 2rem 1rem; }
          .phk-prize-card { max-width: 100%; min-width: 100%; }
        }
      `}</style>

      <section id="prizes" className="phk-prizes">
        {/* Header */}
        <div className="phk-prizes-header">
          <h2 className="phk-prizes-title">Reward for Innovation</h2>
          <div className="phk-prizes-line" />
          <p className="phk-prizes-subtitle">Beyond the glory, we empower the winners to scale.</p>
        </div>

        {/* Tab switcher */}
        <div className="phk-prizes-tabs">
          <button
            className={`phk-prizes-tab${activeTab === "hei" ? " active" : ""}`}
            onClick={() => setActiveTab("hei")}
          >
            HEI Track
          </button>
          <button
            className={`phk-prizes-tab${activeTab === "startup" ? " active" : ""}`}
            onClick={() => setActiveTab("startup")}
          >
            Startup Track
          </button>
        </div>

        {/* Cards */}
        <div className="phk-prizes-cards">
          {cards.map((card, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="phk-prize-card"
              style={{ borderTopColor: BORDER_COLORS[i] }}
            >
              <img className="phk-prize-icon" src={card.icon} alt={card.title} />
              <p className="phk-prize-title">{card.title}</p>
              <p className="phk-prize-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
