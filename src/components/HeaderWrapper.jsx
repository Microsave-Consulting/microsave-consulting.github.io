"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function HeaderWrapper() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return <Header />;
}
