"use client";
import { useState, useEffect } from "react";
import PngHackathon2026Roadmap from "@/components/PngHackathon2026/Roadmap";

export default function RoadmapWrapper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <PngHackathon2026Roadmap />;
}
