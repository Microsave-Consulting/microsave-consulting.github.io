"use client";
import { useState, useEffect } from "react";
import PngHackathon2026Navbar from "@/components/PngHackathon2026/Navbar";

export default function NavbarWrapper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <PngHackathon2026Navbar />;
}
