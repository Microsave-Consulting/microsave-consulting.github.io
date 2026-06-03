import "../globals.css";
import { SITE_URL } from "@/lib/siteConfig";

export const metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function StandaloneLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800&family=Montserrat:wght@800&family=Inter:wght@400&family=Hanken+Grotesk:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: "100vh", background: "#fff", margin: 0, padding: 0, overflow: "auto" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
