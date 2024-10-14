import { Code } from '@/components/Code'
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@/components/Modal'
import { PopoverBody } from '@/components/Popover/PopoverBody'
import { PopoverCloseButton } from '@/components/Popover/PopoverCloseButton'
import { PopoverFooter } from '@/components/Popover/PopoverFooter'
import { PopoverHeader } from '@/components/Popover/PopoverHeader'
import {
	Avatar,
	AvatarBadge,
	Button,
	Card,
	Flex,
	Hint,
	HintText,
	HintTrigger,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Select,
	SelectItem,
	Switch,
	Tag,
	Text,
	Textarea,
	useColorMode,
	useDisclosure
} from '../lib'
import './App.css'

function App() {
	const { toggle, setColorMode } = useColorMode()
	const { isOpen, onClose, toggle: toggleDis } = useDisclosure()

	return (
		<div className='main'>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
			<Button onClick={() => setColorMode('light')}>Set dark</Button>
			<Button variant='outline' onClick={toggleDis}>
				Open
			</Button>
			<Button
				onClick={toggle}
				ml={'100px'}
				mt={'100px'}
				mx={100}
				aria-label={'Text'}
				_size='l'
				w={100}
			>
				Enter
			</Button>
			<Flex>
				<Text>Sdsdsd</Text>
				<Code color='white'>console.log('Hello world!')</Code>
				<label htmlFor='switch'>Label</label>
				<Switch id='switch' />
				<Switch _size='s' />
				<Switch _size='l' />
				<Card>Card</Card>
				<Hint>
					<HintTrigger>
						<Button>Hint</Button>
					</HintTrigger>
					<HintText minW={400}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, rem
						repellat! Corporis dicta vitae corrupti minima voluptatem alias sit
						debitis, consectetur sapiente eos nihil consequatur id eius
						accusamus temporibus nesciunt.
					</HintText>
				</Hint>
				<Textarea placeholder='Textarea placeholder' />
				<Avatar>
					<AvatarBadge w={15} />
				</Avatar>
			</Flex>
			<Select
				onChange={value => console.log(value)}
				placeholder='SELECT'
				buttonProps={{
					maxH: 30
				}}
				listProps={{
					bgColor: 'white'
				}}
			>
				<SelectItem selected>Mango</SelectItem>
			</Select>
			<Tag>Sale</Tag>
			<Modal isOpen={isOpen} onClose={onClose}>
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
			<Popover>
				<PopoverTrigger>
					<Button>Click to Open</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverCloseButton />
					<PopoverHeader>Popover Header</PopoverHeader>
					<PopoverBody>
						<div>Lorem ipsum dolor sit amet</div>
					</PopoverBody>
					<PopoverFooter>
						<Button>Click</Button>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
			<Input placeholder='Some text' />
		</div>
	)
}

export default App
