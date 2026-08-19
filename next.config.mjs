import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
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
