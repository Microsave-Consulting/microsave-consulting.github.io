"use client";

import { useState } from "react";
const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Tracks", href: "#tracks" },
  { label: "Prizes", href: "#prizes" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function PngHackathon2026Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .phk-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
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
          justify-content: flex-end;
          padding: 0 1rem;
          box-sizing: border-box;
        }

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
        .phk-nav-cta:hover {
          opacity: 0.9;
          box-shadow: 0 0 1.75rem 0 rgba(222, 121, 79, 0.6);
        }

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
          left: 0;
          right: 0;
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
        .phk-nav-mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .phk-nav-mobile-link {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #000;
          text-decoration: none;
        }
        .phk-nav-mobile-link:hover { color: #de794f; }

        @media (max-width: 56rem) {
          .phk-nav-links { display: none; }
          .phk-nav-cta { display: none; }
          .phk-nav-hamburger { display: flex; }
        }
      `}</style>

      <nav className="phk-nav">
        <div className="phk-nav-inner">
          <div className="phk-nav-right">
            <div className="phk-nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.label} className="phk-nav-link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a className="phk-nav-cta" href="#register">
              REGISTER NOW
            </a>
          </div>

          <button
            className={`phk-nav-hamburger${open ? " active" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`phk-nav-mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            className="phk-nav-mobile-link"
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="phk-nav-cta"
          href="#register"
          onClick={() => setOpen(false)}
          style={{ alignSelf: "flex-start" }}
        >
          REGISTER NOW
        </a>
      </div>
    </>
  );
}
