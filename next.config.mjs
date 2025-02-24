import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, child_process: false }

    return config
  },
}

export default withPayload(nextConfig)
