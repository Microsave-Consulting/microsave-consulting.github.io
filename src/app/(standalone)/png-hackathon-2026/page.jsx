import PngHackathon2026Navbar from "@/components/PngHackathon2026/Navbar";
import PngHackathon2026Hero from "@/components/PngHackathon2026/Hero";
import PngHackathon2026About from "@/components/PngHackathon2026/About";
import PngHackathon2026Tracks from "@/components/PngHackathon2026/Tracks";
import PngHackathon2026Roadmap from "@/components/PngHackathon2026/Roadmap";
import PngHackathon2026Prizes from "@/components/PngHackathon2026/Prizes";
import PngHackathon2026GetInvolved from "@/components/PngHackathon2026/GetInvolved";
import PngHackathon2026Footer from "@/components/PngHackathon2026/Footer";

export const metadata = {
  title: "PNG National Digital ID Hackathon 2026",
  description:
    "The next generation of PNG innovators starts here. Build Digital ID solutions that matter for real people, real communities, real impact.",
};

export default function PngHackathon2026Page() {
  return (
    <div>
      <PngHackathon2026Navbar />
      <div style={{ paddingTop: "3.9375rem" }}>
        <PngHackathon2026Hero />
        <PngHackathon2026About />
        <PngHackathon2026Tracks />
        <PngHackathon2026Roadmap />
        <PngHackathon2026Prizes />
        <PngHackathon2026GetInvolved />
        <PngHackathon2026Footer />
      </div>
    </div>
  );
}
