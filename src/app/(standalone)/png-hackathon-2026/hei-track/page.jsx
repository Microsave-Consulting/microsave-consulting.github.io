import PngHackathon2026Navbar from "@/components/PngHackathon2026/NavbarWrapper";
import PngHackathon2026Footer from "@/components/PngHackathon2026/Footer";
import HeiHero from "@/components/PngHackathon2026/hei/Hero";
import HeiWhoCanParticipate from "@/components/PngHackathon2026/hei/WhoCanParticipate";
import HeiInnovationJourney from "@/components/PngHackathon2026/hei/InnovationJourney";
import HeiPrizes from "@/components/PngHackathon2026/hei/Prizes";

export const metadata = {
  title: "Higher Education Institution Track | PNG National Digital ID Hackathon 2026",
  description:
    "The HEI track of PNG National Digital ID Hackathon 2026 follows a comprehensive, three-phase program designed to maximize innovation, learning, and impact.",
};

export default function HEITrackPage() {
  return (
    <div>
     
        <HeiHero />
        <HeiWhoCanParticipate />
        <HeiInnovationJourney />
        <HeiPrizes />
      
    </div>
  );
}
