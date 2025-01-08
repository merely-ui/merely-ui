import {
	Box,
	Button,
	Card,
	colors,
	Flex,
	Grid,
	Input,
	Popover,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Switch,
	Text,
	Title
} from '@merely-ui/react'
import { Accessibility, Code, Moon, MoveRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<Box
				h={'34rem'}
				display='flex'
				justifyContent='center'
				flexDir='column'
				alignItems='flex-start'
				gap={52}
			>
				<Link href={'/release-v2'}>
					<Button
						variant='clear'
						_size='l'
						fontWeight={600}
						fontSize={'0.875rem'}
						display='flex'
						gap={8}
						alignItems='center'
						_dark={{
							bgColor: colors.gray.$800,
							color: colors.gray.$200
						}}
						_light={{
							bgColor: colors.gray.$50,
							color: colors.gray.$600
						}}
					>
						MerelyUI v2 changes <MoveRight width={16} height={16} />
					</Button>
				</Link>
				<Flex flexDir='column'>
					<Title as={'h1'} fontSize='3.5rem' fontWeight={700}>
						Build beautiful UI with ease
					</Title>
					<Text
						_size='xl'
						maxW={'50rem'}
						fontWeight={500}
						color={colors.gray.$200}
					>
						MerelyUI provides a comprehensive set of pre-built components and
						utilities to help you create stunning web applications quickly and
						efficiently.
					</Text>
				</Flex>
				<Flex>
					<Link href='/docs/get-started/installation'>
						<Button
							_size='l'
							fontWeight={600}
							fontSize={'0.875rem'}
							display='flex'
							gap={8}
							alignItems='center'
						>
							Get Started <MoveRight width={16} height={16} />
						</Button>
					</Link>
					<Link href='/docs/components/overview'>
						<Button
							variant='outline'
							_size='l'
							fontWeight={600}
							fontSize={'0.875rem'}
							display='flex'
							gap={8}
							alignItems='center'
						>
							View Components
						</Button>
					</Link>
				</Flex>
			</Box>
			<Grid gridTemplateColumns={'repeat(4, 1fr)'} py={'6rem'} mb={'8rem'}>
				<Card
					bg='transparent'
					py={'2rem'}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Button>Button</Button>
				</Card>
				<Card
					bg='transparent'
					py={'2rem'}
					display='flex'
					justifyContent='center'
					alignItems='center'
				>
					<Input placeholder='Type something...' />
				</Card>
				<Card
					display='flex'
					bg='transparent'
					py={'2rem'}
					justifyContent='center'
					alignItems='center'
				>
					<Switch _size='l' />
				</Card>
				<Card
					display='flex'
					bg='transparent'
					py={'2rem'}
					justifyContent='center'
					alignItems='center'
				>
					<Popover _direction='bottom'>
						<PopoverTrigger asChild>
							<Button>Popover!</Button>
						</PopoverTrigger>
						<PopoverContent>
							<PopoverCloseButton />
							<PopoverHeader>Popover Header</PopoverHeader>
							<PopoverBody>This is a body of Popover</PopoverBody>
							<PopoverFooter>
								<Button _size='s'>Click me!</Button>
							</PopoverFooter>
						</PopoverContent>
					</Popover>
				</Card>
			</Grid>
			<Box as={'section'} mb={'4rem'}>
				<Title
					as='h2'
					textAlign='center'
					_size='3xl'
					fontWeight={700}
					mb={'4rem'}
				>
					Why MerelyUI?
				</Title>
				<Grid
					gridTemplateColumns='repeat(2, 500px)'
					gap={40}
					justifyContent='center'
				>
					<Card
						display='flex'
						flexDir='column'
						bg='transparent'
						py={'2rem'}
						px={'3rem'}
						gap={'1rem'}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						<Zap />
						<Title _size='2xl' fontWeight={600}>
							Lightning Fast
						</Title>
						<Text>
							Optimized for performance, our components ensure your applications
							load quickly and run smoothly.
						</Text>
					</Card>

					<Card
						display='flex'
						flexDir='column'
						bg='transparent'
						py={'2rem'}
						px={'3rem'}
						gap={'1rem'}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						<Code />
						<Title _size='2xl' fontWeight={600}>
							Easy to Customize
						</Title>
						<Text>
							Flexible and extensible components that you can easily modify to
							fit your project's unique needs.
						</Text>
					</Card>
					<Card
						display='flex'
						flexDir='column'
						bg='transparent'
						py={'2rem'}
						px={'3rem'}
						gap={'1rem'}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						<Accessibility />
						<Title _size='2xl' fontWeight={600}>
							Accessible
						</Title>
						<Text>
							Merely UI components follow the WAI-ARIA guidelines
							specifications.
						</Text>
					</Card>
					<Card
						display='flex'
						flexDir='column'
						bg='transparent'
						py={'2rem'}
						px={'3rem'}
						gap={'1rem'}
						justifyContent='flex-start'
						alignItems='flex-start'
					>
						<Moon />
						<Title _size='2xl' fontWeight={600}>
							Color Mode Switch
						</Title>
						<Text>
							Color mode switching supported out-of-the-box and all components
							are compatible with Light and Dark mode.
						</Text>
					</Card>
				</Grid>
			</Box>
			<Box as={'section'} py={'8rem'}>
				<Title
					as='h2'
					textAlign='center'
					_size='3xl'
					fontWeight={700}
					mb={'3rem'}
				>
					Ready to get started?
				</Title>
				<Button
					_size='l'
					fontWeight={600}
					fontSize={'0.875rem'}
					display='flex'
					gap={8}
					alignItems='center'
					mx='auto'
				>
					Move to Docs <MoveRight width={16} height={16} />
				</Button>
			</Box>
		</div>
	)
}
