// 'use client'
'use client'

import {
	Button,
	Card,
	colors,
	Dropdown,
	DropdownContent,
	DropdownTrigger,
	Flex,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Switch,
	Template,
	Text,
	Title
} from '@merely-ui/react'
import './globals.css'
// import {
// 	Avatar,
// 	AvatarBadge,
// 	Button,
// 	Card,
// 	Code,
// 	colors,
// 	Flex,
// 	Hint,
// 	HintText,
// 	HintTrigger,
// 	Input,
// 	Modal,
// 	ModalBody,
// 	ModalCloseButton,
// 	ModalContent,
// 	ModalFooter,
// 	ModalHeader,
// 	ModalOverlay,
// 	Popover,
// 	PopoverBody,
// 	PopoverCloseButton,
// 	PopoverContent,
// 	PopoverFooter,
// 	PopoverHeader,
// 	PopoverTrigger,
// 	Select,
// 	SelectItem,
// 	Switch,
// 	Tag,
// 	Template,
// 	Text,
// 	Textarea,
// 	useColorMode,
// 	useDisclosure
// } from '@merely-ui/react'

// export default function Home() {
// 	const { toggle, setColorMode } = useColorMode()
// 	const { isOpen, onClose, toggle: toggleDis } = useDisclosure()

// 	return (
// 		<div className='main'>
// 			<p className='read-the-docs'>
// 				Click on the Vite and React logos to learn more
// 			</p>
// 			<Button onClick={() => setColorMode('light')}>Set dark</Button>
// 			<Button variant='outline' onClick={toggleDis}>
// 				Open
// 			</Button>
// 			<Button
// 				onClick={toggle}
// 				ml={'100px'}
// 				mt={'100px'}
// 				mx={100}
// 				aria-label={'Text'}
// 				_size='l'
// 				w={100}
// 			>
// 				Enter
// 			</Button>
// 			<Template
// 				bgColor={colors.teal.$400}
// 				w={1000}
// 				h={300}
// 				mt={200}
// 				mx={'auto'}
// 			>
// 				BIG BLOCK
// 			</Template>
// 			<Template
// 				bgColor={colors.teal.$400}
// 				w={1000}
// 				h={300}
// 				mt={200}
// 				mx={'auto'}
// 				display='flex'
// 			>
// 				<Text mr={200}>Sdsdsd</Text>
// 				<Code color='white'>console.log(&apos;Hello world!&apos;)</Code>
// 				<label htmlFor='switch'>Label</label>
// 				<Switch mr={200} id='switch' />
// 				<Switch ml={200} _size='s' />
// 				<Switch mt={200} _size='l' />
// 			</Template>
// 			<Flex>
// 				<Text>Sdsdsd</Text>
// 				<Code color='white'>console.log(&apos;Hello world!&apos;)</Code>
// 				<label htmlFor='switch'>Label</label>
// 				<Switch id='switch' />
// 				<Switch _size='s' />
// 				<Switch _size='l' />
// 				<Card>Card</Card>
// 				<Hint>
// 					<HintTrigger>
// 						<Button>Hint</Button>
// 					</HintTrigger>
// 					<HintText minW={400}>
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, rem
// 						repellat! Corporis dicta vitae corrupti minima voluptatem alias sit
// 						debitis, consectetur sapiente eos nihil consequatur id eius
// 						accusamus temporibus nesciunt.
// 					</HintText>
// 				</Hint>
// 				<Textarea placeholder='Textarea placeholder' />
// 				<Avatar>
// 					<AvatarBadge w={15} />
// 				</Avatar>
// 			</Flex>
// 			<Select onChange={value => console.log(value)} placeholder='SELECT'>
// 				<SelectItem selected>Mango</SelectItem>
// 			</Select>
// 			<Tag>Sale</Tag>
// 			<Modal isOpen={isOpen} onClose={onClose}>
// 				<ModalOverlay />
// 				<ModalContent>
// 					<ModalCloseButton />
// 					<ModalHeader>Modal Header</ModalHeader>
// 					<ModalBody>Modal body</ModalBody>
// 					<ModalFooter>
// 						<Button onClick={onClose}>Close</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// 			<Popover>
// 				<PopoverTrigger>
// 					<Button>Click to Open</Button>
// 				</PopoverTrigger>
// 				<PopoverContent>
// 					<PopoverCloseButton />
// 					<PopoverHeader>Popover Header</PopoverHeader>
// 					<PopoverBody>
// 						<div>Lorem ipsum dolor sit amet</div>
// 					</PopoverBody>
// 					<PopoverFooter>
// 						<Button>Click</Button>
// 					</PopoverFooter>
// 				</PopoverContent>
// 			</Popover>
// 			<Input placeholder='Some text' />
// 		</div>
// 	)
// }

export default function Home() {
	return (
		<main>
			<Flex
				flexDir='column'
				justifyContent='center'
				alignItems='center'
				h={'40rem'}
				mb={'10rem'}
				gap={30}
				mx={'auto'}
				className='home'
			>
				<Title as={'h1'} _size='3xl' fontSize={64}>
					<span className='gradient-purple'>Fast </span>
					<span className='gradient-silver'>to write, </span>
					<span className='gradient-green'>fast </span>
					<span className='gradient-silver'>to load</span>
				</Title>
				<Text
					_size='xl'
					maxW={600}
					fontSize={22}
					textAlign='center'
					color={colors.gray.$300}
				>
					Merely UI is a simple, accessible and lightweight library for your
					React apps
				</Text>
				<Dropdown>
					<DropdownTrigger>
						<Button>Btn</Button>
					</DropdownTrigger>
					<DropdownContent>Content</DropdownContent>
				</Dropdown>
				<Dropdown>
					<DropdownTrigger>
						<Button>Btn</Button>
					</DropdownTrigger>
					<DropdownContent>Content</DropdownContent>
				</Dropdown>
				<Flex mt={40}>
					<Button
						_size='xl'
						px={35}
						py={10}
						h={50}
						alignItems='center'
						borderRadius={10}
					>
						Get started
					</Button>
					<a href='https://github.com/merely-ui/merely-ui'>
						<Button
							_size='xl'
							px={25}
							py={10}
							h={50}
							alignItems='center'
							color='white'
							bgColor={colors.gray.$800}
							borderRadius={10}
							gap={8}
							_hover={{
								bgColor: colors.gray.$700
							}}
							_light={{
								bgColor: colors.gray.$300
							}}
						>
							{/* <Image src={GithubIcon} alt='Github icon' /> */}
							<span>GitHub</span>
						</Button>
					</a>
				</Flex>
			</Flex>
			<Flex flexDir='column' gap={'50rem'}>
				<Template w={500} h={500} bgColor='red' />
				<Template w={500} h={500} bgColor='red' />
				<Template w={500} h={500} bgColor='red' />
				<Template w={500} h={500} bgColor='red' />
				<Template w={500} h={500} bgColor='red' />
			</Flex>
			<Switch />
			<Card>
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
			</Card>
		</main>
	)
}
