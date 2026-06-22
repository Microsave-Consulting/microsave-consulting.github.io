"use client";

import { useState, useInsertionEffect } from "react";

const NAV_LINKS = [
  { label: "Overview",     href: "#overview" },
  { label: "Rewards",       href: "#prizes" },
  { label: "Get Involved", href: "#get-involved" },
];

const TRACK_LINKS = [
  { label: "HEI Track",     href: "/png-hackathon-2026/hei-track" },
  { label: "Financial Services Track", href: "/png-hackathon-2026/fs-track"  },
];

const CSS = `
  .phk-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    height: 3.9375rem;
    background: rgba(250, 248, 255, 0.92);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    box-sizing: border-box;
  }
  .phk-nav-inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    box-sizing: border-box;
  }

  .phk-nav-explore {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: "Albert Sans", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: none;
    color: #d85447;
    white-space: nowrap;
    transition: color 0.2s;
  }
  .phk-nav-explore:hover { color: #de794f; }
  .phk-nav-explore svg { flex-shrink: 0; transition: transform 0.2s; }
  .phk-nav-explore:hover svg { transform: translateX(3px); }
  .phk-nav-right {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .phk-nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .phk-nav-link {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #000000;
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s;
  }
  .phk-nav-link:hover { color: #de794f; }

  .phk-nav-dropdown { position: relative; }
  .phk-nav-dropdown-trigger {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #000000;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    white-space: nowrap;
    transition: color 0.2s;
  }
  .phk-nav-dropdown-trigger:hover { color: #de794f; }
  .phk-nav-dropdown-trigger svg { transition: transform 0.2s; }
  .phk-nav-dropdown:hover .phk-nav-dropdown-trigger svg { transform: rotate(180deg); }
  .phk-nav-dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0.75rem;
    min-width: 11rem;
    z-index: 200;
    flex-direction: column;
  }
  .phk-nav-dropdown-menu-inner {
    background: #ffffff;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 0.75rem;
    box-shadow: 0 8px 24px rgba(0,0,0,0.10);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .phk-nav-dropdown:hover .phk-nav-dropdown-menu { display: flex; }
  .phk-nav-dropdown-item {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    color: #000000;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s;
  }
  .phk-nav-dropdown-item:hover { background: #FDF8F4; color: #de794f; }

  .phk-nav-cta {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #ffffff;
    background: linear-gradient(to right, #e7a159, #de794f, #d85447);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 9999px;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 0 1.25rem 0 rgba(222, 121, 79, 0.4);
    transition: opacity 0.2s, box-shadow 0.2s;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }
  .phk-nav-cta:hover { opacity: 0.9; box-shadow: 0 0 1.75rem 0 rgba(222, 121, 79, 0.6); }

  .phk-nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    flex-shrink: 0;
  }
  .phk-nav-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #000;
    border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
  }
  .phk-nav-hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .phk-nav-hamburger.active span:nth-child(2) { opacity: 0; }
  .phk-nav-hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .phk-nav-mobile-menu {
    position: fixed;
    top: 3.9375rem;
    left: 0; right: 0;
    background: rgba(250, 248, 255, 0.98);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem;
    gap: 1.25rem;
    z-index: 99;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .phk-nav-mobile-menu.open { transform: translateY(0); opacity: 1; pointer-events: auto; }
  .phk-nav-mobile-link {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #000;
    text-decoration: none;
  }
  .phk-nav-mobile-link:hover { color: #de794f; }

  .phk-nav-mobile-tracks-btn {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #000;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    text-align: left;
  }
  .phk-nav-mobile-tracks-btn svg { transition: transform 0.2s; }
  .phk-nav-mobile-tracks-btn.active svg { transform: rotate(180deg); }
  .phk-nav-mobile-subtracks {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding-left: 1rem;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
  }
  .phk-nav-mobile-subtracks.open { max-height: 6rem; }
  .phk-nav-mobile-sublink {
    font-family: "Albert Sans", sans-serif;
    font-weight: 600;
    font-size: 0.9375rem;
    color: #444;
    text-decoration: none;
  }
  .phk-nav-mobile-sublink:hover { color: #de794f; }

  @media (max-width: 56rem) {
    .phk-nav-links { display: none; }
    .phk-nav-cta { display: none; }
    .phk-nav-hamburger { display: flex; }
  }
`;

export default function PngHackathon2026Navbar() {
  const [open, setOpen]             = useState(false);
  const [tracksOpen, setTracksOpen] = useState(false);

  useInsertionEffect(() => {
    const el = document.createElement("style");
    el.setAttribute("data-phk-nav", "");
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <>
      <nav className="phk-nav">
        <div className="phk-nav-inner">
          <a
            className="phk-nav-explore"
            href="https://www.digitalidinnovations.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Digital ID Innovation Platform
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <div className="phk-nav-right">
            <div className="phk-nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.label} className="phk-nav-link" href={link.href}>
                  {link.label}
                </a>
              ))}
              <div className="phk-nav-dropdown">
                <button className="phk-nav-dropdown-trigger">
                  Tracks
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="phk-nav-dropdown-menu">
                  <div className="phk-nav-dropdown-menu-inner">
                    {TRACK_LINKS.map((t) => (
                      <a key={t.label} className="phk-nav-dropdown-item" href={t.href}>
                        {t.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a className="phk-nav-cta" href="https://hackathon.dts.gov.pg/register" target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
              REGISTER NOW
            </a>
          </div>
          <button
            className={`phk-nav-hamburger${open ? " active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`phk-nav-mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} className="phk-nav-mobile-link" href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          className={`phk-nav-mobile-tracks-btn${tracksOpen ? " active" : ""}`}
          onClick={() => setTracksOpen(!tracksOpen)}
        >
          Tracks
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={`phk-nav-mobile-subtracks${tracksOpen ? " open" : ""}`}>
          {TRACK_LINKS.map((t) => (
            <a key={t.label} className="phk-nav-mobile-sublink" href={t.href} onClick={() => { setOpen(false); setTracksOpen(false); }}>
              {t.label}
            </a>
          ))}
        </div>
        <a
          className="phk-nav-cta"
          href="https://hackathon.dts.gov.pg/register"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ alignSelf: "flex-start" }}
          suppressHydrationWarning
        >
          REGISTER NOW
        </a>
        <a
          className="phk-nav-explore"
          href="https://www.digitalidinnovations.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={{ alignSelf: "flex-start" }}
        >
          Explore Digital ID
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </>
  );
}
