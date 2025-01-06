// 'use client'

// import createCache from '@emotion/cache'

// import { MerelyProvider } from '@merely-ui/react'
// import { useServerInsertedHTML } from 'next/navigation'
// import { ReactNode, useState } from 'react'

// // const emotionCache = createCache({ key: 'next' })

// export const Providers = ({ children }: { children: ReactNode }) => {
// 	const [{ cache, flush }] = useState(() => {
// 		const cache = createCache({ key: 'my' })
// 		cache.compat = true
// 		const prevInsert = cache.insert
// 		let inserted: string[] = []
// 		cache.insert = (...args) => {
// 			const serialized = args[1]
// 			if (cache.inserted[serialized.name] === undefined) {
// 				inserted.push(serialized.name)
// 			}
// 			return prevInsert(...args)
// 		}
// 		const flush = () => {
// 			const prevInserted = inserted
// 			inserted = []
// 			return prevInserted
// 		}
// 		return { cache, flush }
// 	})

// 	useServerInsertedHTML(() => {
// 		const names = flush()
// 		if (names.length === 0) return null
// 		let styles = ''
// 		for (const name of names) {
// 			styles += cache.inserted[name]
// 		}
// 		return (
// 			<style
// 				data-emotion={`${cache.key} ${names.join(' ')}`}
// 				dangerouslySetInnerHTML={{
// 					__html: styles
// 				}}
// 			/>
// 		)
// 	})
// 	//@ts-ignore
// 	return <MerelyProvider>{children}</MerelyProvider>
// }
