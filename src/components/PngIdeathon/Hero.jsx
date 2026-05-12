import { BASE_PATH } from "@/lib/siteConfig";

export default function PngHero() {
  return (
    <img
      src={`${BASE_PATH}/png-ideathon/banner_png.svg`}
      alt="PNG National ID Ideathon"
      style={{ width: "100%", display: "block" }}
    />
  );
}
