import { BASE_PATH } from "@/lib/siteConfig";

export default function AfricaHero() {
  return (
    <img
      src={`${BASE_PATH}/africa-hackathon/banner_africa.svg`}
      alt="Africa Digital ID Hackathon"
      style={{ width: "100%", display: "block" }}
    />
  );
}
