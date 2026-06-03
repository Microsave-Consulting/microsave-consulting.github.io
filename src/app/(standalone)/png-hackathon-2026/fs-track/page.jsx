import PngHackathon2026Navbar from "@/components/PngHackathon2026/Navbar";
import PngHackathon2026Footer from "@/components/PngHackathon2026/Footer";
import FsHero from "@/components/PngHackathon2026/fs/Hero";
import FsWhoCanParticipate from "@/components/PngHackathon2026/fs/WhoCanParticipate";
import FsInnovationJourney from "@/components/PngHackathon2026/fs/InnovationJourney";
// import FsTimeline from "@/components/PngHackathon2026/fs/Timeline";
import FsPrizes from "@/components/PngHackathon2026/fs/Prizes";

export const metadata = {
  title: "Financial Services Track | PNG National Digital ID Hackathon 2026",
  description:
    "Learn about the Financial Services track of the PNG National Digital ID Hackathon 2026.",
};

export default function FSTrackPage() {
  return (
    <div>
      
      
        <FsHero />
        <FsWhoCanParticipate />
        <FsInnovationJourney />
        {/* <FsTimeline /> */}
        <FsPrizes />
        
      
    </div>
  );
}
