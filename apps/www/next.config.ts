import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ['@merely-ui/react']
	},
	transpilePackages: ['lucide-react']
}

export default nextConfig
