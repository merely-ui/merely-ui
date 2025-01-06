import { useRef } from 'react'
import {
	Avatar,
	AvatarBadge,
	Button,
	Card,
	Code,
	colors,
	Hint,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Select,
	SelectItem,
	Stack,
	Switch,
	Tag,
	Textarea,
	useColorMode,
	useDisclosure
} from '../lib'
import './App.css'

function App() {
	const ref = useRef(null)
	const { toggle } = useColorMode()
	const { isOpen, onClose, toggle: toggleDis } = useDisclosure()

	return (
		<Stack flexDir='column' alignItems='flex-start' p={50} gap={50}>
			<Stack _ref={ref} alignItems='center'>
				<Button _size='xs'>Button</Button>
				<Button _size='s'>Button</Button>
				<Button _size='m'>Button</Button>
				<Button _size='l'>Button</Button>
				<Button _size='xl'>Button</Button>
			</Stack>
			<Stack alignItems='center'>
				<Card _size='s'>Card</Card>
				<Card _size='m'>Card</Card>
				<Card _size='l'>Card</Card>
			</Stack>
			<Button
				onClick={toggle}
				aria-label={'Text'}
				_size='l'
				w={100}
				theme='light'
				htmlColor='black'
				_hover={{
					bgColor: colors.purple.$200
				}}
			>
				Toggle
			</Button>
			<Button variant='outline' onClick={toggleDis}>
				Open modal
			</Button>
			<Stack alignItems='center'>
				<Switch _size='s' />
				<Switch _size='m' activeBgColor={colors.teal.$400} />
				<Switch _size='l' />
			</Stack>
			<Stack alignItems='center'>
				<Select _size='s' onChangeValue={value => console.log(value)}>
					<SelectItem>Mango</SelectItem>
					<SelectItem>Apple</SelectItem>
				</Select>
				<Select _size='m' onChangeValue={value => console.log(value)}>
					<SelectItem>Mango</SelectItem>
					<SelectItem>Apple</SelectItem>
				</Select>
				<Select _size='l' onChangeValue={value => console.log(value)}>
					<SelectItem>Mango</SelectItem>
					<SelectItem>Apple</SelectItem>
				</Select>
			</Stack>
			<Stack htmlColor='black' alignItems='center'>
				<Textarea _size='s' />
				<Textarea _size='m' />
				<Textarea _size='l' />
			</Stack>
			<Stack alignItems='center'>
				<Input _size='xs' />
				<Input focusBorderColor='transparent' _size='s' />
				<Input _size='m' />
				<Input _size='l' />
				<Input _size='xl' />
			</Stack>
			<Stack alignItems='center'>
				<Code _size='s'>console.log('Hello world!')</Code>
				<Code _size='m'>console.log('Hello world!')</Code>
				<Code _size='m'>Hint</Code>
				<Code _size='l'>console.log('Hello world!')</Code>
			</Stack>
			<Stack alignItems='center'>
				<Tag _size='s'>Tag</Tag>
				<Tag _size='m' variant='outline'>
					Tag
				</Tag>
				<Tag _size='l'>Tag</Tag>
			</Stack>
			<Stack alignItems='center'>
				<Avatar _size='s'>
					<AvatarBadge />
				</Avatar>
				<Avatar>
					<AvatarBadge />
				</Avatar>
				<Avatar _size='l'>
					<AvatarBadge />
				</Avatar>
			</Stack>

			<Hint text='Hint text'>
				<Button>Hint</Button>
			</Hint>
			<Stack w={'100%'} justifyContent='center'>
				<Popover _direction='top'>
					<PopoverTrigger asChild>
						<Button>Popover</Button>
					</PopoverTrigger>
					<PopoverContent>
						<PopoverCloseButton />
						<PopoverHeader>Popover Header</PopoverHeader>
						<PopoverBody>
							<div>Lorem ipsum dolor sit amet adds dsds dss</div>
						</PopoverBody>
						<PopoverFooter>
							<Button>Click</Button>
						</PopoverFooter>
					</PopoverContent>
				</Popover>
			</Stack>

			<Modal _size='s' isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalHeader>Modal Header</ModalHeader>
					<ModalBody>Modal body</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Stack>
	)
}

export default App
