import { root } from '@/lib/root'
import { Box, colors, Flex, Text } from '@merely-ui/react'
import Link from 'next/link'
import Container from '../Container'
import LogoLink from '../logo/LogoLink'
import DocsTabs from './docs-tabs/docs-tabs'
import { HeaderMobileNav, MobileSidebar } from './Header.client'
import SearchBar from './search-bar/SearchBar'
import ToggleTheme from './toggle-theme/ToggleTheme'

function HeaderBox({ children }: { children: React.ReactNode }) {
	return (
		<Box
			position='fixed'
			top={0}
			left={0}
			right={0}
			zIndex={1000}
			backdropFilter='blur(5px)'
			_dark={{
				bgColor: 'rgba(0, 0, 0, 0.5)'
			}}
			_light={{
				bgColor: 'rgba(255, 255, 255, 0.2)'
			}}
		>
			<Container>{children}</Container>
		</Box>
	)
}

function HeaderSubBox({ children }: { children: React.ReactNode }) {
	return (
		<Flex
			as='header'
			justifyContent='space-between'
			gap={24}
			alignItems='center'
			py={14}
		>
			{children}
		</Flex>
	)
}

function HeaderNav() {
	return (
		<Flex alignItems='center' gap={60}>
			<Box display='flex' alignItems='start' maxH={36}>
				<LogoLink />
			</Box>
			<Flex
				gap={24}
				alignItems='center'
				display='none'
				_md={{
					display: 'flex'
				}}
			>
				<Link href={root.getInstallationLink()}>
					<Text
						fontWeight={500}
						transition='all .1s ease'
						_hover={{
							textDecoration: 'underline',
							color: colors.gray.$100
						}}
					>
						Docs
					</Text>
				</Link>
				<Link href={root.getPlaygroundLink()}>
					<Text
						fontWeight={500}
						transition='all .1s ease'
						_hover={{
							textDecoration: 'underline',
							color: colors.gray.$100
						}}
					>
						Playground
					</Text>
				</Link>
			</Flex>
		</Flex>
	)
}

function HeaderRightSide() {
	return (
		<Flex
			alignItems='center'
			gap={8}
			_md={{
				gap: 36
			}}
		>
			<SearchBar />
			<ToggleTheme />
			<HeaderMobileNav />
		</Flex>
	)
}

export default function Header() {
	return (
		<HeaderBox>
			<HeaderSubBox>
				<HeaderNav />
				<HeaderRightSide />
			</HeaderSubBox>
			<DocsTabs />
			<MobileSidebar />
		</HeaderBox>
	)
}
