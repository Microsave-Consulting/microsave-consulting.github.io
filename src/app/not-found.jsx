"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { normalizeInternalHackathonPath } from "@/lib/hackathonRoutes";

export default function NotFound() {
  const pathname = usePathname() || "/";

  useEffect(() => {
    const normalizedPath = normalizeInternalHackathonPath(pathname);
    if (normalizedPath === pathname) return;

    const query = typeof window !== "undefined" ? window.location.search : "";
    const target = `${normalizedPath}${query ? `?${query}` : ""}`;
    window.location.replace(target);
  }, [pathname]);

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
