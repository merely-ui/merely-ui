'use client'

import { linksData, PageLink } from '@/components/docs/links'
import {
	Box,
	Button,
	Code,
	colors,
	Flex,
	Input,
	Modal,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure
} from '@merely-ui/react'
import { Search } from 'lucide-react'
import { redirect } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { searchBarStartItems } from './search-bar-start-items'

interface SearchBarLinkProps {
	isActive: boolean
	onClick: () => void
	onPointerEnter: () => void
	children: React.ReactNode
}

function SearchBarButton({ toggle }: { toggle: () => void }) {
	return (
		<Button
			variant='clear'
			padding='0.375rem 0.75rem'
			borderRadius='0.375rem'
			border='1px solid var(--input-border-color)'
			display='none'
			alignItems='center'
			gap={80}
			onClick={toggle}
			_md={{
				display: 'flex'
			}}
		>
			<Text color={colors.gray.$400} _size='s'>
				Search…
			</Text>
			<Flex gap={2}>
				<Code _size='s' p={2} borderRadius={4}>
					⌘
				</Code>
				<Code _size='s' py={2} px={3} borderRadius={4}>
					K
				</Code>
			</Flex>
		</Button>
	)
}

function SearchBarMobileButton({ toggle }: { toggle: () => void }) {
	return (
		<Button
			p={8}
			variant='clear'
			aria-label='Click to search the docs'
			onClick={toggle}
			_md={{
				display: 'none'
			}}
		>
			<Search width={16} height={16} />
		</Button>
	)
}

function SearchBarLink(props: SearchBarLinkProps) {
	const { isActive, onPointerEnter, onClick, children } = props

	return (
		<Box
			px={'1rem'}
			py={'0.875rem'}
			borderRadius={'0.25rem'}
			transition='all 0.1s ease'
			fontWeight={500}
			onClick={onClick}
			onPointerEnter={onPointerEnter}
			_dark={{
				cursor: 'pointer',
				bgColor: isActive ? colors.gray.$800 : '',
				_hover: {
					bgColor: colors.gray.$800
				}
			}}
			_light={{
				cursor: 'pointer',
				bgColor: isActive ? colors.gray.$50 : '',
				_hover: {
					bgColor: colors.gray.$50
				}
			}}
		>
			{children}
		</Box>
	)
}

export default function SearchBar() {
	const [searchTerm, setSearchTerm] = useState('')
	const [activeItem, setActiveItem] = useState(-1)
	const { isOpen, onClose, toggle } = useDisclosure()

	const items = useSearchItems(linksData, searchTerm)

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value)

	const onRedirect = (href: string) => {
		onClose()
		redirect(href)
	}

	// const onEnterKeydown = (e: KeyboardEvent) => {
	// 	if (e.key === 'enter') onRedirect()
	// }

	useHotkeys('meta+k', () => toggle(), {
		preventDefault: true
	})

	return (
		<>
			<SearchBarButton toggle={toggle} />
			<SearchBarMobileButton toggle={toggle} />

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					minW='16rem'
					_md={{
						minW: '22rem'
					}}
					p={0}
					bgColor={'transparent'}
				>
					<Input
						autoFocus
						_size='l'
						placeholder='Search…'
						value={searchTerm}
						onChange={onChange}
						borderRadius={'0.25rem'}
						_dark={{
							bgColor: colors.gray.$900
						}}
						_light={{
							bgColor: colors.white
						}}
					/>
					<Flex
						flexDir='column'
						gap={2}
						p={'0.25rem'}
						borderRadius={'0.25rem'}
						maxH='16rem'
						overflowY='auto'
						scrollBehavior='smooth'
						scrollbarWidth='thin'
						_dark={{
							bgColor: colors.gray.$900
						}}
						_light={{
							bgColor: colors.white
						}}
					>
						{searchTerm && items.length > 0
							? items.map((item, index) => (
									<SearchBarLink
										isActive={activeItem === index}
										onClick={() => onRedirect(item.link)}
										onPointerEnter={() => setActiveItem(index)}
										key={item.link}
									>
										{item.text}
									</SearchBarLink>
								))
							: searchBarStartItems.map((item, index) => (
									<SearchBarLink
										isActive={activeItem === index}
										onClick={() => onRedirect(item.link)}
										onPointerEnter={() => setActiveItem(index)}
										key={item.link}
									>
										{item.text}
									</SearchBarLink>
								))}

						{items.length === 0 && (
							<Text p={20} color={colors.gray.$400} textAlign='center'>
								No search results: {searchTerm}
							</Text>
						)}
					</Flex>
				</ModalContent>
			</Modal>
		</>
	)
}

function useSearchItems(entries: PageLink[], searchTerm: string) {
	const lowerCaseSearchTerm = searchTerm.toLowerCase()

	return entries.filter(entry =>
		entry.text.toLowerCase().includes(lowerCaseSearchTerm)
	)
}
