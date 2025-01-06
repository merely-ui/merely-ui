import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		optimizePackageImports: ['@merely-ui/react']
	}
}

export default nextConfig
