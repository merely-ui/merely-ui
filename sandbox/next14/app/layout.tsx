import { MerelyProvider } from '@merely-ui/react'
import type { Metadata } from 'next'

// const cache = createCache({ key: 'css', prepend: true })
// const { extractCriticalToChunks } = createEmotionServer(cache)

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	// const critical = extractCriticalToChunks(`
	//   <html lang="en">
	//     <head></head>
	//     <body>${children}</body>
	//   </html>
	// `)

	return (
		<html lang='en' suppressHydrationWarning>
			{/* <head>
				{critical.styles.map(style => (
					<style
						key={style.key}
						data-emotion-css={style.key}
						dangerouslySetInnerHTML={{ __html: style.css }}
					/>
				))}
			</head> */}
			<body>
				{/** @ts-ignore */}
				<MerelyProvider>{children}</MerelyProvider>
			</body>
		</html>
	)
}
