// /** @type {import('next').NextConfig} */

// const isGitHubPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "gh-pages";
// const repoName = ""; // root user/org Pages site — no subpath

// const nextConfig = {
//   images: {
//     unoptimized: isGitHubPages,
//   },
//   ...(isGitHubPages && {
//     output: "export",
//     basePath: repoName ? `/${repoName}` : "",
//     assetPrefix: repoName ? `/${repoName}/` : "",
//   }),
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true, // required for GitHub Pages static export
  },
  output: "export",   // required for GitHub Pages
  trailingSlash: true, // generates dir/index.html instead of dir.html for reliable GitHub Pages routing
};

export default nextConfig;