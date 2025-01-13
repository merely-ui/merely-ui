import { Box, Flex, Text } from '@merely-ui/react'
import { SidebarLinks } from '../../components/docs/links'
import SidebarLink from '../../components/ui/shared/SidebarLink'

export function SidebarBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			px={8}
			py={24}
			pos='sticky'
			top={112}
			height='calc(100dvh - 110px)'
			overflowY='auto'
			overscrollBehavior='contain'
			scrollBehavior='smooth'
			scrollbarWidth='thin'
			display={'none'}
			_md={{
				display: 'block'
			}}
		>
			<Flex flexDir='column' gap={16}>
				{children}
			</Flex>
		</Box>
	)
}

export function SidebarAnchor({
	category,
	items,
	pathname,
	onClick
}: SidebarLinks & { pathname: string; onClick?: () => void }) {
	return (
		<Flex flexDir='column' gap={8}>
			<Text _size='s' fontSize={15} fontWeight={500}>
				{category}
			</Text>
			<Flex flexDir='column' gap={1}>
				{items.map(pageLink => (
					<SidebarLink
						href={pageLink.link}
						isActive={pathname === pageLink.link}
						onClick={onClick}
						key={pageLink.link}
					>
						{pageLink.text}
					</SidebarLink>
				))}
			</Flex>
		</Flex>
	)
}
