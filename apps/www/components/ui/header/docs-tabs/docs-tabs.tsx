'use client'

import { root } from '@/lib/root'
import { Flex } from '@merely-ui/react'
import { usePathname } from 'next/navigation'
import DocsTabLink from './docs-tab-link'

function DocsTabsBox({ children }: { children: React.ReactNode }) {
	return (
		<Flex alignItems='center' gap={4}>
			{children}
		</Flex>
	)
}

export default function DocsTabs() {
	const pathname = usePathname()

	const isGettingStartedActive = pathname.includes('get-started')
	const isComponentsActive = pathname.includes('components')
	const isStylingActive = pathname.includes('styling')
	const isThemingActive = pathname.includes('theming')

	if (!pathname.includes('docs')) return null

	return (
		<DocsTabsBox>
			<DocsTabLink
				isActive={isGettingStartedActive}
				href={root.getInstallationLink()}
			>
				Get started
			</DocsTabLink>
			<DocsTabLink
				isActive={isComponentsActive}
				href={root.getComponentsLink()}
			>
				Components
			</DocsTabLink>
			{/* <DocsTabLink isActive={isStylingActive} href={root.getStylingLink()}>
				Styling
			</DocsTabLink>
			<DocsTabLink isActive={isThemingActive} href={root.getThemingLink()}>
				Theming
			</DocsTabLink> */}
		</DocsTabsBox>
	)
}
