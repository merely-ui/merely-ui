import { SidebarLinks } from '@/components/docs/links'
import SidebarLink from '@/components/ui/shared/SidebarLink'
import { Box, Flex, Text } from '@merely-ui/react'

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
	pathname
}: SidebarLinks & { pathname: string }) {
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
						key={pageLink.link}
					>
						{pageLink.text}
					</SidebarLink>
				))}
			</Flex>
		</Flex>
	)
}
