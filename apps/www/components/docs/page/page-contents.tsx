'use client'

import { useVisibleTitle } from '@/lib/hooks/use-visible-title'
import {
	PageContentsBox,
	PageContentsLink,
	PageContentsText
} from './page-contents.server'

export type Title = {
	text: string
	idAttr: string
}

interface PageContentsProps {
	sidebarTitles: Title[]
}

export default function PageContents({ sidebarTitles }: PageContentsProps) {
	const titleId = useVisibleTitle(sidebarTitles.map(t => t.idAttr))

	return (
		<PageContentsBox>
			<PageContentsText />
			{sidebarTitles.map(({ idAttr, text }) => (
				<PageContentsLink
					idAttr={idAttr}
					text={text}
					titleId={titleId}
					key={idAttr}
				/>
			))}
		</PageContentsBox>
	)
}
