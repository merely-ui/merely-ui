import Providers from '@/components/Providers'
import Container from '@/components/ui/Container'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/header/Header'
import { Box } from '@merely-ui/react'
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	display: 'swap',
	preload: true,
	subsets: ['latin']
})

export const metadata: Metadata = {
	title:
		'Merely UI - Accessible & Lightweight Components Library for React apps',
	description:
		'Merely UI is a simple, accessible and lightweight library for your React apps',
	keywords: [
		'react',
		'ui',
		'uikit',
		'lightweight',
		'react-components',
		'components',
		'accessible'
	]
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={geistSans.className}>
				<Providers>
					<Header />
					<Box as='main' mt={68}>
						<Container>{children}</Container>
					</Box>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
