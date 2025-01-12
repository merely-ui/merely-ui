import { root } from '@/lib/root'
import { Box, colors, Flex, Grid, Text } from '@merely-ui/react'
import Link from 'next/link'
import Container from './Container'
import LogoLink from './logo/LogoLink'
import AppLink from './shared/AppLink'
import VercelLogo from './shared/VercelLogo'

function FooterBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			as='footer'
			pt={60}
			pb={100}
			_dark={{
				bgColor: colors.gray.$950
			}}
			_light={{
				bgColor: colors.gray.$50
			}}
		>
			<Container>
				<Flex
					flexDir='row'
					justifyContent='space-between'
					gap={40}
					flexWrap='wrap-reverse'
				>
					{children}
				</Flex>
			</Container>
		</Box>
	)
}

function FooterLeftSide() {
	return (
		<Flex flexDir='column' gap={24}>
			<LogoLink />

			<Flex alignItems='center' gap={8}>
				<Text color={colors.gray.$400} _size='s' fontWeight={500}>
					Deployed on
				</Text>
				<VercelLogo />
			</Flex>
			<Flex alignItems='center' gap={4}>
				<Text color={colors.gray.$400} _size='s' fontWeight={500}>
					Built by
				</Text>

				<AppLink href={root.getOwnGithubLink()} target='_blank'>
					Ivan Blinov
				</AppLink>
			</Flex>
		</Flex>
	)
}

function FooterGridBox({ children }: { children: React.ReactNode }) {
	return (
		<Grid
			gridTemplateColumns='200px'
			gap={32}
			_sm={{
				gap: 16
			}}
			_md={{
				gridTemplateColumns: 'repeat(2, 200px)',
				gap: 0
			}}
		>
			{children}
		</Grid>
	)
}

function FooterGridBoxItem({ children }: { children: React.ReactNode }) {
	return <Flex flexDir='column'>{children}</Flex>
}

function FooterGrids() {
	return (
		<FooterGridBox>
			<FooterGridBoxItem>
				<Text fontWeight={500} _size='s'>
					Docs
				</Text>
				<Link href={root.getComponentsLink()}>
					<Text color={colors.gray.$300} fontWeight={500} _size='s'>
						Components
					</Text>
				</Link>
				<Link href={root.getInstallationLink()}>
					<Text color={colors.gray.$300} fontWeight={500} _size='s'>
						Getting Started
					</Text>
				</Link>
			</FooterGridBoxItem>
			<FooterGridBoxItem>
				<Text fontWeight={500} _size='s'>
					Socials
				</Text>
				<Link href={root.getGithubLink()} target='_blank'>
					<Text color={colors.gray.$300} fontWeight={500} _size='s'>
						GitHub
					</Text>
				</Link>
			</FooterGridBoxItem>
		</FooterGridBox>
	)
}

export default function Footer() {
	return (
		<FooterBox>
			<FooterLeftSide />
			<FooterGrids />
		</FooterBox>
	)
}
