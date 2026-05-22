import PngHero from "@/components/PngIdeathon/Hero";
import PngAbout from "@/components/PngIdeathon/About";
import PngIdeathonJourney from "@/components/PngIdeathon/IdeathonJourney";
import PngBenefits from "@/components/PngIdeathon/Benefits";
import PngEligibility from "@/components/PngIdeathon/Eligibility";
import PngResults from "@/components/PngIdeathon/Results";
import PngGallery from "@/components/PngIdeathon/Gallery";
import PngRegistration from "@/components/PngIdeathon/Registration";

export const metadata = {
  title: "PNG National ID Ideathon 2025",
  description:
    "Identify and develop use cases of the newly launched national digital ID of PNG — SevisPass. Hosted by DICT in collaboration with MicroSave Consulting at the Digital Transformation Summit 2025.",
};

export default function PngIdeathonPage() {
  return (
    <div>
      <PngHero />
      <PngAbout />
      <PngIdeathonJourney />
      <PngBenefits />
      <PngEligibility />
      <PngResults />
      <PngGallery />
      <PngRegistration />
    </div>
  );
}
