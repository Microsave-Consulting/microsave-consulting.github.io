"use client";

import { useEffect } from "react";
import Link from "next/link";
import { normalizeInternalHackathonPath } from "@/lib/hackathonRoutes";

export default function NotFound() {
  useEffect(() => {
    const pathname = window.location.pathname || "/";
    const normalizedPath = normalizeInternalHackathonPath(pathname);
    if (normalizedPath === pathname) return;

    const query = window.location.search || "";
    const target = `${normalizedPath}${query ? `?${query}` : ""}`;
    window.location.replace(target);
  }, []);

  return (
    <main
      style={{
        minHeight: "50vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Page not found</h1>
        <p style={{ marginBottom: "1rem" }}>The page you requested is unavailable.</p>
        <Link href="/" style={{ color: "#1B66D1", textDecoration: "underline" }}>
          Go to home
        </Link>
      </div>
    </main>
  );
}
