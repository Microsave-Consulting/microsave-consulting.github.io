function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FBIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function PngHackathon2026Footer() {
  return (
    <>
      <style>{`
        /* Figma: #FDF0E6, border-top 1px #DE794F 10%, padding 98/24/58/24, gap 96px */
        .phk-footer {
          width: 100%;
          background: #FDF0E6;
          border-top: 1px solid rgba(222, 121, 79, 0.1);
          padding: clamp(3rem, 5.104vw, 6.125rem) 5% clamp(2rem, 3.021vw, 3.625rem);
          box-sizing: border-box;
        }

        .phk-footer-inner {
          display: flex;
          gap: clamp(3rem, 5vw, 6rem);
          flex-wrap: wrap;
        }

        /* ── Left: Contact ── */
        .phk-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
          min-width: 14rem;
        }

        /* Figma: Albert Sans 700, 30px, ls 0.7px */
        .phk-footer-heading {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1.25rem, 1.5625vw, 1.875rem);
          letter-spacing: 0.023em;
          color: #000000;
          margin: 0;
          line-height: 1;
        }

        /* Figma: Albert Sans 700, 24px */
        .phk-footer-org {
          font-family: "Albert Sans", sans-serif;
          font-weight: 700;
          font-size: clamp(1rem, 1.25vw, 1.5rem);
          color: #000000;
          margin: 0;
          line-height: 1;
        }

        .phk-footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        .phk-footer-contact-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #000000;
        }

        /* Figma: Albert Sans 400, 21px */
        .phk-footer-contact-row a {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.875rem, 1.094vw, 1.3125rem);
          color: #000000;
          text-decoration: none;
          line-height: 1;
        }
        .phk-footer-contact-row a:hover { text-decoration: underline; }

        /* ── Right: Stay connected ── */
        .phk-footer-social {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          flex: 1;
          min-width: 14rem;
        }

        .phk-footer-tagline {
          font-family: "Albert Sans", sans-serif;
          font-weight: 400;
          font-size: clamp(0.8125rem, 0.9375vw, 1.125rem);
          color: #000000;
          margin: 0;
          line-height: 1.4;
        }

        .phk-footer-socials-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .phk-footer-socials-label {
          font-family: "Albert Sans", sans-serif;
          font-weight: 600;
          font-size: clamp(0.8125rem, 0.9375vw, 1.125rem);
          color: #000000;
          min-width: 6rem;
        }

        .phk-footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2rem;
          height: 2rem;
          border-radius: 0.375rem;
          background: rgba(222, 121, 79, 0.12);
          color: #000000;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .phk-footer-social-link:hover {
          background: #DE794F;
          color: #ffffff;
        }

        @media (max-width: 37.5rem) {
          .phk-footer { padding: 2rem 1rem; }
          .phk-footer-inner { flex-direction: column; gap: 2rem; }
        }
      `}</style>

      <footer className="phk-footer">
        <div className="phk-footer-inner">

          {/* Left — Contact */}
          <div className="phk-footer-contact">
            <p className="phk-footer-heading">Contact and learn more</p>
            <p className="phk-footer-org">MSC (MicroSave Consulting)</p>
            <div className="phk-footer-contact-items">
              <div className="phk-footer-contact-row">
                <EmailIcon />
                <a href="mailto:digitalidinnovation@microsave.net">
                  digitalidinnovation@microsave.net
                </a>
              </div>
              <div className="phk-footer-contact-row">
                <GlobeIcon />
                <a href="https://www.microsave.net" target="_blank" rel="noopener noreferrer">
                  www.microsave.net
                </a>
              </div>
            </div>
          </div>

          {/* Right — Stay connected */}
          <div className="phk-footer-social">
            <p className="phk-footer-heading">Stay connected</p>
            <p className="phk-footer-tagline">Follow us for updates, announcements, and inspiration:</p>

            {/* MSC — X, Facebook, LinkedIn */}
            <div className="phk-footer-socials-row">
              <span className="phk-footer-socials-label">MSC Socials</span>
              <a className="phk-footer-social-link" href="https://x.com/MicroSave" target="_blank" rel="noopener noreferrer" aria-label="MSC on X">
                <XIcon />
              </a>
              <a className="phk-footer-social-link" href="https://www.facebook.com/MicroSaveConsulting" target="_blank" rel="noopener noreferrer" aria-label="MSC on Facebook">
                <FBIcon />
              </a>
              <a className="phk-footer-social-link" href="https://www.linkedin.com/company/microsave/" target="_blank" rel="noopener noreferrer" aria-label="MSC on LinkedIn">
                <LIIcon />
              </a>
            </div>

            {/* DICT — Facebook, LinkedIn only (no Twitter) */}
            <div className="phk-footer-socials-row">
              <span className="phk-footer-socials-label">DICT Socials</span>
              <a className="phk-footer-social-link" href="https://www.facebook.com/pngdepartmentofict" target="_blank" rel="noopener noreferrer" aria-label="DICT on Facebook">
                <FBIcon />
              </a>
              <a className="phk-footer-social-link" href="https://www.linkedin.com/company/p-n-g-department-of-communication-information-technology-and-energy/" target="_blank" rel="noopener noreferrer" aria-label="DICT on LinkedIn">
                <LIIcon />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
