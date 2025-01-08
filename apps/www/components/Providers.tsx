'use client'

import { cache, MerelyProvider } from '@merely-ui/react'
import { useServerInsertedHTML } from 'next/navigation'

export default function Providers({ children }: { children: React.ReactNode }) {
	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' ')
			}}
		/>
	))

	return <MerelyProvider>{children}</MerelyProvider>
}