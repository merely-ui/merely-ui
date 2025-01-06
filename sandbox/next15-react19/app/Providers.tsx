'use client'

import { cache, MerelyProvider } from '@merely-ui/react'
import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
	useServerInsertedHTML(() => (
		<style
			data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
			dangerouslySetInnerHTML={{
				__html: Object.values(cache.inserted).join(' ')
			}}
		/>
	))
	/** @ts-expect-error zalupa */
	return <MerelyProvider>{children}</MerelyProvider>
}
