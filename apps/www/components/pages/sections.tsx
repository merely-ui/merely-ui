import { root } from '@/lib/root'
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

function WelcomeSectionBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			as='section'
			h={'34rem'}
			display='flex'
			justifyContent='center'
			flexDir='column'
			alignItems='flex-start'
			gap={52}
		>
			{children}
		</Box>
	)
}

function WelcomeSectionReleaseLink() {
	return (
		<Link href={root.getV2ReleaseLink()}>
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
	)
}

function WelcomeSectionTitle() {
	return (
		<Flex flexDir='column'>
			<Title
				as={'h1'}
				fontSize='2.5rem'
				fontWeight={700}
				_lg={{
					fontSize: '3.5rem'
				}}
			>
				Build beautiful UI with ease
			</Title>
			<Text _size='xl' maxW={'50rem'} fontWeight={500} color={colors.gray.$200}>
				MerelyUI provides a comprehensive set of pre-built components and
				utilities to help you create stunning web applications quickly and
				efficiently.
			</Text>
		</Flex>
	)
}

function WelcomeSectionButtons() {
	return (
		<Flex>
			<Link href={root.getInstallationLink()}>
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
			<Link href={root.getComponentsLink()}>
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
	)
}

export function WelcomeSection() {
	return (
		<WelcomeSectionBox>
			<WelcomeSectionReleaseLink />
			<WelcomeSectionTitle />
			<WelcomeSectionButtons />
		</WelcomeSectionBox>
	)
}

////////////////////////////////////////

function CodeSectionBox({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			as='section'
			gridTemplateColumns={'1fr'}
			py={'6rem'}
			mb={'8rem'}
			_md={{
				gridTemplateColumns: 'repeat(2, 1fr)'
			}}
			_xl={{
				gridTemplateColumns: 'repeat(4, 1fr)'
			}}
		>
			{children}
		</Grid>
	)
}

function CodeSectionCard({ children }: { children: React.ReactNode }) {
	return (
		<Card
			bg='transparent'
			py={'2rem'}
			display='flex'
			justifyContent='center'
			alignItems='center'
		>
			{children}
		</Card>
	)
}

export function CodeSection() {
	return (
		<CodeSectionBox>
			<CodeSectionCard>
				<Button>Button</Button>
			</CodeSectionCard>
			<CodeSectionCard>
				<Input placeholder='Type something...' />
			</CodeSectionCard>
			<CodeSectionCard>
				<Switch _size='l' />
			</CodeSectionCard>
			<CodeSectionCard>
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
			</CodeSectionCard>
		</CodeSectionBox>
	)
}

////////////////////////////////////////

function AdvantagesSectionBox({ children }: { children: React.ReactNode }) {
	return (
		<Box as={'section'} mb={'4rem'}>
			{children}
		</Box>
	)
}

function AdvantagesSectionGrid({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			gridTemplateColumns='1fr'
			gap={12}
			justifyContent='center'
			_md={{
				gridTemplateColumns: 'repeat(2, minmax(0, 500px))',
				gap: 40
			}}
		>
			{children}
		</Grid>
	)
}

function AdvantagesSectionCard({ children }: { children: React.ReactNode }) {
	return (
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
			{children}
		</Card>
	)
}

function AdvantagesSectionCardTitle({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<Title _size='2xl' fontWeight={600}>
			{children}
		</Title>
	)
}

export function AdvantagesSection() {
	return (
		<AdvantagesSectionBox>
			<Title
				as='h2'
				textAlign='center'
				_size='3xl'
				fontWeight={700}
				mb={'4rem'}
			>
				Why MerelyUI?
			</Title>
			<AdvantagesSectionGrid>
				<AdvantagesSectionCard>
					<Zap />
					<AdvantagesSectionCardTitle>
						Lightning Fast
					</AdvantagesSectionCardTitle>
					<Text>
						Optimized for performance, our components ensure your applications
						load quickly and run smoothly.
					</Text>
				</AdvantagesSectionCard>

				<AdvantagesSectionCard>
					<Code />
					<AdvantagesSectionCardTitle>
						Easy to Customize
					</AdvantagesSectionCardTitle>
					<Text>
						Flexible and extensible components that you can easily modify to fit
						your project's unique needs.
					</Text>
				</AdvantagesSectionCard>
				<AdvantagesSectionCard>
					<Accessibility />
					<AdvantagesSectionCardTitle>Accessible</AdvantagesSectionCardTitle>
					<Text>
						Merely UI components follow the WAI-ARIA guidelines specifications.
					</Text>
				</AdvantagesSectionCard>
				<AdvantagesSectionCard>
					<Moon />
					<AdvantagesSectionCardTitle>
						Color Mode Switch
					</AdvantagesSectionCardTitle>
					<Text>
						Color mode switching supported out-of-the-box and all components are
						compatible with Light and Dark mode.
					</Text>
				</AdvantagesSectionCard>
			</AdvantagesSectionGrid>
		</AdvantagesSectionBox>
	)
}

////////////////////////////////////////

function ReadyToStartSectionBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			as={'section'}
			py={'8rem'}
			display='flex'
			alignItems='center'
			flexDir='column'
		>
			{children}
		</Box>
	)
}

function ReadyToStartSectionLink() {
	return (
		<Link href={root.getInstallationLink()}>
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
		</Link>
	)
}

export function ReadyToStartSection() {
	return (
		<ReadyToStartSectionBox>
			<Title as='h2' _size='3xl' fontWeight={700} mb={'3rem'}>
				Ready to get started?
			</Title>
			<ReadyToStartSectionLink />
		</ReadyToStartSectionBox>
	)
}
