import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile above this repo is ignored.
  turbopack: { root: path.resolve(__dirname) },
  // The lead forms send this from the browser; Web3Forms keys are public by design.
  env: { WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY },
};

export default nextConfig;
