import {
	Avatar,
	AvatarBadge,
	Button,
	Card,
	Code,
	Flex,
	Hint,
	HintText,
	HintTrigger,
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
	Switch,
	Tag,
	Text,
	Textarea,
	useColorTheme,
	useDisclosure
} from '@merely-ui/react'
import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function App() {
	const [count, setCount] = useState(0)

	const { toggle } = useColorTheme()
	const { isOpen, onClose, toggle: toggleDis } = useDisclosure()

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<Button onClick={toggleDis}>Open</Button>
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
			<Select>
				<SelectItem>Mango</SelectItem>
			</Select>
			<Tag>Sale</Tag>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent minW={300}>
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
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
