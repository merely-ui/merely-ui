'use client'

import {
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
import { ChangeEvent, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState('')
	const { isOpen, onClose, toggle } = useDisclosure()

	const onChange = (e: ChangeEvent<HTMLInputElement>) =>
		setSearchValue(e.target.value)

	useHotkeys('meta+k', () => toggle(), {
		preventDefault: true
	})

	return (
		<>
			<Button
				variant='clear'
				padding='0.375rem 0.75rem'
				borderRadius='0.375rem'
				border='1px solid var(--input-border-color)'
				display='flex'
				alignItems='center'
				gap={80}
				onClick={toggle}
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

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent p={0} bgColor={'transparent'}>
					<Input
						autoFocus
						_size='l'
						placeholder='Search…'
						w={'22rem'}
						value={searchValue}
						onChange={onChange}
					/>
					<div>Content {searchValue}</div>
				</ModalContent>
			</Modal>
		</>
	)
}
