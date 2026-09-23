import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Builds alternate between .next-a and .next-b (see scripts/deploy.sh) so the
// running server keeps its own complete build until the restart. Both the build
// and `npm run start:prod` pass the folder in NEXT_DIST_DIR.

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  turbopack: {
    root: path.resolve(dirname),
  },
  // The app formerly shipped as Tododo; keep the old case-study URL working for
  // anything already pointing at it (Google's OAuth consent screen, links out).
  async redirects() {
    return [
      { source: '/projects/tododo', destination: '/projects/poofy', permanent: true },
    ]
  },
}

export default nextConfig
