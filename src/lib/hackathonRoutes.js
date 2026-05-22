const LEGACY_HACKATHON_ALIASES = {
  "/png_ideathon": "/png-ideathon",
  "/africa_hackathon": "/africa-hackathon",
};

export function normalizeInternalHackathonPath(url) {
  if (typeof url !== "string" || !url.startsWith("/")) return url;

  const match = url.match(/^([^?#]*)(.*)$/);
  if (!match) return url;

  const pathPart = match[1] || "/";
  const suffix = match[2] || "";
  const hasTrailingSlash = pathPart.length > 1 && pathPart.endsWith("/");
  const normalizedPath = hasTrailingSlash ? pathPart.slice(0, -1) : pathPart;
  const aliasedPath = LEGACY_HACKATHON_ALIASES[normalizedPath] || normalizedPath;
  const rebuiltPath = hasTrailingSlash ? `${aliasedPath}/` : aliasedPath;

  return `${rebuiltPath}${suffix}`;
}
