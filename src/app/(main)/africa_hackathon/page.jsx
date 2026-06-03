import AfricaHero from "@/components/AfricaHackathon/Hero";
import AfricaAbout from "@/components/AfricaHackathon/About";
import AfricaIdeathonJourney from "@/components/AfricaHackathon/IdeathonJourney";
import AfricaBenefits from "@/components/AfricaHackathon/Benefits";
import AfricaEligibility from "@/components/AfricaHackathon/Eligibility";
import AfricaResults from "@/components/AfricaHackathon/Results";
import AfricaRegistration from "@/components/AfricaHackathon/Registration";

export const metadata = {
  title: "Africa Digital ID Hackathon 2026",
  description:
    "Build innovative use cases of digital ID and get a chance to participate in ID4Africa 2026. A collaboration between CMU Africa's Upanzi DPI Network and MicroSave Consulting.",
};

export default function AfricaHackathonPage() {
  return (
    <div>
      <AfricaHero />
      <AfricaAbout />
      <AfricaIdeathonJourney />
      <AfricaBenefits />
      <AfricaEligibility />
      <AfricaResults />
      <AfricaRegistration />
    </div>
  );
}
