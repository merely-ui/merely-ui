import { Box, Flex } from '@merely-ui/react'
import PageContents from './page-contents'

const docs: Record<string, any> = {
	'get-started': {
		sidebarTitles: [
			{
				text: 'Installation',
				idAttr: 'getting-started'
			},
			{
				text: 'Frameworks guides',
				idAttr: 'frameworks-guides'
			}
		],
		content: <Box h={1520}>home</Box>
	}
}

export default function DocPage({ slug }: { slug: string[] }) {
	const page = docs[slug[0]]

	if (!page?.content || !page?.sidebarTitles) return null

	return (
		<>
			<Flex flexDir='column' px={60} py={40}>
				{page.content}
			</Flex>
			<PageContents sidebarTitles={page.sidebarTitles} />
		</>
	)
}
