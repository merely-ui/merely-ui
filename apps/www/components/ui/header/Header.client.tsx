'use client'

import { useSidebarItems } from '@/app/docs/sidebar'
import { SidebarAnchor } from '@/app/docs/sidebar.server'
import { root } from '@/lib/root'
import {
	Box,
	Button,
	colors,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure
} from '@merely-ui/react'
import { ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'

export function HeaderMobileNav() {
	const { isOpen, onClose, toggle } = useDisclosure()

	return (
		<Box
			_md={{
				display: 'none'
			}}
		>
			<Button
				p={8}
				variant='clear'
				onClick={toggle}
				aria-label='Open navigation'
			>
				<Menu width={16} height={16} />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Link onClick={onClose} href={root.getInstallationLink()}>
						<Text fontWeight={500}>Docs</Text>
					</Link>
					<Link onClick={onClose} href={root.getPlaygroundLink()}>
						<Text fontWeight={500}>Playground</Text>
					</Link>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export function MobileSidebar() {
	const { isOpen, onClose, toggle } = useDisclosure()
	const { items, pathname } = useSidebarItems()

	return (
		<Box
			_md={{
				display: 'none'
			}}
		>
			<Button variant='clear' p={0} onClick={toggle}>
				{items.map(({ category, items }) =>
					items.map(({ link, text }) => {
						if (link === pathname)
							return (
								<Flex py={16} alignItems='center' gap={4} key={link}>
									<Text color={colors.gray.$100} _size='s'>
										{category}
									</Text>
									<ChevronRight
										color={colors.gray.$100}
										width={16}
										height={16}
									/>
									<Text color={colors.gray.$100} _size='s'>
										{text}
									</Text>
								</Flex>
							)
					})
				)}
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					p={'1.5rem 1.5rem 1.5rem 1rem'}
					maxH={'28rem'}
					overflowY='auto'
				>
					<ModalCloseButton />
					<ModalBody display='flex' flexDir='column' gap={16}>
						{items?.map(c => (
							<SidebarAnchor
								category={c.category}
								items={c.items}
								pathname={pathname}
								onClick={onClose}
								key={c.category}
							/>
						))}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}
