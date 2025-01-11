'use client'

import {
	componentsLinks,
	getStartedLinks,
	SidebarLinks,
	stylingLinks,
	themingLinks
} from '@/components/docs/links'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SidebarAnchor, SidebarBox } from './sidebar.server'

export default function Sidebar() {
	const [items, setItems] = useState<SidebarLinks[]>([])

	const pathname = usePathname()

	const isGettingStartedActive = pathname.includes('get-started')
	const isComponentsActive = pathname.includes('components')
	const isStylingActive = pathname.includes('styling')
	const isThemingActive = pathname.includes('theming')

	useEffect(() => {
		if (isGettingStartedActive) setItems(getStartedLinks)
		if (isComponentsActive) setItems(componentsLinks)
		if (isStylingActive) setItems(stylingLinks)
		if (isThemingActive) setItems(themingLinks)
	}, [pathname])

	return (
		<SidebarBox>
			{items?.map(c => (
				<SidebarAnchor
					category={c.category}
					items={c.items}
					pathname={pathname}
					key={c.category}
				/>
			))}
		</SidebarBox>
	)
}
