import { Flex } from '@merely-ui/react'
import { docs } from '../docs'
import PageContents from './page-contents'

export default function DocPage({ slug }: { slug: string[] }) {
	const page = useDocPage(docs, slug)

	if (!page?.content || !page?.sidebarTitles) return null

	return (
		<>
			<Flex
				flexDir='column'
				px={12}
				py={40}
				_sm={{
					px: 20
				}}
				_md={{
					px: 40
				}}
				_lg={{
					px: 60
				}}
			>
				{page.content}
			</Flex>
			<PageContents sidebarTitles={page.sidebarTitles} />
		</>
	)
}

function useDocPage(
	obj: Record<string, any>,
	keys: string[]
): Record<string, any> | null {
	let current: any = obj

	for (const key of keys) {
		if (current && typeof current === 'object' && key in current) {
			current = current[key]
		} else {
			return null
		}
	}

	return current && typeof current === 'object' ? current : null
}
